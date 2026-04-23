import { motion } from 'framer-motion'
import { ArrowDownRight, Cpu, Mail, Sparkles } from 'lucide-react'
import { AnchorButton } from './ui/button'
import { profile } from '@/data/portfolio'

const terminalLines = [
  'boot madhavan.profile --jarvis',
  'loading ai_engineer.full_stack_dev',
  'systems: Agentic AI | LLM | ML',
  'status: ready to build impact',
]

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b-4 border-ink bg-paper dark:border-white dark:bg-zinc-950"
      id="top"
    >
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#111_2px,transparent_2px),linear-gradient(90deg,#111_2px,transparent_2px)] [background-size:44px_44px] dark:opacity-[0.14] dark:[background-image:linear-gradient(#fff_2px,transparent_2px),linear-gradient(90deg,#fff_2px,transparent_2px)]" />
      <div className="relative mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-16">
        <div className="flex flex-col justify-center">
          <motion.h1
            className="max-w-4xl text-6xl font-black leading-[0.9] text-ink dark:text-white md:text-8xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {profile.name}
          </motion.h1>
          <motion.p
            className="mt-5 max-w-3xl text-2xl font-black uppercase leading-tight text-signal dark:text-acid md:text-4xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            {profile.title}
          </motion.p>
          <motion.p
            className="mt-5 max-w-2xl text-xl font-semibold leading-relaxed md:text-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
          >
            {profile.tagline}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34 }}
          >
            <AnchorButton href="#projects">
              View Projects <ArrowDownRight size={18} />
            </AnchorButton>
            <AnchorButton href="#contact" variant="secondary">
              Contact Me <Mail size={18} />
            </AnchorButton>
          </motion.div>
        </div>
        <motion.div
          className="relative grid content-center"
          initial={{ opacity: 0, rotate: 1.5, y: 20 }}
          animate={{ opacity: 1, rotate: -1, y: 0 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 90 }}
        >
          <div className="relative border-4 border-ink bg-ink p-4 shadow-brutal-lg dark:border-white dark:bg-white dark:shadow-brutal-dark">
            <div className="relative overflow-hidden border-4 border-acid bg-zinc-950 p-5 text-white">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-acid/10 blur-xl" />
              <div className="mb-5 flex items-center justify-between border-b-2 border-acid pb-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 border-2 border-ink bg-punch" />
                  <span className="h-3 w-3 border-2 border-ink bg-acid" />
                  <span className="h-3 w-3 border-2 border-ink bg-volt" />
                </div>
                <span className="font-mono text-xs font-black uppercase text-acid">
                  ai-core.v
                </span>
              </div>
              <div className="space-y-4 font-mono text-sm font-bold md:text-base">
                {terminalLines.map((line, index) => (
                  <motion.p
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + index * 0.18 }}
                    key={line}
                  >
                    <span className="text-volt">&gt;</span>
                    <span>{line}</span>
                    {index === terminalLines.length - 1 ? (
                      <span className="inline-block h-5 w-2 bg-acid animate-blink" />
                    ) : null}
                  </motion.p>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {['AGENTS', 'LLM', 'API'].map((item) => (
                  <div className="border-2 border-acid p-3 text-center" key={item}>
                    <Cpu className="mx-auto mb-2 text-volt" size={20} />
                    <span className="font-mono text-xs font-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-2 rotate-3 border-4 border-ink bg-punch px-4 py-3 font-mono text-xs font-black uppercase text-white shadow-brutal-sm dark:border-white">
            <Sparkles className="mr-2 inline" size={16} />
            impact systems
          </div>
        </motion.div>
      </div>
    </section>
  )
}
