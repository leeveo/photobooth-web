"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  MessageSquare, 
  CreditCard, 
  Settings, 
  HelpCircle, 
  Users, 
  Sparkles,
  Search,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';

// Type definitions
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

interface FAQQuestion {
  question: string;
  answer: string;
}

interface FAQCategoryProps {
  title: string;
  icon: React.ReactNode;
  questions: FAQQuestion[];
}

// Composant FAQ moderne
const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div 
      className="bg-white/80 backdrop-blur-sm rounded-2xl mb-4 overflow-hidden border border-violet-100/50 hover:border-violet-200/70 transition-all duration-300 shadow-sm hover:shadow-lg group"
      onClick={onClick}
    >
      <div className="flex justify-between items-center p-6 cursor-pointer">
        <h3 className="font-semibold text-gray-800 group-hover:text-violet-700 transition-colors text-lg">{question}</h3>
        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center group-hover:bg-violet-200 transition-colors">
          <ChevronDown 
            className={`w-5 h-5 text-violet-600 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
          />
        </div>
      </div>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-violet-50">
          <div className="pt-4">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Catégories de FAQ modernes
const FAQCategory = ({ title, icon, questions }: FAQCategoryProps) => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);
  
  const toggleQuestion = (index: number) => {
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(null);
    } else {
      setOpenQuestionIndex(index);
    }
  };
  
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg">
          {icon}
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">{title}</h2>
          <p className="text-gray-500">{questions.length} questions</p>
        </div>
      </div>
      
      <div className="space-y-3">
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
      icon: <HelpCircle className="w-6 h-6 text-white" />,
      questions: [
        {
          question: "Qu'est-ce que WaiBooth.app et comment fonctionne-t-il ?",
          answer: "WaiBooth.app est une plateforme SaaS qui vous permet de créer des expériences de photobooth IA personnalisées pour vos événements. Notre solution utilise l'intelligence artificielle pour transformer des photos ordinaires en œuvres d'art uniques avec différents styles artistiques et effets visuels. Vous pouvez facilement personnaliser, déployer et gérer votre photobooth depuis notre interface web intuitive."
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
      icon: <Sparkles className="w-6 h-6 text-white" />,
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
      icon: <CreditCard className="w-6 h-6 text-white" />,
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
      icon: <Settings className="w-6 h-6 text-white" />,
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
      icon: <Users className="w-6 h-6 text-white" />,
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

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(faqCategories);
  
  return (
    <>
      {/* Hero Section avec Glassmorphisme */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 text-violet-300 text-sm font-medium mb-8 backdrop-blur-sm border border-violet-500/30">
              <MessageSquare className="w-5 h-5 mr-3" />
              Centre d'Aide
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Foire aux <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Trouvez rapidement les réponses à vos questions sur notre plateforme de photobooth IA et nos services d'activation d'événements.
            </p>
            
            {/* Barre de recherche moderne */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-2xl blur"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-2 border border-white/20">
                  <div className="flex items-center">
                    <Search className="w-6 h-6 text-gray-400 ml-4" />
                    <input 
                      type="text" 
                      placeholder="Rechercher une question..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 py-4 px-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
                    />
                    <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-3 rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 mr-2">
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section de navigation rapide */}
      <section className="py-16 bg-gradient-to-b from-violet-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Navigation rapide</h2>
              <p className="text-gray-600">Accédez directement à la catégorie qui vous intéresse</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {faqCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const element = document.getElementById(`category-${index}`);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-violet-100/50 hover:border-violet-200 transition-all duration-300 shadow-sm hover:shadow-lg text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm leading-tight">{category.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{category.questions.length} questions</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section avec design moderne */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.map((category, index) => (
              <div key={index} id={`category-${index}`}>
                <FAQCategory 
                  title={category.title} 
                  icon={category.icon} 
                  questions={category.questions} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Support Premium */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-violet-900 to-indigo-900 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.3),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 text-violet-300 text-sm font-medium mb-8 backdrop-blur-sm border border-violet-500/30">
                <Star className="w-5 h-5 mr-3" />
                Support Premium
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Besoin d'une aide <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">personnalisée</span> ?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Notre équipe d'experts est disponible pour vous accompagner dans tous vos projets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Chat en direct */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Chat en Direct</h3>
                <p className="text-gray-300 mb-6">Assistance instantanée pendant les heures ouvrables</p>
                <div className="flex items-center justify-center text-green-400 text-sm mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  En ligne maintenant
                </div>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300">
                  Démarrer le chat
                </button>
              </div>

              {/* Support Email */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Support Email</h3>
                <p className="text-gray-300 mb-6">Réponse garantie sous 24h</p>
                <div className="flex items-center justify-center text-blue-400 text-sm mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  Réponse rapide
                </div>
                <Link 
                  href="mailto:support@waibooth.app"
                  className="block w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
                >
                  Envoyer un email
                </Link>
              </div>

              {/* Support Téléphone */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Support Téléphone</h3>
                <p className="text-gray-300 mb-6">Assistance directe pour les urgences</p>
                <div className="flex items-center justify-center text-violet-400 text-sm mb-4">
                  <Zap className="w-4 h-4 mr-2" />
                  Support prioritaire
                </div>
                <Link 
                  href="tel:+33123456789"
                  className="block w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:from-violet-600 hover:to-purple-600 transition-all duration-300"
                >
                  Appeler maintenant
                </Link>
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center">
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                    <span className="text-green-400 font-semibold">Support inclus dans tous nos plans</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Commencez votre projet maintenant
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    Bénéficiez de notre support expert dès votre première utilisation.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      href="/demo"
                      className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 text-lg"
                    >
                      Réserver une démo
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-block px-8 py-4 rounded-full bg-white/20 text-white font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300 text-lg backdrop-blur-sm"
                    >
                      Contacter un expert
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
