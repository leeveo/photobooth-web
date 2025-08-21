'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Scissors, Palette, Sparkles, Users, Crown, Tablet, Monitor, Globe, ArrowRight, Star, Check, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import ContactCoiffureForm from '@/components/ContactCoiffureForm';
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
      answer: "Nous proposons plus de 500 coupes différentes (bob, pixie, dégradés, etc.) et plus de 200 couleurs (naturelles, highlights, ombré, couleurs fantaisie). Notre bibliothèque s'enrichit chaque mois avec les dernières tendances."
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Texte à gauche */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Photobooth Coiffure IA
                </span>
                <span className="text-gray-800"> Révolutionnez votre salon</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Permettez à vos clients de visualiser instantanément leur nouvelle coupe et couleur de cheveux grâce à notre intelligence artificielle avancée.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-pink-100">
                  <Scissors className="w-5 h-5 text-pink-600 mr-2" />
                  <span className="font-medium">+500 coupes disponibles</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-purple-100">
                  <Palette className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="font-medium">+200 couleurs</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-indigo-100">
                  <Sparkles className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="font-medium">Résultat instantané</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#demo"
                  className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold shadow-lg hover:from-pink-700 hover:to-purple-700 transition-colors text-lg"
                >
                  Essayer la démo
                </Link>
                <Link
                  href="#contact"
                  className="inline-block px-8 py-3 rounded-full border-2 border-pink-600 text-pink-600 font-semibold shadow-lg hover:bg-pink-50 transition-colors text-lg"
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

      {/* Section Avantages pour les salons */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Pourquoi choisir notre photobooth coiffure ?</h2>
            <p className="text-lg text-gray-700">
              Transformez l'expérience client et augmentez votre chiffre d'affaires grâce à notre technologie d'IA générative
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-pink-600" />,
                title: "Augmentez la satisfaction client",
                description: "Permettez à vos clients de visualiser leur future coiffure avant la coupe, réduisant les déceptions de 85% et augmentant la confiance dans leur choix."
              },
              {
                icon: <Zap className="w-8 h-8 text-purple-600" />,
                title: "Consultation rapide et interactive",
                description: "Raccourcissez le temps de consultation de 40% en montrant instantanément différentes options à vos clients grâce à notre technologie temps réel."
              },
              {
                icon: <Star className="w-8 h-8 text-indigo-600" />,
                title: "Expérience premium différenciante",
                description: "Offrez une expérience high-tech qui démarque votre salon de la concurrence et attire une clientèle plus jeune et connectée."
              },
              {
                icon: <Palette className="w-8 h-8 text-pink-600" />,
                title: "Bibliothèque complète de styles",
                description: "Proposez plus de 500 coupes et 200 couleurs professionnelles pour satisfaire tous les goûts et morphologies de visage."
              },
              {
                icon: <Monitor className="w-8 h-8 text-purple-600" />,
                title: "Intégration multi-plateformes",
                description: "Disponible en tablette pour votre salon, widget pour votre site web, et application mobile pour vos clients."
              },
              {
                icon: <Crown className="w-8 h-8 text-indigo-600" />,
                title: "Résultats hyper-réalistes",
                description: "Notre IA générative reproduit fidèlement les textures, volumes et reflets pour un aperçu ultra-réaliste du résultat final."
              }
            ].map((advantage, index) => (
              <div key={index} className="card bg-white p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Technologie IA Générative */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Technologie d'IA Générative Avancée
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Notre plateforme utilise l'intelligence artificielle générative de pointe pour créer des simulations de coiffures 
                ultra-réalistes qui prennent en compte la morphologie unique de chaque visage.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Reconnaissance Faciale 3D</h3>
                      <p className="text-gray-600">
                        Notre IA analyse en temps réel la morphologie du visage, la texture des cheveux, 
                        et adapte automatiquement chaque coiffure pour un rendu naturel et personnalisé.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-lg">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Rendu Instantané</h3>
                      <p className="text-gray-600">
                        Visualisation en temps réel sans latence. Changez de coiffure d'un simple clic 
                        et voyez immédiatement le résultat avec un réalisme photographique.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-lg">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Simulation Couleur Avancée</h3>
                      <p className="text-gray-600">
                        Testez des milliers de nuances et techniques de coloration (balayage, ombré, mèches) 
                        avec un aperçu fidèle des reflets et de la profondeur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-r from-pink-400 to-purple-600 p-8 rounded-2xl text-white">
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Retour sur Investissement Prouvé</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nos partenaires coiffeurs constatent des résultats mesurables dès les premières semaines d'utilisation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                value: "+65%",
                label: "Augmentation du CA",
                description: "En moyenne sur 6 mois",
                color: "from-green-500 to-emerald-600"
              },
              {
                value: "85%",
                label: "Satisfaction client",
                description: "Clients satisfaits de leur coupe",
                color: "from-blue-500 to-cyan-600"
              },
              {
                value: "-40%",
                label: "Temps de consultation",
                description: "Réduction du temps d'échange",
                color: "from-purple-500 to-indigo-600"
              },
              {
                value: "+3.2",
                label: "Nouveaux clients/semaine",
                description: "Via le widget web",
                color: "from-pink-500 to-rose-600"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`bg-gradient-to-r ${stat.color} p-6 rounded-2xl text-white mb-4`}>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold">{stat.label}</div>
                </div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-center mb-8">Calculez votre ROI personnalisé</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Investissement Initial</h4>
                <div className="text-3xl font-bold text-gray-800 mb-2">À partir de 199€/mois</div>
                <p className="text-sm text-gray-600">Abonnement tout inclus</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Retour Moyen</h4>
                <div className="text-3xl font-bold text-green-600 mb-2">+1,200€/mois</div>
                <p className="text-sm text-gray-600">Chiffre d'affaires supplémentaire</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <h4 className="font-bold text-lg mb-2">ROI</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">503%</div>
                <p className="text-sm text-gray-600">Sur la première année</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            {/* Analyse Morphologique */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Analyse Morphologique Intelligente</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Détection automatique de la forme du visage</h4>
                      <p className="text-gray-600">Ovale, rond, carré, triangle... Notre IA identifie précisément la morphologie pour des recommandations parfaites.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Analyse de la texture capillaire</h4>
                      <p className="text-gray-600">Cheveux fins, épais, bouclés, raides... Adaptation automatique des coiffures selon le type de cheveux.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Recommandations personnalisées</h4>
                      <p className="text-gray-600">Suggestions automatiques basées sur les tendances actuelles et la morphologie du client.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-md">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-pink-200 rounded-full mx-auto mb-2"></div>
                        <span className="text-sm font-medium">Visage Ovale</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto mb-2"></div>
                        <span className="text-sm font-medium">Visage Rond</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-indigo-200 rounded-full mx-auto mb-2"></div>
                        <span className="text-sm font-medium">Visage Carré</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-2"></div>
                        <span className="text-sm font-medium">Visage Triangle</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                        'https://localhost:3000/photobooth-coiffure/coiffure003',
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
                    📸 Ouvrir le Photobooth
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
                href="#contact"
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

      {/* Section Solutions de Déploiement */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Solutions de Déploiement Flexibles</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choisissez la solution qui convient le mieux à votre salon et à vos besoins spécifiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Solution Tablette */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Tablet className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Solution Tablette</h3>
                <p className="text-gray-600">Parfaite pour l'accueil et les consultations</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Tablette 12" haute résolution incluse</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Support ajustable et sécurisé</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Interface tactile optimisée</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Branding personnalisé</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Installation et formation incluses</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">599€</div>
                  <div className="text-sm text-gray-600">À l'achat + 99€/mois</div>
                  <div className="text-xs text-gray-500 mt-1">ou 149€/mois en location</div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
                Commander maintenant
              </button>
            </div>

            {/* Solution Widget Web */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-purple-200">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Widget Site Web</h3>
                <p className="text-gray-600">Attirez de nouveaux clients en ligne</p>
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mt-2 inline-block">
                  Le plus populaire
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Intégration simple en 5 minutes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Design responsive et personnalisable</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Capture de leads automatique</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Analytics et rapports détaillés</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Support technique inclus</span>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">199€</div>
                  <div className="text-sm text-gray-600">par mois</div>
                  <div className="text-xs text-gray-500 mt-1">Sans engagement, résiliable à tout moment</div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                Commencer l'essai gratuit
              </button>
            </div>

            {/* Solution Complete */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-blue-600 p-4 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Solution Complète</h3>
                <p className="text-gray-600">Pour les salons multi-services</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Tablettes multiples + Widget web</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Écran d'affichage grand format</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Formation équipe complète</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Support prioritaire 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Personnalisation avancée</span>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">399€</div>
                  <div className="text-sm text-gray-600">par mois</div>
                  <div className="text-xs text-gray-500 mt-1">Économisez 30% vs solutions séparées</div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                Demander une démo
              </button>
            </div>
          </div>

          {/* Comparaison des fonctionnalités */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-center mb-8">Comparaison des Solutions</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6">Fonctionnalités</th>
                    <th className="text-center py-4 px-6">Tablette</th>
                    <th className="text-center py-4 px-6">Widget Web</th>
                    <th className="text-center py-4 px-6">Solution Complète</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Essayage virtuel coiffures", tablet: true, widget: true, complete: true },
                    { feature: "Simulation couleurs", tablet: true, widget: true, complete: true },
                    { feature: "Capture de leads", tablet: false, widget: true, complete: true },
                    { feature: "Analytics avancées", tablet: false, widget: true, complete: true },
                    { feature: "Branding personnalisé", tablet: true, widget: true, complete: true },
                    { feature: "Support prioritaire", tablet: false, widget: false, complete: true },
                    { feature: "Formation équipe", tablet: true, widget: false, complete: true },
                    { feature: "Écran d'affichage", tablet: false, widget: false, complete: true }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {row.tablet ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.widget ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.complete ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  <button className="w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-semibold">
                    Essayer maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Ce que disent nos partenaires coiffeurs</h2>
            <p className="text-lg text-gray-700">
              Découvrez les retours de professionnels qui ont adopté notre solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Marie Dubois",
                salon: "Salon Marie & Co",
                ville: "Lyon",
                stars: 5,
                text: "Nos clientes adorent pouvoir visualiser leur future coiffure ! Cela a considérablement réduit les déceptions et augmenté notre satisfaction client de 40%.",
                avatar: "/avatars/avatar-1.jpg"
              },
              {
                name: "Sophie Martin",
                salon: "Studio Hair Design",
                ville: "Marseille",
                stars: 5,
                text: "La tablette est devenue indispensable dans notre salon. Les consultations sont plus rapides et nos clients repartent convaincus de leur choix.",
                avatar: "/avatars/avatar-2.jpg"
              },
              {
                name: "Julie Rousseau",
                salon: "Beauty & Style",
                ville: "Bordeaux",
                stars: 5,
                text: "Le widget sur notre site web nous apporte 3 nouveaux clients par semaine ! C'est un excellent outil marketing qui se rentabilise rapidement.",
                avatar: "/avatars/avatar-3.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.salon}, {testimonial.ville}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
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

      {/* Section Formulaire de Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Demandez votre démonstration gratuite</h2>
              <p className="text-lg text-gray-700">
                Nos experts vous contactent sous 24h pour organiser une présentation personnalisée dans votre salon.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <ContactCoiffureForm selectedPlan={selectedPlan} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à révolutionner votre salon de coiffure ?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Rejoignez les centaines de salons qui ont déjà adopté notre technologie pour enchanter leurs clients.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-purple-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander une démonstration
              </Link>
              <Link
                href="#demo"
                className="inline-block px-8 py-3 rounded-full border-2 border-white text-white font-semibold shadow-lg hover:bg-white/10 transition-colors text-lg"
              >
                Voir la démo
              </Link>
            </div>
            <div className="mt-8 flex justify-center items-center space-x-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Salons partenaires</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-sm">Essayages réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Container pour le popup photobooth */}
      <div id="photobooth-popup-container"></div>
      
      {/* Script pour le bouton popup photobooth */}
      <Script id="photobooth-popup-script" strategy="afterInteractive">
        {`
          (function() {
            // Configuration du popup
            const photoboothConfig = {
              url: "https://localhost:3000/photobooth-coiffure/coiffure003",
              buttonText: "📸 Photobooth",
              buttonColor: "#7f5af0",
              popupWidth: "480px",
              popupHeight: "720px", // Augmenté de 600px à 720px pour réduire le scroll
              useNewWindow: false // Changez à true pour forcer l'ouverture en nouvelle fenêtre
            };

            // CSS pour le popup
            const styles = \`
              #photobooth-trigger-btn {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: \${photoboothConfig.buttonColor};
                color: white;
                border: none;
                border-radius: 50px;
                padding: 15px 20px;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 9998;
                transition: all 0.3s ease;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              }
              
              #photobooth-trigger-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(0,0,0,0.2);
              }
              
              #photobooth-popup {
                position: fixed;
                bottom: 90px;
                right: 20px;
                width: \${photoboothConfig.popupWidth};
                height: \${photoboothConfig.popupHeight};
                background: white;
                border-radius: 12px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                z-index: 9999;
                display: none;
                overflow: hidden;
                border: 2px solid \${photoboothConfig.buttonColor};
              }
              
              #photobooth-popup.show {
                display: block;
                animation: slideUp 0.3s ease;
              }
              
              #photobooth-popup iframe {
                width: 100%;
                height: 100%;
                border: none;
              }
              
              #photobooth-close-btn {
                position: absolute;
                top: 10px;
                right: 10px;
                background: rgba(0,0,0,0.7);
                color: white;
                border: none;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                cursor: pointer;
                font-size: 18px;
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              
              #photobooth-newwindow-btn {
                position: absolute;
                top: 10px;
                left: 10px;
                background: rgba(127, 90, 240, 0.9);
                color: white;
                border: none;
                border-radius: 15px;
                padding: 5px 10px;
                font-size: 12px;
                cursor: pointer;
                z-index: 10000;
                transition: all 0.3s ease;
              }
              
              #photobooth-newwindow-btn:hover {
                background: rgba(127, 90, 240, 1);
                transform: scale(1.05);
              }
              
              /* Notification d'aide pour la caméra */
              #camera-help-notification {
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(255, 193, 7, 0.95);
                color: #856404;
                padding: 8px 12px;
                border-radius: 8px;
                font-size: 11px;
                font-weight: 500;
                z-index: 10001;
                display: none;
                text-align: center;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                border: 1px solid #ffeaa7;
              }
              
              @keyframes slideUp {
                from { 
                  opacity: 0; 
                  transform: translateY(20px) scale(0.95); 
                }
                to { 
                  opacity: 1; 
                  transform: translateY(0) scale(1); 
                }
              }
              
              /* Responsive pour mobile */
              @media (max-width: 768px) {
                #photobooth-popup {
                  bottom: 0;
                  right: 0;
                  left: 0;
                  width: 100% !important;
                  height: 85vh !important; /* Augmenté de 80vh à 85vh pour plus d'espace */
                  border-radius: 12px 12px 0 0;
                  max-height: 90vh; /* Hauteur maximale pour éviter les débordements */
                }
                
                #photobooth-trigger-btn {
                  bottom: 15px;
                  right: 15px;
                  padding: 12px 16px;
                  font-size: 14px;
                }
              }
              
              /* Optimisation pour tablettes */
              @media (max-width: 1024px) and (min-width: 769px) {
                #photobooth-popup {
                  width: 500px !important;
                  height: 750px !important;
                }
              }
            \`;

            // Injection du CSS
            const styleSheet = document.createElement('style');
            styleSheet.textContent = styles;
            document.head.appendChild(styleSheet);

            // Fonction pour ouvrir en nouvelle fenêtre
            function openInNewWindow() {
              const screenWidth = window.screen.width;
              const screenHeight = window.screen.height;
              const windowWidth = Math.min(1200, screenWidth * 0.8);
              const windowHeight = Math.min(800, screenHeight * 0.8);
              const left = (screenWidth - windowWidth) / 2;
              const top = (screenHeight - windowHeight) / 2;
              
              const windowFeatures = [
                \`width=\${windowWidth}\`,
                \`height=\${windowHeight}\`,
                \`left=\${left}\`,
                \`top=\${top}\`,
                'resizable=yes',
                'scrollbars=yes',
                'status=no',
                'menubar=no',
                'toolbar=no',
                'location=no'
              ].join(',');
              
              const photoboothWindow = window.open(photoboothConfig.url, 'photobooth', windowFeatures);
              if (photoboothWindow) {
                photoboothWindow.focus();
              } else {
                alert('Les popups sont bloqués. Veuillez autoriser les popups pour ce site.');
              }
            }

            // Création du bouton trigger
            const triggerBtn = document.createElement('button');
            triggerBtn.id = 'photobooth-trigger-btn';
            triggerBtn.textContent = photoboothConfig.buttonText;
            
            // Création du popup
            const popup = document.createElement('div');
            popup.id = 'photobooth-popup';
            
            const closeBtn = document.createElement('button');
            closeBtn.id = 'photobooth-close-btn';
            closeBtn.innerHTML = '&times;';
            
            const newWindowBtn = document.createElement('button');
            newWindowBtn.id = 'photobooth-newwindow-btn';
            newWindowBtn.innerHTML = '🚀 Nouvelle fenêtre';
            newWindowBtn.title = 'Ouvrir dans une nouvelle fenêtre pour un meilleur accès caméra';
            
            // Notification d'aide pour la caméra
            const cameraHelp = document.createElement('div');
            cameraHelp.id = 'camera-help-notification';
            cameraHelp.innerHTML = '💡 Caméra bloquée ? Cliquez sur "Nouvelle fenêtre" ↑';
            
            const iframe = document.createElement('iframe');
            iframe.src = photoboothConfig.url;
            iframe.title = 'Photobooth';
            // Permissions étendues pour un meilleur accès à la caméra
            iframe.setAttribute('allow', 'camera *; microphone *; autoplay; encrypted-media; fullscreen; picture-in-picture; display-capture; geolocation');
            iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms allow-modals allow-presentation allow-downloads');
            // Ajout de l'attribut importance pour prioriser le chargement
            iframe.setAttribute('importance', 'high');
            iframe.setAttribute('loading', 'eager');
            
            popup.appendChild(closeBtn);
            popup.appendChild(newWindowBtn);
            popup.appendChild(cameraHelp);
            popup.appendChild(iframe);
            
            // Ajout au DOM
            document.body.appendChild(triggerBtn);
            document.body.appendChild(popup);
            
            // Gestion des événements
            triggerBtn.addEventListener('click', function() {
              if (photoboothConfig.useNewWindow) {
                openInNewWindow();
              } else {
                popup.classList.add('show');
                // Message d'aide pour l'accès caméra
                setTimeout(() => {
                  console.log('💡 Astuce: Si la caméra ne s\\'active pas, utilisez le bouton "Nouvelle fenêtre" pour un accès garanti.');
                }, 1000);
                
                // Afficher la notification d'aide après 8 secondes
                setTimeout(() => {
                  if (popup.classList.contains('show')) {
                    cameraHelp.style.display = 'block';
                    // Masquer la notification après 5 secondes
                    setTimeout(() => {
                      cameraHelp.style.display = 'none';
                    }, 5000);
                  }
                }, 8000);
              }
            });
            
            closeBtn.addEventListener('click', function() {
              popup.classList.remove('show');
              cameraHelp.style.display = 'none'; // Masquer la notification
            });
            
            newWindowBtn.addEventListener('click', function() {
              popup.classList.remove('show');
              cameraHelp.style.display = 'none'; // Masquer la notification
              openInNewWindow();
            });
            
            // Fermer en cliquant à l'extérieur
            document.addEventListener('click', function(e) {
              if (!popup.contains(e.target) && e.target !== triggerBtn) {
                popup.classList.remove('show');
                cameraHelp.style.display = 'none'; // Masquer la notification
              }
            });
          })();
        `}
      </Script>
    </>
  );
}
