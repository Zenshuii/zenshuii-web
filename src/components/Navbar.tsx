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
      className={`
    fixed top-0 left-0 w-full
    bg-white/80 dark:bg-[#232323]/80
    backdrop-blur
    transition-all
    ${open ? 'z-40' : 'z-50'}  // Lower z-index when mobile nav is open
    shadow-[0_2px_16px_0_rgba(0,0,0,0.08)]
    dark:shadow-[0_2px_24px_0_rgba(0,0,0,0.65)]
  `}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-[#FFB877] tracking-tight">
          Zenshuii
        </Link>
        <DesktopNav />
        <button
          className="md:hidden text-[#FFB877] text-2xl rounded-full p-1 transition hover:bg-[#FFB877]/15 cursor-pointer"
          aria-label="Open menu"
          onClick={() => setOpen(true)}>
          <Menu size={32} />
        </button>
      </div>
      <MobileNav open={open} setOpen={setOpen} />
    </nav>
  );
}
