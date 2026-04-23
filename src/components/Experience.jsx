import { useState } from 'react'
import { BriefcaseBusiness, CalendarDays, CheckCircle2, ScanSearch, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { experience } from '@/data/portfolio'
import { SectionHeader } from './SectionHeader'
import { Button } from './ui/button'

export function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null)

  return (
    <section className="border-b-4 border-ink bg-white px-4 py-16 dark:border-white dark:bg-zinc-900 md:px-6" id="experience">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title="Production-minded AI work."
          copy="My hands-on timeline across AI engineering, full stack systems, public platforms, and LLM integration."
        />
        <div className="relative grid gap-8 border-l-4 border-ink pl-6 dark:border-white md:pl-10">
          {experience.map((item, index) => (
            <article
              className={`relative border-4 border-ink p-6 shadow-brutal dark:border-white dark:text-ink ${
                index % 2 === 0 ? 'bg-acid' : 'bg-volt'
              }`}
              key={item.company}
            >
              <span className="absolute -left-[42px] top-6 grid h-10 w-10 place-items-center border-4 border-ink bg-volt dark:border-white">
                <CheckCircle2 size={20} />
              </span>
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-mono text-sm font-black uppercase">{item.company}</p>
                  <h3 className="mt-2 text-3xl font-black md:text-5xl">{item.role}</h3>
                </div>
                <div className="grid gap-2 font-mono text-xs font-black uppercase">
                  <span className="inline-flex items-center gap-2 border-2 border-ink bg-white px-3 py-2">
                    <BriefcaseBusiness size={16} /> {item.type}
                  </span>
                  <span className="inline-flex items-center gap-2 border-2 border-ink bg-white px-3 py-2">
                    <CalendarDays size={16} /> {item.period}
                  </span>
                  <span className="border-2 border-ink bg-white px-3 py-2">{item.duration}</span>
                </div>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {item.bullets.map((bullet) => (
                  <div className="border-2 border-ink bg-white p-3 font-bold" key={bullet}>
                    {bullet}
                  </div>
                ))}
              </div>
              <Button className="mt-6" onClick={() => setSelectedExperience(item)} variant="hot">
                View Details <ScanSearch size={18} />
              </Button>
            </article>
          ))}
        </div>
      </div>
      <ExperienceDialog item={selectedExperience} onClose={() => setSelectedExperience(null)} />
    </section>
  )
}

function ExperienceDialog({ item, onClose }) {
  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-ink/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[90svh] w-full max-w-3xl overflow-y-auto border-4 border-ink bg-paper p-6 shadow-[12px_12px_0_#ff4ecd] dark:border-white dark:bg-zinc-950 dark:text-white"
            initial={{ y: 30, rotate: 1, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <Button
              aria-label="Close experience details"
              className="absolute right-4 top-4"
              size="icon"
              variant="hot"
              onClick={onClose}
            >
              <X size={20} />
            </Button>
            <p className="font-mono text-sm font-black uppercase text-signal dark:text-acid">
              {item.company} / {item.type}
            </p>
            <h3 className="mt-2 pr-16 text-4xl font-black leading-none md:text-6xl">{item.role}</h3>
            <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs font-black uppercase text-ink">
              <span className="border-2 border-ink bg-acid px-3 py-2">{item.period}</span>
              <span className="border-2 border-ink bg-volt px-3 py-2">{item.duration}</span>
            </div>
            <div className="mt-6 grid gap-4">
              <DetailBlock title="Overview" copy={item.overview} />
              <DetailBlock title="Responsibilities" copy={item.responsibilities} />
            </div>
            <div className="mt-6">
              <p className="mb-3 font-mono text-sm font-black uppercase text-signal dark:text-acid">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    className="border-2 border-ink bg-white px-3 py-1 font-mono text-xs font-black uppercase text-ink dark:border-white"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

function DetailBlock({ title, copy }) {
  return (
    <div className="border-4 border-ink bg-white p-4 text-ink dark:border-white">
      <p className="font-mono text-xs font-black uppercase text-signal">{title}</p>
      <p className="mt-2 text-lg font-semibold leading-relaxed">{copy}</p>
    </div>
  )
}
