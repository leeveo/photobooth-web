import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Concepts d'activation avec descriptions et images
const activationConcepts = [
  {
    id: "magazine-cover",
    title: "Couvertures de Magazine",
    description: "Transformez vos invités en stars de magazine avec des couvertures personnalisées qui reflètent l'identité de votre marque ou le thème de votre événement.",
    image: "/event/magazine-cover.jpg",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: "headshot-lounges",
    title: "Studios Photo Professionnels",
    description: "Offrez à vos participants des portraits professionnels de haute qualité dans un espace élégant, parfait pour les événements d'entreprise et les conférences.",
    image: "/event/headshot-lounge.jpg",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: "mascot-moments",
    title: "Moments avec Mascottes Personnalisées",
    description: "Créez des interactions uniques entre vos invités et des mascottes virtuelles personnalisées qui représentent votre marque ou votre événement.",
    image: "/event/mascot-moments.jpg",
    color: "from-amber-500 to-orange-500"
  },
  {
    id: "product-spotlight",
    title: "Mise en Valeur Interactive de Produits",
    description: "Présentez vos produits de manière innovante avec une expérience photo interactive qui met en vedette vos offres et engage vos clients potentiels.",
    image: "/event/product-spotlight.jpg",
    color: "from-emerald-500 to-green-500"
  },
  {
    id: "vision-boards",
    title: "Tableaux de Vision Sectoriels",
    description: "Permettez aux participants de créer des tableaux de vision inspirants liés à votre industrie ou à votre thématique, partageables instantanément.",
    image: "/event/vision-boards.jpg",
    color: "from-violet-500 to-purple-500"
  },
  {
    id: "gallery-walls",
    title: "Murs de Galerie en Direct",
    description: "Créez un affichage dynamique et évolutif des photos de votre événement qui s'agrandit en temps réel à mesure que vos invités partagent leurs moments.",
    image: "/event/gallery-wall.jpg",
    color: "from-cyan-500 to-teal-500"
  },
  {
    id: "collectible-cards",
    title: "Cartes à Collectionner Thématiques",
    description: "Offrez des souvenirs personnalisés sous forme de cartes à collectionner liées au thème de votre événement ou aux intérêts de vos participants.",
    image: "/event/collectible-cards.jpg",
    color: "from-red-500 to-pink-500"
  },
  {
    id: "time-machine",
    title: "Portraits Voyage Temporel",
    description: "Transportez vos invités à différentes époques avec des portraits qui les plongent dans le passé ou le futur grâce à notre technologie d'IA.",
    image: "/event/time-machine.jpg",
    color: "from-yellow-500 to-amber-500"
  },
  {
    id: "oversized-frames",
    title: "Cadres Photo Géants",
    description: "Créez des moments partageables avec des cadres surdimensionnés personnalisés qui servent de toile de fond parfaite pour les photos de groupe.",
    image: "/event/oversized-frames.jpg",
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: "professional-props",
    title: "Accessoires pour Professionnels",
    description: "Proposez des accessoires virtuels ou réels spécifiques à votre secteur pour créer des photos engageantes et pertinentes pour votre public.",
    image: "/event/professional-props.jpg",
    color: "from-teal-500 to-emerald-500"
  },
  {
    id: "persona-surveys",
    title: "Enquêtes de Personnalité Personnalisées",
    description: "Engagez vos participants avec des quiz interactifs qui génèrent des portraits personnalisés basés sur leurs réponses à des questions spécifiques.",
    image: "/event/persona-surveys.jpg",
    color: "from-fuchsia-500 to-purple-500"
  },
  {
    id: "seasonal-celebrations",
    title: "Célébrations Saisonnières",
    description: "Adaptez votre expérience photo aux saisons et aux fêtes avec des thèmes et filtres qui capturent l'ambiance du moment de l'année.",
    image: "/event/seasonal.jpg",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "team-mosaic",
    title: "Mosaïque d'Équipe Interactive",
    description: "Créez une œuvre d'art collaborative composée des photos individuelles de tous les membres de l'équipe, symbolisant l'unité et la coopération.",
    image: "/event/team-mosaic.jpg",
    color: "from-lime-500 to-green-500"
  },
  {
    id: "ar-experiences",
    title: "Expériences en Réalité Augmentée",
    description: "Combinez le monde réel et virtuel avec des expériences photo en réalité augmentée qui surprendront et impressionneront vos invités.",
    image: "/event/ar-experience.jpg",
    color: "from-sky-500 to-blue-500"
  },
];

export default function EventPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Concepts d'Activation d'Événements
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              Découvrez nos concepts créatifs pour engager vos invités et transformer votre événement en une expérience mémorable et partageante.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-gradient-to-b from-violet-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Des idées fraîches pour dynamiser vos événements</h2>
            <p className="text-gray-700 mb-4">
              Votre événement mérite quelque chose d'original et d'engageant. Voici une sélection de concepts créatifs que nous pouvons personnaliser pour s'adapter parfaitement à votre marque, à votre public et à vos objectifs.
            </p>
            <p className="text-gray-700">
              Cliquez sur chaque concept pour découvrir comment nous pouvons l'adapter à votre événement spécifique et créer une expérience qui restera dans la mémoire de vos invités.
            </p>
          </div>
        </div>
      </section>

      {/* Activation Concepts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activationConcepts.map((concept) => (
              <Link href={`/event/${concept.id}`} key={concept.id} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={concept.image}
                      alt={concept.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${concept.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{concept.title}</h3>
                    <p className="text-gray-600 mb-4">{concept.description}</p>
                    <div className="flex items-center text-violet-600 font-medium group-hover:text-violet-800 transition-colors">
                      <span>En savoir plus</span>
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Banner */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Une idée originale en tête ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Nos experts peuvent créer des concepts sur mesure spécifiquement adaptés à votre événement et à vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                contactez nous
              </Link>
              <Link
                href="/demo"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander une démonstration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Pourquoi nos concepts d'activation fonctionnent</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-violet-50 rounded-lg">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Engagement élevé</h3>
                <p className="text-gray-600">Des expériences interactives qui captivent l'attention et créent des souvenirs durables.</p>
              </div>
              
              <div className="text-center p-6 bg-violet-50 rounded-lg">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Visibilité amplifiée</h3>
                <p className="text-gray-600">Des contenus hautement partageables qui étendent la portée de votre événement sur les réseaux sociaux.</p>
              </div>
              
              <div className="text-center p-6 bg-violet-50 rounded-lg">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112.83 2.83l-2.83 2.83a2 2 0 01-2.83.12V8.5a2 2 0 012.83-2.83L12 8zm0 0V4.5a2 2 0 012.83 2.83l-2.83 2.83a2 2 0 01-2.83.12V8.5a2 2 0 012.83-2.83L12 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Personnalisation totale</h3>
                <p className="text-gray-600">Des concepts adaptés à votre marque, à votre thème et à vos objectifs spécifiques.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Comment nous créons votre activation</h2>
            <p className="text-lg text-gray-700">
              Notre processus en quatre étapes garantit une expérience parfaitement adaptée à vos besoins.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-violet-200 hidden md:block"></div>
              
              {/* Steps */}
              <div className="space-y-16">
                {[
                  {
                    number: "01",
                    title: "Consultation",
                    description: "Nous discutons de vos objectifs, de votre public cible et de votre vision pour comprendre parfaitement vos besoins."
                  },
                  {
                    number: "02",
                    title: "Conception personnalisée",
                    description: "Notre équipe créative développe un concept d'activation sur mesure qui s'aligne avec votre marque et vos objectifs."
                  },
                  {
                    number: "03",
                    title: "Mise en œuvre et test",
                    description: "Nous préparons tous les aspects techniques et créatifs de votre activation, avec des tests rigoureux pour garantir une expérience impeccable."
                  },
                  {
                    number: "04",
                    title: "Exécution et support",
                    description: "Notre équipe professionnelle gère l'activation pendant votre événement, assurant un engagement maximal et une expérience fluide."
                  }
                ].map((step, index) => (
                  <div key={index} className="relative flex md:items-center">
                    <div className={`flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-violet-600 text-white font-bold text-lg z-10 ${index % 2 === 0 ? 'md:order-1' : 'md:order-1'}`}>
                      {step.number}
                    </div>
                    
                    <div className={`ml-6 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:mr-auto' : 'md:pl-12 md:text-left md:ml-auto'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Prêt à créer une expérience mémorable ?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Contactez-nous pour discuter de votre prochain événement et découvrir comment nos concepts d'activation peuvent l'élever à un niveau supérieur.
            </p>
             <Link
                href="/demo"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
               Commencer votre projet
              </Link>
          </div>
        </div>
      </section>
    </>
  );
}
