import Image from 'next/image';
import Link from 'next/link';
import { PaintBucket, Users, CreditCard, Rocket, Sparkles, LineChart, Brush, Shield } from 'lucide-react';

export default function MarqueBlanche() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solution <span className="gradient-text">Marque Blanche</span> pour agences et revendeurs
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Proposez notre technologie de photobooth IA innovante à vos clients sous votre propre marque.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Devenir partenaire
              </Link>
              <Link href="/demo" className="btn-secondary">
                Demander une démo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Aperçu de la solution */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Votre propre solution de photobooth IA</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre programme Marque Blanche permet aux agences événementielles, aux photographes professionnels et aux entreprises technologiques de proposer notre plateforme SaaS complète sous leur propre identité.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Vous bénéficiez de toute la puissance de notre technologie avancée, tout en conservant votre identité de marque et votre relation client directe.
              </p>
              <div className="bg-violet-50 border border-violet-100 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <Sparkles className="w-5 h-5 text-violet-600 mr-2" />
                  Développez votre offre sans investissement technique
                </h3>
                <p className="text-gray-700">
                  Proposez immédiatement une solution photobooth IA innovante sans les coûts et délais de développement associés à la création d'une solution propriétaire.
                </p>
              </div>
            </div>
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/marque-blanche/white-label-hero.jpg"
                  alt="Solution Photobooth en Marque Blanche"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Pourquoi choisir notre solution en marque blanche ?</h2>
            <p className="text-lg text-gray-700">
              Un partenariat stratégique qui vous permet de vous concentrer sur votre cœur de métier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <PaintBucket className="w-10 h-10 text-violet-600" />,
                title: "Personnalisation complète",
                description: "Interface utilisateur, emails, galeries photos et portails clients entièrement personnalisables à votre charte graphique et logo."
              },
              {
                icon: <Users className="w-10 h-10 text-violet-600" />,
                title: "Relation client directe",
                description: "Vous conservez la relation directe avec vos clients, gérez la facturation et définissez votre propre modèle tarifaire."
              },
              {
                icon: <CreditCard className="w-10 h-10 text-violet-600" />,
                title: "Modèle économique attractif",
                description: "Tarification dégressive basée sur le volume, vous permettant d'augmenter vos marges à mesure que votre activité se développe."
              },
              {
                icon: <Brush className="w-10 h-10 text-violet-600" />,
                title: "Marketing personnalisé",
                description: "Accès à des ressources marketing personnalisables pour promouvoir la solution auprès de vos clients."
              },
              {
                icon: <LineChart className="w-10 h-10 text-violet-600" />,
                title: "Support dédié",
                description: "Formation complète et support technique dédié pour vous et votre équipe. Assistance de niveau 2 disponible pour vos clients."
              },
              {
                icon: <Rocket className="w-10 h-10 text-violet-600" />,
                title: "Innovation continue",
                description: "Bénéficiez automatiquement des dernières fonctionnalités et améliorations de notre plateforme sans effort supplémentaire."
              }
            ].map((advantage, index) => (
              <div key={index} className="card bg-white p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-lg p-3 bg-violet-100 mr-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold">{advantage.title}</h3>
                </div>
                <p className="text-gray-700">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Comment fonctionne le programme marque blanche</h2>
            <p className="text-lg text-gray-700">
              Un processus simple en quatre étapes pour lancer votre offre.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Ligne de progression */}
            <div className="absolute left-[15px] md:left-1/2 ml-0 md:-ml-0.5 w-1 h-full bg-violet-100 hidden sm:block"></div>
            
            {[
              {
                step: "1",
                title: "Consultation initiale",
                description: "Nous discutons de vos besoins, de votre marché cible et élaborons ensemble la stratégie de personnalisation optimale pour votre entreprise."
              },
              {
                step: "2",
                title: "Configuration et personnalisation",
                description: "Notre équipe configure votre instance personnalisée avec votre identité visuelle, vos options de service spécifiques et vos préférences commerciales."
              },
              {
                step: "3",
                title: "Formation et onboarding",
                description: "Nous formons votre équipe à l'utilisation de la plateforme, aux meilleures pratiques commerciales et aux réponses aux questions techniques fréquentes."
              },
              {
                step: "4",
                title: "Lancement et support continu",
                description: "Vous lancez votre offre auprès de vos clients avec notre soutien en arrière-plan pour garantir une expérience sans faille."
              }
            ].map((step, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0 sm:even:flex-row-reverse">
                {/* Indicateur d'étape pour mobile */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center mr-4 sm:hidden">
                  {step.step}
                </div>
                
                {/* Contenu */}
                <div className="flex-grow sm:w-[calc(50%-20px)]">
                  <div className="card bg-white p-6 sm:even:ml-0 even:mr-0">
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <span className="hidden sm:flex w-8 h-8 rounded-full bg-violet-600 text-white font-bold items-center justify-center mr-3">
                        {step.step}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
                
                {/* Indicateur d'étape pour desktop */}
                <div className="hidden sm:block absolute top-2 left-1/2 -ml-4 w-8 h-8 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center">
                  {step.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personnalisation */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Une personnalisation complète</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre solution marque blanche va bien au-delà d'un simple changement de logo. Nous offrons une personnalisation à 360° pour que la solution soit indistinguable d'un produit développé en interne.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-violet-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Interface utilisateur</h3>
                    <p className="text-gray-700">Couleurs, polices, logo et éléments visuels adaptés à votre charte graphique</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-violet-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Communications client</h3>
                    <p className="text-gray-700">Emails, notifications et messages entièrement personnalisables</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-violet-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Domaine personnalisé</h3>
                    <p className="text-gray-700">Solution accessible via votre propre domaine ou sous-domaine</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-violet-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Documentation</h3>
                    <p className="text-gray-700">Manuels utilisateurs, guides et ressources de support à votre marque</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/marque-blanche/custom-interface-1.jpg"
                    alt="Interface personnalisée exemple 1"
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg mt-6">
                  <Image
                    src="/marque-blanche/custom-interface-2.jpg"
                    alt="Interface personnalisée exemple 2"
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/marque-blanche/custom-interface-3.jpg"
                    alt="Interface personnalisée exemple 3"
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg mt-6">
                  <Image
                    src="/marque-blanche/custom-interface-4.jpg"
                    alt="Interface personnalisée exemple 4"
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Ils ont choisi notre solution marque blanche</h2>
            <p className="text-lg text-gray-700">
              Découvrez comment nos partenaires ont développé leur activité grâce à notre programme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Nous avons pu lancer une offre photobooth IA innovante en moins de 3 semaines, sans expertise technique. Notre chiffre d'affaires a augmenté de 40% la première année.",
                author: "Julien Moreau",
                role: "Fondateur, EventPro Solutions",
                image: "/testimonials/partner-testimonial-1.jpg"
              },
              {
                quote: "La flexibilité de la solution nous permet de proposer des expériences uniques adaptées à chaque client. Le support est impeccable et nous aide à résoudre rapidement tous les problèmes.",
                author: "Sophie Dubois",
                role: "Directrice, Momentum Events",
                image: "/testimonials/partner-testimonial-2.jpg"
              },
              {
                quote: "Nous recherchions une façon d'enrichir notre offre photo événementielle sans investissement lourd. Cette solution marque blanche était parfaite et nos clients adorent les résultats IA.",
                author: "Marc Lambert",
                role: "CEO, SnapMoment Agency",
                image: "/testimonials/partner-testimonial-3.jpg"
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
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-700">
              Tout ce que vous devez savoir sur notre programme marque blanche.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Quel est l'investissement initial nécessaire ?",
                answer: "Notre programme marque blanche est conçu pour minimiser les coûts initiaux. Des frais de mise en place sont requis pour la personnalisation et la formation, puis un modèle d'abonnement mensuel ou annuel basé sur le nombre de clients ou d'événements. Contactez notre équipe commerciale pour obtenir un devis personnalisé."
              },
              {
                question: "Combien de temps faut-il pour lancer la solution ?",
                answer: "Le délai moyen de mise en place est de 2 à 4 semaines, selon le niveau de personnalisation requis. Cela inclut la configuration technique, la personnalisation visuelle, les tests et la formation de votre équipe."
              },
              {
                question: "Qui gère le support client final ?",
                answer: "Dans le modèle marque blanche, vous êtes le premier niveau de support pour vos clients. Cependant, nous vous fournissons un support de niveau 2 pour vous aider à résoudre les problèmes techniques plus complexes. Nous proposons également une option de support direct aux clients finaux en votre nom."
              },
              {
                question: "Pouvons-nous adapter les tarifs pour nos clients ?",
                answer: "Absolument ! Vous avez une totale liberté pour définir votre propre structure tarifaire. Vous pouvez créer différents forfaits, ajouter des services à valeur ajoutée ou proposer des prix sur mesure selon vos clients."
              },
              {
                question: "La solution est-elle évolutive pour les grands événements ?",
                answer: "Oui, notre plateforme est conçue pour gérer des événements de toutes tailles, des petites réunions aux grands festivals avec des milliers de participants. L'architecture cloud s'adapte automatiquement à la demande."
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à développer votre activité ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Contactez notre service commercial pour discuter des possibilités de partenariat en marque blanche et obtenir une proposition sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-violet-700 hover:bg-gray-100 transition-colors btn-primary">
                Contacter l'équipe commerciale
              </Link>
              <Link href="/demo" className="bg-transparent border-2 border-white hover:bg-white/10 transition-colors btn-primary">
                Demander une démo personnalisée
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
