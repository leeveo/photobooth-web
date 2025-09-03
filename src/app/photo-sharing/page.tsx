'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Share2, Mail, Smartphone, Send, Download, BarChart, Globe, Hash, QrCode, ArrowRight, Eye, Sparkles, Users } from 'lucide-react';

// Temporairement remplacé les icônes react-icons par une solution plus simple

export default function PhotoSharing() {
  // Définir les plateformes sociales avec des noms simples en attendant d'installer react-icons
  const socialPlatforms = [
    { name: "Instagram", color: "bg-pink-600" },
    { name: "Facebook", color: "bg-blue-600" },
    { name: "Twitter", color: "bg-blue-400" },
    { name: "TikTok", color: "bg-black" },
    { name: "WhatsApp", color: "bg-green-500" },
    { name: "Gmail", color: "bg-red-500" },
    { name: "LinkedIn", color: "bg-blue-700" },
    { name: "Messenger", color: "bg-blue-500" }
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
              <Share2 className="w-5 h-5 text-violet-300" />
              <span className="text-white/90 font-medium">Immédiat et multiplateforme</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Photo
              </span>
              <br />
              <span className="text-white">Sharing</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Des solutions de partage instantané qui permettent à vos invités de recevoir et diffuser leurs photos en quelques secondes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Découvrir les solutions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Voir une démo
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-violet-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Partage instantané</h3>
                  <p className="text-gray-300 text-sm">Diffusion en 1 clic</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Globe className="w-8 h-8 text-pink-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Multi-réseaux</h3>
                  <p className="text-gray-300 text-sm">8+ plateformes intégrées</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <BarChart className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Analytics</h3>
                  <p className="text-gray-300 text-sm">Suivi de performance</p>
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

      {/* Encarts informatifs */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Pourquoi choisir notre photo sharing ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Maximisez la portée et l'engagement de vos événements avec des solutions de partage ultra-performantes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Encart 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Diffusion virale</h3>
                <p className="text-gray-600 leading-relaxed">
                  Partagez instantanément sur 8+ réseaux sociaux simultanément pour une portée maximale de vos contenus.
                </p>
              </div>
            </div>

            {/* Encart 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Multi-canaux</h3>
                <p className="text-gray-600 leading-relaxed">
                  SMS, email, QR codes, téléchargement direct - tous les moyens pour que vos invités récupèrent leurs photos.
                </p>
              </div>
            </div>

            {/* Encart 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Analytics avancées</h3>
                <p className="text-gray-600 leading-relaxed">
                  Suivez la performance de vos contenus en temps réel avec des métriques détaillées et des insights précieux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Performance du photo sharing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des résultats exceptionnels qui amplifient la visibilité de vos événements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Statistique 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  +500%
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Portée virale</div>
                <div className="text-sm text-gray-600">Vs partage manuel</div>
              </div>
            </div>

            {/* Statistique 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  8+
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Plateformes</div>
                <div className="text-sm text-gray-600">Réseaux intégrés</div>
              </div>
            </div>

            {/* Statistique 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">
                  3s
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Temps de partage</div>
                <div className="text-sm text-gray-600">Photo → Réseaux sociaux</div>
              </div>
            </div>

            {/* Statistique 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  92%
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Taux de partage</div>
                <div className="text-sm text-gray-600">Utilisateurs actifs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Partage Réseaux Sociaux */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden">
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
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm font-medium mb-8 backdrop-blur-sm border border-purple-500/30">
                <Share2 className="w-5 h-5 mr-3" />
                Partage Viral Instantané
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Partagez sur <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">tous les réseaux sociaux</span> en un clic
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Vos créations photo et vidéo se diffusent instantanément sur Instagram, Facebook, TikTok et plus. 
                Maximisez votre visibilité avec un partage optimisé et automatisé.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Interface de partage */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">Interface de Partage</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/80 rounded-xl p-6 space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-lg border border-pink-500/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">IG</span>
                        </div>
                        <span className="text-white font-medium">Instagram Stories & Feed</span>
                      </div>
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">Connecté</div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg border border-blue-500/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">FB</span>
                        </div>
                        <span className="text-white font-medium">Facebook Posts & Stories</span>
                      </div>
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">Connecté</div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-600/20 to-black/20 rounded-lg border border-slate-500/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-slate-700 to-black rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">TT</span>
                        </div>
                        <span className="text-white font-medium">TikTok Viral</span>
                      </div>
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">Connecté</div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg border border-green-500/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">WA</span>
                        </div>
                        <span className="text-white font-medium">WhatsApp Status</span>
                      </div>
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">Connecté</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30">
                    <div className="flex items-center justify-center space-x-4 mb-3">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
                        ⚡ Partage: Instantané
                      </div>
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
                        🎯 Hashtags: Auto
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:scale-105 transition-transform">
                      Partager sur tous les réseaux 🚀
                    </button>
                  </div>
                </div>
              </div>

              {/* Avantages du partage */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Hashtags intelligents</h4>
                      <p className="text-gray-300">
                        Nos algorithmes analysent votre contenu pour générer automatiquement les hashtags les plus performants et augmenter votre portée organique.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Formats optimisés</h4>
                      <p className="text-gray-300">
                        Chaque réseau reçoit votre contenu dans le format parfait : Stories vertical, posts carrés, vidéos courtes... Tout est automatiquement adapté.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BarChart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Analytics en temps réel</h4>
                      <p className="text-gray-300">
                        Suivez les performances de vos partages : vues, likes, partages, commentaires... Optimisez votre stratégie social media en continu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/20 mb-16">
              <h3 className="text-3xl font-bold text-white text-center mb-8">
                Résultats impressionnants sur les réseaux
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">+850%</div>
                  <p className="text-gray-300 text-sm">Portée Instagram</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">92%</div>
                  <p className="text-gray-300 text-sm">Taux d'engagement</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">2.3M</div>
                  <p className="text-gray-300 text-sm">Vues générées/mois</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">3 sec</div>
                  <p className="text-gray-300 text-sm">Temps de partage</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Prêt à devenir <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">viral</span> ?
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Transformez chaque photo en contenu viral avec notre système de partage multi-réseaux optimisé IA.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg group"
                    >
                      <span>Activer le partage viral</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/demo"
                      className="inline-flex items-center px-8 py-4 rounded-2xl bg-transparent border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-lg"
                    >
                      <Eye className="mr-2 w-5 h-5" />
                      Voir le partage en action
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Solutions de partage instantané</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre système de Photo Sharing permet à vos invités de recevoir instantanément leurs créations et de les partager sur leurs réseaux sociaux, par email ou SMS, maximisant ainsi la visibilité de votre événement ou marque.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Cette solution s'intègre parfaitement avec nos photobooths et expériences smartphone, créant une expérience fluide et engageante qui génère un contenu authentique et viral.
              </p>
              <div className="bg-violet-50 border border-violet-100 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <Globe className="w-5 h-5 text-violet-600 mr-2" />
                  Amplifiez votre présence digitale
                </h3>
                <p className="text-gray-700">
                  En moyenne, les événements utilisant notre solution de partage voient leur visibilité sur les réseaux sociaux multipliée par 4, avec un taux de partage de 78% parmi les participants.
                </p>
              </div>
              <Link href="/contact"    className="inline-block px-8 py-3 rounded-full bg-purple border-2 border-white text-white font-semibold shadow-lg hover:bg-white/10 transition-colors text-lg"
              >
                Demander un devis
              </Link>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-3">
                    <Image 
                      src="/photo-sharing/sharing-email.jpg" 
                      alt="Partage par email" 
                      width={240} 
                      height={320}
                      className="rounded-lg w-full h-auto"
                    />
                    <div className="mt-3 flex items-center justify-center bg-violet-100 text-violet-700 py-2 px-3 rounded-lg text-sm font-medium">
                      <Mail className="w-4 h-4 mr-2" /> 
                      Email
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-2">
                    <Image 
                      src="/photo-sharing/sharing-instagram.jpg" 
                      alt="Partage sur Instagram" 
                      width={240} 
                      height={320}
                      className="rounded-lg w-full h-auto"
                    />
                    <div className="mt-3 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-3 rounded-lg text-sm font-medium">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                      </svg>
                      Instagram
                    </div>
                  </div>
                </div>
                <div className="space-y-6 mt-10">
                  <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-3">
                    <Image 
                      src="/photo-sharing/sharing-sms.jpg" 
                      alt="Partage par SMS" 
                      width={240} 
                      height={320}
                      className="rounded-lg w-full h-auto"
                    />
                    <div className="mt-3 flex items-center justify-center bg-green-100 text-green-700 py-2 px-3 rounded-lg text-sm font-medium">
                      <Smartphone className="w-4 h-4 mr-2" /> 
                      SMS
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-2">
                    <Image 
                      src="/photo-sharing/sharing-download.jpg" 
                      alt="Téléchargement direct" 
                      width={240} 
                      height={320}
                      className="rounded-lg w-full h-auto"
                    />
                    <div className="mt-3 flex items-center justify-center bg-blue-100 text-blue-700 py-2 px-3 rounded-lg text-sm font-medium">
                      <Download className="w-4 h-4 mr-2" /> 
                      Téléchargement
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Options de partage */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Options de partage complètes</h2>
            <p className="text-lg text-gray-700">
              Des solutions de diffusion adaptées à tous les besoins et préférences de vos invités.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Mail className="w-12 h-12 text-violet-600" />,
                title: "Email instantané",
                description: "Envoi immédiat des photos par email avec votre branding et message personnalisé."
              },
              {
                icon: <Smartphone className="w-12 h-12 text-violet-600" />,
                title: "SMS avec lien",
                description: "Réception des créations directement par SMS pour un partage facile depuis le mobile."
              },
              {
                icon: <Hash className="w-12 h-12 text-violet-600" />,
                title: "Réseaux sociaux",
                description: "Partage direct sur Instagram, Facebook, Twitter et autres avec hashtags personnalisés."
              },
              {
                icon: <Download className="w-12 h-12 text-violet-600" />,
                title: "QR code et téléchargement",
                description: "QR codes individuels pour récupérer facilement les photos sur n'importe quel appareil."
              }
            ].map((option, index) => (
              <div key={index} className="card bg-white text-center p-6">
                <div className="flex justify-center mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white rounded-xl shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <Image
                  src="/photo-sharing/gallery-preview.jpg"
                  alt="Galerie personnalisée"
                  width={300}
                  height={400}
                  className="rounded-lg w-full h-auto shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Galerie personnalisée</h3>
                <p className="text-gray-700 mb-4">
                  Chaque événement bénéficie d'une galerie web dédiée où toutes les photos sont automatiquement regroupées. Personnalisez-la aux couleurs de votre marque ou du thème de votre événement.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "URL personnalisée facile à mémoriser",
                    "Filtres et recherche par date, personne ou style",
                    "Protection par mot de passe en option",
                    "Statistiques de visites et téléchargements"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/demo" className="btn-secondary inline-flex items-center">
                  Voir une démo de galerie
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Les avantages du partage instantané</h2>
            <p className="text-lg text-gray-700">
              Maximisez l'impact de vos créations photo et vidéo grâce à nos solutions de diffusion optimisées.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Amplification organique",
                description: "Augmentez la visibilité de votre événement ou marque grâce aux partages spontanés de vos invités sur leurs réseaux.",
                stat: "+300%",
                statLabel: "de portée organique"
              },
              {
                title: "Engagement immédiat",
                description: "Les participants reçoivent instantanément leurs créations, maintenant l'enthousiasme et l'engagement élevés.",
                stat: "5 sec",
                statLabel: "temps moyen de réception"
              },
              {
                title: "Données marketing exploitables",
                description: "Collectez des coordonnées opt-in et analysez les comportements de partage pour affiner vos futures stratégies.",
                stat: "85%",
                statLabel: "taux de collecte d'emails"
              },
              {
                title: "Extension de l'expérience",
                description: "Prolongez l'impact de votre événement bien au-delà de sa durée réelle grâce aux partages et interactions post-événement.",
                stat: "2-3x",
                statLabel: "durée d'engagement"
              },
              {
                title: "Personnalisation de marque",
                description: "Chaque point de contact est personnalisable avec votre logo, couleurs et messages pour renforcer l'identité de marque.",
                stat: "100%",
                statLabel: "personnalisable"
              },
              {
                title: "Analyse complète",
                description: "Mesurez précisément le ROI de vos activations grâce à des statistiques détaillées sur les partages et l'engagement.",
                stat: "15+",
                statLabel: "métriques disponibles"
              }
            ].map((advantage, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="p-6">
                  <div className="mb-4">
                    <div className="bg-violet-50 text-violet-700 inline-block px-4 py-2 rounded-lg font-bold">
                      {advantage.stat}
                    </div>
                    <div className="text-sm text-violet-600 mt-1">{advantage.statLabel}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intégrations */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Intégrations multiplateforme</h2>
            <p className="text-lg text-gray-700">
              Une compatibilité étendue pour une diffusion optimale sur tous les canaux.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-8 text-center">Plateformes et services pris en charge</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {socialPlatforms.map((platform, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-16 h-16 flex items-center justify-center ${platform.color} text-white rounded-full font-bold`}>
                    {platform.name.charAt(0)}
                  </div>
                  <p className="text-sm font-medium mt-2">{platform.name}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-100">
              <h4 className="font-bold mb-3">Intégrations API avancées</h4>
              <p className="text-gray-700 mb-4">
                Notre API permet également l'intégration avec des plateformes CRM, des applications événementielles et des systèmes marketing automation comme :
              </p>
              <div className="flex flex-wrap gap-2">
                {["Salesforce", "Mailchimp", "HubSpot", "Marketo", "Zapier", "Eventbrite"].map((service, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à amplifier l'impact de votre événement ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Nos solutions de partage instantané transforment chaque photo en une opportunité de visibilité pour votre marque.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
         <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander une démo
              </Link>
              <Link
                href="/pricing"
                className="inline-block px-8 py-3 rounded-full bg-transparent border-2 border-white text-white font-semibold shadow-lg hover:bg-white/10 transition-colors text-lg"
              >
                Voir nos tarifs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
