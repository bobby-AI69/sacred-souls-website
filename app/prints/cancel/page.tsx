import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "No purchase",
  description: "Checkout cancelled.",
};

export default function CancelPage() {
  return (
    <section className="min-h-[100svh] flex items-center justify-center px-6 text-center">
      <div className="max-w-xl">
        <h1 className="font-serif text-5xl md:text-6xl leading-tight">
          Nothing was taken.
        </h1>
        <p className="mt-6 font-serif italic text-lg text-white/70">
          You stepped back from the door. The print is still here when
          you&rsquo;re ready.
        </p>
        <Link
          href="/prints"
          className="mt-10 inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-[11px] uppercase tracking-[0.4em] text-white/90 hover:border-smoke hover:text-smoke transition"
        >
          Return to prints
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
