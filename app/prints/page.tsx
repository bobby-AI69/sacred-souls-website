import type { Metadata } from "next";
import { PrintCard } from "@/components/print-card";
import { PRINTS } from "@/lib/prints";

export const metadata: Metadata = {
  title: "Prints",
  description:
    "Digital prints from the Sacred Soul universe — gothic, haunted, and meant for your walls.",
};

export default function PrintsPage() {
  return (
    <div className="relative pt-32 md:pt-40">
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold/80 mb-5">
            The Print Room
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Hang her ghost<br />
            <span className="italic text-white/70">on your wall.</span>
          </h1>
          <p className="mt-6 font-serif italic text-lg text-white/70 max-w-xl">
            Limited digital prints from Sacred Soul&rsquo;s film work. Download
            instantly — print at any A-series size. All prices in AUD.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PRINTS.map((print) => (
            <PrintCard key={print.id} print={print} />
          ))}
        </div>

        <p className="mt-16 text-center font-serif italic text-sm text-white/40">
          After purchase, a private download link is delivered to your inbox.
        </p>
      </section>
    </div>
  );
}
