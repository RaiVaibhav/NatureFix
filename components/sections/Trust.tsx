import Link from 'next/link'
import { Reveal } from '@/components/Reveal'
import { PhotoFrame } from '@/components/PhotoFrame'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { images } from '@/lib/images'

const credentials = [
  'Certified Wilderness EMT (NOLS Wilderness Medicine)',
  'NOLS & Outward Bound instruction · Avalanche 1&2',
  'Record Himalayan ascents — 21,000 ft Menthosa, speed ascent of Stok Kangri (6,124 m), solo Kanamo (6,000 m)',
  'Certified tandem paragliding pilot',
  'Vipassana practice · trauma-informed facilitation',
]

export function Trust() {
  return (
    <section id="about" className="py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[5fr_7fr] md:gap-16">
        <Reveal className="grid gap-4">
          <PhotoFrame
            src={images.trustPortrait.src}
            credit={images.trustPortrait.credit}
            alt="A line of hikers on a ridge trail toward the Dhauladhar peaks, candid, not posed"
            className="aspect-[4/5] w-full"
            wash="light"
          />
          <PhotoFrame
            src={images.trustSecondary.src}
            credit={images.trustSecondary.credit}
            alt="The Dhauladhar range in layered light"
            className="aspect-[16/7] w-full"
            rotate={1.5}
            wash="light"
          />
        </Reveal>

        <Reveal delay={0.12}>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Who's behind this
          </span>
          <h2 className="max-w-lg font-display text-3xl font-medium leading-snug text-ink sm:text-4xl">
            Hosted by people who read mountains for a living.
          </h2>
          <p className="mt-5 max-w-lg text-ink">
            Nature Fix is led by <b className="font-semibold">Ishani</b> — a professional
            mountain instructor whose decade in the high Himalayas is the quiet spine of every
            weekend we run:
          </p>
          <div className="gradient-pine topo mt-5 max-w-lg rounded-2xl p-6">
            <ul className="grid gap-2.5 text-sm text-bg/85">
              {credentials.map((c) => (
                <li key={c} className="relative pl-5">
                  <span className="absolute left-0 text-ember-bright">—</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 max-w-lg text-sm text-ink-soft">
            <b className="font-semibold text-ink">Vaibhav</b> builds the systems and the
            hospitality underneath it all — and is a certified tandem paragliding pilot in his
            own right — so that from first message to final tea, everything just works.
          </p>
          <p className="mt-3 max-w-lg text-sm text-ink-soft">
            Both hosts are certified pilots themselves — so when we talk about wind, thermals,
            and go/no-go calls, it's not secondhand knowledge.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button asChild variant="ghost">
              <Link href="/about">More about us →</Link>
            </Button>
            <Badge>
              <a href="https://www.instagram.com/adventureishani/" rel="noopener" target="_blank">
                @adventureishani
              </a>
            </Badge>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
