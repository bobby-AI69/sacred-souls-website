import Link from "next/link";
import type { Episode } from "@/lib/episodes";

export function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <Link
      href={`/episodes#${episode.id}`}
      className="group relative block aspect-[3/4] overflow-hidden border border-white/10 bg-obsidian transition hover:border-smoke/60"
    >
      {/* Poster gradient placeholder — swap for real artwork later */}
      <div
        className="absolute inset-0 transition duration-700 group-hover:scale-[1.04]"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(232,164,160,0.35), transparent 55%), radial-gradient(ellipse at 80% 90%, rgba(92,26,27,0.6), transparent 60%), linear-gradient(180deg, #141012 0%, #050505 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-transparent" />

      <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.4em] text-gold/80">
        {episode.number}
      </div>

      {episode.status === "coming" && (
        <div className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.3em] text-smoke/80">
          coming soon
        </div>
      )}

      <div className="absolute inset-x-6 bottom-6">
        <h3 className="font-serif text-2xl md:text-3xl leading-tight text-white">
          {episode.title}
        </h3>
        <p className="mt-2 font-serif italic text-sm text-white/60 max-w-xs">
          {episode.blurb}
        </p>
        <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.38em] text-white/60 transition group-hover:text-smoke">
          Watch
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
