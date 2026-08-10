import Link from 'next/link'
import { Reveal } from '@/components/Reveal'
import { PhotoFrame } from '@/components/PhotoFrame'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { images } from '@/lib/images'

const credentials = [
  'Wilderness EMT (NREMT) & BCP Wilderness Medicine Instructor',
  'Certified in Risk Management (Viristar USA) & Leave No Trace Master Educator',
  'Field Instructor for NOLS India & Outward Bound Colorado',
  'AMGA Single Pitch Instructor (SPI) · AIARE Level 1 · Swiftwater Rescue',
  'Record ascents of 5 Himalayan peaks in one month (incl. 6,401m Menthosa, 6,124m Stok Kangri)',
  'Adventure industry experience across the US, UK, France, UAE, Hong Kong, Thailand, India, and Nepal',
]

export function Trust() {
  return (
    <section id="about" className="py-28 sm:py-36">

      {/* Heading Block */}
      <div className="mx-auto max-w-6xl px-6 mb-16">
        <Reveal>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Who's behind this
          </span>
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-snug text-ink sm:text-4xl">
            Hosted by people who read mountains for a living.
          </h2>
        </Reveal>
      </div>

      {/* Team Grid: Left col images, Right col text (Interleaves on mobile) */}
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[5fr_7fr] md:gap-x-16 md:gap-y-24 items-start">

        {/* Ishani Photo */}
        <Reveal className="md:mt-0">
          <PhotoFrame
            src={images.ishaniProfile.src}
            credit={images.ishaniProfile.credit}
            alt="Ishani"
            className="aspect-[4/5] w-2/3 mx-auto md:w-full"
            wash="light"
          />
        </Reveal>

        {/* Ishani Text */}
        <Reveal delay={0.12} className="md:mt-0">
          <p className="text-ink">
            Nature Fix is led by <b className="font-semibold">Ishani</b> — a professional
            mountain instructor whose decade in the high Himalayas is the quiet spine of every
            weekend we run:
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Badge>
              <a href="https://www.instagram.com/adventureishani/" rel="noopener" target="_blank">
                @adventureishani
              </a>
            </Badge>
          </div>
          <div className="mt-5 flex items-center gap-2 sm:gap-3">
            {[
              { alt: 'WFA', src: images.badgeWfa.src },
              { alt: 'WAFA', src: images.badgeWafa.src },
              { alt: 'WFR', src: images.badgeWfr.src },
              { alt: 'WEMT', src: images.badgeWemt.src }
            ].map((badge) => (
              <img
                key={badge.alt}
                src={badge.src}
                alt={`${badge.alt} Certification Badge`}
                className="h-16 sm:h-28 w-auto object-contain drop-shadow-sm shrink-0"
              />
            ))}
          </div>
          <div className="gradient-pine topo mt-6 max-w-lg rounded-2xl p-6">
            <ul className="grid gap-2.5 text-sm text-bg/85">
              {credentials.map((c) => (
                <li key={c} className="relative pl-5">
                  <span className="absolute left-0 text-ember-bright">—</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Vaibhav Photo */}
        <Reveal delay={0.1} className="md:mt-0">
          <PhotoFrame
            src={images.vaibhavProfile.src}
            credit={images.vaibhavProfile.credit}
            alt="Vaibhav"
            className="aspect-[4/5] w-2/3 mx-auto md:w-full"
            imageClassName="object-[center_20%]"
            wash="light"
          />
        </Reveal>

        {/* Vaibhav Text */}
        <Reveal delay={0.2} className="md:mt-0">
          <p className="max-w-lg text-ink">
            <b className="font-semibold text-ink">Vaibhav</b> builds the systems and the
            hospitality underneath it all so that from first message to final tea, everything just works.
            and comes from the engineering background.<br /><br />

            He has done his Basic Mountaineering Course, holds a professional P5 paragliding rating, a licensed skydiver and has been flying for the past 5 years.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Badge>
              <a href="https://www.instagram.com/flying.fool/" rel="noopener" target="_blank">
                @flying.fool
              </a>
            </Badge>
          </div>
        </Reveal>

      </div>

      {/* CTA Button */}
      <div className="mx-auto mt-10 max-w-6xl">
        <Reveal delay={0.3}>
          <Button asChild variant="ghost">
            <Link href="/about">More about us →</Link>
          </Button>
        </Reveal>
      </div>

    </section >
  )
}
