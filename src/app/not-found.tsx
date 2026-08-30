import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { WatermarkLogo } from '@/components/WatermarkLogo';

export default function NotFound() {
  return (
    <section className="relative isolate flex flex-1 items-center overflow-hidden border-b border-(--color-border) bg-(--color-surface-2) px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24 lg:px-12">
      <div
        aria-hidden="true"
        className="page-glow pointer-events-none absolute"
      />
      <WatermarkLogo
        src="/zenshuii-logo-white.svg"
        alt=""
        className="opacity-[0.035] sm:opacity-[0.045]"
      />
      <div className="relative mx-auto w-full max-w-2xl text-center">
        <p className="motion-enter text-xs font-semibold tracking-[0.18em] text-(--color-accent) uppercase">
          404
        </p>
        <h1 className="motion-enter mt-6 text-5xl font-semibold tracking-[-0.055em] text-(--color-on-surface) [animation-delay:80ms] sm:text-6xl">
          This page isn&apos;t here.
        </h1>
        <p className="motion-enter mx-auto mt-6 max-w-lg text-lg leading-relaxed text-(--color-text-muted) [animation-delay:160ms] sm:text-xl">
          It may have moved, or the link may be out of date.
        </p>
        <div className="motion-enter mt-10 [animation-delay:240ms]">
          <Link
            href="/"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-(--color-accent) px-6 py-3 text-sm font-semibold text-(--color-on-accent) shadow-(--shadow-button) transition-all duration-200 hover:bg-(--color-accent-hover) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none active:opacity-85 motion-safe:hover:-translate-y-px">
            <ArrowLeft size={17} aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
