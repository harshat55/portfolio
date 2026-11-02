import { useRef } from 'react'
import RevealOnScroll from './RevealOnScroll'

export default function Hero() {
  const heroRef = useRef(null)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const tickerItems = [
    'AI-ASSISTED CREATION',
    'DIGITAL PRODUCT DESIGN',
    'INTERACTIVE 3D & WEBGL',
    'CREATIVE DIRECTION',
    'MUSIC & RAP LYRICISM',
    'SPECULATIVE PROTOTYPES',
  ]

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden studio-grid-bg pt-[90px]"
    >
      {/* Subtle Studio Lighting Vignette — tuned to preserve 3D brilliance & contrast */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[180px] bg-gradient-to-b from-[#08090A] via-[#08090A]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[220px] bg-gradient-to-t from-[#08090A] via-[#08090A]/60 to-transparent" />
        {/* Soft left-hand and mobile vignette for typography readability */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[65%] bg-gradient-to-r from-[#08090A]/95 via-[#08090A]/60 sm:via-[#08090A]/45 to-transparent" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-[2] section-padding max-content w-full flex-1 flex flex-col justify-center py-12 md:py-20">
        <div className="max-w-[820px]">
          {/* Micro Telemetry Bar */}
          <RevealOnScroll delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-[var(--color-accent)] inline-block" />
              <span className="label-mono text-[10px] text-[var(--color-accent)] tracking-widest">
                PORTFOLIO EDITION // 2026
              </span>
              <span className="text-[var(--color-text-muted)] text-[10px] font-mono">/</span>
              <span className="label-mono text-[10px] text-[var(--color-text-secondary)] tracking-widest hidden sm:inline">
                NEW DELHI, INDIA
              </span>
            </div>
          </RevealOnScroll>

          {/* Monumental Headline */}
          <RevealOnScroll delay={0.2}>
            <h1 className="display-title text-[clamp(2.1rem,6.8vw,6.4rem)] leading-[0.94] break-words text-[var(--color-text-primary)] mb-6 sm:mb-8">
              <span className="block">I TURN IDEAS</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-text-primary)] via-[var(--color-text-primary)] to-[var(--color-accent)]">
                INTO DIGITAL
              </span>
              <span className="block">EXPERIENCES.</span>
            </h1>
          </RevealOnScroll>

          {/* Subtitle Statement */}
          <RevealOnScroll delay={0.35}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10 pl-1 border-l-2 border-[var(--color-accent)]">
              <p className="font-body text-sm sm:text-base md:text-lg text-[var(--color-text-secondary)] max-w-[500px] leading-relaxed">
                Creative Technologist exploring the friction and fusion between <strong className="text-[var(--color-text-primary)] font-medium">artificial intelligence</strong>, <strong className="text-[var(--color-text-primary)] font-medium">digital product design</strong>, and <strong className="text-[var(--color-text-primary)] font-medium">modern web engineering</strong>.
              </p>
            </div>
          </RevealOnScroll>

          {/* CTAs */}
          <RevealOnScroll delay={0.5}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('work')}
                className="btn-primary w-full sm:w-auto text-center justify-center"
              >
                EXPLORE WORK
                <span className="font-mono text-[11px]">↓</span>
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-secondary w-full sm:w-auto text-center justify-center"
              >
                LET'S CONNECT
                <span className="font-mono text-[11px]">↗</span>
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Bottom Telemetry Strip + Continuous Marquee */}
      <div className="relative z-[2] border-t border-[#1E2124] bg-[#08090A]/85 backdrop-blur-md">
        <div className="section-padding max-content py-3 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono text-[var(--color-text-muted)] border-b border-[#141618]">
          <div className="flex items-center gap-6">
            <span>SYS // VER 2.6</span>
            <span>MODEL // ARGON SCULPTURE</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[var(--color-accent)]">• LIVE 3D WEBGL</span>
            <span>DRAG / SCROLL TO ORBIT</span>
          </div>
        </div>

        {/* Infinite Running Marquee */}
        <div className="overflow-hidden py-3 border-b border-[#181A1D]">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-[11px] font-mono tracking-widest text-[var(--color-text-secondary)] uppercase">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span>{item}</span>
                <span className="text-[var(--color-accent)]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
