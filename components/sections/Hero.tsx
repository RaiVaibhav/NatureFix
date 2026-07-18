'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PhotoFrame } from '@/components/PhotoFrame'
import { images } from '@/lib/images'

const collage = [
  { img: images.heroFly, alt: 'A paraglider over the Bir valley', rotate: -2 },
  { img: images.heroFaith, alt: 'Prayer flags at a Kangra-valley Tibetan institute', rotate: 1.5 },
  { img: images.heroFire, alt: 'Faces lit around a fire circle', rotate: 1 },
  { img: images.heroField, alt: 'Tea gardens in the Kangra valley', rotate: -1 },
]

export function Hero() {
  return (
    <section className="relative border-b border-line bg-bg-raised">
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:items-center md:pt-24 md:pb-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ember-deep"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            Mountain weekends, starting in Bir
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl"
          >
            Leave <em className="text-ember not-italic italic">lighter</em> than you arrived.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-5 max-w-md text-lg text-ink-soft"
          >
            Designed around culture, community and stillness — not checklists.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <Button asChild size="lg" variant="ember">
              <Link href="/experiences">See the experiences</Link>
            </Button>
            <span className="rounded-full border border-line bg-bg px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
              Bir, Himachal Pradesh — where we're starting
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {collage.map((tile) => (
            <PhotoFrame
              key={tile.alt}
              src={tile.img.src}
              credit={tile.img.credit}
              alt={tile.alt}
              className="aspect-square"
              rotate={tile.rotate}
              wash="light"
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
