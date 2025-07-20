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
      className={`fixed top-0 left-0 w-full bg-white/80 backdrop-blur transition-all dark:bg-[#232323]/80 ${open ? 'z-40' : 'z-50'} shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] dark:shadow-[0_2px_24px_0_rgba(0,0,0,0.65)]`}>
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-[#FFB877] transition-colors duration-200 hover:scale-105 hover:text-[#ffcb8a]">
          Zenshuii
        </Link>
        <DesktopNav />
        <button
          className="cursor-pointer rounded-full p-1 text-2xl text-[#FFB877] transition hover:bg-[#FFB877]/15 md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(true)}>
          <Menu size={32} />
        </button>
      </div>
      <MobileNav open={open} setOpen={setOpen} />
    </nav>
  );
}
