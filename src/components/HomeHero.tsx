'use client';

import { motion, useReducedMotion, easeInOut } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { stoicWaitlistHref } from '@/data/apps';
import { WatermarkLogo } from './WatermarkLogo';

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion();

  const watermarkMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.85 },
        animate: { opacity: 0.1, scale: 1 },
        transition: {
          duration: 1.2,
          ease: easeInOut,
        },
      };

  return (
    <section className="relative flex w-full flex-1 flex-col items-center justify-center bg-[var(--color-surface-2)] px-4 pt-[72px] pb-[56px] text-center">
      <WatermarkLogo
        src="/zenshuii-logo-white.svg"
        alt=""
        watermarkMotion={watermarkMotion}
        priority
      />
      <div className="relative z-10 mt-14 flex w-full max-w-xl flex-col items-center sm:mt-14">
        <motion.h1
          className="z-10 mb-4 text-4xl font-bold tracking-tight text-[var(--color-accent)] sm:text-6xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: easeInOut,
          }}>
          Zenshuii
        </motion.h1>
        <motion.p
          className="mb-4 max-w-2xl text-lg leading-relaxed text-[var(--color-on-surface)] sm:text-xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: easeInOut,
          }}>
          A creative studio building mindful apps and digital tools for personal
          growth and wellbeing.
        </motion.p>
        <motion.hr
          aria-hidden="true"
          className="mx-auto mb-4 w-12 origin-center border-t-4 border-[var(--color-accent)] opacity-40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.32,
            duration: 0.5,
            ease: easeInOut,
          }}
        />
        <motion.p
          className="mb-8 max-w-md text-base leading-relaxed text-[var(--color-text-muted)]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: easeInOut,
          }}>
          Currently building Stoic, a mindful journaling app launching soon.
        </motion.p>
        <motion.div
          className="flex w-full max-w-sm flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.5,
            ease: easeInOut,
          }}>
          <Link
            href={stoicWaitlistHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join the Stoic Waitlist"
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3 text-base font-semibold text-[var(--color-surface-3)] shadow-md transition-all duration-200 hover:scale-105 hover:bg-[var(--color-accent-weak)] hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-2)] focus-visible:outline-none active:scale-95 sm:w-auto sm:text-lg">
            Join the Stoic Waitlist
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
          <Link
            href="/apps/stoic"
            aria-label="Learn more about Stoic App"
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[var(--color-accent-a20)] bg-[var(--color-surface-3-a60)] px-7 py-3 text-base font-semibold text-[var(--color-on-surface)] shadow-sm transition-all duration-200 hover:scale-105 hover:border-[var(--color-accent-a60)] hover:bg-[var(--color-accent-a10)] hover:text-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-2)] focus-visible:outline-none active:scale-95 sm:w-auto sm:text-lg">
            Learn More
            <ChevronRight size={20} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
