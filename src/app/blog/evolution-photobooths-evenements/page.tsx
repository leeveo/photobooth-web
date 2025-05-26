import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight } from 'lucide-react';

export default function BlogArticle() {
  // Article metadata
  const article = {
    title: "L'évolution des photobooths : de la cabine traditionnelle à l'expérience événementielle moderne",
    excerpt: "Découvrez comment les photobooths se sont transformés au fil des années pour devenir un incontournable de tout événement réussi.",
    author: "Sophie Martin",
    date: "12 Mai 2023",
    readTime: "8 min",
    image: "/blog/photobooth-evolution.jpg",
    category: "Tendances"
  };

  // Related articles
  const relatedArticles = [
    {
      slug: "photomosaique-art-collaboratif",
      title: "La photomosaïque : quand vos invités créent une œuvre d'art collaborative",
      excerpt: "Comment la technologie de photomosaïque transforme des centaines de photos individuelles en une création visuelle spectaculaire lors de vos événements.",
      image: "/blog/photomosaic-art.jpg",
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
                alt="L'évolution des photobooths"
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
                <p className="text-sm text-gray-600">Experte en technologies événementielles</p>
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
            <p className="lead text-xl text-gray-700">
              Des cabines photo vintages des centres commerciaux aux expériences immersives alimentées par l'intelligence artificielle, le photobooth a connu une évolution spectaculaire. Retour sur cette transformation qui a fait de cet outil un élément incontournable des événements modernes.
            </p>
            
            <h2>Les origines : la cabine photo traditionnelle</h2>
            <p>
              Tout a commencé en 1925 avec l'invention de la "Photomaton" par Anatol Josepho. Cette cabine fermée permettait aux utilisateurs de recevoir, pour quelques pièces, une bande de photos d'identité en noir et blanc. Pendant des décennies, ces cabines sont restées relativement inchangées : un espace confiné, un siège ajustable, un rideau pour l'intimité et un flash puissant.
            </p>
            <p>
              Ces photobooths traditionnels étaient principalement utilitaires, conçus pour produire des photos d'identité standardisées. On les trouvait dans les gares, centres commerciaux et autres lieux publics. Leur attrait résidait dans leur simplicité et leur accessibilité, mais également dans l'excitation d'attendre quelques minutes pour voir apparaître ces petites photos imprimées.
            </p>
            
            <div className="my-8 bg-gray-50 p-6 rounded-lg border-l-4 border-violet-500">
              <p className="italic text-gray-700 mb-0">
                "La magie du photobooth traditionnel résidait dans son imprévisibilité. Vous ne saviez jamais exactement comment les photos allaient sortir, et cette attente faisait partie intégrante de l'expérience."
              </p>
            </div>
            
            <h2>La révolution numérique des années 2000</h2>
            <p>
              Avec l'avènement de la photographie numérique dans les années 2000, les photobooths ont connu leur première grande transformation. Les cabines fermées ont progressivement laissé place à des structures plus ouvertes, équipées d'appareils photo numériques et d'imprimantes rapides.
            </p>
            <p>
              Cette évolution a marqué un tournant fondamental : le photobooth n'était plus seulement un outil utilitaire mais devenait un divertissement. Les mariages et événements d'entreprise commençaient à intégrer ces nouvelles versions, offrant aux invités la possibilité de conserver un souvenir tangible de l'événement.
            </p>
            <p>
              Les principales innovations de cette période comprenaient :
            </p>
            <ul>
              <li>La visualisation instantanée des photos sur un écran</li>
              <li>La possibilité de prendre plusieurs clichés en séquence</li>
              <li>L'impression de plusieurs copies pour les groupes</li>
              <li>L'ajout de logos et textes personnalisés sur les impressions</li>
            </ul>
            
            <h2>L'ère des réseaux sociaux : le photobooth connecté</h2>
            <p>
              Vers 2010, avec l'explosion des réseaux sociaux comme Facebook et Instagram, le photobooth a connu sa deuxième grande mutation. La valeur de l'impression physique a été complétée, voire parfois supplantée, par le partage numérique.
            </p>
            <p>
              Les photobooths se sont équipés de fonctionnalités permettant l'envoi instantané des photos par email ou leur publication directe sur les réseaux sociaux. Cette évolution a considérablement augmenté la portée des photobooths, les transformant en véritables outils de marketing viral pour les marques et événements.
            </p>
            
            <h2>L'explosion créative : personnalisation et expériences immersives</h2>
            <p>
              À partir de 2015, le design et les fonctionnalités des photobooths se sont diversifiés de façon exponentielle. Les cabines fermées traditionnelles ont laissé place à une multitude de formats : miroirs magiques, bornes ouvertes, installations artistiques, et même des concepts entièrement dématérialisés.
            </p>
            <p>
              Cette période a vu naître des installations spectaculaires comme :
            </p>
            <ul>
              <li>Les murs à selfie géants</li>
              <li>Les photobooths avec fonds green screen permettant des compositions virtuelles</li>
              <li>Les cabines à slow motion et boomerang</li>
              <li>Les expériences à 360 degrés</li>
            </ul>
            <p>
              L'accent s'est déplacé de la simple capture d'image vers une expérience complète, immersive et partageant parfaitement le message de l'événement ou la marque. Le photobooth n'était plus un simple "extra" mais devenait central dans la stratégie d'engagement des participants.
            </p>
            
            <h2>L'ère actuelle : IA et expériences sans contact</h2>
            <p>
              La pandémie de COVID-19 a accéléré une nouvelle évolution vers les solutions sans contact, tandis que l'intelligence artificielle ouvre aujourd'hui des possibilités créatives sans précédent.
            </p>
            <p>
              Les photobooths modernes intègrent désormais des fonctionnalités révolutionnaires :
            </p>
            <ul>
              <li>Détection automatique de pose et composition intelligente</li>
              <li>Transformation artistique des photos via l'IA</li>
              <li>Création de contenus personnalisés basés sur les préférences des utilisateurs</li>
              <li>Intégration avec des expériences de réalité augmentée</li>
              <li>Solutions sans application via QR code permettant d'utiliser son propre smartphone</li>
            </ul>
            
            <h2>L'avenir : une intégration toujours plus poussée</h2>
            <p>
              L'avenir des photobooths s'oriente vers une intégration encore plus profonde avec d'autres technologies événementielles. La tendance est à l'expérience unifiée, où le photobooth n'est plus un élément isolé mais fait partie d'un écosystème digital complet.
            </p>
            <p>
              Les développements les plus prometteurs incluent :
            </p>
            <ul>
              <li>L'intégration avec des murs LED interactifs</li>
              <li>La création de contenus génératifs uniques via l'IA</li>
              <li>Des expériences mixtes combinant photo, vidéo et réalité augmentée</li>
              <li>Des galeries collaboratives où les créations des invités forment des œuvres collectives</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>
              De simple machine utilitaire à véritable centre d'expérience événementielle, le photobooth a parcouru un chemin impressionnant. Son évolution reflète parfaitement les transformations technologiques et sociales de notre rapport à l'image et au partage de moments.
            </p>
            <p>
              Si sa fonction principale - capturer et conserver des souvenirs - est restée la même, c'est la richesse de l'expérience et son intégration dans une stratégie d'engagement global qui définissent le photobooth moderne. Loin de disparaître, cette technologie continue de se réinventer pour rester au cœur des événements mémorables.
            </p>
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
