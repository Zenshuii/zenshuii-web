'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="relative flex w-full flex-1 flex-col items-center justify-center bg-[var(--color-surface-2)] px-4 pt-[72px] pb-[56px] sm:px-4">
      <motion.article
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 mt-14 w-full max-w-xl rounded-2xl border border-[var(--color-accent-a20)] bg-[var(--color-surface-2-a90)] p-4 text-center shadow-xl sm:mt-14 sm:p-8 md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
          className="mb-4 text-3xl font-bold tracking-tight text-[var(--color-accent)] md:text-4xl">
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="mb-8 text-lg text-[var(--color-on-surface)] md:text-xl">
          I&apos;d love to hear from you. Whether you have a question, feedback,
          or just want to connect, feel free to reach out directly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
          className="space-y-6 text-base text-[var(--color-on-surface)] md:text-lg">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="text-sm font-medium text-[var(--color-text-muted)]">
              Email
            </span>
            <a
              href="mailto:sim@zenshuii.com"
              className="flex cursor-pointer items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-2 text-base font-semibold text-[var(--color-surface-3)] shadow-md transition-all duration-200 hover:scale-105 hover:bg-[var(--color-accent-weak)] hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-2)] focus-visible:outline-none active:scale-95"
              aria-label="Email">
              <Mail size={18} aria-hidden="true" />
              sim@zenshuii.com
            </a>
          </div>
        </motion.div>
      </motion.article>
    </section>
  );
}
