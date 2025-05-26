import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight } from 'lucide-react';

export default function BlogArticle() {
  // Article metadata
  const article = {
    title: "10 conseils pour réussir l'installation de votre photobooth lors d'un événement",
    excerpt: "Guide pratique pour optimiser l'emplacement, l'éclairage et l'expérience utilisateur de votre photobooth lors de votre prochain événement.",
    author: "Marc Dupont",
    date: "15 Août 2023",
    readTime: "7 min",
    image: "/blog/photobooth-setup.jpg",
    category: "Conseils"
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
      slug: "retour-investissement-photobooth",
      title: "Le ROI des photobooths pour les événements corporate : étude de cas",
      excerpt: "Analyse détaillée de l'impact commercial et du retour sur investissement des solutions photobooth lors d'événements professionnels.",
      image: "/blog/corporate-roi.jpg",
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
                alt="Installation de photobooth lors d'un événement"
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
                <p className="text-sm text-gray-600">Expert en expérience événementielle</p>
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
            <p className="lead text-xl text-gray-700 mb-6">
              L'installation stratégique d'un photobooth peut faire toute la différence entre une attraction événementielle médiocre et un véritable point fort qui génère engagement et souvenirs mémorables. Voici dix conseils essentiels pour optimiser l'emplacement, la configuration et l'expérience de votre photobooth lors de votre prochain événement.
            </p>
            
            <h2>1. Choisissez stratégiquement l'emplacement</h2>
            <p>
              L'emplacement est sans doute le facteur le plus déterminant pour le succès de votre photobooth. Recherchez un endroit qui soit :
            </p>
            <ul>
              <li><strong>Visible</strong> - Ne cachez pas votre photobooth dans un coin reculé. Placez-le dans un endroit où les invités passeront naturellement ou pourront le repérer facilement.</li>
              <li><strong>Accessible</strong> - Assurez-vous que l'emplacement est accessible à tous, y compris aux personnes à mobilité réduite.</li>
              <li><strong>À l'écart de la circulation principale</strong> - Tout en restant visible, évitez les zones de fort passage qui pourraient gêner l'expérience et créer des embouteillages.</li>
              <li><strong>Proche d'une zone sociale</strong> - Idéalement, placez le photobooth à proximité d'une zone où les invités se rassemblent, comme près du bar ou dans le hall d'entrée, mais pas directement sur la piste de danse.</li>
            </ul>
            
            <div className="bg-violet-50 p-6 rounded-lg border-l-4 border-violet-500 my-8">
              <p className="italic text-violet-800 mb-0">
                "La règle d'or pour positionner un photobooth : suffisamment visible pour attirer, suffisamment isolé pour créer une expérience confortable."
              </p>
            </div>
            
            <h2>2. Optimisez l'éclairage pour des résultats professionnels</h2>
            <p>
              L'éclairage peut faire ou défaire la qualité des photos. Pour obtenir des résultats optimaux :
            </p>
            <ul>
              <li>Évitez les éclairages directs au-dessus du photobooth qui créent des ombres disgracieuses.</li>
              <li>Privilégiez un éclairage frontal doux et diffus pour éliminer les ombres sous les yeux et le menton.</li>
              <li>Si l'événement se déroule dans un lieu sombre, prévoyez un éclairage supplémentaire dédié au photobooth.</li>
              <li>Testez l'éclairage avant l'événement à différentes heures si possible, surtout si la lumière naturelle entre en jeu.</li>
            </ul>
            
            <h2>3. Prévoyez suffisamment d'espace</h2>
            <p>
              Un espace trop restreint limitera l'expérience et créera de la frustration. Assurez-vous de prévoir :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2">Espace minimum recommandé</h4>
                <ul className="space-y-2 list-disc pl-5 text-gray-600">
                  <li>3 x 3 mètres pour un photobooth standard</li>
                  <li>4 x 4 mètres pour un photobooth avec accessoires</li>
                  <li>5 x 5 mètres pour une expérience complète avec zone d'attente</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2">Ne pas oublier l'espace pour</h4>
                <ul className="space-y-2 list-disc pl-5 text-gray-600">
                  <li>La file d'attente des invités</li>
                  <li>La table d'accessoires/props</li>
                  <li>L'écran de prévisualisation (si séparé)</li>
                  <li>La zone où les invités regardent leurs photos</li>
                </ul>
              </div>
            </div>
            
            <h2>4. Garantissez une alimentation électrique fiable</h2>
            <p>
              Les problèmes d'alimentation sont parmi les défaillances techniques les plus courantes. Pour les éviter :
            </p>
            <ul>
              <li>Identifiez précisément vos besoins en électricité (photobooth, éclairage, imprimante, etc.)</li>
              <li>Vérifiez la disponibilité et l'emplacement des prises électriques sur le lieu de l'événement</li>
              <li>Utilisez des rallonges et multiprises de qualité professionnelle, certifiées pour l'événementiel</li>
              <li>Sécurisez tous les câbles au sol avec du ruban gaffer pour éviter les accidents</li>
              <li>Prévoyez une batterie de secours ou un générateur pour les événements extérieurs</li>
            </ul>
            
            <h2>5. Personnalisez l'expérience selon l'événement</h2>
            <p>
              Un photobooth générique ne fera pas forte impression. Pour maximiser l'impact :
            </p>
            <ul>
              <li>Adaptez l'apparence du photobooth aux couleurs et à l'identité visuelle de l'événement</li>
              <li>Créez un arrière-plan (backdrop) personnalisé qui reflète le thème</li>
              <li>Personnalisez les impressions avec le logo, la date et le nom de l'événement</li>
              <li>Proposez des accessoires thématiques qui correspondent à l'ambiance souhaitée</li>
            </ul>
            
            <div className="relative overflow-hidden rounded-xl my-8">
              <Image 
                src="/blog/photobooth-branding.jpg" 
                alt="Exemple de personnalisation de photobooth" 
                width={800} 
                height={400}
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
                Exemple de personnalisation complète d'un photobooth pour un événement corporate
              </div>
            </div>
            
            <h2>6. Proposez des accessoires de qualité</h2>
            <p>
              Les accessoires (ou "props") jouent un rôle crucial dans l'expérience photobooth :
            </p>
            <ul>
              <li>Choisissez des accessoires de qualité qui photographient bien (évitez le plastique bon marché)</li>
              <li>Proposez une variété d'options : chapeaux, lunettes, cadres, bulles de texte, etc.</li>
              <li>Assurez-vous que les accessoires sont appropriés pour l'événement</li>
              <li>Prévoyez un système d'organisation et de rangement pour maintenir l'ordre</li>
              <li>Nettoyez ou remplacez régulièrement les accessoires qui passent de main en main</li>
            </ul>
            
            <h2>7. Créez une signalétique efficace</h2>
            <p>
              Ne supposez pas que les invités sauront comment utiliser le photobooth ou même qu'il est disponible pour eux :
            </p>
            <ul>
              <li>Installez une signalétique claire et visible annonçant le photobooth</li>
              <li>Affichez des instructions simples d'utilisation à proximité</li>
              <li>Si vous utilisez un hashtag ou encouragez le partage sur les réseaux sociaux, indiquez-le clairement</li>
              <li>Envisagez une enseigne lumineuse ou des éléments visuels qui attirent l'attention</li>
            </ul>
            
            <h2>8. Prévoyez une assistance technique</h2>
            <p>
              Même la technologie la plus fiable peut rencontrer des problèmes. Pour garantir une expérience sans faille :
            </p>
            <ul>
              <li>Désignez une personne responsable du photobooth qui sait comment résoudre les problèmes techniques basiques</li>
              <li>Ayez sous la main un guide de dépannage rapide</li>
              <li>Gardez à portée de main les coordonnées du support technique</li>
              <li>Prévoyez des fournitures de rechange (papier pour imprimante, encre, etc.)</li>
              <li>Testez exhaustivement tout l'équipement avant l'événement</li>
            </ul>
            
            <h2>9. Gérez efficacement le flux d'invités</h2>
            <p>
              Une file d'attente trop longue découragera les invités. Pour optimiser l'expérience :
            </p>
            <div className="my-8 bg-gray-50 rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-800 mb-4">Stratégies de gestion de flux</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-violet-700 mb-2">Pour les petits événements</h5>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Système simple de premier arrivé, premier servi</li>
                    <li>Prévoir un temps moyen de 3-5 minutes par groupe</li>
                    <li>Encourager les photos de groupe pour maximiser l'efficacité</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-violet-700 mb-2">Pour les grands événements</h5>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Système de réservation de créneaux horaires</li>
                    <li>Tickets numérotés avec notification par SMS</li>
                    <li>Personnel dédié à la gestion de la file d'attente</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h2>10. Pensez à l'après-événement</h2>
            <p>
              L'expérience photobooth ne s'arrête pas à la fin de l'événement :
            </p>
            <ul>
              <li>Créez une galerie en ligne où les invités pourront retrouver et télécharger leurs photos</li>
              <li>Envoyez un email de suivi avec un lien vers la galerie</li>
              <li>Permettez le partage facile sur les réseaux sociaux après l'événement</li>
              <li>Analysez les statistiques d'utilisation pour améliorer les futures installations</li>
              <li>Recueillez les retours des invités sur leur expérience</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>
              Une installation réussie de photobooth nécessite une planification minutieuse et une attention aux détails. En suivant ces dix conseils, vous maximiserez les chances que votre photobooth devienne un élément mémorable et apprécié de votre événement, générant à la fois engagement pendant l'événement et souvenirs durables par la suite.
            </p>
            
            <p>
              La clé est de considérer le photobooth non pas comme un simple gadget ou une attraction secondaire, mais comme une véritable expérience qui mérite une réflexion approfondie sur son intégration dans l'événement global.
            </p>
            
            <div className="bg-violet-50 p-6 rounded-lg my-8 text-center">
              <h3 className="font-bold text-violet-800 mb-3">Besoin d'aide pour votre prochain événement ?</h3>
              <p className="mb-4">
                Notre équipe d'experts peut vous accompagner dans l'installation et l'optimisation de votre expérience photobooth.
              </p>
              <Link 
                href="/contact" 
                className="inline-block px-6 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors"
              >
                Contactez-nous
              </Link>
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
