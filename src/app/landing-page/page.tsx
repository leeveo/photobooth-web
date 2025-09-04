'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Palette, Smartphone, Users, BarChart, ArrowRight, Eye, Sparkles, Settings, Download, Globe, Target, TrendingUp, Zap, Heart, Share2, Database, Mail, Phone, MapPin, UserCheck, Briefcase, Calendar, Gift, Crown, Medal, Award, Play, Megaphone, Rocket } from 'lucide-react';

export default function LandingPagePersonnalisee() {

  const brandingFeatures = [
    {
      icon: Palette,
      title: "Branding complet",
      description: "Logo, couleurs, polices, tout est personnalisable selon votre charte graphique",
      stat: "100%",
      statLabel: "personnalisable"
    },
    {
      icon: Target,
      title: "Call-to-Action optimisés",
      description: "Boutons stratégiquement placés pour maximiser les conversions",
      stat: "+65%",
      statLabel: "de conversions"
    },
    {
      icon: Database,
      title: "Collecte de données",
      description: "Récupération automatique des informations utilisateurs avec consentement",
      stat: "RGPD",
      statLabel: "conforme"
    },
    {
      icon: Rocket,
      title: "Performance marketing",
      description: "Intégration avec vos outils de tracking et analytics existants",
      stat: "API",
      statLabel: "intégrée"
    }
  ];

  const dataFields = [
    { name: "Email", icon: Mail, required: true },
    { name: "Téléphone", icon: Phone, required: false },
    { name: "Nom complet", icon: UserCheck, required: true },
    { name: "Entreprise", icon: Briefcase, required: false },
    { name: "Localisation", icon: MapPin, required: false },
    { name: "Date de naissance", icon: Calendar, required: false }
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

        {/* Animated Branding Icons Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Palette Icons */}
          <div className="absolute top-20 left-10 animate-float-random-1">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg opacity-25 flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float-random-2">
            <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg opacity-30 flex items-center justify-center">
              <Palette className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Target Icons */}
          <div className="absolute top-32 right-16 animate-float-random-3">
            <div className="w-11 h-11 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg opacity-25 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-40 right-20 animate-float-random-4">
            <div className="w-13 h-13 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg opacity-35 flex items-center justify-center">
              <Target className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Database Icons */}
          <div className="absolute top-48 left-32 animate-float-random-5">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-30 flex items-center justify-center">
              <Database className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-24 right-40 animate-float-random-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-25 flex items-center justify-center">
              <Database className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Rocket Icons */}
          <div className="absolute top-72 right-24 animate-float-random-7">
            <div className="w-11 h-11 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg opacity-27 flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-48 left-40 animate-float-random-8">
            <div className="w-13 h-13 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg opacity-33 flex items-center justify-center">
              <Rocket className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Megaphone Icons */}
          <div className="absolute top-36 left-48 animate-float-random-9">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg opacity-25 flex items-center justify-center">
              <Megaphone className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="absolute bottom-36 right-48 animate-float-random-10">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg opacity-30 flex items-center justify-center">
              <Megaphone className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8">
              <Globe className="w-5 h-5 text-violet-300" />
              <span className="text-white/90 font-medium">Landing page personnalisée</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Page de
              </span>
              <br />
              <span className="text-white">Récupération</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Une landing page entièrement personnalisée à votre marque où vos clients récupèrent leurs photos tout en générant des leads qualifiés pour votre business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Créer ma landing page</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/demo"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Voir des exemples
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Palette className="w-8 h-8 text-violet-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">100% personnalisable</h3>
                  <p className="text-gray-300 text-sm">Votre branding complet</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Database className="w-8 h-8 text-pink-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Collecte de données</h3>
                  <p className="text-gray-300 text-sm">Leads qualifiés automatiques</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Target className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Marketing optimisé</h3>
                  <p className="text-gray-300 text-sm">CTA performants</p>
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
        `}</style>
      </section>

      {/* Section Personnalisation complète */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Personnalisation{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                complète
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Votre landing page reflète parfaitement votre identité de marque pour une expérience client cohérente
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Branding */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Palette className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Design sur mesure</h3>
              <p className="text-gray-600 leading-relaxed">
                Logo, couleurs, polices, mise en page. Tout s'adapte parfaitement à votre charte graphique existante.
              </p>
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Contenu personnalisé</h3>
              <p className="text-gray-600 leading-relaxed">
                Textes, messages, offres spéciales. Chaque mot est adapté à votre stratégie marketing et votre audience.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Call-to-Actions</h3>
              <p className="text-gray-600 leading-relaxed">
                Boutons stratégiquement placés pour diriger vos visiteurs vers vos objectifs business prioritaires.
              </p>
            </div>

            {/* Integration */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Settings className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Intégrations</h3>
              <p className="text-gray-600 leading-relaxed">
                Connexion avec vos outils CRM, emailing, analytics pour un workflow marketing optimisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mockup Landing Page */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contenu à gauche */}
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                  <Eye className="w-4 h-4 mr-2" />
                  Expérience utilisateur optimisée
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  Récupération simple et{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    engagement maximal
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Vos clients récupèrent leurs photos en quelques clics tout en découvrant vos offres et services. Une expérience fluide qui convertit.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-lg">
                      <Download className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Téléchargement instantané</h3>
                      <p className="text-gray-600">
                        Accès immédiat aux photos en haute qualité avec options de partage intégrées.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-3 rounded-lg">
                      <Gift className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Offres exclusives</h3>
                      <p className="text-gray-600">
                        Codes promo, offres spéciales et contenus premium présentés au moment optimal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Inscription newsletter</h3>
                      <p className="text-gray-600">
                        Collecte naturelle d'emails avec incitations pour rester en contact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mockup landing page à droite */}
              <div className="relative">
                <div className="relative mx-auto max-w-md">
                  {/* Browser frame */}
                  <div className="relative bg-gray-100 rounded-2xl p-4 shadow-2xl">
                    {/* Browser header */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white rounded-lg px-3 py-1 text-xs text-gray-500">
                        monbrand.com/photos/event123
                      </div>
                    </div>
                    
                    {/* Page content */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                      {/* Header with branding */}
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-center">
                        <div className="w-12 h-12 bg-white rounded-lg mx-auto mb-3 flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-lg">M</span>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-1">Ma Marque</h3>
                        <p className="text-purple-100 text-sm">Récupérez vos photos d'événement</p>
                      </div>
                      
                      {/* Photo preview */}
                      <div className="p-6">
                        <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl mb-4 flex items-center justify-center">
                          <div className="text-4xl">📸</div>
                        </div>
                        
                        {/* Download button */}
                        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold mb-4">
                          📥 Télécharger mes photos
                        </button>
                        
                        {/* Offer banner */}
                        <div className="bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-xl p-4 mb-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Gift className="w-4 h-4 text-orange-600" />
                            <span className="text-orange-800 font-semibold text-sm">Offre exclusive !</span>
                          </div>
                          <p className="text-orange-700 text-xs mb-2">-20% sur votre prochaine commande</p>
                          <button className="bg-orange-500 text-white px-4 py-1 rounded-lg text-xs font-medium">
                            Profiter de l'offre
                          </button>
                        </div>
                        
                        {/* Newsletter signup */}
                        <div className="border border-gray-200 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-800 mb-2 text-sm">Restez informé !</h4>
                          <div className="flex space-x-2">
                            <input 
                              placeholder="Email" 
                              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-xs"
                            />
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-xs font-medium">
                              OK
                            </button>
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

      {/* Section Collecte de données */}
      <section className="py-20 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Collecte de{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Données
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transformez chaque téléchargement de photo en opportunité de génération de leads qualifiés
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            {/* Formulaire de collecte */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-12">
              <h3 className="text-2xl font-bold text-white text-center mb-6 flex items-center justify-center">
                <Database className="w-6 h-6 mr-2" />
                Données collectées (avec consentement)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dataFields.map((field, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500/30 rounded-lg flex items-center justify-center">
                        <field.icon className="w-4 h-4 text-blue-300" />
                      </div>
                      <span className="text-white font-medium">{field.name}</span>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      field.required 
                        ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
                        : 'bg-green-500/20 text-green-300 border border-green-500/30'
                    }`}>
                      {field.required ? 'Requis' : 'Optionnel'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conformité RGPD */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <UserCheck className="w-6 h-6 text-green-400 mr-3" />
                  <h4 className="text-xl font-bold text-white">Conformité RGPD</h4>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Consentement explicite requis</li>
                  <li>• Droit à l'effacement respecté</li>
                  <li>• Données chiffrées et sécurisées</li>
                  <li>• Politique de confidentialité claire</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <BarChart className="w-6 h-6 text-blue-400 mr-3" />
                  <h4 className="text-xl font-bold text-white">Exploitation des données</h4>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Segmentation automatique</li>
                  <li>• Campagnes email ciblées</li>
                  <li>• Analyse comportementale</li>
                  <li>• Scoring de qualification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités marketing */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Fonctionnalités{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Marketing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Tous les outils nécessaires pour transformer vos visiteurs en clients fidèles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandingFeatures.map((feature, index) => (
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

          {/* Analytics et tracking */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Analytics et performance</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">89%</div>
                <div className="text-sm text-gray-600">Taux de conversion</div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2.4x</div>
                <div className="text-sm text-gray-600">Engagement vs standard</div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">156%</div>
                <div className="text-sm text-gray-600">ROI campagne</div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24h</div>
                <div className="text-sm text-gray-600">Durée d'engagement</div>
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
              Pourquoi choisir une{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                landing page personnalisée ?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Maximisez le potentiel de chaque interaction avec vos clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Conversion optimisée",
                description: "Design et parcours utilisateur pensés pour maximiser les conversions et générer plus de leads qualifiés.",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: Palette,
                title: "Cohérence de marque",
                description: "Expérience 100% alignée avec votre identité visuelle pour renforcer la reconnaissance de marque.",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: Database,
                title: "Data précieuses",
                description: "Collecte intelligente de données clients pour alimenter vos stratégies marketing futures.",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: Zap,
                title: "Mise en place rapide",
                description: "Déploiement en 48h avec personnalisation complète selon vos spécifications.",
                color: "from-orange-500 to-red-600"
              },
              {
                icon: TrendingUp,
                title: "ROI mesurable",
                description: "Analytics détaillés pour mesurer l'impact réel sur votre business et optimiser en continu.",
                color: "from-indigo-500 to-purple-600"
              },
              {
                icon: Users,
                title: "Engagement prolongé",
                description: "Garde vos clients connectés à votre marque bien après l'événement initial.",
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
              Créez Votre Landing Page Maintenant
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transformez vos événements en machine à leads avec une landing page personnalisée 
              qui convertit et fidélise vos clients !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg shadow-2xl hover:bg-gray-50 transition-all duration-300 group"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Lancer mon projet
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2" />
                Voir des exemples
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Palette className="w-6 h-6" />
                </div>
                <div className="font-semibold">100% Personnalisé</div>
                <div className="text-sm opacity-80">Votre branding</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Database className="w-6 h-6" />
                </div>
                <div className="font-semibold">Collecte de Données</div>
                <div className="text-sm opacity-80">Leads qualifiés</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="font-semibold">ROI Optimisé</div>
                <div className="text-sm opacity-80">Performance mesurée</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
