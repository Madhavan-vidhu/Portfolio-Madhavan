import { useEffect, useState } from 'react'
import { About } from './components/About'
import { AITerminal } from './components/AITerminal'
import { Contact } from './components/Contact'
import { Credentials } from './components/Credentials'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('madhavan-theme')
    if (savedTheme) return savedTheme === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('madhavan-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-punch selection:text-white dark:bg-zinc-950 dark:text-white">
      <NavBar isDark={isDark} onThemeToggle={() => setIsDark((value) => !value)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AITerminal />
        <Credentials />
        <Contact />
      </main>
      <footer className="border-t-4 border-ink bg-ink px-4 py-6 text-white dark:border-white md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 font-mono text-sm font-black uppercase sm:flex-row">
          <p>Madhavan V / AI Engineer / Full Stack Developer</p>
          <p>I build AI systems that reason, act, and evolve</p>
        </div>
      </footer>
    </div>
  )
}

export default App
