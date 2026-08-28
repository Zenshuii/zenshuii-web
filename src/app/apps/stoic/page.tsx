'use client';

import { motion, useReducedMotion, easeInOut } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { stoicWaitlistHref } from '@/data/apps';

const stoicLogo = '/apps/stoic-thumb.png';

export default function StoicAppPage() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="relative flex w-full flex-1 flex-col items-center justify-center bg-(--color-surface-2) px-4 pt-18 pb-14 sm:px-4">
      <div className="relative z-10 mx-auto mt-14 flex w-full max-w-2xl flex-col items-center text-center sm:mt-14">
        <motion.img
          src={stoicLogo}
          alt="Stoic App Logo"
          className="mb-6 h-20 w-20 rounded-2xl bg-(--color-surface-3) object-contain shadow-md ring-2 ring-(--color-accent)"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
          animate={shouldReduceMotion ? false : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: easeInOut }}
        />
        <motion.h1
          className="mb-1 text-5xl font-bold tracking-tight text-(--color-accent) sm:text-6xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: -32 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeInOut }}>
          Stoic
        </motion.h1>
        <motion.p
          className="mb-2 text-lg font-normal text-(--color-text-muted) sm:text-xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.6, ease: easeInOut }}>
          Mindful Journaling & Reflection
        </motion.p>
        <motion.span
          className="mt-1 mb-6 inline-block rounded-full bg-(--color-accent-a10) px-3 py-0.5 text-[10px] font-semibold tracking-wider text-(--color-accent) uppercase shadow-sm ring-1 ring-(--color-accent-a20)"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ delay: 0.07, duration: 0.5, ease: easeInOut }}>
          Coming Soon
        </motion.span>
        <motion.hr
          aria-hidden="true"
          className="mx-auto mb-6 w-12 origin-center border-t-4 border-(--color-accent) opacity-40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.12, duration: 0.5, ease: easeInOut }}
        />
        <motion.p
          className="mb-8 max-w-xl text-base leading-relaxed text-(--color-on-surface)"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: easeInOut }}>
          Stoic is a mindful journaling and reflection app by Zenshuii, designed
          to help you live with intention and clarity. Join the waitlist for
          launch updates.
        </motion.p>
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: easeInOut }}>
          <Link
            href={stoicWaitlistHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-(--color-accent) px-6 py-2.5 text-sm font-semibold text-(--color-on-accent) shadow-(--shadow-button) transition-all duration-200 hover:bg-(--color-accent-hover) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-3) active:opacity-85 motion-safe:hover:-translate-y-px sm:text-base">
            Join the Stoic Waitlist
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
