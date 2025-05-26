import Image from 'next/image';
import Link from 'next/link';
import { Camera, Star, Clock, Wand2, Share2, Users, Sparkles, Smartphone, MessageSquare, Database, Grid } from 'lucide-react';

export default function PhotoBoothAI() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Photobooth IA</span> : la plateforme SaaS pour des souvenirs uniques
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Créez, personnalisez et partagez des photos générées par intelligence artificielle grâce à notre plateforme SaaS innovante. Plusieurs modèles, styles et options, tout en ligne !
            </p>
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/photobooth-ai/hero.jpg"
                alt="Photobooth IA en action"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                    Plateforme SaaS
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
            <div>
              <h2 className="text-3xl font-bold mb-6">Une plateforme SaaS tout-en-un pour vos photobooths IA</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre solution Photobooth IA vous permet de créer des expériences photo inoubliables, entièrement personnalisables et accessibles en ligne. Choisissez parmi de nombreux modèles IA, appliquez des styles artistiques, personnalisez l'interface et imprimez ou partagez instantanément vos créations.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Plus besoin d'installation complexe : tout se fait sur notre plateforme SaaS, accessible partout, à tout moment.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "Choix de modèles IA variés",
                  "Personnalisation en ligne",
                  "Impression instantanée",
                  "Partage sur les réseaux sociaux"
                ].map((feature, index) => (
                  <span key={index} className="flex items-center px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">
                    <Star className="w-4 h-4 mr-1" />
                    {feature}
                  </span>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">
                Essayez la plateforme
              </Link>
            </div>
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border-8 border-white">
                <Image
                  src="/photobooth-ai/preview.jpg"
                  alt="Exemple de photobooth IA"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-violet-600/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-violet-700/80 transition-colors">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center text-sm text-gray-500">
                Découvrez un exemple de création Photobooth IA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Comment ça marche */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Comment fonctionne la plateforme Photobooth IA</h2>
            <p className="text-lg text-gray-700">
              Une expérience fluide, créative et 100% en ligne, en quelques étapes simples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                icon: <Grid className="w-12 h-12 text-violet-600" />,
                title: "Choisissez un modèle IA",
                description: "Sélectionnez parmi une large gamme de modèles IA pour transformer vos photos."
              },
              {
                icon: <Wand2 className="w-12 h-12 text-violet-600" />,
                title: "Personnalisez le style",
                description: "Appliquez des styles artistiques, des filtres et des cadres selon votre événement."
              },
              {
                icon: <Camera className="w-12 h-12 text-violet-600" />,
                title: "Prenez la photo",
                description: "Utilisez la plateforme en ligne ou nos bornes connectées pour capturer l’instant."
              },
              {
                icon: <Smartphone className="w-12 h-12 text-violet-600" />,
                title: "Partagez & imprimez",
                description: "Imprimez vos photos ou partagez-les instantanément sur les réseaux sociaux."
              },
              {
                icon: <Sparkles className="w-12 h-12 text-violet-600" />,
                title: "Profitez de l’innovation",
                description: "Bénéficiez d’une expérience unique, moderne et mémorable pour tous vos invités."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/demo" className="btn-secondary">
              Demander une démonstration
            </Link>
          </div>
        </div>
      </section>

      {/* Section Styles photo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Des styles photo pour tous les goûts</h2>
            <p className="text-lg text-gray-700">
              Explorez une bibliothèque de styles IA et de modèles personnalisables pour chaque événement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Artistique",
                description: "Transformez vos photos en véritables œuvres d’art grâce à des styles IA variés (aquarelle, pop art, cartoon, etc).",
                image: "/photobooth-ai/style-artistique.jpg",
                tag: "Populaire"
              },
              {
                title: "Corporate",
                description: "Personnalisez vos photos avec le branding de votre entreprise ou événement professionnel.",
                image: "/photobooth-ai/style-corporate.jpg",
                tag: ""
              },
              {
                title: "Fête & Mariage",
                description: "Des cadres festifs et élégants pour sublimer les souvenirs de vos plus beaux événements.",
                image: "/photobooth-ai/style-fete.jpg",
                tag: ""
              },
              {
                title: "Futuriste",
                description: "Effets néon, cyberpunk et innovations visuelles pour des photos résolument modernes.",
                image: "/photobooth-ai/style-futuriste.jpg",
                tag: "Nouveau"
              },
              {
                title: "Vintage",
                description: "Filtres rétro et ambiance nostalgique pour un effet intemporel.",
                image: "/photobooth-ai/style-vintage.jpg",
                tag: ""
              },
              {
                title: "Sur-mesure",
                description: "Nous créons des styles et modèles IA personnalisés selon vos besoins et votre identité.",
                image: "/photobooth-ai/style-surmesure.jpg",
                tag: "Exclusif"
              }
            ].map((style, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={style.image}
                    alt={`Style photo ${style.title}`}
                    fill
                    className="object-cover"
                  />
                  {style.tag && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-violet-600 text-white text-xs font-medium rounded-full">
                      {style.tag}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{style.title}</h3>
                  <p className="text-gray-600">{style.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Pourquoi choisir notre Photobooth IA SaaS ?</h2>
            <p className="text-lg text-gray-700">
              Une solution moderne, flexible et accessible pour tous vos événements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Sparkles className="w-10 h-10 text-violet-600" />,
                title: "100% en ligne",
                description: "Accédez à toutes les fonctionnalités depuis n’importe quel appareil, sans installation."
              },
              {
                icon: <Wand2 className="w-10 h-10 text-violet-600" />,
                title: "Personnalisation poussée",
                description: "Adaptez chaque détail à votre image : modèles, styles, branding, interface."
              },
              {
                icon: <Users className="w-10 h-10 text-violet-600" />,
                title: "Expérience collaborative",
                description: "Invitez vos participants à contribuer à une galerie partagée et interactive."
              },
              {
                icon: <Smartphone className="w-10 h-10 text-violet-600" />,
                title: "Partage instantané",
                description: "Diffusez vos photos sur les réseaux sociaux ou imprimez-les en direct."
              },
              {
                icon: <Database className="w-10 h-10 text-violet-600" />,
                title: "Données & analytics",
                description: "Suivez l’engagement et les statistiques de vos événements en temps réel."
              },
              {
                icon: <MessageSquare className="w-10 h-10 text-violet-600" />,
                title: "Support expert",
                description: "Notre équipe vous accompagne pour garantir le succès de votre expérience."
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

      {/* Section CTA */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Lancez votre Photobooth IA en quelques clics</h2>
            <p className="text-xl opacity-90 mb-8">
              Offrez à vos invités une expérience photo innovante, personnalisée et mémorable grâce à notre plateforme SaaS.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-violet-700 hover:bg-gray-100 transition-colors btn-primary">
                Créer mon photobooth IA
              </Link>
              <Link href="/demo" className="bg-transparent border-2 border-white hover:bg-white/10 transition-colors btn-primary">
                Voir une démonstration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
