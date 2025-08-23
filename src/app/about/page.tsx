'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-[var(--color-surface-2)] px-4 py-12 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-4 text-3xl font-bold tracking-tight text-[var(--color-accent)] md:text-4xl">
        The Zenshuii Journey
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        className="mx-auto mb-8 max-w-2xl text-lg text-[var(--color-on-surface)] md:text-xl">
        Zenshuii is a blend of{' '}
        <span className="font-semibold text-[var(--color-accent)]">Zen</span>,
        which is a state of being, and{' '}
        <span className="font-semibold text-[var(--color-accent)]">
          Fengshui
        </span>
        . The word{' '}
        <span className="font-semibold text-[var(--color-accent)]">shui</span>{' '}
        means water. Together, Zenshuii represents a{' '}
        <span className="italic">state of flow</span>: living with intention,
        balance, and harmony, and being present in everyday life.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-2xl space-y-6 text-base text-[var(--color-text-muted)] md:text-lg">
        <p>
          My journey with Zenshuii began from a deep desire to grow, to better
          myself, and to cultivate a positive mindset. I believe in making{' '}
          <span className="font-semibold text-[var(--color-accent)]">love</span>{' '}
          the focus in everything I do, whether it is in my work, my
          relationships, or my personal growth.
        </p>
        <p>
          Zenshuii is more than just a name; it is a philosophy. It is about
          embracing change, finding peace in the present moment, and allowing
          life to flow naturally, much like water. (As Bruce Lee wisely said,
          &quot;Be water, my friend&quot;) It is about being present in
          day-to-day life, and creating spaces, habits, and products that
          inspire calm, clarity, and purpose.
        </p>
        <p>
          If you would like to know more about me and my journey, please visit{' '}
          <a
            href="https://smelidoni.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] underline transition-colors hover:text-[var(--color-accent-weak)]">
            smelidoni.dev
          </a>
          .
        </p>
      </motion.div>
    </section>
  );
}
