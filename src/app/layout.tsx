import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Zenshuii – Tools for Mindful Living & Digital Wellbeing',
  description:
    'Mindful digital tools and wellbeing resources from Zenshuii, creators of the Stoic app.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Light mode favicon */}
        <link
          rel="icon"
          href="/zenshuii-logo-black.svg"
          media="(prefers-color-scheme: light)"
        />
        {/* Dark mode favicon */}
        <link
          rel="icon"
          href="/zenshuii-logo-white.svg"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
