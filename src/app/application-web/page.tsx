'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Smartphone, QrCode, Zap, Share2, Camera, Users, Sparkles, Cog, BarChart, Lock, ArrowRight, Eye } from 'lucide-react';

export default function ApplicationWeb() {
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
              <Smartphone className="w-5 h-5 text-violet-300" />
              <span className="text-white/90 font-medium">Zéro installation</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Application
              </span>
              <br />
              <span className="text-white">Web</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transformez n'importe quel smartphone ou site web en photobooth professionnel et gérez tous vos événements depuis votre appareil mobile.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Tester l'application</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Voir la démo
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <QrCode className="w-8 h-8 text-violet-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">QR Code instantané</h3>
                  <p className="text-gray-300 text-sm">Accès direct via QR code</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Camera className="w-8 h-8 text-pink-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">IA intégrée</h3>
                  <p className="text-gray-300 text-sm">Filtres professionnels</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Share2 className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Partage instantané</h3>
                  <p className="text-gray-300 text-sm">Réseaux sociaux intégrés</p>
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
              Pourquoi choisir notre application web ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une solution mobile complète qui transforme chaque smartphone en photobooth professionnel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Encart 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Accessible partout</h3>
                <p className="text-gray-600 leading-relaxed">
                  Aucune installation requise. Vos invités accèdent instantanément au photobooth via leur navigateur mobile.
                </p>
              </div>
            </div>

            {/* Encart 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">IA avancée</h3>
                <p className="text-gray-600 leading-relaxed">
                  Filtres intelligents, reconnaissance faciale et effets en temps réel directement depuis le navigateur.
                </p>
              </div>
            </div>

            {/* Encart 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Partage viral</h3>
                <p className="text-gray-600 leading-relaxed">
                  Diffusion automatique sur tous les réseaux sociaux pour maximiser la portée de votre événement.
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
              Performance de l'application web
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des résultats exceptionnels qui font de votre événement un succès viral
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Statistique 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  2s
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Temps d'accès</div>
                <div className="text-sm text-gray-600">Via QR Code</div>
              </div>
            </div>

            {/* Statistique 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Compatibilité</div>
                <div className="text-sm text-gray-600">Appareils mobiles</div>
              </div>
            </div>

            {/* Statistique 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">
                  +300%
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Partages sociaux</div>
                <div className="text-sm text-gray-600">Vs événement classique</div>
              </div>
            </div>

            {/* Statistique 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  4.9/5
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Expérience utilisateur</div>
                <div className="text-sm text-gray-600">Note moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Intégration Web */}
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
                <QrCode className="w-5 h-5 mr-3" />
                Intégration Web Ultra-Simple
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Intégrez notre <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Photobooth IA</span> directement sur votre site web
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Surprenez vos utilisateurs et créez de l'engagement viral avec une ligne de code. 
                Transformez votre site en expérience interactive immersive.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Code Integration */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">Intégration en 1 ligne</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/80 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                    <div className="text-gray-400 mb-2">// Intégrez en 1 ligne dans votre HTML</div>
                    <div className="text-purple-300">&lt;<span className="text-blue-400">script</span> 
                      <span className="text-green-400"> src</span>=<span className="text-yellow-400">"https://waibooth.app/widget.js"</span>
                    </div>
                    <div className="text-purple-300 ml-8">
                      <span className="text-green-400">data-theme</span>=<span className="text-yellow-400">"your-brand"</span>
                    </div>
                    <div className="text-purple-300 ml-8">
                      <span className="text-green-400">data-filters</span>=<span className="text-yellow-400">"haircut,makeup,products"</span>&gt;
                    </div>
                    <div className="text-purple-300">&lt;/<span className="text-blue-400">script</span>&gt;</div>
                    
                    <div className="text-gray-400 mt-4 mb-2">// Et voilà ! 🎉</div>
                    <div className="text-green-400">✓ Photobooth IA intégré</div>
                    <div className="text-green-400">✓ Filtres personnalisés</div>
                    <div className="text-green-400">✓ Partage viral activé</div>
                  </div>
                  
                  <div className="mt-6 flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
                      ⚡ Installation: 30 secondes
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
                      🚀 Résultat: Immédiat
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Essayage virtuel de produits</h4>
                      <p className="text-gray-300">
                        Permettez à vos clients de tester vos produits (maquillage, lunettes, bijoux) directement sur votre site e-commerce pour augmenter les conversions.
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
                      <h4 className="text-xl font-bold text-white mb-2">Simulation coiffure en ligne</h4>
                      <p className="text-gray-300">
                        Intégrez des filtres de coupes de cheveux sur votre site de salon pour que les clients visualisent leur nouveau look avant de prendre rendez-vous.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Share2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Engagement viral automatique</h4>
                      <p className="text-gray-300">
                        Chaque photo créée est automatiquement marquée de votre branding et incite au partage sur les réseaux sociaux, multipliant votre visibilité.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/20 mb-16">
              <h3 className="text-3xl font-bold text-white text-center mb-8">
                Impact mesurable sur votre business
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">+400%</div>
                  <p className="text-gray-300 text-sm">Temps passé sur le site</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">+250%</div>
                  <p className="text-gray-300 text-sm">Taux de conversion</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">+800%</div>
                  <p className="text-gray-300 text-sm">Partages sociaux</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">x10</div>
                  <p className="text-gray-300 text-sm">Engagement utilisateur</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Prêt à révolutionner <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">votre site web ?</span>
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Transformez vos visiteurs en ambassadeurs avec une expérience photo IA intégrée et virale.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg group"
                    >
                      <span>Obtenir mon code d'intégration</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/demo"
                      className="inline-flex items-center px-8 py-4 rounded-2xl bg-transparent border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-lg"
                    >
                      <Eye className="mr-2 w-5 h-5" />
                      Voir une démo live
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
              <h2 className="text-3xl font-bold mb-6">Le pouvoir du photobooth dans votre smartphone</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre plateforme SaaS révolutionne l'expérience photobooth traditionnelle en l'adaptant entièrement aux appareils mobiles. Plus besoin d'équipements volumineux ou d'installations complexes !
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Que vous soyez organisateur d'événement ou simple invité, notre application web responsive offre une expérience fluide et intuitive, directement accessible depuis n'importe quel smartphone.
              </p>
              <div className="bg-violet-50 border border-violet-100 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <Smartphone className="w-5 h-5 text-violet-600 mr-2" />
                  Double fonctionnalité
                </h3>
                <p className="text-gray-700">
                  Une plateforme, deux usages : un tableau de bord complet pour les organisateurs et une interface simplifiée pour les invités. Le tout accessible via un simple navigateur web, sans téléchargement nécessaire.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander une démo
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="relative w-[736px] h-[600px]">
                  <Image
                    src="/steps/step-1.png"
                    alt="Interface administrateur"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pour les administrateurs */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Pour les organisateurs d'événements</h2>
            <p className="text-lg text-gray-700">
              Gérez tout votre événement depuis n'importe où grâce à notre plateforme mobile complète.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cog className="w-12 h-12 text-violet-600" />,
                title: "Configuration facile",
                description: "Créez et paramétrez votre événement en quelques minutes : thèmes personnalisés, filtres IA, messages d'accueil et plus encore."
              },
              {
                icon: <BarChart className="w-12 h-12 text-violet-600" />,
                title: "Analytique en temps réel",
                description: "Suivez l'activité et l'engagement de vos invités en direct : nombre de photos, partages, filtres les plus utilisés."
              },
              {
                icon: <QrCode className="w-12 h-12 text-violet-600" />,
                title: "Génération de QR codes",
                description: "Créez et partagez des QR codes personnalisés pour permettre à vos invités d'accéder instantanément à l'expérience photo."
              },
              {
                icon: <Lock className="w-12 h-12 text-violet-600" />,
                title: "Modération des contenus",
                description: "Approuvez ou retirez des contenus directement depuis votre smartphone pour garder le contrôle de votre galerie."
              },
              {
                icon: <Users className="w-12 h-12 text-violet-600" />,
                title: "Gestion des accès",
                description: "Attribuez différents niveaux d'accès à votre équipe pour une collaboration efficace pendant l'événement."
              },
              {
                icon: <Zap className="w-12 h-12 text-violet-600" />,
                title: "Notifications instantanées",
                description: "Recevez des alertes en temps réel sur l'activité de votre événement pour réagir rapidement si nécessaire."
              }
            ].map((feature, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full p-3 bg-violet-100 mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour les utilisateurs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Pour les invités à l'événement</h2>
            <p className="text-lg text-gray-700">
              Une expérience photobooth directement sur leur smartphone, sans téléchargement d'application.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                    <QrCode className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Accès instantané</h3>
                    <p className="text-gray-700">
                      Un simple scan de QR code suffit pour accéder à l'expérience photobooth complète, sans création de compte ni téléchargement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                    <Camera className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Capture simplifiée</h3>
                    <p className="text-gray-700">
                      Interface intuitive pour prendre des photos ou des vidéos rapidement, avec aperçu en temps réel et options de retouche.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Filtres IA exclusifs</h3>
                    <p className="text-gray-700">
                      Accès à tous nos filtres et effets IA de qualité professionnelle, adaptés au thème de l'événement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                    <Share2 className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Partage multiplateforme</h3>
                    <p className="text-gray-700">
                      Partage immédiat sur les réseaux sociaux, par email ou SMS, avec possibilité de télécharger les créations en haute résolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto w-[736px] h-[600px]">
                <Image
                  src="/steps/003_bis.png"
                  alt="Interface utilisateur photobooth"
                  fill
                  className="object-contain"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm uppercase font-bold">Sans téléchargement</p>
                </div>
              </div>
            </div>
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
              <Smartphone className="w-4 h-4 mr-2" />
              Processus application web
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-300">
              Un processus simple en 5 étapes pour transformer votre événement avec notre application web
            </p>
          </div>

          {/* Timeline avec icônes centrées */}
          <div className="relative max-w-7xl mx-auto">
            {/* Ligne de timeline */}
            <div className="absolute top-0 left-8 md:left-0 md:top-1/2 w-1 md:w-full md:h-1 h-full md:h-auto bg-gradient-to-b md:bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 md:transform md:-translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {[
                {
                  step: "01",
                  title: "Configuration événement",
                  description: "Créez votre événement et personnalisez l'interface",
                  color: "from-purple-500 to-pink-500",
                  icon: <Cog className="w-12 h-12" />
                },
                {
                  step: "02", 
                  title: "Génération QR code",
                  description: "Obtenez votre QR code unique pour l'événement",
                  color: "from-blue-500 to-purple-500",
                  icon: <QrCode className="w-12 h-12" />
                },
                {
                  step: "03",
                  title: "Accès invités",
                  description: "Les participants scannent et accèdent à l'app web",
                  color: "from-green-500 to-blue-500",
                  icon: <Smartphone className="w-12 h-12" />
                },
                {
                  step: "04",
                  title: "Création photo IA",
                  description: "Capture et transformation avec filtres personnalisés",
                  color: "from-orange-500 to-red-500",
                  icon: <Sparkles className="w-12 h-12" />
                },
                {
                  step: "05",
                  title: "Partage et galerie",
                  description: "Partage instantané et ajout à la galerie événement",
                  color: "from-pink-500 to-purple-500",
                  icon: <Share2 className="w-12 h-12" />
                }
              ].map((step, index) => (
                <div key={index} className="relative group">
                  {/* Card avec icône centrée */}
                  <div className="ml-12 md:ml-0 md:mt-12 group-hover:transform group-hover:-translate-y-2 transition-all duration-500">
                    {/* Container avec icône centrée */}
                    <div className="relative mb-6 mx-auto w-32 h-32 md:w-40 md:h-40">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 group-hover:scale-105`}></div>
                      <div className="relative h-full flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                      
                      {/* Badge étape */}
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                        {step.step}
                      </div>
                    </div>
                    
                    {/* Contenu textuel */}
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
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Simple, Puissant, <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Accessible !</span>
                </h3>
                <p className="text-xl text-gray-700 mb-8">
                  Transformez <span className="text-purple-600 font-bold">n'importe quel smartphone</span> en photobooth professionnel avec notre application web.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg group"
                >
                  <span>Demander une démo</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
            <h2 className="text-3xl font-bold mb-4">Les avantages d'une solution mobile</h2>
            <p className="text-lg text-gray-700">
              Pourquoi choisir notre application web plutôt qu'un photobooth traditionnel ?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Aucun équipement nécessaire",
                description: "Économisez sur la location ou l'achat de matériel coûteux - tout fonctionne directement sur les smartphones existants.",
                icon: <Smartphone className="w-10 h-10 text-violet-600" />
              },
              {
                title: "Nombre d'utilisateurs illimité",
                description: "Pas de file d'attente devant un photobooth unique - tous vos invités peuvent participer simultanément.",
                icon: <Users className="w-10 h-10 text-violet-600" />
              },
              {
                title: "Déploiement instantané",
                description: "Mise en place en quelques minutes sans installation physique complexe ou configuration technique.",
                icon: <Zap className="w-10 h-10 text-violet-600" />
              },
              {
                title: "Flexibilité totale",
                description: "Adaptez l'expérience en temps réel aux besoins de votre événement, où que vous soyez.",
                icon: <QrCode className="w-10 h-10 text-violet-600" />
              },
              {
                title: "Expérience hygiénique",
                description: "Solution sans contact, particulièrement adaptée aux préoccupations sanitaires actuelles.",
                icon: <Lock className="w-10 h-10 text-violet-600" />
              },
              {
                title: "Partage viral amplifié",
                description: "Utilisation des appareils personnels pour un partage plus naturel et immédiat sur les réseaux sociaux.",
                icon: <Share2 className="w-10 h-10 text-violet-600" />
              }
            ].map((advantage, index) => (
              <div key={index} className="flex items-start">
                <div className="rounded-lg p-3 bg-violet-100 shadow-md mr-4 flex-shrink-0">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                  <p className="text-gray-700">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Ils ont adopté notre solution mobile</h2>
            <p className="text-lg text-gray-700">
              Découvrez comment notre application web a transformé leurs événements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Pour notre conférence annuelle de 500 personnes, la solution mobile a permis d'éliminer les files d'attente habituelles tout en multipliant par 3 le nombre de photos prises et partagées.",
                author: "Claire Dubois",
                role: "Directrice événementiel, TechConf",
                image: "/testimonials/testimonial-1.jpg"
              },
              {
                quote: "En tant qu'organisatrice de mariages, proposer cette solution à mes clients a été un véritable plus. Simple à mettre en place et rentable car ne nécessitant aucun matériel supplémentaire.",
                author: "Marc Laurent",
                role: "Wedding Planner, Moments Précieux",
                image: "/testimonials/testimonial-2.jpg"
              },
              {
                quote: "L'accessibilité de la solution sur smartphone a créé une dynamique incroyable lors de notre festival. Les participants ont partagé massivement leur expérience, amplifiant notre visibilité en ligne.",
                author: "Julia Mercier",
                role: "Organisatrice, Festival Lumières",
                image: "/testimonials/testimonial-3.jpg"
              }
            ].map((testimonial, index) => (
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

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-700">
              Tout ce que vous devez savoir sur notre application web photo.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Est-ce que cela fonctionne sur tous les smartphones ?",
                answer: "Oui, notre application web est optimisée pour fonctionner sur tous les smartphones récents (iOS et Android). Elle nécessite simplement un navigateur web moderne et un accès internet."
              },
              {
                question: "Faut-il télécharger une application ?",
                answer: "Non, c'est l'un des grands avantages de notre solution ! Tout fonctionne directement dans le navigateur web, sans aucun téléchargement ou installation nécessaire."
              },
              {
                question: "Comment les invités accèdent-ils à l'expérience photo ?",
                answer: "Les invités peuvent scanner un QR code affiché sur le lieu de l'événement ou cliquer sur un lien qui leur est envoyé. L'accès est immédiat et ne nécessite pas de création de compte."
              },
              {
                question: "La qualité des photos est-elle aussi bonne que sur un photobooth traditionnel ?",
                answer: "Absolument ! Notre application utilise la caméra de haute qualité des smartphones modernes, souvent supérieure à celle des photobooths traditionnels. Nos algorithmes IA optimisent également chaque image pour un résultat professionnel."
              },
              {
                question: "Est-il possible de personnaliser l'interface aux couleurs de notre marque ou événement ?",
                answer: "Oui, notre solution offre une personnalisation complète : logo, couleurs, messages d'accueil, et même filtres IA sur mesure adaptés à votre thématique."
              }
            ].map((faq, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer l'expérience photo de votre événement ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Découvrez la puissance d'une solution mobile, sans matériel et accessible à tous vos invités instantanément.
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
