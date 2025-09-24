'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Box, CheckCircle, Camera, Zap, Smartphone, Palette, Clock, Download, Image as ImageIcon } from 'lucide-react';

export default function KitPhotobooth() {
  // Définir les features
  const features = [
    "Configuration automatique en 2 minutes",
    "Toutes les fonctionnalités IA intégrées",
    "Compatible avec tous les événements",
    "Support technique inclus",
    "Livraison express en 24h"
  ];

  // Définir les éléments de la tablette
  const tabletFeatures = [
    {
      title: "Tablette iPad Pro 12,9 pouces",
      description: "Tablette haute performance avec écran Liquid Retina XDR, puce M2 et caméra TrueDepth pour une reconnaissance faciale ultra-précise.",
      icon: <Smartphone className="w-10 h-10 text-violet-600" />,
      image: "/kit-photobooth/tablet.jpg"
    },
    {
      title: "Application WaiBooth préinstallée",
      description: "Interface intuitive avec plus de 500 filtres IA, photomosaïque en temps réel, galerie intelligente et partage instantané.",
      icon: <Camera className="w-10 h-10 text-violet-600" />,
      image: "/kit-photobooth/kit (1).jpg"
    },
    {
      title: "Support ajustable intégré",
      description: "Support pliable et ajustable en hauteur intégré à la coque de protection, stable et discret pour tous types d'événements.",
      icon: <Box className="w-10 h-10 text-violet-600" />,
      image: "/kit-photobooth/support.jpg"
    },
    {
      title: "Caméra haute résolution 13MP",
      description: "Capteur Ultra Wide 13 mégapixels pour des photos d'une netteté exceptionnelle et des détails parfaits même après transformation IA.",
      icon: <Zap className="w-10 h-10 text-violet-600" />,
      image: "/kit-photobooth/kit (2).jpg"
    },
    {
      title: "Impression sans fil instantanée",
      description: "Connexion directe avec les imprimantes compatibles pour l'impression immédiate des photos personnalisées par l'IA.",
      icon: <Download className="w-10 h-10 text-violet-600" />,
      image: "/kit-photobooth/printer.jpg"
    },
    {
      title: "Interface personnalisable",
      description: "Branding complet aux couleurs de votre événement, logos personnalisés et écrans d'accueil sur mesure disponibles.",
      icon: <Palette className="w-10 h-10 text-violet-600" />,
      image: "/kit-photobooth/option-branding.jpg"
    }
  ];

  // Étapes de configuration
  const setupSteps = [
    {
      step: "1",
      title: "Allumez la tablette",
      description: "Appuyez sur le bouton d'allumage, l'application WaiBooth se lance automatiquement.",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      step: "2",
      title: "Positionnez la tablette",
      description: "Dépliez le support intégré et ajustez l'angle et la hauteur selon votre besoin.",
      icon: <Box className="w-8 h-8 text-white" />
    },
    {
      step: "3",
      title: "Connectez vos services",
      description: "Activez l'impression sans fil ou le partage sur réseaux sociaux en un clic.",
      icon: <Smartphone className="w-8 h-8 text-white" />
    },
    {
      step: "4",
      title: "Commencez à capturer",
      description: "Votre photobooth est prêt ! Les invités peuvent commencer à prendre des photos immédiatement.",
      icon: <Camera className="w-8 h-8 text-white" />
    }
  ];

  // Avantages
  const advantages = [
    {
      title: "Plug & Play",
      description: "Aucune configuration complexe, tout est préinstallé et prêt à l'emploi en 2 minutes.",
      icon: <Zap className="w-6 h-6 text-violet-600" />
    },
    {
      title: "Ultra portable",
      description: "Seulement 1,2 kg avec support intégré, se glisse facilement dans un sac de transport.",
      icon: <Box className="w-6 h-6 text-violet-600" />
    },
    {
      title: "Support technique",
      description: "Assistance téléphonique pendant les événements et chat en direct disponible 24h/24.",
      icon: <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 10h-4V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z" />
      </svg>
    },
    {
      title: "Mises à jour automatiques",
      description: "Nouveaux filtres IA et fonctionnalités ajoutés chaque mois via mises à jour cloud.",
      icon: <Download className="w-6 h-6 text-violet-600" />
    }
  ];

  // Témoignages
  const testimonials = [
    {
      quote: "En tant que wedding planner, je cherchais une solution simple mais professionnelle. Le Kit Express a été parfait pour mes besoins, ultra-facile à installer entre deux préparatifs.",
      author: "Émilie Bertrand",
      role: "Wedding Planner - Paris",
      image: "/testimonials/testimonial-kit-1.jpg"
    },
    {
      quote: "La qualité des photos et la simplicité d'utilisation sont exceptionnelles. Mes clients sont toujours impressionnés par les créations IA qui rendent chaque événement unique.",
      author: "Thomas Renaud",
      role: "Photographe événementiel",
      image: "/testimonials/testimonial-kit-2.jpg"
    },
    {
      quote: "J'organise des événements corporate toute l'année. Ce kit est devenu un élément indispensable qui ajoute une touche mémorable et interactive à chaque soirée.",
      author: "Sophie Martinez",
      role: "Directrice événementiel - AgencePro",
      image: "/testimonials/testimonial-kit-3.jpg"
    }
  ];

  // Options d'achat
  const purchaseOptions = [
    {
      title: "Location événement",
      price: "99€",
      period: "/jour",
      description: "Location ponctuelle pour un événement spécifique, livraison et récupération incluses. Tablette prête à l'emploi.",
      features: [
        "Tablette préinstallée et configurée",
        "Support technique pendant l'événement",
        "Livraison et récupération incluses",
        "Accessoires de nettoyage fournis",
        "Assurance tous risques incluse"
      ],
      cta: "Réserver",
      popular: true
    },
    {
      title: "Location longue durée",
      price: "199€",
      period: "/mois",
      description: "Location mensuelle avec possibilité d'achat. Maintenance et mises à jour incluses.",
      features: [
        "Engagement minimum 3 mois",
        "Maintenance préventive incluse",
        "Remplacement sous 24h en cas de panne",
        "Mises à jour logicielles automatiques",
        "Option d'achat après 12 mois (-30% du prix)"
      ],
      cta: "Souscrire"
    },
    {
      title: "Achat définitif",
      price: "1 299€",
      description: "Tablette complète avec garantie 2 ans et accès aux mises à jour pendant 24 mois. Idéal pour une utilisation régulière.",
      features: [
        "Tablette avec toutes les fonctionnalités",
        "Garantie 2 ans pièces et main d'œuvre",
        "Formation à l'utilisation (1h en visio)",
        "Support téléphonique prioritaire",
        "Mises à jour gratuites pendant 24 mois"
      ],
      cta: "Acheter"
    }
  ];

  // FAQ
  const faqItems = [
    {
      question: "La tablette fonctionne-t-elle en extérieur ?",
      answer: "Oui, la tablette est conçue pour fonctionner aussi bien en intérieur qu'en extérieur. L'éclairage LED intégré s'adapte automatiquement à la luminosité ambiante. Elle résiste aux éclaboussures mais doit être protégée en cas de forte pluie."
    },
    {
      question: "Quelle est l'autonomie de la batterie ?",
      answer: "La tablette a une autonomie d'environ 8 heures d'utilisation continue. L'éclairage LED intégré fonctionne pendant 6 heures à pleine puissance. Une batterie externe est fournie pour prolonger l'autonomie si nécessaire."
    },
    {
      question: "La tablette nécessite-t-elle une connexion Internet ?",
      answer: "Oui, une connexion Internet stable est requise pour le fonctionnement optimal du photobooth IA. Les traitements d'intelligence artificielle, les filtres avancés et la synchronisation en temps réel nécessitent une connexion active. Un accès Wi-Fi ou 4G/5G est inclus selon la formule choisie."
    },
    {
      question: "Combien de temps faut-il pour être opérationnel ?",
      answer: "La tablette est prête à l'emploi en moins de 2 minutes ! Il suffit de l'allumer, déplier le support et c'est parti. Un guide de démarrage rapide est affiché automatiquement au premier lancement."
    },
    {
      question: "Puis-je personnaliser l'interface aux couleurs de mon événement ?",
      answer: "Absolument ! L'application permet une personnalisation complète des couleurs, logos et écrans d'accueil directement depuis la tablette. Des templates prédéfinis sont disponibles pour différents types d'événements."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900"></div>
        
        {/* Animated Background Lights */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/25 rounded-full blur-3xl animate-float-fast"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8">
              <Box className="w-5 h-5 text-violet-300" />
              <span className="text-white/90 font-medium">Kit Tablette Professionnel</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Kit Photobooth
              </span>
              <br />
              <span className="text-white">Express</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Une tablette complète prête à l'emploi avec toutes les fonctionnalités IA intégrées pour créer une expérience photobooth professionnelle instantanée.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Louer une tablette</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Acheter une tablette
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Zap className="w-8 h-8 text-violet-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Configuration 2 min</h3>
                  <p className="text-gray-300 text-sm">Prêt à l'emploi instantanément</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Camera className="w-8 h-8 text-pink-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">IA Intégrée</h3>
                  <p className="text-gray-300 text-sm">500+ filtres et effets</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Smartphone className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Ultra Portable</h3>
                  <p className="text-gray-300 text-sm">Support intégré inclus</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated CSS */}
        <style jsx>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            33% { transform: translateY(-20px) translateX(10px); }
            66% { transform: translateY(10px) translateX(-5px); }
          }
          @keyframes float-medium {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            33% { transform: translateY(15px) translateX(-10px); }
            66% { transform: translateY(-10px) translateX(15px); }
          }
          @keyframes float-fast {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-15px) translateX(8px); }
          }
          .animate-float-slow {
            animation: float-slow 12s ease-in-out infinite;
          }
          .animate-float-medium {
            animation: float-medium 15s ease-in-out infinite;
          }
          .animate-float-fast {
            animation: float-fast 18s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Présentation du produit */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/kit-photobooth/kit-complet.jpg"
                  alt="Tablette Photobooth IA complète avec accessoires"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="text-sm uppercase font-bold">Location à partir de</p>
                <p className="text-2xl font-bold">9,90€/mois</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Une seule tablette, toutes les possibilités</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre tablette Photobooth IA intègre toutes les fonctionnalités nécessaires pour créer une expérience photo inoubliable. 
                Pas besoin d'équipements complexes : une tablette suffit pour transformer n'importe quel espace en photobooth professionnel.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Prête à l'emploi en 2 minutes, elle offre une interface intuitive, des filtres IA avancés, 
                et toutes les fonctionnalités de partage et d'impression pour vos événements.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Toutes les fonctionnalités intégrées</h2>
            <p className="text-lg text-gray-700">
              Une tablette complète avec tout ce qu'il faut pour un photobooth professionnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tabletFeatures.map((item, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full p-2 bg-violet-100 mr-3">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Configuration ultra-rapide en 4 étapes</h2>
            <p className="text-lg text-gray-700">
              Prête à l'emploi en moins de 2 minutes, sans compétence technique nécessaire.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {setupSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href="/demo" className="btn-secondary inline-flex items-center" target="_blank">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0zm3.5 10.5l-5 3c-.17.1-.35-.04-.35-.23v-6c0-.19.18-.33.35-.23l5 3c.17.1.17.33 0 .43z" />
                </svg>
                Voir la démo en ligne
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pourquoi choisir notre Tablette Photobooth IA</h2>
              <p className="text-lg text-gray-700 mb-8">
                Une solution révolutionnaire qui concentre toute la puissance d'un photobooth professionnel 
                dans une seule tablette élégante et performante.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Avantages principaux */}
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-lg border border-violet-100 shadow-sm">
                    <div className="rounded-full p-2 bg-violet-100 mr-3 flex-shrink-0">
                      {advantage.icon}
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-sm">{advantage.title}</h3>
                      <p className="text-gray-700 text-xs">{advantage.description}</p>
                    </div>
                  </div>
                ))}
                
                {/* Fonctionnalités IA supplémentaires */}
                <div className="flex items-start p-4 bg-white rounded-lg border border-violet-100 shadow-sm">
                  <div className="rounded-full p-2 bg-violet-100 mr-3 flex-shrink-0">
                    <Palette className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm">+500 filtres IA</h3>
                    <p className="text-gray-700 text-xs">Styles artistiques variés : pop art, aquarelle, cyberpunk, vintage et bien plus.</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-white rounded-lg border border-violet-100 shadow-sm">
                  <div className="rounded-full p-2 bg-violet-100 mr-3 flex-shrink-0">
                    <ImageIcon className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm">Photomosaïque temps réel</h3>
                    <p className="text-gray-700 text-xs">Créez des œuvres collectives où chaque photo contribue à une image globale.</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-white rounded-lg border border-violet-100 shadow-sm">
                  <div className="rounded-full p-2 bg-violet-100 mr-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm">Vidéos IA courtes</h3>
                    <p className="text-gray-700 text-xs">Créez des clips vidéo de 15 secondes transformés par l'IA en créations cinématographiques.</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-white rounded-lg border border-violet-100 shadow-sm">
                  <div className="rounded-full p-2 bg-violet-100 mr-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm">QR Code intégré</h3>
                    <p className="text-gray-700 text-xs">Les invités peuvent utiliser leur smartphone personnel via QR code pour une expérience sans contact.</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-white rounded-lg border border-violet-100 shadow-sm">
                  <div className="rounded-full p-2 bg-violet-100 mr-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm">Galerie live interactive</h3>
                    <p className="text-gray-700 text-xs">Diffusion en temps réel des créations sur écrans externes ou murs LED pour l'animation de l'événement.</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-white rounded-lg border border-violet-100 shadow-sm">
                  <div className="rounded-full p-2 bg-violet-100 mr-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 00-2 2h2a2 2 0 002-2V5a2 2 0 00-2-2H2a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm">Analytics temps réel</h3>
                    <p className="text-gray-700 text-xs">Tableaux de bord avec statistiques d'utilisation, engagement et données démographiques.</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-white rounded-lg border border-violet-100 shadow-sm">
                  <div className="rounded-full p-2 bg-violet-100 mr-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm">Collecte de leads</h3>
                    <p className="text-gray-700 text-xs">Récupérez automatiquement les emails des participants pour vos campagnes marketing.</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-white rounded-lg border border-violet-100 shadow-sm">
                  <div className="rounded-full p-2 bg-violet-100 mr-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm">Réalité augmentée</h3>
                    <p className="text-gray-700 text-xs">Intégration d'éléments virtuels 3D dans les photos pour des expériences immersives uniques.</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-white rounded-lg border border-violet-100 shadow-sm">
                  <div className="rounded-full p-2 bg-violet-100 mr-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm">Partage multicanal</h3>
                    <p className="text-gray-700 text-xs">Partage instantané sur réseaux sociaux, email, QR code ou impression directe.</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-white rounded-lg border border-violet-100 shadow-sm">
                  <div className="rounded-full p-2 bg-violet-100 mr-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm">IA adaptative</h3>
                    <p className="text-gray-700 text-xs">L'IA apprend pendant l'événement et s'adapte aux préférences des participants.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/kit-photobooth/kit (3).jpg"
                    alt="Kit photobooth en action - Mariage"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg mt-6">
                  <Image
                    src="/kit-photobooth/kit (4).jpg"
                    alt="Kit photobooth - Événement corporate"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/kit-photobooth/kit (5).jpg"
                    alt="Kit photobooth - Configuration festival"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg mt-6">
                  <Image
                    src="/kit-photobooth/kit (6).jpg"
                    alt="Kit photobooth - Utilisation soirée"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spécifications */}
      <section id="specifications" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Spécifications techniques</h2>
            <p className="text-lg text-gray-700">
              Une tablette de qualité professionnelle pour des résultats impeccables.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card bg-white overflow-hidden">
              <div className="border-b">
                <div className="flex">
                  <div className="w-1/3 p-4 bg-gray-50 font-semibold">Tablette</div>
                  <div className="w-2/3 p-4">
                    iPad Pro 12,9 pouces, 512 GB, Puce M2, Caméra TrueDepth 12MP Ultra Wide, Face ID
                  </div>
                </div>
              </div>
              <div className="border-b">
                <div className="flex">
                  <div className="w-1/3 p-4 bg-gray-50 font-semibold">Éclairage</div>
                  <div className="w-2/3 p-4">
                    LED Ring intégré à la coque, 3200-5600K, intensité variable automatique, autonomie 6h
                  </div>
                </div>
              </div>
              <div className="border-b">
                <div className="flex">
                  <div className="w-1/3 p-4 bg-gray-50 font-semibold">Support</div>
                  <div className="w-2/3 p-4">
                    Support pliable intégré, hauteur et angle ajustables, ultra-stable et discret
                  </div>
                </div>
              </div>
              <div className="border-b">
                <div className="flex">
                  <div className="w-1/3 p-4 bg-gray-50 font-semibold">Connectivité</div>
                  <div className="w-2/3 p-4">
                    Wi-Fi 6E, Bluetooth 5.3, 5G cellulaire, impression AirPrint, partage instantané
                  </div>
                </div>
              </div>
              <div className="border-b">
                <div className="flex">
                  <div className="w-1/3 p-4 bg-gray-50 font-semibold">Logiciel</div>
                  <div className="w-2/3 p-4">
                    WaiBooth.app préinstallée, +500 filtres IA, photomosaïque, galerie, partage réseaux sociaux
                  </div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="w-1/3 p-4 bg-gray-50 font-semibold">Autonomie</div>
                  <div className="w-2/3 p-4">
                    8h utilisation continue, charge rapide USB-C, batterie externe fournie (+6h)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Ce que nos clients disent</h2>
            <p className="text-lg text-gray-700">
              Des professionnels de l'événementiel qui utilisent notre kit au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card bg-white p-6">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact pour acquisition */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Box className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Photobooth avec Tablette Intégrée
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Solutions complètes de location ou d'achat de photobooths avec tablettes intégrées pour tous vos événements
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="bg-gradient-to-r from-violet-100 to-indigo-100 rounded-full px-4 py-2">
                    <span className="text-violet-700 font-medium">📱 Tablette professionnelle</span>
                  </div>
                  <div className="bg-gradient-to-r from-violet-100 to-indigo-100 rounded-full px-4 py-2">
                    <span className="text-violet-700 font-medium">⚡ Configuration rapide</span>
                  </div>
                  <div className="bg-gradient-to-r from-violet-100 to-indigo-100 rounded-full px-4 py-2">
                    <span className="text-violet-700 font-medium">🎨 IA intégrée</span>
                  </div>
                  <div className="bg-gradient-to-r from-violet-100 to-indigo-100 rounded-full px-4 py-2">
                    <span className="text-violet-700 font-medium">🚚 Livraison incluse</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl p-6 mb-8">
                <p className="text-white text-lg">
                  <span className="font-semibold">Flexibilité totale :</span> Location événementielle, location longue durée ou achat définitif
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 mr-2">Demander un devis</span>
                  <svg className="w-5 h-5 relative z-10 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  href="tel:+33123456789"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-violet-700 border-2 border-violet-300 rounded-full hover:bg-violet-50 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Appel direct
                </Link>
              </div>
              
              <p className="mt-6 text-sm text-gray-500">
                Réponse sous 2h • Devis personnalisé • Conseils d'experts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-700">
              Tout ce que vous devez savoir sur notre Tablette Photobooth IA.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="card bg-white">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer vos événements ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Louez ou achetez dès aujourd'hui votre Tablette Photobooth IA et recevez-la sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Louer une tablette
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full border-2 border-white text-white font-semibold shadow-lg hover:bg-white/10 transition-colors text-lg"
              >
                Acheter une tablette
              </Link>
            </div>
            <p className="mt-8 text-sm opacity-80">
              Livraison disponible en France métropolitaine, Belgique, Suisse et Luxembourg.
              <br />Un conseiller vous contactera dans les 24h suivant votre demande pour confirmer les détails.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}


