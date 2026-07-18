import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-accent text-bg border border-accent hover:bg-accent-deep hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20',
        ember:
          'bg-ember text-bg border border-ember hover:bg-ember-deep hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ember/30',
        ghost:
          'bg-transparent text-accent border border-accent/30 hover:bg-bg-raised hover:border-accent',
        link: 'text-accent underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-7',
        sm: 'h-9 px-5 text-xs',
        lg: 'h-13 px-9 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
