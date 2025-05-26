import Image from 'next/image';
import Link from 'next/link';
import { Video, Star, Clock, Wand2, Share2, Users, Sparkles, Smartphone, MessageSquare, Database } from 'lucide-react';

export default function VideoBooth() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                VideoBooth IA
              </span>
              <span className="text-gray-800"> : l'expérience vidéo révolutionnaire</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Créez des vidéos générées par  IA qui impressionneront vos invités et transformeront votre événement en une expérience mémorable.
            </p>
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/videobooth/video-hero.jpg"
                alt="VideoBooth IA en action"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                    Nouveauté 2024
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
              <h2 className="text-3xl font-bold mb-6">Qu'est-ce que le VideoBooth IA ?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Le VideoBooth IA est notre dernière innovation en matière d'expérience événementielle. Il permet à vos invités de créer des vidéos courtes et personnalisées transformées instantanément par l'intelligence artificielle.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                En quelques secondes, notre technologie avancée convertit des clips vidéo ordinaires en créations cinématographiques époustouflantes basées sur n'importe quel style ou thème que vous choisissez.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["15 secondes maximum", "Traitement IA instantané", "Nombreux styles", "Partage immédiat"].map((feature, index) => (
                  <span key={index} className="flex items-center px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">
                    <Star className="w-4 h-4 mr-1" />
                    {feature}
                  </span>
                ))}
              </div>
              <Link href="/contact"    className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Réserver pour votre événement
              </Link>
            </div>
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border-8 border-white">
                <Image
                  src="/videobooth/video-preview.jpg"
                  alt="Exemple de vidéo générée"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-violet-600/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-violet-700/80 transition-colors">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center text-sm text-gray-500">
                Cliquez pour voir un exemple de VideoBooth IA en action
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Comment ça marche */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Comment fonctionne VideoBooth IA</h2>
            <p className="text-lg text-gray-700">
              Une expérience aussi simple que magique, en seulement quelques étapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Video className="w-12 h-12 text-violet-600" />,
                title: "Enregistrez",
                description: "Vos invités enregistrent un clip vidéo court de 5 à 15 secondes avec notre interface intuitive."
              },
              {
                icon: <Wand2 className="w-12 h-12 text-violet-600" />,
                title: "Transformez",
                description: "Notre IA analyse la vidéo et la transforme instantanément selon le style choisi parmi notre bibliothèque."
              },
              {
                icon: <Clock className="w-12 h-12 text-violet-600" />,
                title: "Visualisez",
                description: "En quelques secondes, une création cinématographique unique apparaît, prête à être partagée."
              },
              {
                icon: <Share2 className="w-12 h-12 text-violet-600" />,
                title: "Partagez",
                description: "La vidéo peut être immédiatement envoyée par email, SMS ou publiée sur les réseaux sociaux."
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

          <div className="mt-16 text-center">
            <Link href="/demo" className="btn-secondary">
              Demander une démonstration
            </Link>
          </div>
        </div>
      </section>

      {/* Section Styles vidéo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Des styles vidéo pour tous les événements</h2>
            <p className="text-lg text-gray-700">
              Notre bibliothèque contient plus de 50 styles différents que nous pouvons personnaliser selon votre thème.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cinématique",
                description: "Transformez vos invités en stars de cinéma avec des effets dignes des grands films hollywoodiens.",
                image: "/videobooth/style-cinema.jpg",
                tag: "Populaire"
              },
              {
                title: "Animation",
                description: "Convertissez les vidéos en séquences animées dans différents styles (anime, cartoon, 3D).",
                image: "/videobooth/style-animation.jpg",
                tag: ""
              },
              {
                title: "Rétro",
                description: "Voyagez dans le temps avec des filtres vintage des années 70, 80 ou 90.",
                image: "/videobooth/style-retro.jpg",
                tag: ""
              },
              {
                title: "Futuriste",
                description: "Plongez dans le monde de demain avec des effets néon et cyberpunk saisissants.",
                image: "/videobooth/style-futuriste.jpg",
                tag: "Tendance"
              },
              {
                title: "Fantaisie",
                description: "Créez des mondes imaginaires où vos invités deviennent des héros de contes de fées.",
                image: "/videobooth/style-fantaisie.jpg",
                tag: ""
              },
              {
                title: "Personnalisé",
                description: "Nous créons des styles uniques adaptés spécifiquement à votre marque ou à votre événement.",
                image: "/videobooth/style-personnalise.jpg",
                tag: "Exclusif"
              }
            ].map((style, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={style.image}
                    alt={`Style vidéo ${style.title}`}
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
            <h2 className="text-3xl font-bold mb-4">Les avantages du VideoBooth IA</h2>
            <p className="text-lg text-gray-700">
              Pourquoi choisir notre solution pour votre prochain événement ?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Sparkles className="w-10 h-10 text-violet-600" />,
                title: "L'effet wow garanti",
                description: "Les créations vidéo IA impressionnent systématiquement les invités et génèrent un effet mémorable durable."
              },
              {
                icon: <Clock className="w-10 h-10 text-violet-600" />,
                title: "Rapidité inégalée",
                description: "Notre technologie de pointe permet une transformation vidéo en quelques secondes seulement."
              },
              {
                icon: <Users className="w-10 h-10 text-violet-600" />,
                title: "Expérience inclusive",
                description: "Accessible à tous, sans compétence technique requise - idéal pour tous les types d'événements."
              },
              {
                icon: <Smartphone className="w-10 h-10 text-violet-600" />,
                title: "Compatible multi-appareils",
                description: "Fonctionne sur nos bornes dédiées ou via l'appareil mobile de vos invités."
              },
              {
                icon: <Database className="w-10 h-10 text-violet-600" />,
                title: "Analytique complète",
                description: "Suivez les statistiques d'utilisation et d'engagement en temps réel via notre tableau de bord."
              },
              {
                icon: <MessageSquare className="w-10 h-10 text-violet-600" />,
                title: "Support dédié",
                description: "Notre équipe vous accompagne avant, pendant et après votre événement pour une expérience optimale."
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

      {/* Section Témoignages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Ils ont adopté VideoBooth IA</h2>
            <p className="text-lg text-gray-700">
              Découvrez l'impact de notre solution sur leurs événements.
            </p>
          </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          quote:
            "L'attraction vedette de notre lancement de produit. Les vidéos générées par IA ont été partagées massivement sur les réseaux, générant un engagement organique incroyable.",
          author: "Claire Dubois",
          role: "Directrice Marketing, TechVision",
          image: "/videobooth/testimonial-1.jpg",
        },
        {
          quote:
            "Nos invités ont fait la queue pendant des heures pour essayer le VideoBooth IA ! La qualité des créations a dépassé toutes nos attentes et créé un véritable buzz.",
          author: "Julien Martin",
          role: "Organisateur, Festival NextWave",
          image: "/videobooth/testimonial-2.jpg",
        },
        {
          quote:
            "En tant que wedding planner, je cherche toujours des innovations pour mes clients. Le VideoBooth IA a transformé un mariage classique en expérience immersive inoubliable.",
          author: "Sophie Leclerc",
          role: "Wedding Planner, Éternels Moments",
          image: "/videobooth/testimonial-3.jpg",
        },
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
              Tout ce que vous devez savoir sur notre solution VideoBooth IA.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Quelle est la durée maximale des vidéos ?",
                answer: "Les vidéos peuvent durer jusqu'à 15 secondes. Cette durée optimale permet un traitement rapide par notre IA tout en offrant suffisamment de temps pour créer un contenu engageant."
              },
              {
                question: "Combien de temps faut-il pour traiter une vidéo ?",
                answer: "Notre IA génère les vidéos transformées en 10 à 30 secondes selon la complexité du style choisi et la durée de la vidéo originale."
              },
              {
                question: "Peut-on personnaliser les styles vidéo pour notre marque ?",
                answer: "Absolument ! Nous pouvons créer des styles vidéo entièrement personnalisés qui reflètent l'identité visuelle de votre marque ou le thème de votre événement."
              },
              {
                question: "Comment les invités reçoivent-ils leurs vidéos ?",
                answer: "Les vidéos peuvent être partagées instantanément par email, SMS, QR code, ou directement sur les réseaux sociaux. Toutes les créations sont également accessibles via une galerie en ligne dédiée à votre événement."
              },
              {
                question: "La solution fonctionne-t-elle sans connexion internet ?",
                answer: "Nous recommandons une connexion internet stable pour des performances optimales. Cependant, nous proposons également un mode hors-ligne avec des fonctionnalités limitées pour les lieux où la connectivité est restreinte."
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à révolutionner votre événement avec VideoBooth IA ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Offrez à vos invités une expérience vidéo unique qu'ils n'oublieront jamais.
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
