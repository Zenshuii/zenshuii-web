import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Zenshuii – Tools for Mindful Living & Digital Wellbeing',
  description:
    'Mindful digital tools and wellbeing resources from Zenshuii, creators of the Stoic app.',
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
