import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden grain">
      {/* Hero image — swap src for TikTok clip or a new MJ image */}
      <Image
        src="/renderedsoulschains1.png"
        alt="Sacred Soul"
        fill
        priority
        className="object-cover object-top"
        sizes="100vw"
      />

      {/* Dark base wash */}
      <div className="absolute inset-0 bg-obsidian/55" />

      {/* Pink / coral smoke */}
      <div className="smoke-overlay animate-drift" />

      {/* Cinematic vignette */}
      <div className="vignette" />

      {/* Text */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-8 text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-white/60 animate-fadeUp">
          A surrealist gothic dark romance
        </p>

        <h1 className="font-serif text-white text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-none tracking-ritual animate-fadeUp">
          SACRED<span className="text-smoke">·</span>SOUL
        </h1>

        <p className="mt-8 font-serif italic text-lg md:text-xl text-white/80 animate-fadeUp">
          she was there. and then she wasn&rsquo;t.
        </p>

        <Link
          href="/prints"
          className="group mt-12 inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-[11px] uppercase tracking-[0.4em] text-white/90 backdrop-blur-sm transition hover:border-smoke hover:text-smoke animate-fadeUp"
        >
          Enter the World
          <span
            aria-hidden
            className="inline-block transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-white/40">
        scroll
      </div>
    </section>
  );
}
