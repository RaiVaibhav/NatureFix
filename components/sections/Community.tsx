import { Film, Sunset, Footprints, Coffee } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { PhotoFrame } from '@/components/PhotoFrame'
import { Button } from '@/components/ui/button'
import { images } from '@/lib/images'

const tiles = [
  { title: 'Film nights', copy: 'Mountain cinema, chai on tap.', icon: Film },
  { title: 'Landing Zone Sunsets', copy: 'Chai in hand, watching the last wings come down for the day.', icon: Sunset },
  { title: 'Trail days', copy: 'Leave the mountains better.', icon: Footprints },
  { title: 'Coffee mornings', copy: 'Slow tables, new friends.', icon: Coffee },
]

export function Community() {
  return (
    <section id="community" className="border-y border-line bg-bg-raised py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            Community
          </span>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            You don't have to book a weekend to belong.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.06}>
              <div className="group flex h-full flex-col gap-3 rounded-2xl border border-line bg-bg p-5 transition-all duration-200 hover:-translate-y-1 hover:border-ember hover:shadow-lg hover:shadow-ember/10">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-ember/40 bg-ember/10 text-ember-deep transition-colors group-hover:border-ember group-hover:bg-ember/15">
                  <t.icon size={17} />
                </span>
                <b className="text-sm font-semibold text-ink">{t.title}</b>
                <span className="text-sm text-ink-soft">{t.copy}</span>
              </div>
            </Reveal>
          ))}
        </div>


        <Reveal delay={0.28} className="mt-9">
          <Button asChild variant="ember">
            <a href="/experiences/rajgundha-reset">Come to the next one</a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
