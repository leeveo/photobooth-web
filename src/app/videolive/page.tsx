"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Video,
  Smartphone,
  Play,
  Share2,
  ArrowRight,
  Download,
  Users,
  Palette,
  PieChart,
  LayoutGrid,
  Globe,
  Zap,
  QrCode,
  Scissors,
  Cast,
  Cloud,
  Film,
  Star,
} from 'lucide-react';

// Composant de décoration
const Decorations = () => (
  <>
    <div className="shape shape-1"></div>
    <div className="shape shape-2"></div>
    <div className="shape shape-3"></div>
  </>
);

// Étapes du processus
const processSteps = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Capture",
    description: "Les invités enregistrent de courtes vidéos avec leur smartphone"
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Montage auto",
    description: "Montage et effets générés instantanément par IA"
  },
  {
    icon: <Cast className="w-6 h-6" />,
    title: "Diffusion",
    description: "Les vidéos apparaissent sur l'écran principal en temps réel"
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Partage",
    description: "Téléchargement et partage immédiat sur les réseaux sociaux"
  }
];

// Témoignages
const testimonials = [
  {
    name: "David R.",
    role: "Directeur Marketing",
    company: "EventPro Paris",
    content: "PixelMotion Video Live a transformé notre lancement de produit. Les vidéos générées ont créé un buzz incroyable sur les réseaux sociaux et boosté notre visibilité."
  },
  {
    name: "Julie M.",
    role: "Responsable événementiel",
    company: "LuxEvents",
    content: "L'outil de montage automatique est bluffant. La qualité des vidéos et la vitesse de traitement ont impressionné tous nos clients corporate."
  },
  {
    name: "Marc D.",
    role: "Marié",
    company: "",
    content: "Nous avons adoré les mini-clips de notre mariage. Les invités se sont pris au jeu et ont créé des moments de partage fantastiques que nous conservons précieusement."
  }
];

// Exemples d'utilisation
const useCases = [
  {
    title: "Mariages & Cérémonies",
    description: "Créez une collection de souvenirs vivants qui captent l'émotion du grand jour",
    image: "/videolive/mariage-video.jpg"
  },
  {
    title: "Événements d'entreprise",
    description: "Dynamisez vos lancements de produits et team buildings avec des vidéos partagées",
    image: "/videolive/corporate-video.jpg"
  },
  {
    title: "Conférences & Salons",
    description: "Générez du contenu viral et augmentez l'engagement des participants",
    image: "/videolive/conference-video.jpg"
  },
  {
    title: "Soirées & Festivals",
    description: "Immortalisez l'ambiance festive avec des mini-clips montés automatiquement",
    image: "/videolive/festival-video.jpg"
  }
];

// Fonctionnalité carte
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
    <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function VideoLivePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-violet-50/30 relative overflow-hidden">
        <Decorations />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-violet-100 border border-violet-200">
                <Video className="w-4 h-4 mr-2 text-violet-600" />
                <span className="text-violet-800 text-sm font-medium">Mini-clips automatiques</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block text-gradient mb-2">PixelMotion</span>
                <span className="text-gray-800">Video Live</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                Des mini-vidéos personnalisées générées automatiquement par IA pour capturer et partager les moments forts de votre événement.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-glow">
                  Réserver pour votre événement
                </Link>
                <Link href="/demo" className="btn-outline">
                  Voir une démo
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <div className="aspect-video relative">
                  <Image
                    src="/videolive/hero-videolive.jpg"
                    fill
                    alt="PixelMotion Video Live en action"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-center justify-center">
                    <button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors group">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center ml-1">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 px-4 pb-4">
                  {[1, 2, 3].map((idx) => (
                    <div key={idx} className="relative rounded-lg overflow-hidden aspect-video shadow-sm border border-white/10">
                      <Image
                        src={`/videolive/thumb-${idx}.jpg`}
                        fill
                        alt={`Miniature vidéo ${idx}`}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-violet-100 border border-violet-200">
              <Zap className="w-4 h-4 mr-2 text-violet-600" />
              <span className="text-violet-800 text-sm font-medium">Simple et efficace</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Comment fonctionne <span className="text-gradient">Video Live</span>
            </h2>
            <p className="text-lg text-gray-600">
              Une solution intuitive pour collecter, monter et partager les vidéos de vos invités en temps réel
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full flex items-center justify-center text-white mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 transform -translate-y-1/2">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-violet-300">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="rounded-2xl p-6 lg:p-8 bg-gradient-to-br from-violet-50 to-indigo-50 max-w-3xl mx-auto shadow-sm border border-violet-100">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mx-auto md:mx-0">
                  <QrCode className="w-12 h-12" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Accès instantané pour vos invités</h3>
                  <p className="text-gray-600">
                    Un simple QR code permet à tous vos invités d'accéder facilement à la plateforme sans téléchargement d'application. Compatible avec tous les smartphones et tablettes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-20 bg-gradient-to-br from-violet-50/50 to-indigo-50/50 relative">
        <Decorations />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-violet-100 border border-violet-200">
              <span className="mr-2">✨</span>
              <span className="text-violet-800 text-sm font-medium">Tout inclus</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Des fonctionnalités <span className="text-gradient">puissantes</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tout ce dont vous avez besoin pour engager vos participants et créer des souvenirs vidéo mémorables
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Film size={24} />}
              title="Montage automatique"
              description="L'IA assemble et optimise chaque vidéo pour un rendu professionnel en quelques secondes"
            />
            <FeatureCard
              icon={<Palette size={24} />}
              title="Effets & branding"
              description="Ajoutez des filtres, logos, habillages et musiques à l'image de votre événement"
            />
            <FeatureCard
              icon={<PieChart size={24} />}
              title="Statistiques détaillées"
              description="Analysez l'engagement et la viralité de vos vidéos grâce à des rapports avancés"
            />
            <FeatureCard
              icon={<Globe size={24} />}
              title="Galerie vidéo web"
              description="Toutes les vidéos accessibles en ligne, partageables et téléchargeables"
            />
            <FeatureCard
              icon={<Users size={24} />}
              title="Multi-événements"
              description="Gérez plusieurs événements et galeries vidéo depuis une seule interface"
            />
            <FeatureCard
              icon={<Star size={24} />}
              title="Qualité HD"
              description="Des vidéos en haute définition, optimisées pour tous les écrans"
            />
          </div>
        </div>
      </section>

      {/* Cas d'utilisation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Parfait pour <span className="text-gradient">tous vos événements</span>
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez comment Video Live s'adapte à différents types d'événements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-gradient-to-br from-violet-50/50 to-indigo-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-violet-100 border border-violet-200">
              <span className="mr-2">💬</span>
              <span className="text-violet-800 text-sm font-medium">Ils nous font confiance</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Ce qu'en disent <span className="text-gradient">nos clients</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map(star => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Questions <span className="text-gradient">fréquentes</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Faut-il télécharger une application pour utiliser Video Live ?",
                  answer: "Non, aucune application n'est nécessaire. Vos invités accèdent à Video Live via un simple QR code qui ouvre une interface web responsive, compatible avec tous les smartphones."
                },
                {
                  question: "Comment les vidéos sont-elles modérées ?",
                  answer: "Nous proposons plusieurs options de modération : automatique par IA, manuelle en temps réel par un membre de votre équipe, ou pré-approbation avant diffusion."
                },
                {
                  question: "Combien de temps les vidéos restent-elles accessibles ?",
                  answer: "Les vidéos sont disponibles dans la galerie en ligne pendant 12 mois après votre événement. Des options d'archivage prolongé sont disponibles dans nos formules premium."
                },
                {
                  question: "Peut-on personnaliser l'interface aux couleurs de notre marque ?",
                  answer: "Oui, l'interface est entièrement personnalisable : logos, couleurs, habillages vidéo, et même animations spécifiques pour votre événement."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-violet-100 to-indigo-100 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="nerko-cta p-8 md:p-16 rounded-3xl border border-violet-100 bg-white/50 backdrop-blur-md relative overflow-hidden shadow-lg">
              <div className="relative z-10">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 leading-tight">
                    Prêt à dynamiser vos <span className="text-gradient">événements</span> ?
                  </h2>
                  <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    Offrez une expérience vidéo collaborative et virale à vos invités avec PixelMotion Video Live
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/contact" className="btn-glow">
                      Demander un devis
                    </Link>
                    <Link href="/demo" className="btn-outline">
                      Réserver une démo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
