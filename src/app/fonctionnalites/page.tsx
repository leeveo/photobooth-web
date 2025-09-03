'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Camera, Users, Palette, Share2, Download, Settings, 
  Zap, Monitor, Globe, Shield, Cloud, BarChart3,
  QrCode, Video, Sparkles, Smartphone, Wand2, Eye,
  ArrowRight, Check, Star, Heart, TrendingUp, Target
} from 'lucide-react';
import { useState, useEffect } from 'react';

const mainFeatures = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Photobooth IA Avancé",
    description: "Transformez instantanément vos photos avec plus de 300 styles artistiques alimentés par l'intelligence artificielle.",
    image: "/features/pixelmotion.jpg",
    benefits: ["Transformations en temps réel", "300+ styles disponibles", "Qualité professionnelle", "Interface intuitive"]
  },
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: "Photobooth Coiffure IA",
    description: "Révolutionnez l'expérience salon avec l'essayage virtuel de coupes de cheveux en temps réel grâce à l'IA.",
    image: "/coupe-cheveux/pixie001.jpg",
    benefits: ["Essayage virtuel instantané", "50+ coupes disponibles", "Visualisation temps réel", "Parfait pour salons"]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Studio de Création",
    description: "Un espace créatif complet pour personnaliser vos expériences photo avec des templates, cadres et overlays.",
    image: "/blog/ai-after.jpg",
    benefits: ["Templates personnalisables", "Bibliothèque de ressources", "Éditeur intuitif", "Prévisualisations live"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Galerie Live Collaborative",
    description: "Affichez en temps réel toutes les photos prises pendant votre événement sur écrans et totems.",
    image: "/galerie-live/gallery-hero.jpg",
    benefits: ["Affichage multi-écrans", "Synchronisation temps réel", "Modération automatique", "Engagement maximum"]
  }
];

const additionalFeatures = [
  {
    icon: <QrCode className="w-6 h-6" />,
    title: "QR Code & Partage",
    description: "Partage instantané via QR codes et réseaux sociaux",
    category: "Partage"
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Stockage Cloud",
    description: "Sauvegarde automatique et accès sécurisé à vos médias",
    category: "Stockage"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analytics Avancés",
    description: "Statistiques détaillées et insights sur vos événements",
    category: "Analytics"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Sécurité & RGPD",
    description: "Conformité RGPD et protection des données utilisateurs",
    category: "Sécurité"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "API & Intégrations",
    description: "Intégration facile avec vos systèmes existants",
    category: "Technique"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Multi-Plateforme",
    description: "Compatible tablettes, smartphones et ordinateurs",
    category: "Compatibilité"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Marque Blanche",
    description: "Solution personnalisable avec votre identité visuelle",
    category: "Personnalisation"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance Optimisée",
    description: "Traitement ultra-rapide même avec de gros volumes",
    category: "Performance"
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Interface Intuitive",
    description: "Design pensé pour une expérience utilisateur exceptionnelle",
    category: "UX/UI"
  }
];

const useCases = [
  {
    title: "Salons de Coiffure",
    description: "Essayage virtuel de coupes avec IA",
    image: "/coupe-cheveux/web001.jpg",
    features: ["Essayage temps réel", "50+ styles de coupes", "Avant/Après comparaison"]
  },
  {
    title: "Événements Corporate",
    description: "Conférences, séminaires, team building",
    image: "/event/professional-props.jpg",
    features: ["Branding personnalisé", "Analytics détaillés", "Intégration CRM"]
  },
  {
    title: "Mariages & Célébrations",
    description: "Créez des souvenirs inoubliables",
    image: "/event/gallery-wall.jpg",
    features: ["Galerie partagée", "Livre d'or digital", "Partage famille"]
  },
  {
    title: "Retail & Commerce",
    description: "Expérience client immersive",
    image: "/event/ar-experience.jpg",
    features: ["Try-before-buy", "Social media boost", "Fidélisation client"]
  }
];

export default function Fonctionnalites() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = ["Tous", "Partage", "Stockage", "Analytics", "Sécurité", "Technique", "Compatibilité", "Personnalisation", "Performance", "UX/UI"];

  const filteredFeatures = selectedCategory === "Tous" 
    ? additionalFeatures 
    : additionalFeatures.filter(feature => feature.category === selectedCategory);

  // Auto-rotation des fonctionnalités principales
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % mainFeatures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Texte à gauche */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Fonctionnalités
                </span>
                <span className="text-gray-800"> : Une plateforme complète</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Découvrez toutes les fonctionnalités de notre plateforme SaaS de photobooth IA, conçue pour révolutionner vos événements et engager vos audiences.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-gray-700">+300 styles IA</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-gray-700">Multi-utilisateurs</span>
                </div>
                <div className="flex items-center">
                  <Cloud className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">100% Cloud</span>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="https://photobooth.waibooth.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg hover:from-violet-700 hover:to-indigo-700 transition-colors text-lg"
                >
                  Essayer gratuitement
                </Link>
              </div>
            </div>
            
            {/* Image/Demo à droite */}
            <div className="relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[3/4] h-[600px]">
                <div className="absolute inset-0 w-full h-full">
                  {mainFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out
                        ${index === activeFeature ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <Image 
                        src={feature.image}
                        alt={feature.title}
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
                      <div className="text-white mr-2">
                        {mainFeatures[activeFeature]?.icon}
                      </div>
                      <h3 className="text-white text-xl font-bold">
                        {mainFeatures[activeFeature]?.title}
                      </h3>
                    </div>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">
                      {mainFeatures[activeFeature]?.description}
                    </p>
                    
                    {/* Indicateurs */}
                    <div className="flex space-x-2 mt-4">
                      {mainFeatures.map((_, index) => (
                        <button 
                          key={index}
                          onClick={() => setActiveFeature(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 
                            ${index === activeFeature ? 'bg-white w-4' : 'bg-white/50'}`}
                          aria-label={`Voir la fonctionnalité ${index + 1}`}
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

      {/* Fonctionnalités principales */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Fonctionnalités principales</h2>
            <p className="text-lg text-gray-700">
              Des outils puissants pour créer des expériences photo inoubliables
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="aspect-video relative">
                  <Image 
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-violet-600">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
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
              Processus simplifié
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-300">
              Un workflow révolutionnaire en 5 étapes pour des résultats extraordinaires
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
                  description: "Interface intuitive et capture instantanée",
                  image: "/steps/step-1.png",
                  color: "from-purple-500 to-pink-500",
                  icon: <Camera className="w-4 h-4" />
                },
                {
                  step: "02", 
                  title: "Choisissez un style",
                  description: "Plus de 300 styles IA créatifs",
                  image: "/steps/step-2.png",
                  color: "from-blue-500 to-purple-500",
                  icon: <Palette className="w-4 h-4" />
                },
                {
                  step: "03",
                  title: "IA en action",
                  description: "Transformation magique instantanée",
                  image: "/steps/step-3.png",
                  color: "from-green-500 to-blue-500",
                  icon: <Sparkles className="w-4 h-4" />
                },
                {
                  step: "04",
                  title: "Résultat magique",
                  description: "Votre chef-d'œuvre unique est prêt",
                  image: "/steps/step-4.png",
                  color: "from-orange-500 to-red-500",
                  icon: <Star className="w-4 h-4" />
                },
                {
                  step: "05",
                  title: "Partagez & Téléchargez",
                  description: "Diffusion instantanée haute qualité",
                  image: "/steps/step-5.png",
                  color: "from-pink-500 to-purple-500",
                  icon: <Share2 className="w-4 h-4" />
                }
              ].map((step, index) => (
                <div key={index} className="relative group">
                  {/* Point sur la timeline avec icône */}
                  <div className="absolute left-4 md:left-1/2 md:top-1/2 w-8 h-8 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white z-20 shadow-lg border-2 border-white">
                    {step.icon}
                  </div>
                  
                  {/* Card avec image grande */}
                  <div className="ml-12 md:ml-0 md:mt-12 group-hover:transform group-hover:-translate-y-2 transition-all duration-500">
                    {/* Image principale - beaucoup plus grande */}
                    <div className="relative mb-6 mx-auto w-32 h-32 md:w-40 md:h-40">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 group-hover:scale-105`}></div>
                      <div className="relative p-6 md:p-8 h-full flex items-center justify-center">
                        <Image 
                          src={step.image}
                          alt={step.title}
                          width={120}
                          height={120}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      {/* Badge étape avec style moderne */}
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                        {step.step}
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/20">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Wand2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Simple, Rapide, <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Magique !</span>
                </h3>
                <p className="text-xl text-gray-300 mb-8">
                  En moins de <span className="text-purple-400 font-bold">30 secondes</span>, transformez n'importe quelle photo en chef-d'œuvre artistique unique.
                </p>
                <Link
                  href="https://photobooth.waibooth.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg group"
                >
                  <span>Essayer maintenant</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités additionnelles */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Fonctionnalités avancées</h2>
            <p className="text-lg text-gray-700 mb-8">
              Une suite complète d'outils pour optimiser vos événements
            </p>
            
            {/* Filtres par catégorie */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${selectedCategory === category 
                      ? 'bg-violet-600 text-white' 
                      : 'bg-white text-violet-600 hover:bg-violet-100'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feature, index) => (
              <div key={index} className="card bg-white p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600 mr-3 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-violet-600 bg-violet-100 px-2 py-1 rounded-full">
                      {feature.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Adapté à tous vos événements</h2>
            <p className="text-lg text-gray-700">
              Notre plateforme s'adapte à tous types d'événements et secteurs d'activité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="aspect-video relative">
                  <Image 
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                      <p className="text-white/90 text-sm">{useCase.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <Target className="w-4 h-4 text-violet-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Pourquoi choisir notre plateforme ?</h2>
            <p className="text-lg text-gray-700">
              Les avantages qui font la différence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "ROI Mesurable",
                description: "Analytics détaillés pour mesurer l'impact de vos événements"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Engagement Maximum",
                description: "Expériences interactives qui marquent vos invités"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Déploiement Rapide",
                description: "Configuration en quelques minutes, pas d'installation"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Sécurité Garantie",
                description: "Conformité RGPD et protection des données"
              }
            ].map((advantage, index) => (
              <div key={index} className="card bg-white p-6 text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 mx-auto mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à révolutionner vos événements ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Découvrez toutes nos fonctionnalités avec notre offre freemium.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://photobooth.waibooth.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg inline-flex items-center justify-center"
              >
                <span>Offre freemium - 3 crédits offerts</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full border-2 border-white text-white font-semibold shadow-lg hover:bg-white/10 transition-colors text-lg"
              >
                Demander une démo
              </Link>
            </div>
            <p className="text-sm opacity-75 mt-4">
              Aucune carte de crédit requise • Configuration en 5 minutes
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
