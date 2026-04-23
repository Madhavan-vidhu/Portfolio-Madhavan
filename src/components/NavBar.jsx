import { FileDown, Moon, Sun, TerminalSquare } from 'lucide-react'
import { Button } from './ui/button'
import { profile } from '@/data/portfolio'

const navItems = ['about', 'skills', 'experience', 'projects', 'contact']
const resumePath = '/Madhavan_V_Resume.pdf'

export function NavBar({ isDark, onThemeToggle }) {
  const handleResumeClick = () => {
    window.open(resumePath, '_blank', 'noopener,noreferrer')

    const downloadLink = document.createElement('a')
    downloadLink.href = resumePath
    downloadLink.download = 'Madhavan_V_Resume.pdf'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <header className="sticky top-0 z-40 border-b-4 border-ink bg-paper/95 backdrop-blur dark:border-white dark:bg-zinc-950/95">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a className="group flex items-center gap-3 font-black text-ink dark:text-white" href="#top">
          <span className="grid h-11 w-11 place-items-center border-4 border-ink bg-acid shadow-brutal-sm transition group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none dark:border-white">
            <TerminalSquare size={22} />
          </span>
          <span className="hidden leading-none sm:block">{profile.name}</span>
        </a>
        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <a
              className="border-2 border-transparent px-3 py-2 font-mono text-xs font-black uppercase transition hover:border-ink hover:bg-volt dark:hover:border-white dark:hover:text-ink"
              href={`#${item}`}
              key={item}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleResumeClick} size="sm" variant="hot">
            <FileDown size={16} />
            <span className="hidden sm:inline">Resume</span>
          </Button>
          <Button
            aria-label="Toggle dark mode"
            onClick={onThemeToggle}
            size="icon"
            title="Toggle dark mode"
            variant="secondary"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
      </nav>
    </header>
  )
}
