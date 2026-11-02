import { useState } from 'react'
import { socialLinks } from '../data/socialLinks'
import RevealOnScroll from '../components/RevealOnScroll'
import SectionLabel from '../components/SectionLabel'

export default function Experiments() {
  const [isPlayingWave, setIsPlayingWave] = useState(true)

  const experiments = [
    {
      id: 'music-rap',
      number: 'LAB // 01',
      title: 'Music Cadence & Rap Lyricism',
      description: 'Exploring cadence, multi-syllabic rhyme structures, and rhythm pacing. Music influences how I design interactive tempo and digital pacing in user interfaces.',
      tag: 'AUDIO & WRITING',
      interactiveType: 'soundwave'
    },
    {
      id: 'ai-imagery',
      number: 'LAB // 02',
      title: 'AI Visual & Prompt Studies',
      description: 'Pushing generative image models to produce dark, moody, industrial aesthetics without the generic polished AI stock look.',
      tag: 'SYNTHETIC MEDIA',
      interactiveType: 'prompt'
    },
    {
      id: 'shaders',
      number: 'LAB // 03',
      title: 'Tactile WebGL & Material Shaders',
      description: 'Experiments with liquid-metal distortions, normal maps, and dynamic camera orbits that respond directly to cursor inertia.',
      tag: '3D GRAPHICS',
      interactiveType: 'code'
    },
    {
      id: 'spatial-ui',
      number: 'LAB // 04',
      title: 'Unconventional Spatial Interfaces',
      description: 'Speculative layouts breaking free from traditional 12-column grids — designed for future multimodal inputs and ambient computing.',
      tag: 'SPECULATIVE UX',
      interactiveType: 'matrix'
    }
  ]

  return (
    <section id="experiments" className="section-padding section-gap border-t border-[#1C1E21] studio-grid-bg">
      <div className="max-content">
        <RevealOnScroll>
          <SectionLabel number="05" label="CREATIVE EXPERIMENTS" />
        </RevealOnScroll>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <RevealOnScroll delay={0.1}>
            <h2 className="display-title text-[clamp(2.2rem,5vw,4.5rem)] text-[var(--color-text-primary)]">
              NOT EVERYTHING NEEDS<br />
              <span className="text-[var(--color-text-muted)]">A PURPOSE.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="font-body text-sm md:text-base text-[var(--color-text-secondary)] max-w-[420px] leading-relaxed">
              Side tracks, musical cadence, visual explorations, and unprompted curiosities where original ideas are forged.
            </p>
          </RevealOnScroll>
        </div>

        {/* Experiment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {experiments.map((exp, i) => (
            <RevealOnScroll key={exp.id} delay={i * 0.1}>
              <div className="group p-5 sm:p-8 bg-[#0D0F12] border border-[#1E2226] hover:border-[var(--color-accent)]/50 transition-all flex flex-col justify-between h-full min-h-[260px] sm:min-h-[300px] relative overflow-hidden">
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="label-mono text-[10px] text-[var(--color-accent)] font-bold">
                      {exp.number}
                    </span>
                    <span className="label-mono text-[9px] px-2.5 py-1 border border-[#222528] bg-[#121417] text-[var(--color-text-secondary)]">
                      {exp.tag}
                    </span>
                  </div>

                  <h3 className="section-title text-[clamp(1.3rem,2vw,1.7rem)] text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-3">
                    {exp.title}
                  </h3>

                  <p className="font-body text-xs md:text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>

                {/* Interactive Visual Element per card */}
                {exp.interactiveType === 'soundwave' && (
                  <div className="p-4 bg-[#111418] border border-[#1C2025] flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1.5 h-8">
                      {[18, 28, 12, 32, 22, 14, 26, 30, 16, 24, 10, 20, 28, 14, 32, 18].map((h, idx) => (
                        <span
                          key={idx}
                          className="w-1 bg-[var(--color-accent)] rounded-xs transition-all duration-300"
                          style={{
                            height: isPlayingWave ? `${Math.sin((idx + 1) * 0.8) * 12 + 16}px` : '4px',
                            opacity: isPlayingWave ? 0.9 : 0.3
                          }}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => setIsPlayingWave(!isPlayingWave)}
                      className="label-mono text-[9px] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors p-1"
                    >
                      {isPlayingWave ? '[ PAUSE WAVE ]' : '[ PULSE WAVE ]'}
                    </button>
                  </div>
                )}

                {exp.interactiveType === 'prompt' && (
                  <div className="p-3 bg-[#111418] border border-[#1C2025] font-mono text-[10px] text-[var(--color-text-muted)] mt-4">
                    <span className="text-[var(--color-accent)]">PROMPT //</span> "cinematic brutalist monolith, wet obsidian reflections, 35mm film grain, 8k --no generic neon"
                  </div>
                )}

                {exp.interactiveType === 'code' && (
                  <div className="p-3 bg-[#111418] border border-[#1C2025] font-mono text-[10px] text-[var(--color-text-muted)] flex justify-between items-center mt-4">
                    <span>GLSL // ROUGHNESS: 0.04</span>
                    <span className="text-[var(--color-accent)]">IOR: 2.6 PHYSICAL</span>
                  </div>
                )}

                {exp.interactiveType === 'matrix' && (
                  <div className="p-3 bg-[#111418] border border-[#1C2025] font-mono text-[10px] text-[var(--color-text-muted)] flex justify-between items-center mt-4">
                    <span>VIEWPORT: MULTIMODAL</span>
                    <span className="text-[#5B9CF5]">STATUS: UNRELEASED</span>
                  </div>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Instagram Creative Journal Banner */}
        <RevealOnScroll delay={0.3}>
          <div className="p-5 sm:p-8 md:p-10 bg-[#0E1012] border border-[#222528] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="label-mono text-[10px] text-[var(--color-accent)] tracking-widest block mb-1">
                INSTAGRAM JOURNAL
              </span>
              <h3 className="section-title text-[clamp(1.2rem,2vw,1.6rem)] text-[var(--color-text-primary)]">
                Behind-the-scenes sketches, music logs & visual tests
              </h3>
            </div>
            <a
              href={socialLinks.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto text-center justify-center whitespace-nowrap"
            >
              VISIT {socialLinks.instagram.handle.toUpperCase()}
              <span className="font-mono text-xs">↗</span>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
