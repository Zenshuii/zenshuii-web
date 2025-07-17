'use client';

import { navLinks } from '@/data/navLinks';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export function DesktopNav() {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const appsDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const isTouchDevice = () =>
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownOpen === 'Apps' && // Only if Apps is open
        appsDropdownRef.current &&
        !appsDropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(null);
      }
    }

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="hidden items-center gap-8 md:flex">
      {navLinks.map((link) =>
        !link.children ? (
          <Link
            key={link.href}
            href={link.href}
            className={`relative font-medium text-[#232323] transition-colors duration-150 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[#FFB877]/60 after:transition-transform after:duration-300 after:content-[''] hover:text-[#FFB877] hover:after:scale-x-100 dark:text-[#F5F5F5]`}>
            {link.label}
          </Link>
        ) : (
          <div
            ref={appsDropdownRef}
            className="relative"
            key={link.label}
            onMouseEnter={() => {
              if (!isTouchDevice()) {
                if (dropdownTimeout.current)
                  clearTimeout(dropdownTimeout.current);
                setDropdownOpen(link.label);
              }
            }}
            onMouseLeave={() => {
              if (!isTouchDevice()) {
                dropdownTimeout.current = setTimeout(
                  () => setDropdownOpen(null),
                  100,
                );
              }
            }}>
            <button
              className={`relative flex items-center gap-1 font-medium text-[#232323] transition-colors duration-150 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[#FFB877]/60 after:transition-transform after:duration-300 after:content-[''] hover:text-[#FFB877] hover:after:scale-x-100 focus:outline-none dark:text-[#F5F5F5] ${dropdownOpen === link.label ? 'after:scale-x-100' : ''} `}
              aria-haspopup="menu"
              aria-expanded={dropdownOpen === link.label}
              tabIndex={0}
              onClick={() => {
                if (isTouchDevice()) {
                  setDropdownOpen(
                    dropdownOpen === link.label ? null : link.label,
                  );
                }
              }}>
              {link.label}
              <motion.span
                animate={{ rotate: dropdownOpen === link.label ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="inline-block">
                <ChevronDown size={18} />
              </motion.span>
            </button>
            {/* Dropdown menu */}
            <div
              className={`absolute top-full right-0 z-20 mt-3 min-w-[170px] overflow-hidden rounded-xl border border-[#FFB877]/20 bg-[#FFFFFF] shadow-2xl ring-1 ring-[#FFB877]/10 transition-all duration-200 dark:bg-[#232323] ${dropdownOpen === link.label ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'}`}
              role="menu"
              aria-label={`${link.label} submenu`}
              // Only use mouse events on desktop
              onMouseEnter={() => {
                if (!isTouchDevice()) {
                  if (dropdownTimeout.current)
                    clearTimeout(dropdownTimeout.current);
                  setDropdownOpen(link.label);
                }
              }}
              onMouseLeave={() => {
                if (!isTouchDevice()) {
                  dropdownTimeout.current = setTimeout(
                    () => setDropdownOpen(null),
                    100,
                  );
                }
              }}>
              {link.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={`block w-full rounded-none px-5 py-2 text-[#232323] transition-colors duration-150 outline-none hover:bg-[#FFB877]/40 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-[#FFB877] dark:text-[#F5F5F5] dark:hover:bg-[#FFB877]/30`}
                  role="menuitem"
                  tabIndex={0}>
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        ),
      )}
    </div>
  );
}
