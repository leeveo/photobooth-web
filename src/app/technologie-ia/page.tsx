'use client';

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { CircuitBoard, Cpu, Sparkles, Wand2, Lightbulb, Camera, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Remplacer par une liste statique ou importer dynamiquement côté serveur (recommandé pour App Router)
// Ici, version simple côté client :
const artisticStyles = [
  {
    name: "Pop Art",
    description: "Transformez vos photos en œuvres inspirées du mouvement Pop Art, avec des couleurs vives et des contrastes marqués.",
    image: "/carrousel/Pop-art.jpg"
  },
  {
    name: "Rétro",
    description: "Un style vintage qui donne à vos photos l'apparence des décennies passées avec des teintes sépia et des textures d'époque.",
    image: "/carrousel/Retro.jpg"
  },
  {
    name: "Cyberpunk",
    description: "Plongez dans l'univers futuriste avec des néons colorés et des effets haute technologie inspirés de l'esthétique cyberpunk.",
    image: "/carrousel/Cyberpunk.jpg"
  },
  {
    name: "Aquarelle",
    description: "Transformez vos photos en délicates peintures à l'aquarelle avec des couleurs douces et des textures de pinceau subtiles.",
    image: "/carrousel/Aquarelle.jpg"
  },
  {
    name: "Cartoon",
    description: "Donnez vie à vos photos sous forme de personnages de dessin animé avec des traits nets et des couleurs vibrantes.",
    image: "/carrousel/Cartoon.jpg"
  },
  {
    name: "Néon",
    description: "Ajoutez des effets lumineux néon éclatants qui font ressortir les contours et créent une ambiance nocturne électrisante.",
    image: "/carrousel/Neon.jpg"
  },
  {
    name: "Minimaliste",
    description: "Épurez vos photos avec un style minimaliste qui se concentre sur l'essentiel avec des lignes simples et des espaces négatifs.",
    image: "/carrousel/Minimaliste.jpg"
  },
  {
    name: "Futuriste",
    description: "Propulsez vos images dans le futur avec un style moderne, des effets holographiques et une palette de couleurs avancée.",
    image: "/carrousel/Futuriste.jpg"
  },
  {
    name: "Vintage",
    description: "Capturez le charme d'antan avec un filtre qui donne à vos photos l'aspect nostalgique des clichés d'autrefois.",
    image: "/carrousel/Vintage.jpg"
  }
];

export default function TechnologieIA() {
  // État pour le carrousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Schema markup spécialisé pour la technologie IA
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Technologie Photobooth IA - Intelligence Artificielle pour Événements",
    "description": "Découvrez notre technologie révolutionnaire de photobooth avec intelligence artificielle. Plus de 300 styles IA, traitement en temps réel et qualité professionnelle pour transformer vos événements.",
    "author": {
      "@type": "Organization",
      "name": "WaiBooth"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "WaiBooth",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.waibooth.app/logo.png"
      }
    },
    "datePublished": "2024-09-24",
    "dateModified": "2024-09-24",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.waibooth.app/technologie-ia"
    },
    "image": "https://www.waibooth.app/carrousel/Futuriste.jpg",
    "applicationCategory": "Business Software",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "category": "Software as a Service"
    }
  };

  // Effet pour faire défiler automatiquement les images
  useEffect(() => {
    if (artisticStyles.length === 0) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % artisticStyles.length);
        setIsTransitioning(false);
      }, 500); // Durée de la transition
    }, 3500); // Durée d'affichage de chaque image

    return () => clearInterval(interval);
  }, [artisticStyles.length]);

  return (
    <>
      <Head>
        <title>Technologie Photobooth IA | Intelligence Artificielle pour Événements - WaiBooth</title>
        <meta 
          name="description" 
          content="🤖 Découvrez notre technologie révolutionnaire de photobooth avec intelligence artificielle ! +300 styles IA, traitement temps réel, qualité 4K. Innovation événementielle garantie ✨" 
        />
        <meta 
          name="keywords" 
          content="technologie photobooth ia, photobooth avec intelligence artificielle, ia générative photobooth, intelligence artificielle événement, technologie ia avancée, photobooth ai innovation, système ia photobooth, waibooth technologie" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WaiBooth" />
        <link rel="canonical" href="https://www.waibooth.app/technologie-ia" />
        
        {/* Open Graph pour les réseaux sociaux */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Technologie Photobooth IA | Intelligence Artificielle pour Événements" />
        <meta property="og:description" content="🤖 Découvrez notre technologie révolutionnaire de photobooth avec intelligence artificielle ! +300 styles IA, traitement temps réel, qualité 4K." />
        <meta property="og:url" content="https://www.waibooth.app/technologie-ia" />
        <meta property="og:image" content="https://www.waibooth.app/carrousel/Futuriste.jpg" />
        <meta property="og:site_name" content="WaiBooth" />
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Technologie Photobooth IA | Intelligence Artificielle pour Événements" />
        <meta name="twitter:description" content="🤖 Découvrez notre technologie révolutionnaire de photobooth avec intelligence artificielle !" />
        <meta name="twitter:image" content="https://www.waibooth.app/carrousel/Futuriste.jpg" />

        {/* Données structurées JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Préchargement des ressources */}
        <link rel="preload" href="/carrousel/Futuriste.jpg" as="image" />
        <link rel="preload" href="/carrousel/Pop-art.jpg" as="image" />
      </Head>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900 relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/5 to-indigo-600/5 rounded-full blur-3xl"></div>
          
          {/* Lumière animée qui se ballade */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-gradient-radial from-yellow-300/60 via-orange-400/40 to-yellow-200/20 rounded-full blur-2xl animate-[float_8s_ease-in-out_infinite]" 
                 style={{
                   animation: 'floatingLight 12s ease-in-out infinite',
                   animationDelay: '0s'
                 }}>
            </div>
            <div className="absolute w-64 h-64 bg-gradient-radial from-purple-300/50 via-violet-400/30 to-purple-200/15 rounded-full blur-xl animate-[float_10s_ease-in-out_infinite]" 
                 style={{
                   animation: 'floatingLight2 15s ease-in-out infinite reverse',
                   animationDelay: '2s'
                 }}>
            </div>
            <div className="absolute w-80 h-80 bg-gradient-radial from-indigo-300/40 via-blue-400/25 to-indigo-200/12 rounded-full blur-2xl" 
                 style={{
                   animation: 'floatingLight3 18s ease-in-out infinite',
                   animationDelay: '4s'
                 }}>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes floatingLight {
            0% { transform: translate(-20%, 80%) scale(0.8); opacity: 0.7; }
            25% { transform: translate(120%, 20%) scale(1.2); opacity: 1.0; }
            50% { transform: translate(80%, -10%) scale(0.9); opacity: 0.8; }
            75% { transform: translate(-10%, 30%) scale(1.1); opacity: 0.9; }
            100% { transform: translate(-20%, 80%) scale(0.8); opacity: 0.7; }
          }
          
          @keyframes floatingLight2 {
            0% { transform: translate(110%, -20%) scale(0.7); opacity: 0.6; }
            30% { transform: translate(-20%, 40%) scale(1.0); opacity: 0.9; }
            60% { transform: translate(60%, 90%) scale(0.8); opacity: 0.7; }
            100% { transform: translate(110%, -20%) scale(0.7); opacity: 0.6; }
          }
          
          @keyframes floatingLight3 {
            0% { transform: translate(20%, 100%) scale(0.6); opacity: 0.5; }
            40% { transform: translate(80%, 10%) scale(1.1); opacity: 0.8; }
            80% { transform: translate(10%, 60%) scale(0.9); opacity: 0.6; }
            100% { transform: translate(20%, 100%) scale(0.6); opacity: 0.5; }
          }
        `}</style>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative z-10">
            {/* Texte à gauche */}
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/20 text-violet-300 text-sm font-medium mb-6">
                <CircuitBoard className="w-4 h-4 mr-2" />
                Photobooth IA - Technologie Avancée
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Technologie{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Photobooth IA
                </span>
                <span className="block text-3xl md:text-4xl mt-2">
                  avec Intelligence Artificielle
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Découvrez comment notre photobooth avec intelligence artificielle avancée transforme instantanément de simples photos en œuvres d'art uniques et personnalisées pour vos événements.
              </p>
              <div className="mt-8">
                <Link
                  href="https://photobooth.waibooth.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 text-lg group"
                >
                  <span>Tester le Photobooth IA maintenant</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Carrousel vertical à droite */}
            <div className="relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[3/4] h-[600px]">
                {/* Images du carrousel */}
                <div className="absolute inset-0 w-full h-full">
                  {artisticStyles.map((style, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out
                        ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <Image 
                        src={style.image}
                        alt={`Style photobooth IA ${style.name} - Intelligence artificielle pour événements`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Overlay d'informations */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end z-20">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-bold mb-2">
                      Style: {artisticStyles[currentIndex]?.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">
                      {artisticStyles[currentIndex]?.description}
                    </p>
                    
                    {/* Indicateurs du carrousel */}
                    <div className="flex space-x-2 mt-4">
                      {artisticStyles.map((_, index) => (
                        <button 
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 
                            ${index === currentIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                          aria-label={`Voir le style ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Information avec encarts */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Photobooth IA au Service de{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Votre Créativité
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Notre technologie révolutionnaire de photobooth avec intelligence artificielle transforme vos photos en œuvres d'art 
              uniques, offrant une expérience personnalisée et immersive à vos invités lors de vos événements.
            </p>

            {/* Encarts modernes flottants */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Encart 1 - IA Générative */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Photobooth IA Générative</h3>
                <p className="text-gray-300 text-sm">
                  Modèles d'intelligence artificielle de pointe pour des transformations artistiques ultra-réalistes et créatives avec notre photobooth IA
                </p>
              </div>

              {/* Encart 2 - Temps Réel */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Wand2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Traitement Instantané IA</h3>
                <p className="text-gray-300 text-sm">
                  Résultats générés en quelques secondes par notre photobooth avec intelligence artificielle pour une expérience fluide et interactive
                </p>
              </div>

              {/* Encart 3 - Qualité */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Qualité Professionnelle 4K</h3>
                <p className="text-gray-300 text-sm">
                  Images haute résolution de qualité professionnelle parfaites pour l'impression et le partage sur réseaux sociaux
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Statistiques & Performance */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Performance de Notre Photobooth avec{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Intelligence Artificielle
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des chiffres qui témoignent de l'excellence de notre technologie photobooth IA avancée
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Stat 1 */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-purple-200/50 shadow-xl text-center group hover:bg-white/90 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
                <div className="text-purple-600 font-medium mb-1">Styles IA</div>
                <div className="text-gray-500 text-sm">Filtres artistiques uniques</div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-blue-200/50 shadow-xl text-center group hover:bg-white/90 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CircuitBoard className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">&lt;3s</div>
                <div className="text-blue-600 font-medium mb-1">Traitement</div>
                <div className="text-gray-500 text-sm">Génération ultra-rapide</div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-green-200/50 shadow-xl text-center group hover:bg-white/90 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">4K</div>
                <div className="text-green-600 font-medium mb-1">Résolution</div>
                <div className="text-gray-500 text-sm">Qualité professionnelle</div>
              </div>

              {/* Stat 4 */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-orange-200/50 shadow-xl text-center group hover:bg-white/90 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">99.5%</div>
                <div className="text-yellow-600 font-medium mb-1">Précision</div>
                <div className="text-gray-500 text-sm">Reconnaissance faciale</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Un photobooth IA développé pour la créativité événementielle</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre technologie de photobooth avec intelligence artificielle a été spécifiquement conçue pour transformer instantanément n'importe quelle photo en une création artistique unique qui impressionnera vos invités lors de vos événements.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Contrairement aux filtres traditionnels qui appliquent simplement des effets prédéfinis, notre photobooth IA analyse chaque image en profondeur pour comprendre sa composition et appliquer des transformations artistiques intelligentes qui respectent l'essence du sujet.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Apprentissage profond IA", "Traitement temps réel", "Personnalisation avancée", "+300 styles photobooth IA"].map((feature, index) => (
                  <span key={index} className="flex items-center px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">
                    <Cpu className="w-4 h-4 mr-1" />
                    {feature}
                  </span>
                ))}
              </div>
              <Link
                href="https://photobooth.waibooth.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-semibold shadow-lg hover:from-fuchsia-600 hover:to-violet-700 transition-colors text-lg mt-6"
              >
                Tester notre photobooth IA
              </Link>
            </div>
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-xl h-96">
                <div className="absolute inset-0 p-8 flex flex-col justify-center bg-gradient-to-r from-violet-600/90 to-indigo-600/90 text-white">
                  <div className="flex flex-col space-y-6">
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <CircuitBoard className="w-5 h-5 text-violet-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Reconnaissance d'image avancée IA</h3>
                        <p className="text-white/90 text-sm">Notre photobooth IA identifie précisément les sujets, expressions et contextes dans chaque photo grâce à l'intelligence artificielle</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-violet-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Génération artistique intelligente</h3>
                        <p className="text-white/90 text-sm">Transformation complète qui va au-delà des simples filtres pour créer un véritable effet artistique avec notre photobooth IA</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 text-violet-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Adaptation intelligente événementielle</h3>
                        <p className="text-white/90 text-sm">Chaque style s'adapte intelligemment au type de photo et au contexte de l'événement grâce à notre IA avancée</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Styles Artistiques */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Plus de 300 styles artistiques avec photobooth IA disponibles</h2>
            <p className="text-lg text-gray-700 mb-8">
              Notre technologie photobooth avec intelligence artificielle propose une bibliothèque de styles en constante expansion. Découvrez quelques exemples de notre photobooth IA ci-dessous.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {artisticStyles.map((style) => (
                <span key={style.name} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-violet-700 shadow-sm border border-violet-100">
                  {style.name}
                </span>
              ))}
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-violet-700 shadow-sm border border-violet-100">
                +290 autres
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisticStyles.map((style, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <Image 
                    src={style.image}
                    alt={`Photobooth IA style ${style.name} - Intelligence artificielle pour transformation artistique`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4">
                      <div className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full inline-block mb-2">
                        Photobooth IA - Filtre généré par intelligence artificielle
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{style.name}</h3>
                  <p className="text-gray-600">{style.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/style-gallery"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg hover:from-violet-700 hover:to-indigo-700 transition-colors text-lg inline-flex items-center"
            >
              <span>Découvrir tous nos styles</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Comment ça marche */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Comment fonctionne notre photobooth avec intelligence artificielle ?</h2>
            <p className="text-lg text-gray-700">
              Un processus optimisé en plusieurs étapes pour des résultats exceptionnels avec notre photobooth IA
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Ligne de progression verticale */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-violet-100 hidden md:block"></div>
            
            {[
              {
                step: "1",
                title: "Analyse d'image par IA",
                description: "Notre photobooth IA analyse l'image pour identifier les sujets, le contexte, l'éclairage et les éléments clés grâce à l'intelligence artificielle avancée."
              },
              {
                step: "2",
                title: "Application du style artistique IA",
                description: "Le système sélectionne et adapte le style artistique choisi en tenant compte des caractéristiques uniques de l'image via notre technologie photobooth IA."
              },
              {
                step: "3",
                title: "Transformation intelligente",
                description: "Notre photobooth avec intelligence artificielle applique une transformation profonde qui va bien au-delà d'un simple filtre, en préservant l'essence du sujet."
              },
              {
                step: "4",
                title: "Optimisation finale IA",
                description: "Une phase d'affinage améliore les détails, ajuste les couleurs et perfectionne le rendu artistique final grâce à notre photobooth IA."
              }
            ].map((step, index) => (
              <div key={index} className="relative md:pl-12 mb-12 last:mb-0">
                {/* Cercle sur la ligne de progression */}
                <div className="absolute left-0 top-0 w-9 h-9 bg-violet-600 rounded-full text-white flex items-center justify-center font-bold hidden md:flex">
                  {step.step}
                </div>
                
                <div className="card bg-white p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <span className="w-8 h-8 bg-violet-600 rounded-full text-white flex items-center justify-center font-bold mr-3 md:hidden">
                      {step.step}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer vos photos avec notre photobooth IA ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Offrez à vos invités une expérience photobooth avec intelligence artificielle unique qu'ils n'oublieront jamais lors de vos événements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander un devis
              </Link>
              <Link
                href="/fonctionnalites"
                className="inline-block px-8 py-3 rounded-full border-2 border-white text-white font-semibold shadow-lg hover:bg-white/10 transition-colors text-lg"
              >
                Explorer nos fonctionnalités
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
