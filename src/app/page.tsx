'use client'

import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { Camera, Wand2, Sparkles, Video, Grid, ArrowRight, MessageCircle, Clock, Figma } from 'lucide-react';
import { useState, useEffect } from 'react';

// Define interface for gallery images
interface GalleryImage {
  src: string;
  title: string;
  style: string;
}

// Define interface for brand logos
interface BrandLogo {
  src: string;
}

// Composants de décoration
const Decorations = () => (
  <>
    <div className="shape shape-1"></div>
    <div className="shape shape-2"></div>
    <div className="shape shape-3"></div>
    <div className="shape shape-4"></div>
    <div className="shape shape-5"></div>
    <div className="shape shape-6"></div>
  </>
);

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

export default function Home() {
  // Properly type the state variables
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [brandLogos, setBrandLogos] = useState<string[]>([]);
  
  useEffect(() => {
    // Fetch gallery images
    fetch('/api/gallery-images')
      .then(response => response.json())
      .then((data: GalleryImage[]) => setGalleryImages(data))
      .catch(() => setGalleryImages([]));
    
    // Fetch brand logos
    fetch('/api/brand-logos')
      .then(response => response.json())
      .then((data: string[]) => setBrandLogos(data))
      .catch(() => setBrandLogos([]));
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section className="nerko-hero relative min-h-screen flex items-center overflow-hidden">
        <Decorations />
        
        <div className="container mx-auto px-4 relative z-10 pt-20 pb-20 md:pb-32">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
              <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-violet-100 border border-violet-200">
                <span className="mr-2">✨</span>
                <span className="text-violet-800 text-sm font-medium">Photobooth de nouvelle génération</span>
              </div>
              
              <h1 className="title-gradient font-bold mb-8">
                <span className="block text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 pb-2">
                  Photobooth IA
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl text-gray-700 my-2">
                  pour des événements
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-600">
                  inoubliables
                </span>
                <span className="title-shadow"></span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                Transformez vos événements avec notre solution innovante de photobooth propulsée par l'intelligence artificielle.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="https://photobooth.waibooth.app" target="_blank" rel="noopener noreferrer" className="btn-glow">
                  Se connecter
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                    <path d="M14.1667 5.83331L5.83337 14.1666M14.1667 5.83331H6.66671M14.1667 5.83331V13.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                
                <Link href="/gallery" className="btn-outline">
                  Explorer la galerie
                </Link>
              </div>
              
              <div className="mt-10 flex items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(num => (
                    <div key={num} className="avatar-circle">
                      <Image 
                        src={`/avatars/avatar-${num}.jpg`} 
                        width={48} 
                        height={48} 
                        alt={`User ${num}`} 
                        className="rounded-full border-2 border-dark-800"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <div className="flex items-center text-yellow-500">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg key={star} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8513 5.46734 15.0322 6.02059 14.6869 6.30993L11.6113 8.91378C11.4677 9.03576 11.4035 9.2262 11.4461 9.40931L12.4223 13.3028C12.5251 13.7355 12.0574 14.0773 11.6774 13.8455L8.24425 11.7592C8.09352 11.6615 7.90648 11.6615 7.75575 11.7592L4.32262 13.8455C3.94256 14.0773 3.47493 13.7355 3.57773 13.3028L4.55391 9.40931C4.59648 9.2262 4.53234 9.03576 4.38866 8.91378L1.31307 6.30993C0.967783 6.02059 1.14867 5.46734 1.58979 5.4318L5.57955 5.11194C5.76642 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">Plus de <span className="text-gray-900 font-medium">2,500</span> événements réussis</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="glow-circle-1"></div>
                <div className="glow-circle-2"></div>
                
                <div className="hero-image-wrap">
                  <div className="hero-image-inner relative overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                    <Image 
                      src="/hero-photobooth.png" 
                      width={700} 
                      height={700} 
                      alt="PhotoBooth IA" 
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Animation de particules */}
                    <div className="particles"></div>
                    
                    {/* Badge flottant */}
                    <div className="floating-badge-1 absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm text-white border border-white/10">
                      <span className="flex items-center">
                        <svg width="14" height="14" className="mr-1.5" viewBox="0 0 16 16" fill="#10B981">
                          <circle cx="8" cy="8" r="8" />
                        </svg>
                        Haute résolution
                      </span>
                    </div>
                    
                    {/* Badge flottant */}
                    <div className="floating-badge-2 absolute bottom-8 left-8 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm text-white border border-white/10">
                      <span className="flex items-center">
                        <Sparkles size={14} className="mr-1.5 text-purple-400" />
                        IA générative
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    
      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <Decorations />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-violet-100 border border-violet-200">
              <span className="mr-2">🔥</span>
              <span className="text-violet-800 text-sm font-medium">Caractéristiques de la plateforme SaaS pour Photobooth</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Solutions <span className="text-gradient">innovantes</span> pour événements
            </h2>
            
            <p className="text-lg text-gray-600">
              Découvrez nos technologies exclusives conçues pour transformer chacun de vos événements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              icon: <Camera className="w-10 h-10" />,
              title: "Photobooth IA",
              description: "Transformez vos photos en œuvres d'art uniques grâce à nos filtres IA personnalisables.",
              link: "/photobooth-ai"
            },
            {
              icon: <Video className="w-10 h-10" />,
              title: "VideoBooth IA",
              description: "Créez des clips vidéo dynamiques avec effets générés par intelligence artificielle.",
              link: "/videobooth"
            },
            {
              icon: <Grid className="w-10 h-10" />,
              title: "Photomosaïque",
              description: "Une œuvre collaborative composée en temps réel à partir des photos de vos invités.",
              link: "/photomosaique"
            }].map((feature, index) => (
              <div key={index} className="nerko-card">
                <div className="nerko-card-inner">
                  <div className="icon-box mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <Link href={feature.link} className="nerko-link">
                    <span>En savoir plus</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4767 6.16664L6.00004 1.68998L7.18004 0.509979L13.6667 6.99664L7.18004 13.4833L6.00004 12.3033L10.4767 7.82664H0.333374V6.16664H10.4767Z" fill="currentColor"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Comment ça marche */}
      <section className="py-24 bg-purple-50/70 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-violet-100 border border-violet-200">
              <span className="mr-2">👨‍💻</span>
              <span className="text-violet-800 text-sm font-medium">Processus simple</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Photobooth IA : Comment ça <span className="text-gradient">fonctionne</span>
            </h2>
            
            <p className="text-lg text-gray-600">
              Notre processus en 4 étapes vous garantit une expérience fluide de bout en bout
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {[{
              icon: <MessageCircle className="w-6 h-6" />,
              number: '01',
              title: "Création de votre projet",
              description: "Démarrez en quelques clics et créez votre projet Photobooth IA sur la plateforme.",
              image: "/steps/step-1.png"
            },
            {
              icon: <Figma className="w-6 h-6" />,
              number: '02',
              title: "Personnalisation du photobooth",
              description: "Adaptez l’interface, les couleurs et les options à votre événement ou votre marque.",
              image: "/steps/step-2.png"
            },
            {
              icon: <Wand2 className="w-6 h-6" />,
              number: '03',
              title: "Choix des modèles IA",
              description: "Sélectionnez parmi de nombreux modèles et styles IA pour vos photos.",
              image: "/steps/step-3.png"
            },
            {
              icon: <Clock className="w-6 h-6" />,
              number: '04',
              title: "Mise en production du photobooth",
              description: "Lancez votre photobooth IA en ligne et profitez d’une expérience innovante.",
              image: "/steps/step-4.png"
            }].map((step, index) => (
              <div key={index} className="step-card flex-1 flex flex-col items-center">
                <div className="step-number">{step.number}</div>
                <div className="icon-circle">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="w-full mt-4">
                  {/* Image illustrative de l'étape */}
                  <div className="relative w-full h-40 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    {/* Remplacer le src par votre image plus tard */}
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                {index < 3 && <div className="step-arrow"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Avantages pour les agences événementielles */}
      <section className="py-24 bg-white relative">
        <Decorations />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-violet-100 border border-violet-200">
              <span className="mr-2">💼</span>
              <span className="text-violet-800 text-sm font-medium">Solution complète pour les professionnels</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Avantages <span className="text-gradient">exclusifs</span> pour les agences événementielles
            </h2>
            
            <p className="text-lg text-gray-600 mb-12">
              Offrez des expériences interactives inoubliables et personnalisez chaque événement selon les besoins de vos clients
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Pourquoi les agences événementielles choisissent Waibooth.app</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-violet-100 rounded-full p-2 mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-violet-600">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Solution tout-en-un</h4>
                      <p className="text-gray-600">Accédez à des photobooth IA, karaoké, photomosaïque, quizz et jeux interactifs sur une seule plateforme.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-violet-100 rounded-full p-2 mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-violet-600">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Personnalisation avancée</h4>
                      <p className="text-gray-600">Adaptez chaque animation aux couleurs et à l'identité visuelle de vos clients pour une expérience sur mesure.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-violet-100 rounded-full p-2 mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-violet-600">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Déploiement multi-environnements</h4>
                      <p className="text-gray-600">Utilisez la même solution pour des soirées d'entreprise, salons professionnels, mariages ou animations en magasin.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-violet-100 rounded-full p-2 mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-violet-600">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Analytics et engagement</h4>
                      <p className="text-gray-600">Obtenez des statistiques détaillées sur l'engagement des participants et l'impact de vos animations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-violet-100 rounded-full p-2 mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-violet-600">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Offres adaptées</h4>
                      <p className="text-gray-600">Facturation flexible selon vos besoins, de l'événement unique aux abonnements pour agences régulières.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link href="/solutions-agences" className="nerko-link">
                    <span>Découvrir nos offres pour agences</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4767 6.16664L6.00004 1.68998L7.18004 0.509979L13.6667 6.99664L7.18004 13.4833L6.00004 12.3033L10.4767 7.82664H0.333374V6.16664H10.4767Z" fill="currentColor"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative">
                <div className="glow-circle-1"></div>
                <div className="glow-circle-2"></div>
                
                {/* Simplified image container with direct rounded corners and shadow */}
                <div className="relative overflow-hidden rounded-xl shadow-xl">
                  <ImageWithFallback 
                    src="/steps/003_bis.png" 
                    fallbackSrc="/steps/003_bis.png"
                    width={600} 
                    height={500} 
                    alt="Solutions pour agences événementielles" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Badge flottant */}
                  <div className="floating-badge-1 absolute top-6 left-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm text-white border border-white/10">
                    <span className="flex items-center">
                      <svg width="14" height="14" className="mr-1.5" viewBox="0 0 16 16" fill="#10B981">
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      Satisfaction client 98%
                    </span>
                  </div>
                  
                  {/* Badge flottant */}
                  <div className="floating-badge-2 absolute bottom-8 right-8 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm text-white border border-white/10">
                    <span className="flex items-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1.5 text-yellow-400">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                      </svg>
                      Solution préférée des agences
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Street Marketing & Grandes Opérations */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30">
              <span className="mr-2">🚀</span>
              <span className="text-white text-sm font-medium">Solutions grande envergure</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Street Marketing & <span className="text-yellow-300">Opérations Massives</span>
            </h2>
            
            <p className="text-xl text-indigo-100 mb-8">
              Notre plateforme est idéale pour le street marketing et les opérations de grande envergure. 
              Déployez rapidement sur plusieurs tablettes avec une gestion centralisée complète.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Encart 1 - Déploiement Rapide */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Déploiement Express</h3>
              <p className="text-indigo-100 text-sm">
                Activation simultanée sur des dizaines de tablettes. Configuration centralisée en quelques clics pour salons professionnels, fan zones et événements massifs.
              </p>
            </div>

            {/* Encart 2 - Collecte de Données */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 00-2 2h2a2 2 0 002-2V5a2 2 0 00-2-2H2a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Collecte de Données</h3>
              <p className="text-indigo-100 text-sm">
                Récupération massive d'emails et données utilisateurs. Analytics temps réel sur l'engagement et la portée de vos campagnes marketing.
              </p>
            </div>

            {/* Encart 3 - Personnalisation */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5v12a2 2 0 002 2h2V3zM15 3h2a2 2 0 012 2v12a4 4 0 01-4 4h-2V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Personnalisation Totale</h3>
              <p className="text-indigo-100 text-sm">
                Branding complet aux couleurs de votre marque. Interface personnalisée, filtres sur-mesure et intégration de vos assets marketing.
              </p>
            </div>

            {/* Encart 4 - Coût Optimisé */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Coût Optimisé</h3>
              <p className="text-indigo-100 text-sm">
                Solution économique pour les grandes opérations. Tarifs dégressifs selon le volume et mise en place ultra-rapide sans infrastructure complexe.
              </p>
            </div>
          </div>

          {/* Section CTA */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Prêt pour votre prochaine campagne massive ?
              </h3>
              <p className="text-indigo-100 mb-6">
                Salons professionnels, fan zones, street marketing, événements corporate... 
                Notre équipe vous accompagne pour un déploiement réussi à grande échelle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-yellow-400 text-indigo-900 font-semibold hover:bg-yellow-300 transition-colors"
                >
                  Demander un devis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/demo" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Voir une démo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Photobooth Coiffure */}
      <section className="py-24 bg-gradient-to-br from-violet-50 to-purple-50 relative">
        <Decorations />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-violet-100 border border-violet-200">
              <span className="mr-2">✂️</span>
              <span className="text-violet-800 text-sm font-medium">Innovation coiffure & beauté</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Photobooth <span className="text-gradient">Coiffure IA</span> : Révolutionnez l'expérience salon
            </h2>
            
            <div className="prose prose-lg max-w-4xl mx-auto text-gray-700 mb-12">
              <p className="text-xl leading-relaxed mb-6">
                Découvrez notre solution révolutionnaire qui transforme l'expérience client dans les salons de coiffure. 
                Grâce à l'intelligence artificielle générative, vos clients peuvent désormais visualiser instantanément 
                leur nouvelle coupe ou couleur avant même de s'asseoir dans le fauteuil.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Notre technologie d'IA avancée analyse la morphologie du visage en temps réel et applique virtuellement 
                plus de 500 coupes de cheveux et 200 couleurs différentes. Fini les déceptions et les hésitations : 
                vos clients repartent avec la coiffure de leurs rêves, parfaitement adaptée à leur style et leur personnalité.
              </p>
              
              <p className="text-lg leading-relaxed">
                Que ce soit en tablette tactile dans votre salon ou intégré directement sur votre site web, 
                le Photobooth Coiffure IA devient un outil indispensable pour fidéliser votre clientèle, 
                attirer de nouveaux clients et moderniser l'image de votre établissement.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Encart 1 - Essayage Virtuel */}
            <div className="nerko-card bg-white/80 backdrop-blur-sm">
              <div className="nerko-card-inner">
                <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/coupe-cheveux/web006.jpg"
                    alt="Essayage virtuel de coiffures"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ✨ Nouveauté
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Essayage Virtuel Instantané</h3>
                <p className="text-gray-600 mb-6">
                  Testez plus de 500 coupes de cheveux en temps réel grâce à notre IA générative ultra-performante. 
                  Visualisation immédiate et ultra-réaliste pour une expérience client exceptionnelle.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    +500 styles de coiffures disponibles
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Rendu en temps réel (&lt; 0.5s)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Analyse morphologique automatique
                  </div>
                </div>
                
                <Link href="/photobooth-coiffure" className="nerko-link">
                  <span>Découvrir l'essayage virtuel</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4767 6.16664L6.00004 1.68998L7.18004 0.509979L13.6667 6.99664L7.18004 13.4833L6.00004 12.3033L10.4767 7.82664H0.333374V6.16664H10.4767Z" fill="currentColor"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Encart 2 - Simulation Couleurs */}
            <div className="nerko-card bg-white/80 backdrop-blur-sm">
              <div className="nerko-card-inner">
                <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/coupe-cheveux/web005.jpg"
                    alt="Simulation de couleurs de cheveux"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    🎨 Couleurs
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Simulation Couleurs Avancée</h3>
                <p className="text-gray-600 mb-6">
                  Explorez plus de 200 teintes et techniques de coloration : balayage, ombré, mèches, couleurs fantaisie. 
                  Rendu ultra-réaliste des reflets et de la brillance selon l'éclairage.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    +200 couleurs et nuances
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Techniques pro (balayage, ombré)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Simulation reflets et brillance
                  </div>
                </div>
                
                <Link href="/photobooth-coiffure" className="nerko-link">
                  <span>Explorer les couleurs</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4767 6.16664L6.00004 1.68998L7.18004 0.509979L13.6667 6.99664L7.18004 13.4833L6.00004 12.3033L10.4767 7.82664H0.333374V6.16664H10.4767Z" fill="currentColor"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Encart 3 - Solution Salon */}
            <div className="nerko-card bg-white/80 backdrop-blur-sm">
              <div className="nerko-card-inner">
                <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/coupe-cheveux/web002.jpg"
                    alt="Solution tablette pour salon de coiffure"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    📱 Tablette
                  </div>
                  <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    À partir de 9,90€/mois
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Solution Complète pour Salon</h3>
                <p className="text-gray-600 mb-6">
                  Tablette tactile professionnelle, widget web personnalisable, branding sur mesure. 
                  Installation incluse, formation équipe et support technique premium.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Tablette tactile 12" incluse
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Widget web personnalisable
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Formation et support inclus
                  </div>
                </div>
                
                <Link href="/photobooth-coiffure" className="nerko-link">
                  <span>Équiper mon salon</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4767 6.16664L6.00004 1.68998L7.18004 0.509979L13.6667 6.99664L7.18004 13.4833L6.00004 12.3033L10.4767 7.82664H0.333374V6.16664H10.4767Z" fill="currentColor"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Statistiques et CTA */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-600">500+</div>
                <div className="text-sm text-gray-600">Salons équipés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-600">Satisfaction client</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">40%</div>
                <div className="text-sm text-gray-600">Temps de consultation réduit</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-600">1M+</div>
                <div className="text-sm text-gray-600">Essayages réalisés</div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/photobooth-coiffure" className="btn-glow">
                Découvrir la solution complète
              </Link>
              <Link href="/contact" className="btn-outline">
                Demander une démo gratuite
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-24 bg-white relative">
        <Decorations />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-violet-100 border border-violet-200">
              <span className="mr-2">🖼️</span>
              <span className="text-violet-800 text-sm font-medium">Galerie IA de notre plateforme SaaS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Découvrez la <span className="text-gradient">galerie intelligente</span> de notre solution
            </h2>
            
            <p className="text-lg text-gray-600 mb-12">
              Découvrez comment notre plateforme SaaS Photobooth IA permet de créer des souvenirs uniques et personnalisés pour chaque événement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.slice(0, 6).map((img, i) => (
              <div key={i} className="gallery-card">
                <div className="aspect-square rounded-xl overflow-hidden relative group">
                  <Image
                    src={img.src}
                    alt={img.title}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"></div>
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <h4 className="text-white font-medium">{img.title}</h4>
                    <p className="text-white/70 text-sm">{img.style}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity z-30">
                    <Link href={img.src} target="_blank" className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 3L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 3H3V21H21V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/gallery" className="btn-outline">
              Voir la galerie complète
            </Link>
          </div>
        </div>
      </section>
      
        {/* Marques Section */}
      <section className="py-16 bg-purple-50/70 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium text-gray-700">Ils nous font confiance</h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {brandLogos.length > 0 ? (
              brandLogos.map((src, i) => (
                <div key={i} className="brand-logo flex items-center justify-center">
                  <div className="h-12 w-32 bg-white rounded-md shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden">
                    <Image
                      src={src}
                      alt={`Logo partenaire ${i + 1}`}
                      width={128}
                      height={48}
                      className="object-contain max-h-12 max-w-full"
                    />
                  </div>
                </div>
              ))
            ) : (
              // fallback si aucun logo trouvé
              [1, 2, 3, 4, 5].map(i => (
                <div key={i} className="brand-logo">
                  <div className="h-12 w-32 bg-white rounded-md shadow-sm border border-gray-100"></div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-violet-100 to-indigo-100 relative overflow-hidden">
        <div className="cta-glow-1"></div>
        <div className="cta-glow-2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="nerko-cta p-8 md:p-16 rounded-3xl border border-violet-100 bg-white/50 backdrop-blur-md relative overflow-hidden shadow-lg">
              <div className="relative z-10">
                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                    Prêt à révolutionner <span className="text-gradient">vos événements</span> ?
                  </h2>
                  
                  <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    Rejoignez les organisateurs d'événements qui font confiance à nos solutions de photobooth IA
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                                       <Link href="https://photobooth.waibooth.app" target="_blank" rel="noopener noreferrer" className="btn-glow">
                        Se connecter
                    </Link>
                    
                    <Link href="/contact" className="btn-outline">
                      Réserver une démo
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="cta-deco-1"></div>
              <div className="cta-deco-2"></div>
              <div className="cta-deco-3"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
