'use client';

import { navLinks } from '@/data/navLinks';
import { isActiveLink, isAnyChildActive } from '@/utils/navHelpers';
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
    <div className="hidden items-center gap-7 md:flex">
      {navLinks.map((link) =>
        !link.children ? (
          <Link
            key={link.href}
            href={link.href}
            className={`relative rounded-sm text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-(--color-accent-a60) after:transition-transform after:duration-300 after:content-[''] hover:text-(--color-accent) hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none ${
              isActiveLink(pathname, link.href)
                ? 'text-(--color-accent) after:scale-x-100'
                : 'text-(--color-on-surface)'
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
            <div className="group relative flex items-center gap-0.5">
              <Link
                href={link.href}
                className={`relative rounded-sm text-sm font-medium transition-colors duration-200 group-hover:text-(--color-accent) after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-(--color-accent-a60) after:transition-transform after:duration-300 after:content-[''] group-hover:after:scale-x-100 hover:text-(--color-accent) hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none ${
                  dropdownOpen === link.label ||
                  isActiveLink(pathname, link.href) ||
                  isAnyChildActive(link, pathname)
                    ? 'text-(--color-accent) after:scale-x-100'
                    : 'text-(--color-on-surface)'
                }`}
                tabIndex={0}
                aria-haspopup="menu"
                aria-expanded={dropdownOpen === link.label}>
                {link.label}
              </Link>
              <button
                type="button"
                className="flex items-center rounded-sm p-1 focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none"
                aria-label={`Toggle ${link.label} menu`}
                onClick={() => {
                  setDropdownOpen(
                    dropdownOpen === link.label ? null : link.label,
                  );
                }}>
                <span
                  className={`inline-block transition-transform duration-200 ${
                    dropdownOpen === link.label ? 'rotate-180' : ''
                  } ${
                    dropdownOpen === link.label ||
                    isActiveLink(pathname, link.href) ||
                    isAnyChildActive(link, pathname)
                      ? 'text-(--color-accent)'
                      : 'text-(--color-on-surface)'
                  } `}>
                  <ChevronDown size={18} />
                </span>
              </button>
            </div>
            {/* Dropdown menu */}
            <div
              className={`absolute top-full right-0 z-20 mt-4 min-w-48 origin-top-right rounded-2xl border border-(--color-border-strong) bg-(--color-surface-1) p-1.5 shadow-(--shadow-card) transition-[opacity,transform] duration-200 ${dropdownOpen === link.label ? 'pointer-events-auto translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-1 scale-98 opacity-0'}`}
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
                  className={`block w-full rounded-xl px-3 py-2.5 text-sm transition-colors duration-200 hover:bg-(--color-accent-a10) hover:text-(--color-accent) focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:outline-none ${
                    isActiveLink(pathname, child.href)
                      ? 'font-semibold text-(--color-accent)'
                      : 'text-(--color-on-surface)'
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
