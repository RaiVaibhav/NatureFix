import * as React from 'react'
import { cn } from '@/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-bg-raised border border-line rounded-2xl overflow-hidden flex flex-col transition-colors duration-200 hover:border-accent/60',
        className,
      )}
      {...props}
    />
  )
}

export { Card }
