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
      className={`fixed top-0 left-0 w-full border-b border-(--color-border) bg-(--color-surface-3-a80) shadow-(--shadow-navigation) backdrop-blur-md transition-all ${open ? 'z-40' : 'z-50'}`}>
      <div className="max-w-8xl mx-auto flex min-h-18 items-center justify-between px-8 py-4 md:px-20">
        <Link
          href="/"
          className="group relative inline-flex transform-gpu items-center text-2xl font-bold tracking-tight text-(--color-accent) transition-colors duration-300 ease-out hover:text-(--color-accent-weak) focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-3-a80) focus-visible:outline-none">
          <span className="inline-block transform-gpu transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-px motion-safe:group-hover:scale-103">
            Zenshuii
          </span>
        </Link>
        <DesktopNav />
        <button
          className="cursor-pointer rounded-full p-1 text-2xl text-(--color-accent) transition hover:bg-(--color-accent-a15) focus:outline-none active:bg-(--color-accent-a20) md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(true)}>
          <Menu size={32} />
        </button>
      </div>
      <MobileNav open={open} setOpen={setOpen} />
    </nav>
  );
}
