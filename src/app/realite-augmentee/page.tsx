'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Glasses, Monitor, Users, Zap, Share2, Sparkles, Camera, Smartphone, Palette, Globe } from 'lucide-react';

export default function RealiteAugmentee() {
  return (
    <>
      <Head>
        <title>Réalité Augmentée Événements | Photobooth AR | Expérience AR Interactive</title>
        <meta name="description" content="Découvrez nos solutions de réalité augmentée pour événements. Photobooth AR, miroir magique et expériences AR interactives. Technologie accessible sans application pour tous vos événements." />
        <meta name="keywords" content="réalité augmentée, realité augmentée événement, photobooth AR, expérience AR, réalité augmentée interactive, AR photobooth, miroir magique AR, technologie réalité augmentée" />
        <meta name="author" content="Photobooth IA" />
        <meta property="og:title" content="Réalité Augmentée pour Événements | Photobooth AR Interactif" />
        <meta property="og:description" content="Solutions de réalité augmentée révolutionnaires pour vos événements. Photobooth AR, expériences interactives et animations AR personnalisées." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://photobooth-ia.com/realite-augmentee" />
        <meta property="og:image" content="/realite-augmentee/ar-photobooth.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Réalité Augmentée Événements | Photobooth AR" />
        <meta name="twitter:description" content="Découvrez nos solutions de réalité augmentée pour créer des expériences AR inoubliables." />
        <meta name="twitter:image" content="/realite-augmentee/ar-photobooth.jpg" />
        <link rel="canonical" href="https://photobooth-ia.com/realite-augmentee" />
      </Head>

      {/* JSON-LD Schema for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Réalité Augmentée pour Événements - Solutions Photobooth AR",
            "description": "Guide complet des solutions de réalité augmentée pour événements. Découvrez nos photobooth AR, miroir magique et expériences AR interactives personnalisées.",
            "image": "/realite-augmentee/ar-photobooth.jpg",
            "author": {
              "@type": "Organization",
              "name": "Photobooth IA"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Photobooth IA",
              "url": "https://photobooth-ia.com"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://photobooth-ia.com/realite-augmentee"
            },
            "keywords": "réalité augmentée, photobooth AR, expérience AR, réalité augmentée événement, AR interactive",
            "about": [
              {
                "@type": "Thing",
                "name": "Augmented Reality Technology"
              },
              {
                "@type": "Thing", 
                "name": "AR Photobooth"
              },
              {
                "@type": "Thing",
                "name": "Interactive AR Experience"
              }
            ]
          })
        }}
      />
      
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
              <Glasses className="w-5 h-5 text-violet-300" />
              <span className="text-white/90 font-medium">Innovation 2025</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Réalité
              </span>
              <br />
              <span className="text-white">Augmentée</span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-300">
                Photobooth AR & Expériences Interactives
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Fusionnez le monde réel et virtuel avec nos solutions de réalité augmentée pour créer des expériences AR interactives époustouflantes qui marqueront vos invités.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Demander une démonstration</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Découvrir nos solutions
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-violet-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Sans application</h3>
                  <p className="text-gray-300 text-sm">Accès direct via navigateur</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Palette className="w-8 h-8 text-pink-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Personnalisation</h3>
                  <p className="text-gray-300 text-sm">Totalement sur mesure</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Zap className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">Temps réel</h3>
                  <p className="text-gray-300 text-sm">Interactivité instantanée</p>
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
              Pourquoi choisir nos solutions de Réalité Augmentée ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une technologie révolutionnaire qui transforme votre événement en expérience AR immersive unique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Encart 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Expérience immersive</h3>
                <p className="text-gray-600 leading-relaxed">
                  Plongez vos invités dans un monde où réalité et virtuel se mélangent pour créer des moments magiques et inoubliables.
                </p>
              </div>
            </div>

            {/* Encart 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Glasses className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Technologie accessible</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sans installation d'application, accessible depuis n'importe quel smartphone pour une adoption instantanée par tous vos invités.
                </p>
              </div>
            </div>

            {/* Encart 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Personnalisation totale</h3>
                <p className="text-gray-600 leading-relaxed">
                  Adaptez entièrement l'expérience à votre marque, événement et objectifs avec des éléments virtuels sur mesure.
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
              L'impact de nos expériences en Réalité Augmentée
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des résultats exceptionnels qui transforment vos événements AR en succès mémorables
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Statistique 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  +85%
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Engagement</div>
                <div className="text-sm text-gray-600">Vs expérience classique</div>
              </div>
            </div>

            {/* Statistique 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  92%
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Mémorabilité</div>
                <div className="text-sm text-gray-600">Souvenir à long terme</div>
              </div>
            </div>

            {/* Statistique 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Expériences AR</div>
                <div className="text-sm text-gray-600">Créées et déployées</div>
              </div>
            </div>

            {/* Statistique 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/40 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  4.8/5
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Satisfaction</div>
                <div className="text-sm text-gray-600">Note client moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Réinventez vos événements avec notre technologie de Réalité Augmentée</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre solution de réalité augmentée transforme n'importe quel espace en une expérience AR interactive où des éléments virtuels se superposent parfaitement au monde réel.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Qu'il s'agisse de faire apparaître votre logo flottant dans l'air, de transformer une salle en environnement immersif ou de créer des animations AR interactives, notre technologie de réalité augmentée ouvre des possibilités infinies pour engager vos participants.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Sans application pour expériences AR", "Personnalisation complète AR", "Réalité augmentée temps réel", "Compatibilité multi-appareils AR"].map((feature, index) => (
                  <span key={index} className="flex items-center px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">
                    <Zap className="w-4 h-4 mr-1" />
                    {feature}
                  </span>
                ))}
              </div>
              <Link href="/contact" className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg">
                Demander une démonstration
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="rounded-full overflow-hidden border-8 border-white shadow-xl" style={{width: '100%', height: '100%'}}>
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src="/realite-augmentee/ar-demo.mov" type="video/mp4" />
                    Votre navigateur ne prend pas en charge la vidéo HTML5.
                  </video>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <Glasses className="w-12 h-12 text-violet-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'expériences */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos expériences Photobooth AR et Réalité Augmentée</h2>
            <p className="text-lg text-gray-700">
              Des solutions AR interactives pour tous types d'événements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Photobooth AR",
                description: "Superposez des éléments virtuels sur vos photos avec notre photobooth en réalité augmentée - animaux fantastiques, accessoires 3D, effets spéciaux AR et bien plus encore.",
                image: "/realite-augmentee/ar-photobooth.jpg"
              },
              {
                title: "Miroir magique AR interactif",
                description: "Un miroir en réalité augmentée qui transforme votre reflet en ajoutant des éléments virtuels interactifs qui réagissent à vos mouvements en temps réel.",
                image: "/realite-augmentee/ar-mirror.jpg"
              },
              {
                title: "Activation de marque en Réalité Augmentée",
                description: "Faites prendre vie à votre logo, produit ou mascotte dans l'espace réel avec notre technologie AR pour un impact marketing maximal.",
                image: "/realite-augmentee/ar-brand.jpg"
              },
              {
                title: "Jeu interactif AR",
                description: "Créez des expériences ludiques en réalité augmentée où vos invités interagissent avec des éléments virtuels dans l'espace réel.",
                image: "/realite-augmentee/ar-game.jpg"
              },
              {
                title: "Décoration AR",
                description: "Transformez instantanément n'importe quel espace avec des décorations virtuelles spectaculaires et dynamiques en réalité augmentée.",
                image: "/realite-augmentee/ar-decor.jpg"
              },
              {
                title: "Présentation produit AR",
                description: "Présentez vos produits en 3D avec notre technologie de réalité augmentée et des animations interactives permettant d'explorer toutes leurs caractéristiques.",
                image: "/realite-augmentee/ar-product.jpg"
              }
            ].map((experience, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={experience.image}
                    alt={`${experience.title} - Solutions réalité augmentée et expériences AR pour événements`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                  <p className="text-gray-600">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Pourquoi choisir notre solution de Réalité Augmentée</h2>
            <p className="text-lg text-gray-700">
              Une technologie AR de pointe accessible qui transforme vos événements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Smartphone className="w-10 h-10 text-violet-600" />,
                title: "Sans application AR",
                description: "Notre technologie de réalité augmentée fonctionne directement depuis un navigateur web, sans nécessiter de téléchargement d'application AR."
              },
              {
                icon: <Palette className="w-10 h-10 text-violet-600" />,
                title: "Personnalisation complète AR",
                description: "Chaque expérience de réalité augmentée est entièrement personnalisable aux couleurs et à l'identité de votre marque ou événement."
              },
              {
                icon: <Users className="w-10 h-10 text-violet-600" />,
                title: "Engagement maximal AR",
                description: "Les expériences de réalité augmentée génèrent en moyenne 2x plus d'engagement que les activations traditionnelles."
              },
              {
                icon: <Monitor className="w-10 h-10 text-violet-600" />,
                title: "Multi-supports AR",
                description: "Compatible avec smartphones, tablettes, écrans interactifs et projection AR selon vos besoins de réalité augmentée."
              },
              {
                icon: <Sparkles className="w-10 h-10 text-violet-600" />,
                title: "Facteur wow AR garanti",
                description: "Effet de surprise assuré avec la réalité augmentée qui laissera une impression durable à vos invités et participants."
              },
              {
                icon: <Globe className="w-10 h-10 text-violet-600" />,
                title: "Expérience AR universelle",
                description: "Expériences AR accessibles à tous les âges et profils, créant un moment de partage universel et mémorable."
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à ajouter une dimension de Réalité Augmentée à votre événement ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Créez des moments magiques et mémorables grâce à nos expériences AR interactives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Contactez nous
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
