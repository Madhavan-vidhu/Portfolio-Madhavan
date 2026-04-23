import { cn } from '@/lib/utils'

export function BrutalCard({ as: Component = 'div', className, children, ...props }) {
  return (
    <Component
      className={cn(
        'border-4 border-ink bg-white p-5 shadow-brutal transition duration-200 dark:border-white dark:bg-zinc-950 dark:text-white dark:shadow-brutal-dark',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
