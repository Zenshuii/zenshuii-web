import Image from 'next/image';

type WatermarkLogoProps = {
  src: string;
  alt: string;
  className?: string;
};

export function WatermarkLogo({
  src,
  alt,
  className = '',
}: WatermarkLogoProps) {
  return (
    <div
      className={`pointer-events-none absolute top-1/2 left-1/2 z-0 w-[clamp(300px,60vw,560px)] -translate-x-1/2 -translate-y-1/2 select-none sm:w-[clamp(260px,55vw,560px)] lg:w-[clamp(240px,50vw,560px)] ${className}`}
      aria-hidden="true">
      <div className="motion-watermark-enter">
        <Image
          src={src}
          alt={alt}
          width={560}
          height={560}
          className="h-auto w-full"
          sizes="(min-width: 1120px) 560px, (min-width: 640px) 55vw, 60vw"
          role="presentation"
          draggable={false}
        />
      </div>
    </div>
  );
}
