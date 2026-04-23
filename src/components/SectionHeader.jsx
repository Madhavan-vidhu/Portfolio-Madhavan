export function SectionHeader({ eyebrow, title, copy }) {
  return (
    <div className="mb-8 grid gap-3 md:grid-cols-[0.75fr_1.25fr] md:items-end">
      <div>
        <p className="font-mono text-sm font-black uppercase text-signal dark:text-acid">
          {eyebrow}
        </p>
        <h2 className="mt-2 max-w-[13ch] text-4xl font-black leading-none text-ink dark:text-white md:text-6xl">
          {title}
        </h2>
      </div>
      {copy ? <p className="max-w-2xl text-lg font-semibold leading-relaxed">{copy}</p> : null}
    </div>
  )
}
