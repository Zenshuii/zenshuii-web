import type { Metadata, Viewport } from 'next';
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

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
};

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
  },
  twitter: {
    card: 'summary',
    title: 'Zenshuii – Digital tools for a more intentional life.',
    description: siteDescription,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
        sizes: '16x16 32x32 48x48',
      },
      {
        url: '/favicon-256.png',
        type: 'image/png',
        sizes: '256x256',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
        sizes: 'any',
      },
    ],
    shortcut: '/favicon-256.png',
    apple: {
      url: '/apple-touch-icon.png',
      type: 'image/png',
      sizes: '180x180',
    },
  },
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
