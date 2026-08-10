import Link from 'next/link'
import { MountainDivider } from '@/components/MountainDivider'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'

export function Footer() {
  return (
    <>
      <MountainDivider from="var(--color-bg-raised)" to="var(--color-accent-deep)" />
      <footer id="contact" className="gradient-dusk topo relative py-16 text-bg/85">
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-10 sm:grid-cols-[2fr_1fr_1fr]">
            <div>
              <span className="font-display text-lg font-semibold text-bg">
                Nature<span className="text-ember-bright">Fix</span>
              </span>
              <p className="mt-3 max-w-xs text-sm text-bg/65">
                Transformation through mountain culture — starting in Bir, built on community,
                stillness and trust.
              </p>
            </div>
            <div className="grid content-start gap-2.5">
              <b className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-bg/55">
                Explore
              </b>
              <Link href="/experiences" className="text-sm text-bg/85 hover:text-ember-bright">Experiences</Link>
              <Link href="/#community" className="text-sm text-bg/85 hover:text-ember-bright">Community</Link>
              <Link href="/about" className="text-sm text-bg/85 hover:text-ember-bright">About</Link>
              <Link href="/for-teams" className="text-sm text-bg/85 hover:text-ember-bright">For Teams (Coming soon)</Link>
            </div>
            <div className="grid content-start gap-2.5">
              <b className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-bg/55">
                Say hello
              </b>
              <a href="https://www.instagram.com/adventureishani/" rel="noopener" className="text-sm text-bg/85 hover:text-ember-bright">
                Instagram — @adventureishani
              </a>
              <a
                href="https://wa.me/917780935412"
                rel="noopener"
                className="inline-flex items-center gap-1.5 text-sm text-bg/85 hover:text-ember-bright"
              >
                <WhatsAppIcon size={15} />
                WhatsApp us
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-bg/15 pt-6 text-sm text-bg/55">
            <span>Bir, Himachal Pradesh, India — our first valley</span>
            <span>© 2026 Nature Fix</span>
          </div>
        </div>
      </footer>
    </>
  )
}
