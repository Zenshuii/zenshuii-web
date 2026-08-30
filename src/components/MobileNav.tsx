'use client';

import Link from 'next/link';
import { ChevronDown, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/navLinks';
import { isActiveLink, isAnyChildActive } from '@/utils/navHelpers';

export function MobileNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);
  const pathname = usePathname();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    },
    [setOpen],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, handleKeyDown]);

  if (!mounted) return null;

  return createPortal(
    <>
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-200 ${
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        aria-hidden={!open}
        inert={!open}
        className={`fixed top-0 right-0 z-50 flex h-full w-88 max-w-[88vw] flex-col border-l border-(--color-border-strong) bg-(--color-surface-1) px-6 pt-6 pb-10 shadow-(--shadow-card) transition-[opacity,transform] duration-300 ${
          open
            ? 'translate-x-0 opacity-100'
            : 'pointer-events-none translate-x-full opacity-0'
        }`}>
        <button
          type="button"
          className="absolute top-5 right-6 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-(--color-border-strong) bg-(--color-surface-2) text-(--color-accent) transition-colors duration-200 hover:border-(--color-accent-a30) hover:bg-(--color-accent-a10) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none active:bg-(--color-accent-a15)"
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}>
          <X size={24} />
        </button>
        <nav className="mt-16 flex w-full flex-col gap-1" aria-label="Mobile">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  type="button"
                  onClick={() => setAppsOpen((value) => !value)}
                  className={`mt-1 flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-3 text-base font-medium transition-colors duration-200 hover:bg-(--color-accent-a10) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none active:bg-(--color-accent-a15) ${
                    appsOpen ||
                    isActiveLink(pathname, link.href) ||
                    isAnyChildActive(link, pathname)
                      ? 'text-(--color-accent)'
                      : 'text-(--color-on-surface)'
                  }`}
                  aria-expanded={appsOpen}
                  aria-controls="apps-subnav"
                  tabIndex={open ? 0 : -1}>
                  <span>{link.label}</span>
                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-200 ${
                      appsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {appsOpen && (
                  <div
                    id="apps-subnav"
                    className="ml-1 flex flex-col border-l border-(--color-accent-a20) py-1 pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        tabIndex={open ? 0 : -1}
                        className={`rounded-lg px-2 py-2.5 text-left text-sm transition-colors duration-200 hover:bg-(--color-accent-a10) hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none active:bg-(--color-accent-a15) ${
                          isActiveLink(pathname, child.href)
                            ? 'font-semibold text-(--color-accent)'
                            : 'text-(--color-on-surface)'
                        }`}>
                        {child.label}
                      </Link>
                    ))}
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      tabIndex={open ? 0 : -1}
                      className={`mt-2 rounded-lg border-t border-(--color-border) px-2 py-2.5 text-left text-sm font-semibold transition-colors duration-200 hover:bg-(--color-accent-a10) hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none active:bg-(--color-accent-a15) ${
                        pathname === link.href
                          ? 'text-(--color-accent)'
                          : 'text-(--color-on-surface)'
                      }`}>
                      Show All Apps
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={`w-full rounded-xl px-3 py-3 text-left text-base font-medium transition-colors duration-200 hover:bg-(--color-accent-a10) hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none active:bg-(--color-accent-a15) ${
                  isActiveLink(pathname, link.href)
                    ? 'text-(--color-accent)'
                    : 'text-(--color-on-surface)'
                }`}>
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </aside>
    </>,
    document.body,
  );
}
