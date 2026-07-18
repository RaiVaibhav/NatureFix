import { Reveal } from '@/components/Reveal'
import { PhotoFrame } from '@/components/PhotoFrame'
import { images } from '@/lib/images'

const steps = [
  { title: 'Welcomed before you arrive', copy: "A message, a group, a name that's known before you reach the mountains." },
  { title: 'Held by the place', copy: 'Local tables, slow mornings, a village that belongs to itself.' },
  { title: 'Gently challenged', copy: 'A walk, a climb, a flight — always your choice, never a test.' },
  { title: 'Around the fire', copy: 'Strangers becoming friends, one honest circle at a time.' },
  { title: 'Sent home with a next step', copy: 'Photos within a day, and a door left open — the goodbye tea is never really goodbye.' },
]

export function Feels() {
  return (
    <section className="relative border-y border-line bg-bg-raised py-28 sm:py-36">
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            How a Nature Fix weekend feels
          </span>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Not an itinerary. An arc.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] border-t-2 border-dashed border-ember/35 lg:block" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="relative flex flex-col gap-3">
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-ember bg-ember text-sm font-semibold text-bg shadow-md shadow-ember/20">
                  {i + 1}
                </span>
                <h3 className="text-sm font-semibold leading-snug text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{s.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="mt-16">
          <PhotoFrame
            src={images.fireCircle.src}
            credit={images.fireCircle.credit}
            alt="Faces lit by firelight, candid, no posing"
            className="aspect-[21/9] w-full"
            wash="light"
          />
        </Reveal>
      </div>
    </section>
  )
}
