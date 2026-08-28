import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { stoicWaitlistHref } from '@/data/apps';

export default function StoicAppPage() {
  return (
    <div className="flex w-full flex-1 flex-col overflow-hidden bg-(--color-surface-2)">
      <section className="relative isolate flex flex-1 items-center overflow-hidden border-b border-(--color-border) bg-(--color-surface-2) px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-accent-a05) blur-2xl sm:h-140 sm:w-140 sm:bg-(--color-accent-a10) sm:blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)] lg:gap-20">
          <div className="max-w-3xl">
            <div className="motion-enter mb-7 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-(--color-accent) uppercase">
              <Link
                href="/apps"
                className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-(--color-accent-hover) focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none">
                <ArrowLeft size={14} aria-hidden="true" />
                All apps
              </Link>
            </div>
            <div className="motion-enter flex items-center gap-4 [animation-delay:80ms]">
              <Image
                src="/apps/stoic-thumb.png"
                alt="Stoic logo"
                width={56}
                height={56}
                className="rounded-2xl border border-(--color-accent-a30)"
                priority
              />
              <div>
                <h1 className="text-5xl font-semibold tracking-[-0.05em] text-(--color-on-surface) sm:text-6xl">
                  Stoic
                </h1>
                <p className="mt-1 text-sm font-medium text-(--color-accent)">
                  Coming soon
                </p>
              </div>
            </div>
            <p className="motion-enter mt-8 max-w-xl text-lg leading-relaxed text-(--color-text-muted) [animation-delay:160ms] sm:text-xl">
              Stoic brings daily perspective, personal journalling, and the
              wisdom worth returning to into one calmer practice.
            </p>
            <div className="motion-enter mt-8 flex flex-wrap gap-2 text-sm text-(--color-text-muted) [animation-delay:240ms]">
              <span className="rounded-full border border-(--color-accent-a20) bg-(--color-accent-a05) px-3 py-1.5 text-(--color-on-surface)">
                Daily perspective
              </span>
              <span className="rounded-full border border-(--color-accent-a20) bg-(--color-accent-a05) px-3 py-1.5 text-(--color-on-surface)">
                Personal journalling
              </span>
              <span className="rounded-full border border-(--color-accent-a20) bg-(--color-accent-a05) px-3 py-1.5 text-(--color-on-surface)">
                Saved reflections
              </span>
            </div>
            <div className="motion-enter mt-8 [animation-delay:320ms]">
              <Link
                href={stoicWaitlistHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-(--color-accent) px-6 py-3 text-sm font-semibold text-(--color-on-accent) shadow-(--shadow-button) transition-all duration-200 hover:bg-(--color-accent-hover) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none active:opacity-85 motion-safe:hover:-translate-y-px">
                Visit Stoic
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="motion-preview-enter relative mx-auto w-full max-w-sm [animation-delay:180ms]">
            <div className="absolute -inset-6 rounded-(--radius-panel) bg-(--color-accent-a10) blur-2xl" />
            <div className="relative rounded-[2.75rem] border border-(--color-border-strong) bg-(--color-background) p-2 shadow-(--shadow-card)">
              <div className="overflow-hidden rounded-[2.25rem] bg-(--color-surface-1) px-6 pt-7 pb-6 sm:px-7">
                <div className="mx-auto h-6 w-24 rounded-full bg-black" />
                <div className="mt-7 flex items-center justify-between">
                  <span className="text-sm font-semibold text-(--color-on-surface)">
                    Stoic
                  </span>
                  <span className="text-xs font-medium text-(--color-text-muted)">
                    22:22
                  </span>
                </div>
                <div className="mt-9">
                  <p className="text-xs font-semibold tracking-[0.15em] text-(--color-accent) uppercase">
                    Today&apos;s perspective
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-(--color-on-surface)">
                    Good evening.
                  </h3>
                  <p className="mt-2 text-sm text-(--color-text-muted)">
                    Begin with what is in your control.
                  </p>
                </div>
                <div className="mt-7 rounded-2xl border border-(--color-border) bg-(--color-surface-3-a60) p-5">
                  <p className="text-xs font-semibold tracking-[0.14em] text-(--color-accent) uppercase">
                    Today&apos;s insight
                  </p>
                  <p className="mt-4 text-lg leading-snug font-medium tracking-[-0.025em] text-(--color-on-surface)">
                    “Very little is needed to make a happy life.”
                  </p>
                  <p className="mt-4 text-sm font-medium text-(--color-accent)">
                    – Marcus Aurelius
                  </p>
                </div>
                <div className="mt-5 rounded-2xl border border-(--color-border) p-5">
                  <p className="text-xs font-semibold tracking-[0.14em] text-(--color-text-muted) uppercase">
                    Journal
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-(--color-on-surface)">
                    Where did you notice yourself seeking control today?
                  </p>
                  <span className="mt-5 flex items-center justify-center rounded-xl bg-(--color-accent) px-4 py-2.5 text-sm font-semibold text-(--color-on-accent)">
                    Open Journal
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-(--color-on-surface) opacity-70">
              Early preview. Details may change before launch.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
