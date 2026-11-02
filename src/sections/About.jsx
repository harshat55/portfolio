import RevealOnScroll from '../components/RevealOnScroll'
import SectionLabel from '../components/SectionLabel'

export default function About() {
  const interests = [
    { label: 'Artificial Intelligence', desc: 'LLM agents, multimodal interfaces, synthetic generation' },
    { label: 'Web Design & Engineering', desc: 'Responsive systems, spatial 3D WebGL, editorial layouts' },
    { label: 'Digital Products', desc: 'Solving real accessibility hurdles, patient journeys' },
    { label: 'Visual Storytelling', desc: 'Atmospheric brand worlds, cinematic pacing, narrative' },
    { label: 'Music & Rap Lyricism', desc: 'Cadence, rhythm, beat structure, poetic expression' },
    { label: 'Experimental Tech', desc: 'Questioning defaults, rapid tactile prototyping' },
  ]

  return (
    <section id="about" className="relative section-padding section-gap border-t border-[#1C1E21] studio-grid-bg bg-[#08090A]/40 backdrop-blur-[1px]">
      <div className="max-content">
        <RevealOnScroll>
          <SectionLabel number="02" label="PROFILE & MANIFESTO" />
        </RevealOnScroll>

        {/* Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-6">
            <RevealOnScroll delay={0.1}>
              <h2 className="display-title text-[clamp(2.4rem,5.5vw,4.8rem)] text-[var(--color-text-primary)]">
                CURIOUS BY<br />NATURE.<br />
                <span className="text-[var(--color-accent)]">CREATIVE BY</span><br />
                DESIGN.
              </h2>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <RevealOnScroll delay={0.2}>
              <p className="font-body text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                I'm <strong className="text-[var(--color-text-primary)] font-medium">Harshit Ghalot</strong> — an independent creative technologist exploring what happens when artificial intelligence, visual communication, and web technology converge.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <p className="font-body text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                Rather than treating technology as just code or design as just decoration, I look for the space where they enhance each other. My work is driven by curiosity, honest craftsmanship, and a genuine ambition to turn rough ideas into digital experiences that actually mean something.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <div className="p-5 border border-[#222528] bg-[#0F1114] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div>
                  <span className="text-[var(--color-text-muted)] block text-[10px]">CURRENT PURSUIT</span>
                  <span className="text-[var(--color-accent)] font-semibold">AI-ASSISTED PRODUCT CREATION</span>
                </div>
                <div>
                  <span className="text-[var(--color-text-muted)] block text-[10px]">CREATIVE OUTLET</span>
                  <span className="text-[var(--color-text-primary)]">RAP LYRICISM & BEAT PACING</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Interest Dossier Grid */}
        <RevealOnScroll delay={0.2}>
          <div className="border-t border-[#1E2124] pt-12">
            <span className="label-mono text-[10px] text-[var(--color-text-muted)] tracking-widest block mb-8 uppercase">
              INTEREST MAP & DISCIPLINE SPECTRUM
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {interests.map((item, i) => (
                <div
                  key={item.label}
                  className="p-5 sm:p-6 bg-[#0E1012]/90 backdrop-blur-md border border-[#1E2226] hover:border-[var(--color-accent)]/40 transition-colors"
                >
                  <span className="font-mono text-[10px] text-[var(--color-accent)] block mb-3">
                    0{i + 1} //
                  </span>
                  <h3 className="font-headline font-semibold text-lg text-[var(--color-text-primary)] mb-2">
                    {item.label}
                  </h3>
                  <p className="font-body text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
