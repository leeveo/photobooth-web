import Image from 'next/image';
import Link from 'next/link';
import { Glasses, Monitor, Users, Zap, Share2, Sparkles, Camera, Smartphone, Palette, Globe } from 'lucide-react';

export default function RealiteAugmentee() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Réalité Augmentée
              </span>
              <span className="text-gray-800"> : Expériences immersives pour vos événements</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Fusionnez le monde réel et virtuel pour créer des expériences interactives époustouflantes qui marqueront vos invités.
            </p>
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/realite-augmentee/ar-hero.jpg"
                alt="Expérience en réalité augmentée"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                    Innovation 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Réinventez vos événements avec la réalité augmentée</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre solution de réalité augmentée transforme n'importe quel espace en une expérience interactive où des éléments virtuels se superposent parfaitement au monde réel.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Qu'il s'agisse de faire apparaître votre logo flottant dans l'air, de transformer une salle en environnement immersif ou de créer des animations interactives, notre technologie AR ouvre des possibilités infinies pour engager vos participants.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Sans application à télécharger", "Personnalisation complète", "Interactivité en temps réel", "Compatibilité multi-appareils"].map((feature, index) => (
                  <span key={index} className="flex items-center px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">
                    <Zap className="w-4 h-4 mr-1" />
                    {feature}
                  </span>
                ))}
              </div>
              <Link href="/contact" className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg">
                Demander une démonstration
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="rounded-full overflow-hidden border-8 border-white shadow-xl" style={{width: '100%', height: '100%'}}>
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src="/realite-augmentee/ar-demo.mov" type="video/mp4" />
                    Votre navigateur ne prend pas en charge la vidéo HTML5.
                  </video>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <Glasses className="w-12 h-12 text-violet-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'expériences */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos expériences en réalité augmentée</h2>
            <p className="text-lg text-gray-700">
              Des solutions interactives pour tous types d'événements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Photobooth AR",
                description: "Superposez des éléments virtuels sur vos photos - animaux fantastiques, accessoires 3D, effets spéciaux et bien plus encore.",
                image: "/realite-augmentee/ar-photobooth.jpg"
              },
              {
                title: "Miroir magique interactif",
                description: "Un miroir qui transforme votre reflet en ajoutant des éléments virtuels interactifs qui réagissent à vos mouvements.",
                image: "/realite-augmentee/ar-mirror.jpg"
              },
              {
                title: "Activation de marque AR",
                description: "Faites prendre vie à votre logo, produit ou mascotte dans l'espace réel pour un impact marketing maximal.",
                image: "/realite-augmentee/ar-brand.jpg"
              },
              {
                title: "Jeu interactif AR",
                description: "Créez des expériences ludiques où vos invités interagissent avec des éléments virtuels dans l'espace réel.",
                image: "/realite-augmentee/ar-game.jpg"
              },
              {
                title: "Décoration AR",
                description: "Transformez instantanément n'importe quel espace avec des décorations virtuelles spectaculaires et dynamiques.",
                image: "/realite-augmentee/ar-decor.jpg"
              },
              {
                title: "Présentation produit AR",
                description: "Présentez vos produits en 3D avec des animations interactives permettant d'explorer toutes leurs caractéristiques.",
                image: "/realite-augmentee/ar-product.jpg"
              }
            ].map((experience, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                  <p className="text-gray-600">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Pourquoi choisir notre solution AR</h2>
            <p className="text-lg text-gray-700">
              Une technologie de pointe accessible qui transforme vos événements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Smartphone className="w-10 h-10 text-violet-600" />,
                title: "Sans application",
                description: "Notre technologie fonctionne directement depuis un navigateur web, sans nécessiter de téléchargement d'application."
              },
              {
                icon: <Palette className="w-10 h-10 text-violet-600" />,
                title: "Personnalisation complète",
                description: "Chaque expérience est entièrement personnalisable aux couleurs et à l'identité de votre marque ou événement."
              },
              {
                icon: <Users className="w-10 h-10 text-violet-600" />,
                title: "Engagement maximal",
                description: "Les expériences AR génèrent en moyenne 2x plus d'engagement que les activations traditionnelles."
              },
              {
                icon: <Monitor className="w-10 h-10 text-violet-600" />,
                title: "Multi-supports",
                description: "Compatible avec smartphones, tablettes, écrans interactifs et projection selon vos besoins."
              },
              {
                icon: <Sparkles className="w-10 h-10 text-violet-600" />,
                title: "Facteur wow garanti",
                description: "Effet de surprise assuré qui laissera une impression durable à vos invités et participants."
              },
              {
                icon: <Globe className="w-10 h-10 text-violet-600" />,
                title: "Expérience universelle",
                description: "Accessible à tous les âges et profils, créant un moment de partage universel et mémorable."
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à ajouter une dimension augmentée à votre événement ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Créez des moments magiques et mémorables grâce à la réalité augmentée.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Commander votre kit
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
    </>
  );
}
