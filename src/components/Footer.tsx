import Link from 'next/link';
import {
  TbMail,
  TbBrandInstagram,
  TbBrandFacebook,
  TbBrandYoutube,
} from 'react-icons/tb';

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-(--color-border) bg-(--color-surface-1) py-7">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 sm:flex-row sm:gap-8 sm:px-8 lg:px-12">
        <span className="text-center text-sm leading-relaxed text-(--color-text-muted) sm:text-left">
          &copy; {new Date().getFullYear()} Zenshuii by{' '}
          <Link
            href="https://smelidoni.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-(--color-text-muted) underline-offset-4 transition-colors duration-150 hover:text-(--color-accent) hover:decoration-(--color-accent) focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none">
            Simone Melidoni
          </Link>
          . All rights reserved.
        </span>
        <div className="flex gap-6">
          <Link
            href="mailto:sim@zenshuii.com"
            aria-label="Email"
            className="group rounded-sm text-(--color-on-surface) transition-colors duration-150 hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none">
            <TbMail
              size={24}
              strokeWidth={1.5}
              className="opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:text-(--color-accent) group-hover:opacity-100"
            />
          </Link>
          <Link
            href="https://instagram.com/zenshuii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group rounded-sm text-(--color-on-surface) transition-colors duration-150 hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none">
            <TbBrandInstagram
              size={24}
              strokeWidth={1.5}
              className="opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:text-(--color-accent) group-hover:opacity-100"
            />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61580432228149"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group rounded-sm text-(--color-on-surface) transition-colors duration-150 hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none">
            <TbBrandFacebook
              size={24}
              strokeWidth={1.5}
              className="opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:text-(--color-accent) group-hover:opacity-100"
            />
          </Link>
          <Link
            href="https://youtube.com/@zenshuiistudios"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="group rounded-sm text-(--color-on-surface) transition-colors duration-150 hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none">
            <TbBrandYoutube
              size={24}
              strokeWidth={1.5}
              className="opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:text-(--color-accent) group-hover:opacity-100"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
