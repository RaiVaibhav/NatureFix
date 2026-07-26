import { Reveal } from '@/components/Reveal'
import { PhotoFrame } from '@/components/PhotoFrame'
import { MountainDivider } from '@/components/MountainDivider'
import { images } from '@/lib/images'

const layers = [
  { label: 'Experiences', copy: 'bring you in.' },
  { label: 'Community', copy: 'keeps you.' },
  { label: 'Legacy', copy: 'outlasts the weekend.' },
]

export function Reframe() {
  return (
    <>
      <section className="gradient-dusk topo relative overflow-hidden py-24 sm:py-32">
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.8fr]">
            <Reveal className="text-center md:text-left">
              <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ember-bright">
                <span className="h-1.5 w-1.5 rounded-full bg-ember-bright" />
                Why Nature Fix
              </span>
              <p className="mx-auto max-w-xl font-display text-3xl font-medium leading-snug tracking-tight text-bg sm:text-4xl md:mx-0">
                Adventure is just one of our tools, not the whole toolbox. The real
                change is{' '}
                <em className="text-ember-bright not-italic font-semibold italic">
                  transformation through mountain culture
                </em>{' '}
                — the people you meet, the confidence you find, the village that slows you down.
              </p>
              <div className="mx-auto mt-10 flex flex-wrap justify-center gap-3 md:justify-start">
                {layers.map((l) => (
                  <span
                    key={l.label}
                    className="rounded-full border border-bg/20 bg-bg/5 px-4 py-2 text-sm text-bg/80"
                  >
                    <b className="font-semibold text-ember-bright">{l.label}</b> {l.copy}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <PhotoFrame
                src={images.reframeTexture.src}
                credit={images.reframeTexture.credit}
                alt="Fire glow at dusk — texture, not landscape"
                className="aspect-[4/5] w-full max-w-xs mx-auto md:mx-0 md:ml-auto"
                rotate={-2}
                wash="light"
              />
            </Reveal>
          </div>
        </div>
      </section>
      <MountainDivider from="var(--color-accent-deep)" to="var(--color-bg)" />
    </>
  )
}
