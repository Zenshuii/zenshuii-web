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
  {
    slug: 'test',
    name: 'Test App',
    description:
      'Experimental sandbox for prototyping future mindful tools and UI patterns.',
    href: '/apps/test',
    tagline: 'R&D Playground',
  },
];
