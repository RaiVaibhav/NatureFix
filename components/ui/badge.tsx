import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-medium',
  {
    variants: {
      variant: {
        default: 'border-line text-ink-soft bg-transparent',
        season: 'border-ember/40 text-ember-deep bg-ember/10',
        accent: 'border-accent/30 text-accent bg-accent/5',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />
}

export { Badge, badgeVariants }
