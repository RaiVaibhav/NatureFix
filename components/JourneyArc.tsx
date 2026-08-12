'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Footprints } from 'lucide-react'
import { PhotoFrame } from '@/components/PhotoFrame'
import { cn } from '@/lib/utils'
import type { ArcDay, ArcFrame } from '@/lib/experiences'

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
        <DayMosaic frames={day.frames} flip={flip} />
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-ember-deep">
            <Footprints size={13} className="md:hidden" />
            {day.day} · {day.location}
          </span>
          <h3 className="mt-3 font-display text-2xl font-medium leading-tight tracking-tight text-ink sm:text-[1.75rem]">
            {day.title}
          </h3>
          <p className="mt-2 text-base leading-snug text-ember-deep">{day.hook}</p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">{renderEmphasis(day.summary)}</p>
        </div>
      </motion.div>
    </div>
  )
}

/**
 * A day isn't one photograph. Each waypoint gets a 3×3 mosaic whose tiles are sized
 * unevenly — one lead frame carrying the day, two or three smaller ones for the walk,
 * the practice, the table. Placement is explicit rather than auto-flowed so the mosaic
 * can mirror itself on flipped rows and keep leaning into the text column.
 */
const MOSAIC: Record<number, { base: string[]; flip: string[] }> = {
  1: {
    base: ['col-start-1 col-span-3 row-start-1 row-span-5'],
    flip: ['col-start-1 col-span-3 row-start-1 row-span-5'],
  },
  2: {
    base: ['col-start-1 col-span-2 row-start-1 row-span-5', 'col-start-3 row-start-1 row-span-5'],
    flip: ['col-start-2 col-span-2 row-start-1 row-span-5', 'col-start-1 row-start-1 row-span-5'],
  },
  3: {
    base: [
      'col-start-1 col-span-2 row-start-1 row-span-5',
      'col-start-3 row-start-1 row-span-3',
      'col-start-3 row-start-4 row-span-2',
    ],
    flip: [
      'col-start-2 col-span-2 row-start-1 row-span-5',
      'col-start-1 row-start-1 row-span-3',
      'col-start-1 row-start-4 row-span-2',
    ],
  },
  4: {
    base: [
      'col-start-1 col-span-2 row-start-1 row-span-3',
      'col-start-3 row-start-1 row-span-3',
      'col-start-1 row-start-4 row-span-2',
      'col-start-2 col-span-2 row-start-4 row-span-2',
    ],
    flip: [
      'col-start-2 col-span-2 row-start-1 row-span-3',
      'col-start-1 row-start-1 row-span-3',
      'col-start-3 row-start-4 row-span-2',
      'col-start-1 col-span-2 row-start-4 row-span-2',
    ],
  },
}

function DayMosaic({ frames, flip }: { frames: ArcFrame[]; flip: boolean }) {
  const shown = frames.slice(0, 4)
  const cells = (MOSAIC[shown.length] ?? MOSAIC[4])[flip ? 'flip' : 'base']
  const tilt = flip ? 1.5 : -1.5

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: tilt }}
      whileInView={{ opacity: 1, scale: 1, rotate: tilt }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid aspect-[4/3] w-full grid-cols-3 grid-rows-5 gap-2 sm:gap-2.5"
    >
      {shown.map((f, i) => (
        <motion.div
          key={`${f.src}-${i}`}
          className={cn('relative', cells[i])}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhotoFrame
            src={f.src}
            credit={f.credit}
            alt={f.alt}
            wash="light"
            creditMode="hover"
            // the lead tile is roughly twice the width of the rest, so it gets its own budget
            sizes={
              i === 0 ? '(min-width: 1024px) 34vw, 64vw' : '(min-width: 1024px) 17vw, 32vw'
            }
            // sized, not positioned: PhotoFrame carries `.grain`, whose unlayered
            // `position: relative` in globals.css outranks Tailwind's layered `.absolute`,
            // so an `absolute inset-0` here silently collapses the frame to nothing
            className="h-full w-full rounded-xl"
          />
        </motion.div>
      ))}
    </motion.div>
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
