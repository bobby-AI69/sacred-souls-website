import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your download is on its way.",
};

export default function SuccessPage() {
  return (
    <section className="min-h-[100svh] flex items-center justify-center px-6 text-center">
      <div className="max-w-xl">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gold/80 mb-6">
          The door is open
        </p>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight">
          Thank you.
        </h1>
        <p className="mt-6 font-serif italic text-lg text-white/70">
          Your download link has been sent to your inbox. If the email
          doesn&rsquo;t arrive, check your spam — sometimes the ghosts hide
          there too.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-[11px] uppercase tracking-[0.4em] text-white/90 hover:border-smoke hover:text-smoke transition"
        >
          Back to the beginning
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
