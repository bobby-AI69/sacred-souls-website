import Link from "next/link";
import type { Metadata } from "next";
import Stripe from "stripe";
import { PRINTS } from "@/lib/prints";

export const metadata: Metadata = {
  title: "Thank you — Sacred Soul",
  description: "Your download is ready.",
};

async function getSession(sessionId: string) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  try {
    const stripe = new Stripe(key, { apiVersion: "2025-02-24.acacia" });
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return session;
  } catch {
    return null;
  }
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const sessionId = searchParams.session_id ?? "";
  const session = sessionId ? await getSession(sessionId) : null;
  const paid = session?.payment_status === "paid";
  const printId = session?.metadata?.printId ?? "";
  const print = PRINTS.find((p) => p.id === printId);

  return (
    <section className="min-h-[100svh] flex items-center justify-center px-6 text-center">
      <div className="max-w-xl">
        {paid && print ? (
          <>
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold/80 mb-6">
              It&apos;s yours now
            </p>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight">
              {print.title}
            </h1>
            <p className="mt-6 font-serif italic text-lg text-white/70">
              Your print is ready. Download it below — print at any A-series
              size. It&apos;s yours forever.
            </p>
            {print.image ? (
              <a
                href={print.image}
                download
                className="mt-10 inline-flex items-center gap-3 border border-gold/60 px-8 py-4 text-[11px] uppercase tracking-[0.4em] text-gold hover:border-gold hover:bg-gold/10 transition"
              >
                Download your print
                <span aria-hidden>↓</span>
              </a>
            ) : (
              <p className="mt-8 font-serif italic text-white/50 text-sm">
                A download link has been sent to your email.
              </p>
            )}
            <p className="mt-8 font-serif italic text-sm text-white/40">
              Receipt sent to your email. Any issues &mdash; DM us on TikTok.
            </p>
          </>
        ) : (
          <>
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold/80 mb-6">
              The door is open
            </p>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight">
              Thank you.
            </h1>
            <p className="mt-6 font-serif italic text-lg text-white/70">
              Your download link has been sent to your inbox. Check your spam if
              it doesn&apos;t arrive &mdash; sometimes the ghosts hide there too.
            </p>
          </>
        )}
        <Link
          href="/prints"
          className="mt-10 inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-[11px] uppercase tracking-[0.4em] text-white/90 hover:border-smoke hover:text-smoke transition"
        >
          See more prints
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
