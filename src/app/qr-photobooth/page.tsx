'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { QrCode, Smartphone, Zap, Share2, Globe, Shield, Users, Layout, Camera, Sparkles, ArrowRight, Star, Eye, Grid, Monitor, Tablet } from 'lucide-react';

export default function QrPhotobooth() {
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
              <QrCode className="w-5 h-5 text-violet-300" />
              <span className="text-white/90 font-medium">Sans installation</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                QR Photobooth
              </span>
              <br />
              <span className="text-white">Sans Contact</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Une solution moderne et hygiénique qui transforme les smartphones de vos invités en photobooths IA personnels.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link
                href="https://photobooth.waibooth.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Tester maintenant</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Contactez-nous
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Shield className="w-8 h-8 text-violet-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">100% Hygiénique</h3>
                  <p className="text-gray-300 text-sm">Zéro contact physique</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Users className="w-8 h-8 text-pink-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Capacité illimitée</h3>
                  <p className="text-gray-300 text-sm">Tous vos invités simultanément</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">IA personnalisée</h3>
                  <p className="text-gray-300 text-sm">Filtres sur mesure</p>
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
              Pourquoi choisir le QR Photobooth ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La solution photobooth la plus moderne, hygiénique et accessible pour tous vos événements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Encart 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">100% Sans contact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Solution entièrement hygiénique qui évite tout contact physique avec du matériel partagé, idéale pour l'ère post-COVID.
                </p>
              </div>
            </div>

            {/* Encart 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <QrCode className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Accès instantané</h3>
                <p className="text-gray-600 leading-relaxed">
                  Un simple scan de QR code permet l'accès immédiat sans téléchargement d'application ni installation complexe.
                </p>
              </div>
            </div>

            {/* Encart 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Capacité illimitée</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tous vos invités peuvent utiliser le photobooth simultanément, éliminant les files d'attente et maximisant l'engagement.
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
              Impact du QR Photobooth
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des résultats exceptionnels qui révolutionnent l'expérience photobooth traditionnelle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Statistique 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  +300%
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Engagement</div>
                <div className="text-sm text-gray-600">Vs photobooth traditionnel</div>
              </div>
            </div>

            {/* Statistique 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  2-3s
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Temps d'accès</div>
                <div className="text-sm text-gray-600">Scan QR → Interface</div>
              </div>
            </div>

            {/* Statistique 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">
                  ∞
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Utilisateurs</div>
                <div className="text-sm text-gray-600">Simultanés possibles</div>
              </div>
            </div>

            {/* Statistique 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  85%
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Partage social</div>
                <div className="text-sm text-gray-600">Taux de diffusion</div>
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
              <h2 className="text-3xl font-bold mb-6">Qu'est-ce que le QR Photobooth ?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Le QR Photobooth est une solution innovante qui permet à vos invités de profiter d'une expérience photobooth complète directement depuis leur smartphone, sans télécharger d'application.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Un simple scan de QR code suffit pour accéder instantanément à notre interface web où ils pourront prendre des photos, appliquer des filtres IA personnalisés et partager leurs créations - le tout sans manipulation d'équipement partagé.
              </p>
              <div className="bg-violet-50 border border-violet-100 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <Shield className="w-5 h-5 text-violet-600 mr-2" />
                  Solution idéale post-COVID
                </h3>
                <p className="text-gray-700">
                  Notre solution sans contact est parfaitement adaptée aux préoccupations sanitaires actuelles, offrant une alternative hygiénique aux écrans tactiles partagés tout en maintenant l'expérience sociale d'un photobooth.
                </p>
              </div>
              <Link 
                href="https://photobooth.waibooth.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Connexion à la plateforme
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-[500px]">
                <div className="absolute top-0 left-0 right-0 mx-auto w-64 h-[500px]">
                  <Image
                    src="/qr-photobooth/phone-frame.png"
                    alt="Smartphone frame"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-[60px] left-[22px] w-[220px] h-[380px] overflow-hidden rounded-[18px]">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src="/qr-photobooth/interface-demo.mp4" type="video/mp4" />
                    Votre navigateur ne prend pas en charge la vidéo HTML5.
                  </video>
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
              <QrCode className="w-4 h-4 mr-2" />
              Processus QR sans contact
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-300">
              Un processus révolutionnaire sans contact en 5 étapes pour une expérience photo hygiénique
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
                  title: "Scannez le QR code",
                  description: "Simple scan avec l'appareil photo du smartphone",
                  color: "from-purple-500 to-pink-500",
                  icon: <QrCode className="w-12 h-12" />
                },
                {
                  step: "02", 
                  title: "Interface web instantanée",
                  description: "Accès direct sans téléchargement d'application",
                  color: "from-blue-500 to-purple-500",
                  icon: <Smartphone className="w-12 h-12" />
                },
                {
                  step: "03",
                  title: "Création photo IA",
                  description: "Capture et transformation avec filtres personnalisés",
                  color: "from-green-500 to-blue-500",
                  icon: <Sparkles className="w-12 h-12" />
                },
                {
                  step: "04",
                  title: "Aperçu et édition",
                  description: "Prévisualisation et ajustements en temps réel",
                  color: "from-orange-500 to-red-500",
                  icon: <Eye className="w-12 h-12" />
                },
                {
                  step: "05",
                  title: "Partage instantané",
                  description: "Téléchargement et diffusion sur réseaux sociaux",
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/20">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <QrCode className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Sans contact, Sans limite, <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Sans compromis !</span>
                </h3>
                <p className="text-xl text-gray-300 mb-8">
                  En <span className="text-purple-400 font-bold">quelques secondes</span>, transformez chaque smartphone en photobooth IA personnel et hygiénique.
                </p>
                <Link
                  href="https://photobooth.waibooth.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg group"
                >
                  <span>Tester maintenant</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Importance des QR Codes */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">L'importance des QR codes dans notre solution SaaS</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Les QR codes sont le cœur de notre stratégie de scalabilité et de partage, révolutionnant l'expérience photobooth traditionnelle
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Partage et Viralité */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                    <Share2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Partage viral optimisé</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-700"><strong>Partage instantané :</strong> Chaque création est immédiatement partageable depuis le smartphone de l'utilisateur</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-700"><strong>Effet réseau :</strong> Chaque partage contient automatiquement un QR code pour attirer de nouveaux utilisateurs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-700"><strong>Traçabilité :</strong> Analytics précises sur la propagation et l'engagement des contenus partagés</p>
                  </div>
                </div>
              </div>

              {/* Scalabilité */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Scalabilité illimitée</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700"><strong>Capacité infinie :</strong> Pas de limite d'utilisateurs simultanés, chacun utilise son propre appareil</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700"><strong>Multi-dispositifs :</strong> Compatible smartphones, tablettes, et même ordinateurs via webcam</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700"><strong>Déploiement instantané :</strong> Un seul QR code peut servir des milliers d'utilisateurs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Multi-appareils */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Un écosystème multi-appareils unifié</h3>
                  <p className="text-xl opacity-90 mb-6">
                    Notre solution QR code permet de transformer n'importe quel appareil en photobooth IA, 
                    créant un réseau scalable et flexible pour tous vos événements.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                      <Smartphone className="w-12 h-12 mx-auto mb-2 opacity-90" />
                      <p className="text-sm">Smartphones</p>
                    </div>
                    <div className="text-center">
                      <Tablet className="w-12 h-12 mx-auto mb-2 opacity-90" />
                      <p className="text-sm">Tablettes</p>
                    </div>
                    <div className="text-center">
                      <Monitor className="w-12 h-12 mx-auto mb-2 opacity-90" />
                      <p className="text-sm">Ordinateurs</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="text-xl font-bold mb-4">Avantages techniques</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>Aucune installation requise</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>Compatible tous navigateurs</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>Synchronisation cloud temps réel</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>Analytics cross-dispositifs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section ROI et Metrics */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-center mb-8">Impact mesurable de notre approche QR</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">+300%</div>
                  <p className="text-sm text-gray-600">Engagement utilisateur vs photobooth traditionnel</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">2-3s</div>
                  <p className="text-sm text-gray-600">Temps d'attente moyen</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
                  <p className="text-sm text-gray-600">Utilisateurs simultanés possibles</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
                  <p className="text-sm text-gray-600">Taux de partage sur réseaux sociaux</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Comment fonctionne le QR Photobooth ?</h2>
            <p className="text-lg text-gray-700">
              Une expérience utilisateur fluide en seulement quelques étapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <QrCode className="w-12 h-12 text-violet-600" />,
                title: "Scannez",
                description: "L'invité scanne le QR code affiché sur votre stand ou sur les tables de votre événement."
              },
              {
                icon: <Smartphone className="w-12 h-12 text-violet-600" />,
                title: "Accédez",
                description: "L'interface web s'ouvre immédiatement sans téléchargement d'application nécessaire."
              },
              {
                icon: <Zap className="w-12 h-12 text-violet-600" />,
                title: "Créez",
                description: "L'utilisateur prend des photos et applique des filtres IA personnalisés à votre événement."
              },
              {
                icon: <Share2 className="w-12 h-12 text-violet-600" />,
                title: "Partagez",
                description: "Les créations peuvent être téléchargées, partagées sur les réseaux sociaux ou ajoutées à la galerie."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute mt-10 left-full">
                    <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z" fill="#8B5CF6"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Les avantages du QR Photobooth</h2>
            <p className="text-lg text-gray-700">
              Une solution moderne qui allie simplicité, hygiène et impact visuel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-violet-600" />,
                title: "Solution sans contact",
                description: "Évitez les écrans partagés et offrez une expérience hygiénique à vos invités."
              },
              {
                icon: <Zap className="w-12 h-12 text-violet-600" />,
                title: "Installation instantanée",
                description: "Aucun équipement lourd à installer - seuls des QR codes à placer stratégiquement."
              },
              {
                icon: <Users className="w-12 h-12 text-violet-600" />,
                title: "Capacité illimitée",
                description: "Pas de file d'attente, tous vos invités peuvent l'utiliser simultanément."
              },
              {
                icon: <Globe className="w-12 h-12 text-violet-600" />,
                title: "Accessible partout",
                description: "Fonctionne sur tous les smartphones modernes sans discrimination de système."
              },
              {
                icon: <Layout className="w-12 h-12 text-violet-600" />,
                title: "Personnalisation complète",
                description: "Interface aux couleurs de votre événement avec filtres IA sur-mesure."
              },
              {
                icon: <Share2 className="w-12 h-12 text-violet-600" />,
                title: "Partage instantané",
                description: "Les invités partagent directement depuis leur appareil, maximisant la visibilité."
              }
            ].map((advantage, index) => (
              <div key={index} className="card bg-white">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="rounded-lg p-3 bg-violet-100 mr-4">
                      {advantage.icon}
                    </div>
                    <h3 className="text-xl font-bold">{advantage.title}</h3>
                  </div>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'usage QR Photobooth */}
   {/* Cas d'usage QR Photobooth */}
<section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl font-bold mb-4">Cas d'usage du QR Photobooth</h2>
      <p className="text-lg text-gray-700">
        Découvrez comment le QR Photobooth s'adapte à tous vos événements et contextes pour maximiser l'engagement et la viralité.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Mariages & fêtes privées",
          description: "Offrez à vos invités la possibilité de capturer des souvenirs uniques et de les partager instantanément, sans file d'attente ni manipulation d'équipement.",
          image: "/qr-photobooth/use-wedding.jpg"
        },
        {
          title: "Événements d'entreprise",
          description: "Renforcez la cohésion d'équipe et la visibilité de votre marque lors de séminaires, team building ou soirées corporate grâce à une expérience photo moderne et personnalisée.",
          image: "/qr-photobooth/use-corporate.jpg"
        },
        {
          title: "Salons & expositions",
          description: "Générez du trafic sur votre stand et collectez des leads qualifiés en proposant une animation photo innovante et virale.",
          image: "/qr-photobooth/use-expo.jpg"
        },
        {
          title: "Festivals & concerts",
          description: "Permettez à chaque participant de repartir avec un souvenir personnalisé et partageable sur les réseaux sociaux, amplifiant la portée de votre événement.",
          image: "/qr-photobooth/use-festival.jpg"
        },
        {
          title: "Lancements de produit",
          description: "Créez le buzz autour de votre nouveauté en invitant les participants à générer et partager des photos brandées à votre image.",
          image: "/qr-photobooth/use-product.jpg"
        },
        {
          title: "Événements caritatifs",
          description: "Fédérez votre communauté autour d'une cause en facilitant la création et le partage de contenus solidaires et engageants.",
          image: "/qr-photobooth/use-charity.jpg"
        }
      ].map((useCase, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col h-full">
          <div className="relative h-48 w-full">
            <Image
              src={useCase.image}
              alt={useCase.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4">
                <h3 className="text-white font-bold text-xl">{useCase.title}</h3>
              </div>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <p className="text-gray-700 mb-4">{useCase.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à moderniser l'expérience photo de votre événement ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Offrez à vos invités une solution photo contemporaine, hygiénique et sans contrainte.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                contactez nous
              </Link>
              <Link
                href="/demo"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander une démonstration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
