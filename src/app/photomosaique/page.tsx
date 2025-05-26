import Image from 'next/image';
import Link from 'next/link';
import { Grid, Users, Clock, Camera, Share2, Zap, BarChart, Heart } from 'lucide-react';

export default function Photomosaique() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Photomosaïque
              </span>
              <span className="text-gray-800"> : L'art collaboratif à grande échelle</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Transformez les photos de vos invités en une œuvre d'art spectaculaire et évolutive qui capte l'essence de votre événement.
            </p>
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/photomosaique/mosaic-hero.jpg"
                alt="Photomosaïque en action lors d'un événement"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                    Expérience collective
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
              <h2 className="text-3xl font-bold mb-6">Qu'est-ce que la photomosaïque ?</h2>
              <p className="text-lg text-gray-700 mb-6">
                La photomosaïque est une œuvre d'art collaborative qui se construit tout au long de votre événement. Elle transforme une image de votre choix (logo, portrait, message) en une impressionnante mosaïque composée de centaines de photos prises par vos invités.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                À mesure que les participants prennent des photos, notre système les intègre automatiquement à la mosaïque, créant une expérience visuelle qui évolue en temps réel et renforce le sentiment d'appartenance collective.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Jusqu'à 1000+ photos dans une seule mosaïque",
                  "Affichage en temps réel sur grands écrans",
                  "Export haute résolution après l'événement",
                  "Personnalisation complète de l'image maîtresse"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander un devis
              </Link>
            </div>
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <video 
                  className="w-full h-auto"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster="/photomosaique/mosaic-process-poster.jpg"
                >
                  <source src="/photomosaique/mosaic-process.mp4" type="video/mp4" />
                  Votre navigateur ne prend pas en charge la vidéo HTML5.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-medium">Visualisez la construction d'une photomosaïque en accéléré</p>
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
            <h2 className="text-3xl font-bold mb-4">Comment fonctionne la photomosaïque ?</h2>
            <p className="text-lg text-gray-700">
              Une expérience simple mais captivante qui évolue tout au long de votre événement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="w-12 h-12 text-violet-600" />,
                title: "Capture",
                description: "Vos invités prennent des photos via notre photobooth ou leurs smartphones avec notre application web."
              },
              {
                icon: <Zap className="w-12 h-12 text-violet-600" />,
                title: "Analyse",
                description: "Notre algorithme analyse chaque photo pour la placer au meilleur endroit dans la mosaïque."
              },
              {
                icon: <Grid className="w-12 h-12 text-violet-600" />,
                title: "Intégration",
                description: "La photo est immédiatement intégrée à la mosaïque, visible sur les écrans en temps réel."
              },
              {
                icon: <Share2 className="w-12 h-12 text-violet-600" />,
                title: "Partage",
                description: "La mosaïque finale est partageable et imprimable en haute résolution après l'événement."
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

      {/* Cas d'utilisation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Idéal pour tous types d'événements</h2>
            <p className="text-lg text-gray-700">
              Découvrez comment la photomosaïque peut transformer votre prochain événement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mariages",
                description: "Créez une œuvre mémorable avec tous vos invités qui représente parfaitement votre journée spéciale.",
                image: "/photomosaique/use-wedding.jpg",
                example: "Portrait des mariés composé des photos de tous les invités"
              },
              {
                title: "Événements corporate",
                description: "Renforcez l'identité de marque et l'esprit d'équipe avec une création collaborative impressionnante.",
                image: "/photomosaique/use-corporate.jpg",
                example: "Logo d'entreprise ou message composé des photos des collaborateurs"
              },
              {
                title: "Salons et conférences",
                description: "Engagez les visiteurs dans une activité interactive qui crée du trafic sur votre stand.",
                image: "/photomosaique/use-conference.jpg",
                example: "Représentation visuelle évolutive qui s'enrichit tout au long de l'événement"
              },
              {
                title: "Lancement de produit",
                description: "Visualisez l'engouement autour de votre nouveau produit avec une mosaïque thématique.",
                image: "/photomosaique/use-product.jpg",
                example: "Image du produit qui se révèle progressivement avec les photos des participants"
              },
              {
                title: "Événements caritatifs",
                description: "Symbolisez la contribution collective avec une œuvre visuelle qui représente votre cause.",
                image: "/photomosaique/use-charity.jpg",
                example: "Chaque photo représente un don ou un soutien à la cause défendue"
              },
              {
                title: "Festivals et concerts",
                description: "Créez un souvenir collectif qui capture l'énergie et la diversité des participants.",
                image: "/photomosaique/use-festival.jpg",
                example: "Affiche ou logo du festival composé des photos du public"
              }
            ].map((useCase, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={useCase.image}
                    alt={`Photomosaïque pour ${useCase.title}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <h3 className="text-white font-bold text-xl">{useCase.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{useCase.description}</p>
                  <p className="text-sm text-violet-600 font-medium">Exemple : {useCase.example}</p>
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
            <h2 className="text-3xl font-bold mb-4">Les avantages de la photomosaïque</h2>
            <p className="text-lg text-gray-700">
              Bien plus qu'une simple animation, un véritable catalyseur d'engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Users className="w-10 h-10 text-violet-600" />,
                title: "Engagement collectif",
                description: "Engagez tous vos invités dans une expérience créative commune qui renforce le sentiment d'appartenance."
              },
              {
                icon: <Clock className="w-10 h-10 text-violet-600" />,
                title: "Animation durable",
                description: "Une activité qui capte l'attention tout au long de l'événement et évolue en permanence."
              },
              {
                icon: <Heart className="w-10 h-10 text-violet-600" />,
                title: "Souvenir unique",
                description: "Créez un souvenir tangible et personnalisé qui pourra être affiché après l'événement."
              },
              {
                icon: <Camera className="w-10 h-10 text-violet-600" />,
                title: "Compatibilité totale",
                description: "S'intègre parfaitement avec nos photobooths IA ou l'expérience smartphone."
              },
              {
                icon: <BarChart className="w-10 h-10 text-violet-600" />,
                title: "Mesure d'engagement",
                description: "Suivez la participation des invités et leur niveau d'engagement via notre interface analytics."
              },
              {
                icon: <Grid className="w-10 h-10 text-violet-600" />,
                title: "Personnalisation complète",
                description: "Adaptez l'image maîtresse, les couleurs et l'aspect visuel à votre marque ou thème d'événement."
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à créer une œuvre d'art collaborative ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Transformez votre prochain événement avec une photomosaïque interactive qui implique tous vos participants.
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
                className="inline-block px-8 py-3 rounded-full border-2 border-white text-white font-semibold shadow-lg hover:bg-white/10 transition-colors text-lg"
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
