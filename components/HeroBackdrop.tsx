/**
 * The shared hero treatment: one photograph pushed through the brand's grade so any
 * frame — tea gardens, a meadow, a monastery — lands in the same pine-and-ember world
 * and stays readable under white type. Used by the homepage and every experience page,
 * so the whole site's heroes move together when this is tuned.
 *
 * Server component on purpose: the experience pages render on the server.
 */
import Image from 'next/image'
import { blurFor } from '@/lib/images'

export function HeroBackdrop({ src }: { src: string }) {
  const blurDataURL = blurFor(src)

  return (
    <>
      {/* a real <Image> rather than a CSS background: this is the LCP element on every
          page that uses it, so it needs a srcset, AVIF/WebP negotiation and an eager,
          high-priority fetch — none of which a background-image can do */}
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        unoptimized={!src.startsWith('/')}
        {...(blurDataURL ? { placeholder: 'blur' as const, blurDataURL } : {})}
        className="object-cover"
      />
      {/* pine grade — different photographers' colour pushed into one brand */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-accent-deep/80 via-accent-black/35 to-accent-black/75 mix-blend-multiply"
      />
      {/* ember warmth coming up off the valley floor */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-screen"
        style={{
          background:
            'radial-gradient(70% 55% at 18% 92%, rgba(196,112,59,0.45) 0%, rgba(234,159,78,0.1) 45%, transparent 72%)',
        }}
      />
      {/* vignette */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(125% 95% at 55% 42%, transparent 45%, rgba(14,23,18,0.6) 100%)',
        }}
      />
      {/* reading scrim — keeps the type legible over a busy frame without flattening
          the right-hand side, where the landscape opens up */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-accent-black/90 from-5% via-accent-black/35 via-45% to-transparent to-70%"
      />
      {/* settle the base of the frame so the section below starts on a dark edge */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-accent-black"
      />
    </>
  )
}
