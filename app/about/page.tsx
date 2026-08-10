import { Nav } from "@/components/sections/Nav"
import { Footer } from "@/components/sections/Footer"
import { Reveal } from "@/components/Reveal"
import { PhotoFrame } from "@/components/PhotoFrame"
import { Badge } from "@/components/ui/badge"
import { images } from "@/lib/images"

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="px-6 py-10 sm:py-16 max-w-4xl mx-auto">
          <Reveal>
            <h1 className="font-display text-4xl font-medium leading-tight text-ink sm:text-6xl max-w-3xl">
              Hosted by people who read mountains for a living.
            </h1>
            <p className="mt-6 text-lg text-ink-soft max-w-2xl leading-relaxed">
              We believe the wilderness isn't something to conquer. It's a place to return to. We built Nature Fix to bring people out of the noise and into the quiet of the high Himalayas — safely, honestly, and with deep respect for the local communities that host us.
            </p>
          </Reveal>
        </section>

        {/* Ishani's Story Section */}
        <section className="bg-bg-alt py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 items-center">
            <Reveal delay={0.1}>
              <PhotoFrame
                src={images.ishaniProfile.src}
                credit={images.ishaniProfile.credit}
                alt="Ishani in the mountains"
                className="aspect-[4/5] w-2/3 mx-auto md:w-full"
                wash="light"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-accent">
                The Guide
              </span>
              <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
                Ishani's Story
              </h2>
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
                    className="h-16 sm:h-28 w-auto object-contain drop-shadow-sm"
                  />
                ))}
              </div>
              <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
                <p>
                  Ishani is a Wilderness EMT (NREMT in the US) and a BCP Wilderness Medicine Instructor. With a background in law and forensic science, she transitioned her meticulous attention to detail into the outdoors.
                </p>
                <p>
                  She is certified in Risk Management for Outdoor Adventure Programs by Viristar USA and is a Master Educator for the Leave No Trace Center for Outdoor Ethics. Her career in the adventure industry spans the globe, having worked extensively across the US, UAE, Hong Kong, Thailand, UK, France, India, and Nepal.
                </p>
                <p>
                  She has served as a Field Instructor for NOLS India and Outward Bound Colorado, alongside holding certifications as an AMGA Single Pitch Instructor and AIARE Level 1 avalanche responder.
                </p>
                <p>
                  Her decade in the high Himalayas is the quiet spine of every weekend we run. She holds the record for ascending five Himalayan peaks in a single month (including a solo ascent of 6,000m Kanamo Peak and a speed ascent of 6,124m Stok Kangri). She brings rigorous safety protocols, deep local knowledge, and an unwavering calm to every expedition.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Vaibhav's Role Section */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:grid-flow-col items-center">
            <Reveal delay={0.1} className="md:col-start-2">
              <PhotoFrame
                src={images.vaibhavProfile.src}
                credit={images.vaibhavProfile.credit}
                alt="Vaibhav in the mountains"
                className="aspect-square w-2/3 mx-auto md:w-full"
                imageClassName="object-[center_20%]"
                rotate={-1.5}
                wash="light"
              />
            </Reveal>
            <Reveal delay={0.2} className="md:col-start-1">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-accent">
                The Architect
              </span>
              <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
                Vaibhav's Role
              </h2>
              <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
                <p>
                  Vaibhav builds the systems and the hospitality underneath it all. From the first message you send to the final cup of tea before you leave, everything just works because of his meticulous planning.
                </p>
                <p>
                  He completed his Basic Mountaineering Course, holds a professional P5 paragliding rating, and has been flying for the past 5 years. He ensures the backend of your adventure is invisible, allowing you to stay completely present in the wilderness.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Badge>
                  <a href="https://www.instagram.com/flying.fool/" rel="noopener" target="_blank">
                    @flying.fool
                  </a>
                </Badge>
              </div>
            </Reveal>
          </div>
        </section>

        {/* The Decision Filter */}
        <section className="bg-ink py-24 sm:py-32 text-bg">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <h2 className="font-display text-3xl font-medium sm:text-4xl mb-12 text-center text-pine-100">
                What We Will Never Compromise
              </h2>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-medium mb-3 text-pine-200">1. Absolute Safety</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    We bring medical-grade wilderness first aid kits, emergency communication devices, and strictly adhere to go/no-go weather calls. If it's not safe, we don't go.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-medium mb-3 text-pine-200">2. Honest Marketing</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    We never use filters or fake saturation. What you see is what you get on the mountain. We don't over-promise.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-medium mb-3 text-pine-200">3. True Integrity</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    We don't cut corners on transport, food quality, or gear. Every rupee you spend translates directly into the quality of your experience.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-medium mb-3 text-pine-200">4. Local Respect</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    We pay our local partners fairly and on time. We respect the trails, pack out our trash, and honor the communities that let us walk through their backyards.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
