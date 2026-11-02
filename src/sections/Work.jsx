import { useState, useEffect } from 'react'
import { projects } from '../data/projects'
import RevealOnScroll from '../components/RevealOnScroll'
import SectionLabel from '../components/SectionLabel'

/* ============================================================
   Bespoke Art-Directed Interactive Visual Cards for Projects
   ============================================================ */
function ProjectVisualPreview({ projectId, _color }) {
  if (projectId === 'mindcare') {
    return (
      <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#0D1117] via-[#0A0D10] to-[#08090A] border border-[#222528] relative overflow-hidden group-hover:border-[var(--color-accent)]/50 transition-colors">
        {/* Top Telemetry */}
        <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-secondary)]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C7FF48] animate-pulse" />
            AI VOICE AGENT ACTIVE
          </span>
          <span className="text-[#C7FF48]">COGNITIVE CARE</span>
        </div>

        {/* Central Simulated Waveform & Patient HUD */}
        <div className="my-6 space-y-4">
          <div className="p-4 bg-[#12151A] border border-[#242A30] flex items-center justify-between">
            <div>
              <span className="label-mono text-[9px] text-[var(--color-text-muted)] block">PATIENT SESSION</span>
              <span className="font-headline font-semibold text-sm text-[var(--color-text-primary)]">Voice Orientation #42</span>
            </div>
            <div className="flex items-end gap-1 h-6">
              {[12, 24, 16, 28, 20, 10, 24, 18, 14, 26, 8].map((h, i) => (
                <span
                  key={i}
                  className="w-1 bg-[#C7FF48]"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
            <div className="p-2.5 bg-[#0e1115] border border-[#1e2329]">
              <span className="text-[var(--color-text-muted)] block">LANGUAGE:</span>
              <span className="text-[var(--color-text-primary)]">HINDI / ENG MULTI</span>
            </div>
            <div className="p-2.5 bg-[#0e1115] border border-[#1e2329]">
              <span className="text-[var(--color-text-muted)] block">CAREGIVER:</span>
              <span className="text-[#C7FF48]">SYNCED (SMS + APP)</span>
            </div>
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="flex justify-between items-center text-[9px] font-mono text-[var(--color-text-muted)] border-t border-[#1a1f26] pt-3">
          <span>AI HEALTHCARE CONCEPT</span>
          <span>HUMAN-CENTERED DESIGN</span>
        </div>
      </div>
    )
  }

  if (projectId === 'sehatsetu') {
    return (
      <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#0c121a] via-[#090d13] to-[#08090A] border border-[#222528] relative overflow-hidden group-hover:border-[#5B9CF5]/50 transition-colors">
        {/* Top Header */}
        <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-secondary)]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#5B9CF5] animate-pulse" />
            TOKEN DISPATCH NETWORK
          </span>
          <span className="text-[#5B9CF5]">PUBLIC HEALTH</span>
        </div>

        {/* Central Hospital Queue Token HUD */}
        <div className="my-6 space-y-3">
          <div className="p-4 bg-[#111722] border border-[#1d2738] flex items-center justify-between">
            <div>
              <span className="label-mono text-[9px] text-[#5B9CF5]">CIVIL HOSPITAL PORTAL</span>
              <span className="font-headline font-bold text-2xl text-[var(--color-text-primary)] block">TOKEN #A-108</span>
            </div>
            <div className="text-right font-mono text-[10px]">
              <span className="text-[var(--color-text-muted)] block">WAIT TIME</span>
              <span className="text-[#5B9CF5] font-bold">~14 MIN</span>
            </div>
          </div>

          <div className="p-3 bg-[#0d131d] border border-[#17202d] flex items-center justify-between text-[10px] font-mono">
            <span className="text-[var(--color-text-secondary)]">SMS ALERTS (FEATURE PHONE READY)</span>
            <span className="text-[var(--color-accent)]">ENABLED ✓</span>
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="flex justify-between items-center text-[9px] font-mono text-[var(--color-text-muted)] border-t border-[#18202c] pt-3">
          <span>ACCESSIBLE INTERFACES</span>
          <span>TIER 2/3 REACH</span>
        </div>
      </div>
    )
  }

  // Aureon
  return (
    <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#16120b] via-[#100d08] to-[#08090A] border border-[#222528] relative overflow-hidden group-hover:border-[#F5A623]/50 transition-colors">
      {/* Top Header */}
      <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-secondary)]">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
          SPATIAL SHOWCASE
        </span>
        <span className="text-[#F5A623]">ESTATE 03 // 2024</span>
      </div>

      {/* Central Visual Presentation */}
      <div className="my-6 space-y-3">
        <div className="p-4 bg-[#1a140c] border border-[#2c2012]">
          <div className="flex justify-between items-start mb-2">
            <span className="label-mono text-[9px] text-[#F5A623]">AUREON DIGITAL IDENTITY</span>
            <span className="font-mono text-[9px] text-[var(--color-text-muted)]">34.05° N</span>
          </div>
          <span className="font-headline font-semibold text-lg text-[var(--color-text-primary)] block">
            The Obsidian Pavilion
          </span>
          <span className="font-mono text-[10px] text-[var(--color-text-secondary)] block mt-1">
            AI-Synthesized Architectural Imagery & Brand Narrative
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-[9px] font-mono">
          <div className="p-2 bg-[#120f09] border border-[#20180d] text-[#F5A623]">AI RENDERS</div>
          <div className="p-2 bg-[#120f09] border border-[#20180d] text-[var(--color-text-secondary)]">IDENTITY</div>
          <div className="p-2 bg-[#120f09] border border-[#20180d] text-[var(--color-text-secondary)]">STORYTELLING</div>
        </div>
      </div>

      {/* Bottom Tag */}
      <div className="flex justify-between items-center text-[9px] font-mono text-[var(--color-text-muted)] border-t border-[#22180d] pt-3">
        <span>REAL ESTATE BRANDING</span>
        <span>DIGITAL DISCOVERY</span>
      </div>
    </div>
  )
}

/* ============================================================
   Case Study Modal
   ============================================================ */
function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!project) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-xl transition-all"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0C0E10] border border-[#2B2F34] p-4 sm:p-6 md:p-12 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#202428] mb-8">
          <div className="flex items-center gap-4">
            <span className="label-mono text-[12px] text-[var(--color-accent)] font-bold">
              {project.number}
            </span>
            <span className="text-[var(--color-border)]">/</span>
            <span className="label-mono text-[11px] text-[var(--color-text-secondary)]">
              ARCHIVED CONCEPT // {project.year}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="label-mono text-[11px] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] p-2 transition-colors cursor-pointer"
          >
            [CLOSE ×]
          </button>
        </div>

        {/* Project Header Banner */}
        <div className="mb-8">
          <span className="label-mono text-[11px] text-[var(--color-accent)] tracking-widest block mb-3">
            {project.category}
          </span>
          <h2 className="display-title text-[clamp(2.4rem,4.5vw,3.8rem)] text-[var(--color-text-primary)] mb-6">
            {project.title}
          </h2>
          <p className="font-body text-[clamp(1rem,1.3vw,1.15rem)] text-[var(--color-text-secondary)] leading-relaxed max-w-[700px]">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Visual Preview Canvas */}
        <div className="w-full h-[200px] sm:h-[280px] md:h-[340px] mb-8 sm:mb-10 border border-[#222528]">
          <ProjectVisualPreview projectId={project.id} _color={project.color} />
        </div>

        {/* Feature Matrix */}
        <div className="mb-10">
          <h3 className="label-mono text-[11px] text-[var(--color-text-muted)] tracking-widest uppercase mb-4">
            CORE PRODUCT ARCHITECTURE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features?.map((feature, i) => (
              <div 
                key={i}
                className="p-4 bg-[#111316] border border-[#202327] flex items-center gap-3 text-sm font-body text-[var(--color-text-primary)]"
              >
                <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stack & Actions */}
        <div className="pt-6 border-t border-[#202428] flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="label-mono text-[10px] text-[var(--color-text-muted)] mr-2">
              TECHNOLOGIES:
            </span>
            {project.tools.map((tool) => (
              <span 
                key={tool} 
                className="label-mono text-[9px] px-3 py-1 bg-[#14171A] border border-[#24282D] text-[var(--color-text-secondary)]"
              >
                {tool}
              </span>
            ))}
          </div>

          <button 
            onClick={onClose}
            className="btn-primary py-2.5 px-6 text-xs"
          >
            RETURN TO SHOWCASE
          </button>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   Project Showcase Card
   ============================================================ */
function ProjectCard({ project, index, onSelect }) {
  return (
    <RevealOnScroll delay={index * 0.12}>
      <article
        onClick={() => onSelect(project)}
        className="group relative border-b border-[#222528] py-8 sm:py-12 md:py-16 cursor-pointer hover:bg-[#0D0F11]/60 transition-colors"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Project Identity */}
          <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start justify-between">
            <span className="font-mono text-base font-bold text-[var(--color-accent)]">
              {project.number}
            </span>
            <span className="label-mono text-[10px] text-[var(--color-text-muted)] lg:mt-2">
              //{project.year}
            </span>
          </div>

          {/* Interactive Visual Preview Box */}
          <div className="lg:col-span-5 h-[200px] sm:h-[240px] md:h-[260px]">
            <ProjectVisualPreview projectId={project.id} _color={project.color} />
          </div>

          {/* Project Details */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
              <span className="label-mono text-[10px] text-[var(--color-accent)] tracking-widest">
                {project.category}
              </span>
            </div>

            <h3 className="section-title text-[clamp(1.8rem,3vw,2.4rem)] text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
              {project.title}
            </h3>

            <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-[440px]">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="label-mono text-[9px] px-2.5 py-1 bg-[#121417] border border-[#222528] text-[var(--color-text-secondary)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Trigger */}
          <div className="lg:col-span-2 flex lg:flex-col justify-end lg:items-end w-full sm:w-auto">
            <span className="btn-secondary w-full sm:w-auto text-center justify-center py-2.5 px-5 text-xs whitespace-nowrap group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]">
              CASE STUDY ↗
            </span>
          </div>
        </div>
      </article>
    </RevealOnScroll>
  )
}

/* ============================================================
   Work Section
   ============================================================ */
export default function Work() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="work" className="section-padding section-gap border-t border-[#1C1E21] studio-grid-bg">
      <div className="max-content">
        <RevealOnScroll>
          <SectionLabel number="01" label="SELECTED WORK" />
        </RevealOnScroll>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <RevealOnScroll delay={0.1}>
            <h2 className="display-title text-[clamp(2.2rem,5vw,4.5rem)] text-[var(--color-text-primary)]">
              THINGS I'VE BEEN<br />
              <span className="text-[var(--color-accent)]">BUILDING.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="font-body text-sm md:text-base text-[var(--color-text-secondary)] max-w-[420px] leading-relaxed">
              Real concept explorations focusing on healthcare access, dementia support, and digital architectural branding. Designed with empathy and purpose.
            </p>
          </RevealOnScroll>
        </div>

        <div className="border-t border-[#222528]">
          {projects.map((proj, i) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              index={i}
              onSelect={setActiveProject}
            />
          ))}
        </div>
      </div>

      {activeProject && (
        <CaseStudyModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  )
}
