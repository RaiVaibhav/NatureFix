import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Nav } from '@/components/sections/Nav'
import { Footer } from '@/components/sections/Footer'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PhotoFrame } from '@/components/PhotoFrame'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { experiences } from '@/lib/experiences'

const description = 'Four weekends, one promise each — mountain weekends starting in Bir, Himachal Pradesh.'

export const metadata: Metadata = {
  title: 'Experiences',
  description,
  alternates: { canonical: '/experiences' },
  openGraph: {
    title: 'Experiences · Nature Fix',
    description,
    url: '/experiences',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experiences · Nature Fix',
    description,
  },
}

export default function ExperiencesIndex() {
  return (
    <>
      <Nav />
      <main className="flex-1 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            The experiences
          </span>
          <h1 className="max-w-2xl font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Four weekends. One promise each.
          </h1>
          <p className="mt-5 max-w-xl text-ink-soft">
            Every weekend is built the same honest way — a promise, an arc instead of an
            itinerary, and everything told to you before you book, not after.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {experiences.map((e) => (
              <Card key={e.slug} className="h-full">
                <PhotoFrame
                  src={e.heroImage.src}
                  credit={e.heroImage.credit}
                  alt={e.heroAlt}
                  className="aspect-[16/10] w-full rounded-none border-0 border-b border-line"
                  wash="light"
                />
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h2 className="font-display text-xl font-medium text-ink">{e.name}</h2>
                  <p className="flex-1 text-sm leading-relaxed text-ink-soft">{e.promise}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>{e.duration}</Badge>
                    <Badge variant="season">{e.season}</Badge>
                  </div>
                  <Link
                    href={`/experiences/${e.slug}`}
                    className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform hover:gap-2.5"
                  >
                    Explore <ArrowRight size={15} />
                  </Link>
                </div>
              </Card>
            ))}

            <div className="gradient-pine topo sm:col-span-2 flex flex-col items-start gap-4 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm text-bg/85">
                <b className="font-semibold text-ember-bright">The Full Circle &amp; The Thamsar Push</b> —
                bigger journeys, coming after our first season. Message us and hear it first.
              </p>
              <Button asChild variant="ember">
                <a
                  href={`https://wa.me/917018333288?text=${encodeURIComponent(
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
