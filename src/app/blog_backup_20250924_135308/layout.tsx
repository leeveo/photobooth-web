import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Photobooth IA - Guides & Actualités Animation Événementielle | WaiBooth',
  description: 'Blog expert photobooth IA : guides complets, tendances, conseils et actualités sur l\'intelligence artificielle appliquée à l\'animation événementielle. Ressources professionnelles pour optimiser vos événements.',
  keywords: 'blog photobooth ia, guide photobooth intelligence artificielle, actualités animation événementielle, conseils photobooth, tendances photobooth ia, blog événements, ressources photobooth, tutoriels photobooth ia, news animation, expertise photobooth, formation photobooth, optimisation événements, innovations photobooth, blog événementiel, contenus experts photobooth',
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
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog Photobooth IA - Guides & Actualités Animation Événementielle',
    description: 'Blog expert photobooth IA : guides complets, tendances et conseils sur l\'intelligence artificielle pour l\'animation événementielle. Ressources professionnelles pour vos événements.',
    url: 'https://waibooth.app/blog',
    siteName: 'WaiBooth',
    images: [
      {
        url: '/blog/ai-photobooth.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog photobooth IA - Guides animation événementielle',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Photobooth IA - Guides Animation Événementielle',
    description: 'Découvrez nos guides experts et actualités sur le photobooth avec intelligence artificielle. Conseils et tendances pour vos événements.',
    images: ['/blog/ai-photobooth.jpg'],
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
  category: 'education',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Photobooth IA WaiBooth",
    "description": "Blog expert sur le photobooth avec intelligence artificielle, guides complets et actualités animation événementielle",
    "url": "https://waibooth.app/blog",
    "inLanguage": "fr-FR",
    "publisher": {
      "@type": "Organization",
      "name": "WaiBooth",
      "url": "https://waibooth.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://waibooth.app/logo.png",
        "width": 200,
        "height": 60
      }
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Photobooth Intelligence Artificielle"
      },
      {
        "@type": "Thing", 
        "name": "Animation Événementielle"
      },
      {
        "@type": "Thing",
        "name": "Guides Photobooth"
      }
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Event Professionals, Wedding Planners, Corporate Event Managers"
    },
    "keywords": "blog photobooth ia, guide intelligence artificielle, actualités animation événementielle, conseils photobooth, tendances ia événements"
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