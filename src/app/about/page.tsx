'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[var(--color-surface-2)] via-[var(--color-surface-3-a60)] to-[var(--color-surface-1)] px-2 py-12">
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
        className="relative z-10 w-full max-w-2xl rounded-2xl border border-[var(--color-accent-a15)] bg-[var(--color-surface-2-a90)] p-8 text-center shadow-xl md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
          className="mb-4 text-3xl font-bold tracking-tight text-[var(--color-accent)] md:text-4xl">
          The Zenshuii Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="mb-8 text-lg text-[var(--color-on-surface)] md:text-xl">
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
          transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
          className="space-y-6 text-base text-[var(--color-text-muted)] md:text-lg">
          <p>
            My journey with Zenshuii began from a deep desire to grow, to better
            myself, and to cultivate a positive mindset. I believe in making{' '}
            <span className="font-semibold text-[var(--color-accent)]">
              love
            </span>{' '}
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
      </motion.article>
    </section>
  );
}
