'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, XCircle, ChevronDown, ChevronUp, Star, Crown, Zap, Users, Sparkles, Check, Tablet, Monitor, Globe, ArrowRight, Palette, Scissors, Camera, Share2 } from 'lucide-react';
import { useState } from 'react';

export default function Tarifs() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const faqData = [
    {
      question: "Comment fonctionne le système de crédits ?",
      answer: "Chaque essayage de coiffure ou couleur consomme un crédit. La consommation varie selon le modèle IA choisi : 1 crédit pour le modèle Standard, 2 crédits pour l'Avancé, et 3 crédits pour le Premium. Vos crédits se rechargent automatiquement chaque mois."
    },
    {
      question: "Puis-je changer d'abonnement à tout moment ?",
      answer: "Oui, vous pouvez changer votre abonnement à tout moment. Les changements prennent effet immédiatement et la facturation est ajustée au prorata. Les crédits non utilisés sont reportés sur le mois suivant."
    },
    {
      question: "Que se passe-t-il si j'épuise mes crédits avant la fin du mois ?",
      answer: "Vous pouvez acheter des crédits supplémentaires à tout moment : Pack 100 crédits (15€), Pack 500 crédits (65€). Vous pouvez aussi passer à une offre supérieure pour obtenir plus de crédits mensuels."
    },
    {
      question: "La tablette tactile est-elle incluse dans l'abonnement ?",
      answer: "Pour les plans Pro et Premium, vous avez le choix entre la location de tablette (9,90€/mois avec maintenance incluse) ou l'achat (149€ + abonnement logiciel). La tablette professionnelle 12\" HD tactile avec support sécurisé est incluse."
    },
    {
      question: "Puis-je intégrer le photobooth sur mon site web ?",
      answer: "Oui, à partir du plan Essentiel, vous pouvez intégrer notre widget sur votre site web. L'intégration est simple avec un code fourni, et le widget est personnalisable selon votre charte graphique."
    },
    {
      question: "Proposez-vous une période d'essai gratuite ?",
      answer: "Oui, l'offre Freemium vous permet de tester gratuitement notre service avec 3 crédits inclus. Vous pouvez également demander une démonstration personnalisée de 30 minutes dans votre salon."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section avec glassmorphism */}
      
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-6">
            <Crown className="w-4 h-4 mr-2" />
            Tarification transparente
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Choisissez Votre{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Plan Parfait
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Des solutions flexibles pour tous les types de salons de coiffure, 
            de l'indépendant aux chaînes nationales. Système de crédits transparent et sans engagement.
          </p>
        </div>
      </section>

      {/* Section Grille Tarifaire Sophistiquée */}
      <section className="py-20 relative bg-gradient-to-br from-slate-100 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Nos Offres Tarifaires</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choisissez l'offre qui correspond à vos besoins avec notre système de crédits flexible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Offre Freemium */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-gray-200"></div>
              <div className="relative p-8 text-center">
                <div className="bg-gradient-to-r from-gray-500 to-gray-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Freemium</h3>
                <p className="text-gray-600 mb-6">Parfait pour tester nos services</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">3 crédits inclus</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">Coiffures de base</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">Support communautaire</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">Résolution standard</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">0€</div>
                    <div className="text-sm text-gray-600">Gratuit</div>
                    <div className="text-xs text-gray-500 mt-1">3 crédits offerts</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg">
                  Commencer gratuitement
                </button>
              </div>
            </div>

            {/* Offre Start */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-green-200"></div>
              <div className="relative p-8 text-center">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Start</h3>
                <p className="text-gray-600 mb-6">Idéal pour commencer</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">100 crédits inclus</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">Coiffures de base</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">Support par email</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">Résolution HD</span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-4 mb-6 border border-green-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-700">19€</div>
                    <div className="text-sm text-green-600">par mois</div>
                    <div className="text-xs text-green-500 mt-1">100 crédits inclus</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg">
                  Choisir Start
                </button>
              </div>
            </div>

            {/* Offre Essentiel */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-blue-200"></div>
              <div className="relative p-8 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Tablet className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Essentiel</h3>
                <p className="text-gray-600 mb-6">Idéal pour les petits salons</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">400 crédits inclus</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">Toutes les coiffures</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">Support par email</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">Résolution HD</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-700">49€</div>
                    <div className="text-sm text-blue-600">par mois</div>
                    <div className="text-xs text-blue-500 mt-1">400 crédits inclus</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg">
                  Choisir Essentiel
                </button>
              </div>
            </div>

            {/* Offre Pro */}
            <div className="relative group scale-102">
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl border-2 border-purple-300"></div>
              <div className="relative p-8 text-center">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg whitespace-nowrap">
                    ⭐ Le plus populaire
                  </span>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300 mt-6">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Pro</h3>
                <p className="text-gray-600 mb-6">Pour les salons moyens</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">1000 crédits inclus</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">Toutes les fonctionnalités</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">Support prioritaire</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">Analytics avancées</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">Branding personnalisé</span>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 mb-6 border border-purple-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-700">89€</div>
                    <div className="text-sm text-purple-600">par mois</div>
                    <div className="text-xs text-purple-500 mt-1">1000 crédits inclus</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                  Choisir Pro
                </button>
              </div>
            </div>

            {/* Offre Premium */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-orange-200"></div>
              <div className="relative p-8 text-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Premium</h3>
                <p className="text-gray-600 mb-6">Pour les grands salons</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">1500 crédits inclus</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">Toutes les fonctionnalités Pro</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">Support dédié 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">API personnalisée</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-bold">Formation équipe incluse</span>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-4 mb-6 border border-orange-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-700">119€</div>
                    <div className="text-sm text-orange-600">par mois</div>
                    <div className="text-xs text-orange-500 mt-1">1500 crédits inclus</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg">
                  Choisir Premium
                </button>
              </div>
            </div>
          </div>

          {/* Explication du système de crédits moderne */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/30 to-gray-300/20 rounded-3xl backdrop-blur-xl border border-gray-300"></div>
            <div className="relative p-8 bg-gray-50 rounded-3xl">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Comment fonctionnent les crédits ?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">🤖</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">Consommation selon le modèle IA</h4>
                  <p className="text-gray-700 text-sm">
                    <span className="text-blue-600 font-semibold">• Standard :</span> 1 crédit par essayage
                    <br />
                    <span className="text-purple-600 font-semibold">• Avancé :</span> 2 crédits par essayage
                    <br />
                    <span className="text-pink-600 font-semibold">• Premium :</span> 3 crédits par essayage
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">📊</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">Suivi en temps réel</h4>
                  <p className="text-gray-700 text-sm">
                    Dashboard complet pour suivre votre consommation de crédits. 
                    Contrôle total de votre utilisation avec statistiques détaillées.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-teal-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">+</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">Recharge automatique</h4>
                  <p className="text-gray-700 text-sm">
                    Vos crédits se rechargent chaque mois automatiquement. 
                    Crédits non utilisés reportés sur le mois suivant.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="text-center">
                  <h4 className="text-lg font-bold mb-2 text-gray-900">💡 Besoin de plus de crédits ?</h4>
                  <p className="text-gray-700 mb-4">
                    Achetez des crédits supplémentaires à tout moment ou passez à une offre supérieure.
                  </p>
                  <div className="flex justify-center space-x-4 text-sm">
                    <span className="bg-blue-50 px-3 py-1 rounded-full text-gray-700 border border-blue-200">
                      <strong className="text-blue-600">Pack 100 crédits :</strong> 15€
                    </span>
                    <span className="bg-purple-50 px-3 py-1 rounded-full text-gray-700 border border-purple-200">
                      <strong className="text-purple-600">Pack 500 crédits :</strong> 65€
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Tableau Comparatif Moderne */}
      <section className="py-20 bg-gray-100 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Tableau Comparatif Détaillé</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comparez toutes les fonctionnalités pour choisir l'offre parfaite pour votre salon
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-3xl border border-gray-200 shadow-lg"></div>
            <div className="relative p-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-bold text-gray-900 text-lg">Fonctionnalités</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-700">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-gray-900">Freemium</span>
                        <span className="text-sm text-gray-600">0€</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-green-600">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-gray-900">Start</span>
                        <span className="text-sm text-green-600">19€/mois</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-blue-600">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-gray-900">Essentiel</span>
                        <span className="text-sm text-blue-600">49€/mois</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-purple-600">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-gray-900">Pro</span>
                        <span className="text-sm text-purple-600">89€/mois</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full mt-1">Populaire</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-orange-600">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-gray-900">Premium</span>
                        <span className="text-sm text-orange-600">119€/mois</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { 
                      feature: "Crédits mensuels inclus", 
                      freemium: "3 crédits", 
                      start: "100 crédits",
                      essentiel: "400 crédits", 
                      pro: "1000 crédits", 
                      premium: "1500 crédits" 
                    },
                    { 
                      feature: "Essayage virtuel coiffures", 
                      freemium: true, 
                      start: true,
                      essentiel: true, 
                      pro: true, 
                      premium: true 
                    },
                    { 
                      feature: "Simulation couleurs", 
                      freemium: "Limitée", 
                      start: true,
                      essentiel: true, 
                      pro: true, 
                      premium: true 
                    },
                    { 
                      feature: "Résolution d'image", 
                      freemium: "Standard", 
                      start: "HD",
                      essentiel: "HD", 
                      pro: "HD+", 
                      premium: "Ultra HD" 
                    },
                    { 
                      feature: "Bibliothèque de coiffures", 
                      freemium: "Basique (50)", 
                      start: "Basique (50)",
                      essentiel: "Complète (500+)", 
                      pro: "Complète (500+)", 
                      premium: "Complète (500+)" 
                    },
                    { 
                      feature: "Support client", 
                      freemium: "Communautaire", 
                      start: "Email",
                      essentiel: "Email", 
                      pro: "Prioritaire", 
                      premium: "Dédié 24/7" 
                    },
                    { 
                      feature: "Branding personnalisé", 
                      freemium: false, 
                      start: false,
                      essentiel: false, 
                      pro: true, 
                      premium: true 
                    },
                    { 
                      feature: "Analytics et rapports", 
                      freemium: false, 
                      start: false,
                      essentiel: "Basiques", 
                      pro: "Avancées", 
                      premium: "Complètes" 
                    },
                    { 
                      feature: "API d'intégration", 
                      freemium: false, 
                      start: false,
                      essentiel: false, 
                      pro: "Standard", 
                      premium: "Personnalisée" 
                    },
                    { 
                      feature: "Formation équipe", 
                      freemium: false, 
                      start: false,
                      essentiel: false, 
                      pro: "En ligne", 
                      premium: "Sur site incluse" 
                    },
                    { 
                      feature: "Tablette tactile", 
                      freemium: false, 
                      start: false,
                      essentiel: false, 
                      pro: "Option location 9,90€/mois", 
                      premium: "Incluse (location ou achat)" 
                    },
                    { 
                      feature: "Crédits supplémentaires", 
                      freemium: "0.25€/crédit", 
                      start: "0.22€/crédit",
                      essentiel: "0.20€/crédit", 
                      pro: "0.15€/crédit", 
                      premium: "0.10€/crédit" 
                    }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-bold text-gray-900 text-base">{row.feature}</td>
                      
                      {/* Freemium */}
                      <td className="py-4 px-4 text-center">
                        {typeof row.freemium === 'boolean' ? (
                          row.freemium ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-400 text-lg">—</span>
                          )
                        ) : (
                          <span className="text-gray-700 text-base font-semibold">{row.freemium}</span>
                        )}
                      </td>
                      
                      {/* Start */}
                      <td className="py-4 px-4 text-center">
                        {typeof row.start === 'boolean' ? (
                          row.start ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-400 text-lg">—</span>
                          )
                        ) : (
                          <span className="text-green-700 text-base font-semibold">{row.start}</span>
                        )}
                      </td>
                      
                      {/* Essentiel */}
                      <td className="py-4 px-4 text-center">
                        {typeof row.essentiel === 'boolean' ? (
                          row.essentiel ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-400 text-lg">—</span>
                          )
                        ) : (
                          <span className="text-blue-700 text-base font-semibold">{row.essentiel}</span>
                        )}
                      </td>
                      
                      {/* Pro */}
                      <td className="py-4 px-4 text-center bg-purple-50">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-400 text-lg">—</span>
                          )
                        ) : (
                          <span className="text-purple-700 text-base font-semibold">{row.pro}</span>
                        )}
                      </td>
                      
                      {/* Premium */}
                      <td className="py-4 px-4 text-center">
                        {typeof row.premium === 'boolean' ? (
                          row.premium ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-400 text-lg">—</span>
                          )
                        ) : (
                          <span className="text-orange-700 text-base font-semibold">{row.premium}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section Solution Tablette avec glassmorphism */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/30 to-gray-300/20 rounded-3xl backdrop-blur-xl border border-gray-300"></div>
            <div className="relative p-12 bg-gray-50 rounded-3xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Contenu texte */}
                <div>
                  <div className="mb-6">
                    <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-4 border border-purple-200">
                      <span className="text-purple-700 font-semibold text-sm">💡 Solution Professionnelle</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-6 text-gray-900">
                      Tablette Tactile Interactive pour Votre Salon
                    </h2>
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                      Offrez à vos clients une expérience unique avec notre tablette tactile dédiée. 
                      Ils peuvent tester et choisir leur coupe de cheveux en temps réel, directement dans votre salon.
                    </p>
                  </div>

                  {/* Avantages */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg mt-1">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">Consultation Interactive</h4>
                        <p className="text-gray-700">Visualisation instantanée, réduction des déceptions, satisfaction client maximale.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-lg mt-1">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">Gain de Temps</h4>
                        <p className="text-gray-700">Réduisez le temps de consultation jusqu'à 40% et optimisez votre planning.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-2 rounded-lg mt-1">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">Image Moderne</h4>
                        <p className="text-gray-700">Démarquez-vous avec une technologie innovante qui attire une clientèle connectée.</p>
                      </div>
                    </div>
                  </div>

                  {/* Options de tarification */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8 shadow-lg">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Solutions Flexibles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <div className="flex items-center mb-2">
                          <Tablet className="w-5 h-5 text-purple-600 mr-2" />
                          <span className="font-semibold text-purple-700">Location</span>
                        </div>
                        <div className="text-2xl font-bold text-purple-600 mb-1">9,90€</div>
                        <div className="text-sm text-purple-600">par mois</div>
                        <div className="text-xs text-purple-500 mt-1">Maintenance incluse</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <div className="flex items-center mb-2">
                          <Crown className="w-5 h-5 text-green-600 mr-2" />
                          <span className="font-semibold text-green-700">Achat</span>
                        </div>
                        <div className="text-2xl font-bold text-green-600 mb-1">149€</div>
                        <div className="text-sm text-green-600">+ 49€/mois logiciel</div>
                        <div className="text-xs text-green-500 mt-1">Garantie 2 ans</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image avec overlay moderne */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/coupe-cheveux/web006.jpg"
                      alt="Tablette tactile interactive"
                      width={600}
                      height={400}
                      className="object-cover w-full h-[400px]"
                    />
                    
                    {/* Overlays modernes */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-6 right-6">
                      <div className="bg-green-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-xl">
                        <div className="flex items-center space-x-2">
                          <Tablet className="w-4 h-4" />
                          <div className="text-center">
                            <div className="text-xs font-medium">À partir de</div>
                            <div className="text-sm font-bold">9,90€/mois</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <h4 className="text-lg font-bold mb-2 text-white">Tablette Professionnelle</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                          <div>Écran 12" HD Tactile</div>
                          <div>Support Ajustable</div>
                          <div>WiFi + 4G</div>
                          <div>Garantie 2 ans</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Questions Fréquentes</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Trouvez rapidement des réponses à vos questions sur nos tarifs et fonctionnalités
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-white rounded-xl shadow-lg border border-gray-200"></div>
                <div className="relative">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA final */}
          <div className="text-center mt-16">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-100 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Prêt à Révolutionner{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Votre Salon ?
                  </span>
                </h3>
                <p className="text-xl text-gray-700 mb-8">
                  Rejoignez plus de <span className="text-purple-600 font-bold">500 salons</span> qui utilisent déjà notre technologie IA.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg group"
                  >
                    <span>Demander une démo</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/photobooth-coiffure"
                    className="inline-flex items-center px-8 py-4 rounded-2xl border-2 border-purple-600 text-purple-700 font-semibold hover:bg-purple-100 transition-all duration-300 text-lg"
                  >
                    Voir la technologie
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
