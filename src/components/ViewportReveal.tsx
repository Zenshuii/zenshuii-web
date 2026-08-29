'use client';

import {
  type CSSProperties,
  type ReactNode,
  useLayoutEffect,
  useRef,
} from 'react';

type ViewportRevealProps = {
  as?: 'article' | 'div';
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export function ViewportReveal({
  as = 'div',
  children,
  className,
  delay = 0,
  distance = 20,
}: ViewportRevealProps) {
  const elementRef = useRef<HTMLElement>(null);
  const setElementRef = (element: HTMLElement | null) => {
    elementRef.current = element;
  };

  useLayoutEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const reveal = () => element.classList.add('is-visible');

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      reveal();
      return;
    }

    element.classList.add('is-pending');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        reveal();
        observer.unobserve(element);
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const sharedProps = {
    ref: setElementRef,
    className: `viewport-reveal ${className ?? ''}`,
    style: {
      '--reveal-delay': `${delay}ms`,
      '--reveal-distance': `${distance}px`,
    } as CSSProperties,
  };

  return as === 'article' ? (
    <article {...sharedProps}>{children}</article>
  ) : (
    <div {...sharedProps}>{children}</div>
  );
}
