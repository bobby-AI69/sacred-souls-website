import Link from "next/link";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl tracking-ritual text-white/90 hover:text-white transition"
        >
          SACRED&nbsp;SOUL
        </Link>
        <nav className="flex items-center gap-6 md:gap-10 text-[11px] uppercase tracking-[0.28em] text-white/70">
          <Link href="/episodes" className="hover:text-smoke transition-colors">
            Episodes
          </Link>
          <Link href="/prints" className="hover:text-smoke transition-colors">
            Prints
          </Link>
        </nav>
      </div>
    </header>
  );
}
