'use client';

import Link from 'next/link';
import { X, ChevronDown } from 'lucide-react';
import { navLinks } from '@/data/navLinks';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { isActiveLink, isAnyChildActive } from '@/utils/navHelpers';
import { calmControlTransition, calmInteractionSpring } from '@/utils/motion';

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

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    },
    [setOpen],
  );

  useEffect(() => {
    setMounted(true);
    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, handleKeyDown]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={calmControlTransition}
            onClick={() => setOpen(false)}
          />
          {/* Drawer */}
          <motion.aside
            key="drawer"
            className="fixed top-0 right-0 z-50 flex h-full w-88 max-w-[88vw] flex-col border-l border-(--color-border-strong) bg-(--color-surface-1) px-6 pt-6 pb-10 shadow-(--shadow-card)"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={calmInteractionSpring}>
            {/* Close button */}
            <button
              className="absolute top-5 right-6 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-(--color-border-strong) bg-(--color-surface-2) text-(--color-accent) transition-colors duration-200 hover:border-(--color-accent-a30) hover:bg-(--color-accent-a10) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none active:bg-(--color-accent-a15)"
              aria-label="Close menu"
              onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
            <nav className="mt-16 flex w-full flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setAppsOpen((v) => !v)}
                      className={`mt-1 flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-(--color-on-surface) transition-colors duration-200 hover:bg-(--color-accent-a10) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none active:bg-(--color-accent-a15) ${
                        appsOpen ||
                        isActiveLink(pathname, link.href) ||
                        isAnyChildActive(link, pathname)
                          ? 'text-(--color-accent)'
                          : 'text-(--color-on-surface)'
                      }`}
                      aria-expanded={appsOpen}
                      aria-controls="apps-subnav">
                      <span>{link.label}</span>
                      <motion.span
                        animate={{ rotate: appsOpen ? 180 : 0 }}
                        transition={calmInteractionSpring}
                        className={`ml-2 inline-block ${
                          appsOpen ||
                          isActiveLink(pathname, link.href) ||
                          isAnyChildActive(link, pathname)
                            ? 'text-(--color-accent)'
                            : 'text-(--color-on-surface)'
                        }`}>
                        <ChevronDown size={22} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {appsOpen && (
                        <motion.div
                          id="apps-subnav"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={calmControlTransition}
                          className="ml-1 flex flex-col overflow-hidden border-l border-(--color-accent-a20) pl-4">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
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
                            className={`mt-2 rounded-lg border-t border-(--color-border) px-2 py-2.5 text-left text-sm font-semibold transition-colors duration-200 hover:bg-(--color-accent-a10) hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none active:bg-(--color-accent-a15) ${
                              pathname === link.href
                                ? 'text-(--color-accent)'
                                : 'text-(--color-on-surface)'
                            }`}>
                            Show All Apps
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
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
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
