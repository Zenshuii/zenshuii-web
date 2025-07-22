'use client';

import Link from 'next/link';
import { X, ChevronDown } from 'lucide-react';
import { navLinks } from '@/data/navLinks';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
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
            onClick={() => setOpen(false)}
          />
          {/* Drawer */}
          <motion.aside
            key="drawer"
            className="fixed top-0 right-0 z-50 flex h-full w-80 max-w-[90vw] flex-col border-l border-[#FFB877]/20 bg-[#1C1C1C] px-6 pt-8 pb-10 shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 36 }}>
            {/* Close button */}
            <button
              className="absolute top-5 right-6 z-50 cursor-pointer rounded-full p-1 text-[#FFB877] transition hover:bg-[#FFB877]/15"
              aria-label="Close menu"
              onClick={() => setOpen(false)}>
              <X size={32} />
            </button>
            <nav className="mt-8 flex w-full flex-col gap-2">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setAppsOpen((v) => !v)}
                      className={`mt-1 flex w-full cursor-pointer items-center justify-between rounded-lg px-2 py-3 text-lg font-semibold text-[#F5F5F5] transition-all hover:bg-[#FFB877]/15 focus:outline-none ${
                        appsOpen || isAnyChildActive(link, pathname)
                          ? 'text-[#FFB877]'
                          : 'text-[#F5F5F5]'
                      }`}
                      aria-expanded={appsOpen}
                      aria-controls="apps-subnav">
                      <span>{link.label}</span>
                      <motion.span
                        animate={{ rotate: appsOpen ? 180 : 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 24,
                        }}
                        className="ml-2 inline-block">
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
                          transition={{
                            duration: 0.19,
                            ease: [0.4, 0.14, 0.3, 1],
                          }}
                          className="ml-1 flex flex-col overflow-hidden border-l border-[#FFB877]/20 pl-4">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className={`rounded-md py-2 pl-2 text-left text-base transition-all hover:bg-[#FFB877]/15 active:scale-95 ${
                                isActiveLink(pathname, child.href)
                                  ? 'font-semibold text-[#FFB877]'
                                  : 'text-[#F5F5F5]'
                              }`}>
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`w-full rounded-lg px-2 py-3 text-left text-lg font-semibold transition-all hover:bg-[#FFB877]/15 focus:outline-none active:scale-95 ${
                      isActiveLink(pathname, link.href)
                        ? 'text-[#FFB877]'
                        : 'text-[#F5F5F5]'
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
