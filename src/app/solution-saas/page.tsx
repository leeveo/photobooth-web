import Image from 'next/image';
import Link from 'next/link';
import { Globe, Users, Database, Shield, Cloud, Zap, Code, BarChart } from 'lucide-react';

export default function SolutionSaaS() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solution <span className="gradient-text">SaaS</span> pour professionnels de l'événementiel
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Une plateforme complète pour gérer tous vos photobooths et expériences interactives à grande échelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="btn-primary">
                Demander une démo
              </Link>
              <Link href="/contact" className="btn-secondary">
                Tarifs personnalisés
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section aperçu */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Une solution tout-en-un pour les professionnels</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre plateforme SaaS PixelMagic Pro permet aux organisateurs d'événements, agences et marques de gérer facilement des expériences photobooth sur plusieurs sites simultanément.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                De la personnalisation des templates à l'analyse des données post-événement, notre solution cloud centralisée vous donne un contrôle total sur l'ensemble de vos activations photobooths.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Gestion multi-événements",
                  "Personnalisation de marque",
                  "Statistiques en temps réel",
                  "Modération de contenu",
                  "Intégration API complète"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/solution-saas/dashboard-preview.jpg"
                  alt="Dashboard PixelMagic Pro"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caractéristiques */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Fonctionnalités de notre solution SaaS</h2>
            <p className="text-lg text-gray-700">
              Tout ce dont vous avez besoin pour gérer vos expériences photobooth à grande échelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-10 h-10 text-violet-600" />,
                title: "Gestion multi-sites",
                description: "Gérez des photobooths sur plusieurs sites ou événements simultanément depuis une interface centralisée."
              },
              {
                icon: <Cloud className="w-10 h-10 text-violet-600" />,
                title: "Stockage cloud sécurisé",
                description: "Toutes les photos et créations sont stockées de manière sécurisée et accessibles à tout moment."
              },
              {
                icon: <Users className="w-10 h-10 text-violet-600" />,
                title: "Multi-utilisateurs",
                description: "Attribuez différents niveaux d'accès à votre équipe avec une gestion fine des permissions."
              },
              {
                icon: <Database className="w-10 h-10 text-violet-600" />,
                title: "Galeries personnalisées",
                description: "Créez des galeries en ligne personnalisées pour chaque événement avec votre propre branding."
              },
              {
                icon: <BarChart className="w-10 h-10 text-violet-600" />,
                title: "Analyses & statistiques",
                description: "Suivez les performances avec des tableaux de bord détaillés sur l'engagement et le partage."
              },
              {
                icon: <Shield className="w-10 h-10 text-violet-600" />,
                title: "Modération avancée",
                description: "Outils de modération automatique et manuelle pour garantir un contenu approprié."
              },
              {
                icon: <Zap className="w-10 h-10 text-violet-600" />,
                title: "Performances optimisées",
                description: "Architecture cloud optimisée pour une expérience fluide même à grande échelle."
              },
              {
                icon: <Code className="w-10 h-10 text-violet-600" />,
                title: "API complète",
                description: "Intégrez nos fonctionnalités à vos applications existantes grâce à notre API RESTful."
              },
              {
                icon: <svg className="w-10 h-10 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>,
                title: "Personnalisation avancée",
                description: "Adaptez chaque aspect de l'expérience photobooth à votre marque et à votre événement."
              }
            ].map((feature, index) => (
              <div key={index} className="card bg-white p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-lg p-3 bg-violet-100 mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interface utilisateur */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Une interface intuitive et puissante</h2>
            <p className="text-lg text-gray-700">
              Notre dashboard a été conçu pour allier simplicité d'utilisation et fonctionnalités avancées.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                image: "/solution-saas/ui-events.jpg",
                title: "Gestion des événements",
                description: "Créez, configurez et supervisez tous vos événements depuis un seul écran."
              },
              {
                image: "/solution-saas/ui-analytics.jpg",
                title: "Tableaux de bord analytiques",
                description: "Visualisez les performances et l'engagement avec des graphiques intuitifs."
              },
              {
                image: "/solution-saas/ui-galleries.jpg",
                title: "Galeries personnalisables",
                description: "Créez des galeries élégantes avec vos couleurs et votre logo."
              }
            ].map((screen, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="relative h-56">
                  <Image
                    src={screen.image}
                    alt={screen.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{screen.title}</h3>
                  <p className="text-gray-700">{screen.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/demo" className="btn-primary">
              Découvrir l'interface en démo
            </Link>
          </div>
        </div>
      </section>

      {/* Cas d'utilisation */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Cas d'utilisation</h2>
            <p className="text-lg text-gray-700">
              Notre solution SaaS s'adapte à différents types d'organisations et d'événements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Agences événementielles",
                description: "Gérez plusieurs clients et événements simultanément, avec des rapports détaillés pour chacun. Notre solution vous permet d'offrir une expérience premium sans multiplier les ressources techniques.",
                image: "/solution-saas/usecase-agency.jpg"
              },
              {
                title: "Grands groupes & entreprises",
                description: "Déployez une expérience de marque cohérente sur tous vos événements à travers le monde. Centralisez la gestion tout en permettant des adaptations locales.",
                image: "/solution-saas/usecase-corporate.jpg"
              },
              {
                title: "Lieux événementiels",
                description: "Proposez un service photobooth permanent à valeur ajoutée pour vos clients. Personnalisez l'expérience pour chaque événement tout en gardant une infrastructure unique.",
                image: "/solution-saas/usecase-venue.jpg"
              },
              {
                title: "Professionnels de la photo",
                description: "Étendez votre offre avec un service photobooth IA sans investissement matériel majeur. Gérez tous vos contrats depuis une même plateforme.",
                image: "/solution-saas/usecase-photographer.jpg"
              }
            ].map((useCase, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ils utilisent notre solution SaaS</h2>
            <p className="text-lg text-gray-700">
              Découvrez comment nos clients professionnels transforment leur offre événementielle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "La plateforme nous permet de gérer 30+ événements par mois avec seulement 2 techniciens. C'est un game-changer pour notre agence.",
                author: "Alexandre Martin",
                role: "Directeur, EventPro Agency",
                image: "/testimonials/testimonial-pro-1.jpg"
              },
              {
                quote: "Le dashboard analytique nous offre des insights incroyables sur l'engagement. Nous pouvons maintenant prouver le ROI à nos clients avec des données concrètes.",
                author: "Marie Leclerc",
                role: "Responsable Marketing Expérientiel, BrandActive",
                image: "/testimonials/testimonial-pro-2.jpg"
              },
              {
                quote: "L'API nous a permis d'intégrer l'expérience photobooth à notre application mobile d'événement. Une intégration parfaite qui a impressionné nos clients.",
                author: "Thomas Dubois",
                role: "CTO, EventTech Solutions",
                image: "/testimonials/testimonial-pro-3.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="card bg-white p-6">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-700">
              Tout ce que vous devez savoir sur notre solution SaaS.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Comment fonctionne le déploiement de la solution ?",
                answer: "Après souscription, vous recevez un accès à votre dashboard personnalisé. Notre équipe vous accompagne pour configurer votre première instance et former vos utilisateurs. Le déploiement complet prend généralement entre 1 et 5 jours ouvrables selon vos besoins spécifiques."
              },
              {
                question: "La solution est-elle compatible avec mon matériel existant ?",
                answer: "Notre plateforme SaaS est conçue pour fonctionner avec une large gamme de matériel. Elle est compatible avec les tablettes iPad et Android récentes, ainsi qu'avec la plupart des appareils photo DSLR via notre application de capture. Nous proposons également notre propre matériel optimisé si nécessaire."
              },
              {
                question: "Comment gérer plusieurs événements simultanés ?",
                answer: "Notre dashboard vous permet de créer et configurer des événements indépendants, chacun avec ses propres paramètres, styles et galeries. Vous pouvez basculer facilement entre les événements et obtenir une vue d'ensemble de toute votre activité."
              },
              {
                question: "Quelles sont les options d'exportation de données ?",
                answer: "Toutes les données et images peuvent être exportées dans des formats standards (CSV, JSON pour les données, JPG/PNG pour les images). Nous proposons également des options d'archivage et de sauvegarde automatique."
              },
              {
                question: "Est-il possible de personnaliser l'interface utilisateur pour mes clients ?",
                answer: "Absolument ! Notre solution en marque blanche vous permet de personnaliser complètement l'interface utilisateur avec vos couleurs, logo et style visuel. Vous pouvez créer des expériences sur-mesure pour chaque client."
              }
            ].map((faq, index) => (
              <div key={index} className="card bg-white">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre offre événementielle ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Rejoignez les professionnels qui font confiance à notre solution SaaS pour gérer et développer leur activité.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/demo" className="bg-white text-violet-700 hover:bg-gray-100 transition-colors btn-primary">
                Demander une démonstration
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 transition-colors btn-primary">
                Parler à un expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
