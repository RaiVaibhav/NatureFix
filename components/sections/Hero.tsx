'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { images } from '@/lib/images'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-accent-black">
      {/* ── the double exposure ─────────────────────────────────────────────
          two frames sharing one sheet of film: the tea gardens underneath, the
          ridge-through-the-canopy screened over them. screen keeps only what is
          lighter in the second frame, so the two landscapes read through each
          other instead of one photo simply covering the other. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.heroValley.src})` }}
      />
      {/* mirrored and pushed off-centre so the two horizons cross rather than
          landing on top of each other — the overlap is the whole effect */}
      {/* <div
        aria-hidden
        className="absolute inset-0 -translate-y-[6%] scale-x-[-1] scale-110 bg-cover bg-center opacity-70 mix-blend-screen"
        style={{ backgroundImage: `url(${images.heroRidge.src})` }}
      /> */}

      {/* pine grade — two different photographers' colour pushed into one brand */}
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
          the right-hand side, where the valley opens up */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-accent-black/90 from-5% via-accent-black/35 via-45% to-transparent to-70%"
      />
      {/* settle the base of the frame so the section below starts on a dark edge */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-accent-black"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:py-24 min-h-[100svh]">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-ember-bright/30 bg-accent-black/40 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ember-bright backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ember-bright" />
          Mountain weekends, starting in Bir
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-bg sm:text-6xl lg:text-7xl"
        >
          Leave <em className="italic text-ember-bright">lighter</em> than you arrived.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-6 max-w-lg text-lg leading-relaxed text-bg/75"
        >
          Designed around culture, community and stillness — not checklists.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-9 flex flex-col flex-wrap items-start gap-5"
        >
          <Button asChild size="lg" variant="ember">
            <Link href="/experiences">See the experiences</Link>
          </Button>
          <span className="rounded-full border border-bg/20 bg-accent-black/35 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-bg/70 backdrop-blur-sm">
            Bir, Himachal Pradesh — where we&rsquo;re starting
          </span>
        </motion.div>
      </div>

      <span className="absolute bottom-3 right-4 z-10 hidden text-[10px] tracking-wide text-bg/30 sm:block">
        {images.heroValley.credit}
      </span>
      {/* attribution still ships on mobile, just trimmed to fit one line */}
      <span className="absolute bottom-3 left-6 z-10 text-[10px] tracking-wide text-bg/30 sm:hidden">
        Palampur, Kangra — Wikimedia Commons
      </span>
    </section>
  )
}
