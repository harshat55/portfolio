import { capabilities } from '../data/capabilities'
import RevealOnScroll from '../components/RevealOnScroll'
import SectionLabel from '../components/SectionLabel'

export default function Capabilities() {
  const deliverableMap = {
    '01': ['Prompt Engineering', 'Rapid AI Prototyping', 'Interactive Web Scaffolds', 'API Integrations'],
    '02': ['User Flow Mapping', 'Accessible Healthcare UX', 'Interactive Prototypes', 'Design Systems'],
    '03': ['Moodboards & World-Building', 'AI Generative Imagery', 'Pacing & Art Direction', 'Brand Strategy'],
    '04': ['Responsive Web Design', 'WebGL 3D Integrations', 'Editorial Layouts', 'Digital Identity Systems']
  }

  return (
    <section id="capabilities" className="section-padding section-gap border-t border-[#1C1E21] studio-grid-bg">
      <div className="max-content">
        <RevealOnScroll>
          <SectionLabel number="03" label="CAPABILITIES" />
        </RevealOnScroll>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <RevealOnScroll delay={0.1}>
            <h2 className="display-title text-[clamp(2.2rem,5vw,4.5rem)] text-[var(--color-text-primary)]">
              WHAT I BRING TO<br />
              <span className="text-[var(--color-accent)]">THE TABLE.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="font-body text-sm md:text-base text-[var(--color-text-secondary)] max-w-[420px] leading-relaxed">
              Four complementary capabilities combining conceptual thinking, user empathy, modern AI tools, and technical execution.
            </p>
          </RevealOnScroll>
        </div>

        {/* Precision Capabilities Table */}
        <div className="border-t border-[#222528]">
          {capabilities.map((cap, i) => (
            <RevealOnScroll key={cap.number} delay={i * 0.1}>
              <div className="group py-8 sm:py-10 md:py-14 border-b border-[#222528] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start hover:bg-[#0D0F11]/60 transition-colors">
                {/* Index */}
                <div className="lg:col-span-1">
                  <span className="font-mono text-base font-bold text-[var(--color-accent)]">
                    {cap.number}
                  </span>
                </div>

                {/* Capability Title */}
                <div className="lg:col-span-4">
                  <h3 className="section-title text-[clamp(1.4rem,2.2vw,2rem)] text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                    {cap.title}
                  </h3>
                  <span className="label-mono text-[9px] text-[var(--color-text-muted)] tracking-widest block uppercase">
                    SYSTEM // CORE PRACTICE
                  </span>
                </div>

                {/* Description */}
                <div className="lg:col-span-4">
                  <p className="font-body text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {cap.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {deliverableMap[cap.number]?.map((deliv) => (
                      <span
                        key={deliv}
                        className="label-mono text-[9px] px-2.5 py-1 bg-[#121417] border border-[#202327] text-[var(--color-text-muted)]"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="lg:col-span-3 flex lg:justify-end">
                  <div className="flex flex-wrap lg:justify-end gap-1.5">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="label-mono text-[10px] text-[var(--color-accent)] px-2 py-0.5 border border-[#242E18] bg-[#12180C]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
