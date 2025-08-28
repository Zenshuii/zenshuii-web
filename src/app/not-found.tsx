'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-surface-2)] px-4 text-[var(--color-foreground)]">
      <motion.h1
        className="mb-4 text-6xl font-bold tracking-tight"
        style={{ color: 'var(--color-accent)' }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}>
        404
      </motion.h1>
      <motion.h2
        className="mb-2 text-2xl font-semibold"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}>
        Page Not Found
      </motion.h2>
      <motion.p
        className="mb-8 max-w-md text-center text-[var(--color-text-muted)]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}>
        Sorry, the page you are looking for does not exist or has been moved.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-2 text-base font-semibold text-[var(--color-surface-3)] shadow-md transition-all duration-200 hover:scale-105 hover:bg-[var(--color-accent-weak)] hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-2)] focus-visible:outline-none active:scale-95"
          aria-label="Go Home">
          Go Home
        </Link>
      </motion.div>
    </main>
  );
}
