import Link from 'next/link';
import { apps } from '@/data/apps';
import Image from 'next/image';

export default function AppsPage() {
  return (
    <section className="flex min-h-dvh w-full flex-col justify-center bg-[var(--color-surface-2)] px-2 pt-24 pb-12 sm:px-4 sm:pt-32 sm:pb-24">
      <div className="relative mx-auto w-full max-w-6xl">
        {/* Page introductory header */}
        <section
          aria-labelledby="apps-heading"
          className="flex flex-col items-center justify-start pb-6 text-center sm:pb-8">
          <h1
            id="apps-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-[var(--color-accent)] sm:mb-6 sm:text-5xl">
            Our Apps
          </h1>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-balance text-[var(--color-on-surface)] sm:mb-4 sm:max-w-4xl sm:text-lg">
            Mindful, purposeful digital tools crafted to support reflection,
            focus, and personal growth. Explore what we&apos;ve released and
            what we&apos;re experimenting with.
          </p>
        </section>
        {/* Apps grid */}
        <section
          aria-label="Available apps"
          className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <article
              key={app.slug}
              aria-labelledby={`app-${app.slug}-title`}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[var(--color-accent-a20)] bg-[var(--color-surface-3)]/70 p-4 shadow-xl ring-1 ring-[var(--color-accent-a10)] transition-all duration-300 focus-within:border-[var(--color-accent)] focus-within:ring-[var(--color-accent-a60)] hover:translate-y-[-4px] hover:border-[var(--color-accent-a60)] hover:shadow-2xl hover:ring-[var(--color-accent-a20)] active:scale-[0.98] sm:p-6">
              <div className="mb-5 flex h-32 w-full items-center justify-center rounded-xl bg-[var(--color-surface-2)]/60 ring-1 ring-[var(--color-border)] ring-inset">
                {app.image ? (
                  <Image
                    src={app.image}
                    alt={`${app.name} logo`}
                    width={96}
                    height={96}
                    className="mx-auto h-24 w-24 rounded-xl object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-sm font-medium tracking-wide text-[var(--color-text-muted)]">
                    {app.tagline || 'App'}
                  </span>
                )}
              </div>
              <h2
                id={`app-${app.slug}-title`}
                className="mb-2 text-xl font-semibold text-[var(--color-on-surface)] group-hover:text-[var(--color-accent)]">
                <Link
                  href={app.href}
                  className="focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-3)] focus-visible:outline-none">
                  {app.name}
                  <span className="absolute inset-0" aria-hidden="true" />
                </Link>
              </h2>
              <p className="mb-6 line-clamp-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {app.description}
              </p>
              <div className="mt-auto">
                <Link
                  href={app.href}
                  aria-label={`View ${app.name}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-semibold text-[var(--color-surface-3)] shadow-md transition-all duration-200 hover:scale-105 hover:bg-[var(--color-accent-weak)] hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-3)] focus-visible:outline-none active:scale-95">
                  View
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
