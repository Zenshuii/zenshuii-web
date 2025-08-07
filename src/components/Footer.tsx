import Link from 'next/link';
import { FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-[#2A2A2A] bg-[#181818] py-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:gap-4">
        <span className="text-sm leading-relaxed text-[#A5A5A5]">
          &copy; {new Date().getFullYear()} Zenshuii by{' '}
          <Link
            href="https://smelidoni.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[#A5A5A5] underline-offset-2 transition-colors duration-150 hover:text-[#FFB877] hover:decoration-[#FFB877]">
            Simone Melidoni
          </Link>
          . All rights reserved.
        </span>
        <div className="flex gap-6">
          <Link
            href="mailto:sim@zenshuii.com"
            aria-label="Email"
            className="group rounded-sm text-[#F5F5F5] transition-colors duration-150 hover:text-[#FFB877] focus:ring-2 focus:ring-[#FFB877] focus:ring-offset-2 focus:ring-offset-[#181818] focus:outline-none">
            <FaEnvelope
              size={22}
              className="opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:text-[#FFB877] group-hover:opacity-100"
            />
          </Link>
          <Link
            href="https://instagram.com/zenshuii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group rounded-sm text-[#F5F5F5] transition-colors duration-150 hover:text-[#FFB877] focus:ring-2 focus:ring-[#FFB877] focus:ring-offset-2 focus:ring-offset-[#181818] focus:outline-none">
            <FaInstagram
              size={22}
              className="opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:text-[#FFB877] group-hover:opacity-100"
            />
          </Link>
          <Link
            href="https://youtube.com/@zenshuiistudios"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="group rounded-sm text-[#F5F5F5] transition-colors duration-150 hover:text-[#FFB877] focus:ring-2 focus:ring-[#FFB877] focus:ring-offset-2 focus:ring-offset-[#181818] focus:outline-none">
            <FaYoutube
              size={22}
              className="opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:text-[#FFB877] group-hover:opacity-100"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
