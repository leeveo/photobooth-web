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
  Headphones,
  Scissors,
  PartyPopper,
  Megaphone,
  Cloud,
  Database,
  BarChart3,
  Smartphone,
  Share2,
  Download,
  CreditCard,
  Infinity,
  Lock
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Solutions disponibles
const solutions = [
  {
    id: "coiffeur",
    name: "Photobooth Coiffeur",
    subtitle: "Révolutionnez vos consultations coiffure",
    description: "Transformez l'expérience de vos clients avec notre IA spécialisée dans la coiffure",
    image: "/coupe-cheveux/pixie001.jpg",
    icon: Scissors,
    color: "from-purple-500 to-pink-600",
    features: ["500+ coiffures", "Simulation couleurs", "Essayage virtuel", "Analytics salon"],
    link: "/photobooth-coiffure"
  },
  {
    id: "evenement",
    name: "Photobooth Événement",
    subtitle: "Créez des souvenirs inoubliables",
    description: "Animez vos événements avec des expériences photo interactives personnalisées",
    image: "/event/ar-experience.jpg",
    icon: PartyPopper,
    color: "from-blue-500 to-cyan-600",
    features: ["Thèmes personnalisés", "Partage instantané", "Galerie live", "Props virtuels"],
    link: "/event"
  },
  {
    id: "marketing",
    name: "Photobooth Marketing",
    subtitle: "Boostez votre visibilité de marque",
    description: "Captivez votre audience avec des activations marketing innovantes et engageantes",
    image: "/marketing/retail001.jpg",
    icon: Megaphone,
    color: "from-green-500 to-emerald-600",
    features: ["Branding complet", "Collecte de données", "Viralité garantie", "ROI mesurable"],
    link: "/marketing"
  }
];

// Avantages SaaS
const saasAdvantages = [
  {
    icon: Cloud,
    title: "Solution 100% Cloud",
    description: "Aucune installation complexe. Tout fonctionne depuis le cloud avec des mises à jour automatiques.",
    benefits: ["Déploiement instantané", "Mises à jour automatiques", "Sauvegarde sécurisée", "Accès depuis partout"]
  },
  {
    icon: CreditCard,
    title: "Modèle Abonnement Flexible",
    description: "Payez seulement ce que vous utilisez avec nos formules adaptées à votre activité.",
    benefits: ["Sans engagement long", "Évolutif selon vos besoins", "Support inclus", "ROI rapide"]
  },
  {
    icon: BarChart3,
    title: "Analytics Avancées",
    description: "Suivez vos performances en temps réel avec des tableaux de bord détaillés.",
    benefits: ["Métriques en temps réel", "Rapports personnalisés", "Insights clients", "Optimisation continue"]
  },
  {
    icon: Lock,
    title: "Sécurité Enterprise",
    description: "Vos données et celles de vos clients sont protégées par une sécurité de niveau bancaire.",
    benefits: ["Chiffrement bout en bout", "Conformité RGPD", "Sauvegarde automatique", "Accès sécurisé"]
  },
  {
    icon: Headphones,
    title: "Support Expert 24/7",
    description: "Une équipe d'experts disponible pour vous accompagner à chaque étape.",
    benefits: ["Support multicanal", "Formation incluse", "Documentation complète", "Communauté active"]
  },
  {
    icon: Infinity,
    title: "Évolutivité Garantie",
    description: "Notre plateforme grandit avec votre business, sans limite de capacité.",
    benefits: ["Scalabilité automatique", "Nouvelles fonctionnalités", "Intégrations multiples", "Performance optimale"]
  }
];

// Témoignages clients
const testimonials = [
  {
    name: "Marie Dubois",
    company: "Salon Élégance",
    solution: "Photobooth Coiffeur",
    image: "/testimonials/testimonial-1.jpg",
    quote: "Nos clientes adorent voir le résultat avant la coupe. Notre chiffre d'affaires a augmenté de 40% !",
    rating: 5
  },
  {
    name: "Pierre Martin",
    company: "Events & Co",
    solution: "Photobooth Événement",
    image: "/testimonials/testimonial-2.jpg",
    quote: "Nos événements sont maintenant mémorables. Les clients nous redemandent systématiquement !",
    rating: 5
  },
  {
    name: "Sophie Laurent",
    company: "Brand Agency",
    solution: "Photobooth Marketing",
    image: "/testimonials/testimonial-3.jpg",
    quote: "ROI exceptionnel ! 300% d'engagement en plus sur nos campagnes street marketing.",
    rating: 5
  }
];

export default function SolutionsPage() {
  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);

  // Carrousel automatique pour les solutions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSolutionIndex((prev) => (prev + 1) % solutions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
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
                <Sparkles className="w-4 h-4 mr-2" />
                Solutions SaaS Complètes
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Nos Solutions{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Photobooth IA
                </span>
              </h1>
              
              <p className="text-xl text-white mb-8 leading-relaxed">
                Découvrez notre gamme complète de solutions photobooth alimentées par l'intelligence artificielle. 
                Du salon de coiffure aux événements d'entreprise, en passant par le street marketing.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Cloud className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-white font-medium">100% SaaS</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Zap className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-white font-medium">IA Avancée</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Infinity className="w-5 h-5 text-pink-400 mr-2" />
                  <span className="text-white font-medium">Évolutif</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg group"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Découvrir nos solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#solutions"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-lg backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Voir les solutions
                </Link>
              </div>
            </div>
            
            {/* Carrousel à droite */}
            <div className="relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] h-[400px]">
                {/* Images du carrousel */}
                <div className="absolute inset-0 w-full h-full">
                  {solutions.map((solution, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out
                        ${index === currentSolutionIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <Image 
                        src={solution.image}
                        alt={`Solution ${solution.name}`}
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
                      {React.createElement(solutions[currentSolutionIndex]?.icon, {
                        className: "w-5 h-5 text-yellow-400 mr-2"
                      })}
                      <span className="text-yellow-400 text-sm font-medium">
                        Solution {currentSolutionIndex + 1}/3
                      </span>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      {solutions[currentSolutionIndex]?.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">
                      {solutions[currentSolutionIndex]?.subtitle}
                    </p>
                    
                    {/* Indicateurs du carrousel */}
                    <div className="flex space-x-2 mt-4">
                      {solutions.map((_, index) => (
                        <button 
                          key={index}
                          onClick={() => setCurrentSolutionIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 
                            ${index === currentSolutionIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                          aria-label={`Voir la solution ${index + 1}`}
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

      {/* Section Solutions Détaillées */}
      <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Nos{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  3 Solutions
                </span>
                {' '}Principales
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Chaque solution est spécialement conçue pour répondre aux besoins spécifiques de votre secteur d'activité
              </p>
            </div>

            <div className="space-y-16">
              {solutions.map((solution, index) => (
                <div key={solution.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                      <Image
                        src={solution.image}
                        alt={solution.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Badge solution */}
                      <div className="absolute top-4 left-4">
                        <div className={`bg-gradient-to-r ${solution.color} p-3 rounded-xl shadow-lg`}>
                          {React.createElement(solution.icon, {
                            className: "w-6 h-6 text-white"
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${solution.color} bg-opacity-10 text-sm font-medium mb-4`}>
                      {React.createElement(solution.icon, {
                        className: "w-4 h-4 mr-2"
                      })}
                      Solution Spécialisée
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      {solution.name}
                    </h3>
                    
                    <h4 className="text-xl text-gray-600 mb-6">
                      {solution.subtitle}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {solution.description}
                    </p>

                    {/* Fonctionnalités clés */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={solution.link}
                      className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${solution.color} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group`}
                    >
                      En savoir plus
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages SaaS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <Cloud className="w-4 h-4 mr-2" />
                Technologie SaaS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Pourquoi Choisir Notre{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Solution SaaS ?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Notre approche SaaS vous garantit flexibilité, performance et tranquillité d'esprit pour votre business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {saasAdvantages.map((advantage, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {React.createElement(advantage.icon, {
                      className: "w-7 h-7 text-white"
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {advantage.description}
                  </p>
                  <ul className="space-y-2">
                    {advantage.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTA après les avantages */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Prêt à découvrir nos solutions ?</h3>
                <p className="text-xl mb-6 opacity-90">
                  Contactez notre équipe pour une démonstration personnalisée
                </p>
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg shadow-lg hover:bg-gray-50 transition-colors group"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Demander une démo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Comparaison Solutions */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Quelle Solution{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Correspond
                </span>
                {' '}à Votre Activité ?
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comparez nos solutions pour trouver celle qui s'adapte parfaitement à vos besoins
              </p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left py-6 px-6 text-gray-900 font-semibold">Critères</th>
                      <th className="text-center py-6 px-6 text-gray-900 font-semibold">
                        <div className="flex flex-col items-center">
                          <Scissors className="w-6 h-6 text-purple-600 mb-2" />
                          <span>Photobooth Coiffeur</span>
                        </div>
                      </th>
                      <th className="text-center py-6 px-6 text-gray-900 font-semibold">
                        <div className="flex flex-col items-center">
                          <PartyPopper className="w-6 h-6 text-blue-600 mb-2" />
                          <span>Photobooth Événement</span>
                        </div>
                      </th>
                      <th className="text-center py-6 px-6 text-gray-900 font-semibold">
                        <div className="flex flex-col items-center">
                          <Megaphone className="w-6 h-6 text-green-600 mb-2" />
                          <span>Photobooth Marketing</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 text-gray-900 font-medium">Secteur d'activité</td>
                      <td className="py-4 px-6 text-center text-gray-700">Salons de coiffure</td>
                      <td className="py-4 px-6 text-center text-gray-700">Événementiel</td>
                      <td className="py-4 px-6 text-center text-gray-700">Marketing & Communication</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 text-gray-900 font-medium">Usage principal</td>
                      <td className="py-4 px-6 text-center text-gray-700">Consultation coiffure</td>
                      <td className="py-4 px-6 text-center text-gray-700">Animation événement</td>
                      <td className="py-4 px-6 text-center text-gray-700">Activation de marque</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 text-gray-900 font-medium">Fonctionnalités clés</td>
                      <td className="py-4 px-6 text-center text-gray-700">Essayage virtuel</td>
                      <td className="py-4 px-6 text-center text-gray-700">Thèmes personnalisés</td>
                      <td className="py-4 px-6 text-center text-gray-700">Branding complet</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 text-gray-900 font-medium">ROI attendu</td>
                      <td className="py-4 px-6 text-center text-gray-700">+40% CA salon</td>
                      <td className="py-4 px-6 text-center text-gray-700">+60% engagement</td>
                      <td className="py-4 px-6 text-center text-gray-700">+300% reach</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 text-gray-900 font-medium">Durée d'utilisation</td>
                      <td className="py-4 px-6 text-center text-gray-700">Continue</td>
                      <td className="py-4 px-6 text-center text-gray-700">Ponctuelle</td>
                      <td className="py-4 px-6 text-center text-gray-700">Campagnes</td>
                    </tr>
                  </tbody>
                </table>
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
              Ils Ont Choisi Nos{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Découvrez comment nos clients transforment leur activité avec nos solutions SaaS
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
                    <div className="text-sm text-gray-700">{testimonial.company}</div>
                    <div className="text-xs text-gray-600">{testimonial.solution}</div>
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
              Transformez Votre Activité Dès Aujourd'hui
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Rejoignez les entreprises qui ont déjà adopté nos solutions et découvrez le potentiel 
              de l'intelligence artificielle pour votre business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg shadow-2xl hover:bg-gray-50 transition-all duration-300 group"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Parler à un Expert
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Demander une démo
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="font-semibold">Déploiement Rapide</div>
                <div className="text-sm opacity-80">En moins de 48h</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="font-semibold">ROI Garanti</div>
                <div className="text-sm opacity-80">Résultats mesurables</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Headphones className="w-6 h-6" />
                </div>
                <div className="font-semibold">Support Expert</div>
                <div className="text-sm opacity-80">Accompagnement complet</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
