export default function Footer() {
  return (
    <footer className="relative z-10 section-padding py-10 border-t border-[#1C1E21] bg-[#070809]/80 backdrop-blur-md">
      <div className="max-content flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono text-[var(--color-text-muted)]">
        <div className="flex items-center gap-4">
          <span className="text-[var(--color-text-primary)] font-semibold">HARSHIT GHALOT</span>
          <span>© 2026</span>
          <span>•</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>

        <div className="flex items-center gap-6">
          <span>PORTFOLIO v2.6</span>
          <span className="text-[var(--color-accent)]">DESIGNED WITH CURIOSITY</span>
          <span>NEW DELHI, IN</span>
        </div>
      </div>
    </footer>
  )
}
