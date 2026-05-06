import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PRINTS } from "@/lib/prints";

export const runtime = "nodejs";

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(key, { apiVersion: "2025-02-24.acacia" });
}

function getSiteUrl(req: Request): string {
  const configured = process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return configured.replace(/\/$/, "");
  // Derive from the incoming request URL as fallback
  try {
    const url = new URL(req.url);
    return `${url.protocol}//${url.host}`;
  } catch {
    return "https://sacred-souls.com.au";
  }
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

  const siteUrl = "https://sacred-souls.com.au";

  // Debug: log what we're about to send
  console.log("[checkout] siteUrl:", siteUrl);
  console.log("[checkout] success_url:", `${siteUrl}/prints/success?session_id={CHECKOUT_SESSION_ID}`);
  console.log("[checkout] stripe key prefix:", process.env.STRIPE_SECRET_KEY?.slice(0, 12));

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
      customer_creation: "always",
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to create checkout session";
    console.error("[checkout] error:", message, err);
    return NextResponse.json(
      { error: message, siteUrl, keyPrefix: process.env.STRIPE_SECRET_KEY?.slice(0, 12) },
      { status: 500 }
    );
  }
}
