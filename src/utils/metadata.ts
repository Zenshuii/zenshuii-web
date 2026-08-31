import type { Metadata } from 'next';

export const siteUrl = new URL('https://zenshuii.com');
export const siteName = 'Zenshuii';
export const siteDescription =
  'Zenshuii is an independent creative studio making thoughtful apps for personal growth, wellbeing, and everyday clarity.';

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
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
    },
    twitter: {
      card: 'summary',
      title: socialTitle,
      description,
    },
  };
}
