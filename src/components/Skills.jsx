import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'
import { SectionHeader } from './SectionHeader'
import { Badge } from './ui/badge'
import { BrutalCard } from './ui/card'

export function Skills() {
  return (
    <section className="border-b-4 border-ink bg-paper px-4 py-16 dark:border-white dark:bg-zinc-950 md:px-6" id="skills">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skill map"
          title="Core Expertise Overview."
          copy="Capabilities across agentic AI, LLM workflows, and machine learning, supported by backend systems and intuitive interfaces for real-world impact."
        />
        <div className="grid gap-5 lg:grid-cols-4">
          {skills.map((group, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ rotate: index % 2 === 0 ? -1.5 : 1.5 }}
              key={group.category}
            >
              <BrutalCard className="h-full overflow-hidden">
                <div className="flex items-center justify-between gap-4">
                  <div className={`grid h-14 w-14 place-items-center border-4 border-ink ${group.color}`}>
                    <group.icon size={28} />
                  </div>
                  <span className="font-mono text-3xl font-black">{group.level}</span>
                </div>
                <h3 className="mt-5 text-3xl font-black">{group.category}</h3>
                <div className="mt-5 h-7 border-4 border-ink bg-white p-0.5 dark:bg-zinc-800">
                  <motion.div
                    className={`h-full ${group.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${group.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                  />
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </BrutalCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
