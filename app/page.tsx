import Link from "next/link";
import { Hero } from "@/components/hero";
import { EpisodeCard } from "@/components/episode-card";
import { TikTokViral } from "@/components/tiktok-viral";
import { EPISODES } from "@/lib/episodes";

export default function Home() {
  return (
    <>
      <Hero />

      <TikTokViral />

      <section className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold/80 mb-4">
              Written in the Walls
            </p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight tracking-tight">
              A house. A ghost.<br />
              <span className="italic text-white/70">A name that keeps rewriting itself.</span>
            </h2>
          </div>
          <Link
            href="/episodes"
            className="shrink-0 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-white/70 hover:text-smoke transition"
          >
            All episodes
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EPISODES.map((ep) => (
            <EpisodeCard key={ep.id} episode={ep} />
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-32 text-center">
        <p className="font-serif italic text-2xl md:text-4xl leading-relaxed text-white/80">
          &ldquo;Some loves do not end.<br />
          They only move deeper into the walls.&rdquo;
        </p>
        <div className="mt-12">
          <Link
            href="/prints"
            className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.4em] text-white/90 hover:border-gold hover:text-gold transition"
          >
            Collect the Prints
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
