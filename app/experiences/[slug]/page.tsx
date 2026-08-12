import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, X } from 'lucide-react'
import { Nav } from '@/components/sections/Nav'
import { Footer } from '@/components/sections/Footer'
import { Reveal } from '@/components/Reveal'
import { ExperienceHero } from '@/components/sections/ExperienceHero'
import { JourneyArc } from '@/components/JourneyArc'
import { SignatureMoments } from '@/components/SignatureMoments'
import { ScrollProgress } from '@/components/ScrollProgress'
import { MountainDivider } from '@/components/MountainDivider'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { Button } from '@/components/ui/button'
import { experiences, listedExperiences, getExperience } from '@/lib/experiences'
import { touristTripSchema } from '@/lib/schema'

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
  const title = `${experience.name} · Nature Fix`
  return {
    title: experience.name,
    description: experience.promise,
    alternates: { canonical: `/experiences/${experience.slug}` },
    // drafts are reachable by URL but must never be indexed or previewed in a share card
    ...(experience.isUnlisted ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title,
      description: experience.promise,
      url: `/experiences/${experience.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: experience.promise,
    },
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

  const others = listedExperiences.filter((e) => e.slug !== experience.slug)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema(experience)) }}
      />
      <Nav />
      <ScrollProgress />
      {experience.isUnlisted && (
        <p className="bg-ember px-6 py-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-bg">
          Working draft — not listed anywhere, not indexed. Reachable by this link only.
        </p>
      )}
      <main className="flex-1">
        {/* Hero — pulled out into a Client Component to allow direct motion animations
            that match the feel of the main site homepage */}
        <ExperienceHero experience={experience} />

        {/* Intro + facts */}
        <section className="relative py-20 sm:py-24">
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <p className="max-w-2xl text-lg leading-relaxed text-ink">{experience.intro}</p>
              {experience.hostNote && (
                <p className="mt-6 max-w-2xl border-l-2 border-ember pl-4 text-sm leading-relaxed text-ink-soft">
                  {experience.hostNote}
                </p>
              )}
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
                  href={`https://wa.me/917018333288?text=${encodeURIComponent(
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
              A short WhatsApp message gets you availability, pricing, and a full itinerary.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" variant="ember">
                <a
                  href={`https://wa.me/917018333288?text=${encodeURIComponent(
                    `Hi! Can I get the pricing and a full itinerary for ${experience.name}?`,
                  )}`}
                  rel="noopener"
                  target="_blank"
                >
                  <WhatsAppIcon size={18} />
                  Get pricing &amp; details
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
