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
      className={`pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] max-w-[70vw] z-0 ${className}`}
      aria-hidden="true">
      <Image
        src={src}
        alt={alt}
        width={550}
        height={550}
        className="w-full h-auto opacity-100"
        priority
      />
    </motion.div>
  );
}
