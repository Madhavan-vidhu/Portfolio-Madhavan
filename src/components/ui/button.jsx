import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex min-h-11 items-center justify-center gap-2 border-2 border-ink px-5 py-2.5 font-mono text-sm font-black uppercase tracking-normal shadow-brutal-sm transition duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-volt active:translate-y-0 active:shadow-none dark:border-white dark:shadow-[4px_4px_0_#d7ff34]',
  {
    variants: {
      variant: {
        default: 'bg-acid text-ink',
        secondary: 'bg-white text-ink dark:bg-ink dark:text-white',
        hot: 'bg-punch text-white',
        ghost: 'bg-transparent text-ink shadow-none hover:bg-volt dark:text-white',
      },
      size: {
        default: 'h-12',
        sm: 'min-h-9 px-3 py-1.5 text-xs',
        icon: 'h-11 w-11 px-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export function Button({ className, variant, size, ...props }) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
}

export function AnchorButton({ className, variant, size, ...props }) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
