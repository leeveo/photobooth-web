"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ImageIcon, // Remplacé Images par ImageIcon qui existe bien dans lucide-react
  Smartphone, 
  Monitor, 
  Share2, 
  ArrowRight, 
  Download, 
  Users, 
  Palette, 
  Hash, 
  PieChart, 
  LayoutGrid, 
  Globe, 
  Zap,
  QrCode // Ajouté l'import manquant
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
    description: "Les invités prennent des photos avec leur smartphone ou appareil"
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Partage",
    description: "Envoi à la galerie via QR code, SMS ou webapp"
  },
  {
    icon: <LayoutGrid className="w-6 h-6" />,
    title: "Affichage",
    description: "Les photos apparaissent instantanément sur l'écran principal"
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "Téléchargement",
    description: "Accès immédiat aux souvenirs via la galerie web"
  }
];

// Témoignages
const testimonials = [
  {
    name: "Marie L.",
    role: "Organisatrice d'événements",
    company: "EventStyle Paris",
    content: "PixelMotion Photo Live a transformé notre gala de charité. L'engagement des invités a été multiplié par trois et le mur de photos a créé un moment de partage incroyable."
  },
  {
    name: "Thomas D.",
    role: "Directeur marketing",
    company: "BrandForce",
    content: "La solution est non seulement élégante et simple à utiliser, mais les données collectées nous ont permis de mesurer précisément l'engagement lors de notre lancement de produit."
  },
  {
    name: "Sophie M.",
    role: "Mariée",
    company: "",
    content: "Tous nos invités ont adoré voir leurs photos s'afficher en direct sur le grand écran. C'était le point fort de notre soirée, avec des souvenirs que nous avons pu garder instantanément."
  }
];

// Exemples d'utilisation
const useCases = [
  {
    title: "Mariages",
    description: "Capturez et partagez les moments forts avec tous les invités en temps réel",
    image: "/photolive/mariage.jpg"
  },
  {
    title: "Événements corporate",
    description: "Augmentez l'engagement lors de vos conférences et soirées d'entreprise",
    image: "/photolive/corporate.jpg"
  },
  {
    title: "Salons professionnels",
    description: "Attirez les visiteurs et prolongez l'expérience avec un mur de photos interactif",
    image: "/photolive/salon.jpg"
  },
  {
    title: "Soirées & Festivals",
    description: "Créez une atmosphère festive et participative avec des galeries instantanées",
    image: "/photolive/festival.jpg"
  }
];

// Interface for FeatureCard props
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Fonctionnalité carte
const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default function PhotoLivePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-violet-50/30 relative overflow-hidden">
        <Decorations />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-violet-100 border border-violet-200">
                <ImageIcon className="w-4 h-4 mr-2 text-violet-600" /> {/* Remplacé Images par ImageIcon */}
                <span className="text-violet-800 text-sm font-medium">Galerie photos interactive</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">PixelMotion</span>
                <span className="text-gray-800">Photo Live</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                Une galerie photos collaborative en temps réel pour dynamiser vos événements et créer des expériences de partage mémorables.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="https://photobooth.waibooth.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-glow"
                >
                  Réserver pour votre événement
                </Link>
                
                <Link href="/demo" className="btn-outline">
                  Voir une démo
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <div className="aspect-[4/3] relative">
                  <Image 
                    src="/photolive/hero-photolive.jpg" 
                    fill 
                    alt="PixelMotion Photo Live en action" 
                    className="object-cover"
                  />
                  
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end">
                    <div className="p-6 lg:p-8 w-full">
                      <div className="flex flex-col">
                        <div className="backdrop-blur-lg bg-white/10 p-4 rounded-xl border border-white/20 max-w-xs">
                          <div className="flex items-start gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src="/photolive/user-1.jpg"
                                width={40}
                                height={40}
                                alt="Photo utilisateur"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-white font-medium text-sm">Sophie T.</p>
                              <p className="text-white/70 text-xs">Il y a 2 minutes</p>
                            </div>
                          </div>
                          <p className="text-white/90 text-sm">Moment magique capturé! #PhotoLive #BestEvent</p>
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
      
      {/* Comment ça marche */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-violet-100 border border-violet-200">
              <Zap className="w-4 h-4 mr-2 text-violet-600" />
              <span className="text-violet-800 text-sm font-medium">Simple et efficace</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Comment fonctionne <span className="text-gradient">Photo Live</span>
            </h2>
            
            <p className="text-lg text-gray-600">
              Une solution intuitive pour collecter, afficher et partager les photos de vos invités en temps réel
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
              Tout ce dont vous avez besoin pour engager vos participants et créer des souvenirs mémorables
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Monitor size={24} />}
              title="Affichage en temps réel"
              description="Les photos s'affichent instantanément sur grand écran pour créer un mur dynamique et interactif"
            />
            
            <FeatureCard 
              icon={<Palette size={24} />}
              title="Personnalisation complète"
              description="Adaptez l'interface aux couleurs et à l'identité de votre marque ou événement"
            />
            
            <FeatureCard 
              icon={<Hash size={24} />}
              title="Modération et hashtags"
              description="Filtrez les contenus et collectez les photos par hashtags spécifiques à votre événement"
            />
            
            <FeatureCard 
              icon={<PieChart size={24} />}
              title="Statistiques détaillées"
              description="Mesurez l'engagement et analysez les performances avec des rapports complets"
            />
            
            <FeatureCard 
              icon={<Globe size={24} />}
              title="Galerie web permanente"
              description="Offrez un accès illimité aux photos après l'événement via une galerie en ligne"
            />
            
            <FeatureCard 
              icon={<Users size={24} />}
              title="Multi-événements"
              description="Gérez plusieurs événements simultanément depuis une seule interface"
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
              Découvrez comment Photo Live s'adapte à différents types d'événements
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
                  question: "Faut-il télécharger une application pour utiliser Photo Live ?",
                  answer: "Non, aucune application n'est nécessaire. Vos invités accèdent à Photo Live via un simple QR code qui ouvre une interface web responsive, compatible avec tous les smartphones."
                },
                {
                  question: "Comment les photos sont-elles modérées ?",
                  answer: "Nous proposons trois options de modération : automatique par IA, manuelle en temps réel par un membre de votre équipe, ou pré-approbation avant affichage. Vous gardez le contrôle total sur le contenu affiché."
                },
                {
                  question: "Combien de temps les photos restent-elles accessibles ?",
                  answer: "Les photos sont disponibles dans la galerie en ligne pendant 12 mois après votre événement. Des options d'archivage prolongé sont disponibles dans nos formules premium."
                },
                {
                  question: "Peut-on personnaliser l'interface aux couleurs de notre marque ?",
                  answer: "Absolument ! L'interface est entièrement personnalisable : logos, couleurs, fonds d'écran, et même animations spécifiques pour votre événement."
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
                    Prêt à transformer vos <span className="text-gradient">événements</span> ?
                  </h2>
                  
                  <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    Créez une expérience photo collaborative unique qui engagera tous vos invités
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
