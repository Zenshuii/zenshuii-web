import type { Metadata } from 'next';

export const siteUrl = new URL('https://zenshuii.com');
export const siteName = 'Zenshuii';
export const siteDescription =
  'Zenshuii is an independent creative studio making thoughtful apps for personal growth, wellbeing, and everyday clarity.';

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export function createPageMetadata({
  title,
  description,
  path,
  imagePath = '/zenshuii-og-image.png',
  imageAlt = 'Zenshuii – Digital tools for a more intentional life.',
  imageWidth = 1200,
  imageHeight = 1200,
}: PageMetadata): Metadata {
  const socialTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: path,
      siteName,
      title: socialTitle,
      description,
      images: [
        {
          url: imagePath,
          width: imageWidth,
          height: imageHeight,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [imagePath],
    },
  };
}
