import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Service TV Jakarta | Perbaikan TV LED, LCD, Plasma | Banyuservice',
  description:
    'Jasa service TV LED, LCD, dan plasma di Jakarta dengan teknisi berpengalaman. Layanan cepat, harga jujur, dan bergaransi.',
  openGraph: {
    title: 'Service TV Jakarta | Perbaikan TV LED, LCD, Plasma | Banyuservice',
    description:
      'Jasa service TV LED, LCD, dan plasma di Jakarta dengan teknisi berpengalaman. Layanan cepat, harga jujur, dan bergaransi.',
    url: 'https://banyuservice.com',
    siteName: 'Banyuservice',
    locale: 'id_ID',
    type: 'website',
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
      'Jasa service TV LED, LCD, dan plasma di Jakarta dengan teknisi berpengalaman. Layanan cepat, harga jujur, dan bergaransi.',
    image: 'https://banyuservice.com/images/logos/logo.jpg',
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
    <html lang='en' suppressHydrationWarning>
      <Head>
        <script type='application/ld+json'>
          {JSON.stringify(schemaMarkup)}
        </script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiase`}
        data-theme='light'
      >
        {children}
      </body>
    </html>
  );
}
