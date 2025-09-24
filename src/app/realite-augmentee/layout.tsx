import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réalité Augmentée Événements | Photobooth AR | Expérience AR Interactive',
  description: 'Découvrez nos solutions de réalité augmentée pour événements. Photobooth AR, miroir magique et expériences AR interactives. Technologie AR accessible sans application, personnalisable pour tous vos événements.',
  keywords: [
    'réalité augmentée',
    'realité augmentée événement',
    'photobooth AR',
    'expérience AR',
    'réalité augmentée interactive',
    'AR photobooth',
    'miroir magique AR',
    'technologie réalité augmentée',
    'expérience réalité augmentée',
    'événement réalité augmentée',
    'animation réalité augmentée',
    'AR experience',
    'réalité augmentée mariage',
    'réalité augmentée corporate',
    'solution réalité augmentée'
  ],
  openGraph: {
    title: 'Réalité Augmentée pour Événements | Photobooth AR Interactif',
    description: 'Solutions de réalité augmentée révolutionnaires pour vos événements. Photobooth AR, expériences interactives et animations AR personnalisées sans application.',
    url: 'https://photobooth-ia.com/realite-augmentee',
    siteName: 'Photobooth IA',
    images: [
      {
        url: '/realite-augmentee/ar-photobooth.jpg',
        width: 1200,
        height: 630,
        alt: 'Photobooth réalité augmentée - Expérience AR interactive pour événements',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Réalité Augmentée Événements | Photobooth AR',
    description: 'Découvrez nos solutions de réalité augmentée pour créer des expériences AR inoubliables. Photobooth AR et animations interactives.',
    images: ['/realite-augmentee/ar-photobooth.jpg'],
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
  alternates: {
    canonical: 'https://photobooth-ia.com/realite-augmentee',
  },
};

export default function RealiteAugmenteeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Solutions Réalité Augmentée pour Événements",
            "description": "Services de réalité augmentée pour événements incluant photobooth AR, miroir magique interactif et expériences AR personnalisées. Technologie accessible sans application.",
            "provider": {
              "@type": "Organization",
              "name": "Photobooth IA",
              "url": "https://photobooth-ia.com"
            },
            "serviceType": "Augmented Reality Experience",
            "areaServed": "FR",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services Réalité Augmentée",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Photobooth AR",
                    "description": "Photobooth en réalité augmentée avec éléments virtuels interactifs, effets spéciaux et personnalisation complète"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Miroir Magique AR",
                    "description": "Miroir interactif en réalité augmentée qui transforme votre reflet avec des éléments virtuels"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Expérience AR Personnalisée",
                    "description": "Création d'expériences de réalité augmentée sur mesure pour événements corporate et privés"
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "description": "Solutions complètes de réalité augmentée pour transformer vos événements en expériences immersives inoubliables"
            }
          })
        }}
      />
      {children}
    </>
  );
}