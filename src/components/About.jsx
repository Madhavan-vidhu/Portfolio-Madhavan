import { motion } from 'framer-motion'
import { highlights } from '@/data/portfolio'
import { SectionHeader } from './SectionHeader'
import { BrutalCard } from './ui/card'

export function About() {
  return (
    <section className="border-b-4 border-ink bg-white px-4 py-16 dark:border-white dark:bg-zinc-900 md:px-6" id="about">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Profile"
          title="AI logic with product instincts."
          copy="I am an AI engineer specializing in agentic systems, LLM-driven workflows, and machine learning solutions that operate in real-world environments, with intuitive interfaces that make these systems usable and impactful."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.06 }}
              key={item.title}
            >
              <BrutalCard className="group h-full hover:-translate-y-2 hover:shadow-none">
                <div className={`mb-8 grid h-16 w-16 place-items-center border-4 border-ink ${item.tone}`}>
                  <item.icon size={30} />
                </div>
                <h3 className="text-2xl font-black leading-none">{item.title}</h3>
              </BrutalCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
