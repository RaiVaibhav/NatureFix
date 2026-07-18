import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, X } from 'lucide-react'
import { Nav } from '@/components/sections/Nav'
import { Footer } from '@/components/sections/Footer'
import { Reveal } from '@/components/Reveal'
import { PhotoFrame } from '@/components/PhotoFrame'
import { JourneyArc } from '@/components/JourneyArc'
import { SignatureMoments } from '@/components/SignatureMoments'
import { ScrollProgress } from '@/components/ScrollProgress'
import { MountainDivider } from '@/components/MountainDivider'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { experiences, getExperience } from '@/lib/experiences'

export async function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const experience = getExperience(slug)
  if (!experience) return {}
  return {
    title: experience.name,
    description: experience.promise,
  }
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const experience = getExperience(slug)
  if (!experience) notFound()

  const others = experiences.filter((e) => e.slug !== experience.slug)

  return (
    <>
      <Nav />
      <ScrollProgress />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative border-b border-line bg-bg-raised">
          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-14 md:grid-cols-2 md:items-center md:pt-20 md:pb-24">
            <div>
              <Link
                href="/experiences"
                className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-accent"
              >
                ← All experiences
              </Link>
              <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
                {experience.name}
              </h1>
              <p className="mt-4 max-w-md text-lg text-ink-soft">{experience.promise}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge>{experience.duration}</Badge>
                <Badge variant="season">{experience.season}</Badge>
                <Badge>{experience.facts.groupSize}</Badge>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" variant="ember">
                  <a href="#inquire">Ask about the next dates</a>
                </Button>
              </div>
            </div>
            <PhotoFrame
              src={experience.heroImage.src}
              credit={experience.heroImage.credit}
              alt={experience.heroAlt}
              className="aspect-[4/3] w-full"
              wash="light"
            />
          </div>
        </section>

        {/* Intro + facts */}
        <section className="relative py-20 sm:py-24">
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <p className="max-w-2xl text-lg leading-relaxed text-ink">{experience.intro}</p>
            </Reveal>
            <Reveal delay={0.1} className="grid content-start gap-5 rounded-2xl border border-line bg-bg-raised p-6">
              <Fact label="Group size" value={experience.facts.groupSize} />
              <Fact label="Fitness" value={experience.facts.fitness} />
              <Fact label="Season" value={experience.facts.season} />
              <Fact label="Who it's for" value={experience.facts.whoItsFor} />
            </Reveal>
          </div>
        </section>

        {/* This is for you if / not */}
        <section className="relative border-y border-line bg-bg-raised py-20 sm:py-24">
          <div className="relative mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                This is for you if…
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.05} className="gradient-pine topo grid gap-3 rounded-2xl p-6">
                {experience.forYouIf.map((f) => (
                  <div key={f} className="flex items-start gap-3 text-sm text-bg/90">
                    <Check size={16} className="mt-0.5 shrink-0 text-ember-bright" />
                    <span>{f}</span>
                  </div>
                ))}
              </Reveal>
              <Reveal delay={0.12} className="grid gap-3 rounded-2xl border border-line bg-bg p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
                  Honestly, not for you if…
                </p>
                {experience.notForYouIf.map((f) => (
                  <div key={f} className="flex items-start gap-3 text-sm text-ink-soft">
                    <X size={16} className="mt-0.5 shrink-0 text-ember" />
                    <span>{f}</span>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* The arc */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="mb-12 max-w-xl">
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                The arc, not the itinerary
              </span>
              <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Three days, told the way they feel.
              </h2>
            </Reveal>

            <JourneyArc days={experience.arc} />

            <Reveal delay={0.15} className="mt-14 border-t border-line pt-8 text-center">
              <p className="text-sm text-ink-soft">
                This is the arc, not the hour-by-hour.{' '}
                <a
                  href={`https://wa.me/910000000000?text=${encodeURIComponent(
                    `Hi! Can you share the full schedule for ${experience.name}?`,
                  )}`}
                  rel="noopener"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline"
                >
                  <WhatsAppIcon size={15} />
                  Get the full itinerary →
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        {/* Signature moments */}
        <section className="relative border-y border-line bg-bg-raised py-20 sm:py-24">
          <div className="relative mx-auto max-w-6xl px-6">
            <Reveal className="max-w-xl">
              <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Signature moments
              </h2>
              <p className="mt-3 text-sm text-ink-soft">
                Everything below is genuinely hosted — not a highlight reel of things that might
                happen.
              </p>
            </Reveal>
            <div className="mt-10">
              <SignatureMoments moments={experience.signatureMoments} />
            </div>
          </div>
        </section>

        {/* What's handled + honesty */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                What's handled
              </h2>
              <div className="gradient-pine topo mt-6 rounded-2xl p-6">
                <ul className="grid gap-3">
                  {experience.whatsHandled.map((w) => (
                    <li key={w} className="flex items-start gap-3 text-sm text-bg/90">
                      <Check size={16} className="mt-0.5 shrink-0 text-ember-bright" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                Good to know — the honest bits
              </h2>
              <ul className="mt-6 grid gap-3">
                {experience.honesty.map((h) => (
                  <li key={h} className="relative pl-5 text-sm text-ink-soft">
                    <span className="absolute left-0 text-ember">—</span>
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Inquiry CTA */}
        <MountainDivider from="var(--color-bg)" to="var(--color-accent-deep)" />
        <section id="inquire" className="gradient-dusk topo relative py-20 text-bg sm:py-24">
          <div className="relative mx-auto max-w-6xl px-6 text-center">
            <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Ask about the next dates
            </h2>
            <p className="mx-auto mt-4 max-w-md text-bg/70">
              A short WhatsApp message gets you real dates, real pricing, and a real human.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" variant="ember">
                <a
                  href={`https://wa.me/910000000000?text=${encodeURIComponent(
                    `Hi! Can I get the itinerary and next dates for ${experience.name}?`,
                  )}`}
                  rel="noopener"
                  target="_blank"
                >
                  <WhatsAppIcon size={18} />
                  Get itinerary &amp; dates
                </a>
              </Button>
            </div>
          </div>
        </section>
        <MountainDivider from="var(--color-accent-deep)" to="var(--color-bg)" />

        {/* Cross-sell */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
              Different pace?
            </h2>
            <div className="flex flex-wrap gap-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/experiences/${o.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ember hover:text-ember-deep"
                >
                  {o.name} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">{label}</p>
      <p className="mt-1 text-sm text-ink">{value}</p>
    </div>
  )
}
