import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo Mosaïque Interactive | Logiciel de Photo Mosaic | Photomosaic Wall',
  description: 'Découvrez notre photo mosaïque interactive révolutionnaire. Créez des photomosaic walls spectaculaires avec notre logiciel de photo mosaic avancé. Transformez vos événements avec nos solutions de photo mosaique collaborative en temps réel.',
  keywords: [
    'photo mosaic',
    'photo mosaïque',
    'photomosaic wall', 
    'logiciel de photo mosaic',
    'mosaïque photo interactive',
    'photo mosaic événement',
    'photomosaique temps réel',
    'logiciel mosaique photo',
    'photo mosaic collaboration',
    'mur photo mosaïque',
    'création photo mosaic',
    'art photo mosaïque',
    'photobooth mosaique',
    'photo collage mosaic',
    'photo mosaic personnalisé'
  ],
  openGraph: {
    title: 'Photo Mosaïque Interactive | Logiciel de Photo Mosaic Avancé',
    description: 'Créez des photomosaic walls spectaculaires avec notre logiciel de photo mosaic révolutionnaire. Art collaboratif et photo mosaïque en temps réel pour vos événements.',
    url: 'https://photobooth-ia.com/photomosaique',
    siteName: 'Photobooth IA',
    images: [
      {
        url: '/photomosaique/mosaic-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Photo mosaïque interactive - Logiciel de photo mosaic en action lors d\'un événement',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photo Mosaïque Interactive | Logiciel de Photo Mosaic',
    description: 'Découvrez notre solution de photo mosaïque interactive. Créez des photomosaic walls collaboratives avec notre logiciel de photo mosaic avancé.',
    images: ['/photomosaique/mosaic-hero.jpg'],
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
    canonical: 'https://photobooth-ia.com/photomosaique',
  },
};

export default function PhotomosaiqueLayout({
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
            "name": "Photo Mosaïque Interactive",
            "description": "Service de photo mosaïque interactive et logiciel de photo mosaic pour créer des photomosaic walls collaboratives lors d'événements. Solution complète de photo mosaique en temps réel.",
            "provider": {
              "@type": "Organization",
              "name": "Photobooth IA",
              "url": "https://photobooth-ia.com"
            },
            "serviceType": "Photo Mosaic Software",
            "areaServed": "FR",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services Photo Mosaïque",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Logiciel de Photo Mosaic",
                    "description": "Logiciel avancé pour créer des photo mosaïques interactives et photomosaic walls en temps réel"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Photo Mosaique Collaborative",
                    "description": "Service de création de photo mosaïque collaborative pour événements avec participation temps réel"
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "description": "Solutions complètes de photo mosaïque et photomosaic wall pour tous types d'événements"
            }
          })
        }}
      />
      {children}
    </>
  );
}
