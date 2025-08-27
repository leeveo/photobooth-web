import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight, TrendingUp, DollarSign, Users, Target, BarChart3, Zap, Eye, Brain, Settings, Calculator, Award, CheckCircle, PieChart, Heart, Sparkles, Camera } from 'lucide-react';

export default function BlogArticle() {
  // Article metadata
  const article = {
    title: "Le ROI des photobooths pour les événements corporate : étude de cas",
    excerpt: "Analyse détaillée de l'impact commercial et du retour sur investissement des solutions photobooth lors d'événements professionnels.",
    author: "Nicolas Lambert",
    date: "2 Septembre 2023",
    readTime: "12 min",
    image: "/blog/corporate-roi.jpg",
    category: "Business"
  };

  // Related articles
  const relatedArticles = [
    {
      slug: "reussir-installation-photobooth",
      title: "10 conseils pour réussir l'installation de votre photobooth lors d'un événement",
      excerpt: "Guide pratique pour optimiser l'emplacement, l'éclairage et l'expérience utilisateur de votre photobooth lors de votre prochain événement.",
      image: "/blog/photobooth-setup.jpg",
    },
    {
      slug: "tendances-photobooth-2024",
      title: "5 tendances photobooth qui domineront en 2024",
      excerpt: "Anticipez les innovations et tendances qui transformeront l'industrie du photobooth événementiel dans les mois à venir.",
      image: "/blog/trends-2024.jpg",
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
                alt="Analyse du ROI des photobooths lors d'événements corporate"
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
                <p className="text-sm text-gray-600">Consultant en marketing événementiel</p>
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
              Alors que de nombreuses entreprises considèrent encore les photobooths comme de simples divertissements lors d'événements corporate, une analyse approfondie révèle qu'ils constituent en réalité un investissement stratégique aux retombées mesurables. Dans cet article, nous examinerons des études de cas concrètes démontrant le retour sur investissement significatif que peut générer un photobooth bien intégré dans votre stratégie événementielle.
            </p>
            
            <div className="my-8 bg-gradient-to-r from-violet-50 to-indigo-50 p-6 rounded-xl border-l-4 border-violet-500">
              <p className="italic text-gray-800 text-lg">
                "Un photobooth n'est pas une dépense, mais un investissement marketing qui génère à la fois engagement immédiat et visibilité durable pour votre marque."
              </p>
            </div>
            
            <h2>Les métriques qui comptent : mesurer le ROI d'un photobooth</h2>
            
            {/* KPIs Grid */}
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-10 my-12 border border-blue-200">
              <div className="text-center mb-8">
                <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-800 mb-2">Indicateurs Clés de Performance</h3>
                <p className="text-gray-600">6 métriques essentielles pour évaluer objectivement le ROI</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Users className="w-6 h-6 text-white" />,
                    title: "Taux d'Engagement",
                    desc: "Pourcentage de participants qui interagissent avec le photobooth",
                    color: "from-blue-500 to-cyan-600"
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6 text-white" />,
                    title: "Portée Organique",
                    desc: "Nombre de personnes touchées par les partages sur réseaux sociaux",
                    color: "from-purple-500 to-pink-600"
                  },
                  {
                    icon: <Target className="w-6 h-6 text-white" />,
                    title: "Collecte de Leads",
                    desc: "Coordonnées et informations collectées via le système de partage",
                    color: "from-green-500 to-emerald-600"
                  },
                  {
                    icon: <Eye className="w-6 h-6 text-white" />,
                    title: "Qualité des Interactions",
                    desc: "Durée et profondeur des conversations générées autour de l'expérience",
                    color: "from-orange-500 to-red-600"
                  },
                  {
                    icon: <Brain className="w-6 h-6 text-white" />,
                    title: "Mémorabilité de Marque",
                    desc: "Rappel spontané de la marque dans les enquêtes post-événement",
                    color: "from-teal-500 to-blue-600"
                  },
                  {
                    icon: <DollarSign className="w-6 h-6 text-white" />,
                    title: "Valeur Médiatique",
                    desc: "Estimation de la valeur des mentions et expositions générées",
                    color: "from-indigo-500 to-purple-600"
                  }
                ].map((kpi, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition-all hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 bg-gradient-to-r ${kpi.color} rounded-full mr-4`}>
                        {kpi.icon}
                      </div>
                      <h4 className="font-bold text-lg text-gray-800">{kpi.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{kpi.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <p>
              Avant de nous plonger dans les études de cas, ces indicateurs clés permettent d'évaluer objectivement le retour sur investissement d'un photobooth lors d'un événement corporate.
            </p>
            
            {/* Enhanced Methodology Section */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-100 rounded-2xl p-10 my-12 border border-violet-200">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-full mr-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-violet-800">Méthodologie d'Analyse</h3>
                  <p className="text-violet-600">Étude rigoureuse sur 50 événements corporate</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 border border-violet-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-violet-700 mb-2">50</div>
                    <div className="text-sm text-gray-600">événements analysés</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-indigo-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-700 mb-2">25K+</div>
                    <div className="text-sm text-gray-600">participants cumulés</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-purple-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-700 mb-2">2022-2023</div>
                    <div className="text-sm text-gray-600">période d'étude</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-violet-100">
                <p className="text-gray-700 mb-4">
                  Les données présentées dans cet article proviennent d'une analyse de 50 événements corporate utilisant nos solutions photobooth entre 2022 et 2023. Ces événements incluaient des lancements de produits, des conférences, des salons professionnels et des soirées d'entreprise.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                  <span>Toutes les données ont été collectées avec consentement et anonymisées</span>
                </div>
              </div>
            </div>
            
            <h2>Étude de cas #1 : Lancement de produit tech - TechCorp</h2>
            
            {/* Case Study 1 - Enhanced */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-10 my-12 border border-blue-200">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-full mr-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-800">TechCorp - Startup Cloud</h3>
                  <p className="text-blue-600">Lancement plateforme avec photobooth IA personnalisé</p>
                </div>
              </div>
              
              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center mb-3">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-800">Durée</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-700">1 jour</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-cyan-100">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-cyan-600 mr-2" />
                    <span className="font-semibold text-gray-800">Participants</span>
                  </div>
                  <div className="text-2xl font-bold text-cyan-700">350</div>
                  <div className="text-sm text-gray-500">professionnels secteur</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center mb-3">
                    <Brain className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-800">Solution</span>
                  </div>
                  <div className="text-sm font-semibold text-blue-700">IA personnalisée</div>
                  <div className="text-sm text-gray-500">avec branding produit</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-green-100">
                  <div className="flex items-center mb-3">
                    <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-semibold text-gray-800">Investissement</span>
                  </div>
                  <div className="text-2xl font-bold text-green-700">3 500€</div>
                  <div className="text-sm text-gray-500">photobooth + custom</div>
                </div>
              </div>
              
              {/* Results */}
              <div className="bg-white rounded-xl p-8 border border-blue-100">
                <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-2" />
                  Résultats Obtenus
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-blue-700 mb-2">89%</div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">Taux de participation</div>
                    <div className="text-xs text-gray-500">312 participants utilisateurs</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Share2 className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-purple-700 mb-2">78%</div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">Taux de partage</div>
                    <div className="text-xs text-gray-500">243 photos sur réseaux sociaux</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-green-700 mb-2">45K+</div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">Personnes atteintes</div>
                    <div className="text-xs text-gray-500">Portée organique cumulée</div>
                  </div>
                </div>
              </div>
            </div>
            
            <p>
              Notre première étude de cas concerne TechCorp, une entreprise de solutions cloud qui a intégré un photobooth IA lors du lancement de sa nouvelle plateforme.
            </p>
            
            <p>
              Au-delà de ces métriques d'engagement, TechCorp a collecté 285 adresses email opt-in et enregistré une augmentation de 32% des mentions de leur hashtag dédié par rapport à leurs événements précédents sans photobooth.
            </p>
            
            {/* ROI Analysis */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl p-8 my-10 border border-green-200">
              <div className="flex items-center mb-4">
                <Calculator className="w-8 h-8 text-green-600 mr-3" />
                <h4 className="text-xl font-bold text-green-800">Analyse du ROI</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-4">En valorisant les leads qualifiés générés (valeur moyenne de 150 € par lead qualifié dans leur secteur) et en estimant l'équivalent publicitaire de la portée obtenue :</p>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-700">418%</div>
                      <div className="text-sm text-gray-600">Retour sur investissement</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg text-gray-700 mb-2">Plus de</div>
                    <div className="text-4xl font-bold text-green-700">4×</div>
                    <div className="text-lg text-gray-700">le montant investi</div>
                  </div>
                </div>
              </div>
            </div>
            
            <h2>Étude de cas #2 : Congrès annuel - AssurGroup</h2>
            
            {/* Case Study 2 - Enhanced */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl p-10 my-12 border border-indigo-200">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-full mr-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-indigo-800">AssurGroup - Compagnie d'Assurance</h3>
                  <p className="text-indigo-600">Congrès annuel avec solution multi-stations et photomosaïque</p>
                </div>
              </div>
              
              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-indigo-100">
                  <div className="flex items-center mb-3">
                    <Clock className="w-5 h-5 text-indigo-600 mr-2" />
                    <span className="font-semibold text-gray-800">Durée</span>
                  </div>
                  <div className="text-2xl font-bold text-indigo-700">3 jours</div>
                  <div className="text-sm text-gray-500">congrès annuel</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-800">Participants</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-700">1 200</div>
                  <div className="text-sm text-gray-500">agents & partenaires</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center mb-3">
                    <Settings className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="font-semibold text-gray-800">Solution</span>
                  </div>
                  <div className="text-sm font-semibold text-purple-700">Multi-stations</div>
                  <div className="text-sm text-gray-500">+ photomosaïque</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-green-100">
                  <div className="flex items-center mb-3">
                    <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-semibold text-gray-800">Investissement</span>
                  </div>
                  <div className="text-2xl font-bold text-green-700">12 000€</div>
                  <div className="text-sm text-gray-500">solution complète</div>
                </div>
              </div>
            </div>
            
            <p>
              Notre deuxième cas d'étude concerne AssurGroup, une compagnie d'assurance qui a déployé plusieurs photobooths lors de son congrès annuel réunissant ses agents et partenaires.
            </p>
            
            <div className="my-8">
              <Image 
                src="/blog/photomosaic-example.jpg" 
                alt="Exemple de photomosaïque corporate" 
                width={800} 
                height={400} 
                className="rounded-lg w-full h-auto"
              />
              <p className="text-sm text-gray-500 text-center mt-2">
                Exemple de photomosaïque collaborative réalisée pendant l'événement
              </p>
            </div>
            
            {/* Enhanced Results Section */}
            <div className="bg-white rounded-2xl p-8 my-12 border border-indigo-200">
              <h3 className="text-2xl font-bold text-indigo-800 mb-8 flex items-center">
                <BarChart3 className="w-8 h-8 text-indigo-600 mr-3" />
                Résultats obtenus
              </h3>
              
              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-700 mb-1">2 845</div>
                  <div className="text-sm font-semibold text-gray-700">Photos prises</div>
                  <div className="text-xs text-blue-600 mt-1">Sur 3 jours</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Share2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-purple-700 mb-1">922</div>
                  <div className="text-sm font-semibold text-gray-700">Mentions sociales</div>
                  <div className="text-xs text-purple-600 mt-1">+257% vs année précédente</div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-green-700 mb-1">18.5</div>
                  <div className="text-sm font-semibold text-gray-700">Minutes/stand</div>
                  <div className="text-xs text-green-600 mt-1">+45% durée visite</div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-700 mb-1">8.7/10</div>
                  <div className="text-sm font-semibold text-gray-700">Satisfaction</div>
                  <div className="text-xs text-orange-600 mt-1">+1.3 points vs 2023</div>
                </div>
              </div>
              
              {/* Impact Analysis */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                <h4 className="font-bold text-lg text-indigo-800 mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 text-indigo-600 mr-2" />
                  Impact Indirect Mesurable
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-700">+28%</div>
                    <div className="text-sm text-gray-700">Démonstrations produits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-700">+17%</div>
                    <div className="text-sm text-gray-700">Prises de RDV post-événement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700">12%</div>
                    <div className="text-sm text-gray-700">Taux conversion contacts/contrats</div>
                  </div>
                </div>
              </div>
            </div>
            
            <p>
              Le plus intéressant dans ce cas d'étude est l'impact indirect: les stands équipés de photobooths ont enregistré une augmentation de 45% du temps de visite, ce qui a conduit à 28% de démonstrations de produits supplémentaires et une progression de 17% des prises de rendez-vous post-événement.
            </p>
            
            {/* ROI Analysis for AssurGroup */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-100 rounded-xl p-8 my-10 border border-emerald-200">
              <div className="flex items-center mb-6">
                <Calculator className="w-8 h-8 text-emerald-600 mr-3" />
                <h4 className="text-xl font-bold text-emerald-800">Analyse du ROI - AssurGroup</h4>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-4">Calcul des retombées (6 mois) :</h5>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-emerald-100">
                      <span className="text-gray-700">Nouveaux contrats signés</span>
                      <span className="font-bold text-emerald-700">126 contrats</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-emerald-100">
                      <span className="text-gray-700">Valeur moyenne par contrat</span>
                      <span className="font-bold text-emerald-700">5 500€</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-emerald-100">
                      <span className="text-gray-700">Commission moyenne</span>
                      <span className="font-bold text-emerald-700">18%</span>
                    </div>
                    <div className="border-t border-emerald-200 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">Revenus générés</span>
                        <span className="text-xl font-bold text-emerald-700">125 160€</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center items-center">
                  <div className="text-center mb-6">
                    <div className="text-6xl font-bold text-emerald-700 mb-3">843%</div>
                    <div className="text-lg font-semibold text-emerald-800 mb-2">Retour sur investissement</div>
                    <div className="text-gray-600">Plus de 8,4× l'investissement initial</div>
                  </div>
                  
                  <div className="bg-white rounded-xl border border-emerald-200 p-6 text-center">
                    <div className="text-sm text-gray-600 mb-2">Impact supplémentaire</div>
                    <div className="text-lg font-semibold text-emerald-700 mb-1">Satisfaction agents</div>
                    <div className="text-sm text-gray-600">& fidélisation non quantifiée</div>
                  </div>
                </div>
              </div>
            </div>
            
            <h2>Étude de cas #3 : Salon professionnel - MediTech</h2>
            
            {/* Case Study 3 - Enhanced */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-10 my-12 border border-teal-200">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-full mr-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-teal-800">MediTech - PME Secteur Médical</h3>
                  <p className="text-teal-600">Salon professionnel avec photobooth IA et lead capture intégré</p>
                </div>
              </div>
              
              {/* Configuration & Results Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Configuration */}
                <div className="bg-white rounded-xl p-8 border border-teal-100">
                  <h4 className="text-xl font-bold text-teal-800 mb-6 flex items-center">
                    <Settings className="w-6 h-6 text-teal-600 mr-2" />
                    Configuration de l'expérience
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Stand de 25m²</div>
                        <div className="text-sm text-gray-600">Photobooth IA en point central d'attraction</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Expérience personnalisée</div>
                        <div className="text-sm text-gray-600">Photo liée à leur innovation médicale</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Lead capture intégré</div>
                        <div className="text-sm text-gray-600">Email requis pour recevoir la photo</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 mt-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-800">Investissement total</span>
                        <span className="text-2xl font-bold text-green-700">4 800€</span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">3 jours de salon professionnel</div>
                    </div>
                  </div>
                </div>
                
                {/* Results */}
                <div className="bg-white rounded-xl p-8 border border-cyan-100">
                  <h4 className="text-xl font-bold text-cyan-800 mb-6 flex items-center">
                    <BarChart3 className="w-6 h-6 text-cyan-600 mr-2" />
                    Résultats clés
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-800">Visiteurs uniques</div>
                        <div className="text-sm text-gray-600">sur le stand</div>
                      </div>
                      <div className="text-2xl font-bold text-teal-700">634</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-800">Participants photobooth</div>
                        <div className="text-sm text-gray-600">65% taux de conversion</div>
                      </div>
                      <div className="text-2xl font-bold text-cyan-700">412</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-800">Leads qualifiés</div>
                        <div className="text-sm text-gray-600">collectés avec emails</div>
                      </div>
                      <div className="text-2xl font-bold text-blue-700">387</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-800">RDV commerciaux</div>
                        <div className="text-sm text-gray-600">fixés sur salon</div>
                      </div>
                      <div className="text-2xl font-bold text-purple-700">38</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-700">+15%</div>
                        <div className="text-sm font-semibold text-gray-700">Trafic vs salons précédents</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p>
              Notre troisième exemple concerne une PME du secteur médical, MediTech, qui a utilisé un photobooth comme outil d'attraction et de génération de leads lors d'un salon professionnel important.
            </p>
            
            <p>
              Le point crucial ici est que MediTech a réussi à transformer une activité souvent perçue comme purement divertissante (prendre des photos) en un puissant outil de génération de leads. Contrairement aux méthodes traditionnelles de collecte de contacts sur les salons (souvent perçues comme intrusives), le photobooth a créé une dynamique positive où les visiteurs partageaient volontairement leurs coordonnées.
            </p>
            
            <p>
              Le point remarquable de ce cas d'étude est l'efficacité du photobooth comme outil de lead generation dans un environnement B2B très compétitif. Le taux de conversion visiteur-lead de 61% est exceptionnellement élevé pour ce type d'événement.
            </p>
            
            {/* ROI Analysis for MediTech */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-100 rounded-xl p-8 my-10 border border-teal-200">
              <div className="flex items-center mb-6">
                <PieChart className="w-8 h-8 text-teal-600 mr-3" />
                <h4 className="text-xl font-bold text-teal-800">Analyse du ROI - MediTech (12 mois)</h4>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-4">Valorisation des résultats :</h5>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-teal-100">
                      <span className="text-gray-700">Leads qualifiés (387 × 250€)</span>
                      <span className="font-bold text-teal-700">96 750€</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-teal-100">
                      <span className="text-gray-700">Conversion en clients (8%)</span>
                      <span className="font-bold text-teal-700">31 clients</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-teal-100">
                      <span className="text-gray-700">Valeur client moyenne</span>
                      <span className="font-bold text-teal-700">3 200€</span>
                    </div>
                    <div className="border-t border-teal-200 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">Chiffre d'affaires généré</span>
                        <span className="text-xl font-bold text-teal-700">99 200€</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center items-center">
                  <div className="text-center mb-6">
                    <div className="text-6xl font-bold text-teal-700 mb-3">402%</div>
                    <div className="text-lg font-semibold text-teal-800 mb-2">Retour sur investissement</div>
                    <div className="text-gray-600">Plus de 4× l'investissement initial</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg border border-teal-200 p-4 text-center">
                      <div className="text-2xl font-bold text-teal-700">38</div>
                      <div className="text-sm text-gray-600">RDV commerciaux</div>
                    </div>
                    <div className="bg-white rounded-lg border border-cyan-200 p-4 text-center">
                      <div className="text-2xl font-bold text-cyan-700">+15%</div>
                      <div className="text-sm text-gray-600">Trafic stand</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-teal-100 rounded-lg border border-teal-300">
                <div className="flex items-center mb-2">
                  <Target className="w-5 h-5 text-teal-600 mr-2" />
                  <span className="font-semibold text-teal-800">Note importante</span>
                </div>
                <p className="text-sm text-teal-700">Ces calculs n'incluent pas la valeur à long terme des nouveaux clients acquis, ni l'impact sur la notoriété de marque dans le secteur médical.</p>
              </div>
            </div>
            
            <h2>Facteurs clés de succès pour maximiser le ROI</h2>
            
            <p>
              L'analyse de ces études de cas, ainsi que des dizaines d'autres événements, nous a permis d'identifier les facteurs déterminants qui maximisent le retour sur investissement d'un photobooth lors d'événements corporate :
            </p>
            
            {/* Success Factors - Enhanced */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
              <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl p-8 border border-violet-200">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-violet-600 to-purple-700 rounded-full mr-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-violet-800">1. Intégration stratégique à l'événement</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Les photobooths qui s'inscrivent naturellement dans le thème et les objectifs de l'événement génèrent de meilleurs résultats.
                </p>
                <div className="bg-white rounded-xl p-4 border border-violet-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-violet-700">2.3×</div>
                    <div className="text-sm text-gray-600">Plus d'engagement vs photobooths génériques</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl p-8 border border-indigo-200">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-full mr-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-800">2. Personnalisation poussée</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Les solutions entièrement personnalisées aux couleurs et à l'identité de la marque obtiennent de meilleurs taux de partage.
                </p>
                <div className="bg-white rounded-xl p-4 border border-indigo-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-700">+68%</div>
                    <div className="text-sm text-gray-600">Taux de partage sur réseaux sociaux</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-8 border border-teal-200">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-full mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-800">3. Mécanisme de collecte de données</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  L'intégration d'un système de collecte de coordonnées optimisé et non intrusif augmente la conversion.
                </p>
                <div className="bg-white rounded-xl p-4 border border-teal-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-700">+82%</div>
                    <div className="text-sm text-gray-600">Conversion visiteurs en leads qualifiés</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-8 border border-emerald-200">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-emerald-600 to-green-700 rounded-full mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800">4. Formation du personnel</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Les photobooths animés par du personnel formé qui engage la conversation génèrent plus de leads commerciaux.
                </p>
                <div className="bg-white rounded-xl p-4 border border-emerald-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-700">+40%</div>
                    <div className="text-sm text-gray-600">Leads commerciaux supplémentaires</div>
                  </div>
                </div>
              </div>
            </div>
            
            <h2>Comment calculer le ROI potentiel pour votre événement</h2>
            
            <p>
              Pour estimer le retour sur investissement potentiel d'un photobooth pour votre propre événement corporate, nous avons développé une méthode de calcul simplifiée basée sur nos études de cas :
            </p>
            
            <div className="bg-violet-50 rounded-xl p-8 my-8">
              <h3 className="font-bold text-xl mb-5">Formule simplifiée de calcul du ROI</h3>
              
              <div className="mb-6">
                <div className="font-mono bg-white p-4 rounded-lg shadow-sm border border-violet-100">
                  ROI = [(P × E × S × V) + (P × E × L × C × VL)] / I
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <p><strong>P</strong> = Nombre de participants à l'événement</p>
                <p><strong>E</strong> = Taux d'engagement avec le photobooth (généralement entre 0,5 et 0,9)</p>
                <p><strong>S</strong> = Taux de partage sur réseaux sociaux (généralement entre 0,4 et 0,8)</p>
                <p><strong>V</strong> = Valeur média estimée par partage (entre 5€ et 20€)</p>
                <p><strong>L</strong> = Taux de conversion en leads (généralement entre 0,7 et 0,95)</p>
                <p><strong>C</strong> = Taux de conversion des leads en clients (spécifique à votre activité)</p>
                <p><strong>VL</strong> = Valeur moyenne d'un client</p>
                <p><strong>I</strong> = Investissement total photobooth</p>
              </div>
              
              <div className="mt-6 text-sm text-gray-600 italic">
                Note : Cette formule est simplifiée et ne prend pas en compte certains bénéfices indirects comme l'amélioration de l'image de marque, la satisfaction des participants ou les effets à long terme.
              </div>
            </div>
            
            <h2>Conclusion : Le photobooth comme investissement stratégique</h2>
            
            {/* Enhanced Conclusion Section */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-100 rounded-2xl p-10 my-12 border border-violet-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-violet-800 mb-4">Conclusion : Un investissement ROI prouvé</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-violet-700 mb-2">418% - 843%</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Fourchette de ROI observée</div>
                  <div className="text-xs text-gray-500">Retour sur investissement moyen</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-700 mb-2">4× - 8×</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Multiplicateur d'investissement</div>
                  <div className="text-xs text-gray-500">Revenus générés vs coûts</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-700 mb-2">80%+</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Taux de satisfaction</div>
                  <div className="text-xs text-gray-500">Participants aux événements</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-violet-100">
                <h3 className="font-bold text-lg text-violet-800 mb-4 flex items-center">
                  <Award className="w-6 h-6 text-violet-600 mr-2" />
                  Facteurs clés de succès identifiés
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Intégration stratégique à l'événement</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Personnalisation poussée de l'expérience</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Collecte de données optimisée</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Formation du personnel d'animation</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p>
              Les études de cas présentées démontrent clairement que, loin d'être un simple poste de dépense divertissant, un photobooth bien conçu et stratégiquement intégré constitue un véritable investissement marketing avec un retour mesurable. 
            </p>
            
            <p>
              À l'ère du marketing expérientiel et du contenu généré par les utilisateurs, le photobooth représente un point de contact unique qui transforme les participants en ambassadeurs de marque, tout en fournissant des données précieuses pour vos équipes commerciales et marketing.
            </p>
            
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-violet-600 to-indigo-700 text-white rounded-2xl p-8 my-12">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Prêt à maximiser le ROI de votre prochain événement ?</h3>
                <p className="text-violet-100 mb-6">
                  Obtenez une estimation personnalisée du ROI potentiel d'un photobooth pour votre événement corporate, basée sur vos objectifs spécifiques et votre secteur d'activité.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-8 py-3 bg-white text-violet-700 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculer mon ROI
                  </Link>
                  <Link 
                    href="/solutions" 
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-violet-700 transition-colors"
                  >
                    Découvrir nos solutions
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
