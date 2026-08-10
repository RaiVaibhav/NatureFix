'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { HeroBackdrop } from '@/components/HeroBackdrop'
import type { Experience } from '@/lib/experiences'

export function ExperienceHero({ experience }: { experience: Experience }) {
  return (
    <section className="relative isolate flex min-h-[72svh] items-center overflow-hidden bg-accent-black lg:min-h-[100svh]">
      <HeroBackdrop src={experience.heroImage.src} />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/experiences"
            className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-ember-bright transition-colors hover:text-bg"
          >
            ← All experiences
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-bg sm:text-5xl lg:text-6xl"
        >
          {experience.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-5 max-w-lg text-lg leading-relaxed text-bg/75"
        >
          {experience.promise}
        </motion.p>

        {/* labels scale up on large screens so they hold their own against the
            display-size heading rather than reading as fine print */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-6 flex flex-wrap gap-2 lg:mt-8 lg:gap-3"
        >
          <Badge variant="onDark" className="lg:px-5 lg:py-1.5 lg:text-base">
            {experience.duration}
          </Badge>
          <Badge variant="onDarkEmber" className="lg:px-5 lg:py-1.5 lg:text-base">
            {experience.season}
          </Badge>
          <Badge variant="onDark" className="lg:px-5 lg:py-1.5 lg:text-base">
            {experience.facts.groupSize}
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="mt-8"
        >
          <Button asChild size="lg" variant="ember">
            <a
              href={`https://wa.me/917780935412?text=${encodeURIComponent(
                `Hi! Can I get the pricing and a full itinerary for ${experience.name}?`,
              )}`}
              rel="noopener"
              target="_blank"
            >
              Get full itinerary
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
