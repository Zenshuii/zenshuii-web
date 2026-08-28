'use client';

import { useState } from 'react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full border-b border-(--color-border) bg-(--color-surface-2-a90) shadow-(--shadow-navigation) backdrop-blur-md transition-all ${open ? 'z-40' : 'z-50'}`}>
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group relative inline-flex transform-gpu items-center gap-3 text-2xl font-bold tracking-tight text-(--color-accent) transition-colors duration-300 ease-out hover:text-(--color-accent-weak) focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none">
          <span
            aria-hidden="true"
            className="h-7.5 w-7.5 shrink-0 bg-(--color-accent) transition-colors duration-300 group-hover:bg-(--color-accent-weak)"
            style={{
              maskImage: 'url(/zenshuii-logo-white.svg)',
              maskPosition: 'center',
              maskRepeat: 'no-repeat',
              maskSize: 'contain',
              WebkitMaskImage: 'url(/zenshuii-logo-white.svg)',
              WebkitMaskPosition: 'center',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskSize: 'contain',
            }}
          />
          <span className="inline-block transform-gpu transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-px motion-safe:group-hover:scale-103">
            Zenshuii
          </span>
        </Link>
        <DesktopNav />
        <button
          className="cursor-pointer rounded-full p-1 text-2xl text-(--color-accent) transition hover:bg-(--color-accent-a15) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none active:bg-(--color-accent-a20) md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(true)}>
          <Menu size={32} />
        </button>
      </div>
      <MobileNav open={open} setOpen={setOpen} />
    </nav>
  );
}
