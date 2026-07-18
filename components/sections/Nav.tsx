'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Mountain, X } from 'lucide-react'

const links = [
  { href: '/experiences', label: 'Experiences' },
  { href: '/#community', label: 'Community' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ember/10 shadow-sm shadow-black/5">
      {/* topo texture lives on this inner wrapper, not the sticky header itself —
          .topo sets position:relative, which would fight position:sticky on the same element */}
      <div className="topo topo-top bg-accent-deep/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-bg"
          >
            <Mountain size={19} className="text-ember-bright" strokeWidth={2.25} />
            Nature<span className="text-ember-bright">Fix</span>
          </Link>
          <nav className="hidden gap-8 text-sm font-medium sm:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-bg/80 transition-colors hover:text-ember-bright">
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            className="flex items-center justify-center p-2 text-bg sm:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-4 border-t border-bg/10 px-6 py-5 text-sm font-medium sm:hidden">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-bg/85">
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
