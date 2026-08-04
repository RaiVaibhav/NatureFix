'use client'

import { useState } from 'react'
import Image from 'next/image'
import { blurFor } from '@/lib/images'
import { cn } from '@/lib/utils'

type PhotoFrameProps = {
  src: string
  credit?: string
  alt: string
  className?: string
  rotate?: number
  wash?: 'full' | 'light' | 'none'
  /** Override when a frame is known to be much narrower or wider than the default. */
  sizes?: string
  /**
   * `hover` keeps the attribution out of the way on small frames — a mosaic of
   * thumbnails drowns under six permanent credit badges — while still one gesture away.
   */
  creditMode?: 'always' | 'hover'
}

export function PhotoFrame({
  src,
  credit,
  alt,
  className,
  rotate = 0,
  wash = 'full',
  // frames sit in one- or two-column layouts, so half the viewport above the lg
  // breakpoint and the full width below it is the right default
  sizes = '(min-width: 1024px) 50vw, 100vw',
  creditMode = 'always',
}: PhotoFrameProps) {
  const [failed, setFailed] = useState(false)
  const blurDataURL = blurFor(src)

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
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          // remote fallbacks (before scripts/fetch-images.mjs has run) aren't in
          // remotePatterns, so let them through unoptimized rather than 400ing
          unoptimized={!src.startsWith('/')}
          {...(blurDataURL ? { placeholder: 'blur' as const, blurDataURL } : {})}
          onError={() => setFailed(true)}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}
      {!failed && wash !== 'none' && (
        <div className={wash === 'full' ? 'duotone absolute inset-0' : 'duotone-light absolute inset-0'} />
      )}
      {!failed && credit && (
        <span
          className={cn(
            'absolute bottom-2 right-2 z-10 max-w-[92%] truncate rounded-full bg-accent-deep/45 px-2.5 py-1 text-[10px] tracking-wide text-bg/80 backdrop-blur-sm',
            creditMode === 'hover' &&
              'opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100',
          )}
        >
          {credit}
        </span>
      )}
    </div>
  )
}
