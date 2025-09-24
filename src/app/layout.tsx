import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Photobooth IA | Photobooth avec Intelligence Artificielle - WaiBooth',
    template: '%s | WaiBooth - Photobooth IA'
  },
  description: '🤖 Photobooth IA révolutionnaire ! Transformez vos événements avec notre photobooth avec intelligence artificielle. Solution SaaS complète : filtres IA, videobooth, photomosaïque. ✨ Essai gratuit !',
  keywords: ['photobooth ia', 'photobooth avec intelligence artificielle', 'photobooth ai', 'borne photo ia', 'animation ia événement', 'photobooth saas', 'solution photobooth', 'photobooth personnalisé', 'intelligence artificielle événement', 'photobooth innovant', 'waibooth'],
  authors: [{ name: 'WaiBooth Team' }],
  creator: 'WaiBooth',
  publisher: 'WaiBooth',
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
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.waibooth.app',
    siteName: 'WaiBooth - Photobooth IA',
    title: 'Photobooth IA | Photobooth avec Intelligence Artificielle - WaiBooth',
    description: '🤖 Photobooth IA révolutionnaire ! Transformez vos événements avec notre photobooth avec intelligence artificielle. Solution SaaS complète avec filtres IA avancés.',
    images: [
      {
        url: '/hero-photobooth.png',
        width: 1200,
        height: 630,
        alt: 'Photobooth IA avec intelligence artificielle - WaiBooth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photobooth IA | Photobooth avec Intelligence Artificielle',
    description: '🤖 Photobooth IA révolutionnaire ! Transformez vos événements avec notre solution d\'intelligence artificielle.',
    images: ['/hero-photobooth.png'],
  },
  alternates: {
    canonical: 'https://www.waibooth.app',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
