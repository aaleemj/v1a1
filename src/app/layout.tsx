import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'v1a1 – Global Private Debt Advisory',
    template: '%s | v1a1',
  },
  description: 'v1a1 delivers bespoke private debt solutions for Series A/B companies seeking $5–100m through venture debt, revenue-based financing, ABL, mezzanine and acquisition finance.',
  openGraph: {
    title: 'v1a1 – Global Private Debt Advisory',
    description: 'Tailored non‑dilutive capital solutions for high‑growth companies.',
    url: 'https://v1a1.com',
    siteName: 'v1a1',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'v1a1 – Global Private Debt Advisory',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'v1a1 – Global Private Debt Advisory',
    description: 'Tailored non‑dilutive capital solutions for high‑growth companies.',
    images: ['/og-default.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Plausible analytics */}
        <script
          defer
          data-domain="v1a1.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'v1a1 Global Private Debt Advisory DIFC',
              url: 'https://v1a1.com',
              logo: 'https://v1a1.com/og-default.png',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                telephone: '+971585412375',
                email: 'info@v1a1.com',
                areaServed: 'Worldwide',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Index Tower',
                addressLocality: 'Dubai',
                addressCountry: 'AE',
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="bg-dark text-light">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
