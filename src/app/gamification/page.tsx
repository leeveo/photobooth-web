'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Trophy, Smartphone, Gamepad2, Users, Star, ArrowRight, Eye, Sparkles, Settings, BarChart, Crown, Medal, Award, Gift, Zap, Target, TrendingUp, Globe, Heart, ThumbsUp, Share2, Download, ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function GamificationPage() {

  const podiumFeatures = [
    { 
      position: 2, 
      title: "Argent", 
      color: "from-gray-400 to-gray-600",
      description: "2ème place" 
    },
    { 
      position: 1, 
      title: "Or", 
      color: "from-yellow-400 to-yellow-600",
      description: "Champion"
    },
    { 
      position: 3, 
      title: "Bronze", 
      color: "from-orange-400 to-orange-600",
      description: "3ème place"
    }
  ];

  const gameFeatures = [
    {
      icon: Heart,
      title: "Système de votes",
      description: "Les participants votent pour leurs photos préférées en temps réel",
      stat: "+78%",
      statLabel: "d'engagement"
    },
    {
      icon: Trophy,
      title: "Podium en direct",
      description: "Classement mis à jour automatiquement pendant l'événement",
      stat: "3 sec",
      statLabel: "mise à jour"
    },
    {
      icon: Share2,
      title: "Partage viral",
      description: "Les gagnants partagent automatiquement leur victoire",
      stat: "+400%",
      statLabel: "de partages"
    },
    {
      icon: Gift,
      title: "Récompenses",
      description: "Remises de prix automatiques pour les gagnants",
      stat: "100%",
      statLabel: "automatisé"
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

        {/* Animated Gaming Icons Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Trophy Icons */}
          <div className="absolute top-20 left-10 animate-float-random-1">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg opacity-25 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float-random-2">
            <div className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg opacity-30 flex items-center justify-center">
              <Trophy className="w-7 h-7 text-white" />
            </div>
          </div>
          <div className="absolute bottom-32 left-24 animate-float-random-3">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg opacity-20 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Star Icons */}
          <div className="absolute top-32 right-16 animate-float-random-4">
            <div className="w-11 h-11 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg opacity-25 flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-40 right-20 animate-float-random-5">
            <div className="w-13 h-13 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg opacity-35 flex items-center justify-center">
              <Star className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Medal Icons */}
          <div className="absolute top-48 left-32 animate-float-random-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg opacity-30 flex items-center justify-center">
              <Medal className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-24 right-40 animate-float-random-7">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg opacity-25 flex items-center justify-center">
              <Medal className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Crown Icons */}
          <div className="absolute top-72 right-24 animate-float-random-8">
            <div className="w-11 h-11 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg opacity-27 flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-48 left-40 animate-float-random-9">
            <div className="w-13 h-13 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg opacity-33 flex items-center justify-center">
              <Crown className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Heart Icons */}
          <div className="absolute top-36 left-48 animate-float-random-10">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg opacity-25 flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="absolute bottom-36 right-48 animate-float-random-11">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg opacity-30 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8">
              <Gamepad2 className="w-5 h-5 text-violet-300" />
              <span className="text-white/90 font-medium">Expérience gamifiée</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Photo
              </span>
              <br />
              <span className="text-white">Gaming</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transformez vos événements en compétitions interactives où les participants s'affrontent pour créer les meilleures photos et remporter des prix.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Activer la gamification</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/demo"
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
                  <Trophy className="w-8 h-8 text-violet-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Compétition en direct</h3>
                  <p className="text-gray-300 text-sm">Classement temps réel</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Heart className="w-8 h-8 text-pink-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Votes du public</h3>
                  <p className="text-gray-300 text-sm">Interaction maximale</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Gift className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Récompenses</h3>
                  <p className="text-gray-300 text-sm">Prix automatiques</p>
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

      {/* Section Comment ça marche */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment fonctionne la{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                gamification ?
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Une expérience interactive complète qui transforme votre photobooth en véritable jeu compétitif
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Étape 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">1. Prise de photo</h3>
              <p className="text-gray-600 leading-relaxed">
                Les participants prennent leurs photos avec le photobooth ou leur smartphone via QR code. Chaque photo est automatiquement ajoutée au concours.
              </p>
            </div>

            {/* Étape 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">2. Galerie interactive</h3>
              <p className="text-gray-600 leading-relaxed">
                Toutes les photos apparaissent en temps réel sur l'écran principal. Les participants peuvent swiper à droite ou gauche pour naviguer dans la galerie.
              </p>
            </div>

            {/* Étape 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">3. Votes du public</h3>
              <p className="text-gray-600 leading-relaxed">
                Les invités votent pour leurs photos préférées via leur smartphone. Chaque vote fait monter la photo dans le classement en temps réel.
              </p>
            </div>

            {/* Étape 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">4. Podium des gagnants</h3>
              <p className="text-gray-600 leading-relaxed">
                Les 3 meilleures photos s'affichent automatiquement sur le podium. Les gagnants reçoivent leurs prix et peuvent partager leur victoire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Interface Mobile */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contenu à gauche */}
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Interface mobile optimisée
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  Récupération et{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    participation
                  </span>
                  {' '}sur mobile
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Vos invités peuvent non seulement récupérer leurs photos sur leur smartphone, mais aussi participer activement au jeu en votant et en consultant le classement en temps réel.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-3 rounded-lg">
                      <Download className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Récupération instantanée</h3>
                      <p className="text-gray-600">
                        Scan du QR code pour accéder immédiatement à leurs photos et les télécharger en haute qualité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-lg">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Vote interactif</h3>
                      <p className="text-gray-600">
                        Interface de vote simple et intuitive pour choisir les meilleures photos de l'événement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-lg">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Galerie swipeable</h3>
                      <p className="text-gray-600">
                        Navigation fluide par swipe pour parcourir toutes les photos prises pendant l'événement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mockup mobile à droite */}
              <div className="relative">
                <div className="relative mx-auto max-w-sm">
                  {/* Phone frame */}
                  <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                    <div className="bg-white rounded-[2.5rem] overflow-hidden">
                      {/* Status bar */}
                      <div className="bg-gray-100 px-6 py-3 flex justify-between items-center text-sm">
                        <span className="font-medium">9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                          <div className="w-6 h-3 border border-gray-400 rounded-sm">
                            <div className="w-4 h-1.5 bg-green-500 rounded-xs m-0.5"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* App content */}
                      <div className="bg-gradient-to-br from-purple-50 to-blue-50 h-[600px] p-4">
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">Photo Contest</h3>
                          <p className="text-sm text-gray-600">Votez pour votre photo préférée !</p>
                        </div>
                        
                        {/* Photo card */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
                          <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                            <div className="text-6xl">📸</div>
                          </div>
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm font-medium text-gray-600">Photo #127</span>
                              <div className="flex items-center space-x-1">
                                <Heart className="w-4 h-4 text-red-500" />
                                <span className="text-sm font-bold text-red-500">47</span>
                              </div>
                            </div>
                            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold">
                              ❤️ Voter pour cette photo
                            </button>
                          </div>
                        </div>
                        
                        {/* Navigation */}
                        <div className="flex justify-center space-x-4 mb-4">
                          <button className="bg-white p-3 rounded-full shadow-lg">
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                          </button>
                          <button className="bg-white p-3 rounded-full shadow-lg">
                            <ChevronRight className="w-6 h-6 text-gray-600" />
                          </button>
                        </div>
                        
                        {/* Podium preview */}
                        <div className="bg-white rounded-xl p-4 shadow-lg">
                          <h4 className="font-bold text-center mb-3">🏆 Top 3</h4>
                          <div className="flex justify-center items-end space-x-2">
                            <div className="text-center">
                              <div className="w-8 h-8 bg-gray-400 rounded mb-1"></div>
                              <div className="text-xs">2ème</div>
                            </div>
                            <div className="text-center">
                              <div className="w-10 h-10 bg-yellow-400 rounded mb-1"></div>
                              <div className="text-xs">1er</div>
                            </div>
                            <div className="text-center">
                              <div className="w-8 h-8 bg-orange-400 rounded mb-1"></div>
                              <div className="text-xs">3ème</div>
                            </div>
                          </div>
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

      {/* Section Podium et classement */}
      <section className="py-20 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Podium des{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Champions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Les 3 meilleures photos s'affichent automatiquement sur le podium avec animation spectaculaire
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            {/* Podium 3D */}
            <div className="relative flex justify-center items-end space-x-4 mb-12">
              {podiumFeatures.map((podium, index) => (
                <div 
                  key={podium.position}
                  className={`relative text-center ${podium.position === 1 ? 'order-2' : podium.position === 2 ? 'order-1' : 'order-3'}`}
                >
                  {/* Photo placeholder */}
                  <div className={`${podium.position === 1 ? 'w-32 h-32 mb-4' : 'w-24 h-24 mb-3'} mx-auto rounded-2xl bg-gradient-to-br ${podium.color} shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300`}>
                    <div className="text-4xl">📸</div>
                  </div>
                  
                  {/* Crown for winner */}
                  {podium.position === 1 && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <Crown className="w-8 h-8 text-yellow-400 animate-bounce" />
                    </div>
                  )}
                  
                  {/* Podium step */}
                  <div className={`bg-gradient-to-t ${podium.color} ${podium.position === 1 ? 'h-24' : podium.position === 2 ? 'h-16' : 'h-12'} w-20 rounded-t-lg shadow-xl mx-auto flex items-end justify-center pb-2`}>
                    <div className="text-white font-bold text-lg">{podium.position}</div>
                  </div>
                  
                  {/* Position label */}
                  <div className="mt-3">
                    <div className={`text-lg font-bold ${podium.position === 1 ? 'text-yellow-400' : podium.position === 2 ? 'text-gray-300' : 'text-orange-400'}`}>
                      {podium.title}
                    </div>
                    <div className="text-sm text-gray-400">{podium.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Classement en temps réel */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white text-center mb-6 flex items-center justify-center">
                <BarChart className="w-6 h-6 mr-2" />
                Classement en temps réel
              </h3>
              
              <div className="space-y-4">
                {[
                  { position: 1, votes: 47, author: "Marie L.", trending: "up" },
                  { position: 2, votes: 42, author: "Thomas R.", trending: "up" },
                  { position: 3, votes: 38, author: "Sophie M.", trending: "down" },
                  { position: 4, votes: 35, author: "Alex P.", trending: "up" },
                  { position: 5, votes: 31, author: "Julie K.", trending: "same" }
                ].map((photo, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        photo.position === 1 ? 'bg-yellow-500 text-black' :
                        photo.position === 2 ? 'bg-gray-400 text-white' :
                        photo.position === 3 ? 'bg-orange-500 text-white' :
                        'bg-blue-500 text-white'
                      }`}>
                        {photo.position}
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                        <span className="text-lg">📸</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">Photo de {photo.author}</div>
                        <div className="text-gray-300 text-sm">Il y a 2 min</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-red-400" />
                        <span className="text-white font-bold">{photo.votes}</span>
                      </div>
                      {photo.trending === 'up' && <TrendingUp className="w-4 h-4 text-green-400" />}
                      {photo.trending === 'down' && <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités gamification */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Fonctionnalités de{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                gamification
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Un système complet d'engagement qui transforme votre événement en expérience mémorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gameFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{feature.stat}</div>
                        <div className="text-sm text-gray-600">{feature.statLabel}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Configuration admin */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <Settings className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Configuration administrateur</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-800 mb-3">🎮 Mode de jeu</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Activation/désactivation du concours</li>
                  <li>• Durée de la compétition</li>
                  <li>• Nombre de votes par personne</li>
                  <li>• Modération des photos</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-800 mb-3">🏆 Récompenses</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Nombre de gagnants (top 3, 5, 10...)</li>
                  <li>• Types de prix (bons d'achat, produits...)</li>
                  <li>• Distribution automatique</li>
                  <li>• Certificats personnalisés</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-800 mb-3">📊 Analytics</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Taux de participation</li>
                  <li>• Nombre de votes total</li>
                  <li>• Photos les plus populaires</li>
                  <li>• Engagement par participant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Pourquoi choisir la{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                gamification ?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Transformez vos événements en expériences inoubliables qui marquent les esprits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Engagement maximal",
                description: "Les participants restent actifs pendant tout l'événement, créant une ambiance dynamique et participative.",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: Share2,
                title: "Viralité garantie",
                description: "Les gagnants partagent automatiquement leur victoire, multipliant la visibilité de votre événement.",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: Target,
                title: "Mémorabilité",
                description: "Une expérience unique qui marque les esprits et crée des souvenirs durables pour tous les participants.",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: BarChart,
                title: "Données précieuses",
                description: "Collectez des insights sur vos participants et mesurez l'engagement en temps réel.",
                color: "from-orange-500 to-red-600"
              },
              {
                icon: Zap,
                title: "Simplicité d'usage",
                description: "Interface intuitive qui ne nécessite aucune formation. Vos invités comprennent instantanément.",
                color: "from-indigo-500 to-purple-600"
              },
              {
                icon: Globe,
                title: "Diffusion étendue",
                description: "Chaque photo devient un vecteur de communication pour votre marque sur les réseaux sociaux.",
                color: "from-pink-500 to-rose-600"
              }
            ].map((advantage, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${advantage.color} rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300`}></div>
                <div className="relative bg-white rounded-3xl p-8 h-full border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à Gamifier Votre Événement ?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transformez votre photobooth en expérience de jeu interactive et créez l'événement 
              dont tout le monde se souviendra !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg shadow-2xl hover:bg-gray-50 transition-all duration-300 group"
              >
                <Gamepad2 className="w-5 h-5 mr-2" />
                Activer la gamification
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2" />
                Voir une démo
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Trophy className="w-6 h-6" />
                </div>
                <div className="font-semibold">Compétition Interactive</div>
                <div className="text-sm opacity-80">En temps réel</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <div className="font-semibold">Engagement Maximum</div>
                <div className="text-sm opacity-80">Participation active</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Star className="w-6 h-6" />
                </div>
                <div className="font-semibold">Expérience Mémorable</div>
                <div className="text-sm opacity-80">Souvenirs durables</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
