import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight, TrendingUp, Sparkles, Brain, Eye, Smartphone, Wand2, Users, Camera, Zap, Settings, CheckCircle, Star, Award, Target, Palette, Globe, Heart } from 'lucide-react';

export default function BlogArticle() {
  // Article metadata
  const article = {
    title: "5 tendances photobooth qui domineront en 2024",
    excerpt: "Anticipez les innovations et tendances qui transformeront l'industrie du photobooth événementiel dans les mois à venir.",
    author: "Mélanie Rousseau",
    date: "20 Octobre 2023",
    readTime: "9 min",
    image: "/blog/trends-2024.jpg",
    category: "Tendances"
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
                alt="Tendances photobooth 2024"
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
          <div className="max-w-4xl mx-auto">
            {/* Enhanced Lead */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-100 rounded-2xl p-10 mb-12 border border-violet-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-violet-800 mb-4">Tendances Photobooth 2024</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                Le monde des photobooths événementiels connaît une évolution rapide, alimentée par les avancées technologiques et les nouvelles attentes des consommateurs. Alors que nous abordons 2024, certaines tendances se dessinent clairement et vont redéfinir l'expérience photobooth lors des événements.
              </p>
              
              <div className="bg-gradient-to-r from-violet-100 to-indigo-100 p-6 rounded-xl border border-violet-200 mt-8">
                <div className="flex items-center mb-3">
                  <Star className="w-6 h-6 text-violet-700 mr-2" />
                  <span className="font-bold text-violet-800">Vision 2024</span>
                </div>
                <p className="text-violet-700 font-medium italic">
                  "En 2024, le photobooth ne sera plus un simple accessoire d'événement, mais une expérience interactive multi-sensorielle qui fusionnera le physique et le numérique de façon transparente."
                </p>
              </div>
            </div>

            {/* Trend 1 - Enhanced */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-10 my-12 border border-blue-200">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-full mr-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-800">1. Photobooths à Intelligence Artificielle Générative</h2>
                  <p className="text-blue-600">La tendance la plus transformative de 2024</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-8">
                L'intelligence artificielle générative représente sans aucun doute la tendance la plus transformative pour l'industrie du photobooth en 2024. Au-delà des simples filtres, cette technologie permet désormais de créer des œuvres d'art uniques à partir de simples photos.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-8">
                <p className="text-gray-700">
                  Les modèles d'IA comme DALL-E, Midjourney ou Stable Diffusion, après avoir conquis internet, s'intègrent maintenant aux photobooths événementiels. Le résultat : des créations visuelles époustouflantes qui vont bien au-delà des capacités des filtres classiques.
                </p>
              </div>
              
              {/* What Changes vs Target Audience */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8 border border-blue-100">
                  <h3 className="font-bold text-xl text-blue-800 mb-6 flex items-center">
                    <Sparkles className="w-6 h-6 text-blue-600 mr-2" />
                    Révolutions techniques
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Création d'images entièrement nouvelles</div>
                        <div className="text-sm text-gray-600">À partir d'une photo de base, génération d'œuvres originales</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Styles artistiques illimités</div>
                        <div className="text-sm text-gray-600">Personnalisables selon l'événement et les préférences</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Images uniques garanties</div>
                        <div className="text-sm text-gray-600">Chaque participant reçoit une création originale</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Expérience "wow" incomparable</div>
                        <div className="text-sm text-gray-600">Dépassant largement les solutions traditionnelles</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 border border-cyan-100">
                  <h3 className="font-bold text-xl text-cyan-800 mb-6 flex items-center">
                    <Users className="w-6 h-6 text-cyan-600 mr-2" />
                    Public cible privilégié
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Événements premium</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>• Lancements de produits technologiques</div>
                        <div>• Mariages innovants et haut de gamme</div>
                        <div>• Événements corporate d'exception</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Générations connectées</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>• Milléniaux et Génération Z</div>
                        <div>• Amateurs d'expériences partageables</div>
                        <div>• Publics sensibles à l'innovation</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-700">85%</div>
                      <div className="text-sm text-gray-600">Taux de partage sur réseaux sociaux</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trend 2 - Enhanced */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-10 my-12 border border-green-200">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full mr-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-green-800">2. Expérience sans contact et décentralisée</h2>
                  <p className="text-green-600">Transformer chaque smartphone en photobooth personnel</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-8">
                La pandémie a accéléré l'adoption de solutions sans contact, mais 2024 marque une évolution majeure : le photobooth décentralisé. Fini le temps où les invités devaient faire la queue devant une cabine unique. La nouvelle génération transforme les smartphones des participants en extensions du photobooth principal.
              </p>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8">
                <p className="text-gray-700">
                  Via un simple QR code, les invités accèdent à une interface web qui leur permet de prendre des photos avec leur propre appareil, tout en bénéficiant des mêmes filtres, effets et options de partage que le photobooth central. Ces photos sont ensuite automatiquement intégrées à la galerie principale de l'événement.
                </p>
              </div>
              
              {/* QR Experience Image */}
              <div className="relative overflow-hidden rounded-xl mb-8">
                <Image 
                  src="/blog/qr-experience.jpg" 
                  alt="QR code pour accéder au photobooth décentralisé" 
                  width={800} 
                  height={400} 
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                  <div className="text-sm font-semibold">Accès instantané via QR code</div>
                  <div className="text-xs opacity-90">L'expérience photobooth démocratisée sur chaque smartphone</div>
                </div>
              </div>
              
              {/* Advantages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-green-100">
                  <h3 className="font-bold text-lg text-green-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Avantages immédiats
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      <span className="text-sm text-gray-700">Élimination des files d'attente</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      <span className="text-sm text-gray-700">Participation simultanée massive</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      <span className="text-sm text-gray-700">Respect des préoccupations d'hygiène</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      <span className="text-sm text-gray-700">Partage instantané facilité</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-emerald-100">
                  <h3 className="font-bold text-lg text-emerald-800 mb-4 flex items-center">
                    <Settings className="w-5 h-5 text-emerald-600 mr-2" />
                    Configuration hybride 2024
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-gray-800">Station centrale</div>
                      <div className="text-sm text-gray-600">Point focal visuel et expérience premium</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Réseau décentralisé</div>
                      <div className="text-sm text-gray-600">Smartphones = photobooths personnels</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Galerie unifiée</div>
                      <div className="text-sm text-gray-600">Toutes les photos centralisées automatiquement</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-4 mt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-700">10×</div>
                      <div className="text-sm text-gray-600">Plus de photos générées</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700">
                En 2024, nous verrons des installations hybrides où une station photobooth centrale servira de point focal visuel, tandis que l'expérience elle-même sera distribuée sur les appareils des participants, créant ainsi une expérience collective mais personnalisée.
              </p>
            </div>

            {/* Trend #3: Multisensory Experiences */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3 mr-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-purple-800">3. Les expériences multisensorielles et immersives</h2>
                  <p className="text-purple-600 font-medium">Du simple visuel vers l'expérience complète</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Le photobooth de 2024 ne se contentera plus de capturer des images statiques. Il évoluera vers une 
                  <span className="font-bold text-purple-700"> expérience multisensorielle complète</span> qui engage plusieurs sens simultanément, 
                  transformant chaque prise de vue en un moment mémorable et immersif.
                </p>
              </div>

              {/* Sensory Components Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg text-purple-800 mb-3">Visuels augmentés</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>• Écrans à 360° immersifs</div>
                    <div>• Projections holographiques</div>
                    <div>• Réalité augmentée en temps réel</div>
                    <div>• Environnements virtuels dynamiques</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg text-purple-800 mb-3">Audio personnalisé</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>• Musique générée par IA</div>
                    <div>• Effets sonores contextuels</div>
                    <div>• Ambiances thématiques</div>
                    <div>• Audio spatial directionnel</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg text-purple-800 mb-3">Parfums synchronisés</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>• Diffusion d'arômes thématiques</div>
                    <div>• Synchronisation avec l'image</div>
                    <div>• Ambiances olfactives</div>
                    <div>• Mémoire sensorielle renforcée</div>
                  </div>
                </div>
              </div>

              {/* Impact and Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-purple-100">
                  <h3 className="font-bold text-lg text-purple-800 mb-4 flex items-center">
                    <Brain className="w-5 h-5 text-purple-600 mr-2" />
                    Impact psychologique
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-3 mt-0.5" />
                      <span className="text-sm text-gray-700">Mémorisation 40% plus élevée grâce aux stimuli multiples</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-3 mt-0.5" />
                      <span className="text-sm text-gray-700">Association émotionnelle renforcée avec la marque</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-3 mt-0.5" />
                      <span className="text-sm text-gray-700">Expérience unique et différenciante</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-purple-100">
                  <h3 className="font-bold text-lg text-purple-800 mb-4 flex items-center">
                    <Target className="w-5 h-5 text-purple-600 mr-2" />
                    Bulles sensorielles 2024
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-gray-800">Environnement adaptatif</div>
                      <div className="text-sm text-gray-600">Changement complet selon le thème choisi</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Immersion totale</div>
                      <div className="text-sm text-gray-600">Tous les sens engagés simultanément</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Personnalisation avancée</div>
                      <div className="text-sm text-gray-600">Adaptation en temps réel aux préférences</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6">
                <div className="text-center">
                  <h4 className="font-bold text-purple-800 mb-2">L'évolution vers l'attraction immersive</h4>
                  <p className="text-gray-700">
                    Les installations les plus avancées créeront des "bulles sensorielles" où l'environnement entier 
                    se transforme en fonction du thème choisi, offrant une expérience véritablement immersive qui 
                    marque durablement les esprits.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Trend #4: Video Content & Dynamic Media */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-3 mr-4">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-orange-800">4. L'intégration vidéo courte et contenu dynamique</h2>
                  <p className="text-orange-600 font-medium">L'ère du contenu viral et des formats courts</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Dans un monde dominé par <span className="font-bold text-orange-700">TikTok, Instagram Reels et YouTube Shorts</span>, 
                  la photo statique ne suffit plus. En 2024, les photobooths évolueront vers des 
                  <span className="font-bold text-orange-700"> "videobooths"</span> permettant de créer facilement des clips de 5 à 15 secondes 
                  avec des effets professionnels appliqués automatiquement.
                </p>
              </div>

              {/* Video Formats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Zap className="w-6 h-6 text-orange-600 mr-2" />
                    <h3 className="font-bold text-lg text-orange-800">Cinemagraphes</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Photos où un seul élément est animé, créant un effet à mi-chemin entre photo et vidéo, 
                    parfaits pour le partage en ligne.
                  </p>
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600">Impact : +65% d'engagement vs photo statique</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Wand2 className="w-6 h-6 text-orange-600 mr-2" />
                    <h3 className="font-bold text-lg text-orange-800">Transformation vidéo IA</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Courts clips qui montrent une transformation spectaculaire du sujet via des effets d'IA 
                    (transformation en personnage de film, style artistique, etc.).
                  </p>
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600">Durée optimale : 8-12 secondes</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Settings className="w-6 h-6 text-orange-600 mr-2" />
                    <h3 className="font-bold text-lg text-orange-800">Slow motion séquencé</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Séquences au ralenti capturées à haute vitesse mais optimisées pour mettre en valeur 
                    des moments précis et créer un impact dramatique.
                  </p>
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600">Fréquence : 240-480 fps</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Smartphone className="w-6 h-6 text-orange-600 mr-2" />
                    <h3 className="font-bold text-lg text-orange-800">Boomerangs augmentés</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Les populaires clips en boucle, mais avec des éléments générés par IA qui amplifient 
                    le mouvement ou ajoutent des effets contextuels.
                  </p>
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600">Viralité : +80% vs boomerang classique</div>
                  </div>
                </div>
              </div>

              {/* AI Enhancement Features */}
              <div className="bg-white rounded-xl p-6 mb-8 border border-orange-100">
                <h3 className="font-bold text-lg text-orange-800 mb-6 flex items-center">
                  <Brain className="w-5 h-5 text-orange-600 mr-2" />
                  Améliorations IA automatiques
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-3">
                      <Eye className="w-6 h-6" />
                    </div>
                    <div className="font-semibold text-gray-800">Stabilisation intelligente</div>
                    <div className="text-sm text-gray-600">Correction automatique des tremblements</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-3">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div className="font-semibold text-gray-800">Éclairage optimisé</div>
                    <div className="text-sm text-gray-600">Ajustement en temps réel</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-3">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="font-semibold text-gray-800">Suggestions de poses</div>
                    <div className="text-sm text-gray-600">Guidage interactif des participants</div>
                  </div>
                </div>
              </div>

              {/* Viral Impact Statistics */}
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-700">15x</div>
                    <div className="text-sm text-gray-700">Plus de potentiel viral que la photo</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-700">85%</div>
                    <div className="text-sm text-gray-700">D'engagement supplémentaire</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-700">3.2s</div>
                    <div className="text-sm text-gray-700">Temps de rétention optimal</div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-gray-700 text-sm">
                    <strong>L'essor du contenu vidéo</strong> est directement lié à son potentiel viral beaucoup plus élevé. 
                    Pour les marques et événements, cela signifie une visibilité accrue et un engagement plus profond du public.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Trend #5: Metaverse & Web 3.0 */}
            <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-8 border border-indigo-100 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl p-3 mr-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-indigo-800">5. L'intégration du métavers et des technologies Web 3.0</h2>
                  <p className="text-indigo-600 font-medium">Vers des expériences hybrides physique-virtuel</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Le <span className="font-bold text-indigo-700">métavers et les technologies Web 3.0</span> (blockchain, NFT, expériences virtuelles persistantes) 
                  continueront leur développement en 2024. Le secteur du photobooth événementiel s'adapte à cette révolution numérique 
                  en créant des ponts entre réalité physique et univers virtuels.
                </p>
              </div>

              {/* Web 3.0 Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-indigo-600 mr-2" />
                    <h3 className="font-bold text-lg text-indigo-800">Créations numériques persistantes</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Les photos et vidéos créées lors d'événements peuvent être tokenisées (transformées en NFT) 
                    et offertes aux participants comme souvenirs numériques authentifiés.
                  </p>
                  <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-lg p-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Valeur potentielle</span>
                      <span className="font-bold text-indigo-700">Souvenir authentifié unique</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-indigo-600 mr-2" />
                    <h3 className="font-bold text-lg text-indigo-800">Doubles numériques (Avatars 3D)</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Les participants peuvent créer des avatars 3D à partir de leurs photos, 
                    utilisables ensuite dans divers environnements virtuels.
                  </p>
                  <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-lg p-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Applications</span>
                      <span className="font-bold text-indigo-700">Gaming, Social VR, Métavers</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Palette className="w-6 h-6 text-indigo-600 mr-2" />
                    <h3 className="font-bold text-lg text-indigo-800">Expériences hybrides</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Des événements se déroulent simultanément dans le monde physique et dans un espace virtuel, 
                    avec des photobooths servant de "portails" entre ces deux réalités.
                  </p>
                  <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-lg p-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Portée</span>
                      <span className="font-bold text-indigo-700">Audience physique + virtuelle</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Heart className="w-6 h-6 text-indigo-600 mr-2" />
                    <h3 className="font-bold text-lg text-indigo-800">Galeries persistantes</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Les photos d'un événement peuvent être exposées dans des galeries virtuelles permanentes, 
                    accessibles longtemps après la fin de l'événement physique.
                  </p>
                  <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-lg p-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Durabilité</span>
                      <span className="font-bold text-indigo-700">Exposition permanente</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metaverse Gallery Showcase */}
              <div className="bg-white rounded-xl p-6 mb-8 border border-indigo-100">
                <div className="text-center mb-6">
                  <h3 className="font-bold text-lg text-indigo-800 mb-2">Galerie métavers en action</h3>
                  <p className="text-gray-600">Visualisation d'une galerie photo persistante dans le métavers</p>
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  <Image 
                    src="/blog/metaverse-gallery.jpg" 
                    alt="Galerie photo dans le métavers" 
                    width={800} 
                    height={400} 
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                    <div className="text-sm font-semibold">Galerie virtuelle permanente</div>
                    <div className="text-xs opacity-90">Photos d'événements accessibles dans le métavers</div>
                  </div>
                </div>
              </div>

              {/* Adoption Timeline */}
              <div className="bg-white rounded-xl p-6 mb-8 border border-indigo-100">
                <h3 className="font-bold text-lg text-indigo-800 mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 text-indigo-600 mr-2" />
                  Calendrier d'adoption 2024-2026
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">2024 - Expérimentation</div>
                      <div className="text-sm text-gray-600">Premiers tests avec NFT et avatars simples</div>
                    </div>
                    <div className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">Émergent</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-indigo-400 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">2025 - Adoption précoce</div>
                      <div className="text-sm text-gray-600">Galeries métavers et expériences hybrides</div>
                    </div>
                    <div className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded">En développement</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">2026 - Démocratisation</div>
                      <div className="text-sm text-gray-600">Intégration standard dans les événements premium</div>
                    </div>
                    <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Futur proche</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-100 to-cyan-100 rounded-xl p-6">
                <div className="text-center">
                  <h4 className="font-bold text-indigo-800 mb-2">Positionnement stratégique</h4>
                  <p className="text-gray-700">
                    Bien que cette tendance soit encore émergente et moins accessible, elle représente une direction claire 
                    pour l'évolution future des photobooths. Les entreprises qui expérimentent dès maintenant avec ces 
                    technologies seront mieux positionnées lorsque ces usages se généraliseront.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Conclusion Section */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-8 border border-violet-100 mb-12">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl p-3 inline-flex mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-violet-800 mb-2">Conclusion : Un avenir centré sur l'expérience personnalisée et partageable</h2>
                <p className="text-violet-600 font-medium">La transformation du photobooth en plateforme d'expériences</p>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed text-center">
                  Ces cinq tendances dessinent un avenir où le photobooth n'est plus un simple dispositif de capture d'image, 
                  mais une <span className="font-bold text-violet-700">plateforme d'expériences complexes, personnalisées et hautement partageables</span>. 
                  L'année 2024 marque un tournant où la valeur se mesure moins à la qualité des photos qu'à la richesse de l'expérience offerte.
                </p>
              </div>

              {/* Trends Summary Grid */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                  <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-sm text-blue-800">IA Générative</div>
                  <div className="text-xs text-gray-600">Personnalisation intelligente</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
                  <Smartphone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-sm text-green-800">Sans Contact</div>
                  <div className="text-xs text-gray-600">Expérience décentralisée</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 text-center border border-purple-100">
                  <Eye className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-bold text-sm text-purple-800">Multisensoriel</div>
                  <div className="text-xs text-gray-600">Immersion complète</div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 text-center border border-orange-100">
                  <Camera className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-bold text-sm text-orange-800">Vidéo Courte</div>
                  <div className="text-xs text-gray-600">Contenu viral</div>
                </div>
                <div className="bg-indigo-50 rounded-xl p-4 text-center border border-indigo-100">
                  <Globe className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                  <div className="font-bold text-sm text-indigo-800">Web 3.0</div>
                  <div className="text-xs text-gray-600">Expériences persistantes</div>
                </div>
              </div>

              {/* Strategic Impact */}
              <div className="bg-white rounded-xl p-6 mb-8 border border-violet-100">
                <h3 className="font-bold text-lg text-violet-800 mb-4 flex items-center">
                  <Target className="w-5 h-5 text-violet-600 mr-2" />
                  Impact stratégique pour les organisateurs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Événements mémorables</h4>
                    <p className="text-sm text-gray-700">
                      Le choix d'un système photobooth innovant devient un élément stratégique majeur 
                      dans la création d'événements marquants et différenciants.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Amplification sociale</h4>
                    <p className="text-sm text-gray-700">
                      L'impact sur les réseaux sociaux et la génération de contenu viral 
                      multiplient la visibilité et l'engagement autour de l'événement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-violet-100 to-indigo-100 rounded-xl p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3 text-violet-800 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 mr-2" />
                    Préparez-vous pour 2024
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Les entreprises qui adopteront rapidement ces nouvelles tendances pourront offrir des expériences 
                    photobooths véritablement différenciantes. L'innovation n'est pas seulement technologique, 
                    elle est avant tout <span className="font-bold text-violet-700">centrée sur l'humain et l'expérience utilisateur</span>.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-violet-200">
                    <p className="text-gray-700 font-medium">
                      Chez <span className="text-violet-700 font-bold">WaiBooth.app</span>, nous intégrons déjà ces innovations 
                      dans nos solutions pour vous permettre d'être à l'avant-garde de cette révolution.
                    </p>
                  </div>
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
