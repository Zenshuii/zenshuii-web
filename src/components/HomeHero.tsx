'use client';

import { motion, useReducedMotion, easeInOut } from 'framer-motion';
import Link from 'next/link';
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
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-[#1C1C1C] px-4 text-center">
      <WatermarkLogo
        src="/zenshuii-logo-white.svg"
        alt=""
        watermarkMotion={watermarkMotion}
      />
      <div className="relative z-10 flex w-full max-w-xl flex-col items-center">
        <motion.h1
          className="z-10 mb-4 text-4xl font-bold tracking-tight text-[#FFB877] sm:text-6xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: easeInOut,
          }}>
          Zenshuii
        </motion.h1>
        <motion.p
          className="mb-4 max-w-2xl text-lg leading-relaxed text-[#F5F5F5] sm:text-xl"
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
          className="mx-auto mb-4 w-12 origin-center border-t-4 border-[#FFB877] opacity-40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.32,
            duration: 0.5,
            ease: easeInOut,
          }}
          style={{ transformOrigin: 'center' }}
        />
        <motion.p
          className="mb-8 text-base text-[#A5A5A5] italic opacity-70"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: easeInOut,
          }}>
          Makers of Stoic App
        </motion.p>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.5,
            ease: easeInOut,
          }}>
          <Link
            href="/stoic"
            aria-label="Explore Stoic App"
            className="inline-block cursor-pointer rounded-full bg-[color:#FFB877] px-8 py-3 text-base font-semibold text-[#232323] shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#FFE5BD] hover:shadow-lg active:scale-95 sm:text-lg">
            Explore Stoic App
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
