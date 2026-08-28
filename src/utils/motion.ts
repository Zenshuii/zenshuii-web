import type { MotionProps, Transition } from 'framer-motion';

type ReducedMotionPreference = boolean | null;

type RevealOptions = {
  delay?: number;
  distance?: number;
  duration?: number;
};

export const calmEase = [0.22, 1, 0.36, 1] as const;

export const calmTransition: Transition = {
  duration: 0.8,
  ease: calmEase,
};

export const calmControlTransition: Transition = {
  duration: 0.22,
  ease: calmEase,
};

export const calmInteractionSpring = {
  type: 'spring',
  stiffness: 320,
  damping: 30,
} as const;

export function createRevealMotion(
  shouldReduceMotion: ReducedMotionPreference,
  { delay = 0, distance = 20, duration = 0.8 }: RevealOptions = {},
): MotionProps {
  return {
    initial: shouldReduceMotion ? false : { opacity: 0, y: distance },
    animate: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
    transition: { duration, delay, ease: calmEase },
  };
}

export function createViewportRevealMotion(
  shouldReduceMotion: ReducedMotionPreference,
  options: RevealOptions = {},
): MotionProps {
  return {
    initial: shouldReduceMotion
      ? false
      : { opacity: 0, y: options.distance ?? 20 },
    whileInView: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: options.duration ?? 0.8,
      delay: options.delay ?? 0,
      ease: calmEase,
    },
  };
}
