import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, ScanSearch } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { SectionHeader } from './SectionHeader'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Dialog } from './ui/dialog'

const filters = ['All', 'AI', 'ML']

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section className="border-b-4 border-ink bg-ink px-4 py-16 text-white dark:border-white md:px-6" id="projects">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projects"
          title="Applied AI Systems and Workflows."
          copy="A collection of AI systems, automation workflows, and machine learning projects built to solve real-world problems."
        />
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 border-2 border-white bg-volt px-3 py-2 font-mono text-xs font-black uppercase text-ink">
            <Filter size={16} /> Filter
          </span>
          {filters.map((filter) => (
            <Button
              className={activeFilter === filter ? 'bg-acid text-ink' : 'bg-white text-ink'}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              size="sm"
              variant="secondary"
            >
              {filter}
            </Button>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <motion.article
              className="group relative overflow-hidden border-4 border-white bg-paper p-5 text-ink shadow-[10px_10px_0_#d7ff34] transition hover:-translate-y-2 hover:shadow-[0_0_0_#d7ff34]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.08 }}
              key={project.title}
            >
              <div className="absolute right-4 top-4 font-mono text-7xl font-black text-ink/10 transition group-hover:rotate-6 group-hover:text-punch/25">
                0{index + 1}
              </div>
              <div className={`relative mb-6 grid h-16 w-16 place-items-center border-4 border-ink ${project.accent}`}>
                <project.icon size={30} />
              </div>
              <p className="relative font-mono text-sm font-black uppercase text-signal">
                {project.alias}
              </p>
              <h3 className="relative mt-2 max-w-[14ch] text-4xl font-black leading-none">
                {project.title}
              </h3>
              <p className="relative mt-5 max-w-2xl text-lg font-semibold leading-relaxed">
                {project.description}
              </p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
              <Button
                className="relative mt-7"
                onClick={() => setSelectedProject(project)}
                variant="hot"
              >
                View Details <ScanSearch size={18} />
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
      <Dialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
