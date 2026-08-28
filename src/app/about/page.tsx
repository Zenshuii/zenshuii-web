'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { createRevealMotion, createViewportRevealMotion } from '@/utils/motion';

export default function AboutPage() {
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
        <div className="max-w-3xl">
          <motion.p
            {...reveal()}
            className="text-xs font-semibold tracking-[0.18em] text-(--color-accent) uppercase">
            About Zenshuii
          </motion.p>
          <motion.h1
            {...reveal(0.08)}
            className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-(--color-on-surface) sm:text-5xl lg:text-6xl">
            A studio for thoughtful digital products.
          </motion.h1>
          <motion.p
            {...reveal(0.16)}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-(--color-text-muted) sm:text-xl">
            Founded by Simone Melidoni, Zenshuii is a small independent studio
            exploring how digital products can support the way people think,
            reflect, and move through the day.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <motion.article
            {...createViewportRevealMotion(shouldReduceMotion, { delay: 0.12 })}
            className="rounded-(--radius-panel) border border-(--color-border-strong) bg-(--color-surface-1) p-7 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.16em] text-(--color-accent) uppercase">
              The name
            </p>
            <h2 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-(--color-on-surface) sm:text-3xl">
              A sense of flow.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-(--color-text-muted)">
              <p>
                Zenshuii brings together Zen and Shui – water. It speaks to the
                balance between stillness and movement. It is about taking time
                to notice, then adapting as life changes.
              </p>
              <p>
                Rather than a promise of perfection, the name is a reminder to
                make room for a clearer point of view.
              </p>
            </div>
          </motion.article>
          <motion.article
            {...createViewportRevealMotion(shouldReduceMotion, { delay: 0.2 })}
            className="rounded-(--radius-panel) border border-(--color-border-strong) bg-(--color-surface-1) p-7 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.16em] text-(--color-accent) uppercase">
              Our focus
            </p>
            <h2 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-(--color-on-surface) sm:text-3xl">
              A clear reason for every detail.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-(--color-text-muted)">
              <p>
                We make tools for the small, repeatable moments that shape a
                day. They might help you write down a thought, return to a
                perspective, or pause before moving on.
              </p>
              <p>
                We favour clear journeys and careful details over unnecessary
                complexity. Each product should earn a place in someone&apos;s
                routine and remain useful over time.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
