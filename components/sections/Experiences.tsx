import Link from 'next/link'
import { ArrowRight, Mountain } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PhotoFrame } from '@/components/PhotoFrame'
import { Reveal } from '@/components/Reveal'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { experiences } from '@/lib/experiences'

export function Experiences() {
  return (
    <section id="experiences" className="relative bg-bg py-28 sm:py-36">
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-xl">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            The experiences
          </span>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Four weekends. One promise each.
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {experiences.map((e, i) => (
            <Reveal key={e.slug} delay={i * 0.08}>
              {/* the whole card is the link — the "Explore" line below is decoration, not a
                  second target, so there is only ever one thing to click */}
              <Link
                href={`/experiences/${e.slug}`}
                className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <Card className="h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:border-ember group-hover:shadow-xl group-hover:shadow-ember/10">
                  <div className="relative">
                    <PhotoFrame
                      src={e.heroImage.src}
                      credit={e.heroImage.credit}
                      alt={e.heroAlt}
                      className="aspect-[16/10] w-full rounded-none border-0 border-b border-line"
                      wash="light"
                    />
                    <span className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-bg/30 bg-accent-deep/45 text-ember-bright backdrop-blur-sm">
                      <Mountain size={16} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="font-display text-xl font-medium text-ink">{e.name}</h3>
                    <p className="flex-1 text-sm leading-relaxed text-ink-soft">{e.promise}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge>{e.duration}</Badge>
                      <Badge variant="season">{e.season}</Badge>
                    </div>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all group-hover:gap-2.5 group-hover:text-ember-deep">
                      Explore <ArrowRight size={15} />
                    </span>
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={0.32} className="sm:col-span-2">
            <div className="gradient-pine topo flex flex-col items-start gap-4 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm text-bg/85">
                <b className="font-semibold text-ember-bright">The Full Circle &amp; The Thamsar Push</b> —
                bigger journeys, coming after our first season. Message us and hear it first.
              </p>
              <Button asChild variant="ember">
                <a
                  href={`https://wa.me/910000000000?text=${encodeURIComponent(
                    'Hi! Let me know when The Full Circle / The Thamsar Push opens up.',
                  )}`}
                  rel="noopener"
                  target="_blank"
                >
                  <WhatsAppIcon size={16} />
                  Hear it first on WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
