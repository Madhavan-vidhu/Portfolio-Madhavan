import { useState } from 'react'
import { Award, BadgeCheck, Crown, ExternalLink, GraduationCap, ScanSearch, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { achievements, certifications, education, leadership } from '@/data/portfolio'
import { SectionHeader } from './SectionHeader'
import { Badge } from './ui/badge'
import { AnchorButton, Button } from './ui/button'
import { BrutalCard } from './ui/card'

export function Credentials() {
  const [showCertifications, setShowCertifications] = useState(false)

  return (
    <section className="border-b-4 border-ink bg-paper px-4 py-16 dark:border-white dark:bg-zinc-950 md:px-6" id="credentials">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="ACHIEVEMENTS"
          title="Education and Achievements Overview."
          copy="An overview of my academic performance, certifications, achievements, and leadership roles across technical and community initiatives."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <BrutalCard>
            <div className="mb-5 flex items-center gap-3">
              <GraduationCap className="text-signal dark:text-acid" size={30} />
              <h3 className="text-3xl font-black">Education</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {education.map((item) => (
                <div className="border-4 border-ink bg-acid p-4 text-ink" key={item.label}>
                  <item.icon className="mb-4" size={26} />
                  <p className="font-mono text-xs font-black uppercase">{item.label}</p>
                  <p className="mt-2 text-3xl font-black">{item.value}</p>
                </div>
              ))}
            </div>
          </BrutalCard>
          <BrutalCard className="bg-volt text-ink dark:bg-volt dark:text-ink">
            <div className="mb-5 flex items-center gap-3">
              <Award size={30} />
              <h3 className="text-3xl font-black">Certifications</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {certifications.slice(0, 3).map((item) => (
                <Badge className="bg-white" key={item}>
                  {item}
                </Badge>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={() => setShowCertifications(true)} variant="hot">
                Know More <ScanSearch size={18} />
              </Button>
              <AnchorButton
                href="https://www.linkedin.com/in/madhavan-vidhu/details/certifications/"
                rel="noreferrer"
                target="_blank"
                variant="secondary"
              >
                Go to Certifications <ExternalLink size={18} />
              </AnchorButton>
            </div>
          </BrutalCard>
          <BrutalCard className="bg-punch text-white scroll-mt-28" id="achievements">
            <div className="mb-5 flex items-center gap-3">
              <BadgeCheck size={30} />
              <h3 className="text-3xl font-black">Achievements</h3>
            </div>
            <div className="grid gap-3">
              {achievements.map((item) => (
                <p className="border-2 border-white bg-ink p-3 font-mono text-sm font-black uppercase" key={item}>
                  {item}
                </p>
              ))}
            </div>
          </BrutalCard>
          <BrutalCard>
            <div className="mb-5 flex items-center gap-3">
              <Crown className="text-ember" size={30} />
              <h3 className="text-3xl font-black">Leadership</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {leadership.map((item) => (
                <div className="border-4 border-ink bg-white p-4 dark:border-white dark:bg-zinc-900" key={item.title}>
                  <item.icon className="mb-4 text-signal dark:text-acid" size={28} />
                  <p className="text-2xl font-black">{item.title}</p>
                  <p className="mt-2 font-semibold">{item.detail}</p>
                </div>
              ))}
            </div>
          </BrutalCard>
        </div>
      </div>
      <CertificationsDialog open={showCertifications} onClose={() => setShowCertifications(false)} />
    </section>
  )
}

function CertificationsDialog({ open, onClose }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-ink/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[90svh] w-full max-w-3xl overflow-y-auto border-4 border-ink bg-paper p-6 shadow-[12px_12px_0_#00e5ff] dark:border-white dark:bg-zinc-950 dark:text-white"
            initial={{ y: 30, rotate: -1, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <Button
              aria-label="Close certifications"
              className="absolute right-4 top-4"
              size="icon"
              variant="hot"
              onClick={onClose}
            >
              <X size={20} />
            </Button>
            <p className="font-mono text-sm font-black uppercase text-signal dark:text-acid">
              Major certifications
            </p>
            <h3 className="mt-2 pr-16 text-4xl font-black leading-none md:text-6xl">
              Continuous learning record.
            </h3>
            <div className="mt-6 grid gap-3">
              {certifications.map((item, index) => (
                <div
                  className="flex gap-3 border-4 border-ink bg-white p-4 text-ink dark:border-white"
                  key={item}
                >
                  <span className="font-mono text-sm font-black text-signal">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="font-bold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <AnchorButton
              className="mt-6"
              href="https://www.linkedin.com/in/madhavan-vidhu/details/certifications/"
              rel="noreferrer"
              target="_blank"
              variant="hot"
            >
              Go to Certifications <ExternalLink size={18} />
            </AnchorButton>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
