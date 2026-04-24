"use client";

import { useState } from "react";
import Image from "next/image";
import type { Print } from "@/lib/prints";

const AUD = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  maximumFractionDigits: 0,
});

export function PrintCard({ print }: { print: Print }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function buy() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ printId: print.id }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Checkout failed");
      }
      const { url } = (await res.json()) as { url: string };
      if (url) window.location.href = url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <article className="group flex flex-col border border-white/10 bg-obsidian transition hover:border-smoke/50">
      <div className="relative aspect-[3/4] overflow-hidden">
        {print.image ? (
          <Image
            src={print.image}
            alt={print.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0 transition duration-700 group-hover:scale-[1.04]"
            style={{ background: print.palette }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
        <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.4em] text-gold/80">
          {print.subtitle}
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6 md:p-7">
        <div>
          <h3 className="font-serif text-2xl md:text-[1.75rem] leading-tight">
            {print.title}
          </h3>
          <p className="mt-2 font-serif italic text-sm text-white/60">
            {print.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="font-serif text-xl text-gold">
            {AUD.format(print.priceAUD)}
          </span>
          <button
            type="button"
            onClick={buy}
            disabled={loading}
            className="inline-flex items-center gap-2 border border-white/25 px-5 py-3 text-[10px] uppercase tracking-[0.38em] text-white/90 transition hover:border-smoke hover:text-smoke disabled:opacity-50 disabled:cursor-wait"
          >
            {loading ? "Summoning…" : "Download"}
            <span aria-hidden>→</span>
          </button>
        </div>

        {error && (
          <p className="text-xs text-smoke/90 font-serif italic">{error}</p>
        )}
      </div>
    </article>
  );
}
