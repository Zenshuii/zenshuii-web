import {
  ArrowRight,
  ArrowUpRight,
  LayoutPanelTop,
  Layers3,
  Target,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { stoicWaitlistHref } from '@/data/apps';
import { WatermarkLogo } from './WatermarkLogo';
import { ViewportReveal } from './ViewportReveal';

const principles = [
  {
    number: '01',
    title: 'Purpose before features',
    description:
      'Every product starts with a clear idea and a reason to exist in someone’s day.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Calm by design',
    description:
      'We simplify each experience so people can focus on what they came to do.',
    icon: LayoutPanelTop,
  },
  {
    number: '03',
    title: 'Built for the long term',
    description:
      'We build for lasting value, with details that remain useful over time.',
    icon: Layers3,
  },
];

export function HomeHero() {
  return (
    <div className="w-full overflow-hidden bg-(--color-background)">
      <section className="relative isolate overflow-hidden border-b border-(--color-border) bg-(--color-surface-2) px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24 lg:flex lg:min-h-[clamp(34rem,70vh,56rem)] lg:items-center lg:px-12">
        <div
          aria-hidden="true"
          className="page-glow pointer-events-none absolute"
        />
        <WatermarkLogo
          src="/zenshuii-logo-white.svg"
          alt=""
          className="hidden lg:top-[calc(50%+1rem)] lg:left-[28%] lg:block lg:opacity-[0.06]"
        />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(21rem,0.75fr)] lg:gap-20">
          <div className="max-w-3xl">
            <p className="motion-enter mb-7 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-(--color-accent) uppercase">
              Independent creative studio
            </p>
            <h1 className="motion-enter max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-(--color-on-surface) [animation-delay:80ms] sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              Digital tools for a more intentional life.
            </h1>
            <p className="motion-enter mt-7 max-w-xl text-lg leading-relaxed text-(--color-text-muted) [animation-delay:160ms] sm:text-xl">
              We create apps for personal growth, wellbeing, and everyday
              clarity.
            </p>
            <div className="motion-enter mt-10 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
              <Link
                href="/apps/stoic"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-(--color-accent) px-6 py-3 text-sm font-semibold text-(--color-on-accent) shadow-(--shadow-button) transition-all duration-200 hover:bg-(--color-accent-hover) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none active:opacity-85 motion-safe:hover:-translate-y-px">
                Explore Stoic
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                href="/about"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-(--color-on-surface) transition-colors duration-200 hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none">
                About Zenshuii
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="preview-glow absolute -inset-6 rounded-(--radius-panel)" />
            <div className="motion-preview-enter relative [animation-delay:160ms]">
              <article className="preview-surface overflow-hidden rounded-(--radius-panel) border border-(--color-border-strong) bg-(--color-surface-1) p-5 shadow-(--shadow-card) sm:p-7">
                <div className="flex items-center justify-between border-b border-(--color-border) pb-5">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.16em] text-(--color-accent) uppercase">
                      Now building
                    </p>
                    <p className="mt-2 text-lg font-semibold tracking-[-0.025em] text-(--color-on-surface)">
                      Stoic
                    </p>
                  </div>
                  <Image
                    src="/apps/stoic-thumb.png"
                    alt="Stoic logo"
                    width={40}
                    height={40}
                    className="rounded-full border border-(--color-accent-a30)"
                  />
                </div>
                <div className="pt-10 pb-3">
                  <h2 className="max-w-sm text-3xl font-semibold tracking-[-0.045em] text-(--color-on-surface) sm:text-4xl">
                    Make room for a clearer mind.
                  </h2>
                  <p className="mt-5 max-w-sm text-sm leading-relaxed text-(--color-text-muted)">
                    Stoic brings journalling and daily perspective into one calm
                    practice.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-(--color-border) bg-(--color-surface-1) px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="text-xs font-semibold tracking-[0.18em] text-(--color-accent) uppercase">
              Our work
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.045em] text-(--color-on-surface) sm:text-4xl">
              Made for everyday life.
            </h2>
            <p className="text-base leading-relaxed text-(--color-text-muted) sm:text-lg">
              Stoic is the first in a growing collection of products from
              Zenshuii.
            </p>
          </div>

          <ViewportReveal
            as="article"
            className="group mt-10 grid overflow-hidden rounded-(--radius-panel) border border-(--color-border-strong) bg-(--color-surface-2) md:grid-cols-[minmax(0,1fr)_minmax(17rem,0.75fr)]">
            <div className="p-7 sm:p-10">
              <p className="text-sm font-medium text-(--color-accent)">Stoic</p>
              <h3 className="mt-5 max-w-lg text-3xl font-semibold tracking-[-0.045em] text-(--color-on-surface) sm:text-4xl">
                A more grounded place to begin and end your day.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-(--color-text-muted)">
                Daily perspective and guided journalling, designed for a habit
                you can keep.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/apps/stoic"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-(--color-accent) transition-colors duration-200 hover:text-(--color-accent-hover) focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-4 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none">
                  Discover Stoic
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link
                  href={stoicWaitlistHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-(--color-text-muted) transition-colors duration-200 hover:text-(--color-accent) focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-4 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none">
                  Join the waitlist
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="relative min-h-64 overflow-hidden border-t border-(--color-border) bg-(--color-surface-1) p-7 md:min-h-0 md:border-t-0 md:border-l md:p-10">
              <div className="absolute top-0 right-0 hidden h-52 w-52 translate-x-1/3 -translate-y-1/3 rounded-full bg-(--color-accent-a15) blur-3xl md:block" />
              <div className="relative flex h-full min-h-48 flex-col rounded-2xl border border-(--color-border-strong) bg-(--color-surface-2-a90) p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-(--color-on-surface)">
                    Stoic
                  </span>
                  <span className="text-xs font-medium text-(--color-text-muted)">
                    Daily reflection
                  </span>
                </div>
                <p className="mt-8 max-w-xs text-xl font-medium tracking-[-0.03em] text-(--color-on-surface)">
                  “Very little is needed to make a happy life; it is all within
                  yourself, in your way of thinking.”
                </p>
                <p className="mt-8 text-sm font-medium text-(--color-accent) sm:mt-auto">
                  — Marcus Aurelius
                </p>
              </div>
            </div>
          </ViewportReveal>
        </div>
      </section>

      <section className="bg-(--color-surface-2) px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="text-xs font-semibold tracking-[0.18em] text-(--color-accent) uppercase">
              How we build
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.045em] text-(--color-on-surface) sm:text-4xl">
              A clear standard for every product.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {principles.map(
              ({ number, title, description, icon: Icon }, index) => (
                <ViewportReveal
                  as="article"
                  key={number}
                  delay={index * 80}
                  distance={16}
                  className="group relative min-h-64 overflow-hidden rounded-(--radius-card) border border-(--color-border) bg-(--color-surface-2) p-7 transition-colors duration-300 hover:border-(--color-border-strong) sm:p-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-3 right-10 left-10 h-8 rounded-full bg-linear-to-b from-(--color-accent-a30) to-transparent opacity-45 blur-lg transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-(--color-accent)">
                      {number}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border-strong) text-(--color-text-muted) transition-colors duration-300 group-hover:border-(--color-accent-a30) group-hover:text-(--color-accent)">
                      <Icon size={19} strokeWidth={1.5} />
                    </span>
                  </div>
                  <div className="mt-10">
                    <h3 className="text-xl font-semibold tracking-[-0.035em] text-(--color-on-surface)">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-(--color-text-muted)">
                      {description}
                    </p>
                  </div>
                </ViewportReveal>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
