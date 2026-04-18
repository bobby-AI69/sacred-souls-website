export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-white/50">
        <p className="font-serif italic text-sm text-white/60">
          she was there. and then she wasn&rsquo;t.
        </p>
        <div className="flex items-center gap-6 uppercase tracking-[0.28em]">
          <span>© {new Date().getFullYear()} Sacred Soul</span>
          <a
            href="https://www.tiktok.com/@sacredsoul"
            className="hover:text-smoke transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}
