import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight, Grid, Layers, Users, Camera, Monitor, Sparkles, TrendingUp, Zap, Eye, Settings, Brain, Palette } from 'lucide-react';

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
            
            {/* Concept Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-600 rounded-full mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-800">Vision Globale</div>
                    <div className="text-sm text-blue-600">Vue d'ensemble</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Image maîtresse visible de loin (logo, portrait, message)</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-600 rounded-full mr-4">
                    <Grid className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-800">Détail</div>
                    <div className="text-sm text-purple-600">Vue rapprochée</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Centaines de photos individuelles composant l'ensemble</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-600 rounded-full mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-800">Collaboratif</div>
                    <div className="text-sm text-green-600">Temps réel</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Créée par les participants pendant l'événement</p>
              </div>
            </div>
            
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
            
            {/* Process Steps - Enhanced */}
            <div className="bg-gradient-to-br from-violet-50 via-indigo-50 to-purple-50 rounded-2xl p-10 my-12 border border-violet-200">
              <div className="text-center mb-8">
                <Settings className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-violet-800 mb-2">Processus de Création</h3>
                <p className="text-gray-600">5 étapes orchestrées par un logiciel spécialisé</p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Monitor className="w-8 h-8 text-white" />,
                    title: "Sélection Image Maîtresse",
                    desc: "Choix de l'image principale qui sera reproduite (logo, portrait, message)",
                    color: "from-blue-500 to-cyan-600"
                  },
                  {
                    icon: <Camera className="w-8 h-8 text-white" />,
                    title: "Système de Collecte",
                    desc: "Mise en place des photobooths, smartphones et hashtags sociaux",
                    color: "from-green-500 to-emerald-600"
                  },
                  {
                    icon: <Brain className="w-8 h-8 text-white" />,
                    title: "Analyse Algorithmique",
                    desc: "Analyse de chaque photo pour déterminer sa tonalité dominante",
                    color: "from-purple-500 to-pink-600"
                  },
                  {
                    icon: <Grid className="w-8 h-8 text-white" />,
                    title: "Placement Stratégique",
                    desc: "Positionnement optimal des photos pour reproduire l'image maîtresse",
                    color: "from-orange-500 to-red-600"
                  },
                  {
                    icon: <Monitor className="w-8 h-8 text-white" />,
                    title: "Affichage Temps Réel",
                    desc: "Visualisation de l'évolution de la mosaïque sur écrans pendant l'événement",
                    color: "from-teal-500 to-blue-600"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-center bg-white rounded-xl p-6 shadow-sm border border-violet-100 hover:shadow-md transition-all hover:scale-105">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mr-6`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                    <div className="text-2xl font-bold text-violet-600 ml-4">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <p>
              Les algorithmes modernes de photomosaïque sont devenus extrêmement sophistiqués, permettant non seulement de placer les photos selon leur couleur dominante, mais aussi d'ajuster leur luminosité et leur contraste pour une reproduction plus fidèle de l'image maîtresse, tout en préservant la qualité et la reconnaissabilité de chaque photo individuelle.
            </p>
            
            {/* Static vs Dynamic Comparison - Enhanced */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-8 border border-blue-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mr-4">
                    <Layers className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-blue-800">Photomosaïque Statique</h3>
                </div>
                <p className="text-gray-700 mb-4">Créée à partir d'une collection existante de photos, parfaite pour les rétrospectives ou les hommages.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Rétrospective</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">Hommage</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Collection existante</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-8 border border-purple-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mr-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-purple-800">Photomosaïque Dynamique</h3>
                </div>
                <p className="text-gray-700 mb-4">Évolue en temps réel pendant l'événement, créant une expérience interactive et engageante pour les participants.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Temps réel</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">Interactif</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Évolutif</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-violet-500">Les bénéfices de la photomosaïque pour votre événement</h2>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-violet-100 hover:shadow-md transition-all hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-violet-800">Engagement Collectif</h4>
                  <p className="text-sm text-gray-600">Rassemble les participants dans une création commune</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-indigo-100 hover:shadow-md transition-all hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-indigo-800">Impact Visuel</h4>
                  <p className="text-sm text-gray-600">Spectacle impressionnant qui marque les esprits</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md transition-all hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-green-800">Souvenir Durable</h4>
                  <p className="text-sm text-gray-600">Œuvre unique qui raconte l'histoire de l'événement</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100 hover:shadow-md transition-all hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-orange-800">Valeur Ajoutée</h4>
                  <p className="text-sm text-gray-600">Différenciation forte pour votre événement</p>
                </div>
              </div>
            </div>
            
            <p>
              Au-delà de l'aspect visuel impressionnant, la photomosaïque offre de nombreux avantages qui en font un élément de plus en plus recherché dans l'événementiel moderne :
            </p>
            
            {/* Enhanced Impact Statistics */}
            <div className="relative my-12 p-10 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl text-white overflow-hidden">
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Impact Mesurable sur l'Engagement</h3>
                  <p className="opacity-90">Données basées sur plus de 300 événements avec photomosaïque</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                    <div className="text-center">
                      <Users className="w-8 h-8 mx-auto mb-2 opacity-80" />
                      <div className="text-3xl font-bold">+70%</div>
                      <div className="text-sm opacity-80">participation active</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                    <div className="text-center">
                      <Clock className="w-8 h-8 mx-auto mb-2 opacity-80" />
                      <div className="text-3xl font-bold">3.5×</div>
                      <div className="text-sm opacity-80">temps d'engagement</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                    <div className="text-center">
                      <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-80" />
                      <div className="text-3xl font-bold">92%</div>
                      <div className="text-sm opacity-80">satisfaction invités</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                    <div className="text-center">
                      <Brain className="w-8 h-8 mx-auto mb-2 opacity-80" />
                      <div className="text-3xl font-bold">85%</div>
                      <div className="text-sm opacity-80">mémorabilité événement</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mt-20 -mr-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -mb-20 -ml-20"></div>
              <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full -mt-16 -ml-16"></div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-violet-500">Applications concrètes : quand utiliser une photomosaïque ?</h2>
            
            {/* Applications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-xl p-8 border border-rose-200 hover:shadow-lg transition-all hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full mr-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-rose-800">Mariages</h3>
                </div>
                <p className="text-gray-700 mb-4">Créer un portrait des mariés composé des photos des invités, symbolisant l'union entourée de leurs proches.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs rounded-full">Portrait couple</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">Photos invités</span>
                  <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs rounded-full">Souvenir unique</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 border border-blue-200 hover:shadow-lg transition-all hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mr-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-blue-800">Événements Corporate</h3>
                </div>
                <p className="text-gray-700 mb-4">Former le logo de l'entreprise avec les portraits des employés, renforçant l'esprit d'équipe et l'appartenance.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Logo entreprise</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">Portraits équipe</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Team building</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 border border-green-200 hover:shadow-lg transition-all hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mr-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-green-800">Lancements Produit</h3>
                </div>
                <p className="text-gray-700 mb-4">Révéler l'image du nouveau produit grâce aux photos des participants, créant un dévoilement spectaculaire.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Nouveau produit</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">Dévoilement</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Impact marketing</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-8 border border-purple-200 hover:shadow-lg transition-all hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full mr-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-purple-800">Conférences</h3>
                </div>
                <p className="text-gray-700 mb-4">Illustrer le thème principal avec les contributions visuelles des participants, matérialisant l'esprit collectif.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Thème central</span>
                  <span className="px-3 py-1 bg-violet-100 text-violet-700 text-xs rounded-full">Participation</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Collectif</span>
                </div>
              </div>
            </div>
            
            <p>
              La photomosaïque s'adapte à une multitude de contextes et formats d'événements, offrant à chaque fois une expérience unique et mémorable.
            </p>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-violet-500">Considérations techniques pour une photomosaïque réussie</h2>
            
            {/* Technical Requirements Grid */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-10 my-12 border border-gray-200">
              <div className="text-center mb-8">
                <Settings className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Exigences Techniques</h3>
                <p className="text-gray-600">5 piliers pour garantir une qualité optimale</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Camera className="w-6 h-6 text-white" />,
                    title: "Résolution Photos",
                    desc: "Qualité suffisante des photos collectées pour maintenir la netteté visuelle",
                    color: "from-blue-500 to-cyan-600"
                  },
                  {
                    icon: <Brain className="w-6 h-6 text-white" />,
                    title: "Algorithme Intelligent",
                    desc: "Analyse et placement optimisés pour un rendu fidèle à l'image maîtresse",
                    color: "from-purple-500 to-pink-600"
                  },
                  {
                    icon: <Eye className="w-6 h-6 text-white" />,
                    title: "Système Modération",
                    desc: "Filtrage automatique des contenus inappropriés avant intégration",
                    color: "from-green-500 to-emerald-600"
                  },
                  {
                    icon: <Monitor className="w-6 h-6 text-white" />,
                    title: "Affichage HD",
                    desc: "Écrans haute définition pour apprécier les détails de l'œuvre finale",
                    color: "from-orange-500 to-red-600"
                  },
                  {
                    icon: <Zap className="w-6 h-6 text-white" />,
                    title: "Traitement Rapide",
                    desc: "Capacité de calcul pour une expérience temps réel fluide",
                    color: "from-teal-500 to-blue-600"
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 bg-gradient-to-r ${feature.color} rounded-full mr-4`}>
                        {feature.icon}
                      </div>
                      <h4 className="font-bold text-lg text-gray-800">{feature.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <p>
              Pour garantir la qualité et l'impact de votre photomosaïque, ces aspects techniques doivent être maîtrisés pour offrir une expérience sans faille à vos participants.
            </p>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-violet-500">Le futur de la photomosaïque : innovation et tendances</h2>
            
            {/* Future Trends */}
            <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 rounded-2xl p-10 my-12 border border-cyan-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-800 mb-4">Innovations Émergentes</h3>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Comme toute technologie visuelle, la photomosaïque continue d'évoluer avec des innovations qui redéfinissent les possibilités créatives.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: <Zap className="w-8 h-8 text-white" />,
                    title: "Photomosaïque Animée",
                    desc: "Intégration de clips vidéo courts au lieu de photos fixes pour des créations dynamiques",
                    tags: ["Vidéo", "Animation", "Dynamique"],
                    color: "from-purple-500 to-pink-600"
                  },
                  {
                    icon: <Brain className="w-8 h-8 text-white" />,
                    title: "IA Générative",
                    desc: "Amélioration des photos et adaptation intelligente par intelligence artificielle",
                    tags: ["IA", "Amélioration", "Smart"],
                    color: "from-blue-500 to-indigo-600"
                  },
                  {
                    icon: <Layers className="w-8 h-8 text-white" />,
                    title: "Mosaïques 3D",
                    desc: "Création d'œuvres avec profondeur et perspective pour une immersion accrue",
                    tags: ["3D", "Profondeur", "Immersion"],
                    color: "from-green-500 to-emerald-600"
                  },
                  {
                    icon: <Eye className="w-8 h-8 text-white" />,
                    title: "Réalité Augmentée",
                    desc: "Visualisation interactive de la mosaïque via smartphone ou lunettes AR",
                    tags: ["AR", "Interactif", "Mobile"],
                    color: "from-orange-500 to-red-600"
                  }
                ].map((trend, index) => (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-cyan-100 hover:shadow-md transition-all hover:scale-105">
                    <div className="flex items-center mb-6">
                      <div className={`p-4 bg-gradient-to-br ${trend.color} rounded-full mr-4`}>
                        {trend.icon}
                      </div>
                      <h4 className="font-bold text-xl text-gray-800">{trend.title}</h4>
                    </div>
                    <p className="text-gray-700 mb-4">{trend.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {trend.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-violet-500">Conclusion</h2>
            
            {/* Conclusion Section */}
            <div className="bg-gradient-to-br from-violet-100 via-indigo-100 to-purple-100 rounded-2xl p-10 my-12 border border-violet-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Grid className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-violet-800 mb-4">L'Art Collaboratif Moderne</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Users className="w-8 h-8 text-violet-600" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-violet-800">Collectif</h4>
                  <p className="text-sm text-gray-600">Du individuel vers le collaboratif</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Layers className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-indigo-800">Cohérence</h4>
                  <p className="text-sm text-gray-600">Rassembler la diversité dans l'unité</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Camera className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-purple-800">Permanence</h4>
                  <p className="text-sm text-gray-600">Transformer l'éphémère en durable</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                  La photomosaïque représente bien plus qu'une simple attraction visuelle lors d'un événement. Elle incarne parfaitement l'esprit de notre époque : créer du collectif à partir de contributions individuelles, rassembler la diversité dans un ensemble cohérent, et transformer l'éphémère en souvenir durable.
                </p>
              </div>
            </div>
            
            {/* Final Impact Message */}
            <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-xl p-8 my-10 border border-violet-200">
              <div className="flex items-start">
                <div className="p-3 bg-violet-600 rounded-full mr-4 flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-violet-800">Impact Durable</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    À l'heure où les expériences digitales et physiques convergent, la photomosaïque offre une passerelle unique entre l'individuel et le collectif, entre l'instantané et le permanent.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Elle donne à chaque participant la satisfaction de contribuer à quelque chose de plus grand, tout en créant pour l'organisateur un souvenir puissant qui continuera de raconter l'histoire de l'événement bien après sa conclusion.
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
