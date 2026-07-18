'use client'

import {
  Bird,
  Backpack,
  Film,
  Flame,
  Footprints,
  Landmark,
  HeartHandshake,
  PersonStanding,
  PlaneTakeoff,
  Sunset,
  UtensilsCrossed,
  Users,
  Waves,
  Wind,
  type LucideIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
import type { MomentIcon, SignatureMoment } from '@/lib/experiences'

const iconMap: Record<MomentIcon, LucideIcon> = {
  circle: Users,
  meditation: HeartHandshake,
  film: Film,
  hike: Footprints,
  sunset: Sunset,
  feast: UtensilsCrossed,
  yoga: PersonStanding,
  flight: PlaneTakeoff,
  waterfall: Waves,
  monastery: Landmark,
  temple: Landmark,
  kit: Backpack,
  birds: Bird,
  wind: Wind,
  fire: Flame,
}

export function SignatureMoments({ moments }: { moments: SignatureMoment[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {moments.map((m, i) => {
        const Icon = iconMap[m.icon]
        const featured = i % 2 === 1

        return (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className={
              featured
                ? 'gradient-pine topo group relative overflow-hidden rounded-2xl p-6'
                : 'group relative overflow-hidden rounded-2xl border border-line bg-bg p-6 transition-colors duration-200 hover:border-ember/50'
            }
          >
            <span
              className={`relative flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] transition-colors duration-200 ${
                featured
                  ? 'border-ember-bright/50 bg-bg/10 text-ember-bright'
                  : 'border-ember/40 bg-ember/10 text-ember-deep group-hover:border-ember group-hover:bg-ember/15'
              }`}
            >
              <Icon size={18} />
            </span>
            <p
              className={`relative mt-4 text-sm font-medium leading-relaxed ${
                featured ? 'text-bg/90' : 'text-ink'
              }`}
            >
              {m.title}
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}
