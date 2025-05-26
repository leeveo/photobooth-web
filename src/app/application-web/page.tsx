import Image from 'next/image';
import Link from 'next/link';
import { Smartphone, QrCode, Zap, Share2, Camera, Users, Sparkles, Cog, BarChart, Lock } from 'lucide-react';

export default function ApplicationWeb() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Application Web
              </span>
              <span className="text-gray-800"> : L'expérience photobooth dans votre poche</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Transformez n'importe quel smartphone en photobooth professionnel et gérez tous vos événements depuis votre appareil mobile.
            </p>
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/application-web/app-hero.jpg"
                alt="Application photobooth sur smartphone"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                    Zéro installation
                  </span>
                </div>
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
              <h2 className="text-3xl font-bold mb-6">Le pouvoir du photobooth dans votre smartphone</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre plateforme SaaS révolutionne l'expérience photobooth traditionnelle en l'adaptant entièrement aux appareils mobiles. Plus besoin d'équipements volumineux ou d'installations complexes !
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Que vous soyez organisateur d'événement ou simple invité, notre application web responsive offre une expérience fluide et intuitive, directement accessible depuis n'importe quel smartphone.
              </p>
              <div className="bg-violet-50 border border-violet-100 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <Smartphone className="w-5 h-5 text-violet-600 mr-2" />
                  Double fonctionnalité
                </h3>
                <p className="text-gray-700">
                  Une plateforme, deux usages : un tableau de bord complet pour les organisateurs et une interface simplifiée pour les invités. Le tout accessible via un simple navigateur web, sans téléchargement nécessaire.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander une démo
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="relative z-20 transform -rotate-6">
                  <div className="relative w-64 h-[500px]">
                    <div className="absolute top-0 left-0 right-0 mx-auto w-64 h-[500px]">
                      <Image
                        src="/application-web/phone-frame-1.png"
                        alt="Interface administrateur"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-[60px] left-[22px] w-[220px] h-[380px] overflow-hidden rounded-[18px]">
                      <Image
                        src="/application-web/admin-interface.jpg"
                        alt="Dashboard admin"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative z-10 transform rotate-6 -mt-80 ml-40">
                  <div className="relative w-64 h-[500px]">
                    <div className="absolute top-0 left-0 right-0 mx-auto w-64 h-[500px]">
                      <Image
                        src="/application-web/phone-frame-2.png"
                        alt="Interface utilisateur"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-[60px] left-[22px] w-[220px] h-[380px] overflow-hidden rounded-[18px]">
                      <Image
                        src="/application-web/user-interface.jpg"
                        alt="Interface photobooth"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pour les administrateurs */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Pour les organisateurs d'événements</h2>
            <p className="text-lg text-gray-700">
              Gérez tout votre événement depuis n'importe où grâce à notre plateforme mobile complète.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cog className="w-12 h-12 text-violet-600" />,
                title: "Configuration facile",
                description: "Créez et paramétrez votre événement en quelques minutes : thèmes personnalisés, filtres IA, messages d'accueil et plus encore."
              },
              {
                icon: <BarChart className="w-12 h-12 text-violet-600" />,
                title: "Analytique en temps réel",
                description: "Suivez l'activité et l'engagement de vos invités en direct : nombre de photos, partages, filtres les plus utilisés."
              },
              {
                icon: <QrCode className="w-12 h-12 text-violet-600" />,
                title: "Génération de QR codes",
                description: "Créez et partagez des QR codes personnalisés pour permettre à vos invités d'accéder instantanément à l'expérience photo."
              },
              {
                icon: <Lock className="w-12 h-12 text-violet-600" />,
                title: "Modération des contenus",
                description: "Approuvez ou retirez des contenus directement depuis votre smartphone pour garder le contrôle de votre galerie."
              },
              {
                icon: <Users className="w-12 h-12 text-violet-600" />,
                title: "Gestion des accès",
                description: "Attribuez différents niveaux d'accès à votre équipe pour une collaboration efficace pendant l'événement."
              },
              {
                icon: <Zap className="w-12 h-12 text-violet-600" />,
                title: "Notifications instantanées",
                description: "Recevez des alertes en temps réel sur l'activité de votre événement pour réagir rapidement si nécessaire."
              }
            ].map((feature, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full p-3 bg-violet-100 mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour les utilisateurs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Pour les invités à l'événement</h2>
            <p className="text-lg text-gray-700">
              Une expérience photobooth directement sur leur smartphone, sans téléchargement d'application.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                    <QrCode className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Accès instantané</h3>
                    <p className="text-gray-700">
                      Un simple scan de QR code suffit pour accéder à l'expérience photobooth complète, sans création de compte ni téléchargement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                    <Camera className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Capture simplifiée</h3>
                    <p className="text-gray-700">
                      Interface intuitive pour prendre des photos ou des vidéos rapidement, avec aperçu en temps réel et options de retouche.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Filtres IA exclusifs</h3>
                    <p className="text-gray-700">
                      Accès à tous nos filtres et effets IA de qualité professionnelle, adaptés au thème de l'événement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                    <Share2 className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Partage multiplateforme</h3>
                    <p className="text-gray-700">
                      Partage immédiat sur les réseaux sociaux, par email ou SMS, avec possibilité de télécharger les créations en haute résolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto w-80 h-[600px]">
                <Image
                  src="/application-web/user-experience.png"
                  alt="Interface utilisateur photobooth"
                  fill
                  className="object-contain"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm uppercase font-bold">Sans téléchargement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Comment ça fonctionne ?</h2>
            <p className="text-lg text-gray-700">
              Une expérience fluide en quelques étapes simples.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ol className="relative border-l border-violet-300 ml-6 space-y-12">
              {[
                {
                  title: "Configuration de l'événement",
                  description: "L'organisateur crée un nouvel événement via l'interface d'administration et personnalise tous les paramètres selon ses besoins.",
                  image: "/application-web/step1-config.jpg"
                },
                {
                  title: "Génération de l'accès invités",
                  description: "Le système génère un QR code unique et/ou un lien direct que l'organisateur peut partager avec les invités.",
                  image: "/application-web/step2-qrcode.jpg"
                },
                {
                  title: "Accès des participants",
                  description: "Les invités scannent le QR code ou cliquent sur le lien pour accéder instantanément à l'application web photobooth.",
                  image: "/application-web/step3-access.jpg"
                },
                {
                  title: "Création et partage",
                  description: "Les invités prennent des photos, appliquent des filtres IA et partagent leurs créations, qui sont automatiquement ajoutées à la galerie de l'événement.",
                  image: "/application-web/step4-create.jpg"
                }
              ].map((step, index) => (
                <li key={index} className="ml-8">
                  <span className="absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full bg-violet-600 text-white font-bold ring-8 ring-violet-50">
                    {index + 1}
                  </span>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                    <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={400}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Les avantages d'une solution mobile</h2>
            <p className="text-lg text-gray-700">
              Pourquoi choisir notre application web plutôt qu'un photobooth traditionnel ?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Aucun équipement nécessaire",
                description: "Économisez sur la location ou l'achat de matériel coûteux - tout fonctionne directement sur les smartphones existants.",
                icon: <Smartphone className="w-10 h-10 text-violet-600" />
              },
              {
                title: "Nombre d'utilisateurs illimité",
                description: "Pas de file d'attente devant un photobooth unique - tous vos invités peuvent participer simultanément.",
                icon: <Users className="w-10 h-10 text-violet-600" />
              },
              {
                title: "Déploiement instantané",
                description: "Mise en place en quelques minutes sans installation physique complexe ou configuration technique.",
                icon: <Zap className="w-10 h-10 text-violet-600" />
              },
              {
                title: "Flexibilité totale",
                description: "Adaptez l'expérience en temps réel aux besoins de votre événement, où que vous soyez.",
                icon: <QrCode className="w-10 h-10 text-violet-600" />
              },
              {
                title: "Expérience hygiénique",
                description: "Solution sans contact, particulièrement adaptée aux préoccupations sanitaires actuelles.",
                icon: <Lock className="w-10 h-10 text-violet-600" />
              },
              {
                title: "Partage viral amplifié",
                description: "Utilisation des appareils personnels pour un partage plus naturel et immédiat sur les réseaux sociaux.",
                icon: <Share2 className="w-10 h-10 text-violet-600" />
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

      {/* Témoignages */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Ils ont adopté notre solution mobile</h2>
            <p className="text-lg text-gray-700">
              Découvrez comment notre application web a transformé leurs événements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Pour notre conférence annuelle de 500 personnes, la solution mobile a permis d'éliminer les files d'attente habituelles tout en multipliant par 3 le nombre de photos prises et partagées.",
                author: "Claire Dubois",
                role: "Directrice événementiel, TechConf",
                image: "/testimonials/testimonial-1.jpg"
              },
              {
                quote: "En tant qu'organisatrice de mariages, proposer cette solution à mes clients a été un véritable plus. Simple à mettre en place et rentable car ne nécessitant aucun matériel supplémentaire.",
                author: "Marc Laurent",
                role: "Wedding Planner, Moments Précieux",
                image: "/testimonials/testimonial-2.jpg"
              },
              {
                quote: "L'accessibilité de la solution sur smartphone a créé une dynamique incroyable lors de notre festival. Les participants ont partagé massivement leur expérience, amplifiant notre visibilité en ligne.",
                author: "Julia Mercier",
                role: "Organisatrice, Festival Lumières",
                image: "/testimonials/testimonial-3.jpg"
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-700">
              Tout ce que vous devez savoir sur notre application web photo.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Est-ce que cela fonctionne sur tous les smartphones ?",
                answer: "Oui, notre application web est optimisée pour fonctionner sur tous les smartphones récents (iOS et Android). Elle nécessite simplement un navigateur web moderne et un accès internet."
              },
              {
                question: "Faut-il télécharger une application ?",
                answer: "Non, c'est l'un des grands avantages de notre solution ! Tout fonctionne directement dans le navigateur web, sans aucun téléchargement ou installation nécessaire."
              },
              {
                question: "Comment les invités accèdent-ils à l'expérience photo ?",
                answer: "Les invités peuvent scanner un QR code affiché sur le lieu de l'événement ou cliquer sur un lien qui leur est envoyé. L'accès est immédiat et ne nécessite pas de création de compte."
              },
              {
                question: "La qualité des photos est-elle aussi bonne que sur un photobooth traditionnel ?",
                answer: "Absolument ! Notre application utilise la caméra de haute qualité des smartphones modernes, souvent supérieure à celle des photobooths traditionnels. Nos algorithmes IA optimisent également chaque image pour un résultat professionnel."
              },
              {
                question: "Est-il possible de personnaliser l'interface aux couleurs de notre marque ou événement ?",
                answer: "Oui, notre solution offre une personnalisation complète : logo, couleurs, messages d'accueil, et même filtres IA sur mesure adaptés à votre thématique."
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer l'expérience photo de votre événement ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Découvrez la puissance d'une solution mobile, sans matériel et accessible à tous vos invités instantanément.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander une démo
              </Link>
              <Link
                href="/pricing"
                className="inline-block px-8 py-3 rounded-full bg-transparent border-2 border-white text-white font-semibold shadow-lg hover:bg-white/10 transition-colors text-lg"
              >
                Voir nos tarifs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
