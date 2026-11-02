export default function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {number && (
        <span className="label-mono text-[11px] text-[var(--color-accent)]">
          {number}
        </span>
      )}
      <div className="w-8 h-[1px] bg-[var(--color-border)]" />
      <span className="label-mono text-[11px] text-[var(--color-text-secondary)]">
        {label}
      </span>
    </div>
  )
}
