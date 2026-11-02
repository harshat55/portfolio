import { useState } from 'react'
import { socialLinks } from '../data/socialLinks'
import RevealOnScroll from '../components/RevealOnScroll'
import SectionLabel from '../components/SectionLabel'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const links = Object.values(socialLinks)

  const copyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email.handle)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="relative section-padding section-gap border-t border-[#1C1E21] studio-grid-bg bg-[#08090A]/40 backdrop-blur-[1px]">
      <div className="max-content">
        <RevealOnScroll>
          <SectionLabel number="06" label="INITIATE CONTACT" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Action Callout */}
          <div className="lg:col-span-7">
            <RevealOnScroll delay={0.1}>
              <h2 className="display-title text-[clamp(2.4rem,6vw,5.5rem)] text-[var(--color-text-primary)] mb-8">
                HAVE SOMETHING<br />
                <span className="text-[var(--color-accent)]">INTERESTING</span><br />
                IN MIND?
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.25}>
              <p className="font-body text-base md:text-lg text-[var(--color-text-secondary)] mb-10 max-w-[540px] leading-relaxed">
                Open to creative collaborations, internship opportunities, creative agency projects, and unconventional experiments. If you have an idea worth exploring, let's connect.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href={socialLinks.email.url}
                  className="btn-primary w-full sm:w-auto text-center justify-center"
                >
                  SEND AN EMAIL
                  <span className="font-mono text-xs">✉</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="btn-secondary w-full sm:w-auto text-center justify-center"
                >
                  {copied ? '✓ COPIED TO CLIPBOARD' : 'COPY EMAIL ADDRESS'}
                </button>
              </div>
            </RevealOnScroll>
          </div>

          {/* Social Channels & Telemetry */}
          <div className="lg:col-span-5">
            <RevealOnScroll delay={0.2}>
              <div className="p-5 sm:p-8 bg-[#0D0F12]/90 backdrop-blur-md border border-[#202428] space-y-6">
                <div className="flex items-center justify-between border-b border-[#1A1D21] pb-4">
                  <span className="label-mono text-[10px] text-[var(--color-accent)] tracking-widest uppercase">
                    CONNECTED CHANNELS
                  </span>
                  <span className="label-mono text-[9px] text-[var(--color-text-muted)]">
                    ONLINE 2026
                  </span>
                </div>

                <div className="divide-y divide-[#181B1E]">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target={link.url.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-4 transition-colors"
                    >
                      <div>
                        <span className="label-mono text-[9px] text-[var(--color-text-muted)] block uppercase tracking-wider mb-1">
                          {link.label}
                        </span>
                        <span className="font-headline font-semibold text-base text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                          {link.handle}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-xs border border-[#22262B] flex items-center justify-center group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-all">
                        <span className="font-mono text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                          ↗
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
