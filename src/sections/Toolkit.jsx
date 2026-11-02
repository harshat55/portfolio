import { toolkit } from '../data/toolkit'
import RevealOnScroll from '../components/RevealOnScroll'
import SectionLabel from '../components/SectionLabel'

export default function Toolkit() {
  const toolRoles = {
    'Antigravity': 'AI Agentic Coding Platform',
    'Claude': 'Ideation, Logic & Prompt Architecture',
    'Canva': 'Visual Design, Presentations & Mockups',
    'Google Flow': 'Workflow & Automation Mapping',
    'VS Code': 'Primary Development Environment',
    'AI Image Gen': 'Concept Visuals & Art Direction'
  }

  const techRoles = {
    'HTML': 'Semantic Web Foundations',
    'CSS': 'Modern Layouts, Flex, Grid & Responsive UI',
    'JavaScript': 'ES6+ Logic, DOM Manipulation & React',
    'C': 'Computer Science Fundamentals & Memory Basics'
  }

  return (
    <section id="toolkit" className="relative section-padding section-gap border-t border-[#1C1E21] studio-grid-bg bg-[#08090A]/40 backdrop-blur-[1px]">
      <div className="max-content">
        <RevealOnScroll>
          <SectionLabel number="04" label="TOOLKIT & PROFICIENCY" />
        </RevealOnScroll>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <RevealOnScroll delay={0.1}>
            <h2 className="display-title text-[clamp(2.2rem,5vw,4.5rem)] text-[var(--color-text-primary)]">
              TOOLS &<br />
              <span className="text-[var(--color-accent)]">TECHNOLOGIES.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="font-body text-sm md:text-base text-[var(--color-text-secondary)] max-w-[420px] leading-relaxed">
              An honest, transparent view of the software, AI systems, and technical fundamentals I work with daily.
            </p>
          </RevealOnScroll>
        </div>

        {/* AI & Design Tools */}
        <div className="mb-14">
          <RevealOnScroll delay={0.15}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
              <span className="label-mono text-[11px] text-[var(--color-text-primary)] tracking-widest uppercase">
                TOOLS & AI PLATFORMS
              </span>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {toolkit.tools.map((t, idx) => (
              <RevealOnScroll key={t.name} delay={0.1 + idx * 0.04}>
                <div className="group p-5 sm:p-6 bg-[#0E1012]/90 backdrop-blur-md border border-[#1E2226] hover:border-[var(--color-accent)]/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-headline font-bold text-lg text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      {t.name}
                    </h3>
                    <span className="label-mono text-[9px] px-2 py-0.5 bg-[#14171A] border border-[#222528] text-[var(--color-text-muted)]">
                      TOOL
                    </span>
                  </div>
                  <p className="font-body text-xs text-[var(--color-text-secondary)]">
                    {toolRoles[t.name] || 'Creative workflow utility'}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Technologies & Code Fundamentals */}
        <div>
          <RevealOnScroll delay={0.15}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 bg-[#5B9CF5]" />
              <span className="label-mono text-[11px] text-[var(--color-text-primary)] tracking-widest uppercase">
                CODE & COMPUTING FUNDAMENTALS
              </span>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {toolkit.technologies.map((tech, idx) => (
              <RevealOnScroll key={tech.name} delay={0.1 + idx * 0.04}>
                <div className="group p-5 sm:p-6 bg-[#0E1012]/90 backdrop-blur-md border border-[#1E2226] hover:border-[#5B9CF5]/40 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-headline font-bold text-lg text-[var(--color-text-primary)] group-hover:text-[#5B9CF5] transition-colors">
                      {tech.name}
                    </h3>
                    {tech.note && (
                      <span className="label-mono text-[9px] text-[var(--color-accent)] font-semibold">
                        {tech.note}
                      </span>
                    )}
                  </div>
                  <p className="font-body text-xs text-[var(--color-text-secondary)]">
                    {techRoles[tech.name] || 'Technical foundation'}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Humility & Transparency Note */}
        <RevealOnScroll delay={0.3}>
          <div className="mt-12 p-5 bg-[#0C0E10] border border-[#1A1D20] flex items-start gap-4">
            <span className="label-mono text-base text-[var(--color-accent)]">ℹ</span>
            <p className="font-body text-xs text-[var(--color-text-muted)] leading-relaxed">
              <strong className="text-[var(--color-text-secondary)] font-medium">Clear Position:</strong> I do not claim to be a senior software architect. My strength lies in combining AI tooling, creative instincts, and technical fundamentals to test ideas and build functional digital products fast.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
