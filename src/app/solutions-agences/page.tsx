'use client'

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { Briefcase, Users, Clock, Palette, Share2, Zap, BarChart, CreditCard, Shield, Activity, Award, Globe, Camera, Video, Grid, ArrowRight, MessageCircle, Smartphone } from 'lucide-react';

// Component for image with fallback
interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc: string;
}

const ImageWithFallback = ({ src, fallbackSrc, ...props }: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return <Image {...props} src={imgSrc} onError={handleError} />;
};

export default function SolutionsAgences() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Solutions Agences
              </span>
              <span className="text-gray-800"> : Votre succès, notre priorité</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Proposez des expériences interactives innovantes à vos clients et démarquez-vous de la concurrence avec notre plateforme Waibooth.app, conçue spécifiquement pour les professionnels de l'événementiel.
            </p>
            
            {/* Hero Image */}
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="/agency/agency-hero.jpg" 
                fallbackSrc="/steps/003_bis.png"
                alt="Solutions pour agences événementielles"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                    Propulsez vos événements avec l'IA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Waibooth.app : La plateforme tout-en-un pour les agences événementielles</h2>
              <p className="text-lg text-gray-700 mb-6">
                Waibooth.app est une plateforme SaaS innovante qui permet aux agences événementielles de proposer une multitude d'animations interactives lors de leurs événements, sans compétences techniques particulières.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Grâce à notre solution, créez, personnalisez et déployez en quelques clics des expériences photo et vidéo alimentées par l'intelligence artificielle, des installations interactives et bien plus encore.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                    <Zap className="w-5 h-5 text-violet-600" />
                  </div>
                  <p className="font-medium">Déploiement rapide sur n'importe quel événement</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                    <Palette className="w-5 h-5 text-violet-600" />
                  </div>
                  <p className="font-medium">Personnalisation totale aux couleurs de vos clients</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                    <Smartphone className="w-5 h-5 text-violet-600" />
                  </div>
                  <p className="font-medium">Compatible sur tous les appareils (smartphones, tablettes, bornes)</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback 
                  src="/agency/agency-dashboard.jpg" 
                  fallbackSrc="/steps/step-2.png"
                  alt="Dashboard Waibooth pour agences"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-medium">Interface de gestion intuitive pour les agences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos solutions d'animations interactives</h2>
            <p className="text-lg text-gray-700">
              Une gamme complète d'expériences engageantes pour tous types d'événements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              icon: <Camera className="w-12 h-12 text-violet-600" />,
              title: "Photobooth IA",
              description: "Transformez les photos de vos invités en œuvres d'art uniques grâce à notre technologie d'IA générative.",
              features: ["Styles artistiques variés", "Partage instantané", "Personnalisation complète"]
            },
            {
              icon: <Video className="w-12 h-12 text-violet-600" />,
              title: "VideoBooth IA",
              description: "Créez des clips vidéo dynamiques avec des effets générés par intelligence artificielle.",
              features: ["Effets spéciaux IA", "Format court parfait pour les réseaux", "Montage automatique"]
            },
            {
              icon: <Grid className="w-12 h-12 text-violet-600" />,
              title: "Photomosaïque",
              description: "Une œuvre collaborative composée des photos de tous les participants qui évolue en temps réel.",
              features: ["Écran géant interactif", "Engagement collectif", "Souvenir imprimable"]
            },
            {
              icon: <MessageCircle className="w-12 h-12 text-violet-600" />,
              title: "Quiz Interactif",
              description: "Animez vos événements avec des quiz personnalisés et des classements en direct.",
              features: ["Questions personnalisables", "Statistiques en temps réel", "Mode compétition"]
            },
            {
              icon: <Smartphone className="w-12 h-12 text-violet-600" />,
              title: "Application Web Mobile",
              description: "Permettez à vos invités de participer aux animations directement depuis leur smartphone.",
              features: ["Sans téléchargement", "QR code d'accès", "Expérience fluide"]
            },
            {
              icon: <BarChart className="w-12 h-12 text-violet-600" />,
              title: "Analytics & Engagement",
              description: "Mesurez le succès de vos animations avec des statistiques détaillées et des rapports clients.",
              features: ["Données d'utilisation", "Taux d'engagement", "Rapports personnalisés"]
            }].map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <ArrowRight className="w-4 h-4 text-violet-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Pourquoi les agences choisissent Waibooth.app</h2>
            <p className="text-lg text-gray-700">
              Des avantages exclusifs conçus pour simplifier votre travail et maximiser votre rentabilité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[{
              icon: <Shield className="w-10 h-10 text-violet-600" />,
              title: "Solution white-label",
              description: "Personnalisez l'interface avec vos couleurs et votre logo pour une expérience entièrement à votre image."
            },
            {
              icon: <Users className="w-10 h-10 text-violet-600" />,
              title: "Multi-clients",
              description: "Gérez tous vos clients depuis un seul tableau de bord avec une organisation claire et efficace."
            },
            {
              icon: <CreditCard className="w-10 h-10 text-violet-600" />,
              title: "Tarification avantageuse",
              description: "Bénéficiez de tarifs préférentiels et d'un modèle de facturation adapté aux agences événementielles."
            },
            {
              icon: <Activity className="w-10 h-10 text-violet-600" />,
              title: "Analytics avancés",
              description: "Générez des rapports détaillés pour chaque événement et suivez les performances en temps réel."
            },
            {
              icon: <Award className="w-10 h-10 text-violet-600" />,
              title: "Support dédié",
              description: "Accédez à une ligne de support prioritaire et à des ressources exclusives pour nos partenaires agences."
            },
            {
              icon: <Globe className="w-10 h-10 text-violet-600" />,
              title: "Déploiement multi-sites",
              description: "Lancez facilement des expériences sur plusieurs sites simultanément pour les grands événements."
            }].map((advantage, index) => (
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

      {/* Cas d'utilisation */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Des animations pour tous vos événements</h2>
            <p className="text-lg text-gray-700">
              Notre plateforme s'adapte à tout type d'événement que vous organisez.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title: "Soirées d'entreprise",
              description: "Créez des moments mémorables et renforcez la cohésion d'équipe avec nos animations interactives.",
              image: "/events/corporate.jpg",
              fallback: "/steps/step-1.png"
            },
            {
              title: "Salons professionnels",
              description: "Attirez plus de visiteurs sur votre stand et collectez des leads qualifiés grâce à des expériences engageantes.",
              image: "/events/salon.jpg",
              fallback: "/steps/step-2.png"
            },
            {
              title: "Mariages",
              description: "Offrez aux mariés et à leurs invités une expérience unique et des souvenirs personnalisés.",
              image: "/events/wedding.jpg",
              fallback: "/steps/step-3.png"
            },
            {
              title: "Lancements de produits",
              description: "Mettez en valeur vos nouveaux produits avec des animations sur mesure qui captivent votre audience.",
              image: "/events/product.jpg",
              fallback: "/steps/step-4.png"
            },
            {
              title: "Festivals",
              description: "Engagez les festivaliers avec des expériences immersives qui amplifient l'atmosphère de l'événement.",
              image: "/events/festival.jpg",
              fallback: "/steps/step-1.png"
            },
            {
              title: "Inaugurations",
              description: "Marquez les esprits lors d'ouvertures de magasins ou d'inaugurations avec des animations innovantes.",
              image: "/events/opening.jpg",
              fallback: "/steps/step-2.png"
            }].map((event, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 relative">
                  <ImageWithFallback
                    src={event.image}
                    fallbackSrc={event.fallback}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <h3 className="text-white font-bold text-xl">{event.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Ce que disent nos partenaires agences</h2>
            <p className="text-lg text-gray-700">
              Découvrez les retours d'expérience d'agences qui utilisent quotidiennement notre plateforme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              quote: "Waibooth nous a permis de diversifier notre offre d'animations et d'augmenter notre chiffre d'affaires de 30% en proposant des solutions innovantes à nos clients.",
              author: "Marie Dupont",
              position: "Directrice, EventStyle Agency",
              image: "/testimonials/testimonial-1.jpg",
              fallback: "/avatars/avatar-1.jpg"
            },
            {
              quote: "La facilité d'utilisation de la plateforme nous fait gagner un temps précieux. En quelques minutes, nous configurons des animations qui impressionnent nos clients les plus exigeants.",
              author: "Thomas Martin",
              position: "CEO, Premium Events",
              image: "/testimonials/testimonial-2.jpg",
              fallback: "/avatars/avatar-2.jpg"
            },
            {
              quote: "Le support est exceptionnel et l'équipe réactive. Chaque fois que nous avons eu besoin d'assistance pour un événement important, ils ont été présents.",
              author: "Sophie Bernard",
              position: "Chef de projet, Event Solutions",
              image: "/testimonials/testimonial-3.jpg",
              fallback: "/avatars/avatar-3.jpg"
            }].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="mb-6">
                  <svg className="text-violet-500 w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-4.418 0-8 3.582-8 8v12h12v-12h-6c0-2.209 1.791-4 4-4v-4zm20 0c-4.418 0-8 3.582-8 8v12h12v-12h-6c0-2.209 1.791-4 4-4v-4z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <ImageWithFallback
                      src={testimonial.image}
                      fallbackSrc={testimonial.fallback}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Offres spéciales agences</h2>
            <p className="text-lg text-gray-700">
              Des formules adaptées à vos besoins avec des avantages exclusifs pour les professionnels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[{
              name: "Starter",
              price: "149€",
              period: "par mois",
              description: "Idéal pour les petites agences qui débutent",
              features: [
                "5 projets actifs",
                "2 animations au choix",
                "Personnalisation limitée",
                "Support par email",
                "Analytics de base"
              ],
              cta: "Commencer l'essai",
              highlight: false
            },
            {
              name: "Business",
              price: "349€",
              period: "par mois",
              description: "La solution complète pour les agences établies",
              features: [
                "20 projets actifs",
                "Toutes les animations",
                "Personnalisation complète",
                "Support prioritaire",
                "White-label",
                "Analytics avancés",
                "Multi-utilisateurs"
              ],
              cta: "Solution recommandée",
              highlight: true
            },
            {
              name: "Enterprise",
              price: "Sur mesure",
              period: "",
              description: "Pour les grandes agences avec des besoins spécifiques",
              features: [
                "Projets illimités",
                "Toutes les animations",
                "Personnalisation avancée",
                "Support dédié 24/7",
                "Développements sur mesure",
                "Formation de votre équipe",
                "Accompagnement stratégique"
              ],
              cta: "Contactez-nous",
              highlight: false
            }].map((plan, index) => (
              <div key={index} className={`rounded-xl overflow-hidden ${plan.highlight ? 'shadow-xl ring-2 ring-violet-600 scale-105' : 'shadow-md'}`}>
                <div className={`p-8 ${plan.highlight ? 'bg-gradient-to-br from-violet-600 to-indigo-600 text-white' : 'bg-white'}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className={`ml-1 ${plan.highlight ? 'text-white/80' : 'text-gray-500'}`}>{plan.period}</span>}
                  </div>
                  <p className={plan.highlight ? 'text-white/90' : 'text-gray-600'}>{plan.description}</p>
                </div>
                <div className="bg-white p-8">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-full font-medium ${plan.highlight ? 'bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à révolutionner vos animations événementielles ?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Rejoignez les centaines d'agences qui font confiance à Waibooth.app pour créer des expériences mémorables.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://photobooth.waibooth.app/"
                className="px-8 py-4 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Créer un compte
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold shadow-lg hover:bg-white/10 transition-colors text-lg"
              >
                Demander une démo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
