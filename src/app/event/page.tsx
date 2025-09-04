'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Camera, Users, Sparkles, TrendingUp, Clock, Star } from 'lucide-react';

// Concepts d'activation avec descriptions et images
const activationConcepts = [
  {
    id: "magazine-cover",
    title: "Couvertures de Magazine",
    description: "Transformez vos invités en stars de magazine avec des couvertures personnalisées qui reflètent l'identité de votre marque ou le thème de votre événement.",
    image: "/event/magazine-cover.jpg",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: "headshot-lounges",
    title: "Studios Photo Professionnels",
    description: "Offrez à vos participants des portraits professionnels de haute qualité dans un espace élégant, parfait pour les événements d'entreprise et les conférences.",
    image: "/event/headshot-lounge.jpg",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: "mascot-moments",
    title: "Moments avec Mascottes Personnalisées",
    description: "Créez des interactions uniques entre vos invités et des mascottes virtuelles personnalisées qui représentent votre marque ou votre événement.",
    image: "/event/mascot-moments.jpg",
    color: "from-amber-500 to-orange-500"
  },
  {
    id: "product-spotlight",
    title: "Mise en Valeur Interactive de Produits",
    description: "Présentez vos produits de manière innovante avec une expérience photo interactive qui met en vedette vos offres et engage vos clients potentiels.",
    image: "/event/product-spotlight.jpg",
    color: "from-emerald-500 to-green-500"
  },
  {
    id: "vision-boards",
    title: "Tableaux de Vision Sectoriels",
    description: "Permettez aux participants de créer des tableaux de vision inspirants liés à votre industrie ou à votre thématique, partageables instantanément.",
    image: "/event/vision-boards.jpg",
    color: "from-violet-500 to-purple-500"
  },
  {
    id: "gallery-walls",
    title: "Murs de Galerie en Direct",
    description: "Créez un affichage dynamique et évolutif des photos de votre événement qui s'agrandit en temps réel à mesure que vos invités partagent leurs moments.",
    image: "/event/gallery-wall.jpg",
    color: "from-cyan-500 to-teal-500"
  },
  {
    id: "collectible-cards",
    title: "Cartes à Collectionner Thématiques",
    description: "Offrez des souvenirs personnalisés sous forme de cartes à collectionner liées au thème de votre événement ou aux intérêts de vos participants.",
    image: "/event/collectible-cards.jpg",
    color: "from-red-500 to-pink-500"
  },
  {
    id: "time-machine",
    title: "Portraits Voyage Temporel",
    description: "Transportez vos invités à différentes époques avec des portraits qui les plongent dans le passé ou le futur grâce à notre technologie d'IA.",
    image: "/event/time-machine.jpg",
    color: "from-yellow-500 to-amber-500"
  },
  {
    id: "oversized-frames",
    title: "Cadres Photo Géants",
    description: "Créez des moments partageables avec des cadres surdimensionnés personnalisés qui servent de toile de fond parfaite pour les photos de groupe.",
    image: "/event/oversized-frames.jpg",
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: "professional-props",
    title: "Accessoires pour Professionnels",
    description: "Proposez des accessoires virtuels ou réels spécifiques à votre secteur pour créer des photos engageantes et pertinentes pour votre public.",
    image: "/event/professional-props.jpg",
    color: "from-teal-500 to-emerald-500"
  },
  {
    id: "persona-surveys",
    title: "Enquêtes de Personnalité Personnalisées",
    description: "Engagez vos participants avec des quiz interactifs qui génèrent des portraits personnalisés basés sur leurs réponses à des questions spécifiques.",
    image: "/event/persona-surveys.jpg",
    color: "from-fuchsia-500 to-purple-500"
  },
  {
    id: "seasonal-celebrations",
    title: "Célébrations Saisonnières",
    description: "Adaptez votre expérience photo aux saisons et aux fêtes avec des thèmes et filtres qui capturent l'ambiance du moment de l'année.",
    image: "/event/seasonal.jpg",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "team-mosaic",
    title: "Mosaïque d'Équipe Interactive",
    description: "Créez une œuvre d'art collaborative composée des photos individuelles de tous les membres de l'équipe, symbolisant l'unité et la coopération.",
    image: "/event/team-mosaic.jpg",
    color: "from-lime-500 to-green-500"
  },
  {
    id: "ar-experiences",
    title: "Expériences en Réalité Augmentée",
    description: "Combinez le monde réel et virtuel avec des expériences photo en réalité augmentée qui surprendront et impressionneront vos invités.",
    image: "/event/ar-experience.jpg",
    color: "from-sky-500 to-blue-500"
  },
];

export default function EventPage() {
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

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/20 text-violet-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Concepts d'Événements
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Activations{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Événementielles
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Découvrez nos concepts créatifs pour engager vos invités et transformer votre événement en une expérience mémorable et partageante.
          </p>
          
          {/* Image d'activation événementielle */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/event/ar-experience.jpg"
                alt="Activation événementielle"
                width={800}
                height={400}
                className="object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Information avec encarts */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_70%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Des Concepts Créatifs pour{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Vos Événements
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
              Votre événement mérite quelque chose d'original et d'engageant. Voici une sélection de concepts créatifs 
              que nous pouvons personnaliser pour s'adapter parfaitement à votre marque, à votre public et à vos objectifs.
            </p>

            {/* Encarts modernes flottants */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Encart 1 - Personnalisation */}
              <div className="bg-white backdrop-blur-md rounded-2xl p-6 border border-gray-200 hover:bg-gray-50 transition-all duration-300 group shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">100% Personnalisable</h3>
                <p className="text-gray-700 text-sm">
                  Chaque concept s'adapte à votre identité visuelle et aux spécificités de votre événement
                </p>
              </div>

              {/* Encart 2 - Engagement */}
              <div className="bg-white backdrop-blur-md rounded-2xl p-6 border border-gray-200 hover:bg-gray-50 transition-all duration-300 group shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Engagement Maximal</h3>
                <p className="text-gray-700 text-sm">
                  Activations conçues pour captiver et faire participer activement tous vos invités
                </p>
              </div>

              {/* Encart 3 - ROI */}
              <div className="bg-white backdrop-blur-md rounded-2xl p-6 border border-gray-200 hover:bg-gray-50 transition-all duration-300 group shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">ROI Mesurable</h3>
                <p className="text-gray-700 text-sm">
                  Analytics détaillés pour mesurer l'impact et le succès de votre activation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Section Expérience Événementielle Premium */}
      <section className="py-20 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.3),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 text-violet-300 text-sm font-medium mb-8 backdrop-blur-sm border border-violet-500/30">
                <Star className="w-5 h-5 mr-3" />
                Expérience Événementielle Premium
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Créez des <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">moments inoubliables</span> pour vos invités
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Nos concepts d'activation transforment chaque événement en expérience mémorable. 
                De la planification à l'exécution, nous créons des moments qui marquent les esprits.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Interface Événementielle */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-violet-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">Studio Événementiel</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/80 rounded-xl p-6 space-y-4">
                    {/* Concepts d'activation */}
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-lg border border-pink-500/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                          <Camera className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">14 Concepts d'Activation</span>
                      </div>
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">LIVE</div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg border border-blue-500/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">Engagement +300%</span>
                      </div>
                      <div className="text-blue-300 text-sm">vs Standard</div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-lg border border-violet-500/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">Personnalisation IA</span>
                      </div>
                      <div className="bg-violet-500 text-white px-3 py-1 rounded-full text-xs font-bold">SMART</div>
                    </div>

                    {/* Métriques d'impact */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="text-white text-sm font-medium">Impact Social:</div>
                        <div className="flex-1 flex space-x-1">
                          {[100,85,92,78,95,88,90,82,96].map((value, index) => (
                            <div 
                              key={index} 
                              className={`h-2 rounded-full flex-1 ${
                                value > 90 ? 'bg-green-400' : value > 80 ? 'bg-blue-400' : 'bg-violet-400'
                              }`}
                              style={{height: `${value/5}px`}}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div className="text-gray-400 text-xs text-center">📊 Partages instantanés</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
                      ⚡ Setup: 15 minutes
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
                      🎯 ROI: +250%
                    </div>
                  </div>
                </div>
              </div>

              {/* Avantages Événementiels */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Impact viral garanti</h4>
                      <p className="text-gray-300">
                        Nos concepts d'activation génèrent en moyenne 300% plus de partages sur les réseaux sociaux comparé aux événements traditionnels.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Engagement authentique</h4>
                      <p className="text-gray-300">
                        Créez des connexions véritables entre votre marque et vos invités grâce à des expériences interactives personnalisées et mémorables.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Mise en place rapide</h4>
                      <p className="text-gray-300">
                        De la conception à l'activation, notre équipe déploie votre concept en moins de 15 minutes pour une expérience sans stress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistiques d'impact */}
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-violet-500/20 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">L'impact de nos activations</h3>
                <p className="text-gray-300 text-lg">Des résultats mesurables qui transforment vos événements</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text mb-2">500+</div>
                  <div className="text-gray-300 text-sm">Événements réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text mb-2">95%</div>
                  <div className="text-gray-300 text-sm">Taux de satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2">+300%</div>
                  <div className="text-gray-300 text-sm">Partages sociaux</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text mb-2">14</div>
                  <div className="text-gray-300 text-sm">Concepts uniques</div>
                </div>
              </div>
            </div>

            {/* CTA section moderne */}
            <div className="text-center">
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Prêt à révolutionner votre prochain événement ?
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    Découvrez comment nos concepts d'activation peuvent transformer votre événement en expérience virale.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      href="/demo"
                      className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 text-lg"
                    >
                      Voir nos concepts en action
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-block px-8 py-4 rounded-full bg-white/20 text-white font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300 text-lg backdrop-blur-sm"
                    >
                      Conseil personnalisé
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activation Concepts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activationConcepts.map((concept) => (
              <Link href={`/event/${concept.id}`} key={concept.id} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={concept.image}
                      alt={concept.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${concept.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{concept.title}</h3>
                    <p className="text-gray-600 mb-4">{concept.description}</p>
                    <div className="flex items-center text-violet-600 font-medium group-hover:text-violet-800 transition-colors">
                      <span>En savoir plus</span>
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Banner */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Une idée originale en tête ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Nos experts peuvent créer des concepts sur mesure spécifiquement adaptés à votre événement et à vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                contactez nous
              </Link>
              <Link
                href="/demo"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander une démonstration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Pourquoi nos concepts d'activation fonctionnent</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-violet-50 rounded-lg">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Engagement élevé</h3>
                <p className="text-gray-600">Des expériences interactives qui captivent l'attention et créent des souvenirs durables.</p>
              </div>
              
              <div className="text-center p-6 bg-violet-50 rounded-lg">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Visibilité amplifiée</h3>
                <p className="text-gray-600">Des contenus hautement partageables qui étendent la portée de votre événement sur les réseaux sociaux.</p>
              </div>
              
              <div className="text-center p-6 bg-violet-50 rounded-lg">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112.83 2.83l-2.83 2.83a2 2 0 01-2.83.12V8.5a2 2 0 012.83-2.83L12 8zm0 0V4.5a2 2 0 012.83 2.83l-2.83 2.83a2 2 0 01-2.83.12V8.5a2 2 0 012.83-2.83L12 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Personnalisation totale</h3>
                <p className="text-gray-600">Des concepts adaptés à votre marque, à votre thème et à vos objectifs spécifiques.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Comment nous créons votre activation</h2>
            <p className="text-lg text-gray-700">
              Notre processus en quatre étapes garantit une expérience parfaitement adaptée à vos besoins.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-violet-200 hidden md:block"></div>
              
              {/* Steps */}
              <div className="space-y-16">
                {[
                  {
                    number: "01",
                    title: "Consultation",
                    description: "Nous discutons de vos objectifs, de votre public cible et de votre vision pour comprendre parfaitement vos besoins."
                  },
                  {
                    number: "02",
                    title: "Conception personnalisée",
                    description: "Notre équipe créative développe un concept d'activation sur mesure qui s'aligne avec votre marque et vos objectifs."
                  },
                  {
                    number: "03",
                    title: "Mise en œuvre et test",
                    description: "Nous préparons tous les aspects techniques et créatifs de votre activation, avec des tests rigoureux pour garantir une expérience impeccable."
                  },
                  {
                    number: "04",
                    title: "Exécution et support",
                    description: "Notre équipe professionnelle gère l'activation pendant votre événement, assurant un engagement maximal et une expérience fluide."
                  }
                ].map((step, index) => (
                  <div key={index} className="relative flex md:items-center">
                    <div className={`flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-violet-600 text-white font-bold text-lg z-10 ${index % 2 === 0 ? 'md:order-1' : 'md:order-1'}`}>
                      {step.number}
                    </div>
                    
                    <div className={`ml-6 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:mr-auto' : 'md:pl-12 md:text-left md:ml-auto'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Prêt à créer une expérience mémorable ?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Contactez-nous pour discuter de votre prochain événement et découvrir comment nos concepts d'activation peuvent l'élever à un niveau supérieur.
            </p>
             <Link
                href="/demo"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
               Commencer votre projet
              </Link>
          </div>
        </div>
      </section>
    </>
  );
}
