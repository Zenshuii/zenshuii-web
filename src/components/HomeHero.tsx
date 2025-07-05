'use client';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 bg-white dark:bg-[#1C1C1C]">
      {/* White logo for dark mode */}
      <Image
        src="/zenshuii-logo-white.svg"
        alt=""
        aria-hidden="true"
        width={500}
        height={500}
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-[70vw] opacity-10 z-0 hidden dark:block"
        priority
      />
      {/* Black logo for light mode */}
      <Image
        src="/zenshuii-logo-black.svg"
        alt=""
        aria-hidden="true"
        width={500}
        height={500}
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-[70vw] opacity-10 z-0 dark:hidden"
        priority
      />
      <div className="relative z-10 flex flex-col items-center w-full">
        <motion.h1
          className="text-4xl sm:text-7xl font-bold mb-6 text-[#FFB877] tracking-tight z-10"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}>
          Zenshuii
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg sm:text-2xl text-[#333333] dark:text-[#F5F5F5] mb-6 leading-relaxed"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}>
          A creative studio building mindful apps and digital tools for personal
          growth and wellbeing.
        </motion.p>
        <motion.hr
          className="w-12 mx-auto border-[#FFB877] border-t-4 opacity-40 mb-4 origin-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.32,
            duration: 0.5,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: 'center' }}
        />{' '}
        <motion.p
          className="italic text-base text-[#666666] dark:text-[#A5A5A5] opacity-70 mb-10"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: 'easeInOut',
          }}>
          Makers of Stoic App
        </motion.p>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.5,
            ease: 'easeInOut',
          }}>
          <Link
            href="/stoic"
            aria-label="Explore Stoic App"
            className="inline-block px-8 py-3 rounded-full bg-[color:#FFB877] text-[#232323] font-semibold shadow-md hover:bg-[#FFE5BD] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 transition text-base sm:text-lg cursor-pointer">
            Explore Stoic App
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
