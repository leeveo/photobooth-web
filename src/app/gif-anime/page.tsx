import Image from 'next/image';
import Link from 'next/link';
import { Camera, FastForward, Clock, Share2, Users, Sparkles, Smartphone, Download, MessageSquare, Palette } from 'lucide-react';

export default function GifAnime() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                GIF Animé
              </span>
              <span className="text-gray-800"> : Capturez l'instant en mouvement</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Ajoutez une dimension dynamique à votre photobooth avec nos animations GIF interactives et partagez des moments vivants instantanément.
            </p>
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video relative">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/gif-anime/gif-hero.mp4" type="video/mp4" />
                  Votre navigateur ne prend pas en charge la vidéo HTML5.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                      Animation boosted by IA
                    </span>
                  </div>
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
              <h2 className="text-3xl font-bold mb-6">Qu'est-ce que le GIF Animé Photobooth ?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre solution GIF Animé transforme le traditionnel photobooth en un studio d'animation instantané. En capturant une séquence rapide de photos et en les assemblant automatiquement, nous créons des animations GIF dynamiques et engageantes.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Idéal pour tous types d'événements, le GIF Animé ajoute une dimension ludique et mémorable à l'expérience de vos invités, tout en augmentant considérablement le potentiel de partage sur les réseaux sociaux.
              </p>
              <div className="bg-violet-50 border border-violet-100 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <FastForward className="w-5 h-5 text-violet-600 mr-2" />
                  Plus qu'une simple photo
                </h3>
                <p className="text-gray-700">
                  Les GIFs capturent l'ambiance et l'énergie de votre événement d'une façon qu'une photo statique ne peut pas faire. Ils sont statistiquement partagés 3 fois plus souvent sur les réseaux sociaux que les photos traditionnelles.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander un devis
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/gif-anime/exemple-gif-1.jpg"
                    alt="Exemple de GIF animé - Boomerang"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="p-3 bg-white">
                    <p className="font-medium text-center">Mode Boomerang</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md mt-8">
                  <Image
                    src="/gif-anime/exemple-gif-2.jpg"
                    alt="Exemple de GIF animé - Séquence"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="p-3 bg-white">
                    <p className="font-medium text-center">Mode Séquence</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md col-span-2">
                  <Image
                    src="/gif-anime/exemple-gif-3.jpg"
                    alt="Exemple de GIF animé - Groupe"
                    width={600}
                    height={300}
                    className="w-full h-auto"
                  />
                  <div className="p-3 bg-white">
                    <p className="font-medium text-center">Mode Groupe</p>
                  </div>
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
            <h2 className="text-3xl font-bold mb-4">Comment fonctionne le GIF Animé ?</h2>
            <p className="text-lg text-gray-700">
              Un processus simple et intuitif pour des résultats spectaculaires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="w-12 h-12 text-violet-600" />,
                title: "Posez",
                description: "Les participants se préparent et la séquence de photos démarre automatiquement (généralement 3 à 6 clichés)."
              },
              {
                icon: <Clock className="w-12 h-12 text-violet-600" />,
                title: "Capturez",
                description: "Notre système capture rapidement plusieurs images à intervalle rapproché pour créer l'effet de mouvement."
              },
              {
                icon: <Sparkles className="w-12 h-12 text-violet-600" />,
                title: "Animez",
                description: "Le logiciel assemble instantanément les images en une animation fluide avec l'effet choisi (boucle, boomerang, etc.)."
              },
              {
                icon: <Share2 className="w-12 h-12 text-violet-600" />,
                title: "Partagez",
                description: "Le GIF est immédiatement disponible pour être partagé par email, SMS ou sur les réseaux sociaux."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute mt-10 left-full">
                    <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z" fill="#8B5CF6"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types d'animations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Différents modes d'animation</h2>
            <p className="text-lg text-gray-700">
              Variez l'expérience avec nos multiples modes d'animation personnalisables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Boucle standard",
                description: "Animation classique qui défile en boucle continue, parfaite pour capturer une séquence d'action.",
                image: "/gif-anime/mode-boucle.jpg"
              },
              {
                title: "Boomerang",
                description: "Les images défilent d'abord en avant puis en arrière, créant un effet de va-et-vient dynamique et amusant.",
                image: "/gif-anime/mode-boomerang.jpg"
              },
              {
                title: "Slow motion",
                description: "Ralentissement de l'animation pour un effet cinématique qui met en valeur les mouvements subtils.",
                image: "/gif-anime/mode-slowmotion.jpg"
              },
              {
                title: "Séquence photo",
                description: "Présentation de chaque photo individuellement avant de les assembler en animation fluide.",
                image: "/gif-anime/mode-sequence.jpg"
              },
              {
                title: "Stop motion",
                description: "Animation image par image avec un léger délai qui donne un effet artistique unique.",
                image: "/gif-anime/mode-stopmotion.jpg"
              },
              {
                title: "Personnalisé",
                description: "Mode d'animation sur mesure adapté à votre marque ou au thème de votre événement.",
                image: "/gif-anime/mode-personnalise.jpg"
              }
            ].map((mode, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={mode.image}
                    alt={`Mode ${mode.title}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <h3 className="text-white font-bold text-xl">{mode.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{mode.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Options de personnalisation */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Options de personnalisation</h2>
            <p className="text-lg text-gray-700">
              Adaptez l'expérience GIF à votre marque ou au thème de votre événement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                    <Palette className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Bordures et cadres</h3>
                    <p className="text-gray-700">
                      Ajoutez votre logo, les couleurs de votre marque ou des éléments graphiques personnalisés autour de chaque GIF.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Filtres et effets IA</h3>
                    <p className="text-gray-700">
                      Appliquez des filtres artistiques générés par IA ou des effets spéciaux qui s'adaptent au mouvement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Textes et overlays</h3>
                    <p className="text-gray-700">
                      Intégrez des textes personnalisés, dates d'événement, hashtags ou messages qui apparaissent de façon dynamique.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                    <FastForward className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Timing et transitions</h3>
                    <p className="text-gray-700">
                      Personnalisez la vitesse de l'animation, le nombre d'images capturées et les transitions entre chaque cliché.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/gif-anime/personnalisation.jpg"
                  alt="Options de personnalisation de GIF animé"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm uppercase font-bold">Entièrement personnalisable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'utilisation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Parfait pour tous types d'événements</h2>
            <p className="text-lg text-gray-700">
              Le GIF animé s'adapte à toutes les occasions pour créer des moments mémorables et viraux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mariages",
                description: "Offrez à vos invités une façon amusante de célébrer votre union avec des animations qui capturent la joie et les moments spontanés.",
                image: "/gif-anime/event-mariage.jpg"
              },
              {
                title: "Événements corporate",
                description: "Dynamisez vos événements d'entreprise avec une activité interactive qui favorise l'engagement des participants.",
                image: "/gif-anime/event-corporate.jpg"
              },
              {
                title: "Salons et foires",
                description: "Attirez les visiteurs sur votre stand avec une animation ludique qui met en valeur votre marque de façon mémorable.",
                image: "/gif-anime/event-salon.jpg"
              },
              {
                title: "Fêtes privées",
                description: "Ajoutez une touche spéciale à vos célébrations avec des GIFs qui illustrent parfaitement l'ambiance festive.",
                image: "/gif-anime/event-fete.jpg"
              },
              {
                title: "Lancements de produits",
                description: "Créez du buzz autour de votre nouveau produit avec des animations partageables qui amplifient votre portée marketing.",
                image: "/gif-anime/event-lancement.jpg"
              },
              {
                title: "Concerts et festivals",
                description: "Offrez une expérience supplémentaire aux festivaliers qui pourront capturer et partager leur enthousiasme.",
                image: "/gif-anime/event-festival.jpg"
              }
            ].map((event, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={event.image}
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

      {/* Avantages */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Les avantages des GIFs animés</h2>
            <p className="text-lg text-gray-700">
              Pourquoi choisir notre solution GIF plutôt qu'un photobooth traditionnel ?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Share2 className="w-10 h-10 text-violet-600" />,
                title: "Potentiel viral démultiplié",
                description: "Les GIFs sont partagés 3 fois plus que les images statiques sur les réseaux sociaux, augmentant la visibilité de votre événement."
              },
              {
                icon: <Users className="w-10 h-10 text-violet-600" />,
                title: "Expérience collaborative",
                description: "Encourage les participants à interagir ensemble pour créer des séquences coordonnées et des moments spontanés."
              },
              {
                icon: <Sparkles className="w-10 h-10 text-violet-600" />,
                title: "Souvenirs dynamiques",
                description: "Capture l'énergie et l'ambiance d'un événement bien mieux qu'une photo fixe ne pourrait le faire."
              },
              {
                icon: <Smartphone className="w-10 h-10 text-violet-600" />,
                title: "Compatible multi-plateformes",
                description: "Les GIFs sont universellement pris en charge sur tous les appareils et réseaux sociaux, sans application spécifique nécessaire."
              },
              {
                icon: <Download className="w-10 h-10 text-violet-600" />,
                title: "Formats légers",
                description: "Poids de fichier réduit par rapport aux vidéos, facilitant le partage instantané même avec une connexion limitée."
              },
              {
                icon: <FastForward className="w-10 h-10 text-violet-600" />,
                title: "Répétition infinie",
                description: "L'effet de boucle capte l'attention plus longtemps qu'une image fixe ou même qu'une courte vidéo."
              }
            ].map((advantage, index) => (
              <div key={index} className="flex items-start">
                <div className="rounded-lg p-3 bg-white shadow-md mr-4 flex-shrink-0">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Ce que nos clients disent</h2>
            <p className="text-lg text-gray-700">
              Des événements transformés grâce à notre service GIF animé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Le GIF booth a été la star de notre mariage ! Nos invités ont adoré créer des animations et les partager immédiatement. Les moments capturés sont bien plus vivants que des photos traditionnelles.",
                author: "Camille et Thomas",
                role: "Mariage à Paris",
                image: "/gif-anime/testimonial-1.jpg"
              },
              {
                quote: "Pour notre stand au salon professionnel, le GIF animé a augmenté notre trafic de 60% par rapport à l'année précédente. Les visiteurs faisaient la queue pour vivre l'expérience et partager notre marque !",
                author: "Maxime Durand",
                role: "Directeur Marketing, TechSolutions",
                image: "/gif-anime/testimonial-2.jpg"
              },
              {
                quote: "L'option GIF animé a totalement transformé notre événement de lancement. Les animations étaient si populaires que notre hashtag est devenu trending sur Twitter pendant 3 heures.",
                author: "Laura Martin",
                role: "Événementiel, Fashion Brand",
                image: "/gif-anime/testimonial-3.jpg"
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

      {/* Options et prix */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos forfaits GIF animé</h2>
            <p className="text-lg text-gray-700">
              Des solutions adaptées à vos besoins et à votre budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Essentiel",
                price: "499€",
                description: "Pour les petits événements et occasions privées",
                features: [
                  "GIF booth pendant 3h",
                  "2 modes d'animation",
                  "Personnalisation basique",
                  "Galerie en ligne (14 jours)",
                  "Partage social"
                ],
                cta: "Réserver"
              },
              {
                title: "Premium",
                price: "899€",
                description: "Pour les événements moyens à grands",
                features: [
                  "GIF booth pendant 5h",
                  "Tous les modes d'animation",
                  "Personnalisation complète",
                  "Galerie en ligne (30 jours)",
                  "Partage social avancé",
                  "Assistant sur place",
                  "Accessoires thématiques"
                ],
                popular: true,
                cta: "Réserver"
              },
              {
                title: "Entreprise",
                price: "Sur mesure",
                description: "Pour les besoins professionnels spécifiques",
                features: [
                  "Durée personnalisée",
                  "Animations sur mesure",
                  "Branding complet",
                  "Intégration API",
                  "Statistiques d'engagement",
                  "Support technique dédié",
                  "Livraison des fichiers source"
                ],
                cta: "Demander un devis"
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`card bg-white ${plan.popular ? 'border-violet-400 shadow-lg relative transform scale-105' : 'border-violet-100'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Le plus populaire
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Sur mesure" && <span className="text-gray-600">/événement</span>}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className={plan.popular ? "btn-primary w-full text-center block" : "btn-secondary w-full text-center block"}
                  >
                    {plan.cta}
                  </Link>
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
              Tout ce que vous devez savoir sur notre service GIF animé.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Combien de personnes peuvent apparaître dans un GIF ?",
                answer: "Nos GIF booths sont conçus pour accueillir jusqu'à 6-8 personnes confortablement, selon la configuration choisie. Pour les groupes plus nombreux, nous proposons des solutions sur mesure avec un angle de capture plus large."
              },
              {
                question: "Quel est le délai pour recevoir les GIFs après la prise ?",
                answer: "Les GIFs sont générés instantanément et disponibles pour partage immédiat. Ils sont envoyés par email ou SMS en moins de 10 secondes, et peuvent être partagés directement sur les réseaux sociaux depuis notre interface."
              },
              {
                question: "Peut-on ajouter notre logo ou des éléments de marque ?",
                answer: "Absolument ! Tous nos forfaits incluent un niveau de personnalisation. Vous pouvez ajouter votre logo, slogan, hashtag ou tout autre élément de marque qui apparaîtra sur les GIFs générés."
              },
              {
                question: "Quelle est la qualité des GIFs produits ?",
                answer: "Nos GIFs sont générés en haute définition pour garantir une qualité optimale tout en maintenant un poids de fichier raisonnable pour le partage. La résolution standard est de 720p, mais nous proposons aussi des options en 1080p pour les forfaits premium."
              },
              {
                question: "Faut-il une connexion internet pour utiliser le service ?",
                answer: "Une connexion internet est recommandée pour les fonctionnalités de partage immédiat et l'envoi par email. Cependant, notre système peut fonctionner hors ligne et stocker les GIFs localement pour un partage ultérieur si nécessaire."
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à animer votre prochain événement ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Offrez à vos invités une expérience mémorable et créez des souvenirs animés qui seront partagés encore et encore.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander un devis
              </Link>
              <Link
                href="/demo"
                className="inline-block px-8 py-3 rounded-full bg-transparent border-2 border-white text-white font-semibold shadow-lg hover:bg-white/10 transition-colors text-lg"
              >
                Voir une démonstration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
