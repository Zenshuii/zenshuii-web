'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { navLinks } from '@/data/navLinks';
import { motion, AnimatePresence } from 'framer-motion';

export function MobileNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu-overlay"
          className="md:hidden fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          {/* Blurred backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setOpen(false)}
          />
          {/* Animated Card */}
          <motion.div
            className="
      relative bg-white dark:bg-[#1C1C1C] w-[90vw] max-w-xs
      rounded-2xl shadow-2xl px-6 py-10 flex flex-col items-center gap-4
      border border-[#FFB877]/20
      mx-auto mt-24
    "
            initial={{ scale: 0.94, y: 36, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.97, y: 28, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}>
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-[#FFB877] rounded-full p-1 transition hover:bg-[#FFB877]/15"
              aria-label="Close menu"
              onClick={() => setOpen(false)}>
              <X size={30} />
            </button>
            <div className="flex flex-col items-center gap-4 w-full">
              {navLinks.map((link) =>
                !link.children ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="
                      w-full text-center text-lg font-semibold rounded-lg py-3
                      text-[#232323] dark:text-[#F5F5F5]
                      hover:bg-[#FFB877]/15 active:scale-95 transition-all
                      focus:outline-none
                    ">
                    {link.label}
                  </Link>
                ) : (
                  <div
                    key={link.label}
                    className="w-full flex flex-col items-center">
                    <div className="w-full text-center text-lg font-semibold rounded-lg py-3 text-[#232323] dark:text-[#F5F5F5]">
                      {link.label}
                    </div>
                    <div className="flex flex-col gap-1 w-full pl-4 border-l border-[#FFB877]/20">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="
                            text-base text-[#232323] dark:text-[#F5F5F5]
                            rounded-md py-2 pl-2
                            hover:bg-[#FFB877]/15 active:scale-95 transition-all
                            text-left
                          ">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
