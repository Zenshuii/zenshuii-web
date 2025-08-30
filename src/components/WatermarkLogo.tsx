import Image from 'next/image';
import { motion, MotionProps } from 'framer-motion';

type WatermarkLogoProps = {
  src: string;
  alt: string;
  className?: string;
  watermarkMotion?: MotionProps;
  priority?: boolean;
};

export function WatermarkLogo({
  src,
  alt,
  className = '',
  watermarkMotion = {},
  priority = false,
}: WatermarkLogoProps) {
  return (
    <motion.div
      {...watermarkMotion}
      className={`pointer-events-none absolute top-1/2 left-1/2 z-0 w-[clamp(300px,60vw,560px)] sm:w-[clamp(260px,55vw,560px)] lg:w-[clamp(240px,50vw,560px)] -translate-x-1/2 -translate-y-1/2 select-none ${className}`}
      aria-hidden="true">
      <Image
        src={src}
        alt={alt}
        width={560}
        height={560}
        className="h-auto w-full opacity-100"
        sizes="(min-width: 1120px) 560px, (min-width: 640px) 55vw, 60vw"
        role="presentation"
        draggable={false}
        priority={priority}
      />
    </motion.div>
  );
}
