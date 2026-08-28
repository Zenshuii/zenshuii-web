import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-(--color-surface-2) px-4 text-(--color-foreground)">
      <h1
        className="motion-enter mb-4 text-6xl font-semibold tracking-tight"
        style={{ color: 'var(--color-accent)' }}>
        404
      </h1>
      <h2 className="motion-enter mb-2 text-2xl font-semibold [animation-delay:100ms]">
        Page Not Found
      </h2>
      <p className="motion-enter mb-8 max-w-md text-center text-(--color-text-muted) [animation-delay:200ms]">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <div className="motion-enter [animation-delay:300ms]">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-(--color-accent) px-6 py-2 text-base font-semibold text-(--color-on-accent) shadow-(--shadow-button) transition-all duration-200 hover:bg-(--color-accent-hover) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none active:opacity-85 motion-safe:hover:-translate-y-px"
          aria-label="Go Home">
          Go Home
        </Link>
      </div>
    </main>
  );
}
