'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

type PhotoFrameProps = {
  src: string
  credit?: string
  alt: string
  className?: string
  rotate?: number
  wash?: 'full' | 'light' | 'none'
}

export function PhotoFrame({
  src,
  credit,
  alt,
  className,
  rotate = 0,
  wash = 'full',
}: PhotoFrameProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-line grain group',
        className,
      )}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      {failed ? (
        <div className="absolute inset-0 flex items-end bg-bg-raised">
          <span className="p-4 text-xs text-ink-soft">{alt}</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}
      {!failed && wash !== 'none' && (
        <div className={wash === 'full' ? 'duotone absolute inset-0' : 'duotone-light absolute inset-0'} />
      )}
      {!failed && credit && (
        <span className="absolute bottom-2 right-2 z-10 rounded-full bg-accent-deep/45 px-2.5 py-1 text-[10px] tracking-wide text-bg/80 backdrop-blur-sm">
          {credit}
        </span>
      )}
    </div>
  )
}
