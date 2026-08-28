'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { createRevealMotion } from '@/utils/motion';

export default function NotFound() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-(--color-surface-2) px-4 text-(--color-foreground)">
      <motion.h1
        className="mb-4 text-6xl font-bold tracking-tight"
        style={{ color: 'var(--color-accent)' }}
        {...createRevealMotion(shouldReduceMotion, { distance: 32 })}>
        404
      </motion.h1>
      <motion.h2
        className="mb-2 text-2xl font-semibold"
        {...createRevealMotion(shouldReduceMotion, { delay: 0.1 })}>
        Page Not Found
      </motion.h2>
      <motion.p
        className="mb-8 max-w-md text-center text-(--color-text-muted)"
        {...createRevealMotion(shouldReduceMotion, { delay: 0.2 })}>
        Sorry, the page you are looking for does not exist or has been moved.
      </motion.p>
      <motion.div {...createRevealMotion(shouldReduceMotion, { delay: 0.3 })}>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-(--color-accent) px-6 py-2 text-base font-semibold text-(--color-on-accent) shadow-(--shadow-button) transition-all duration-200 hover:bg-(--color-accent-hover) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none active:opacity-85 motion-safe:hover:-translate-y-px"
          aria-label="Go Home">
          Go Home
        </Link>
      </motion.div>
    </main>
  );
}
