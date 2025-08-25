'use client';

import { motion, useReducedMotion, easeInOut } from 'framer-motion';
import Link from 'next/link';

const stoicLogo = '/apps/stoic-thumb.png';
const stoicAppUrl = 'https://stoic-app.com/';

export default function StoicAppPage() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center bg-[var(--color-surface-2)] px-4 pt-24 pb-12 sm:pt-32 sm:pb-24">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <motion.img
          src={stoicLogo}
          alt="Stoic App Logo"
          className="mb-6 h-20 w-20 rounded-2xl bg-[var(--color-surface-3)] object-contain shadow-md ring-2 ring-[var(--color-accent)]"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
          animate={shouldReduceMotion ? false : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: easeInOut }}
        />
        <motion.h1
          className="mb-1 text-5xl font-extrabold tracking-tight text-[var(--color-accent)] sm:text-6xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: -32 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeInOut }}>
          Stoic
        </motion.h1>
        <motion.p
          className="mb-2 text-lg font-normal text-[var(--color-text-muted)] sm:text-xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.6, ease: easeInOut }}>
          Mindful Journaling & Reflection
        </motion.p>
        <motion.span
          className="mt-1 mb-6 inline-block rounded-full bg-[var(--color-accent-a10)] px-3 py-0.5 text-[10px] font-semibold tracking-wider text-[var(--color-accent)] uppercase shadow-sm ring-1 ring-[var(--color-accent-a20)]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ delay: 0.07, duration: 0.5, ease: easeInOut }}>
          Coming Soon
        </motion.span>
        <motion.hr
          aria-hidden="true"
          className="mx-auto mb-6 w-12 origin-center border-t-4 border-[var(--color-accent)] opacity-40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.12, duration: 0.5, ease: easeInOut }}
          style={{ transformOrigin: 'center' }}
        />
        <motion.p
          className="mb-8 max-w-xl text-base leading-relaxed text-[var(--color-on-surface)]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: easeInOut }}>
          Stoic is a mindful journaling and reflection app by Zenshuii, designed
          to help you live with intention and clarity. To learn more, join the
          waitlist, or explore features, visit the official Stoic App website.
        </motion.p>
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: easeInOut }}>
          <Link
            href={stoicAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-3 text-base font-semibold text-[var(--color-surface-3)] shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[var(--color-accent-weak)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-3)]">
            Visit Stoic App Website
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
