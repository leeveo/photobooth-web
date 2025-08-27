import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight, Camera, Smartphone, Sparkles, Users, TrendingUp, Zap, Eye, Wifi, Monitor, Settings, History, MapPin } from 'lucide-react';

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
            
            {/* Timeline Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl p-6 border border-amber-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-amber-600 rounded-full mr-4">
                    <History className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-800">1925</div>
                    <div className="text-sm text-amber-600">Invention du Photomaton</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Première cabine photo créée par Anatol Josepho</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-600 rounded-full mr-4">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">60 ans</div>
                    <div className="text-sm text-gray-600">Design inchangé</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Cabines fermées, photos noir et blanc</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-600 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-800">Public</div>
                    <div className="text-sm text-blue-600">Lieux de passage</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Gares, centres commerciaux, administrations</p>
              </div>
            </div>
            
            <p>
              Tout a commencé en 1925 avec l'invention de la "Photomaton" par Anatol Josepho. Cette cabine fermée permettait aux utilisateurs de recevoir, pour quelques pièces, une bande de photos d'identité en noir et blanc. Pendant des décennies, ces cabines sont restées relativement inchangées : un espace confiné, un siège ajustable, un rideau pour l'intimité et un flash puissant.
            </p>
            
            {/* Classic Features */}
            <div className="bg-gradient-to-br from-vintage-50 to-sepia-50 rounded-xl p-8 my-10 border border-amber-200">
              <h4 className="font-bold text-lg mb-6 text-amber-800 flex items-center">
                <Camera className="w-6 h-6 mr-2" />
                Caractéristiques du Photobooth Traditionnel
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-amber-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Cabine fermée avec rideau</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-amber-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Siège ajustable en hauteur</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-amber-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Flash puissant pour éclairage</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-amber-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Paiement par pièces de monnaie</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-amber-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Bande de 4 photos noir et blanc</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-amber-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Attente de développement</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p>
              Ces photobooths traditionnels étaient principalement utilitaires, conçus pour produire des photos d'identité standardisées. On les trouvait dans les gares, centres commerciaux et autres lieux publics. Leur attrait résidait dans leur simplicité et leur accessibilité, mais également dans l'excitation d'attendre quelques minutes pour voir apparaître ces petites photos imprimées.
            </p>
            
            <div className="my-8 bg-gray-50 p-6 rounded-lg border-l-4 border-violet-500">
              <p className="italic text-gray-700 mb-0">
                "La magie du photobooth traditionnel résidait dans son imprévisibilité. Vous ne saviez jamais exactement comment les photos allaient sortir, et cette attente faisait partie intégrante de l'expérience."
              </p>
            </div>
            
            <h2>La révolution numérique des années 2000</h2>
            
            {/* Digital Revolution Cards */}
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-10 my-12 border border-blue-200">
              <div className="text-center mb-8">
                <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-800 mb-2">L'Ère Numérique</h3>
                <p className="text-gray-600">De l'utilitaire au divertissement événementiel</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Monitor className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-3 text-gray-800">Écran Instantané</h4>
                    <p className="text-sm text-gray-600">Visualisation immédiate des photos avant impression</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-indigo-100 hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-3 text-gray-800">Séquences Photos</h4>
                    <p className="text-sm text-gray-600">Plusieurs clichés en succession rapide</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-3 text-gray-800">Copies Multiples</h4>
                    <p className="text-sm text-gray-600">Plusieurs impressions pour les groupes</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-3 text-gray-800">Personnalisation</h4>
                    <p className="text-sm text-gray-600">Logos et textes sur les impressions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p>
              Avec l'avènement de la photographie numérique dans les années 2000, les photobooths ont connu leur première grande transformation. Les cabines fermées ont progressivement laissé place à des structures plus ouvertes, équipées d'appareils photo numériques et d'imprimantes rapides.
            </p>
            <p>
              Cette évolution a marqué un tournant fondamental : le photobooth n'était plus seulement un outil utilitaire mais devenait un divertissement. Les mariages et événements d'entreprise commençaient à intégrer ces nouvelles versions, offrant aux invités la possibilité de conserver un souvenir tangible de l'événement.
            </p>
            
            <h2>L'ère des réseaux sociaux : le photobooth connecté</h2>
            
            {/* Social Media Impact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-8 border border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mr-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-blue-800">2010</h3>
                    <p className="text-blue-600">Révolution sociale</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Explosion de Facebook et Instagram transforme le partage de photos en phénomène viral mondial.</p>
                <div className="flex items-center text-sm text-blue-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>Partage instantané</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 border border-green-200">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mr-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-800">Connectivité</h3>
                    <p className="text-green-600">Photobooth digital</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Envoi par email et publication directe sur les réseaux sociaux remplacent progressivement l'impression.</p>
                <div className="flex items-center text-sm text-green-600">
                  <Zap className="w-4 h-4 mr-1" />
                  <span>Marketing viral</span>
                </div>
              </div>
            </div>
            
            <p>
              Vers 2010, avec l'explosion des réseaux sociaux comme Facebook et Instagram, le photobooth a connu sa deuxième grande mutation. La valeur de l'impression physique a été complétée, voire parfois supplantée, par le partage numérique.
            </p>
            <p>
              Les photobooths se sont équipés de fonctionnalités permettant l'envoi instantané des photos par email ou leur publication directe sur les réseaux sociaux. Cette évolution a considérablement augmenté la portée des photobooths, les transformant en véritables outils de marketing viral pour les marques et événements.
            </p>
            
            <h2>L'explosion créative : personnalisation et expériences immersives</h2>
            
            {/* Creative Explosion Timeline */}
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 rounded-2xl p-10 my-12 border border-purple-200">
              <div className="text-center mb-8">
                <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-800 mb-2">2015+ : Explosion Créative</h3>
                <p className="text-gray-600">De la cabine fermée aux installations spectaculaires</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 hover:shadow-md transition-all hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-3 text-purple-800">Murs à Selfie</h4>
                    <p className="text-sm text-gray-600">Installations géantes pour groupes</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-pink-100 hover:shadow-md transition-all hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Monitor className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-3 text-pink-800">Green Screen</h4>
                    <p className="text-sm text-gray-600">Fonds virtuels personnalisés</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-red-100 hover:shadow-md transition-all hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-3 text-red-800">Slow Motion</h4>
                    <p className="text-sm text-gray-600">Vidéos ralenties et boomerang</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100 hover:shadow-md transition-all hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-3 text-orange-800">360 Degrés</h4>
                    <p className="text-sm text-gray-600">Expériences immersives complètes</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p>
              À partir de 2015, le design et les fonctionnalités des photobooths se sont diversifiés de façon exponentielle. Les cabines fermées traditionnelles ont laissé place à une multitude de formats : miroirs magiques, bornes ouvertes, installations artistiques, et même des concepts entièrement dématérialisés.
            </p>
            
            {/* Key Transformation */}
            <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-xl p-8 my-10 border border-violet-200">
              <div className="flex items-start">
                <div className="p-3 bg-violet-600 rounded-full mr-4 flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-violet-800">Transformation Fondamentale</h4>
                  <p className="text-gray-700 mb-4">
                    L'accent s'est déplacé de la simple capture d'image vers une expérience complète, immersive et partageant parfaitement le message de l'événement ou la marque. Le photobooth n'était plus un simple "extra" mais devenait central dans la stratégie d'engagement des participants.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Expérience immersive</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Message de marque intégré</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Engagement central</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Stratégie événementielle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h2>L'ère actuelle : IA et expériences sans contact</h2>
            
            {/* Modern Era Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-xl p-8 border border-emerald-200">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mr-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-emerald-800">COVID-19</h3>
                    <p className="text-emerald-600">Solutions sans contact</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">La pandémie accélère le développement de photobooths sans contact utilisant QR codes et smartphones personnels.</p>
                <div className="flex items-center text-sm text-emerald-600">
                  <Smartphone className="w-4 h-4 mr-1" />
                  <span>Technologie accessible</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-xl p-8 border border-violet-200">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full mr-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-violet-800">Intelligence IA</h3>
                    <p className="text-violet-600">Créativité augmentée</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">L'IA ouvre des possibilités créatives sans précédent avec transformation artistique et personnalisation intelligente.</p>
                <div className="flex items-center text-sm text-violet-600">
                  <Eye className="w-4 h-4 mr-1" />
                  <span>Expérience unique</span>
                </div>
              </div>
            </div>
            
            {/* Modern Features Grid */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-10 my-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                <Settings className="w-8 h-8 inline-block mr-3 mb-1" />
                Fonctionnalités Révolutionnaires Actuelles
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-600 rounded-full mr-4">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg text-blue-800">Auto-Détection</h4>
                  </div>
                  <p className="text-sm text-gray-600">Pose et composition intelligente automatique</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-purple-600 rounded-full mr-4">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg text-purple-800">IA Artistique</h4>
                  </div>
                  <p className="text-sm text-gray-600">Transformation photos via intelligence artificielle</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-600 rounded-full mr-4">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg text-green-800">Personnalisation IA</h4>
                  </div>
                  <p className="text-sm text-gray-600">Contenu adapté aux préférences utilisateur</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-red-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-red-600 rounded-full mr-4">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg text-red-800">Réalité Augmentée</h4>
                  </div>
                  <p className="text-sm text-gray-600">Expériences AR intégrées et immersives</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-orange-600 rounded-full mr-4">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg text-orange-800">QR Code</h4>
                  </div>
                  <p className="text-sm text-gray-600">Solutions sans app via smartphone personnel</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-teal-600 rounded-full mr-4">
                      <Wifi className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg text-teal-800">Sans Contact</h4>
                  </div>
                  <p className="text-sm text-gray-600">Hygiène et sécurité sanitaire optimisées</p>
                </div>
              </div>
            </div>
            
            <p>
              La pandémie de COVID-19 a accéléré une nouvelle évolution vers les solutions sans contact, tandis que l'intelligence artificielle ouvre aujourd'hui des possibilités créatives sans précédent.
            </p>
            
            <h2>L'avenir : une intégration toujours plus poussée</h2>
            
            {/* Future Vision */}
            <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 rounded-2xl p-10 my-12 border border-cyan-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-800 mb-4">Vision Futur : Écosystème Digital Unifié</h3>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  L'avenir des photobooths s'oriente vers une intégration encore plus profonde avec d'autres technologies événementielles. La tendance est à l'expérience unifiée, où le photobooth n'est plus un élément isolé mais fait partie d'un écosystème digital complet.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-cyan-100 hover:shadow-md transition-all hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mr-4">
                      <Monitor className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-xl text-cyan-800">Murs LED Interactifs</h4>
                  </div>
                  <p className="text-gray-700 mb-4">Intégration avec des écrans géants pour des expériences visuelles spectaculaires et partagées.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">Écrans géants</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Interactivité</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm border border-blue-100 hover:shadow-md transition-all hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mr-4">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-xl text-blue-800">IA Générative</h4>
                  </div>
                  <p className="text-gray-700 mb-4">Création de contenus entièrement nouveaux et uniques grâce à l'intelligence artificielle avancée.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Contenu unique</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">IA avancée</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm border border-indigo-100 hover:shadow-md transition-all hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mr-4">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-xl text-indigo-800">Réalité Mixte</h4>
                  </div>
                  <p className="text-gray-700 mb-4">Fusion entre photo, vidéo et réalité augmentée pour des expériences immersives totales.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">AR/VR</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Immersion</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm border border-purple-100 hover:shadow-md transition-all hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mr-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-xl text-purple-800">Galeries Collaboratives</h4>
                  </div>
                  <p className="text-gray-700 mb-4">Créations d'invités fusionnées en œuvres collectives et installations artistiques partagées.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Collaboratif</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">Art collectif</span>
                  </div>
                </div>
              </div>
            </div>
            
            <h2>Conclusion</h2>
            
            {/* Evolution Summary */}
            <div className="bg-gradient-to-br from-violet-100 via-indigo-100 to-purple-100 rounded-2xl p-10 my-12 border border-violet-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <History className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-violet-800 mb-4">Un Siècle d'Innovation Continue</h3>
              </div>
              
              {/* Evolution Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-amber-800">1925-1985</h4>
                  <p className="text-sm text-gray-600">Machine utilitaire pour photos d'identité</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-blue-800">2000-2010</h4>
                  <p className="text-sm text-gray-600">Révolution numérique et événementielle</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-green-800">2010-2020</h4>
                  <p className="text-sm text-gray-600">Ère sociale et marketing viral</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-purple-800">2020+</h4>
                  <p className="text-sm text-gray-600">IA et expériences immersives</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                  De simple machine utilitaire à véritable centre d'expérience événementielle, le photobooth a parcouru un chemin impressionnant. Son évolution reflète parfaitement les transformations technologiques et sociales de notre rapport à l'image et au partage de moments.
                </p>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-violet-200 max-w-2xl mx-auto">
                  <div className="flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-violet-600 mr-3" />
                    <h4 className="font-bold text-xl text-violet-800">Évolution Continue</h4>
                  </div>
                  <p className="text-gray-700">
                    Si sa fonction principale - capturer et conserver des souvenirs - est restée la même, c'est la richesse de l'expérience et son intégration dans une stratégie d'engagement global qui définissent le photobooth moderne.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Final Message */}
            <div className="bg-gradient-to-r from-violet-100 to-indigo-100 rounded-xl p-8 my-10 border border-violet-200">
              <div className="flex items-start">
                <div className="p-3 bg-violet-600 rounded-full mr-4 flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-violet-800">L'Avenir est Prometteur</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Loin de disparaître, cette technologie continue de se réinventer pour rester au cœur des événements mémorables. Le photobooth d'aujourd'hui n'est plus seulement un outil de capture, mais un véritable catalyseur d'émotions et de partage.
                  </p>
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
