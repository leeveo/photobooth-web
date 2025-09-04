'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  Users, 
  Settings, 
  Sparkles, 
  CheckCircle, 
  ArrowRight, 
  Play,
  Palette,
  Camera,
  Monitor,
  Tablet,
  Globe,
  Star,
  Crown,
  Zap,
  PhoneCall,
  Mail,
  MessageSquare,
  Gift,
  Target,
  TrendingUp,
  Shield,
  Lightbulb,
  Package,
  Power,
  Headphones
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Images de démonstration
const demoImages = [
  {
    name: "Salon Moderne",
    description: "Découvrez comment notre technologie s'intègre parfaitement dans votre salon",
    image: "/photolive/salon.jpg",
    category: "Installation"
  },
  {
    name: "Interface Client",
    description: "Une interface intuitive que vos clients adorent utiliser",
    image: "/application-web/user-interface.jpg",
    category: "Interface"
  },
  {
    name: "Résultats Instantanés",
    description: "Des transformations époustouflantes en temps réel",
    image: "/carrousel/pop-art.jpg",
    category: "Résultats"
  },
  {
    name: "Analytics Salon",
    description: "Suivez les performances et optimisez votre activité",
    image: "/application-web/user-experience.png",
    category: "Analytics"
  }
];

// Témoignages de salons qui ont testé
const testimonials = [
  {
    name: "Marie Dubois",
    salon: "Salon Élégance",
    location: "Paris 16ème",
    image: "/testimonials/testimonial-1.jpg",
    quote: "La démo nous a convaincus en 5 minutes ! Nos clientes sont impressionnées par la technologie.",
    rating: 5
  },
  {
    name: "Antoine Mercier",
    salon: "Barbier Moderne",
    location: "Lyon Centre",
    image: "/testimonials/testimonial-2.jpg",
    quote: "Révolutionnaire ! Cette démo gratuite nous a permis de voir l'impact immédiat sur nos clients.",
    rating: 5
  },
  {
    name: "Sophie Laurent",
    salon: "Studio Coiffure",
    location: "Marseille",
    image: "/testimonials/testimonial-3.jpg",
    quote: "La démonstration personnalisée a répondu à toutes nos questions. Tablette livrée et opérationnelle en 48h !",
    rating: 5
  }
];

export default function DemoPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState('demo');

  // Carrousel automatique pour les images de démo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % demoImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section - Demandez Votre Démo */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-violet-900 to-indigo-900 relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/5 to-indigo-600/5 rounded-full blur-3xl"></div>
          </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Texte à gauche */}
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                <Gift className="w-4 h-4 mr-2" />
                Démonstration Gratuite
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Découvrez Notre{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Photobooth IA
                </span>
                {' '}en Action
              </h1>
              
              <p className="text-xl text-white mb-8 leading-relaxed">
                Réservez votre démonstration personnalisée gratuite et découvrez comment notre technologie 
                d'intelligence artificielle peut transformer l'expérience de votre salon et augmenter votre chiffre d'affaires.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Clock className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-white font-medium">30 min de demo</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Users className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-white font-medium">Dans votre salon</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Gift className="w-5 h-5 text-pink-400 mr-2" />
                  <span className="text-white font-medium">100% gratuit</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg group"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Réserver ma démo gratuite
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#fonctionnement"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-lg backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Voir comment ça marche
                </Link>
              </div>
            </div>
            
            {/* Carrousel à droite */}
            <div className="relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] h-[400px]">
                {/* Images du carrousel */}
                <div className="absolute inset-0 w-full h-full">
                  {demoImages.map((demo, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out
                        ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <Image 
                        src={demo.image}
                        alt={`Démo ${demo.name}`}
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
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">
                        {demoImages[currentImageIndex]?.category}
                      </span>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      {demoImages[currentImageIndex]?.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">
                      {demoImages[currentImageIndex]?.description}
                    </p>
                    
                    {/* Indicateurs du carrousel */}
                    <div className="flex space-x-2 mt-4">
                      {demoImages.map((_, index) => (
                        <button 
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 
                            ${index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                          aria-label={`Voir la démo ${index + 1}`}
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

      {/* Section Pourquoi une Démo */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Pourquoi Demander une{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Démonstration ?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Une démonstration vous permet de voir concrètement comment notre technologie peut transformer 
                votre salon et améliorer l'expérience de vos clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Raison 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Testez Avec Vos Vrais Clients</h3>
                <p className="text-gray-600 leading-relaxed">
                  Voir la réaction authentique de vos clients face à la technologie. 
                  Observez leur enthousiasme et leur engagement en temps réel pendant la démonstration.
                </p>
              </div>

              {/* Raison 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Personnalisation Sur Mesure</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous adaptons la démonstration à votre salon : branding, couleurs, styles de coiffures 
                  qui correspondent à votre clientèle et votre image de marque.
                </p>
              </div>

              {/* Raison 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">ROI Immédiatement Visible</h3>
                <p className="text-gray-600 leading-relaxed">
                  Calculez ensemble le retour sur investissement en fonction de votre clientèle, 
                  vos tarifs et votre fréquentation. Résultats tangibles dès la démonstration.
                </p>
              </div>

              {/* Raison 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Formation de Votre Équipe</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous formons votre équipe en direct pendant la démo. Vos coiffeurs apprennent 
                  à utiliser l'outil et à en tirer le maximum pour leurs consultations.
                </p>
              </div>

              {/* Raison 5 */}
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Sans Engagement</h3>
                <p className="text-gray-600 leading-relaxed">
                  La démonstration est 100% gratuite et sans engagement. Prenez le temps de réfléchir 
                  et de consulter votre équipe avant toute décision d'achat.
                </p>
              </div>

              {/* Raison 6 */}
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Conseils d'Expert</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bénéficiez des conseils de nos experts pour optimiser l'intégration dans votre workflow 
                  et maximiser l'impact sur votre activité commerciale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Comment se déroule la démo */}
      <section id="fonctionnement" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Comment se Déroule la{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Démonstration ?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Un processus simple en 5 étapes pour découvrir tous les avantages de notre solution
              </p>
            </div>

            {/* Timeline Process */}
            <div className="relative">
              {/* Ligne de connexion */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:transform md:-translate-x-1/2"></div>
              
              <div className="space-y-12">
                {/* Étape 1 */}
                <div className="relative flex items-center">
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold z-10 md:transform md:-translate-x-1/2">
                    1
                  </div>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                        <PhoneCall className="w-5 h-5 text-blue-600 mr-2" />
                        Premier Contact (5 min)
                      </h3>
                      <p className="text-gray-600">
                        Nous vous contactons pour comprendre vos besoins, votre type de clientèle et 
                        planifier un rendez-vous dans votre salon à votre convenance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Étape 2 */}
                <div className="relative flex items-center">
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold z-10 md:transform md:-translate-x-1/2">
                    2
                  </div>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:pl-12 md:ml-auto">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                        <Settings className="w-5 h-5 text-purple-600 mr-2" />
                        Envoi Tablette Express (2 min)
                      </h3>
                      <p className="text-gray-600">
                        Nous vous envoyons une tablette pré-configurée par express. Allumez-la et elle est 
                        prête à l'emploi en moins de 2 minutes, sans configuration nécessaire.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Étape 3 */}
                <div className="relative flex items-center">
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold z-10 md:transform md:-translate-x-1/2">
                    3
                  </div>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                        <Camera className="w-5 h-5 text-green-600 mr-2" />
                        Test en Direct (10 min)
                      </h3>
                      <p className="text-gray-600">
                        Essai avec vos vrais clients ou votre équipe. Découverte des 500+ coiffures, 
                        des effets couleur et de l'interface ultra-intuitive.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Étape 4 */}
                <div className="relative flex items-center">
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold z-10 md:transform md:-translate-x-1/2">
                    4
                  </div>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:pl-12 md:ml-auto">
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                        <Users className="w-5 h-5 text-orange-600 mr-2" />
                        Formation Équipe (10 min)
                      </h3>
                      <p className="text-gray-600">
                        Formation express de vos coiffeurs : comment intégrer l'outil dans leurs consultations 
                        pour maximiser l'effet "wow" et la satisfaction client.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Étape 5 */}
                <div className="relative flex items-center">
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold z-10 md:transform md:-translate-x-1/2">
                    5
                  </div>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                        <TrendingUp className="w-5 h-5 text-indigo-600 mr-2" />
                        Analyse & Proposition (5 min)
                      </h3>
                      <p className="text-gray-600">
                        Calcul du ROI personnalisé, présentation des différentes options d'abonnement et 
                        réponses à toutes vos questions. Aucune pression commerciale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA après le processus */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Prêt à voir la magie opérer ?</h3>
                <p className="text-xl mb-6 opacity-90">
                  Réservez votre créneaux pour une démonstration gratuite de 30 minutes dans votre salon
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg shadow-lg hover:bg-gray-50 transition-colors group"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Planifier ma démonstration
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Livraison Express */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <Settings className="w-4 h-4 mr-2" />
                Simplicité maximale
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Tablette Prête à l'Emploi en{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Moins de 2 Minutes
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Fini les installations compliquées ! Nous vous envoyons une tablette pré-configurée 
                que vous allumez et qui fonctionne immédiatement.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contenu à gauche */}
              <div>
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-lg">
                        <Package className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Livraison Express 48h</h3>
                        <p className="text-gray-600">
                          Tablette pré-configurée, testée et personnalisée selon vos besoins. 
                          Livraison sécurisée partout en France métropolitaine.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-lg">
                        <Power className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Allumage & C'est Parti !</h3>
                        <p className="text-gray-600">
                          Sortez la tablette, appuyez sur le bouton d'allumage, connectez-vous au WiFi 
                          et votre photobooth est opérationnel en moins de 2 minutes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-lg">
                        <Headphones className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Support à Distance</h3>
                        <p className="text-gray-600">
                          Notre équipe reste disponible par téléphone ou visioconférence pour 
                          vous accompagner dans les premiers pas si nécessaire.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image et statistiques à droite */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Processus Ultra-Simplifié</h3>
                    <p className="text-gray-600">Plus besoin d'attendre un technicien !</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                        <span className="font-medium">Commande</span>
                      </div>
                      <span className="text-blue-600 font-semibold">Immédiat</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                        <span className="font-medium">Expédition</span>
                      </div>
                      <span className="text-green-600 font-semibold">24h</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                        <span className="font-medium">Livraison</span>
                      </div>
                      <span className="text-purple-600 font-semibold">48h</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                        <span className="font-medium">Utilisation</span>
                      </div>
                      <span className="text-orange-600 font-semibold">2 min</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white text-center">
                    <div className="text-2xl font-bold">72h</div>
                    <div className="text-sm opacity-90">De la commande à l'utilisation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Concept Sur Mesure */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Solutions Personnalisées
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Concepts{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Sur Mesure
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Chaque salon est unique. C'est pourquoi nous créons des solutions personnalisées 
                qui s'adaptent parfaitement à votre marque, votre clientèle et vos objectifs business.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Contenu à gauche */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Personnalisation Complète de Votre Plateforme
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-2 rounded-lg mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Branding Intégral</h4>
                      <p className="text-gray-300">
                        Logo, couleurs, polices, interface entièrement aux couleurs de votre salon. 
                        Vos clients reconnaissent immédiatement votre marque.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-2 rounded-lg mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Catalogue Coiffures Ciblé</h4>
                      <p className="text-gray-300">
                        Sélection des styles qui correspondent à votre clientèle : coupes tendance pour salon jeune, 
                        classiques pour clientèle mature, ou mix personnalisé.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Intégration Systèmes Existants</h4>
                      <p className="text-gray-300">
                        Connexion avec votre logiciel de réservation, votre site web, vos réseaux sociaux. 
                        Workflow fluide sans disruption.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-lg mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Analytics Personnalisées</h4>
                      <p className="text-gray-300">
                        Tableaux de bord adaptés à vos KPIs : fréquentation, styles populaires, 
                        conversion consultation/vente, satisfaction client.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image à droite */}
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <Image
                    src="/photolive/corporate.jpg"
                    alt="Plateforme personnalisée"
                    width={500}
                    height={350}
                    className="rounded-xl shadow-2xl"
                  />
                  
                  {/* Overlay badges */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-sm font-semibold text-gray-800">Votre Logo</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-sm font-semibold text-gray-800">Vos Couleurs</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <span className="text-sm font-semibold text-gray-800">Interface 100% Personnalisée</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Types de personnalisation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Salon Traditionnel */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Salon Traditionnel</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Interface classique et élégante avec coiffures intemporelles. 
                  Couleurs sobres et navigation simplifiée pour clientèle mature.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Palette couleurs neutres</li>
                  <li>• Coiffures classiques</li>
                  <li>• Navigation simplifiée</li>
                </ul>
              </div>

              {/* Salon Moderne */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Salon Moderne</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Design épuré et tendance avec les dernières coiffures à la mode. 
                  Animations fluides et couleurs vives pour clientèle jeune.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Design contemporain</li>
                  <li>• Coiffures tendance</li>
                  <li>• Animations dynamiques</li>
                </ul>
              </div>

              {/* Salon Premium */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Salon Premium</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Expérience haut de gamme avec fonctionnalités exclusives. 
                  Catalogue premium et service client VIP intégré.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Fonctionnalités exclusives</li>
                  <li>• Catalogue premium</li>
                  <li>• Service client VIP</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages Consultant */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Pourquoi Contacter un{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Conseiller Expert ?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Nos conseillers spécialisés vous accompagnent pour maximiser l'impact de la technologie sur votre salon
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Contenu à gauche */}
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-3 rounded-lg">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Analyse Personnalisée de Votre Activité</h3>
                      <p className="text-gray-600">
                        Étude approfondie de votre salon : clientèle, concurrence locale, positionnement. 
                        Nos experts identifient les opportunités spécifiques à votre marché.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Stratégie de Déploiement Optimale</h3>
                      <p className="text-gray-600">
                        Plan d'implémentation sur mesure : timing, formation équipe, communication client, 
                        mesure des résultats. Maximisez votre ROI dès le premier jour.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Accompagnement Post-Installation</h3>
                      <p className="text-gray-600">
                        Suivi personnalisé pendant 3 mois : optimisation des performances, 
                        formation continue, résolution des difficultés, conseils d'amélioration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-lg">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Innovations et Tendances</h3>
                      <p className="text-gray-600">
                        Accès privilégié aux nouvelles fonctionnalités, tendances coiffures 2024-2025, 
                        benchmarks sectoriels. Gardez une longueur d'avance sur vos concurrents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats et témoignages à droite */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    Résultats de nos Clients Accompagnés
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">+47%</div>
                      <div className="text-sm text-gray-600">Chiffre d'affaires</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">+62%</div>
                      <div className="text-sm text-gray-600">Nouveaux clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">+85%</div>
                      <div className="text-sm text-gray-600">Satisfaction client</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">-35%</div>
                      <div className="text-sm text-gray-600">Temps consultation</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold">Sarah Martinez</div>
                      <div className="text-sm opacity-80">Salon Élégance, Bordeaux</div>
                    </div>
                  </div>
                  <p className="text-sm opacity-90 italic">
                    "L'accompagnement personnalisé a été déterminant. En 2 mois, nous avons doublé 
                    nos réservations de colorations grâce aux conseils de notre consultant."
                  </p>
                  <div className="flex text-yellow-400 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <h4 className="font-bold text-gray-800 mb-3">Votre Conseiller Dédié</h4>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">JM</span>
                    </div>
                    <div>
                      <div className="font-semibold">Jean-Marc Dubois</div>
                      <div className="text-sm text-gray-600">Expert Salon & Business</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    15 ans d'expérience dans l'accompagnement de salons de coiffure. 
                    Spécialiste de la transformation digitale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ils Ont Testé Notre{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Démonstration
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Découvrez les retours de nos clients après leur démonstration gratuite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-700">{testimonial.salon}</div>
                    <div className="text-xs text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
                
                <div className="flex text-yellow-500 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border border-gray-200 shadow-md">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-gray-900 font-medium">98% des salons adoptent la solution après la démo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Final */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à Révolutionner Votre Salon ?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Rejoignez les centaines de salons qui ont déjà transformé leur activité grâce à notre technologie. 
              Demandez votre démonstration gratuite dès maintenant !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg shadow-2xl hover:bg-gray-50 transition-all duration-300 group"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Contacter un Conseiller
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center text-white/80">
                <Clock className="w-5 h-5 mr-2" />
                <span>Réponse sous 2h - Demo sous 48h</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Gift className="w-6 h-6" />
                </div>
                <div className="font-semibold">100% Gratuit</div>
                <div className="text-sm opacity-80">Aucun engagement</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="font-semibold">30 Minutes</div>
                <div className="text-sm opacity-80">Dans votre salon</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="font-semibold">Expert Dédié</div>
                <div className="text-sm opacity-80">Conseils personnalisés</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ Spéciale Demo */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Questions Fréquentes sur la{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Démonstration
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "La démonstration est-elle vraiment gratuite ?",
                  answer: "Oui, absolument ! La démonstration de 30 minutes est entièrement gratuite et sans engagement. Nous nous déplaçons dans votre salon avec notre équipement et vous montrons toutes les fonctionnalités. Aucune carte de crédit requise, aucun frais caché."
                },
                {
                  question: "Combien de temps dure la démonstration ?",
                  answer: "La démonstration complète dure environ 25 minutes : 2 minutes pour allumer et démarrer la tablette, 18 minutes de test en direct avec vos clients ou votre équipe, et 5 minutes pour répondre à vos questions et présenter les options d'abonnement."
                },
                {
                  question: "Dois-je préparer quelque chose pour la démonstration ?",
                  answer: "Rien de spécial ! La tablette arrive pré-configurée et prête à l'emploi. Idéalement, prévoyez quelques clients volontaires ou membres de votre équipe pour tester la technologie en conditions réelles. Une simple prise électrique et connexion WiFi suffisent."
                },
                {
                  question: "Peut-on personnaliser l'interface pendant la démonstration ?",
                  answer: "Oui ! Nous pouvons configurer l'interface avec vos couleurs et votre logo en quelques minutes pendant la démonstration. Vous verrez immédiatement comment la technologie s'intègre à votre marque."
                },
                {
                  question: "Y a-t-il de la pression commerciale après la démonstration ?",
                  answer: "Absolument aucune ! Notre objectif est de vous montrer la technologie. Après la démonstration, vous prenez le temps de réfléchir. Nous vous recontacterons seulement si vous le souhaitez, au moment qui vous convient."
                },
                {
                  question: "Dans quelles villes faites-vous des démonstrations ?",
                  answer: "Nous nous déplaçons dans toute la France métropolitaine. Pour les grandes villes (Paris, Lyon, Marseille, Toulouse, etc.), nous pouvons organiser une démonstration sous 48h. Pour les autres villes, comptez 3-5 jours selon la distance."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-9">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                D'autres questions ? Notre équipe est disponible pour vous répondre
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Poser une question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
