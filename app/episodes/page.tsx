import type { Metadata } from "next";
import { EpisodeCard } from "@/components/episode-card";
import { EPISODES } from "@/lib/episodes";

export const metadata: Metadata = {
  title: "Episodes",
  description:
    "Written in the Walls — the episode archive from Sacred Soul. A gothic dark romance in fragments.",
};

export default function EpisodesPage() {
  return (
    <div className="relative pt-32 md:pt-40">
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold/80 mb-5">
            Written in the Walls
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Episodes<br />
            <span className="italic text-white/70">as they were found.</span>
          </h1>
          <p className="mt-6 font-serif italic text-lg text-white/70 max-w-xl">
            A haunted serial unfolding across film, fragments, and the walls
            themselves. New chapters arrive when she lets them.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {EPISODES.map((ep) => (
            <div key={ep.id} id={ep.id} className="scroll-mt-32">
              <EpisodeCard episode={ep} />
            </div>
          ))}
        </div>

        <div className="mt-24 border-t border-white/10 pt-12 text-center">
          <p className="font-serif italic text-white/50">
            More chapters are being written.<br />
            Follow along on TikTok <span className="text-smoke">@sacredsoul</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
