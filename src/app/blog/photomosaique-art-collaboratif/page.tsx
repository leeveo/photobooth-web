import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight } from 'lucide-react';

export default function BlogArticle() {
  // Article metadata
  const article = {
    title: "La photomosaïque : quand vos invités créent une œuvre d'art collaborative",
    excerpt: "Comment la technologie de photomosaïque transforme des centaines de photos individuelles en une création visuelle spectaculaire lors de vos événements.",
    author: "Thomas Beaumont",
    date: "24 Juin 2023",
    readTime: "6 min",
    image: "/blog/photomosaic-art.jpg",
    category: "Innovation"
  };

  // Related articles
  const relatedArticles = [
    {
      slug: "evolution-photobooths-evenements",
      title: "L'évolution des photobooths : de la cabine traditionnelle à l'expérience événementielle moderne",
      excerpt: "Découvrez comment les photobooths se sont transformés au fil des années pour devenir un incontournable de tout événement réussi.",
      image: "/blog/photobooth-evolution.jpg",
    },
    {
      slug: "ia-revolution-photobooth",
      title: "Comment l'IA révolutionne l'expérience photobooth pour vos événements",
      excerpt: "L'intelligence artificielle transforme radicalement les photobooths en offrant des expériences personnalisées et des créations uniques en temps réel.",
      image: "/blog/ai-photobooth.jpg",
    }
  ];

  return (
    <>
      {/* Article Hero */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-violet-600 mb-6 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour aux articles
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {article.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <div className="flex items-center mr-6">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{article.readTime} de lecture</span>
              </div>
            </div>
            
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl h-[400px] md:h-[500px]">
              <Image 
                src={article.image}
                alt="Une photomosaïque collaborative lors d'un événement"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                  {article.category}
                </span>
              </div>
            </div>
            
            <div className="flex items-center mt-8">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-violet-200 flex items-center justify-center">
                <span className="font-bold text-violet-700">{article.author.charAt(0)}</span>
              </div>
              <div>
                <p className="font-bold">{article.author}</p>
                <p className="text-sm text-gray-600">Spécialiste en technologies événementielles</p>
              </div>
              <div className="ml-auto flex space-x-2">
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Share2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-gray-700 mb-8 font-medium border-l-4 border-violet-500 pl-4 italic">
              Dans le monde des expériences événementielles, la photomosaïque émerge comme une technologie captivante qui transforme des centaines de photos individuelles en une œuvre d'art collaborative spectaculaire. Découvrez comment cette innovation visuelle crée des souvenirs mémorables et renforce le sentiment de communauté.
            </p>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-violet-500">Qu'est-ce qu'une photomosaïque ?</h2>
            <p>
              Une photomosaïque est une image principale (souvent un logo, un portrait ou un message) composée de centaines, voire de milliers de photos plus petites. Vue de loin, on perçoit clairement l'image maîtresse, mais en s'approchant, on découvre qu'elle est constituée d'innombrables photos individuelles, chacune racontant sa propre histoire.
            </p>
            <p>
              Dans le contexte événementiel, cette technique prend une dimension particulière : les photos qui composent la mosaïque sont prises en temps réel par les participants, créant ainsi une œuvre d'art véritablement collaborative et vivante qui évolue tout au long de l'événement.
            </p>
            
            <div className="my-10 bg-gradient-to-r from-violet-100/50 to-indigo-100/50 p-8 rounded-2xl border-l-4 border-violet-500 shadow-sm">
              <p className="italic text-gray-700 mb-0 text-xl font-serif">
                "La photomosaïque représente parfaitement ce que nous recherchons dans l'événementiel moderne : une expérience participative qui génère à la fois engagement individuel et sentiment d'appartenance collectif."
              </p>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-violet-500">Comment fonctionne la technologie de photomosaïque ?</h2>
            <p>
              Le processus de création d'une photomosaïque événementielle comprend plusieurs étapes essentielles, toutes orchestrées par un logiciel spécialisé :
            </p>
            <ul className="space-y-4 my-8 list-none">
              {[
                "Sélection d'une image maîtresse qui sera reproduite à partir des photos des participants",
                "Mise en place d'un système de collecte de photos (photobooths, smartphones, hashtags sociaux)",
                "Analyse algorithmique de chaque photo pour déterminer sa tonalité dominante",
                "Placement stratégique des photos dans la mosaïque pour reproduire fidèlement l'image maîtresse",
                "Affichage en temps réel de l'évolution de la mosaïque sur des écrans pendant l'événement"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 flex items-center justify-center text-white mr-4">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 pt-2">{item}</span>
                </li>
              ))}
            </ul>
            
            <p>
              Les algorithmes modernes de photomosaïque sont devenus extrêmement sophistiqués, permettant non seulement de placer les photos selon leur couleur dominante, mais aussi d'ajuster leur luminosité et leur contraste pour une reproduction plus fidèle de l'image maîtresse, tout en préservant la qualité et la reconnaissabilité de chaque photo individuelle.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold mb-3 text-violet-700 flex items-center">
                  <span className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center mr-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Photomosaïque statique
                </h3>
                <p className="text-gray-600">Créée à partir d'une collection existante de photos, parfaite pour les rétrospectives ou les hommages.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold mb-3 text-indigo-700 flex items-center">
                  <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Photomosaïque dynamique
                </h3>
                <p className="text-gray-600">Évolue en temps réel pendant l'événement, créant une expérience interactive et engageante pour les participants.</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-violet-500">Les bénéfices de la photomosaïque pour votre événement</h2>
            <p>
              Au-delà de l'aspect visuel impressionnant, la photomosaïque offre de nombreux avantages qui en font un élément de plus en plus recherché dans l'événementiel moderne :
            </p>
            
            <div className="relative my-12 p-6 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl text-white overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Impact sur l'engagement</h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl font-bold">+70%</div>
                    <div className="text-sm opacity-80">participation</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl font-bold">3.5x</div>
                    <div className="text-sm opacity-80">temps d'engagement</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl font-bold">92%</div>
                    <div className="text-sm opacity-80">satisfaction</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl font-bold">85%</div>
                    <div className="text-sm opacity-80">mémorabilité</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mt-20 -mr-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -mb-20 -ml-20"></div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-violet-500">Applications concrètes : quand utiliser une photomosaïque ?</h2>
            <p>
              La photomosaïque s'adapte à une multitude de contextes et formats d'événements. Voici quelques applications particulièrement efficaces :
            </p>
            <ul className="space-y-4 my-8">
              {[
                "Mariages : créer un portrait des mariés composé des photos des invités",
                "Événements corporate : former le logo de l'entreprise avec les portraits des employés",
                "Lancements de produit : révéler l'image du nouveau produit grâce aux photos des participants",
                "Conférences : illustrer le thème principal avec les contributions visuelles des participants"
              ].map((item, index) => (
                <li key={index} className="flex items-center bg-gray-50 rounded-lg p-3 shadow-sm border-l-4 border-violet-500 hover:bg-violet-50 transition-colors">
                  <svg className="w-6 h-6 text-violet-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-violet-500">Considérations techniques pour une photomosaïque réussie</h2>
            <p>
              Pour garantir la qualité et l'impact de votre photomosaïque, certains aspects techniques doivent être pris en compte :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              {[
                "Résolution suffisante des photos collectées pour maintenir la qualité visuelle",
                "Algorithme intelligent d'analyse et de placement pour un rendu optimal",
                "Système de modération pour filtrer les contenus inappropriés avant intégration",
                "Affichage de haute qualité pour permettre l'appréciation de l'œuvre finale",
                "Capacité de traitement rapide pour une expérience en temps réel fluide"
              ].map((feature, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-violet-500">Le futur de la photomosaïque : innovation et tendances</h2>
            <p>
              Comme toute technologie visuelle, la photomosaïque continue d'évoluer. Voici quelques tendances émergentes qui façonnent son avenir :
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl my-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    title: "Photomosaïque animée",
                    desc: "Intégration de clips vidéo courts au lieu de photos fixes"
                  },
                  {
                    title: "IA générative",
                    desc: "Amélioration des photos et adaptation intelligente par intelligence artificielle"
                  },
                  {
                    title: "Mosaïques 3D",
                    desc: "Création d'œuvres avec profondeur et perspective pour une immersion accrue"
                  },
                  {
                    title: "Réalité augmentée",
                    desc: "Visualisation interactive de la mosaïque via smartphone ou lunettes AR"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full border-2 border-violet-500 flex items-center justify-center text-violet-500 font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-violet-500">Conclusion</h2>
            <p>
              La photomosaïque représente bien plus qu'une simple attraction visuelle lors d'un événement. Elle incarne parfaitement l'esprit de notre époque : créer du collectif à partir de contributions individuelles, rassembler la diversité dans un ensemble cohérent, et transformer l'éphémère en souvenir durable.
            </p>
            <div className="my-8 p-6 bg-violet-50 rounded-xl border border-violet-100">
              <p className="text-lg font-medium text-violet-800">
                À l'heure où les expériences digitales et physiques convergent, la photomosaïque offre une passerelle unique entre l'individuel et le collectif, entre l'instantané et le permanent. Elle donne à chaque participant la satisfaction de contribuer à quelque chose de plus grand, tout en créant pour l'organisateur un souvenir puissant qui continuera de raconter l'histoire de l'événement bien après sa conclusion.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Articles */}
      <section className="py-12 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Articles similaires</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((relArticle, idx) => (
                <Link 
                  href={`/blog/${relArticle.slug}`} 
                  key={idx}
                  className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="md:w-1/3 relative h-48 md:h-auto">
                    <Image 
                      src={relArticle.image}
                      alt={relArticle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-violet-600 transition-colors">{relArticle.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relArticle.excerpt}</p>
                    <span className="text-violet-600 font-medium flex items-center text-sm">
                      Lire l'article
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors"
              >
                Voir tous les articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
