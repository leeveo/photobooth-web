'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Grid, Users, Clock, Camera, Share2, Zap, BarChart, Heart, Sparkles, ArrowRight, Star, Eye } from 'lucide-react';

export default function Photomosaique() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900 relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/5 to-indigo-600/5 rounded-full blur-3xl"></div>
          
          {/* Lumière animée qui se ballade */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-gradient-radial from-yellow-300/60 via-orange-400/40 to-yellow-200/20 rounded-full blur-2xl animate-[float_8s_ease-in-out_infinite]" 
                 style={{
                   animation: 'floatingLight 12s ease-in-out infinite',
                   animationDelay: '0s'
                 }}>
            </div>
            <div className="absolute w-64 h-64 bg-gradient-radial from-purple-300/50 via-violet-400/30 to-purple-200/15 rounded-full blur-xl animate-[float_10s_ease-in-out_infinite]" 
                 style={{
                   animation: 'floatingLight2 15s ease-in-out infinite reverse',
                   animationDelay: '2s'
                 }}>
            </div>
            <div className="absolute w-80 h-80 bg-gradient-radial from-indigo-300/40 via-blue-400/25 to-indigo-200/12 rounded-full blur-2xl" 
                 style={{
                   animation: 'floatingLight3 18s ease-in-out infinite',
                   animationDelay: '4s'
                 }}>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes floatingLight {
            0% { transform: translate(-20%, 80%) scale(0.8); opacity: 0.7; }
            25% { transform: translate(120%, 20%) scale(1.2); opacity: 1.0; }
            50% { transform: translate(80%, -10%) scale(0.9); opacity: 0.8; }
            75% { transform: translate(-10%, 30%) scale(1.1); opacity: 0.9; }
            100% { transform: translate(-20%, 80%) scale(0.8); opacity: 0.7; }
          }
          
          @keyframes floatingLight2 {
            0% { transform: translate(110%, -20%) scale(0.7); opacity: 0.6; }
            30% { transform: translate(-20%, 40%) scale(1.0); opacity: 0.9; }
            60% { transform: translate(60%, 90%) scale(0.8); opacity: 0.7; }
            100% { transform: translate(110%, -20%) scale(0.7); opacity: 0.6; }
          }
          
          @keyframes floatingLight3 {
            0% { transform: translate(20%, 100%) scale(0.6); opacity: 0.5; }
            40% { transform: translate(80%, 10%) scale(1.1); opacity: 0.8; }
            80% { transform: translate(10%, 60%) scale(0.9); opacity: 0.6; }
            100% { transform: translate(20%, 100%) scale(0.6); opacity: 0.5; }
          }
        `}</style>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/20 text-violet-300 text-sm font-medium mb-6">
              <Grid className="w-4 h-4 mr-2" />
              Art Collaboratif
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Photo{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                mosaïque
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transformez les photos de vos invités en une œuvre d'art spectaculaire et évolutive qui capte l'essence de votre événement.
            </p>
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/photomosaique/mosaic-hero.jpg"
                alt="Photomosaïque en action lors d'un événement"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                    Expérience collective
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Encarts informatifs */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Pourquoi choisir la photomosaïque ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une expérience collaborative unique qui transforme votre événement en œuvre d'art collective
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Encart 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Art collaboratif en temps réel</h3>
                <p className="text-gray-600 leading-relaxed">
                  Chaque photo prise par vos invités contribue immédiatement à la création d'une œuvre d'art unique qui évolue tout au long de votre événement.
                </p>
              </div>
            </div>

            {/* Encart 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Engagement maximum</h3>
                <p className="text-gray-600 leading-relaxed">
                  Vos invités deviennent acteurs de l'événement en participant activement à la création d'une œuvre collective mémorable.
                </p>
              </div>
            </div>

            {/* Encart 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Souvenir inoubliable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Créez un souvenir unique et personnalisé qui immortalise votre événement sous forme d'œuvre d'art collective à grande échelle.
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
              Des résultats exceptionnels
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              L'impact de nos photomosaïques sur vos événements en chiffres
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Statistique 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Photos intégrées</div>
                <div className="text-sm text-gray-600">En moyenne par mosaïque</div>
              </div>
            </div>

            {/* Statistique 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  95%
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Taux de participation</div>
                <div className="text-sm text-gray-600">Des invités participent</div>
              </div>
            </div>

            {/* Statistique 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Mosaïques créées</div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
            </div>

            {/* Statistique 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  4.9/5
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Satisfaction client</div>
                <div className="text-sm text-gray-600">Note moyenne</div>
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
              <h2 className="text-3xl font-bold mb-6">Qu'est-ce que la photomosaïque ?</h2>
              <p className="text-lg text-gray-700 mb-6">
                La photomosaïque est une œuvre d'art collaborative qui se construit tout au long de votre événement. Elle transforme une image de votre choix (logo, portrait, message) en une impressionnante mosaïque composée de centaines de photos prises par vos invités.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                À mesure que les participants prennent des photos, notre système les intègre automatiquement à la mosaïque, créant une expérience visuelle qui évolue en temps réel et renforce le sentiment d'appartenance collective.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Jusqu'à 1000+ photos dans une seule mosaïque",
                  "Affichage en temps réel sur grands écrans",
                  "Export haute résolution après l'événement",
                  "Personnalisation complète de l'image maîtresse"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander un devis
              </Link>
            </div>
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <video 
                  className="w-full h-auto"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster="/photomosaique/mosaic-process-poster.jpg"
                >
                  <source src="/photomosaique/mosaic-process.mp4" type="video/mp4" />
                  Votre navigateur ne prend pas en charge la vidéo HTML5.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-medium">Visualisez la construction d'une photomosaïque en accéléré</p>
                  </div>
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
              <Grid className="w-4 h-4 mr-2" />
              Processus photomosaïque
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-300">
              Un processus révolutionnaire en 5 étapes pour créer une œuvre d'art collaborative unique
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
                  title: "Prenez des photos",
                  description: "Vos invités capturent leurs moments via photobooth ou smartphone",
                  color: "from-purple-500 to-pink-500",
                  icon: <Camera className="w-12 h-12" />
                },
                {
                  step: "02", 
                  title: "Analyse automatique",
                  description: "Notre IA analyse chaque photo pour optimiser son placement",
                  color: "from-blue-500 to-purple-500",
                  icon: <Sparkles className="w-12 h-12" />
                },
                {
                  step: "03",
                  title: "Intégration intelligente",
                  description: "Chaque photo trouve sa place dans la mosaïque en temps réel",
                  color: "from-green-500 to-blue-500",
                  icon: <Grid className="w-12 h-12" />
                },
                {
                  step: "04",
                  title: "Œuvre révélée",
                  description: "La mosaïque prend forme et révèle votre image maîtresse",
                  color: "from-orange-500 to-red-500",
                  icon: <Eye className="w-12 h-12" />
                },
                {
                  step: "05",
                  title: "Partagez l'art",
                  description: "Exportez et partagez votre création collaborative unique",
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
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-100 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Grid className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Collaboratif, Évolutif, <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Spectaculaire !</span>
                </h3>
                <p className="text-xl text-gray-700 mb-8">
                  En temps réel, créez une <span className="text-purple-600 font-bold">œuvre d'art collective</span> qui implique tous vos invités dans une expérience inoubliable.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg group"
                >
                  <span>Créer votre mosaïque</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Comment fonctionne la photomosaïque ?</h2>
            <p className="text-lg text-gray-700">
              Une expérience simple mais captivante qui évolue tout au long de votre événement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="w-12 h-12 text-violet-600" />,
                title: "Capture",
                description: "Vos invités prennent des photos via notre photobooth ou leurs smartphones avec notre application web."
              },
              {
                icon: <Zap className="w-12 h-12 text-violet-600" />,
                title: "Analyse",
                description: "Notre algorithme analyse chaque photo pour la placer au meilleur endroit dans la mosaïque."
              },
              {
                icon: <Grid className="w-12 h-12 text-violet-600" />,
                title: "Intégration",
                description: "La photo est immédiatement intégrée à la mosaïque, visible sur les écrans en temps réel."
              },
              {
                icon: <Share2 className="w-12 h-12 text-violet-600" />,
                title: "Partage",
                description: "La mosaïque finale est partageable et imprimable en haute résolution après l'événement."
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

      {/* Cas d'utilisation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Idéal pour tous types d'événements</h2>
            <p className="text-lg text-gray-700">
              Découvrez comment la photomosaïque peut transformer votre prochain événement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mariages",
                description: "Créez une œuvre mémorable avec tous vos invités qui représente parfaitement votre journée spéciale.",
                image: "/photomosaique/use-wedding.jpg",
                example: "Portrait des mariés composé des photos de tous les invités"
              },
              {
                title: "Événements corporate",
                description: "Renforcez l'identité de marque et l'esprit d'équipe avec une création collaborative impressionnante.",
                image: "/photomosaique/use-corporate.jpg",
                example: "Logo d'entreprise ou message composé des photos des collaborateurs"
              },
              {
                title: "Salons et conférences",
                description: "Engagez les visiteurs dans une activité interactive qui crée du trafic sur votre stand.",
                image: "/photomosaique/use-conference.jpg",
                example: "Représentation visuelle évolutive qui s'enrichit tout au long de l'événement"
              },
              {
                title: "Lancement de produit",
                description: "Visualisez l'engouement autour de votre nouveau produit avec une mosaïque thématique.",
                image: "/photomosaique/use-product.jpg",
                example: "Image du produit qui se révèle progressivement avec les photos des participants"
              },
              {
                title: "Événements caritatifs",
                description: "Symbolisez la contribution collective avec une œuvre visuelle qui représente votre cause.",
                image: "/photomosaique/use-charity.jpg",
                example: "Chaque photo représente un don ou un soutien à la cause défendue"
              },
              {
                title: "Festivals et concerts",
                description: "Créez un souvenir collectif qui capture l'énergie et la diversité des participants.",
                image: "/photomosaique/use-festival.jpg",
                example: "Affiche ou logo du festival composé des photos du public"
              }
            ].map((useCase, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={useCase.image}
                    alt={`Photomosaïque pour ${useCase.title}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <h3 className="text-white font-bold text-xl">{useCase.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{useCase.description}</p>
                  <p className="text-sm text-violet-600 font-medium">Exemple : {useCase.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Les avantages de la photomosaïque</h2>
            <p className="text-lg text-gray-700">
              Bien plus qu'une simple animation, un véritable catalyseur d'engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Users className="w-10 h-10 text-violet-600" />,
                title: "Engagement collectif",
                description: "Engagez tous vos invités dans une expérience créative commune qui renforce le sentiment d'appartenance."
              },
              {
                icon: <Clock className="w-10 h-10 text-violet-600" />,
                title: "Animation durable",
                description: "Une activité qui capte l'attention tout au long de l'événement et évolue en permanence."
              },
              {
                icon: <Heart className="w-10 h-10 text-violet-600" />,
                title: "Souvenir unique",
                description: "Créez un souvenir tangible et personnalisé qui pourra être affiché après l'événement."
              },
              {
                icon: <Camera className="w-10 h-10 text-violet-600" />,
                title: "Compatibilité totale",
                description: "S'intègre parfaitement avec nos photobooths IA ou l'expérience smartphone."
              },
              {
                icon: <BarChart className="w-10 h-10 text-violet-600" />,
                title: "Mesure d'engagement",
                description: "Suivez la participation des invités et leur niveau d'engagement via notre interface analytics."
              },
              {
                icon: <Grid className="w-10 h-10 text-violet-600" />,
                title: "Personnalisation complète",
                description: "Adaptez l'image maîtresse, les couleurs et l'aspect visuel à votre marque ou thème d'événement."
              }
            ].map((advantage, index) => (
              <div key={index} className="flex items-start">
                <div className="rounded-lg p-3 bg-white shadow-md mr-4 flex-shrink-0">
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à créer une œuvre d'art collaborative ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Transformez votre prochain événement avec une photomosaïque interactive qui implique tous vos participants.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander un devis
              </Link>
              <Link
                href="/demo"
                className="inline-block px-8 py-3 rounded-full border-2 border-white text-white font-semibold shadow-lg hover:bg-white/10 transition-colors text-lg"
              >
                Voir une démonstration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
