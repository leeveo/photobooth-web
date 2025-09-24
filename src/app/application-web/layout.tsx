import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Application Web Photobooth IA - Logiciel Photobooth Mobile | WaiBooth',
  description: 'Application web photobooth professionnel avec IA intégrée. Transformez chaque smartphone en photobooth. Logiciel photobooth mobile, plateforme web photobooth sans installation.',
  keywords: 'application web photobooth, logiciel photobooth, plateforme photobooth, app photobooth mobile, solution photobooth web, photobooth sans installation, application photobooth, logiciel photo événementiel, plateforme web événements, photobooth cloud, app mobile photobooth, solution SaaS photobooth, logiciel événementiel, application photo IA, plateforme photobooth intelligente',
  authors: [{ name: 'WaiBooth' }],
  creator: 'WaiBooth',
  publisher: 'WaiBooth',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://waibooth.app'),
  alternates: {
    canonical: '/application-web',
  },
  openGraph: {
    title: 'Application Web Photobooth IA - Logiciel Mobile Professionnel',
    description: 'Application web photobooth avec IA. Transformez smartphones en photobooth professionnel. Solution SaaS sans installation, filtres IA, partage viral.',
    url: 'https://waibooth.app/application-web',
    siteName: 'WaiBooth',
    images: [
      {
        url: '/application-web/app-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Application web photobooth IA - Interface mobile',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Application Web Photobooth IA - Logiciel Mobile',
    description: 'Transformez chaque smartphone en photobooth professionnel avec notre application web IA. Sans installation, avec partage viral.',
    images: ['/application-web/app-hero.jpg'],
    creator: '@WaiBooth',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
}

export default function ApplicationWebLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Application Web Photobooth IA WaiBooth",
    "description": "Application web photobooth professionnel avec intelligence artificielle. Transformez chaque smartphone en photobooth sans installation.",
    "url": "https://waibooth.app/application-web",
    "provider": {
      "@type": "Organization",
      "name": "WaiBooth",
      "url": "https://waibooth.app"
    },
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "Sur devis",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Application web photobooth sans installation",
      "Logiciel photobooth mobile responsive",
      "Filtres IA professionnels intégrés",
      "Plateforme de gestion événements",
      "Partage viral automatique",
      "QR Code d'accès instantané",
      "Interface administrateur mobile",
      "Analytiques temps réel",
      "Personnalisation complète branding"
    ],
    "screenshot": "https://waibooth.app/application-web/app-hero.jpg",
    "softwareVersion": "2024",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Claire Dubois"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Application web exceptionnelle pour notre conférence. Interface intuitive, déploiement instantané et résultats impressionnants."
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
