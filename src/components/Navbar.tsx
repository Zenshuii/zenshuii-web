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
      className={`fixed top-0 left-0 w-full border-b border-(--color-border) bg-(--color-surface-2-a90) shadow-(--shadow-navigation) backdrop-blur-xl transition-all ${open ? 'z-40' : 'z-50'}`}>
      <div className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between py-3">
          <Link
            href="/"
            className="inline-flex text-2xl leading-none font-semibold tracking-[-0.045em] text-(--color-accent) transition-colors duration-300 ease-out hover:text-(--color-accent-weak) focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none">
            Zenshuii
          </Link>
          <DesktopNav />
          <button
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-(--color-border-strong) bg-(--color-surface-1) text-(--color-accent) transition-colors duration-200 hover:border-(--color-accent-a30) hover:bg-(--color-accent-a10) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none active:bg-(--color-accent-a15) md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}>
            <Menu size={26} />
          </button>
        </div>
      </div>
      <MobileNav open={open} setOpen={setOpen} />
    </nav>
  );
}
