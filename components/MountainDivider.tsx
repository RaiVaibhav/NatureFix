import { cn } from '@/lib/utils'

type MountainDividerProps = {
  from?: string
  to?: string
  flip?: boolean
  className?: string
}

// a jagged mountain skyline sitting on the seam between two sections, filled with the
// next section's background — an illustrative divider instead of a flat hairline
export function MountainDivider({
  from = 'var(--color-bg)',
  to = 'var(--color-accent-deep)',
  flip = false,
  className,
}: MountainDividerProps) {
  return (
    <div
      aria-hidden
      className={cn('relative h-12 w-full overflow-hidden sm:h-20', className)}
      style={{ backgroundColor: from, transform: flip ? 'scaleY(-1)' : undefined }}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0,100 L0,58 L95,78 L215,22 L330,70 L460,12 L600,62 L740,26 L880,74 L1010,36 L1150,72 L1290,30 L1440,60 L1440,100 Z"
          fill={to}
        />
      </svg>
    </div>
  )
}
