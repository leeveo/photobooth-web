import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photobooth Coiffure IA | Révolutionnez votre salon avec l\'Intelligence Artificielle',
  description: 'Permettez à vos clients de visualiser instantanément leur nouvelle coupe et couleur de cheveux grâce à notre photobooth IA. +500 coupes, +200 couleurs, widget web inclus.',
  keywords: [
    'photobooth coiffure',
    'IA coiffure',
    'essayage virtuel cheveux',
    'salon de coiffure numérique',
    'technologie coiffure',
    'couleur cheveux virtuelle',
    'coupe cheveux simulation',
    'widget coiffure site web',
    'tablette salon coiffure',
    'intelligence artificielle beauté'
  ],
  authors: [{ name: 'Leeveo' }],
  creator: 'Leeveo',
  publisher: 'Leeveo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://votre-domaine.com'),
  alternates: {
    canonical: '/photobooth-coiffure',
  },
  openGraph: {
    title: 'Photobooth Coiffure IA | Révolutionnez votre salon',
    description: 'Permettez à vos clients de tester virtuellement +500 coupes et +200 couleurs grâce à notre IA avancée. Solutions tablette et widget web disponibles.',
    url: '/photobooth-coiffure',
    siteName: 'Leeveo - Photobooth IA',
    images: [
      {
        url: '/hero-photobooth.png',
        width: 1200,
        height: 630,
        alt: 'Photobooth Coiffure IA - Technologie révolutionnaire pour salons',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photobooth Coiffure IA | Révolutionnez votre salon',
    description: 'IA avancée pour tester virtuellement coupes et couleurs. Solutions pour salons de coiffure.',
    images: ['/hero-photobooth.png'],
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
};

export { default } from './page';
