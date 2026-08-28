'use client';

import { ArrowUpRight, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { createRevealMotion } from '@/utils/motion';

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = (delay = 0) =>
    createRevealMotion(shouldReduceMotion, { delay });

  return (
    <section className="relative flex flex-1 overflow-hidden bg-(--color-surface-2) px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24 lg:items-center lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-accent-a05) blur-2xl sm:h-140 sm:w-140 sm:bg-(--color-accent-a10) sm:blur-3xl"
      />
      <div className="relative mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.65fr)] lg:gap-20">
        <div className="max-w-3xl">
          <motion.p
            {...reveal()}
            className="text-xs font-semibold tracking-[0.18em] text-(--color-accent) uppercase">
            Contact
          </motion.p>
          <motion.h1
            {...reveal(0.08)}
            className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-(--color-on-surface) sm:text-5xl lg:text-6xl">
            Let&apos;s start a conversation.
          </motion.h1>
          <motion.p
            {...reveal(0.16)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-(--color-text-muted) sm:text-xl">
            Questions about Stoic, future products, or a potential collaboration
            are always welcome.
          </motion.p>
        </div>

        <motion.article
          {...reveal(0.24)}
          className="rounded-(--radius-panel) border border-(--color-border-strong) bg-(--color-surface-1) p-7 shadow-(--shadow-card) sm:p-10">
          <p className="text-xs font-semibold tracking-[0.16em] text-(--color-accent) uppercase">
            Email
          </p>
          <p className="mt-5 text-xl font-semibold tracking-[-0.035em] text-(--color-on-surface)">
            sim@zenshuii.com
          </p>
          <a
            href="mailto:sim@zenshuii.com"
            className="mt-8 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-(--color-accent) px-6 py-3 text-sm font-semibold text-(--color-on-accent) shadow-(--shadow-button) transition-all duration-200 hover:bg-(--color-accent-hover) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none active:opacity-85 motion-safe:hover:-translate-y-px">
            <Mail size={17} aria-hidden="true" />
            Send an email
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </motion.article>
      </div>
    </section>
  );
}
