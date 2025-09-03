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
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Nos Offres Tarifaires</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choisissez l'offre qui correspond à vos besoins avec notre système de crédits flexible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Offre Freemium */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-xl border border-white/20"></div>
              <div className="relative p-8 text-center">
                <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Freemium</h3>
                <p className="text-gray-300 mb-6">Parfait pour tester nos services</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">3 crédits inclus</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">Coiffures de base</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">Support communautaire</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">Résolution standard</span>
                  </div>
                </div>

                <div className="bg-black/20 rounded-xl p-4 mb-6 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">0€</div>
                    <div className="text-sm text-gray-300">Gratuit</div>
                    <div className="text-xs text-gray-400 mt-1">3 crédits offerts</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-gray-400 to-gray-600 text-white py-3 rounded-xl font-semibold hover:from-gray-500 hover:to-gray-700 transition-all duration-300 shadow-lg">
                  Commencer gratuitement
                </button>
              </div>
            </div>

            {/* Offre Essentiel */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-3xl backdrop-blur-xl border border-blue-400/30"></div>
              <div className="relative p-8 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Tablet className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Essentiel</h3>
                <p className="text-gray-300 mb-6">Idéal pour les petits salons</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">200 crédits inclus</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">Toutes les coiffures</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">Support par email</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">Résolution HD</span>
                  </div>
                </div>

                <div className="bg-blue-500/20 rounded-xl p-4 mb-6 backdrop-blur-sm border border-blue-400/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">49€</div>
                    <div className="text-sm text-gray-300">par mois</div>
                    <div className="text-xs text-gray-400 mt-1">200 crédits inclus</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg">
                  Choisir Essentiel
                </button>
              </div>
            </div>

            {/* Offre Pro */}
            <div className="relative group scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-purple-600/20 rounded-3xl backdrop-blur-xl border-2 border-purple-400/50 shadow-2xl"></div>
              <div className="relative p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    ⭐ Le plus populaire
                  </span>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300 mt-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
                <p className="text-gray-300 mb-6">Pour les salons moyens</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">500 crédits inclus</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">Toutes les fonctionnalités</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">Support prioritaire</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">Analytics avancées</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">Branding personnalisé</span>
                  </div>
                </div>

                <div className="bg-purple-500/20 rounded-xl p-4 mb-6 backdrop-blur-sm border border-purple-400/30">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">79€</div>
                    <div className="text-sm text-gray-300">par mois</div>
                    <div className="text-xs text-gray-400 mt-1">500 crédits inclus</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                  Choisir Pro
                </button>
              </div>
            </div>

            {/* Offre Premium */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/10 rounded-3xl backdrop-blur-xl border border-orange-400/30"></div>
              <div className="relative p-8 text-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Premium</h3>
                <p className="text-gray-300 mb-6">Pour les grands salons</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">1200 crédits inclus</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">Toutes les fonctionnalités Pro</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">Support dédié 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">API personnalisée</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">Formation équipe incluse</span>
                  </div>
                </div>

                <div className="bg-orange-500/20 rounded-xl p-4 mb-6 backdrop-blur-sm border border-orange-400/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">129€</div>
                    <div className="text-sm text-gray-300">par mois</div>
                    <div className="text-xs text-gray-400 mt-1">1200 crédits inclus</div>
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
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-xl border border-white/20"></div>
            <div className="relative p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-white">Comment fonctionnent les crédits ?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">🤖</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">Consommation selon le modèle IA</h4>
                  <p className="text-gray-300 text-sm">
                    <span className="text-blue-400 font-semibold">• Standard :</span> 1 crédit par essayage
                    <br />
                    <span className="text-purple-400 font-semibold">• Avancé :</span> 2 crédits par essayage
                    <br />
                    <span className="text-pink-400 font-semibold">• Premium :</span> 3 crédits par essayage
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">📊</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">Suivi en temps réel</h4>
                  <p className="text-gray-300 text-sm">
                    Dashboard complet pour suivre votre consommation de crédits. 
                    Contrôle total de votre utilisation avec statistiques détaillées.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-teal-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">+</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">Recharge automatique</h4>
                  <p className="text-gray-300 text-sm">
                    Vos crédits se rechargent chaque mois automatiquement. 
                    Crédits non utilisés reportés sur le mois suivant.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20">
                <div className="text-center">
                  <h4 className="text-lg font-bold mb-2 text-white">💡 Besoin de plus de crédits ?</h4>
                  <p className="text-gray-300 mb-4">
                    Achetez des crédits supplémentaires à tout moment ou passez à une offre supérieure.
                  </p>
                  <div className="flex justify-center space-x-4 text-sm">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-gray-300 backdrop-blur-sm">
                      <strong className="text-blue-400">Pack 100 crédits :</strong> 15€
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-gray-300 backdrop-blur-sm">
                      <strong className="text-purple-400">Pack 500 crédits :</strong> 65€
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Tableau Comparatif Moderne */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Tableau Comparatif Détaillé</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comparez toutes les fonctionnalités pour choisir l'offre parfaite pour votre salon
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-xl border border-white/20"></div>
            <div className="relative p-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-white/20">
                    <th className="text-left py-4 px-6 font-bold text-white text-lg">Fonctionnalités</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-300">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-white">Freemium</span>
                        <span className="text-sm text-gray-400">0€</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-blue-400">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-white">Essentiel</span>
                        <span className="text-sm text-blue-400">49€/mois</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-purple-400">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-white">Pro</span>
                        <span className="text-sm text-purple-400">79€/mois</span>
                        <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full mt-1 backdrop-blur-sm">Populaire</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-orange-400">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-white">Premium</span>
                        <span className="text-sm text-orange-400">129€/mois</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { 
                      feature: "Crédits mensuels inclus", 
                      freemium: "3 crédits", 
                      essentiel: "200 crédits", 
                      pro: "500 crédits", 
                      premium: "1200 crédits" 
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
                      feature: "Tablette tactile", 
                      freemium: false, 
                      essentiel: false, 
                      pro: "Option location 9,90€/mois", 
                      premium: "Incluse (location ou achat)" 
                    },
                    { 
                      feature: "Crédits supplémentaires", 
                      freemium: "0.25€/crédit", 
                      essentiel: "0.20€/crédit", 
                      pro: "0.15€/crédit", 
                      premium: "0.10€/crédit" 
                    }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                      <td className="py-4 px-6 font-bold text-white text-base">{row.feature}</td>
                      
                      {/* Freemium */}
                      <td className="py-4 px-4 text-center">
                        {typeof row.freemium === 'boolean' ? (
                          row.freemium ? (
                            <Check className="w-6 h-6 text-green-400 mx-auto" />
                          ) : (
                            <span className="text-gray-500 text-lg">—</span>
                          )
                        ) : (
                          <span className="text-gray-300 text-base font-semibold">{row.freemium}</span>
                        )}
                      </td>
                      
                      {/* Essentiel */}
                      <td className="py-4 px-4 text-center">
                        {typeof row.essentiel === 'boolean' ? (
                          row.essentiel ? (
                            <Check className="w-6 h-6 text-green-400 mx-auto" />
                          ) : (
                            <span className="text-gray-500 text-lg">—</span>
                          )
                        ) : (
                          <span className="text-blue-300 text-base font-semibold">{row.essentiel}</span>
                        )}
                      </td>
                      
                      {/* Pro */}
                      <td className="py-4 px-4 text-center bg-purple-500/10">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? (
                            <Check className="w-6 h-6 text-green-400 mx-auto" />
                          ) : (
                            <span className="text-gray-500 text-lg">—</span>
                          )
                        ) : (
                          <span className="text-purple-300 text-base font-semibold">{row.pro}</span>
                        )}
                      </td>
                      
                      {/* Premium */}
                      <td className="py-4 px-4 text-center">
                        {typeof row.premium === 'boolean' ? (
                          row.premium ? (
                            <Check className="w-6 h-6 text-green-400 mx-auto" />
                          ) : (
                            <span className="text-gray-500 text-lg">—</span>
                          )
                        ) : (
                          <span className="text-orange-300 text-base font-semibold">{row.premium}</span>
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
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/10 rounded-3xl backdrop-blur-xl border border-purple-400/30"></div>
            <div className="relative p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Contenu texte */}
                <div>
                  <div className="mb-6">
                    <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-full mb-4 backdrop-blur-sm border border-purple-400/30">
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

                  {/* Avantages */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg mt-1">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white">Consultation Interactive</h4>
                        <p className="text-gray-300">Visualisation instantanée, réduction des déceptions, satisfaction client maximale.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-lg mt-1">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white">Gain de Temps</h4>
                        <p className="text-gray-300">Réduisez le temps de consultation jusqu'à 40% et optimisez votre planning.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-2 rounded-lg mt-1">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white">Image Moderne</h4>
                        <p className="text-gray-300">Démarquez-vous avec une technologie innovante qui attire une clientèle connectée.</p>
                      </div>
                    </div>
                  </div>

                  {/* Options de tarification */}
                  <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm border border-white/10 mb-8">
                    <h3 className="text-xl font-bold mb-4 text-white">Solutions Flexibles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-purple-500/20 p-4 rounded-lg backdrop-blur-sm border border-purple-400/30">
                        <div className="flex items-center mb-2">
                          <Tablet className="w-5 h-5 text-purple-400 mr-2" />
                          <span className="font-semibold text-purple-300">Location</span>
                        </div>
                        <div className="text-2xl font-bold text-purple-400 mb-1">9,90€</div>
                        <div className="text-sm text-purple-300">par mois</div>
                        <div className="text-xs text-purple-400 mt-1">Maintenance incluse</div>
                      </div>
                      <div className="bg-green-500/20 p-4 rounded-lg backdrop-blur-sm border border-green-400/30">
                        <div className="flex items-center mb-2">
                          <Crown className="w-5 h-5 text-green-400 mr-2" />
                          <span className="font-semibold text-green-300">Achat</span>
                        </div>
                        <div className="text-2xl font-bold text-green-400 mb-1">149€</div>
                        <div className="text-sm text-green-300">+ 49€/mois logiciel</div>
                        <div className="text-xs text-green-400 mt-1">Garantie 2 ans</div>
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

      {/* FAQ Section avec glassmorphism */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Questions Fréquentes</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trouvez rapidement des réponses à vos questions sur nos tarifs et fonctionnalités
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl backdrop-blur-xl border border-white/20"></div>
                <div className="relative">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors rounded-xl"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA final */}
          <div className="text-center mt-16">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/20">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Prêt à Révolutionner{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Votre Salon ?
                  </span>
                </h3>
                <p className="text-xl text-gray-300 mb-8">
                  Rejoignez plus de <span className="text-purple-400 font-bold">500 salons</span> qui utilisent déjà notre technologie IA.
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
                    className="inline-flex items-center px-8 py-4 rounded-2xl border-2 border-purple-400 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all duration-300 text-lg"
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
