'use client';

import { navLinks } from '@/data/navLinks';
import { isActiveLink, isAnyChildActive } from '@/utils/navHelpers';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export function DesktopNav() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const appsDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const isTouchDevice = () =>
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownOpen === 'Apps' &&
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
            className={`relative font-medium transition-colors duration-150 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[var(--color-accent-a60)] after:transition-transform after:duration-300 after:content-[''] hover:text-[var(--color-accent)] hover:after:scale-x-100 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-3)] focus-visible:outline-none ${
              isActiveLink(pathname, link.href)
                ? 'text-[var(--color-accent)]'
                : 'text-[var(--color-on-surface)]'
            }`}>
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
            <div className="group relative flex items-center gap-1">
              <Link
                href={link.href}
                className={`relative font-medium transition-colors duration-150 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[var(--color-accent-a60)] after:transition-transform after:duration-300 after:content-[''] hover:text-[var(--color-accent)] hover:after:scale-x-100 group-hover:text-[var(--color-accent)] group-hover:after:scale-x-100 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-3)] focus-visible:outline-none ${
                  dropdownOpen === link.label ||
                  isActiveLink(pathname, link.href) ||
                  isAnyChildActive(link, pathname)
                    ? 'text-[var(--color-accent)]'
                    : 'text-[var(--color-on-surface)]'
                }`}
                tabIndex={0}
                aria-haspopup="menu"
                aria-expanded={dropdownOpen === link.label}>
                {link.label}
              </Link>
              <button
                type="button"
                className="flex items-center px-1 focus:outline-none"
                tabIndex={-1}
                aria-label={`Toggle ${link.label} menu`}
                onClick={() => {
                  setDropdownOpen(
                    dropdownOpen === link.label ? null : link.label,
                  );
                }}>
                <motion.span
                  animate={{ rotate: dropdownOpen === link.label ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className={`inline-block ${
                    dropdownOpen === link.label ||
                    isActiveLink(pathname, link.href) ||
                    isAnyChildActive(link, pathname)
                      ? 'text-[var(--color-accent)]'
                      : 'text-[var(--color-on-surface)]'
                  } `}>
                  <ChevronDown size={18} />
                </motion.span>
              </button>
            </div>
            {/* Dropdown menu */}
            <div
              className={`absolute top-full right-0 z-20 mt-3 min-w-[170px] overflow-hidden rounded-xl border border-[var(--color-accent-a20)] bg-[var(--color-surface-3)] shadow-2xl transition-all duration-200 ${dropdownOpen === link.label ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'}`}
              role="menu"
              aria-label={`${link.label} submenu`}
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
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={`block w-full rounded-none px-5 py-2 transition-colors duration-150 hover:bg-[var(--color-accent-a15)] focus-visible:z-10 focus-visible:border-l-4 focus-visible:border-[var(--color-accent)] focus-visible:bg-[var(--color-accent-a15)] focus-visible:font-semibold focus-visible:text-[var(--color-accent)] focus-visible:outline-none ${
                    isActiveLink(pathname, child.href)
                      ? 'font-semibold text-[var(--color-accent)]'
                      : 'text-[var(--color-on-surface)]'
                  }`}
                  role="menuitem"
                  tabIndex={0}
                  onFocus={() => setDropdownOpen(link.label)}
                  onBlur={(e) => {
                    if (
                      !(e.relatedTarget instanceof Node) ||
                      !e.currentTarget.parentElement?.contains(e.relatedTarget)
                    ) {
                      setDropdownOpen(null);
                    }
                  }}>
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
