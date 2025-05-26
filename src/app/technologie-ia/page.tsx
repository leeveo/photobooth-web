'use client';

import Image from 'next/image';
import Link from 'next/link';
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
      {/* Hero Section - layout restructuré avec texte à gauche et carrousel vertical à droite */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Texte à gauche */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Technologie IA
                </span>
                <span className="text-gray-800"> : Le cœur de notre innovation</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Découvrez comment notre intelligence artificielle avancée transforme de simples photos en œuvres d'art uniques et personnalisées.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg hover:from-violet-700 hover:to-indigo-700 transition-colors text-lg"
                >
                  Essayez notre plateforme Événementielle SaaS
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
                        alt={`Style ${style.name}`}
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

      {/* Section Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Une IA développée pour la créativité</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre technologie d'intelligence artificielle a été spécifiquement conçue pour transformer instantanément n'importe quelle photo en une création artistique unique qui impressionnera vos invités.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Contrairement aux filtres traditionnels qui appliquent simplement des effets prédéfinis, notre IA analyse chaque image en profondeur pour comprendre sa composition et appliquer des transformations artistiques qui respectent l'essence du sujet.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Apprentissage profond", "Traitement en temps réel", "Personnalisation avancée", "+300 styles disponibles"].map((feature, index) => (
                  <span key={index} className="flex items-center px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">
                    <Cpu className="w-4 h-4 mr-1" />
                    {feature}
                  </span>
                ))}
              </div>
              <Link
                href="/demo"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-semibold shadow-lg hover:from-fuchsia-600 hover:to-violet-700 transition-colors text-lg mt-6"
              >
                Tester notre technologie
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
                        <h3 className="font-bold text-lg mb-1">Reconnaissance d'image avancée</h3>
                        <p className="text-white/90 text-sm">Notre IA identifie précisément les sujets, expressions et contextes dans chaque photo</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-violet-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Génération artistique</h3>
                        <p className="text-white/90 text-sm">Transformation complète qui va au-delà des simples filtres pour créer un véritable effet artistique</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 text-violet-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Adaptation intelligente</h3>
                        <p className="text-white/90 text-sm">Chaque style s'adapte intelligemment au type de photo et au contexte de l'événement</p>
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
            <h2 className="text-3xl font-bold mb-4">Plus de 300 styles artistiques disponibles</h2>
            <p className="text-lg text-gray-700 mb-8">
              Notre technologie IA propose une bibliothèque de styles en constante expansion. Découvrez quelques exemples ci-dessous.
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
                    alt={`Style ${style.name}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4">
                      <div className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full inline-block mb-2">
                        Filtre réalisé avec IA
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
              href="/contact"
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
            <h2 className="text-3xl font-bold mb-4">Comment fonctionne notre IA ?</h2>
            <p className="text-lg text-gray-700">
              Un processus en plusieurs étapes pour des résultats exceptionnels
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Ligne de progression verticale */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-violet-100 hidden md:block"></div>
            
            {[
              {
                step: "1",
                title: "Analyse d'image",
                description: "Notre IA analyse l'image pour identifier les sujets, le contexte, l'éclairage et les éléments clés."
              },
              {
                step: "2",
                title: "Application du style",
                description: "Le système sélectionne et adapte le style artistique choisi en tenant compte des caractéristiques uniques de l'image."
              },
              {
                step: "3",
                title: "Transformation intelligente",
                description: "L'IA applique une transformation profonde qui va bien au-delà d'un simple filtre, en préservant l'essence du sujet."
              },
              {
                step: "4",
                title: "Optimisation finale",
                description: "Une phase d'affinage améliore les détails, ajuste les couleurs et perfectionne le rendu artistique final."
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer vos photos avec notre IA ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Offrez à vos invités une expérience photo unique qu'ils n'oublieront jamais.
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
