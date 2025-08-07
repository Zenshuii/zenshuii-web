import Link from 'next/link';
import { FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="mt-auto w-full bg-[#181818] py-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <span className="text-sm text-[#A5A5A5]">
          &copy; {new Date().getFullYear()} Zenshuii by{' '}
          <Link
            href="https://smelidoni.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors duration-150 hover:text-[#FFB877]">
            Simone Melidoni
          </Link>
          . All rights reserved.
        </span>
        <div className="flex gap-6">
          <Link
            href="mailto:sim@zenshuii.com"
            aria-label="Email"
            className="group text-[#F5F5F5] transition-colors duration-150 hover:text-[#FFB877]">
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
            className="group text-[#F5F5F5] transition-colors duration-150 hover:text-[#FFB877]">
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
            className="group text-[#F5F5F5] transition-colors duration-150 hover:text-[#FFB877]">
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
