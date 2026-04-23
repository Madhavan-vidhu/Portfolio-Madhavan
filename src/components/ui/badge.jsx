import { cn } from '@/lib/utils'

export function Badge({ className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center border-2 border-ink bg-white px-3 py-1 font-mono text-xs font-black uppercase text-ink shadow-[3px_3px_0_#111] dark:border-white dark:bg-zinc-950 dark:text-white dark:shadow-[3px_3px_0_#d7ff34]',
        className,
      )}
    >
      {children}
    </span>
  )
}
