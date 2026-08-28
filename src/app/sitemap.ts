import type { MetadataRoute } from 'next';
import { siteUrl } from '@/utils/metadata';

const routes = ['/', '/about', '/apps', '/apps/stoic', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
