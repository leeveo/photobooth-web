import Image from 'next/image';
import Link from 'next/link';
import { Music, Mic, Star, Video, Share2, Users, Sparkles, Smartphone, Zap, Monitor } from 'lucide-react';

export default function KaraokeBox() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Karaoké Box
              </span>
              <span className="text-gray-800"> : Le studio de chant nouvelle génération</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Transformez votre événement en spectacle interactif avec notre karaoké professionnel augmenté par l'intelligence artificielle.
            </p>
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/karaoke-box/karaoke-hero.jpg"
                alt="Karaoké Box en action"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                    Exclusivité 2024
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
              <h2 className="text-3xl font-bold mb-6">Une expérience karaoké révolutionnaire</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre Karaoké Box est bien plus qu'un simple système de karaoké. C'est un véritable studio d'enregistrement portable doté d'une technologie IA qui optimise automatiquement votre voix et crée des clips vidéo professionnels en temps réel.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                L'intelligence artificielle analyse votre voix, ajuste la tonalité et applique des effets professionnels pour vous faire sonner comme une star, même si vous n'avez jamais chanté devant un public.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Catalogue de +20 000 titres", "Auto-tune IA intégré", "Effets vidéo temps réel", "Enregistrement HD"].map((feature, index) => (
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
                  src="/karaoke-box/karaoke-preview.jpg"
                  alt="Interface du Karaoké Box"
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
                Découvrez l'expérience Karaoké Box en vidéo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Fonctionnalités principales</h2>
            <p className="text-lg text-gray-700">
              Une technologie avancée pour une expérience karaoké inégalée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic className="w-12 h-12 text-violet-600" />,
                title: "Traitement vocal IA",
                description: "Notre intelligence artificielle analyse et ajuste votre voix en temps réel pour un son professionnel, quelles que soient vos capacités vocales."
              },
              {
                icon: <Music className="w-12 h-12 text-violet-600" />,
                title: "Vaste catalogue musical",
                description: "Plus de 20 000 titres disponibles, des classiques aux hits récents. Chaque mois, nous ajoutons les dernières nouveautés."
              },
              {
                icon: <Video className="w-12 h-12 text-violet-600" />,
                title: "Clip vidéo automatique",
                description: "Le système capture votre performance et la transforme instantanément en clip vidéo avec effets visuels professionnels."
              },
              {
                icon: <Users className="w-12 h-12 text-violet-600" />,
                title: "Mode duo et groupe",
                description: "Chantez en duo ou en groupe avec des microphones multiples et des arrangements vocaux optimisés pour chaque participant."
              },
              {
                icon: <Monitor className="w-12 h-12 text-violet-600" />,
                title: "Affichage haute définition",
                description: "Écran 4K avec paroles parfaitement synchronisées et animations dynamiques qui réagissent à votre performance."
              },
              {
                icon: <Share2 className="w-12 h-12 text-violet-600" />,
                title: "Partage instantané",
                description: "Envoyez vos performances directement sur vos réseaux sociaux ou par email avec des options de personnalisation."
              }
            ].map((feature, index) => (
              <div key={index} className="card bg-white p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-lg p-3 bg-violet-100 mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
   {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-700">
              Tout ce que vous devez savoir sur notre solution Karaoké Box.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
  {[
    {
      question: "Qu'est-ce que la formule SaaS Karaoké Box ?",
      answer:
        "Notre formule SaaS (Software as a Service) vous permet de personnaliser entièrement votre expérience Karaoké Box via notre plateforme en ligne. Vous pouvez adapter l'interface utilisateur aux couleurs de votre événement, sélectionner à l'avance une playlist personnalisée, ajouter votre logo, et même créer des catégories de chansons sur mesure pour votre public.",
    },
    {
      question: "Comment fonctionne la location du kit Karaoké Box ?",
      answer:
        "Notre kit Karaoké Box est conçu pour être facile à installer et à utiliser. Il comprend tout le nécessaire : écran, système audio, microphones professionnels, et notre logiciel IA préinstallé. L'ensemble se monte en moins de 15 minutes et peut être installé par vos soins ou par notre équipe technique selon votre formule.",
    },
    {
      question: "Peut-on personnaliser l'interface utilisateur ?",
      answer:
        "Absolument ! Via notre plateforme SaaS, vous pouvez personnaliser les couleurs, les animations, ajouter votre logo et même créer des thèmes spécifiques pour votre événement. L'interface s'adapte parfaitement aux mariages, événements d'entreprise, soirées privées ou festivals.",
    },
    {
      question: "Comment se fait la sélection des titres disponibles ?",
      answer:
        "Notre catalogue compte plus de 20 000 titres régulièrement mis à jour. Via notre plateforme, vous pouvez présélectionner les chansons disponibles pour votre événement, créer des catégories thématiques, ou définir une playlist prioritaire. Vous pouvez également laisser l'accès au catalogue complet à vos invités.",
    },
    {
      question: "L'amélioration vocale par IA fonctionne-t-elle réellement ?",
      answer:
        "Oui, notre technologie d'amélioration vocale utilise une IA avancée qui analyse votre voix en temps réel pour ajuster automatiquement la tonalité, appliquer des effets professionnels et équilibrer votre voix avec la musique. Le résultat est bluffant, même pour les personnes qui n'ont pas l'habitude de chanter.",
    },
    {
      question: "Faut-il une connexion internet pour utiliser le Karaoké Box ?",
      answer:
        "Pour les fonctionnalités de base, non. Notre système fonctionne hors ligne avec les titres préchargés. Cependant, pour accéder au catalogue complet, aux mises à jour en temps réel et aux fonctionnalités de partage instantané, une connexion internet est recommandée.",
    },
  ].map((faq, index) => (
              <div key={index} className="card bg-white shadow-md rounded-xl overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à faire chanter vos invités ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Offrez une expérience musicale inoubliable qui mettra tout le monde d'accord.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander un devis
              </Link>
              <Link
                href="/fonctionnalites"
                className="inline-block px-8 py-3 rounded-full border-2 border-white text-white font-semibold shadow-lg hover:bg-white/10 transition-colors text-lg"
              >
                Explorer nos fonctionnalités
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
