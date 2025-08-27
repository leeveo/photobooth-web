import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight, MapPin, Lightbulb, Users, Camera, Zap, Settings, CheckCircle, AlertTriangle, Smartphone, Eye, Volume2, Wrench, Award, Target, Star } from 'lucide-react';

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
          <div className="max-w-4xl mx-auto">
            {/* Enhanced Lead */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-100 rounded-2xl p-10 mb-12 border border-violet-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-violet-800 mb-4">Guide Expert Installation Photobooth</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                L'installation stratégique d'un photobooth peut faire toute la différence entre une attraction événementielle médiocre et un véritable point fort qui génère engagement et souvenirs mémorables. Voici dix conseils essentiels pour optimiser l'emplacement, la configuration et l'expérience de votre photobooth lors de votre prochain événement.
              </p>
            </div>

            {/* Tip 1 - Enhanced */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-10 my-12 border border-blue-200">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-full mr-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-800">1. Choisissez stratégiquement l'emplacement</h2>
                  <p className="text-blue-600">Le facteur le plus déterminant pour le succès</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-8">
                L'emplacement est sans doute le facteur le plus déterminant pour le succès de votre photobooth. Recherchez un endroit qui soit optimal sur tous les aspects :
              </p>
              
              {/* Location Criteria Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center mb-4">
                    <Eye className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="font-bold text-gray-800">Visibilité optimale</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Ne cachez pas votre photobooth dans un coin reculé. Placez-le dans un endroit où les invités passeront naturellement ou pourront le repérer facilement.</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-cyan-100">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-cyan-600 mr-3" />
                    <h3 className="font-bold text-gray-800">Accessibilité universelle</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Assurez-vous que l'emplacement est accessible à tous, y compris aux personnes à mobilité réduite et aux familles avec enfants.</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center mb-4">
                    <ArrowRight className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="font-bold text-gray-800">Flux de circulation</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Tout en restant visible, évitez les zones de fort passage qui pourraient gêner l'expérience et créer des embouteillages.</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-cyan-100">
                  <div className="flex items-center mb-4">
                    <Share2 className="w-6 h-6 text-cyan-600 mr-3" />
                    <h3 className="font-bold text-gray-800">Zone sociale</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Placez le photobooth à proximité d'une zone où les invités se rassemblent, comme près du bar ou dans le hall d'entrée.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center mb-3">
                  <Star className="w-6 h-6 text-blue-700 mr-2" />
                  <span className="font-bold text-blue-800">Règle d'or</span>
                </div>
                <p className="text-blue-700 font-medium italic">
                  "Suffisamment visible pour attirer, suffisamment isolé pour créer une expérience confortable."
                </p>
              </div>
            </div>
            
            {/* Tip 2 - Enhanced */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-10 my-12 border border-yellow-200">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-yellow-600 to-orange-700 rounded-full mr-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-yellow-800">2. Optimisez l'éclairage pour des résultats professionnels</h2>
                  <p className="text-yellow-600">La qualité photo dépend entièrement de l'éclairage</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-8">
                L'éclairage peut faire ou défaire la qualité des photos. Un mauvais éclairage transformera même le meilleur photobooth en source de déception.
              </p>
              
              {/* Lighting Guidelines */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 border border-yellow-100">
                  <h3 className="font-bold text-lg text-gray-800 mb-6 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
                    À éviter absolument
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Éclairages directs au-dessus</div>
                        <div className="text-sm text-gray-600">Créent des ombres disgracieuses sous les yeux et le menton</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Contre-jour</div>
                        <div className="text-sm text-gray-600">Silhouettes sombres avec arrière-plan surexposé</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Éclairage insuffisant</div>
                        <div className="text-sm text-gray-600">Photos floues et bruit numérique excessif</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-green-100">
                  <h3 className="font-bold text-lg text-gray-800 mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                    Bonnes pratiques
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Éclairage frontal doux</div>
                        <div className="text-sm text-gray-600">Élimine les ombres indésirables et uniforme le teint</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Lumière diffuse</div>
                        <div className="text-sm text-gray-600">Évite les reflets et les contrastes trop marqués</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Éclairage supplémentaire si nécessaire</div>
                        <div className="text-sm text-gray-600">Ring light ou softbox pour les lieux sombres</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border border-yellow-200 mt-6">
                <div className="flex items-center mb-3">
                  <Eye className="w-6 h-6 text-yellow-700 mr-2" />
                  <span className="font-bold text-yellow-800">Test préalable essentiel</span>
                </div>
                <p className="text-yellow-700">
                  Testez toujours l'éclairage avant l'événement à différentes heures, surtout si la lumière naturelle entre en jeu. Prenez quelques photos test pour valider la qualité.
                </p>
              </div>
            </div>
            
            {/* Tip 3 - Enhanced */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-10 my-12 border border-green-200">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full mr-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-green-800">3. Prévoyez suffisamment d'espace</h2>
                  <p className="text-green-600">L'espace détermine la fluidité de l'expérience</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-8">
                Un espace trop restreint limitera l'expérience et créera de la frustration. La planification de l'espace est cruciale pour le succès de votre photobooth.
              </p>
              
              {/* Space Requirements */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8 border border-green-100">
                  <h3 className="font-bold text-xl text-green-800 mb-6 flex items-center">
                    <Target className="w-6 h-6 text-green-600 mr-2" />
                    Dimensions recommandées
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800">Photobooth standard</span>
                        <span className="text-2xl font-bold text-green-700">3 × 3m</span>
                      </div>
                      <div className="text-sm text-gray-600">Configuration de base sans accessoires</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800">Avec accessoires</span>
                        <span className="text-2xl font-bold text-green-700">4 × 4m</span>
                      </div>
                      <div className="text-sm text-gray-600">Incluant table d'accessoires et props</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800">Expérience complète</span>
                        <span className="text-2xl font-bold text-green-700">5 × 5m</span>
                      </div>
                      <div className="text-sm text-gray-600">Avec zone d'attente et prévisualisation</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 border border-emerald-100">
                  <h3 className="font-bold text-xl text-emerald-800 mb-6 flex items-center">
                    <Users className="w-6 h-6 text-emerald-600 mr-2" />
                    Zones à prévoir
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      <div>
                        <div className="font-semibold text-gray-800">File d'attente</div>
                        <div className="text-sm text-gray-600">2-3 mètres linéaires minimum</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Table d'accessoires</div>
                        <div className="text-sm text-gray-600">Facilement accessible, 1m × 0.6m</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Zone de prévisualisation</div>
                        <div className="text-sm text-gray-600">Écran pour voir les photos prises</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Espace circulation</div>
                        <div className="text-sm text-gray-600">Entrée et sortie fluides</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-100 to-green-100 p-4 rounded-lg mt-6">
                    <div className="text-center">
                      <div className="text-sm text-emerald-700 mb-1">Conseil expert</div>
                      <div className="font-semibold text-emerald-800">Ajoutez 20% d'espace supplémentaire</div>
                      <div className="text-xs text-emerald-600">Pour les imprévus et le confort</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Tip 4 - Enhanced */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-10 my-12 border border-purple-200">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full mr-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-purple-800">4. Garantissez une alimentation électrique fiable</h2>
                  <p className="text-purple-600">Les pannes électriques sont l'ennemi n°1 du photobooth</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-8">
                Les problèmes d'alimentation sont parmi les défaillances techniques les plus courantes et peuvent ruiner instantanément l'expérience de vos invités.
              </p>
              
              {/* Power Requirements */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 border border-purple-100">
                  <h3 className="font-bold text-lg text-purple-800 mb-4 flex items-center">
                    <Settings className="w-5 h-5 text-purple-600 mr-2" />
                    Besoins électriques à évaluer
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="text-gray-700">Photobooth principal</span>
                      <span className="font-semibold text-purple-700">200-500W</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="text-gray-700">Éclairage supplémentaire</span>
                      <span className="font-semibold text-purple-700">100-300W</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="text-gray-700">Imprimante photo</span>
                      <span className="font-semibold text-purple-700">150-250W</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="text-gray-700">Écrans supplémentaires</span>
                      <span className="font-semibold text-purple-700">50-150W</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-indigo-100">
                  <h3 className="font-bold text-lg text-indigo-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-600 mr-2" />
                    Checklist sécurité électrique
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      <span className="text-sm text-gray-700">Rallonges professionnelles certifiées</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      <span className="text-sm text-gray-700">Multiprises avec protection surtension</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      <span className="text-sm text-gray-700">Câbles sécurisés au sol (gaffer tape)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      <span className="text-sm text-gray-700">Batterie de secours ou générateur</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      <span className="text-sm text-gray-700">Test complet 24h avant l'événement</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl border border-red-200 mt-6">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-700 mr-2" />
                  <span className="font-bold text-red-800">Attention particulière pour l'extérieur</span>
                </div>
                <p className="text-red-700">
                  Pour les événements extérieurs, une batterie de secours ou un générateur est obligatoire. Vérifiez également l'étanchéité de tous les équipements électriques.
                </p>
              </div>
            </div>

            {/* Tip 5 - Enhanced */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl p-10 my-12 border border-rose-200">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-rose-600 to-pink-700 rounded-full mr-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-rose-800">5. Personnalisez l'expérience selon l'événement</h2>
                  <p className="text-rose-600">La personnalisation fait toute la différence</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-8">
                Un photobooth générique ne fera pas forte impression. La personnalisation transforme une simple activité en expérience mémorable alignée avec votre événement.
              </p>
              
              {/* Customization Elements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-rose-100">
                  <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
                    <Eye className="w-5 h-5 text-rose-600 mr-2" />
                    Identité visuelle
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Couleurs corporate</div>
                        <div className="text-sm text-gray-600">Backdrop et interface aux couleurs de l'événement</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Logo intégré</div>
                        <div className="text-sm text-gray-600">Sur l'interface, les impressions et le backdrop</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Thème spécifique</div>
                        <div className="text-sm text-gray-600">Adapté à l'occasion (mariage, corporate, etc.)</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-pink-100">
                  <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
                    <Settings className="w-5 h-5 text-pink-600 mr-2" />
                    Éléments personnalisables
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Impressions sur mesure</div>
                        <div className="text-sm text-gray-600">Date, nom de l'événement, message spécial</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Accessoires thématiques</div>
                        <div className="text-sm text-gray-600">Props adaptés à l'ambiance souhaitée</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Interface utilisateur</div>
                        <div className="text-sm text-gray-600">Messages et instructions personnalisés</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-xl">
                <Image 
                  src="/blog/photobooth-branding.jpg" 
                  alt="Exemple de personnalisation de photobooth" 
                  width={800} 
                  height={400}
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                  <div className="text-sm font-semibold">Exemple de personnalisation complète</div>
                  <div className="text-xs opacity-90">Photobooth corporate avec branding complet et accessoires thématiques</div>
                </div>
              </div>
            </div>
            
            {/* Tips 6-10 - Compact Enhanced Grid */}
            <div className="my-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">5 conseils supplémentaires pour une installation parfaite</h2>
                <p className="text-lg text-gray-600">Les détails qui font la différence entre une expérience ordinaire et exceptionnelle</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Tip 6 */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl p-8 border border-teal-200">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-full mr-4">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-teal-800">6. Accessoires de qualité</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Les accessoires (props) jouent un rôle crucial dans l'expérience photobooth et la qualité des photos.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                      <span className="text-sm text-gray-700">Accessoires de qualité qui photographient bien</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                      <span className="text-sm text-gray-700">Variété d'options thématiques</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                      <span className="text-sm text-gray-700">Système d'organisation et de rangement</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                      <span className="text-sm text-gray-700">Nettoyage régulier pendant l'événement</span>
                    </div>
                  </div>
                </div>

                {/* Tip 7 */}
                <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-8 border border-orange-200">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-orange-600 to-red-700 rounded-full mr-4">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-800">7. Signalétique efficace</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Ne supposez pas que les invités sauront utiliser le photobooth ou qu'il leur est destiné.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      <span className="text-sm text-gray-700">Signalétique claire et visible</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      <span className="text-sm text-gray-700">Instructions simples d'utilisation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      <span className="text-sm text-gray-700">Hashtag et réseaux sociaux indiqués</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      <span className="text-sm text-gray-700">Éléments visuels attractifs</span>
                    </div>
                  </div>
                </div>

                {/* Tip 8 */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl p-8 border border-indigo-200">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full mr-4">
                      <Wrench className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-indigo-800">8. Assistance technique</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Même la technologie la plus fiable peut rencontrer des problèmes. Soyez préparés.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-indigo-600 mr-2" />
                      <span className="text-sm text-gray-700">Personne responsable formée</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-indigo-600 mr-2" />
                      <span className="text-sm text-gray-700">Guide de dépannage rapide</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-indigo-600 mr-2" />
                      <span className="text-sm text-gray-700">Support technique accessible</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-indigo-600 mr-2" />
                      <span className="text-sm text-gray-700">Fournitures de rechange</span>
                    </div>
                  </div>
                </div>

                {/* Tip 9 */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-xl p-8 border border-emerald-200">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-800">9. Gestion des flux</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Une file d'attente trop longue découragera les invités. Optimisez l'expérience.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-emerald-100">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-emerald-700">3-5 min</div>
                        <div className="text-xs text-gray-600">par groupe idéal</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-emerald-700">8-10 pers</div>
                        <div className="text-xs text-gray-600">file max recommandée</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Tip 10 - Special Focus */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl p-10 my-12 border border-violet-200">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-violet-600 to-purple-700 rounded-full mr-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-violet-800">10. Testez tout avant l'événement</h2>
                  <p className="text-violet-600">Le conseil le plus important : ne laissez rien au hasard</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-8">
                Un test approfondi 24-48h avant l'événement peut vous éviter 90% des problèmes techniques et garantir une expérience fluide pour vos invités.
              </p>
              
              {/* Testing Checklist */}
              <div className="bg-white rounded-xl p-8 border border-violet-100">
                <h3 className="font-bold text-xl text-violet-800 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 text-violet-600 mr-2" />
                  Checklist de test complet
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Tests techniques</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                        <span className="text-sm text-gray-700">Fonctionnement de l'interface</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                        <span className="text-sm text-gray-700">Qualité des photos dans les conditions réelles</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                        <span className="text-sm text-gray-700">Test d'impression (papier, encre, qualité)</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                        <span className="text-sm text-gray-700">Éclairage aux différents moments</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                        <span className="text-sm text-gray-700">Stabilité de l'alimentation électrique</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Tests d'expérience</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                        <span className="text-sm text-gray-700">Fluidité du processus utilisateur</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                        <span className="text-sm text-gray-700">Temps de traitement par session</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                        <span className="text-sm text-gray-700">Accessibilité et ergonomie</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                        <span className="text-sm text-gray-700">Clarté des instructions</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                        <span className="text-sm text-gray-700">Fonctionnement des accessoires</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-violet-100 to-purple-100 p-6 rounded-xl border border-violet-200 mt-6">
                <div className="flex items-center mb-3">
                  <Target className="w-6 h-6 text-violet-700 mr-2" />
                  <span className="font-bold text-violet-800">Le test ultime</span>
                </div>
                <p className="text-violet-700">
                  Faites tester le photobooth par quelqu'un qui ne connaît pas le système. Si cette personne peut l'utiliser facilement sans aide, votre installation est réussie !
                </p>
              </div>
            </div>
                    <li>Système de réservation de créneaux horaires</li>
            {/* Enhanced Conclusion */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-100 rounded-2xl p-10 my-12 border border-violet-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-violet-800 mb-4">Installation réussie = Événement mémorable</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-violet-700 mb-2">10</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Conseils essentiels</div>
                  <div className="text-xs text-gray-500">Pour une installation parfaite</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-700 mb-2">90%</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Problèmes évités</div>
                  <div className="text-xs text-gray-500">Avec les tests préalables</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-700 mb-2">100%</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Satisfaction garantie</div>
                  <div className="text-xs text-gray-500">Avec une planification soignée</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-violet-100 mb-6">
                <h3 className="font-bold text-lg text-violet-800 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-violet-600 mr-2" />
                  Points clés à retenir
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Emplacement stratégique et visible</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Éclairage professionnel optimal</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Espace suffisant et bien organisé</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Tests complets avant l'événement</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 text-center mb-6">
                Une installation réussie de photobooth nécessite une planification minutieuse et une attention aux détails. En suivant ces conseils, votre photobooth deviendra un élément mémorable et apprécié de votre événement, générant engagement et souvenirs durables.
              </p>
              
              <p className="text-gray-700 text-center italic">
                La clé est de considérer le photobooth non pas comme un simple gadget, mais comme une véritable expérience qui mérite une réflexion approfondie sur son intégration dans l'événement global.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-violet-600 to-indigo-700 text-white rounded-2xl p-8 my-12">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Besoin d'aide pour votre prochain événement ?</h3>
                <p className="text-violet-100 mb-6">
                  Nos experts vous accompagnent dans la planification et l'installation de votre photobooth pour garantir une expérience parfaite lors de votre événement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-8 py-3 bg-white text-violet-700 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Smartphone className="w-5 h-5 mr-2" />
                    Demander un devis
                  </Link>
                  <Link 
                    href="/solutions" 
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-violet-700 transition-colors"
                  >
                    Voir nos solutions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
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
