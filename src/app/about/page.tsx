'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className="relative flex w-full flex-1 flex-col items-center justify-center bg-gradient-to-br from-[var(--color-surface-2)] via-[var(--color-surface-3-a60)] to-[var(--color-surface-1)] px-4 pt-[72px] pb-[56px] sm:px-4">
      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: -60, x: -60 }}
        animate={{ scale: 1, opacity: 0.7, y: 0, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="pointer-events-none absolute top-0 left-0 z-0 h-64 w-64 rounded-full bg-[var(--color-accent-a10)] blur-2xl md:-top-32 md:-left-32 md:h-96 md:w-96"
        aria-hidden="true"
      />
      <motion.article
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 mt-14 w-full max-w-3xl rounded-2xl border border-[var(--color-accent-a20)] bg-[var(--color-surface-2-a90)] p-3 text-center text-base shadow-xl sm:mt-14 sm:p-8 sm:text-lg md:text-left md:text-xl">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
          className="mb-4 text-2xl font-bold tracking-tight text-[var(--color-accent)] sm:text-3xl md:text-4xl">
          The Zenshuii Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="mb-8 text-base text-[var(--color-on-surface)] sm:text-lg md:text-xl">
          Zenshuii is a blend of{' '}
          <span className="font-semibold text-[var(--color-accent)]">Zen</span>,
          which is a state of being, and{' '}
          <span className="font-semibold text-[var(--color-accent)]">
            Feng Shui
          </span>
          , an ancient Chinese practice focused on harmonising one&apos;s
          environment. The word{' '}
          <span className="font-semibold text-[var(--color-accent)]">Shui</span>{' '}
          means water, and together, Zenshuii represents a state of flow: living
          with intention, balance, and harmony while being present in everyday
          life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
          className="space-y-6 text-base text-[var(--color-on-surface)] md:text-lg">
          <p>
            My journey with Zenshuii began from a deep desire to grow, to pursue
            self-mastery, and to cultivate a positive mindset. I believe in
            making{' '}
            <span className="font-semibold text-[var(--color-accent)]">
              love
            </span>{' '}
            the focus in everything I do, whether it is in my work, my
            relationships, or my personal growth.
          </p>
          <p>
            Zenshuii is more than just a name; it&apos;s a philosophy. It&apos;s
            about embracing change, finding peace in the present moment, and
            allowing life to flow naturally, much like water.
          </p>
          <blockquote className="my-4 border-l-4 border-[var(--color-accent)] pl-4 font-semibold text-[var(--color-accent)] italic">
            “Be water, my friend”
            <footer className="mt-1 block text-xs font-normal text-[var(--color-accent-weak)] not-italic">
              —{' '}
              <cite title="Bruce Lee" className="not-italic">
                Bruce Lee
              </cite>
            </footer>
          </blockquote>
          <p>
            At Zenshuii, our aim is to create purposeful digital tools that
            support personal growth, wellbeing, and a more mindful way of
            living.
          </p>
        </motion.div>
      </motion.article>
    </section>
  );
}
