'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Smartphone, QrCode, Zap, Share2, Camera, Users, Sparkles, Cog, BarChart, Lock, Globe, Monitor, Wifi, Cloud } from 'lucide-react';

export default function ApplicationWeb() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
        
        {/* Animated Background Lights */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/25 rounded-full blur-3xl animate-float-fast"></div>
        </div>

        {/* Animated Mobile Icons Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Smartphone Icons */}
          <div className="absolute top-20 left-10 animate-float-random-1">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-25 flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float-random-2">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-30 flex items-center justify-center">
              <Smartphone className="w-7 h-7 text-white" />
            </div>
          </div>
          <div className="absolute bottom-32 left-24 animate-float-random-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-20 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* QR Code Icons */}
          <div className="absolute top-32 right-16 animate-float-random-4">
            <div className="w-11 h-11 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg opacity-25 flex items-center justify-center">
              <QrCode className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-40 right-20 animate-float-random-5">
            <div className="w-13 h-13 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg opacity-35 flex items-center justify-center">
              <QrCode className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Camera Icons */}
          <div className="absolute top-48 left-32 animate-float-random-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-30 flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-24 right-40 animate-float-random-7">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-25 flex items-center justify-center">
              <Camera className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Globe Icons */}
          <div className="absolute top-72 right-24 animate-float-random-8">
            <div className="w-11 h-11 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg opacity-27 flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-48 left-40 animate-float-random-9">
            <div className="w-13 h-13 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg opacity-33 flex items-center justify-center">
              <Globe className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Wifi Icons */}
          <div className="absolute top-36 left-48 animate-float-random-10">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg opacity-25 flex items-center justify-center">
              <Wifi className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="absolute bottom-36 right-48 animate-float-random-11">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg opacity-30 flex items-center justify-center">
              <Wifi className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8">
              <Smartphone className="w-5 h-5 text-blue-300" />
              <span className="text-white/90 font-medium">Solution mobile révolutionnaire</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                App
              </span>
              <br />
              <span className="text-white">Web Mobile</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transformez n'importe quel smartphone en photobooth professionnel. Aucun téléchargement, aucune installation - juste la magie du web.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Démo instantanée
                <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
              <Link
                href="/demo"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Essayer maintenant
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="group relative">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <QrCode className="w-8 h-8 text-green-400 mb-3 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Accès QR instantané</h3>
                  <p className="text-gray-300 text-sm">Un scan, c'est parti !</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Monitor className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Interface adaptative</h3>
                  <p className="text-gray-300 text-sm">Parfait sur tous les écrans</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Cloud className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Sync cloud temps réel</h3>
                  <p className="text-gray-300 text-sm">Toujours synchronisé</p>
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
          
          @keyframes float-random-1 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.25; }
            25% { transform: translateY(-30px) translateX(20px) rotate(5deg); opacity: 0.35; }
            50% { transform: translateY(-15px) translateX(-10px) rotate(-3deg); opacity: 0.3; }
            75% { transform: translateY(-40px) translateX(15px) rotate(8deg); opacity: 0.4; }
          }
          @keyframes float-random-2 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.3; }
            20% { transform: translateY(-25px) translateX(-15px) rotate(-4deg); opacity: 0.35; }
            60% { transform: translateY(-35px) translateX(25px) rotate(6deg); opacity: 0.45; }
            80% { transform: translateY(-10px) translateX(-5px) rotate(-2deg); opacity: 0.25; }
          }
          @keyframes float-random-3 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.2; }
            30% { transform: translateY(-20px) translateX(10px) rotate(3deg); opacity: 0.3; }
            70% { transform: translateY(-30px) translateX(-20px) rotate(-5deg); opacity: 0.25; }
          }
          @keyframes float-random-4 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.25; }
            40% { transform: translateY(-40px) translateX(-25px) rotate(-6deg); opacity: 0.4; }
            80% { transform: translateY(-15px) translateX(30px) rotate(4deg); opacity: 0.3; }
          }
          @keyframes float-random-5 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.35; }
            25% { transform: translateY(-35px) translateX(15px) rotate(7deg); opacity: 0.45; }
            75% { transform: translateY(-20px) translateX(-10px) rotate(-3deg); opacity: 0.3; }
          }
          @keyframes float-random-6 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.3; }
            35% { transform: translateY(-25px) translateX(-30px) rotate(-8deg); opacity: 0.4; }
            65% { transform: translateY(-45px) translateX(20px) rotate(5deg); opacity: 0.45; }
          }
          @keyframes float-random-7 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.25; }
            20% { transform: translateY(-30px) translateX(25px) rotate(6deg); opacity: 0.35; }
            60% { transform: translateY(-10px) translateX(-15px) rotate(-4deg); opacity: 0.2; }
            90% { transform: translateY(-35px) translateX(10px) rotate(2deg); opacity: 0.3; }
          }
          @keyframes float-random-8 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.27; }
            50% { transform: translateY(-40px) translateX(-20px) rotate(-7deg); opacity: 0.37; }
          }
          @keyframes float-random-9 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.33; }
            30% { transform: translateY(-25px) translateX(35px) rotate(9deg); opacity: 0.43; }
            70% { transform: translateY(-35px) translateX(-15px) rotate(-4deg); opacity: 0.38; }
          }
          @keyframes float-random-10 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.25; }
            40% { transform: translateY(-30px) translateX(-25px) rotate(-5deg); opacity: 0.35; }
            80% { transform: translateY(-50px) translateX(20px) rotate(8deg); opacity: 0.4; }
          }
          @keyframes float-random-11 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.3; }
            25% { transform: translateY(-20px) translateX(40px) rotate(10deg); opacity: 0.4; }
            75% { transform: translateY(-35px) translateX(-30px) rotate(-6deg); opacity: 0.35; }
          }

          .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
          .animate-float-medium { animation: float-medium 15s ease-in-out infinite; }
          .animate-float-fast { animation: float-fast 18s ease-in-out infinite; }
          .animate-float-random-1 { animation: float-random-1 20s ease-in-out infinite; }
          .animate-float-random-2 { animation: float-random-2 25s ease-in-out infinite; }
          .animate-float-random-3 { animation: float-random-3 18s ease-in-out infinite; }
          .animate-float-random-4 { animation: float-random-4 22s ease-in-out infinite; }
          .animate-float-random-5 { animation: float-random-5 28s ease-in-out infinite; }
          .animate-float-random-6 { animation: float-random-6 24s ease-in-out infinite; }
          .animate-float-random-7 { animation: float-random-7 26s ease-in-out infinite; }
          .animate-float-random-8 { animation: float-random-8 20s ease-in-out infinite; }
          .animate-float-random-9 { animation: float-random-9 23s ease-in-out infinite; }
          .animate-float-random-10 { animation: float-random-10 27s ease-in-out infinite; }
          .animate-float-random-11 { animation: float-random-11 21s ease-in-out infinite; }
        `}</style>
      </section>

      {/* Comment ça marche - Modern Style */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment fonctionne notre{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                app web mobile ?
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Une expérience fluide en 4 étapes simples, accessible depuis n'importe quel smartphone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Étape 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <QrCode className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">1. Scan du QR</h3>
              <p className="text-gray-600 leading-relaxed">
                L'organisateur affiche le QR code de l'événement. Les invités le scannent avec leur smartphone pour accéder instantanément.
              </p>
            </div>

            {/* Étape 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">2. Interface mobile</h3>
              <p className="text-gray-600 leading-relaxed">
                L'app web s'ouvre directement dans le navigateur mobile avec une interface optimisée et tous les filtres IA disponibles.
              </p>
            </div>

            {/* Étape 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Camera className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">3. Création photo</h3>
              <p className="text-gray-600 leading-relaxed">
                Prise de photo avec la caméra du téléphone, application des filtres IA et personnalisation avec le branding de l'événement.
              </p>
            </div>

            {/* Étape 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Share2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">4. Partage instantané</h3>
              <p className="text-gray-600 leading-relaxed">
                Partage immédiat sur les réseaux sociaux, ajout à la galerie live de l'événement et téléchargement en haute qualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Interface Mobile - Modern Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Interface{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    révolutionnaire
                  </span>
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Découvrez une expérience utilisateur repensée pour le mobile, alliant simplicité d'usage et puissance technologique.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Design adaptatif</h3>
                      <p className="text-gray-600">
                        Interface qui s'adapte automatiquement à tous les types d'écrans et tailles de smartphones pour une expérience optimale.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Performance lightning</h3>
                      <p className="text-gray-600">
                        Temps de chargement ultra-rapides et interface fluide grâce à nos optimisations avancées et notre CDN global.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Sécurité maximale</h3>
                      <p className="text-gray-600">
                        Chiffrement end-to-end de toutes les données et conformité RGPD pour protéger la vie privée de vos invités.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative w-full max-w-md mx-auto">
                  {/* Modern Phone Mockup */}
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                    <div className="bg-black rounded-[2.5rem] p-1">
                      <div className="bg-white rounded-[2rem] overflow-hidden">
                        {/* Screen Content */}
                        <div className="relative h-[600px] bg-gradient-to-br from-blue-50 to-purple-50">
                          {/* Status Bar */}
                          <div className="flex justify-between items-center px-6 py-3 text-black text-sm">
                            <span className="font-semibold">9:41</span>
                            <div className="flex space-x-1">
                              <div className="w-4 h-2 bg-gray-800 rounded-sm"></div>
                              <div className="w-4 h-2 bg-gray-800 rounded-sm"></div>
                              <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                            </div>
                          </div>
                          
                          {/* App Interface */}
                          <div className="px-4">
                            <div className="text-center mb-6">
                              <h3 className="text-xl font-bold text-gray-800 mb-2">📸 PhotoBooth Live</h3>
                              <p className="text-sm text-gray-600">Événement : Mariage Julie & Marc</p>
                            </div>
                            
                            {/* Camera Preview */}
                            <div className="bg-gray-200 rounded-2xl h-64 mb-4 flex items-center justify-center">
                              <Camera className="w-16 h-16 text-gray-400" />
                            </div>
                            
                            {/* Filter Options */}
                            <div className="flex justify-center space-x-3 mb-6">
                              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-400 rounded-full"></div>
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                            </div>
                            
                            {/* Action Button */}
                            <div className="text-center">
                              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
                                <div className="w-12 h-12 bg-white rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-15 animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Administrateur - Modern Design */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dashboard{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Organisateur
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Gérez votre événement avec une puissance inégalée, directement depuis votre smartphone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cog,
                title: "Configuration express",
                description: "Setup complet en 2 minutes : thèmes, filtres IA, branding personnalisé.",
                stat: "2 min",
                statLabel: "configuration",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: BarChart,
                title: "Analytics temps réel",
                description: "Monitoring live de l'engagement : photos, partages, filtres populaires.",
                stat: "100%",
                statLabel: "temps réel",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: QrCode,
                title: "QR codes illimités",
                description: "Génération automatique de codes d'accès personnalisés pour tous vos espaces.",
                stat: "∞",
                statLabel: "QR codes",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: Lock,
                title: "Modération IA",
                description: "Filtrage automatique et modération manuelle pour un contrôle total.",
                stat: "99.9%",
                statLabel: "précision",
                color: "from-orange-500 to-red-600"
              },
              {
                icon: Users,
                title: "Multi-utilisateurs",
                description: "Gestion d'équipe avec niveaux d'accès et permissions granulaires.",
                stat: "50+",
                statLabel: "utilisateurs",
                color: "from-indigo-500 to-purple-600"
              },
              {
                icon: Zap,
                title: "Notifications push",
                description: "Alertes instantanées sur mobile pour réagir en temps réel.",
                stat: "<1s",
                statLabel: "latence",
                color: "from-pink-500 to-rose-600"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white">{feature.stat}</div>
                    <div className="text-sm text-gray-400">{feature.statLabel}</div>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expérience Invités - Modern Design */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Expérience{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Invités
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Une interface intuitive qui transforme chaque smartphone en studio photo professionnel
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  {
                    icon: QrCode,
                    title: "Accès magique",
                    description: "Un scan de QR code et c'est parti ! Aucune installation, aucune création de compte requise.",
                    color: "from-green-500 to-emerald-600"
                  },
                  {
                    icon: Camera,
                    title: "Studio dans la poche",
                    description: "Interface photo professionnelle avec preview temps réel, grilles de composition et stabilisation.",
                    color: "from-blue-500 to-cyan-600"
                  },
                  {
                    icon: Sparkles,
                    title: "IA créative",
                    description: "Bibliothèque exclusive de filtres IA : portraits Hollywood, effets artistiques, transformations magiques.",
                    color: "from-purple-500 to-pink-600"
                  },
                  {
                    icon: Share2,
                    title: "Partage viral",
                    description: "Diffusion instantanée multi-plateformes avec tracking des performances et analytics de portée.",
                    color: "from-orange-500 to-red-600"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start group">
                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative">
                <div className="relative w-full max-w-sm mx-auto">
                  {/* Advanced Phone Mockup */}
                  <div className="relative">
                    {/* Phone Shadow */}
                    <div className="absolute inset-0 bg-gray-900 rounded-[3rem] transform translate-x-2 translate-y-2 opacity-20"></div>
                    
                    {/* Phone Body */}
                    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl">
                      {/* Screen */}
                      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[2.5rem] overflow-hidden">
                        {/* Status Bar */}
                        <div className="flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-sm">
                          <span className="text-sm font-bold">9:41</span>
                          <span className="text-sm font-bold text-green-600">📶 5G</span>
                        </div>
                        
                        {/* App Header */}
                        <div className="px-6 py-4 bg-white/90 backdrop-blur-sm border-b border-gray-200">
                          <h4 className="text-lg font-bold text-center">📸 PhotoBooth Pro</h4>
                          <p className="text-sm text-gray-600 text-center">Mariage Sarah & Tom</p>
                        </div>
                        
                        {/* Camera Interface */}
                        <div className="p-6">
                          {/* Live Preview */}
                          <div className="bg-gray-800 rounded-3xl h-64 mb-6 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-white text-center">
                                <Camera className="w-12 h-12 mx-auto mb-2 opacity-75" />
                                <p className="text-sm opacity-75">Live Preview</p>
                              </div>
                            </div>
                            {/* Filter Overlay */}
                            <div className="absolute top-4 right-4">
                              <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                                <span className="text-white text-xs font-medium">✨ Vintage</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* AI Filters */}
                          <div className="flex justify-center space-x-3 mb-6">
                            {[
                              'bg-gradient-to-r from-pink-400 to-red-400',
                              'bg-gradient-to-r from-blue-400 to-purple-400',
                              'bg-gradient-to-r from-green-400 to-emerald-400',
                              'bg-gradient-to-r from-yellow-400 to-orange-400',
                              'bg-gradient-to-r from-indigo-400 to-purple-400'
                            ].map((gradient, i) => (
                              <div key={i} className={`w-10 h-10 ${gradient} rounded-full border-2 border-white shadow-lg`}></div>
                            ))}
                          </div>
                          
                          {/* Capture Button */}
                          <div className="flex justify-center">
                            <div className="relative">
                              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                                </div>
                              </div>
                              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-30 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating UI Elements */}
                  <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">Live</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-8 bg-white rounded-2xl p-4 shadow-xl animate-pulse">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-purple-500" />
                      <span className="text-sm font-medium">IA Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages révolutionnaires - Modern Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Les avantages d'une{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                révolution mobile
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Découvrez pourquoi notre approche mobile transforme complètement l'expérience photobooth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Zero Hardware",
                description: "Éliminez tous les coûts d'équipement et de maintenance. Chaque smartphone devient un studio photo professionnel.",
                icon: <Smartphone className="w-12 h-12 text-white" />,
                gradient: "from-green-500 to-emerald-600",
                stat: "100%",
                statLabel: "économie matériel"
              },
              {
                title: "Scalabilité infinie",
                description: "Plus de limites ! Tous vos invités peuvent participer simultanément sans file d'attente ni contrainte physique.",
                icon: <Users className="w-12 h-12 text-white" />,
                gradient: "from-blue-500 to-cyan-600",
                stat: "∞",
                statLabel: "utilisateurs simultanés"
              },
              {
                title: "Déploiement lightning",
                description: "Mise en place instantanée : partagez un QR code et votre photobooth est opérationnel partout dans le monde.",
                icon: <Zap className="w-12 h-12 text-white" />,
                gradient: "from-orange-500 to-red-600",
                stat: "30s",
                statLabel: "temps de setup"
              },
              {
                title: "Adaptabilité totale",
                description: "Modification en temps réel depuis n'importe où : thèmes, filtres, paramètres - tout s'adapte instantanément.",
                icon: <Cog className="w-12 h-12 text-white" />,
                gradient: "from-purple-500 to-pink-600",
                stat: "24/7",
                statLabel: "contrôle à distance"
              },
              {
                title: "Hygiène maximale",
                description: "Solution 100% sans contact utilisant les appareils personnels - parfait pour les environnements sanitaires stricts.",
                icon: <Lock className="w-12 h-12 text-white" />,
                gradient: "from-indigo-500 to-purple-600",
                stat: "0",
                statLabel: "contact physique"
              },
              {
                title: "Viralité amplifiée",
                description: "Partage naturel depuis les appareils personnels avec tracking avancé et optimisation pour les réseaux sociaux.",
                icon: <Share2 className="w-12 h-12 text-white" />,
                gradient: "from-pink-500 to-rose-600",
                stat: "+400%",
                statLabel: "taux de partage"
              }
            ].map((advantage, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent relative overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${advantage.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    {advantage.icon}
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{advantage.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{advantage.description}</p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <div className={`text-3xl font-bold bg-gradient-to-r ${advantage.gradient} bg-clip-text text-transparent`}>
                          {advantage.stat}
                        </div>
                        <div className="text-sm text-gray-500 font-medium">{advantage.statLabel}</div>
                      </div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages clients - Modern Design */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ils ont révolutionné leurs{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                événements
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment notre solution mobile a transformé leurs événements en expériences mémorables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "La solution mobile a révolutionné notre conférence annuelle. 500 participants, zéro file d'attente, et un engagement multiplié par 5. Les analytics en temps réel nous ont permis d'adapter le contenu instantanément !",
                author: "Claire Dubois",
                role: "Directrice Innovation, TechConf 2024",
                company: "TechConf",
                rating: 5,
                metric: "+500% engagement",
                avatar: "CD"
              },
              {
                quote: "Fini les photobooths encombrants ! Nos mariés adorent cette solution élégante qui s'intègre naturellement à leur événement. Le ROI est incomparable : plus de fonctionnalités pour 70% d'économies.",
                author: "Marc Laurent",
                role: "Wedding Planner Premium",
                company: "Moments Précieux",
                rating: 5,
                metric: "70% d'économies",
                avatar: "ML"
              },
              {
                quote: "L'aspect viral est phénoménal ! Notre festival a généré 10x plus de contenu sur les réseaux sociaux. La synchronisation cloud nous a permis de créer une galerie live spectaculaire en temps réel.",
                author: "Julia Mercier",
                role: "Creative Director",
                company: "Festival Lumières",
                rating: 5,
                metric: "10x plus de partages",
                avatar: "JM"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group">
                {/* Rating Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Metric */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
                  <div className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {testimonial.metric}
                  </div>
                  <div className="text-sm text-gray-600 text-center font-medium">Résultat mesuré</div>
                </div>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-purple-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Modern Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Questions{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                fréquentes
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Toutes les réponses aux questions essentielles sur notre révolution mobile
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Compatible avec tous les smartphones ?",
                answer: "Absolument ! Notre technologie web progressive fonctionne sur 99.8% des smartphones (iOS 12+, Android 8+). Aucun téléchargement requis - tout s'exécute dans le navigateur avec des performances natives.",
                icon: <Smartphone className="w-6 h-6 text-green-500" />
              },
              {
                question: "Aucune app à installer ?",
                answer: "Zéro installation ! C'est notre force révolutionnaire. Scan QR → Interface instantanée → Action immédiate. La technologie PWA offre une expérience app native sans les contraintes du téléchargement.",
                icon: <Zap className="w-6 h-6 text-blue-500" />
              },
              {
                question: "Comment l'accès fonctionne-t-il ?",
                answer: "Ultra-simple : QR code scanné = accès immédiat. Alternativement, lien direct shareable. Aucun compte, aucun mot de passe, aucune friction. L'expérience démarre en moins de 3 secondes.",
                icon: <QrCode className="w-6 h-6 text-purple-500" />
              },
              {
                question: "Qualité photo professionnelle ?",
                answer: "Supérieure aux photobooths traditionnels ! Nous exploitons la puissance des caméras smartphone (souvent 48MP+) avec nos algorithmes IA propriétaires pour un rendu studio professionnel automatique.",
                icon: <Camera className="w-6 h-6 text-pink-500" />
              },
              {
                question: "Personnalisation complète possible ?",
                answer: "Customisation illimitée en temps réel : branding complet, filtres IA exclusifs, thèmes sur-mesure, intégrations API. Tout modifiable instantanément depuis votre dashboard mobile.",
                icon: <Sparkles className="w-6 h-6 text-orange-500" />
              },
              {
                question: "Sécurité et confidentialité ?",
                answer: "Sécurité de niveau bancaire : chiffrement AES-256, conformité RGPD stricte, serveurs européens certifiés. Vos données et celles de vos invités sont protégées au plus haut niveau.",
                icon: <Lock className="w-6 h-6 text-indigo-500" />
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                      {faq.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Spectacular Design */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-white/90 font-medium">Révolution en cours</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Prêt à transformer
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                votre événement ?
              </span>
            </h2>
            
            <p className="text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
              Rejoignez la révolution mobile et créez des expériences photographiques qui marquent les esprits. 
              <strong className="text-yellow-300">Aucun matériel, aucune limite, que du génie !</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-indigo-600 bg-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
              >
                <Camera className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                Démo Live Maintenant
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full opacity-30 group-hover:opacity-70 blur transition-opacity"></div>
              </Link>
              
              <Link
                href="/pricing"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white border-3 border-white rounded-full backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <Zap className="mr-3 w-6 h-6 group-hover:text-yellow-300 transition-colors" />
                Tarifs Révolutionnaires
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="text-4xl font-bold mb-2">0€</div>
                <div className="text-lg text-white/80">Coût matériel</div>
                <div className="text-sm text-white/60 mt-2">100% mobile, 100% économique</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="text-4xl font-bold mb-2">∞</div>
                <div className="text-lg text-white/80">Utilisateurs simultanés</div>
                <div className="text-sm text-white/60 mt-2">Scalabilité sans limite</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="text-4xl font-bold mb-2">30s</div>
                <div className="text-lg text-white/80">Temps de déploiement</div>
                <div className="text-sm text-white/60 mt-2">Plus rapide que l'éclair</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}