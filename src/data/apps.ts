export interface AppMeta {
  slug: string;
  name: string;
  status: string;
  description: string;
  href: string;
  image?: string;
  tagline?: string;
}

export const stoicWaitlistHref = 'https://stoic-app.com/';

export const apps: AppMeta[] = [
  {
    slug: 'stoic',
    name: 'Stoic App',
    status: 'Coming soon',
    description:
      'Daily perspective and personal journalling, designed for a steadier everyday practice.',
    href: '/apps/stoic',
    image: '/apps/stoic-thumb.png',
    tagline: 'Mindful Stoicism',
  },
];
