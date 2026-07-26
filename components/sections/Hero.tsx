'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroBackdrop } from '@/components/HeroBackdrop'
import { images } from '@/lib/images'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-accent-black">
      <HeroBackdrop src={images.heroValley.src} />

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
        {images.heroTrail.credit}
      </span>
      {/* attribution still ships on mobile, just trimmed to fit one line */}
      <span className="absolute bottom-3 left-6 z-10 text-[10px] tracking-wide text-bg/30 sm:hidden">
        Triund, Dhauladhar — Wikimedia Commons
      </span>
    </section>
  )
}
