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
  imageClassName?: string
  rotate?: number
  wash?: 'full' | 'light' | 'none'
  /** Override when a frame is known to be much narrower or wider than the default. */
  sizes?: string
  /**
   * `hover` keeps the attribution out of the way on small frames — a mosaic of
   * thumbnails drowns under six permanent credit badges — while still one gesture away.
   *
   * This and `credit` are both still accepted but currently unrendered; see the note
   * lower down. They stay in the API so call sites keep carrying attribution, ready for
   * whenever the credits get a home.
   */
  creditMode?: 'always' | 'hover'
}

export function PhotoFrame({
  src,
  alt,
  className,
  imageClassName,
  rotate = 0,
  wash = 'full',
  // frames sit in one- or two-column layouts, so half the viewport above the lg
  // breakpoint and the full width below it is the right default
  sizes = '(min-width: 1024px) 50vw, 100vw',
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
          className={cn("object-cover transition-transform duration-700 ease-out group-hover:scale-105", imageClassName)}
        />
      )}
      {!failed && wash !== 'none' && (
        <div className={wash === 'full' ? 'duotone absolute inset-0' : 'duotone-light absolute inset-0'} />
      )}
      {/*
        The credit chip is deliberately not rendered. Every photo on the site is a
        placeholder pending the real shoot, and "— Wikimedia Commons" stamped across each
        frame reads as an unfinished template rather than as photography.

        Attribution is NOT dropped: `credit` still travels with every Photo in
        lib/images.ts, because most of this imagery is CC BY / CC BY-SA, where attribution
        is a licence condition rather than a courtesy. Before this ships publicly the
        credits need somewhere to live — a credits page, or captions under the real
        photographs. Tracked in docs/hero-imagery.md.
      */}
    </div>
  )
}
