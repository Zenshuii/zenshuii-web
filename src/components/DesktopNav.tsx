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
    <div className="hidden md:flex gap-8 items-center">
      {navLinks.map((link) =>
        !link.children ? (
          <Link
            key={link.href}
            href={link.href}
            className="relative font-medium text-[#232323] dark:text-[#F5F5F5] hover:text-[#FFB877] transition-colors duration-150">
            {link.label}
          </Link>
        ) : (
          // ...inside your navLinks.map...
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
              className="flex items-center gap-1 font-medium text-[#232323] dark:text-[#F5F5F5] hover:text-[#FFB877] transition-colors duration-150 focus:outline-none"
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
              className={`
      absolute right-0 top-full mt-3 min-w-[170px] rounded-xl
      bg-[#FFF6EB] dark:bg-[#232323]
      shadow-2xl border border-[#FFB877]/20 ring-1 ring-[#FFB877]/10
      transition-all duration-200 z-20
      ${dropdownOpen === link.label ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-2'}
    `}
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
                  className={`
          block px-5 py-2 rounded-md
          text-[#232323] dark:text-[#F5F5F5]
          hover:bg-[#FFB877]/40 
          focus:bg-[#FFB877]/60 
          transition-colors duration-150
          outline-none
        `}
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
