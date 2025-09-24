import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technologie Photobooth IA | Intelligence Artificielle pour Événements - WaiBooth',
  description: '🤖 Découvrez notre technologie révolutionnaire de photobooth avec intelligence artificielle ! +300 styles IA, traitement temps réel, qualité 4K. Innovation événementielle garantie ✨',
  keywords: 'technologie photobooth ia, photobooth avec intelligence artificielle, ia générative photobooth, intelligence artificielle événement, technologie ia avancée, photobooth ai innovation, système ia photobooth, waibooth technologie',
  openGraph: {
    title: 'Technologie Photobooth IA | Intelligence Artificielle pour Événements',
    description: '🤖 Découvrez notre technologie révolutionnaire de photobooth avec intelligence artificielle ! +300 styles IA, traitement temps réel, qualité 4K.',
    url: 'https://www.waibooth.app/technologie-ia',
    images: [
      {
        url: '/carrousel/Futuriste.jpg',
        width: 1200,
        height: 630,
        alt: 'Technologie Photobooth IA - Intelligence Artificielle pour Événements',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technologie Photobooth IA | Intelligence Artificielle pour Événements',
    description: '🤖 Découvrez notre technologie révolutionnaire de photobooth avec intelligence artificielle !',
    images: ['/carrousel/Futuriste.jpg'],
  },
  alternates: {
    canonical: 'https://www.waibooth.app/technologie-ia',
  },
};

export default function TechnologieIALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}