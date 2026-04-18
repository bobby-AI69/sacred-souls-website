import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PRINTS } from "@/lib/prints";

export const runtime = "nodejs";

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(key, { apiVersion: "2024-09-30.acacia" });
}

function getSiteUrl(req: Request): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return configured.replace(/\/$/, "");
  const url = new URL(req.url);
  return `${url.protocol}//${url.host}`;
}

export async function POST(req: Request) {
  let body: { printId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const print = PRINTS.find((p) => p.id === body.printId);
  if (!print) {
    return NextResponse.json({ error: "Unknown print" }, { status: 404 });
  }

  let stripe: Stripe;
  try {
    stripe = getStripe();
  } catch (err) {
    return NextResponse.json(
      {
        error:
          err instanceof Error
            ? err.message
            : "Stripe is not configured on this server.",
      },
      { status: 500 }
    );
  }

  const siteUrl = getSiteUrl(req);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "aud",
            unit_amount: print.priceAUD * 100,
            product_data: {
              name: print.title,
              description: print.description,
              metadata: { printId: print.id },
            },
          },
          quantity: 1,
        },
      ],
      metadata: { printId: print.id },
      success_url: `${siteUrl}/prints/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/prints/cancel`,
      // Collect email so a download link can be delivered after payment.
      customer_creation: "always",
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    return NextResponse.json(
      {
        error:
          err instanceof Error ? err.message : "Failed to create checkout session",
      },
      { status: 500 }
    );
  }
}
