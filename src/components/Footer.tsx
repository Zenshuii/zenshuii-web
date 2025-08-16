import Link from 'next/link';
import { FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-[var(--color-border)] bg-[var(--color-surface-1)] py-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:items-start sm:gap-4">
        <span className="text-center text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-left">
          &copy; {new Date().getFullYear()} Zenshuii by{' '}
          <Link
            href="https://smelidoni.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[var(--color-text-muted)] underline-offset-2 transition-colors duration-150 hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]">
            Simone Melidoni
          </Link>
          . All rights reserved.
        </span>
        <div className="flex gap-6">
          <Link
            href="mailto:sim@zenshuii.com"
            aria-label="Email"
            className="group rounded-sm text-[var(--color-on-surface)] transition-colors duration-150 hover:text-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-1)] focus-visible:outline-none">
            <FaEnvelope
              size={22}
              className="opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:text-[var(--color-accent)] group-hover:opacity-100"
            />
          </Link>
          <Link
            href="https://instagram.com/zenshuii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group rounded-sm text-[var(--color-on-surface)] transition-colors duration-150 hover:text-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-1)] focus-visible:outline-none">
            <FaInstagram
              size={22}
              className="opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:text-[var(--color-accent)] group-hover:opacity-100"
            />
          </Link>
          <Link
            href="https://youtube.com/@zenshuiistudios"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="group rounded-sm text-[var(--color-on-surface)] transition-colors duration-150 hover:text-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-1)] focus-visible:outline-none">
            <FaYoutube
              size={22}
              className="opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:text-[var(--color-accent)] group-hover:opacity-100"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
