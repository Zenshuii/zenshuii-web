import Link from 'next/link';
import { X, ChevronDown } from 'lucide-react';
import { navLinks } from '@/data/navLinks';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useEffect, useState, useCallback } from 'react';

export function MobileNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);

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

  // Flatten navLinks for Home/About/Contact, and separate Apps children
  const otherLinks = navLinks.filter((l) => !l.children);
  const appsLink = navLinks.find((l) => l.label === 'Apps');

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
            className="fixed top-0 right-0 z-50 flex h-full w-80 max-w-[90vw] flex-col border-l border-[#FFB877]/20 bg-white px-6 pt-8 pb-10 shadow-2xl dark:bg-[#1C1C1C]"
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
              {/* First two links */}
              {otherLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="w-full rounded-lg px-2 py-3 text-left text-lg font-semibold text-[#232323] transition-all hover:bg-[#FFB877]/15 focus:outline-none active:scale-95 dark:text-[#F5F5F5]">
                  {link.label}
                </Link>
              ))}

              {/* Apps collapsible as the 3rd item */}
              {appsLink && (
                <>
                  <button
                    onClick={() => setAppsOpen((v) => !v)}
                    className="mt-1 flex w-full cursor-pointer items-center justify-between rounded-lg px-2 py-3 text-lg font-semibold text-[#232323] transition-all hover:bg-[#FFB877]/15 focus:outline-none dark:text-[#F5F5F5]"
                    aria-expanded={appsOpen}
                    aria-controls="apps-subnav">
                    <span>Apps</span>
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
                        {appsLink.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="rounded-md py-2 pl-2 text-left text-base text-[#232323] transition-all hover:bg-[#FFB877]/15 active:scale-95 dark:text-[#F5F5F5]">
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}

              {/* Remaining links, if any */}
              {otherLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="w-full rounded-lg px-2 py-3 text-left text-lg font-semibold text-[#232323] transition-all hover:bg-[#FFB877]/15 focus:outline-none active:scale-95 dark:text-[#F5F5F5]">
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
