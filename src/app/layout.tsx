import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import { Metadata } from 'next';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Service TV Jakarta | Perbaikan TV LED, LCD, Plasma',
  description:
    'Jasa service TV LED, LCD, dan Plasma di Jakarta dengan teknisi berpengalaman. Layanan cepat, harga jujur, dan bergaransi.',
  openGraph: {
    title: 'Service TV Jakarta | Perbaikan TV LED, LCD, Plasma',
    description:
      'Jasa service TV LED, LCD, dan Plasma di Jakarta dengan teknisi berpengalaman. Layanan cepat, harga jujur, dan bergaransi.',
    url: 'https://banyuservice.com',
    siteName: 'Banyuservice',
    locale: 'id_ID',
    type: 'website',
  },
  alternates: {
    canonical: 'https://banyuservice.com/',
  },

  referrer: 'origin-when-cross-origin',
  keywords: [
    'service tv jakarta barat',
    'service tv panggilan',
    'service tv samsung',
    'service tv sony jakarta',
  ],
  authors: [
    { name: 'Banyuservice' },
    { name: 'Banyuservice', url: 'https://nextjs.org' },
  ],
  creator: 'Banyuservice',
  publisher: 'Banyuservice',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  verification: {
    google:
      'google-site-verification=Q1teCMF_W6VdgORecbV68LBuf3c59VVx1ts7L1qODM4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Banyuservice TV Jakarta',
    description:
      'Jasa service TV LED, LCD, dan Plasma di Jakarta dengan teknisi berpengalaman. Layanan cepat, harga jujur, dan bergaransi.',
    image: 'https://banyuservice.com/images/logos/banyuservice.jpg',
    url: 'https://banyuservice.com',
    telephone: '+62 878-8770-8006',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Z Gg. Srikaya No.37',
      addressLocality: 'Jakarta Barat',
      addressRegion: 'DKI Jakarta',
      postalCode: '11430',
      addressCountry: 'ID',
    },
    openingHours: 'Mo-Sa 09:00-21:00',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-6.1806854799384086',
      longitude: '106.80927977640768',
    },
    sameAs: [
      'https://www.instagram.com/banyuservice_elektronik',
      'https://www.facebook.com/banyuservis',
    ],
  };
  return (
    <html lang='en'>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTM_ID}`} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiase`}
        data-theme='light'
      >
        {children}
      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA_ID}`} />
    </html>
  );
}
