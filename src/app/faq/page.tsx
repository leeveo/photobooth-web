"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, MessageSquare, CreditCard, Settings, HelpCircle, Users, Sparkles } from 'lucide-react';

// Composants de décoration
const Decorations = () => (
  <>
    <div className="shape shape-1"></div>
    <div className="shape shape-2"></div>
    <div className="shape shape-3"></div>
    <div className="shape shape-4"></div>
  </>
);

// Composant FAQ
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div 
      className="border border-violet-100 rounded-xl mb-4 overflow-hidden bg-white hover:shadow-md transition-all duration-300"
      onClick={onClick}
    >
      <div className="flex justify-between items-center p-5 cursor-pointer">
        <h3 className="font-semibold text-gray-800">{question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-violet-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </div>
      {isOpen && (
        <div className="px-5 pb-5 pt-0 text-gray-600 border-t border-violet-50">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// Catégories de FAQ
const FAQCategory = ({ title, icon, questions }) => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  
  const toggleQuestion = (index) => {
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(null);
    } else {
      setOpenQuestionIndex(index);
    }
  };
  
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      
      <div>
        {questions.map((q, index) => (
          <FAQItem 
            key={index} 
            question={q.question} 
            answer={q.answer} 
            isOpen={openQuestionIndex === index}
            onClick={() => toggleQuestion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default function FAQPage() {
  // Données FAQ
  const faqCategories = [
    {
      title: "Généralités sur notre service",
      icon: <HelpCircle className="w-5 h-5 text-violet-600" />,
      questions: [
        {
          question: "Qu'est-ce que PixelMagic et comment fonctionne-t-il ?",
          answer: "PixelMagic est une plateforme SaaS qui vous permet de créer des expériences de photobooth IA personnalisées pour vos événements. Notre solution utilise l'intelligence artificielle pour transformer des photos ordinaires en œuvres d'art uniques avec différents styles artistiques et effets visuels. Vous pouvez facilement personnaliser, déployer et gérer votre photobooth depuis notre interface web intuitive."
        },
        {
          question: "Quels types d'événements sont adaptés à vos solutions ?",
          answer: "Nos solutions de photobooth IA sont parfaites pour tous types d'événements : mariages, salons professionnels, lancements de produits, conférences, soirées d'entreprise, festivals, anniversaires, et tout autre événement où vous souhaitez offrir une expérience photo mémorable et interactive."
        },
        {
          question: "Ai-je besoin d'équipements spécifiques pour utiliser votre service ?",
          answer: "Non, notre solution est principalement basée sur le web. Pour un usage de base, vous avez simplement besoin d'un appareil avec une caméra (smartphone, tablette ou ordinateur portable) et une connexion internet. Pour des installations plus élaborées, nous proposons également des kits photobooths complets avec support, éclairage et imprimante."
        }
      ]
    },
    {
      title: "Fonctionnalités et IA",
      icon: <Sparkles className="w-5 h-5 text-violet-600" />,
      questions: [
        {
          question: "Comment fonctionne la technologie d'IA dans vos photobooth ?",
          answer: "Notre technologie utilise des modèles d'IA avancés pour analyser les images capturées et les transformer en temps réel selon le style artistique choisi. Ces modèles ont été entraînés sur des milliers d'œuvres d'art pour reproduire fidèlement différentes techniques et styles artistiques, tout en préservant la ressemblance des personnes photographiées."
        },
        {
          question: "Puis-je personnaliser les filtres et les effets IA ?",
          answer: "Absolument ! Notre plateforme vous permet de choisir parmi une bibliothèque de filtres préexistants, mais vous pouvez également créer vos propres filtres personnalisés. Vous pouvez ajuster les paramètres, mélanger différents styles, et même intégrer des éléments de votre marque pour créer une expérience unique."
        },
        {
          question: "Qu'est-ce qu'une photomosaïque et comment est-elle créée ?",
          answer: "Une photomosaïque est une grande image composée de centaines de petites photos individuelles. Notre système collecte automatiquement les photos prises pendant votre événement et les assemble en temps réel pour former une image plus grande, souvent liée à votre thème d'événement. C'est une façon collaborative et interactive d'impliquer tous vos invités dans la création d'une œuvre mémorable."
        }
      ]
    },
    {
      title: "Tarification et abonnements",
      icon: <CreditCard className="w-5 h-5 text-violet-600" />,
      questions: [
        {
          question: "Comment fonctionne la tarification de votre service ?",
          answer: "Nous proposons différentes formules d'abonnement adaptées à vos besoins, de l'abonnement mensuel pour les utilisateurs réguliers aux forfaits événementiels ponctuels. Chaque plan inclut un nombre défini de sessions photo, de styles AI disponibles et d'options de personnalisation. Consultez notre page Tarifs pour connaître les détails spécifiques de chaque formule."
        },
        {
          question: "Y a-t-il une période d'essai gratuite ?",
          answer: "Oui, nous offrons un essai gratuit de 14 jours de notre plateforme SaaS. Pendant cette période, vous pouvez explorer les fonctionnalités de base, tester différents styles AI et comprendre comment notre solution peut s'intégrer à vos événements. Aucune carte de crédit n'est requise pour commencer votre essai."
        },
        {
          question: "Quelles sont les options de paiement acceptées ?",
          answer: "Nous acceptons les paiements par cartes de crédit (Visa, Mastercard, American Express), PayPal, et sur demande, les virements bancaires pour les formules entreprise. Tous les paiements sont sécurisés et cryptés."
        }
      ]
    },
    {
      title: "Configuration et support",
      icon: <Settings className="w-5 h-5 text-violet-600" />,
      questions: [
        {
          question: "Combien de temps faut-il pour configurer un photobooth IA ?",
          answer: "La configuration de base peut être réalisée en quelques minutes. Sélectionnez un template, personnalisez-le avec vos couleurs et logo, choisissez vos filtres IA préférés, et votre photobooth est prêt à être utilisé. Pour des personnalisations plus avancées, prévoyez environ 30 minutes à une heure."
        },
        {
          question: "Proposez-vous un support technique en cas de problème ?",
          answer: "Oui, nous offrons un support technique par chat en direct, email et téléphone selon votre formule d'abonnement. Pour les événements importants, nous proposons également une assistance dédiée pendant toute la durée de l'événement pour garantir que tout se déroule parfaitement."
        },
        {
          question: "Peut-on utiliser votre service sans connexion internet ?",
          answer: "Notre solution principale nécessite une connexion internet pour le traitement IA et le stockage cloud. Cependant, nous proposons un mode hors ligne limité pour les environnements avec une connectivité restreinte. Ce mode permet de capturer des photos et de les synchroniser ultérieurement lorsque la connexion est rétablie."
        }
      ]
    },
    {
      title: "Utilisation et partage",
      icon: <Users className="w-5 h-5 text-violet-600" />,
      questions: [
        {
          question: "Comment les invités peuvent-ils accéder aux photos ?",
          answer: "Les invités peuvent accéder à leurs photos via un QR code affiché sur l'écran du photobooth. En scannant ce code, ils sont dirigés vers une galerie en ligne personnalisée où ils peuvent visualiser, télécharger et partager leurs photos sur les réseaux sociaux. Ils peuvent également recevoir leurs photos par email ou SMS."
        },
        {
          question: "Est-il possible d'imprimer les photos sur place ?",
          answer: "Oui, notre plateforme est compatible avec la plupart des imprimantes photo thermiques et à sublimation. Vous pouvez configurer l'impression automatique ou à la demande. Nous proposons également un service de location d'imprimantes pour vos événements."
        },
        {
          question: "Comment puis-je personnaliser l'expérience de partage ?",
          answer: "Notre plateforme vous permet de personnaliser entièrement l'expérience de partage : ajoutez votre logo, vos couleurs, des messages personnalisés, des hashtags spécifiques pour les réseaux sociaux, et même des appels à l'action pour engager davantage votre audience."
        }
      ]
    }
  ];
  
  return (
    <>
      {/* Header Section */}
      <section className="py-24 bg-gradient-to-br from-white to-violet-50/30 relative overflow-hidden">
        <Decorations />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-violet-100 border border-violet-200">
              <MessageSquare className="w-4 h-4 mr-2 text-violet-600" />
              <span className="text-violet-800 text-sm font-medium">Questions fréquentes</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
              Foire aux <span className="text-gradient">questions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Consultez les réponses aux questions les plus fréquentes sur notre plateforme de photobooth IA et nos services
            </p>
          </div>
          
          {/* Search Box (non-fonctionnel pour cet exemple) */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Rechercher une question..." 
                className="w-full py-4 px-6 rounded-full border border-gray-200 focus:outline-none focus:border-violet-300 shadow-sm text-gray-600"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-violet-600 text-white p-3 rounded-full hover:bg-violet-700">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, index) => (
              <FAQCategory 
                key={index} 
                title={category.title} 
                icon={category.icon} 
                questions={category.questions} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gradient-to-br from-violet-50/50 to-indigo-50/50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="nerko-cta p-8 md:p-12 rounded-2xl border border-violet-100 bg-white/70 backdrop-blur-sm relative overflow-hidden shadow-lg text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Vous avez d'autres questions ?
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                Notre équipe de support est disponible pour répondre à toutes vos interrogations et vous accompagner dans votre projet.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-glow">
                  Contacter le support
                </Link>
                
                <Link href="/demo" className="btn-outline">
                  Réserver une démo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
