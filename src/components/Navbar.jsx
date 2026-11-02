import { useState, useEffect } from 'react'
import { availability } from '../data/socialLinks'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })

    const updateTime = () => {
      const now = new Date()
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      setTime(`${istTime} IST`)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(timer)
    }
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { label: 'Work', id: 'work', num: '01' },
    { label: 'About', id: 'about', num: '02' },
    { label: 'Capabilities', id: 'capabilities', num: '03' },
    { label: 'Experiments', id: 'experiments', num: '04' },
    { label: 'Contact', id: 'contact', num: '05' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#08090A]/90 backdrop-blur-md border-[#222528]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="section-padding max-content flex items-center justify-between h-[76px]">
        {/* Brand Lockup */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-left group cursor-pointer"
          >
            <span className="font-headline font-bold text-[15px] tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors block">
              HARSHIT GHALOT
            </span>
            <span className="label-mono text-[9px] text-[var(--color-text-secondary)] tracking-widest block">
              CREATIVE TECHNOLOGIST
            </span>
          </button>

          {/* Precision Telemetry Badge (Desktop) */}
          <div className="hidden xl:flex items-center gap-3 pl-6 border-l border-[#222528] text-[10px] font-mono text-[var(--color-text-muted)]">
            <span>28.6139° N, 77.2090° E</span>
            <span>•</span>
            <span className="text-[var(--color-text-secondary)]">{time}</span>
          </div>
        </div>

        {/* Center / Right Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="group label-mono text-[11px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer py-1"
            >
              <span className="text-[var(--color-accent)] mr-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                {link.num}
              </span>
              {link.label.toUpperCase()}
            </button>
          ))}
        </nav>

        {/* Right Status + Hamburger */}
        <div className="flex items-center gap-5">
          {availability.active && (
            <div className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 border border-[#222528] bg-[#0F1113]/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]" />
              </span>
              <span className="label-mono text-[9px] text-[var(--color-text-primary)]">
                {availability.status.toUpperCase()}
              </span>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 border border-[#222528] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] transition-colors"
            aria-label="Toggle Navigation"
          >
            <span className="label-mono text-[11px]">
              {menuOpen ? '[ CLOSE ]' : '[ MENU ]'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[#222528] bg-[#08090A]/95 backdrop-blur-xl section-padding py-6 space-y-3 max-h-[calc(100dvh-76px)] overflow-y-auto">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="flex items-center justify-between w-full min-h-[44px] py-3 border-b border-[#181A1D] text-left label-mono text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] active:text-[var(--color-accent)]"
            >
              <span>{link.label.toUpperCase()}</span>
              <span className="text-[var(--color-accent)]">{link.num}</span>
            </button>
          ))}
          <div className="pt-4 flex justify-between items-center text-[10px] font-mono text-[var(--color-text-muted)]">
            <span>NEW DELHI // {time}</span>
            <span className="text-[var(--color-accent)]">AVAILABLE 2026</span>
          </div>
        </div>
      )}
    </header>
  )
}
