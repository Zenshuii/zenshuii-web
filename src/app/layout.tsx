import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';
import { siteDescription, siteName, siteUrl } from '@/utils/metadata';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'Zenshuii – Digital tools for a more intentional life.',
    template: '%s | Zenshuii',
  },
  description: siteDescription,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName,
    title: 'Zenshuii – Digital tools for a more intentional life.',
    description: siteDescription,
    images: [
      {
        url: '/zenshuii-og-image.png',
        width: 1200,
        height: 1200,
        alt: 'Zenshuii – Digital tools for a more intentional life.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zenshuii – Digital tools for a more intentional life.',
    description: siteDescription,
    images: ['/zenshuii-og-image.png'],
  },
  robots: { index: true, follow: true },
  icons: [
    {
      rel: 'icon',
      url: '/zenshuii-logo-black.svg',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      url: '/zenshuii-logo-white.svg',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} flex min-h-screen flex-col antialiased`}>
        <Navbar />
        <main className="flex flex-1 flex-col justify-center">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
