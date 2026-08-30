import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ViewportReveal } from '@/components/ViewportReveal';
import { apps } from '@/data/apps';
import { createPageMetadata } from '@/utils/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Apps',
  description:
    'Explore the growing collection of Zenshuii apps for personal growth, wellbeing, and everyday clarity.',
  path: '/apps',
});

export default function AppsPage() {
  return (
    <section className="relative flex flex-1 overflow-hidden bg-(--color-surface-2) px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24 lg:px-12">
      <div
        aria-hidden="true"
        className="page-glow pointer-events-none absolute"
      />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <p className="motion-enter text-xs font-semibold tracking-[0.18em] text-(--color-accent) uppercase">
            Apps
          </p>
          <h1 className="motion-enter mt-5 text-4xl font-semibold tracking-[-0.05em] text-(--color-on-surface) [animation-delay:80ms] sm:text-5xl lg:text-6xl">
            Products for everyday life.
          </h1>
          <p className="motion-enter mt-6 text-lg leading-relaxed text-(--color-text-muted) [animation-delay:160ms] sm:text-xl">
            A growing collection of apps for personal growth, wellbeing, and
            everyday clarity.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {apps.map((app, index) => (
            <ViewportReveal key={app.slug} delay={120 + index * 80}>
              <Link
                href={app.href}
                aria-label={`View details for ${app.name}`}
                className="block rounded-(--radius-panel) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-4 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none">
                <article className="group relative h-full overflow-hidden rounded-(--radius-panel) border border-(--color-border) bg-(--color-surface-1) p-7 transition-colors duration-300 hover:border-(--color-border-strong) sm:p-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-3 right-10 left-10 h-8 rounded-full bg-linear-to-b from-(--color-accent-a30) to-transparent opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold tracking-[0.16em] text-(--color-accent) uppercase">
                      {app.status}
                    </p>
                    {app.image && (
                      <Image
                        src={app.image}
                        alt={`${app.name} logo`}
                        width={48}
                        height={48}
                        className="rounded-full border border-(--color-accent-a30)"
                      />
                    )}
                  </div>
                  <h2 className="mt-12 text-3xl font-semibold tracking-[-0.045em] text-(--color-on-surface) sm:text-4xl">
                    {app.name.replace(' App', '')}
                  </h2>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-(--color-text-muted)">
                    {app.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-(--color-accent) transition-colors duration-200 group-hover:text-(--color-accent-hover)">
                    Explore {app.name.replace(' App', '')}
                    <ArrowRight size={17} aria-hidden="true" />
                  </span>
                </article>
              </Link>
            </ViewportReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
