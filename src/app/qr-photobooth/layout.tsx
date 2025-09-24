import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QR Photobooth Sans Contact | Photobooth QR Code | Solution Hygiénique',
  description: 'Découvrez notre QR Photobooth révolutionnaire sans contact. Photobooth QR code hygiénique permettant à vos invités de créer des photos IA directement depuis leur smartphone. Solution photobooth moderne et sans installation.',
  keywords: [
    'qr photobooth',
    'photobooth qr code',
    'photobooth sans contact',
    'qr code photobooth',
    'photobooth hygiénique',
    'photobooth mobile',
    'photobooth smartphone',
    'photobooth qr',
    'photobooth sans installation',
    'photobooth web',
    'solution photobooth qr',
    'photobooth digital qr',
    'photobooth événement qr',
    'qr photobooth ia',
    'photobooth qr personnalisé'
  ],
  openGraph: {
    title: 'QR Photobooth Sans Contact | Solution Photobooth QR Code Moderne',
    description: 'Révolutionnez vos événements avec notre QR Photobooth sans contact. Photobooth QR code hygiénique et accessible depuis tout smartphone sans installation.',
    url: 'https://photobooth-ia.com/qr-photobooth',
    siteName: 'Photobooth IA',
    images: [
      {
        url: '/qr-photobooth/qr-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'QR Photobooth sans contact - Solution photobooth QR code pour événements',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QR Photobooth Sans Contact | Photobooth QR Code',
    description: 'Découvrez notre solution QR Photobooth révolutionnaire. Photobooth sans contact accessible via QR code depuis tout smartphone.',
    images: ['/qr-photobooth/qr-hero.jpg'],
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
    canonical: 'https://photobooth-ia.com/qr-photobooth',
  },
};

export default function QrPhotoboothLayout({
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
            "name": "QR Photobooth Sans Contact",
            "description": "Service de QR Photobooth sans contact permettant aux invités d'accéder à un photobooth IA directement via QR code depuis leur smartphone. Solution hygiénique et moderne pour tous événements.",
            "provider": {
              "@type": "Organization",
              "name": "Photobooth IA",
              "url": "https://photobooth-ia.com"
            },
            "serviceType": "QR Code Photobooth",
            "areaServed": "FR",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services QR Photobooth",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "QR Photobooth Hygiénique",
                    "description": "Solution photobooth sans contact accessible via QR code avec filtres IA personnalisés"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Photobooth Mobile QR",
                    "description": "Photobooth accessible depuis smartphone via QR code sans installation d'application"
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "description": "Solutions complètes de QR Photobooth sans contact pour tous types d'événements"
            }
          })
        }}
      />
      {children}
    </>
  );
}