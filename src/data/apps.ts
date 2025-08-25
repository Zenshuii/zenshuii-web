export interface AppMeta {
  slug: string;
  name: string;
  description: string;
  href: string;
  image?: string;
  tagline?: string;
}

export const apps: AppMeta[] = [
  {
    slug: 'stoic',
    name: 'Stoic App',
    description:
      'Stoic is a modern app to help you live with intention, discipline, and clarity.',
    href: '/apps/stoic',
    image: '/apps/stoic-thumb.png',
    tagline: 'Mindful Stoicism',
  },
];
