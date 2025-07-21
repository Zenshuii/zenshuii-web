import Image from 'next/image';
import { motion, MotionProps } from 'framer-motion';

type WatermarkLogoProps = {
  src: string;
  alt: string;
  className?: string;
  watermarkMotion: MotionProps;
};

export function WatermarkLogo({
  src,
  alt,
  className = '',
  watermarkMotion,
}: WatermarkLogoProps) {
  return (
    <motion.div
      {...watermarkMotion}
      className={`pointer-events-none absolute top-1/2 left-1/2 z-0 w-[550px] max-w-[70vw] -translate-x-1/2 -translate-y-1/2 select-none ${className}`}
      aria-hidden="true">
      <Image
        src={src}
        alt={alt}
        width={550}
        height={550}
        className="h-auto w-full opacity-100"
        priority
      />
    </motion.div>
  );
}
