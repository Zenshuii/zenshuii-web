'use client';

import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { apps } from '@/data/apps';
import { createRevealMotion, createViewportRevealMotion } from '@/utils/motion';

export default function AppsPage() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = (delay = 0) =>
    createRevealMotion(shouldReduceMotion, { delay });

  return (
    <section className="relative flex flex-1 overflow-hidden bg-(--color-surface-2) px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-accent-a05) blur-2xl sm:h-140 sm:w-140 sm:bg-(--color-accent-a10) sm:blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <motion.p
            {...reveal()}
            className="text-xs font-semibold tracking-[0.18em] text-(--color-accent) uppercase">
            Apps
          </motion.p>
          <motion.h1
            {...reveal(0.08)}
            className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-(--color-on-surface) sm:text-5xl lg:text-6xl">
            Products for everyday life.
          </motion.h1>
          <motion.p
            {...reveal(0.16)}
            className="mt-6 text-lg leading-relaxed text-(--color-text-muted) sm:text-xl">
            A growing collection of apps for personal growth, wellbeing, and
            everyday clarity.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {apps.map((app, index) => (
            <motion.div
              key={app.slug}
              {...createViewportRevealMotion(shouldReduceMotion, {
                delay: 0.12 + index * 0.08,
              })}>
              <Link
                href={app.href}
                aria-label={`View details for ${app.name}`}
                className="group block rounded-(--radius-panel) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-4 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none">
                <article className="relative h-full overflow-hidden rounded-(--radius-panel) border border-(--color-border-strong) bg-(--color-surface-1) p-7 transition-colors duration-300 group-hover:border-(--color-accent-a30) sm:p-10">
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 h-px w-full bg-(--color-accent-a30) transition-[background-color,box-shadow] duration-300 group-hover:bg-(--color-accent) group-hover:shadow-[0_0_18px_2px_var(--color-accent-a30)]"
                  />
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold tracking-[0.16em] text-(--color-accent) uppercase">
                      Coming soon
                    </p>
                    {app.image && (
                      <Image
                        src={app.image}
                        alt={`${app.name} logo`}
                        width={48}
                        height={48}
                        className="rounded-full border border-(--color-accent-a30)"
                      />
                    )}
                  </div>
                  <h2 className="mt-12 text-3xl font-semibold tracking-[-0.045em] text-(--color-on-surface) sm:text-4xl">
                    {app.name.replace(' App', '')}
                  </h2>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-(--color-text-muted)">
                    Daily perspective and personal journalling, designed for a
                    steadier everyday practice.
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-(--color-accent) transition-colors duration-200 group-hover:text-(--color-accent-hover)">
                    Explore Stoic
                    <ArrowRight size={17} aria-hidden="true" />
                  </span>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
