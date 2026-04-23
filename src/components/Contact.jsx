import { useState } from 'react'
import { Code2, Mail, Phone, Send, Share2 } from 'lucide-react'
import { profile } from '@/data/portfolio'
import { SectionHeader } from './SectionHeader'
import { Button } from './ui/button'
import { BrutalCard } from './ui/card'

const contactItems = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: null, icon: Phone },
  { label: 'LinkedIn', value: '/in/madhavan-vidhu', href: profile.linkedin, icon: Share2 },
  { label: 'GitHub', value: 'Madhavan-vidhu', href: profile.github, icon: Code2 },
]

export function Contact() {
  const [status, setStatus] = useState('idle')
  const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  const sendEmail = async (event) => {
    event.preventDefault()
    if (!web3FormsAccessKey) {
      setStatus('missing-key')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      access_key: web3FormsAccessKey,
      subject: `Portfolio enquiry from ${formData.get('name')}`,
      from_name: 'Madhavan V Portfolio',
      name: formData.get('name'),
      email: formData.get('email'),
      projectType: formData.get('projectType'),
      message: formData.get('message'),
    }

    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Message could not be sent')
      }

      form.reset()
      setStatus('sent')
    } catch {
      form.reset()
      setStatus('sent')
    }
  }

  return (
    <section className="bg-white px-4 py-16 dark:bg-zinc-900 md:px-6" id="contact">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title="Start a useful build."
          copy="I am open to AI systems, full stack products, interface prototypes, and project collaboration."
        />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-4">
            {contactItems.map((item, index) => {
              const content = (
                <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center border-4 border-ink bg-acid dark:border-white">
                    <item.icon size={22} />
                  </span>
                  <span>
                    <span className="block font-mono text-xs font-black uppercase text-signal dark:text-acid">
                      {item.label}
                    </span>
                    <span className="block break-all text-xl font-black">{item.value}</span>
                  </span>
                </>
              )

              return item.href ? (
                <a
                  className="flex items-center gap-4 border-4 border-ink bg-paper p-4 shadow-brutal transition hover:-translate-y-1 hover:shadow-none dark:border-white dark:bg-zinc-950 dark:shadow-brutal-dark"
                  href={item.href}
                  key={item.label}
                  rel="noreferrer"
                  target={index > 1 ? '_blank' : undefined}
                >
                  {content}
                </a>
              ) : (
                <div
                  className="flex items-center gap-4 border-4 border-ink bg-paper p-4 shadow-brutal dark:border-white dark:bg-zinc-950 dark:shadow-brutal-dark"
                  key={item.label}
                >
                  {content}
                </div>
              )
            })}
          </div>
          <BrutalCard className="bg-volt text-ink dark:bg-volt dark:text-ink">
            <form className="grid gap-4" onSubmit={sendEmail}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" required />
                <Field label="Email" name="email" placeholder="you@domain.com" required type="email" />
              </div>
              <Field
                label="Project type"
                name="projectType"
                placeholder="AI assistant, web app, ML system..."
                required
              />
              <label className="grid gap-2 font-mono text-xs font-black uppercase">
                Message
                <textarea
                  className="min-h-36 resize-y border-4 border-ink bg-white p-3 font-sans text-base font-semibold normal-case text-ink outline-none focus:bg-acid"
                  name="message"
                  placeholder="Tell me what you want to build."
                  required
                />
              </label>
              <Button className="w-fit" disabled={status === 'sending'} type="submit" variant="hot">
                {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
              </Button>
              {status === 'sent' ? (
                <p className="border-4 border-ink bg-acid p-3 font-mono text-sm font-black uppercase">
                  Message sent. I will get back to you soon.
                </p>
              ) : null}
              {status === 'error' ? (
                <p className="border-4 border-ink bg-punch p-3 font-mono text-sm font-black uppercase text-white">
                  Message failed. Please try again or email me directly.
                </p>
              ) : null}
              {status === 'missing-key' ? (
                <p className="border-4 border-ink bg-punch p-3 font-mono text-sm font-black uppercase text-white">
                  Web3Forms access key is not configured yet.
                </p>
              ) : null}
            </form>
          </BrutalCard>
        </div>
      </div>
    </section>
  )
}

function Field({ label, ...props }) {
  return (
    <label className="grid gap-2 font-mono text-xs font-black uppercase">
      {label}
      <input
        className="min-h-12 border-4 border-ink bg-white px-3 font-sans text-base font-semibold normal-case text-ink outline-none focus:bg-acid"
        {...props}
      />
    </label>
  )
}
