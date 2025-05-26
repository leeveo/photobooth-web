import Image from 'next/image';
import Link from 'next/link';
import { QrCode, Smartphone, Zap, Share2, Globe, Shield, Users, Layout } from 'lucide-react';

export default function QrPhotobooth() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                QR Photobooth
              </span>
              <span className="text-gray-800"> : L'expérience sans contact</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Une solution moderne et hygiénique qui transforme les smartphones de vos invités en photobooths IA personnels.
            </p>
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/qr-photobooth/qr-hero.jpg"
                alt="QR Photobooth en utilisation"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                    Sans installation
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
              <h2 className="text-3xl font-bold mb-6">Qu'est-ce que le QR Photobooth ?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Le QR Photobooth est une solution innovante qui permet à vos invités de profiter d'une expérience photobooth complète directement depuis leur smartphone, sans télécharger d'application.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Un simple scan de QR code suffit pour accéder instantanément à notre interface web où ils pourront prendre des photos, appliquer des filtres IA personnalisés et partager leurs créations - le tout sans manipulation d'équipement partagé.
              </p>
              <div className="bg-violet-50 border border-violet-100 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <Shield className="w-5 h-5 text-violet-600 mr-2" />
                  Solution idéale post-COVID
                </h3>
                <p className="text-gray-700">
                  Notre solution sans contact est parfaitement adaptée aux préoccupations sanitaires actuelles, offrant une alternative hygiénique aux écrans tactiles partagés tout en maintenant l'expérience sociale d'un photobooth.
                </p>
              </div>
              <Link href="/contact"     className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
             >
                Demander un devis
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-[500px]">
                <div className="absolute top-0 left-0 right-0 mx-auto w-64 h-[500px]">
                  <Image
                    src="/qr-photobooth/phone-frame.png"
                    alt="Smartphone frame"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-[60px] left-[22px] w-[220px] h-[380px] overflow-hidden rounded-[18px]">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src="/qr-photobooth/interface-demo.mp4" type="video/mp4" />
                    Votre navigateur ne prend pas en charge la vidéo HTML5.
                  </video>
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
            <h2 className="text-3xl font-bold mb-4">Comment fonctionne le QR Photobooth ?</h2>
            <p className="text-lg text-gray-700">
              Une expérience utilisateur fluide en seulement quelques étapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <QrCode className="w-12 h-12 text-violet-600" />,
                title: "Scannez",
                description: "L'invité scanne le QR code affiché sur votre stand ou sur les tables de votre événement."
              },
              {
                icon: <Smartphone className="w-12 h-12 text-violet-600" />,
                title: "Accédez",
                description: "L'interface web s'ouvre immédiatement sans téléchargement d'application nécessaire."
              },
              {
                icon: <Zap className="w-12 h-12 text-violet-600" />,
                title: "Créez",
                description: "L'utilisateur prend des photos et applique des filtres IA personnalisés à votre événement."
              },
              {
                icon: <Share2 className="w-12 h-12 text-violet-600" />,
                title: "Partagez",
                description: "Les créations peuvent être téléchargées, partagées sur les réseaux sociaux ou ajoutées à la galerie."
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

      {/* Avantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Les avantages du QR Photobooth</h2>
            <p className="text-lg text-gray-700">
              Une solution moderne qui allie simplicité, hygiène et impact visuel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-violet-600" />,
                title: "Solution sans contact",
                description: "Évitez les écrans partagés et offrez une expérience hygiénique à vos invités."
              },
              {
                icon: <Zap className="w-12 h-12 text-violet-600" />,
                title: "Installation instantanée",
                description: "Aucun équipement lourd à installer - seuls des QR codes à placer stratégiquement."
              },
              {
                icon: <Users className="w-12 h-12 text-violet-600" />,
                title: "Capacité illimitée",
                description: "Pas de file d'attente, tous vos invités peuvent l'utiliser simultanément."
              },
              {
                icon: <Globe className="w-12 h-12 text-violet-600" />,
                title: "Accessible partout",
                description: "Fonctionne sur tous les smartphones modernes sans discrimination de système."
              },
              {
                icon: <Layout className="w-12 h-12 text-violet-600" />,
                title: "Personnalisation complète",
                description: "Interface aux couleurs de votre événement avec filtres IA sur-mesure."
              },
              {
                icon: <Share2 className="w-12 h-12 text-violet-600" />,
                title: "Partage instantané",
                description: "Les invités partagent directement depuis leur appareil, maximisant la visibilité."
              }
            ].map((advantage, index) => (
              <div key={index} className="card bg-white">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="rounded-lg p-3 bg-violet-100 mr-4">
                      {advantage.icon}
                    </div>
                    <h3 className="text-xl font-bold">{advantage.title}</h3>
                  </div>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'usage QR Photobooth */}
   {/* Cas d'usage QR Photobooth */}
<section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl font-bold mb-4">Cas d'usage du QR Photobooth</h2>
      <p className="text-lg text-gray-700">
        Découvrez comment le QR Photobooth s'adapte à tous vos événements et contextes pour maximiser l'engagement et la viralité.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Mariages & fêtes privées",
          description: "Offrez à vos invités la possibilité de capturer des souvenirs uniques et de les partager instantanément, sans file d'attente ni manipulation d'équipement.",
          image: "/qr-photobooth/use-wedding.jpg"
        },
        {
          title: "Événements d'entreprise",
          description: "Renforcez la cohésion d'équipe et la visibilité de votre marque lors de séminaires, team building ou soirées corporate grâce à une expérience photo moderne et personnalisée.",
          image: "/qr-photobooth/use-corporate.jpg"
        },
        {
          title: "Salons & expositions",
          description: "Générez du trafic sur votre stand et collectez des leads qualifiés en proposant une animation photo innovante et virale.",
          image: "/qr-photobooth/use-expo.jpg"
        },
        {
          title: "Festivals & concerts",
          description: "Permettez à chaque participant de repartir avec un souvenir personnalisé et partageable sur les réseaux sociaux, amplifiant la portée de votre événement.",
          image: "/qr-photobooth/use-festival.jpg"
        },
        {
          title: "Lancements de produit",
          description: "Créez le buzz autour de votre nouveauté en invitant les participants à générer et partager des photos brandées à votre image.",
          image: "/qr-photobooth/use-product.jpg"
        },
        {
          title: "Événements caritatifs",
          description: "Fédérez votre communauté autour d'une cause en facilitant la création et le partage de contenus solidaires et engageants.",
          image: "/qr-photobooth/use-charity.jpg"
        }
      ].map((useCase, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col h-full">
          <div className="relative h-48 w-full">
            <Image
              src={useCase.image}
              alt={useCase.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4">
                <h3 className="text-white font-bold text-xl">{useCase.title}</h3>
              </div>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <p className="text-gray-700 mb-4">{useCase.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à moderniser l'expérience photo de votre événement ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Offrez à vos invités une solution photo contemporaine, hygiénique et sans contrainte.
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
