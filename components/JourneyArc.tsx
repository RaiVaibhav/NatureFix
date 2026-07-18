'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Footprints } from 'lucide-react'
import { PhotoFrame } from '@/components/PhotoFrame'
import type { ArcDay } from '@/lib/experiences'

export function JourneyArc({ days }: { days: ArcDay[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.7', 'end 0.5'],
  })
  const trailScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  })

  return (
    <div ref={containerRef} className="relative">
      {/* the trail: a static track plus an ember fill that grows as you scroll, like a hiking route */}
      <div className="absolute left-[19px] top-3 bottom-3 hidden w-px bg-line md:block">
        <motion.div
          className="w-full origin-top bg-ember"
          style={{ scaleY: trailScale, height: '100%' }}
        />
      </div>

      <div className="grid gap-20 md:pl-16">
        {days.map((day, i) => (
          <JourneyWaypoint key={day.day} day={day} index={i} />
        ))}
      </div>
    </div>
  )
}

function JourneyWaypoint({ day, index }: { day: ArcDay; index: number }) {
  const flip = index % 2 === 1

  return (
    <div className="relative">
      <motion.span
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-40% 0px -40% 0px' }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="absolute -left-16 top-0 z-10 hidden h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-ember bg-bg text-ember shadow-sm md:flex"
      >
        <Footprints size={16} />
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`grid gap-8 md:grid-cols-2 md:items-center ${flip ? 'md:[&>*:first-child]:order-2' : ''}`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: flip ? 1.5 : -1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhotoFrame
            src={day.image.src}
            credit={day.image.credit}
            alt={day.imageAlt}
            className="aspect-[4/3] w-full"
            rotate={flip ? 1.5 : -1.5}
            wash="light"
          />
        </motion.div>
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-ember-deep">
            <Footprints size={13} className="md:hidden" />
            {day.day} · {day.location}
          </span>
          <p className="mt-3 text-base leading-relaxed text-ink">{renderEmphasis(day.summary)}</p>
        </div>
      </motion.div>
    </div>
  )
}

// summary text can wrap a phrase in **like this** to render it as an emphasized pull-out
function renderEmphasis(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <em key={i} className="font-display not-italic font-medium text-ember-deep">
        {part}
      </em>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}
