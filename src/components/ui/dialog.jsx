import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from './button'

export function Dialog({ project, onClose }) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-ink/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-2xl border-4 border-ink bg-paper p-6 shadow-[12px_12px_0_#00e5ff] dark:border-white dark:bg-zinc-950 dark:text-white"
            initial={{ y: 30, rotate: -1, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <Button
              aria-label="Close project details"
              className="absolute right-4 top-4"
              size="icon"
              variant="hot"
              onClick={onClose}
            >
              <X size={20} />
            </Button>
            <div className={`mb-6 inline-flex border-4 border-ink p-4 ${project.accent}`}>
              <project.icon size={36} />
            </div>
            <p className="font-mono text-sm font-black uppercase text-signal dark:text-acid">
              {project.alias}
            </p>
            <h3 className="mt-2 max-w-[15ch] text-4xl font-black leading-none md:text-6xl">
              {project.title}
            </h3>
            <p className="mt-5 text-lg font-semibold leading-relaxed">{project.detail}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  className="border-2 border-ink bg-white px-3 py-1 font-mono text-xs font-black uppercase text-ink dark:border-white"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
