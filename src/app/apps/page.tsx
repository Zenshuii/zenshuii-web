'use client';

import Link from 'next/link';
import { apps } from '@/data/apps';
import { ImageWithSkeleton } from '@/components/ImageWithSkeleton';
import { motion, useReducedMotion } from 'framer-motion';
import { createRevealMotion, createViewportRevealMotion } from '@/utils/motion';

export default function AppsPage() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="relative flex w-full flex-1 flex-col items-center justify-center bg-(--color-surface-2) px-4 pt-18 pb-14 sm:px-4">
      <div className="relative z-10 mt-14 w-full max-w-6xl sm:mt-14">
        {/* Page introductory header */}
        <section
          aria-labelledby="apps-heading"
          className="flex flex-col items-center justify-start pb-6 text-center sm:pb-8">
          <motion.h1
            id="apps-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-(--color-accent) sm:mb-6 sm:text-5xl"
            {...createRevealMotion(shouldReduceMotion, { distance: 32 })}>
            Our Apps
          </motion.h1>
          <motion.p
            className="mb-6 max-w-2xl text-base leading-relaxed text-balance text-(--color-on-surface) sm:mb-4 sm:max-w-4xl sm:text-lg"
            {...createRevealMotion(shouldReduceMotion, {
              delay: 0.12,
              distance: 16,
            })}>
            Mindful, purposeful digital tools crafted to support reflection,
            focus, and personal growth. Explore what we&apos;ve released and
            what we&apos;re experimenting with.
          </motion.p>
        </section>
        {/* Apps grid */}
        <section
          aria-label="Available apps"
          className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, i) => (
            <Link
              key={app.slug}
              href={app.href}
              aria-label={`View details for ${app.name}`}
              className="group block focus:outline-none focus-visible:rounded-2xl focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-3) focus-visible:outline-none">
              <motion.article
                aria-labelledby={`app-${app.slug}-title`}
                className="relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-(--color-accent-a20) bg-(--color-surface-3-a70) p-4 shadow-xl ring-1 ring-(--color-accent-a10) transition-all duration-300 focus-within:border-(--color-accent) focus-within:ring-(--color-accent-a60) hover:-translate-y-1 hover:border-(--color-accent-a60) hover:shadow-2xl hover:ring-(--color-accent-a20) focus-visible:-translate-y-1 focus-visible:border-(--color-accent-a60) focus-visible:shadow-2xl focus-visible:ring-(--color-accent-a20) active:scale-98 sm:p-6"
                {...createViewportRevealMotion(shouldReduceMotion, {
                  delay: 0.2 + i * 0.08,
                  distance: 24,
                })}>
                <div className="mb-5 flex h-32 w-full items-center justify-center rounded-xl bg-(--color-surface-3-a60) ring-1 ring-(--color-border) ring-inset">
                  {app.image ? (
                    <ImageWithSkeleton
                      src={app.image}
                      alt={`${app.name} logo`}
                      width={96}
                      height={96}
                    />
                  ) : (
                    <span className="text-sm font-medium tracking-wide text-(--color-text-muted)">
                      {app.tagline || 'App'}
                    </span>
                  )}
                </div>
                <h2
                  id={`app-${app.slug}-title`}
                  className="mb-2 text-xl font-semibold text-(--color-on-surface) group-hover:text-(--color-accent)">
                  {app.name}
                </h2>
                <p className="mb-6 line-clamp-4 text-sm leading-relaxed text-(--color-text-muted)">
                  {app.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 rounded-full bg-(--color-accent) px-5 py-2 text-sm font-semibold text-(--color-on-accent) shadow-(--shadow-button) transition-all duration-200 group-active:scale-95">
                    View details
                  </span>
                </div>
              </motion.article>
            </Link>
          ))}
        </section>
      </div>
    </section>
  );
}
