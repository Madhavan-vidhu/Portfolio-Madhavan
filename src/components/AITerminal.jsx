import { useMemo, useState } from 'react'
import { ArrowDownRight, Send, Terminal } from 'lucide-react'
import { achievements, experience, profile, projects } from '@/data/portfolio'
import { Button } from './ui/button'
import { SectionHeader } from './SectionHeader'

const responses = {
  about:
    'I am an AI + Full Stack developer building with LLMs, FastAPI, React, and real-world impact systems.',
  contact: `Email: ${profile.email} | Phone: ${profile.phone} | LinkedIn: ${profile.linkedin} | GitHub: ${profile.github}`,
  achievements: achievements.join(' | '),
  help: 'Commands: about, show projects, experience, contact, achievements, clear',
}

export function AITerminal() {
  const [input, setInput] = useState('show projects')
  const [history, setHistory] = useState([
    { command: 'boot', output: 'My terminal is online. Type help for commands.', anchor: null },
  ])

  const projectOutput = useMemo(
    () => projects.map((project) => `${project.title} [${project.category}]`).join(' | '),
    [],
  )
  const experienceOutput = useMemo(
    () =>
      experience
        .map((item) => `${item.role} at ${item.company} (${item.period}, ${item.duration})`)
        .join(' | '),
    [],
  )

  const runCommand = (event) => {
    event.preventDefault()
    const command = input.trim().toLowerCase()
    if (!command) return
    if (command === 'clear') {
      setHistory([])
      setInput('')
      return
    }
    const commandResult = getCommandResult(command, projectOutput, experienceOutput)

    setHistory((items) => [...items, { command, ...commandResult }])
    setInput('')
  }

  return (
    <section className="border-b-4 border-ink bg-volt px-4 py-16 text-ink dark:border-white md:px-6" id="terminal">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Terminal mode"
          title="Ask my portfolio."
          copy="Type commands such as show projects, experience, about, contact, achievements, help, or clear."
        />
        <div className="border-4 border-ink bg-zinc-950 p-4 text-white shadow-brutal-lg dark:border-white">
          <div className="mb-4 flex items-center justify-between border-b-2 border-acid pb-3">
            <span className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-acid">
              <Terminal size={16} /> madhavan.shell
            </span>
            <span className="font-mono text-xs font-black uppercase text-volt">interactive</span>
          </div>
          <div className="min-h-64 space-y-4 font-mono text-sm font-bold md:text-base">
            {history.map((item, index) => (
              <div key={`${item.command}-${index}`}>
                <p className="text-acid">&gt; {item.command}</p>
                <p className="mt-1 border-l-4 border-volt pl-3 text-white/85">{item.output}</p>
                {item.anchor ? (
                  <a
                    className="mt-3 inline-flex items-center gap-2 border-2 border-acid bg-volt px-3 py-2 font-mono text-xs font-black uppercase text-ink transition hover:translate-x-1 hover:translate-y-1 hover:bg-acid"
                    href={item.anchor.href}
                  >
                    {item.anchor.label} <ArrowDownRight size={16} />
                  </a>
                ) : null}
              </div>
            ))}
          </div>
          <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={runCommand}>
            <label className="sr-only" htmlFor="terminal-command">
              Terminal command
            </label>
            <input
              className="min-h-12 flex-1 border-4 border-acid bg-ink px-4 font-mono font-bold text-white outline-none focus:border-volt"
              id="terminal-command"
              onChange={(event) => setInput(event.target.value)}
              placeholder="show projects"
              value={input}
            />
            <Button type="submit">
              Run <Send size={18} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

function getCommandResult(command, projectOutput, experienceOutput) {
  const commandMap = {
    about: {
      output: responses.about,
      anchor: { href: '#about', label: 'Go to about' },
    },
    'show projects': {
      output: projectOutput,
      anchor: { href: '#projects', label: 'Go to projects' },
    },
    projects: {
      output: projectOutput,
      anchor: { href: '#projects', label: 'Go to projects' },
    },
    experience: {
      output: experienceOutput,
      anchor: { href: '#experience', label: 'Go to experience' },
    },
    contact: {
      output: responses.contact,
      anchor: { href: '#contact', label: 'Go to contact' },
    },
    achievements: {
      output: responses.achievements,
      anchor: { href: '#achievements', label: 'Go to achievements' },
    },
    help: {
      output: responses.help,
      anchor: null,
    },
  }

  return commandMap[command] || {
    output: `Unknown command: ${command}. Try help.`,
    anchor: null,
  }
}
