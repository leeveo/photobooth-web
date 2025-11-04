'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Scissors, Palette, Sparkles, Users, Crown, Tablet, Monitor, Globe, ArrowRight, Star, Check, Zap, ChevronDown, ChevronUp, Camera, Share2, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import Script from 'next/script';

// Styles de coiffure disponibles
const hairstyles = [
  {
    name: "Bob A-Line",
    description: "Une coupe bob asymétrique moderne qui allonge le visage et apporte de la sophistication.",
    image: "/coupe-cheveux/a_line_bob_hair_style.jpg",
    category: "Classique"
  },
  {
    name: "Chignon Élégant",
    description: "Un chignon raffiné parfait pour les occasions spéciales et le quotidien chic.",
    image: "/coupe-cheveux/bun_hair_style.jpg",
    category: "Élégant"
  },
  {
    name: "Coupe Courte",
    description: "Une coupe très courte et moderne qui libère le visage et facilite l'entretien.",
    image: "/coupe-cheveux/buzz_cut_hair_style.jpg",
    category: "Moderne"
  },
  {
    name: "Cheveux Plaqués",
    description: "Un style sleek et sophistiqué pour un look professionnel et contemporain.",
    image: "/coupe-cheveux/slicked_back_hair_style.jpg",
    category: "Professionnel"
  },
  {
    name: "Queue de Cheval",
    description: "Un classique revisité avec des variations modernes pour tous les styles.",
    image: "/coupe-cheveux/tied_hair_style.jpg",
    category: "Classique"
  },
  {
    name: "Chignon Haut",
    description: "Un chignon haut tendance qui sublime la nuque et allonge la silhouette.",
    image: "/coupe-cheveux/top_bun_hair_style.jpg",
    category: "Tendance"
  },
  {
    name: "Coiffure Décoiffée",
    description: "Un look naturel et décontracté avec du mouvement et de la texture.",
    image: "/coupe-cheveux/tousled_messy_hair_style.jpg",
    category: "Décontracté"
  },
  {
    name: "Volume Naturel",
    description: "Une coiffure qui sublime le volume naturel pour un effet glamour.",
    image: "/coupe-cheveux/voluminous_hair_style.jpg",
    category: "Glamour"
  }
];

// Couleurs de cheveux disponibles
const hairColors = [
  { name: "Blond Doré", image: "/teinte/15_golden_blond_tint_hair.jpg", description: "Un blond lumineux et naturel" },
  { name: "Châtain", image: "/teinte/7_chesnut_tint_hair.jpg", description: "Une couleur chaleureuse et sophistiquée" },
  { name: "Brun Foncé", image: "/teinte/3_dark_brown_tint_hair.jpg", description: "Un brun profond et riche" },
  { name: "Rouge Cuivré", image: "/teinte/19_copper_hair_tint_hair.jpg", description: "Des reflets cuivrés lumineux" },
  { name: "Noir Ébène", image: "/teinte/1_black_haire_tint.jpg", description: "Un noir intense et brillant" },
  { name: "Rose Pastel", image: "/teinte/31_pastel_pink.jpg", description: "Une couleur fantaisie tendance" }
];

export default function PhotoboothCoiffure() {
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState('salon');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // FAQ data
  const faqData = [
    {
      question: "Comment fonctionne l'essayage virtuel de coiffures ?",
      answer: "Notre IA analyse le visage de votre client en temps réel et applique virtuellement la coupe ou couleur choisie. La technologie prend en compte la forme du visage, la texture des cheveux et l'éclairage pour un rendu ultra-réaliste."
    },
    {
      question: "Combien de styles de coiffures sont disponibles ?",
      answer: "Nous proposons plus de 200 coupes différentes (bob, pixie, dégradés, etc.) et plus de 50 teintes (naturelles, highlights, ombré, couleurs fantaisie). Notre bibliothèque s'enrichit chaque mois avec les dernières tendances."
    },
    {
      question: "La tablette est-elle facile à utiliser pour mes clients ?",
      answer: "Absolument ! L'interface est intuitive et ne nécessite aucune formation. Vos clients peuvent naviguer seuls ou avec votre aide. La prise en main se fait en quelques secondes."
    },
    {
      question: "Puis-je intégrer le widget sur mon site web existant ?",
      answer: "Oui, l'intégration est très simple. Nous vous fournissons un code à insérer sur votre site. Le widget s'adapte automatiquement à votre design et peut être personnalisé selon votre charte graphique."
    },
    {
      question: "Que se passe-t-il si la tablette tombe en panne ?",
      answer: "Avec l'option location, la maintenance est incluse. Nous vous envoyons une tablette de remplacement sous 48h. Pour l'achat, vous bénéficiez d'une garantie 2 ans et d'un support technique premium."
    },
    {
      question: "Puis-je essayer la solution avant de m'engager ?",
      answer: "Bien sûr ! Nous proposons une démonstration gratuite de 30 minutes dans votre salon. Vous pourrez tester toutes les fonctionnalités et voir comment vos clients réagissent."
    }
  ];

  // Carrousel automatique pour les styles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStyleIndex((prev) => (prev + 1) % hairstyles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Texte à gauche */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Photobooth{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  IA Coiffure
                </span>
              </h1>
              <p className="text-xl text-white mb-8">
                Permettez à vos clients de visualiser instantanément leur coupe ou coloration idéale grâce à notre technologie d’intelligence artificielle ultra‑réaliste.              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-pink-100">
                  <Scissors className="w-5 h-5 text-pink-600 mr-2" />
                  <span className="font-medium">+200 coupes disponibles</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-purple-100">
                  <Palette className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="font-medium">+50 teintes</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-indigo-100">
                  <Sparkles className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="font-medium">Résultat instantané</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold shadow-lg hover:from-pink-700 hover:to-purple-700 transition-colors text-lg"
                >
                  Contacter l'équipe
                </Link>
              </div>
            </div>
            
            {/* Carrousel à droite */}
            <div className="relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[3/4] h-[600px]">
                {/* Images du carrousel */}
                <div className="absolute inset-0 w-full h-full">
                  {hairstyles.map((style, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out
                        ${index === currentStyleIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
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
                    <div className="flex items-center mb-2">
                      <Crown className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">
                        {hairstyles[currentStyleIndex]?.category}
                      </span>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      {hairstyles[currentStyleIndex]?.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">
                      {hairstyles[currentStyleIndex]?.description}
                    </p>
                    
                    {/* Indicateurs du carrousel */}
                    <div className="flex space-x-2 mt-4">
                      {hairstyles.map((_, index) => (
                        <button 
                          key={index}
                          onClick={() => setCurrentStyleIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 
                            ${index === currentStyleIndex ? 'bg-white w-4' : 'bg-white/50'}`}
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
      <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_70%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Révolutionnez Votre{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Salon de Coiffure
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
              Notre technologie IA transforme l'expérience client et modernise votre salon avec des outils innovants 
              qui impressionnent et fidélisent votre clientèle.
            </p>

            {/* Encarts modernes flottants */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Encart 1 - Essayage Virtuel */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-purple-200/30 hover:bg-white/90 hover:shadow-xl transition-all duration-300 group shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Scissors className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Essayage Virtuel</h3>
                <p className="text-gray-600 text-sm">
                  +200 styles de coiffures et couleurs pour des simulations ultra-réalistes
                </p>
              </div>

              {/* Encart 2 - Expérience Client */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-purple-200/30 hover:bg-white/90 hover:shadow-xl transition-all duration-300 group shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Satisfaction Client</h3>
                <p className="text-gray-600 text-sm">
                  Réduisez les déceptions et augmentez la confiance de vos clients
                </p>
              </div>

              {/* Encart 3 - Modernité */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-purple-200/30 hover:bg-white/90 hover:shadow-xl transition-all duration-300 group shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Image Moderne</h3>
                <p className="text-gray-600 text-sm">
                  Démarquez-vous avec une technologie innovante qui attire les clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités Principales */}
      <section className="py-20 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Explorez Toutes les Possibilités de WaiBooth Hair</h2>
            <p className="text-xl text-gray-300">
              Découvrez notre gamme complète de fonctionnalités IA pour transformer l'expérience coiffure de vos clients
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Essayage de Coiffures */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:bg-white/15 transition-all duration-300 group border border-white/20">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/coupe-cheveux/web002.jpg"
                  alt="Essayage de Coiffures"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/20 backdrop-blur-lg rounded-lg p-3 border border-white/30">
                    <h3 className="text-lg font-bold text-white">Essayage de Coiffures</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Des ondulés aux bobs, des styles masculins aux féminins, et tout, des franges aux coupes audacieuses — 
                  tant de coiffures à choisir !
                </p>
                <div className="flex items-center text-purple-400">
                  <Scissors className="w-5 h-5 mr-2" />
                  <span className="font-semibold">+200 styles disponibles</span>
                </div>
              </div>
            </div>

            {/* Essayage de Couleurs */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:bg-white/15 transition-all duration-300 group border border-white/20">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/coupe-cheveux/web005.jpg"
                  alt="Essayage de Couleurs"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/20 backdrop-blur-lg rounded-lg p-3 border border-white/30">
                    <h3 className="text-lg font-bold text-white">Essayage de Couleurs</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Plus de 200 couleurs de cheveux à choisir. 
                  Mode photo et essayages en direct tous deux pris en charge.
                </p>
                <div className="flex items-center text-purple-400">
                  <Palette className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Mode photo & temps réel</span>
                </div>
              </div>
            </div>

            {/* IA Hair pour Entreprises */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:bg-white/15 transition-all duration-300 group border border-white/20">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/coupe-cheveux/web006.jpg"
                  alt="IA Hair pour Entreprises"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/20 backdrop-blur-lg rounded-lg p-3 border border-white/30">
                    <h3 className="text-lg font-bold text-white">IA Hair pour Entreprises</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Intégrez facilement la technologie IA de changement de cheveux dans votre site web 
                  grâce à nos outils conviviaux pour développeurs. Notre équipe est prête à vous accompagner.
                </p>
                <div className="flex items-center text-purple-400">
                  <Globe className="w-5 h-5 mr-2" />
                  <span className="font-semibold">API & intégration</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              Découvrir Nos Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Section Avantages pour les salons */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-transparent to-gray-50/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Pourquoi choisir notre photobooth coiffure ?</h2>
            <p className="text-lg text-gray-700">
              Transformez l'expérience client et augmentez votre chiffre d'affaires grâce à notre technologie d'IA générative
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-pink-600" />,
                title: "Plus de 200 coupes & 50 couleurs",
                description: "Une large bibliothèque professionnelle pour répondre à tous les styles et morphologies."
              },
              {
                icon: <Crown className="w-8 h-8 text-indigo-600" />,
                title: "Résultats ultra‑réalistes en temps réel",
                description: "Textures, volumes et reflets fidèlement reproduits pour offrir un aperçu fidèle de la transformation"
              },
              {
                icon: <Zap className="w-8 h-8 text-purple-600" />,
                title: "Consultation express et interactive",
                description: "Réduisez le temps de consultation jusqu'à 40 % en faisant défiler instantanément les options coiffure avec vos clients."
              },
              {
                icon: <Star className="w-8 h-8 text-green-600" />,
                title: "Satisfaction client accrue",
                description: "Grâce à la visualisation avant coupe, diminuez les déceptions jusqu'à 85 % et augmentez la confiance dans les choix coiffure."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-purple-600" />,
                title: "Expérience premium & différenciante",
                description: "Proposez une prestation high-tech qui vous distingue de vos concurrents et attire une clientèle plus jeune et connectée."
              },
              {
                icon: <Monitor className="w-8 h-8 text-indigo-600" />,
                title: "Disponible sur tous supports",
                description: "Tablette en salon, widget sur votre site web ou application mobile pour vos clients — WiBooth Hair s'adapte à votre environnement."
              }
            ].map((advantage, index) => (
              <div key={index} className="bg-white backdrop-blur-xl p-6 text-center hover:bg-gray-50 hover:shadow-xl transition-all duration-300 rounded-2xl border border-gray-200 shadow-lg">
                <div className="flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{advantage.title}</h3>
                <p className="text-gray-700">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Processus en 5 étapes */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Processus coiffure IA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-300">
              Un workflow révolutionnaire en 5 étapes pour découvrir votre coiffure idéale
            </p>
          </div>

          {/* Timeline avec grandes images */}
          <div className="relative max-w-7xl mx-auto">
            {/* Ligne de timeline verticale pour mobile, horizontale pour desktop */}
            <div className="absolute top-0 left-8 md:left-0 md:top-1/2 w-1 md:w-full md:h-1 h-full md:h-auto bg-gradient-to-b md:bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 md:transform md:-translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {[
                {
                  step: "01",
                  title: "Prenez une photo",
                  description: "Activez votre caméra et capturez votre visage",
                  color: "from-purple-500 to-pink-500",
                  icon: <Camera className="w-8 h-8" />
                },
                {
                  step: "02", 
                  title: "Choisissez une coupe",
                  description: "Parcourez plus de 200 styles de coiffures",
                  color: "from-blue-500 to-purple-500",
                  icon: <Scissors className="w-8 h-8" />
                },
                {
                  step: "03",
                  title: "IA Coiffure en action",
                  description: "Notre IA applique la coupe instantanément",
                  color: "from-green-500 to-blue-500",
                  icon: <Sparkles className="w-8 h-8" />
                },
                {
                  step: "04",
                  title: "Votre nouveau look",
                  description: "Admirez votre transformation virtuelle",
                  color: "from-orange-500 to-red-500",
                  icon: <Crown className="w-8 h-8" />
                },
                {
                  step: "05",
                  title: "Partagez & Réservez",
                  description: "Sauvegardez et prenez rendez-vous",
                  color: "from-pink-500 to-purple-500",
                  icon: <Share2 className="w-8 h-8" />
                }
              ].map((step, index) => (
                <div key={index} className="relative group">
                  
                  {/* Card avec icône agrandie au centre */}
                  <div className="md:mt-12 group-hover:transform group-hover:-translate-y-2 transition-all duration-500">
                    {/* Icône principale - beaucoup plus grande et centrée */}
                    <div className="relative mb-6 mx-auto w-32 h-32 md:w-40 md:h-40">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 group-hover:scale-105`}></div>
                      <div className="relative h-full flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Contenu textuel moderne */}
                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed px-2">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA section moderne */}
          <div className="text-center mt-20">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-100 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Scissors className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Simple, Rapide, <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Révolutionnaire !</span>
                </h3>
                <p className="text-xl text-gray-700 mb-8">
                  En moins de <span className="text-purple-600 font-bold">30 secondes</span>, découvrez votre coiffure idéale grâce à notre IA coiffure avancée.
                </p>
                <a
                  href="https://photobooth.waibooth.app/photobooth-ia/admin/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg group"
                >
                  <span>Essayer maintenant</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Technologie IA Générative */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100/20 via-transparent to-blue-100/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Technologie d'IA Générative Avancée
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Notre plateforme utilise l'intelligence artificielle générative de pointe pour créer des simulations de coiffures 
                ultra-réalistes qui prennent en compte la morphologie unique de chaque visage.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white/80 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-purple-200/30 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">Reconnaissance Faciale 3D</h3>
                      <p className="text-gray-600">
                        Notre IA analyse en temps réel la morphologie du visage, la texture des cheveux, 
                        et adapte automatiquement chaque coiffure pour un rendu naturel et personnalisé.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-purple-200/30 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-lg">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">Rendu Instantané</h3>
                      <p className="text-gray-600">
                        Visualisation en temps réel sans latence. Changez de coiffure d'un simple clic 
                        et voyez immédiatement le résultat avec un réalisme photographique.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-purple-200/30 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-lg">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">Simulation Couleur Avancée</h3>
                      <p className="text-gray-600">
                        Testez des milliers de nuances et techniques de coloration (balayage, ombré, mèches) 
                        avec un aperçu fidèle des reflets et de la profondeur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-r from-pink-400 to-purple-600 p-8 rounded-2xl text-white border border-white/20 shadow-2xl backdrop-blur-xl">
                  <h3 className="text-2xl font-bold mb-4">Performances de notre IA</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Précision de simulation</span>
                      <span className="font-bold">98.5%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{width: '98.5%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>Temps de traitement</span>
                      <span className="font-bold">&lt; 0.5s</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>Satisfaction client</span>
                      <span className="font-bold">97.2%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{width: '97.2%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Cas d'Usage Détaillés */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Applications Professionnelles</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Découvrez comment notre photobooth révolutionne l'expérience coiffure dans différents contextes professionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Consultation Client",
                icon: <Users className="w-8 h-8 text-blue-600" />,
                description: "Transformez vos consultations avec des visualisations instantanées",
                features: [
                  "Analyse morphologique automatique",
                  "Recommandations personnalisées",
                  "Comparaison avant/après",
                  "Export des résultats"
                ]
              },
              {
                title: "Formation d'Équipe",
                icon: <Star className="w-8 h-8 text-green-600" />,
                description: "Formez vos coiffeurs aux nouvelles tendances",
                features: [
                  "Bibliothèque de techniques",
                  "Modules d'apprentissage",
                  "Évaluation des compétences",
                  "Suivi des progrès"
                ]
              },
              {
                title: "Marketing Digital",
                icon: <Globe className="w-8 h-8 text-purple-600" />,
                description: "Attirez de nouveaux clients via votre site web",
                features: [
                  "Widget personnalisable",
                  "Intégration simple",
                  "Analytics détaillées",
                  "Lead generation"
                ]
              },
              {
                title: "Événements & Salons",
                icon: <Crown className="w-8 h-8 text-pink-600" />,
                description: "Créez l'attraction lors d'événements",
                features: [
                  "Mode événementiel",
                  "Partage sur réseaux sociaux",
                  "Impression instantanée",
                  "Branding personnalisé"
                ]
              },
              {
                title: "Vente de Produits",
                icon: <Monitor className="w-8 h-8 text-indigo-600" />,
                description: "Augmentez vos ventes de produits capillaires",
                features: [
                  "Simulation avec produits",
                  "Recommandations ciblées",
                  "Panier d'achat intégré",
                  "Suivi des conversions"
                ]
              },
              {
                title: "Fidélisation Client",
                icon: <Sparkles className="w-8 h-8 text-orange-600" />,
                description: "Créez une expérience mémorable et différenciante",
                features: [
                  "Historique des essayages",
                  "Profils clients sauvegardés",
                  "Rappels de rendez-vous",
                  "Programme de fidélité"
                ]
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-gradient-to-r group-hover:from-pink-100 group-hover:to-purple-100 transition-all duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold ml-4">{useCase.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section ROI et Bénéfices Mesurables */}
      

      {/* Section Fonctionnalités Avancées */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Fonctionnalités Professionnelles Avancées</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Une suite complète d'outils conçus spécifiquement pour les professionnels de la coiffure
            </p>
          </div>

          <div className="space-y-16">
            
            {/* Simulation Couleur Avancée */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h3 className="text-3xl font-bold mb-6">Simulation Couleur Professionnelle</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-2 rounded-lg mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Techniques de coloration avancées</h4>
                      <p className="text-gray-600">Balayage, ombré, mèches, coloration totale... Visualisez toutes les techniques avec un réalisme saisissant.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-2 rounded-lg mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Simulation des reflets et brillance</h4>
                      <p className="text-gray-600">Rendu ultra-réaliste des reflets selon l'éclairage, pour un aperçu fidèle du résultat final.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-2 rounded-lg mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Palette de couleurs professionnelle</h4>
                      <p className="text-gray-600">Plus de 200 teintes référencées selon les standards professionnels des grandes marques.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 relative">
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-2xl">
                  <h4 className="text-center font-bold mb-6">Techniques Disponibles</h4>
                  <div className="space-y-3">
                    {['Coloration Complète', 'Balayage Naturel', 'Ombré Dégradé', 'Mèches Fines', 'Tie & Dye', 'Reflets Subtils'].map((technique, index) => (
                      <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg">
                        <span className="font-medium">{technique}</span>
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Intégration et Personnalisation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Intégration et Personnalisation</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-blue-600 p-2 rounded-lg mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Branding personnalisé</h4>
                      <p className="text-gray-600">Adaptez l'interface aux couleurs et au style de votre salon pour une expérience cohérente.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-blue-600 p-2 rounded-lg mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Analytics et reporting</h4>
                      <p className="text-gray-600">Tableaux de bord détaillés pour suivre l'utilisation, les préférences clients et optimiser votre offre.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-bold mb-4 text-center">Dashboard Analytics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Utilisations aujourd'hui</span>
                        <span className="font-bold text-green-600">47</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Coiffures populaires</span>
                        <span className="font-bold text-blue-600">Bob, Pixie</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Temps moyen session</span>
                        <span className="font-bold text-purple-600">4min 32s</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Taux de conversion</span>
                        <span className="font-bold text-pink-600">78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Solution Tablette Tactile */}
      <section className="py-20 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contenu texte à gauche */}
              <div>
                <div className="mb-6">
                  <div className="inline-block bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full mb-4 border border-white/30">
                    <span className="text-purple-300 font-semibold text-sm">💡 Solution Professionnelle</span>
                  </div>
                  <h2 className="text-4xl font-bold mb-6 text-white">
                    Tablette Tactile Interactive pour Votre Salon
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Offrez à vos clients une expérience unique avec notre tablette tactile dédiée. 
                    Ils peuvent tester et choisir leur coupe de cheveux en temps réel, directement dans votre salon.
                  </p>
                </div>

                {/* Avantages de la solution */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">Consultation Interactive</h4>
                      <p className="text-gray-300">Vos clients visualisent instantanément le résultat avant la coupe, réduisant les déceptions et augmentant leur satisfaction.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-lg mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">Gain de Temps Professionnel</h4>
                      <p className="text-gray-300">Réduisez le temps de consultation jusqu'à 40% et optimisez votre planning avec des choix de coiffure plus rapides.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-2 rounded-lg mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">Image Moderne du Salon</h4>
                      <p className="text-gray-300">Démarquez-vous de la concurrence avec une technologie innovante qui attire une clientèle jeune et connectée.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-lg mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">Chiffre d'Affaires Optimisé</h4>
                      <p className="text-gray-300">Augmentez vos ventes grâce à des clients plus confiants dans leurs choix et satisfaits du résultat final.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-2 rounded-lg mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">Installation et Support Inclus</h4>
                      <p className="text-gray-600">Mise en place rapide, formation de votre équipe et support technique premium pour une utilisation optimale.</p>
                    </div>
                  </div>
                </div>

                {/* Options de tarification */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Solutions Flexibles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Tablet className="w-5 h-5 text-purple-600 mr-2" />
                        <span className="font-semibold text-purple-800">Location</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-600 mb-1">9,90€</div>
                      <div className="text-sm text-purple-700">par mois</div>
                      <div className="text-xs text-purple-600 mt-1">Maintenance incluse</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Crown className="w-5 h-5 text-green-600 mr-2" />
                        <span className="font-semibold text-green-800">Achat</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600 mb-1">149€</div>
                      <div className="text-sm text-green-700">+ 49€/mois logiciel</div>
                      <div className="text-xs text-green-600 mt-1">Garantie 2 ans</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/demo"
                    className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:from-purple-700 hover:to-pink-700 transition-colors text-center"
                  >
                    Demander une démo gratuite
                  </Link>
                  <Link
                    href="#demo"
                    className="inline-block px-8 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-semibold shadow-lg hover:bg-purple-50 transition-colors text-center"
                  >
                    Tester la technologie
                  </Link>
                </div>
              </div>

              {/* Image à droite avec badge prix */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/coupe-cheveux/web006.jpg"
                    alt="Tablette tactile interactive dans salon de coiffure"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                  
                  {/* Badge prix en overlay */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-xl">
                      <div className="flex items-center space-x-2">
                        <Tablet className="w-5 h-5" />
                        <div className="text-center">
                          <div className="text-sm font-medium">À partir de</div>
                          <div className="text-xl font-bold">9,90€/mois</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Badge "Nouveau" */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg">
                      <div className="flex items-center space-x-1">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-semibold">Nouveauté</span>
                      </div>
                    </div>
                  </div>

                  {/* Overlay avec infos techniques */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="text-white">
                      <h4 className="text-lg font-bold mb-2">Tablette Professionnelle Incluse</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="opacity-80">Écran :</span> 12" HD Tactile
                        </div>
                        <div>
                          <span className="opacity-80">Support :</span> Ajustable & Sécurisé
                        </div>
                        <div>
                          <span className="opacity-80">Connexion :</span> WiFi + 4G
                        </div>
                        <div>
                          <span className="opacity-80">Garantie :</span> 2 ans
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistiques en bas */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-white rounded-lg p-4 shadow-md text-center">
                    <div className="text-2xl font-bold text-purple-600">500+</div>
                    <div className="text-xs text-gray-600">Salons équipés</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md text-center">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-xs text-gray-600">Satisfaction client</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md text-center">
                    <div className="text-2xl font-bold text-blue-600">40%</div>
                    <div className="text-xs text-gray-600">Temps gagné</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Styles Populaires */}
      <section className="py-20 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Explorez les Styles Populaires avec notre Changeur de Coiffure IA</h2>
            <p className="text-xl text-gray-300">
              Découvrez notre sélection de coiffures tendance et visualisez instantanément le résultat sur votre visage grâce à notre technologie d'intelligence artificielle avancée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Bob A-Line */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:bg-white/15 transition-all duration-300 group border border-white/20">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/coupe-cheveux/a_line_bob_hair_style.jpg"
                  alt="Bob A-Line"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Bob A-Line</h3>
                <p className="text-gray-300 text-sm">
                  Une coupe bob asymétrique moderne qui allonge le visage et apporte sophistication
                </p>
              </div>
            </div>

            {/* Chignon Élégant */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/coupe-cheveux/bun_hair_style.jpg"
                  alt="Chignon Élégant"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Chignon Élégant</h3>
                <p className="text-gray-600 text-sm">
                  Un chignon raffiné parfait pour les occasions spéciales et le quotidien chic
                </p>
              </div>
            </div>

            {/* Coiffure Décoiffée */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/coupe-cheveux/tousled_messy_hair_style.jpg"
                  alt="Coiffure Décoiffée"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Coiffure Décoiffée</h3>
                <p className="text-gray-600 text-sm">
                  Un look naturel et décontracté avec du mouvement et de la texture
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              <strong>+497 autres styles disponibles</strong> dans notre photobooth IA
            </p>
            <a
              href="https://photobooth.waibooth.app/photobooth-ia/admin/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              Essayer maintenant
            </a>
          </div>
        </div>
      </section>

      {/* Section Comment l'IA Coiffure Bénéficie aux Secteurs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Comment les Coiffures IA Bénéficient aux Principales Industries ?</h2>
            <p className="text-xl text-gray-700">
              Notre technologie d'intelligence artificielle révolutionne l'expérience client dans de nombreux secteurs d'activité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Salons & Barbiers */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Salons de Coiffure & Barbiers</h3>
              <p className="text-gray-600">
                Essayez virtuellement les coiffures, coupes et couleurs avant la transformation
              </p>
            </div>

            {/* Marques de Soins Capillaires */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-indigo-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Marques de Soins & Colorations</h3>
              <p className="text-gray-600">
                Shampoings, après-shampoings et colorations peuvent montrer leur rendu en situation réelle
              </p>
            </div>

            {/* Perruques & Extensions */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Perruques, Extensions & Détaillants</h3>
              <p className="text-gray-600">
                Présentez différents styles, longueurs et couleurs de manière interactive
              </p>
            </div>

            {/* E-commerce */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Commerce & Détaillants en Ligne</h3>
              <p className="text-gray-600">
                Intégrez l'IA coiffure pour enrichir vos pages produits et conversions
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="#contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              Obtenir l'IA pour Mon Entreprise
            </Link>
          </div>
        </div>
      </section>

      {/* Section Look Parfait */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">
                  Obtenez le Look Parfait avec le Meilleur Site de Coiffure Virtuelle
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Élevez votre entreprise et captivez vos clients avec la solution d'essayage de coiffures leader de l'industrie. 
                  Ce filtre de coupe IA est conçu pour s'intégrer parfaitement dans le site e-commerce des marques, 
                  les bornes en magasin ou les campagnes marketing digitales, offrant une expérience utilisateur transformatrice 
                  qui génère des résultats mesurables.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Intégration e-commerce transparente</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Bornes interactives en magasin</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Campagnes marketing digitales</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Résultats mesurables et analytics</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-colors"
                >
                  Découvrir nos Solutions
                </Link>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-4 text-center">
                      <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800">98.5%</div>
                      <div className="text-sm text-gray-600">Précision IA</div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl p-4 text-center">
                      <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800">+500K</div>
                      <div className="text-sm text-gray-600">Utilisateurs</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-4 text-center">
                      <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800">4.9/5</div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-4 text-center">
                      <Monitor className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800">&lt;0.5s</div>
                      <div className="text-sm text-gray-600">Temps de rendu</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-800">Technologie Leader du Marché</p>
                    <p className="text-sm text-gray-600">Faites confiance à l'expertise WaiBooth Hair</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Démonstration */}
      <section id="demo" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Découvrez notre technologie en action</h2>
            <p className="text-lg text-gray-700 mb-8">
              Testez immédiatement notre photobooth coiffure avec intelligence artificielle
            </p>
          </div>

          {/* Photobooth Button optimisé */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-6 rounded-xl text-white mb-6">
                  <h3 className="text-xl font-bold mb-2">Photobooth Coiffure IA - Démo Interactive</h3>
                  <p className="opacity-90">Essayez différentes coiffures et couleurs en temps réel</p>
                </div>
                
                {/* Bouton Photobooth - Nouvelle fenêtre */}
                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                  <button 
                    id="photobooth-btn"
                    onClick={() => {
                      // Calcul de la taille optimale pour la fenêtre
                      const screenWidth = window.screen.width;
                      const screenHeight = window.screen.height;
                      
                      // Dimensions de la fenêtre (80% de l'écran)
                      const windowWidth = Math.min(1200, screenWidth * 0.8);
                      const windowHeight = Math.min(800, screenHeight * 0.8);
                      
                      // Position centrée
                      const left = (screenWidth - windowWidth) / 2;
                      const top = (screenHeight - windowHeight) / 2;
                      
                      // Options de la fenêtre
                      const windowFeatures = [
                        `width=${windowWidth}`,
                        `height=${windowHeight}`,
                        `left=${left}`,
                        `top=${top}`,
                        'resizable=yes',
                        'scrollbars=yes',
                        'status=no',
                        'menubar=no',
                        'toolbar=no',
                        'location=no'
                      ].join(',');
                      
                      // Ouverture de la fenêtre
                      const photoboothWindow = window.open(
                        'https://photobooth.waibooth.app/photobooth-ia/admin/login',
                        'photobooth',
                        windowFeatures
                      );
                      
                      // Focus sur la nouvelle fenêtre
                      if (photoboothWindow) {
                        photoboothWindow.focus();
                      } else {
                        // Fallback si le popup est bloqué
                        alert('Les popups sont bloqués. Veuillez autoriser les popups pour ce site et réessayer.');
                      }
                    }}
                    style={{
                      background: 'linear-gradient(135deg, #7f5af0 0%, #ff80b5 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '15px 30px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(127, 90, 240, 0.3)',
                      transition: 'all 0.3s ease',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(127, 90, 240, 0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(127, 90, 240, 0.3)';
                    }}
                  >
                     Ouvrir le Photobooth
                  </button>
                </div>
                
                <div className="mt-6 text-sm text-gray-600">
                  <p className="mb-2">
                    <strong>🎯 Accès optimal à la caméra :</strong> Le photobooth s'ouvre dans une nouvelle fenêtre pour garantir un accès complet à votre caméra
                  </p>
                  <p>
                    <strong>💡 Astuce :</strong> Autorisez l'accès à la caméra lorsque votre navigateur vous le demande
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Sparkles className="w-4 h-4 text-pink-600" />
                    <span>+500 coiffures</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Palette className="w-4 h-4 text-purple-600" />
                    <span>+200 couleurs</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="w-4 h-4 text-indigo-600" />
                    <span>Temps réel</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Crown className="w-4 h-4 text-pink-600" />
                    <span>IA générative</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Impressionné par la technologie ? Découvrez comment l'intégrer dans votre salon
              </p>
              <Link
                href="/demo"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold shadow-lg hover:from-pink-700 hover:to-purple-700 transition-colors"
              >
                Demander une démonstration personnalisée
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Palettes de couleurs complète */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Palettes de Couleurs Infinies</h2>
            <p className="text-lg text-gray-700 mb-8">
              Des teintes naturelles aux couleurs les plus audacieuses, explorez toutes les possibilités
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-12 max-w-6xl mx-auto">
            {[
              { name: "Noir", image: "/teinte/1_black_haire_tint.jpg" },
              { name: "Brun très foncé", image: "/teinte/2_very_dark_brown_tint_hair.jpg" },
              { name: "Brun foncé", image: "/teinte/3_dark_brown_tint_hair.jpg" },
              { name: "Brun", image: "/teinte/4_brown_tint_hair.jpg" },
              { name: "Brun clair", image: "/teinte/5_light_brown_tint_hair.jpg" },
              { name: "Châtain foncé", image: "/teinte/6_dark_chesnut_tint_hair.jpg" },
              { name: "Châtain", image: "/teinte/7_chesnut_tint_hair.jpg" },
              { name: "Châtain clair", image: "/teinte/8_light_chesnut_tint_hair.jpg" },
              { name: "Blond foncé", image: "/teinte/9_dark_blond_tint_hair.jpg" },
              { name: "Blond", image: "/teinte/10_blond_tint_hair.jpg" },
              { name: "Blond clair", image: "/teinte/11_light_blond_tint_hair.jpg" },
              { name: "Blond très clair", image: "/teinte/12_very_light_blond_tint_hair.jpg" },
              { name: "Blond platine", image: "/teinte/13_platinum_blond_tint_hair.jpg" },
              { name: "Blond cendré", image: "/teinte/14_ash_blond_tint_hair.jpg" },
              { name: "Blond doré", image: "/teinte/15_golden_blond_tint_hair.jpg" },
              { name: "Blond fraise", image: "/teinte/16_strawberry_blond_tint_hair.jpg" },
              { name: "Roux fraise", image: "/teinte/17_strawberry_tint_hair.jpg" },
              { name: "Roux", image: "/teinte/18_redhead_hair_tint_hair.jpg" },
              { name: "Cuivré", image: "/teinte/19_copper_hair_tint_hair.jpg" },
              { name: "Gris", image: "/teinte/20_grey_hair_tint_hair.jpg" },
              { name: "Poivre et sel", image: "/teinte/21_salt_and_pepper_tint_hair.jpg" },
              { name: "Blanc", image: "/teinte/22_white_tint_hair.jpg" },
              { name: "Mèches blondes", image: "/teinte/23_blonde_highlights_tint_hair.jpg" },
              { name: "Mèches caramel", image: "/teinte/24_caramel_highlights_tint_hair.jpg" },
              { name: "Mèches cuivrées", image: "/teinte/25_copper_highlights_tint_hair.jpg" },
              { name: "Mèches rousses", image: "/teinte/26_red_highlights_tint_hair.jpg" },
              { name: "Tie & Dye", image: "/teinte/27_dip_dye_tie_and_dye_tint_hair.jpg" },
              { name: "Bleu", image: "/teinte/28_blue.jpg" },
              { name: "Vert", image: "/teinte/29_green.jpg" },
              { name: "Rose", image: "/teinte/30_pink.jpg" },
              { name: "Rose pastel", image: "/teinte/31_pastel_pink.jpg" },
              { name: "Violet", image: "/teinte/32_violet.jpg" },
            ].map((color, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="relative w-16 h-16 rounded-full mx-auto mb-2 overflow-hidden border-4 border-white shadow-lg group-hover:scale-110 transition-transform">
                  <Image
                    src={color.image}
                    alt={color.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors">{color.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
              <Palette className="w-6 h-6 text-pink-600 mr-3" />
              <div className="text-left">
                <p className="text-lg font-semibold text-gray-900">+200 couleurs disponibles</p>
                <p className="text-sm text-gray-600">Naturelles, fantaisie, highlights et tie & dye</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Grille Tarifaire */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nos Offres Tarifaires</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choisissez l'offre qui correspond à vos besoins avec nos formules mensuelles flexibles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Offre Start */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-4 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Start</h3>
                <p className="text-gray-600">Idéal pour une expérience photo ludique lors d'événements et de fêtes du quotidien.</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>100 photos / mois</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Génération IA illimitée</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Support standard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Accès web uniquement</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">19€</div>
                  <div className="text-sm text-gray-600">par mois</div>
                  <div className="text-xs text-gray-500 mt-1">100 photos incluses</div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-blue-700 transition-all duration-300">
                Choisir
              </button>
            </div>

            {/* Offre Essentiel - Populaire */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-purple-200">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Essentiel</h3>
                <p className="text-gray-600">Parfait pour les événements réguliers et les petites entreprises.</p>
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mt-2 inline-block">
                  Populaire
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>400 photos / mois</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Toutes les fonctionnalités Start</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Support prioritaire</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>API dédiée</span>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">49€</div>
                  <div className="text-sm text-gray-600">par mois</div>
                  <div className="text-xs text-gray-500 mt-1">400 photos incluses</div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300">
                Choisir
              </button>
            </div>

            {/* Offre Pro */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-4 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="text-gray-600">Conçu pour les professionnels souhaitant automatiser et personnaliser leurs animations photo.</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>1000 photos / mois</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Toutes les fonctionnalités Essentiel</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Personnalisation avancée</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Gestion multi-utilisateurs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>SLA 99.9%</span>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">89€</div>
                  <div className="text-sm text-gray-600">par mois</div>
                  <div className="text-xs text-gray-500 mt-1">1000 photos incluses</div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300">
                Choisir
              </button>
            </div>

            {/* Offre Premium */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-gray-600">Solution premium pour les entreprises exigeantes avec besoins avancés et support dédié.</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>1500 photos / mois</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Toutes les fonctionnalités Pro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Support 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Intégrations avancées</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Accès prioritaire aux nouvelles fonctionnalités</span>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">119€</div>
                  <div className="text-sm text-gray-600">par mois</div>
                  <div className="text-xs text-gray-500 mt-1">1500 photos incluses</div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                Choisir
              </button>
            </div>
          </div>

          {/* Section Packs Additionnels */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Packs Photos Additionnels</h3>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Besoin de plus de photos ? Ajoutez des packs à votre quota actuel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Pack +100 Photos */}
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 mb-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">+100</div>
                    <div className="text-sm text-blue-500 uppercase tracking-wider">Photos</div>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-800">Pack Starter</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Perfect pour augmenter ponctuellement votre quota mensuel</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Photos additionnelles</span>
                    <span className="text-sm font-bold text-blue-600">+100</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Validité</span>
                    <span className="text-sm font-bold text-gray-800">Ajouté immédiatement</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-700 mb-1">9.9€</div>
                    <div className="text-sm text-blue-600 font-medium">paiement unique</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Ajouter au panier
                </button>
              </div>

              {/* Pack +500 Photos - Populaire */}
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105 border-2 border-green-200 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Le plus populaire
                  </div>
                </div>
                
                <div className="text-center mb-6 pt-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 mb-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">+500</div>
                    <div className="text-sm text-green-500 uppercase tracking-wider">Photos</div>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-800">Pack Business</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Idéal pour les périodes de forte activité et les événements</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Photos additionnelles</span>
                    <span className="text-sm font-bold text-green-600">+500</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Économie vs 5x Pack +100</span>
                    <span className="text-sm font-bold text-green-600">-10€</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-2xl p-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-700 mb-1">39.9€</div>
                    <div className="text-sm text-green-600 font-medium">paiement unique</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Ajouter au panier
                </button>
              </div>

              {/* Pack +1000 Photos */}
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 mb-6">
                    <div className="text-3xl font-bold text-purple-600 mb-2">+1000</div>
                    <div className="text-sm text-purple-500 uppercase tracking-wider">Photos</div>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-800">Pack Premium</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Pour les professionnels avec de gros volumes de production</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Photos additionnelles</span>
                    <span className="text-sm font-bold text-purple-600">+1000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Économie vs 10x Pack +100</span>
                    <span className="text-sm font-bold text-purple-600">-19€</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-700 mb-1">79.9€</div>
                    <div className="text-sm text-purple-600 font-medium">paiement unique</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>

          {/* Explication du système de photos */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-center mb-8">Comment fonctionnent les photos ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">📸</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Quota mensuel de photos</h4>
                <p className="text-gray-600">
                  Chaque formule inclut un nombre défini de photos générées par mois :
                  <br />• <strong>Start :</strong> 100 photos/mois
                  <br />• <strong>Essentiel :</strong> 400 photos/mois
                  <br />• <strong>Pro :</strong> 1000 photos/mois
                  <br />• <strong>Premium :</strong> 1500 photos/mois
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">📊</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Suivi en temps réel</h4>
                <p className="text-gray-600">
                  Suivez votre consommation de photos en temps réel avec notre dashboard. 
                  Chaque photo générée avec l'IA compte dans votre quota mensuel.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🔄</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Renouvellement automatique</h4>
                <p className="text-gray-600">
                  Votre quota se renouvelle automatiquement chaque mois à la date d'anniversaire de votre abonnement. 
                  Photos non utilisées perdues en fin de mois.
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <div className="text-center">
                <h4 className="text-lg font-bold mb-2">💡 Besoin de plus de photos ?</h4>
                <p className="text-gray-700 mb-4">
                  Vous pouvez acheter des packs de photos supplémentaires à tout moment ou passer à une formule supérieure. 
                  Les packs s'ajoutent à votre quota actuel.
                </p>
                <div className="flex justify-center space-x-4 text-sm">
                  <span className="bg-white px-3 py-1 rounded-full">
                    <strong>Pack +100 photos :</strong> 9.9€
                  </span>
                  <span className="bg-white px-3 py-1 rounded-full">
                    <strong>Pack +500 photos :</strong> 39.9€
                  </span>
                  <span className="bg-white px-3 py-1 rounded-full">
                    <strong>Pack +1000 photos :</strong> 79.9€
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tableau comparatif des offres */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-center mb-8">Tableau Comparatif des Offres</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-bold text-gray-800">Fonctionnalités</th>
                    <th className="text-center py-4 px-4 font-bold text-blue-600">
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-blue-800">Start</span>
                        <span className="text-sm text-blue-600">19€/mois</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-purple-600">
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-purple-800">Essentiel</span>
                        <span className="text-sm text-purple-600">49€/mois</span>
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full mt-1">Populaire</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-indigo-600">
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-indigo-800">Pro</span>
                        <span className="text-sm text-indigo-600">89€/mois</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-orange-600">
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-orange-800">Premium</span>
                        <span className="text-sm text-orange-600">119€/mois</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { 
                      feature: "Photos mensuelles incluses", 
                      freemium: "100 photos", 
                      essentiel: "400 photos", 
                      pro: "1000 photos", 
                      premium: "1500 photos" 
                    },
                    { 
                      feature: "Essayage virtuel coiffures", 
                      freemium: true, 
                      essentiel: true, 
                      pro: true, 
                      premium: true 
                    },
                    { 
                      feature: "Simulation couleurs", 
                      freemium: "Limitée", 
                      essentiel: true, 
                      pro: true, 
                      premium: true 
                    },
                    { 
                      feature: "Résolution d'image", 
                      freemium: "Standard", 
                      essentiel: "HD", 
                      pro: "HD+", 
                      premium: "Ultra HD" 
                    },
                    { 
                      feature: "Bibliothèque de coiffures", 
                      freemium: "Basique (50)", 
                      essentiel: "Complète (500+)", 
                      pro: "Complète (500+)", 
                      premium: "Complète (500+)" 
                    },
                    { 
                      feature: "Support client", 
                      freemium: "Communautaire", 
                      essentiel: "Email", 
                      pro: "Prioritaire", 
                      premium: "Dédié 24/7" 
                    },
                    { 
                      feature: "Branding personnalisé", 
                      freemium: false, 
                      essentiel: false, 
                      pro: true, 
                      premium: true 
                    },
                    { 
                      feature: "Analytics et rapports", 
                      freemium: false, 
                      essentiel: "Basiques", 
                      pro: "Avancées", 
                      premium: "Complètes" 
                    },
                    { 
                      feature: "API d'intégration", 
                      freemium: false, 
                      essentiel: false, 
                      pro: "Standard", 
                      premium: "Personnalisée" 
                    },
                    { 
                      feature: "Formation équipe", 
                      freemium: false, 
                      essentiel: false, 
                      pro: "En ligne", 
                      premium: "Sur site incluse" 
                    },
                    { 
                      feature: "Sauvegarde cloud", 
                      freemium: "7 jours", 
                      essentiel: "30 jours", 
                      pro: "90 jours", 
                      premium: "Illimitée" 
                    },
                    { 
                      feature: "Export des données", 
                      freemium: false, 
                      essentiel: "CSV", 
                      pro: "CSV, PDF", 
                      premium: "Tous formats" 
                    },
                    { 
                      feature: "Accès multi-utilisateurs", 
                      freemium: "1 utilisateur", 
                      essentiel: "3 utilisateurs", 
                      pro: "10 utilisateurs", 
                      premium: "Illimité" 
                    },
                    { 
                      feature: "Watermark sur photos", 
                      freemium: true, 
                      essentiel: true, 
                      pro: false, 
                      premium: false 
                    },
                    { 
                      feature: "Crédits supplémentaires", 
                      freemium: "0.25€/crédit", 
                      essentiel: "0.20€/crédit", 
                      pro: "0.15€/crédit", 
                      premium: "0.10€/crédit" 
                    }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-gray-800">{row.feature}</td>
                      
                      {/* Start */}
                      <td className="py-4 px-4 text-center">
                        {typeof row.freemium === 'boolean' ? (
                          row.freemium ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-300 text-lg">—</span>
                          )
                        ) : (
                          <span className="text-blue-700 text-sm font-medium">{row.freemium}</span>
                        )}
                      </td>
                      
                      {/* Essentiel */}
                      <td className="py-4 px-4 text-center bg-purple-50">
                        {typeof row.essentiel === 'boolean' ? (
                          row.essentiel ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-300 text-lg">—</span>
                          )
                        ) : (
                          <span className="text-purple-700 text-sm font-medium">{row.essentiel}</span>
                        )}
                      </td>
                      
                      {/* Pro */}
                      <td className="py-4 px-4 text-center">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-300 text-lg">—</span>
                          )
                        ) : (
                          <span className="text-indigo-700 text-sm font-medium">{row.pro}</span>
                        )}
                      </td>
                      
                      {/* Premium */}
                      <td className="py-4 px-4 text-center">
                        {typeof row.premium === 'boolean' ? (
                          row.premium ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-300 text-lg">—</span>
                          )
                        ) : (
                          <span className="text-orange-700 text-sm font-medium">{row.premium}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Call to action sous le tableau */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Besoin d'aide pour choisir la meilleure offre pour votre salon ?
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="#contact"
                  className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
                >
                  Parler à un expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Widget Site Web */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Widget pour votre site web</h2>
              <p className="text-lg text-gray-700 mb-6">
                Intégrez facilement notre photobooth coiffure sur votre site web pour permettre à vos visiteurs de tester virtuellement vos services.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Intégration simple</h4>
                    <p className="text-gray-600 text-sm">Quelques lignes de code suffisent pour ajouter le widget à votre site</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Design personnalisable</h4>
                    <p className="text-gray-600 text-sm">Adaptez les couleurs et le style à votre charte graphique</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Génération de leads</h4>
                    <p className="text-gray-600 text-sm">Collectez automatiquement les contacts des utilisateurs intéressés</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Prise de rendez-vous</h4>
                    <p className="text-gray-600 text-sm">Intégration avec votre système de réservation en ligne</p>
                  </div>
                </div>
              </div>
              <Link
                href="#contact"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-colors"
              >
                Découvrir le widget
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <Globe className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Aperçu du widget</h3>
                  <p className="text-gray-600 mb-6">
                    Testez votre nouvelle coiffure en quelques clics
                  </p>
                  <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700">
                      "Découvrez votre nouveau look avant de prendre rendez-vous"
                    </p>
                  </div>
                  <a 
                    href="https://photobooth.waibooth.app/photobooth-ia/admin/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-semibold inline-block text-center hover:from-pink-700 hover:to-purple-700 transition-colors"
                  >
                    Essayer maintenant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Articles de Blog */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Articles Recommandés</h2>
              <p className="text-lg text-gray-700">
                Découvrez nos conseils d'experts pour sublimer votre style
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Article 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/coupe-cheveux/pixie003.jpg"
                    alt="Cheveux gris avec élégance"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                    Cheveux Gris : Comment Les Assumer avec Élégance
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    Découvrez comment sublimer vos cheveux gris naturels et en faire un atout beauté incontournable.
                  </p>
                  <Link
                    href="/blog/cheveux-gris-assumer-elegance"
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/coupe-cheveux/pixie004.jpg"
                    alt="Coiffures tendance pour seniors"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                    Coiffures Tendance pour Femmes Seniors
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    Les styles de coiffures modernes et élégants parfaitement adaptés aux femmes de plus de 50 ans.
                  </p>
                  <Link
                    href="/blog/coiffures-tendance-seniors"
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/coupe-cheveux/pixie001.jpg"
                    alt="Coupe pixie pour femmes seniors"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                    La Coupe Pixie : Parfaite pour les Femmes Seniors
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    Pourquoi la coupe pixie est le choix idéal pour un style moderne et facile à entretenir après 50 ans.
                  </p>
                  <Link
                    href="/blog/coupe-pixie-femmes-seniors"
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Article 4 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/coupe-cheveux/web006.jpg"
                    alt="Simulateur de coiffure gratuit"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                    Simulateur de Coiffure Gratuit : Guide d'Intégration
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    Comment intégrer facilement un simulateur de coiffure sur votre site web pour améliorer l'expérience client.
                  </p>
                  <Link
                    href="/blog/simulateur-coiffure-gratuit-integration"
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                Voir tous nos articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
              <p className="text-lg text-gray-700">
                Trouvez les réponses aux questions les plus courantes de nos partenaires coiffeurs
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-600" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Vous avez d'autres questions ? Notre équipe est là pour vous aider.
              </p>
              <Link
                href="#contact"
                className="inline-block px-6 py-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Final - Prêt à Révolutionner */}
      <section className="py-20 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 text-white text-sm font-medium mb-8">
              <Sparkles className="w-5 h-5 mr-2" />
              Transformation Garantie
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Prêt à Révolutionner{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Votre Salon ?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Rejoignez les centaines de salons qui ont déjà transformé leur activité 
              grâce à notre technologie.
            </p>

            {/* Statistiques en highlight */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80">Salons équipés</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-white/80">Satisfaction client</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">+40%</div>
                <div className="text-white/80">Chiffre d'affaires</div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 rounded-2xl bg-white text-purple-700 font-bold text-lg shadow-2xl hover:bg-gray-100 transition-all duration-300 group"
              >
                <span>Demander une démonstration</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-2xl border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-purple-700 transition-all duration-300"
              >
                <span>Contacter l'équipe</span>
              </Link>
            </div>

            {/* Note de confiance */}
            <div className="mt-8 flex justify-center items-center space-x-2 text-white/70">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Installation gratuite • Support inclus • Garantie satisfait ou remboursé</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Container pour le popup photobooth */}
      <div id="photobooth-popup-container"></div>
      
     
    </>
  );
}
