'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { createRevealMotion } from '@/utils/motion';

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex w-full flex-1 flex-col items-center justify-center bg-(--color-surface-2) px-4 pt-18 pb-14 sm:px-4">
      <motion.article
        {...createRevealMotion(shouldReduceMotion, { distance: 24 })}
        className="relative z-10 mt-14 w-full max-w-xl rounded-2xl border border-(--color-accent-a20) bg-(--color-surface-2-a90) p-4 text-center shadow-xl sm:mt-14 sm:p-8 md:text-left">
        <motion.h1
          {...createRevealMotion(shouldReduceMotion, { delay: 0.1 })}
          className="mb-4 text-3xl font-bold tracking-tight text-(--color-accent) md:text-4xl">
          Get in Touch
        </motion.h1>
        <motion.p
          {...createRevealMotion(shouldReduceMotion, { delay: 0.2 })}
          className="mb-8 text-lg text-(--color-on-surface) md:text-xl">
          I&apos;d love to hear from you. Whether you have a question, feedback,
          or just want to connect, feel free to reach out directly.
        </motion.p>
        <motion.div
          {...createRevealMotion(shouldReduceMotion, { delay: 0.32 })}
          className="space-y-6 text-base text-(--color-on-surface) md:text-lg">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="text-sm font-medium text-(--color-text-muted)">
              Email
            </span>
            <a
              href="mailto:sim@zenshuii.com"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-(--color-accent) px-6 py-2.5 text-sm font-semibold text-(--color-on-accent) shadow-(--shadow-button) transition-all duration-200 hover:bg-(--color-accent-hover) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none active:opacity-85 motion-safe:hover:-translate-y-px sm:text-base"
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
