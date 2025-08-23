import Image from 'next/image';
import { useState } from 'react';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function ImageWithSkeleton({
  src,
  alt,
  width,
  height,
  className,
}: ImageWithSkeletonProps) {
  const [imgLoaded, setImgLoaded] = useState(false);

  function handleLoad() {
    setImgLoaded(true);
  }

  const skeletonStyle = {
    width,
    height,
    borderRadius: '0.75rem',
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className || ''}`}
      style={{ width, height }}>
      {!imgLoaded && (
        <span
          aria-hidden="true"
          className="absolute inset-0 z-10 animate-pulse rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)]/60"
          style={skeletonStyle}>
          <span
            className="animate-shimmer block h-full w-full rounded-xl bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent"
            style={{ animationDuration: '1.2s' }}
          />
        </span>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`mx-auto rounded-xl object-contain transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        onLoad={handleLoad}
      />
    </div>
  );
}
