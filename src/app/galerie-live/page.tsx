import Image from 'next/image';
import Link from 'next/link';
import { Monitor, Camera, Smartphone, Grid, Zap, Layout, Shield, RefreshCw, Share2, ArrowRight, Eye, Sparkles, Users, BarChart } from 'lucide-react';

export default function GalerieLive() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Galerie Live
              </span>
              <span className="text-gray-800"> : Le mur photo interactif</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Affichez en temps réel toutes les photos de votre événement sur un écran dynamique et captivant qui évolue en direct.
            </p>
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/galerie-live/gallery-hero.jpg"
                alt="Galerie Live en action lors d'un événement"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                    Mise à jour en temps réel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Galerie Live Interactive */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.3),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm font-medium mb-8 backdrop-blur-sm border border-purple-500/30">
                <Monitor className="w-5 h-5 mr-3" />
                Galerie Live Interactive
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Créez un <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">mur photo vivant</span> en temps réel
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transformez votre événement avec un affichage dynamique qui capte l'attention et 
                encourage la participation de tous vos invités.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Interface Galerie */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">Interface Galerie Live</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/80 rounded-xl p-6 space-y-4">
                    {/* Simulation d'interface galerie */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="aspect-square bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-lg border border-purple-400/50 overflow-hidden">
                        <Image 
                          src="/coupe-cheveux/pixie001.jpg" 
                          alt="Photo galerie live" 
                          width={120} 
                          height={120} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-lg border border-purple-400/50 overflow-hidden">
                        <Image 
                          src="/coupe-cheveux/web001.jpg" 
                          alt="Photo galerie live" 
                          width={120} 
                          height={120} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-lg border border-purple-400/50 overflow-hidden">
                        <Image 
                          src="/coupe-cheveux/a_line_bob_hair_style.jpg" 
                          alt="Photo galerie live" 
                          width={120} 
                          height={120} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-lg border border-purple-400/50 overflow-hidden">
                        <Image 
                          src="/coupe-cheveux/bun_hair_style.jpg" 
                          alt="Photo galerie live" 
                          width={120} 
                          height={120} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-lg border border-purple-400/50 overflow-hidden">
                        <Image 
                          src="/coupe-cheveux/pixie003.jpg" 
                          alt="Photo galerie live" 
                          width={120} 
                          height={120} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-lg border border-purple-400/50 overflow-hidden">
                        <Image 
                          src="/coupe-cheveux/web005.jpg" 
                          alt="Photo galerie live" 
                          width={120} 
                          height={120} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg border border-green-500/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-white font-medium">Mise à jour en temps réel</span>
                      </div>
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">LIVE</div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg border border-blue-500/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                          <Grid className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">Sources connectées: 4</span>
                      </div>
                      <div className="text-blue-300 text-sm">Photobooth • App • Instagram • Facebook</div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-lg border border-violet-500/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Shield className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">Modération active</span>
                      </div>
                      <div className="bg-violet-500 text-white px-3 py-1 rounded-full text-xs font-bold">AUTO</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
                      ⚡ Setup: 15 minutes
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
                      🖥️ Affichage: Instantané
                    </div>
                  </div>
                </div>
              </div>

              {/* Avantages spécifiques */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Animation événementielle</h4>
                      <p className="text-gray-300">
                        Créez un point focal captivant qui maintient l'énergie de votre événement et encourage naturellement les interactions entre invités.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Engagement collectif</h4>
                      <p className="text-gray-300">
                        Transformez l'activité photo individuelle en expérience partagée où chaque participant contribue à l'ambiance générale de l'événement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BarChart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Valeur ajoutée premium</h4>
                      <p className="text-gray-300">
                        Différenciez votre événement avec une technologie impressionnante qui marque les esprits et renforce l'image professionnelle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/20 mb-16">
              <h3 className="text-3xl font-bold text-white text-center mb-8">
                Impact mesurable sur l'engagement
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">+320%</div>
                  <p className="text-gray-300 text-sm">Participation photo</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">87%</div>
                  <p className="text-gray-300 text-sm">Temps d'attention</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">2.8 min</div>
                  <p className="text-gray-300 text-sm">Temps moyen d'observation</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">x5</div>
                  <p className="text-gray-300 text-sm">Mémorisation événement</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Prêt à créer un <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">spectacle visuel</span> ?
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Transformez votre événement en expérience immersive avec une galerie qui évolue en temps réel.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg group"
                    >
                      <span>Installer ma galerie live</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/demo"
                      className="inline-flex items-center px-8 py-4 rounded-2xl bg-transparent border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-lg"
                    >
                      <Eye className="mr-2 w-5 h-5" />
                      Voir une galerie en action
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Qu'est-ce que la Galerie Live ?</h2>
              <p className="text-lg text-gray-700 mb-6">
                La Galerie Live est un mur photo digital qui affiche en temps réel toutes les photos prises pendant votre événement, qu'elles proviennent de nos photobooths, de l'expérience smartphone ou des publications sur les réseaux sociaux avec votre hashtag.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Cette expérience visuelle dynamique crée un point focal captivant qui encourage la participation et renforce l'engagement de vos invités tout au long de l'événement.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Affichage sur grands écrans ou via projection",
                  "Mise à jour automatique en temps réel",
                  "Animations et transitions personnalisables",
                  "Modération de contenu intégrée"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact"     className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander un devis
              </Link>
            </div>
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/photolive/festival.jpg"
                  alt="Galerie Live lors d'un festival"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-medium">Galerie Live en action lors d'un festival</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Comment fonctionne la Galerie Live ?</h2>
            <p className="text-lg text-gray-700">
              Une technologie simple mais puissante qui connecte tous les moments de votre événement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="w-12 h-12 text-violet-600" />,
                title: "Capturez",
                description: "Les photos sont prises via nos photobooths ou les smartphones des invités."
              },
              {
                icon: <Zap className="w-12 h-12 text-violet-600" />,
                title: "Collectez",
                description: "Notre système collecte instantanément chaque nouvelle image créée."
              },
              {
                icon: <Grid className="w-12 h-12 text-violet-600" />,
                title: "Affichez",
                description: "Les photos apparaissent en temps réel sur les écrans avec des animations élégantes."
              },
              {
                icon: <RefreshCw className="w-12 h-12 text-violet-600" />,
                title: "Actualisez",
                description: "Le contenu évolue constamment, maintenant l'attention des invités tout au long de l'événement."
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
        </div>
      </section>

      {/* Options d'affichage */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Options d'affichage flexibles</h2>
            <p className="text-lg text-gray-700">
              Adaptez la galerie à votre espace et à vos besoins spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mur d'écrans",
                description: "Composition spectaculaire de plusieurs écrans pour un impact visuel maximal, idéal pour les grands événements.",
                image: "/galerie-live/display-wall.jpg"
              },
              {
                title: "Écran géant",
                description: "Affichage sur un seul écran de grande taille, parfait pour attirer l'attention dans un espace ouvert.",
                image: "/galerie-live/display-large.jpg"
              },
              {
                title: "Projection",
                description: "Solution économique pour les grands espaces, projetant la galerie sur un mur ou un écran de projection.",
                image: "/galerie-live/display-projection.jpg"
              },
              {
                title: "Colonnes digitales",
                description: "Écrans verticaux élégants qui s'intègrent parfaitement dans la décoration de votre événement.",
                image: "/galerie-live/display-columns.jpg"
              },
              {
                title: "Totem interactif",
                description: "Borne tactile permettant aux invités d'explorer la galerie et d'interagir avec les photos.",
                image: "/galerie-live/display-totem.jpg"
              },
              {
                title: "Diffusion multi-sites",
                description: "Synchronisation de la galerie sur plusieurs écrans répartis dans différentes zones de l'événement.",
                image: "/galerie-live/display-multi.jpg"
              }
            ].map((option, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Les avantages de la Galerie Live</h2>
            <p className="text-lg text-gray-700">
              Une solution qui transforme des moments individuels en expérience collective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Monitor className="w-10 h-10 text-violet-600" />,
                title: "Point focal visuel",
                description: "Crée un centre d'attention qui rassemble les participants et stimule les conversations."
              },
              {
                icon: <Camera className="w-10 h-10 text-violet-600" />,
                title: "Incitation à participer",
                description: "Encourage les invités à prendre plus de photos pour voir leurs créations apparaître sur le mur."
              },
              {
                icon: <Smartphone className="w-10 h-10 text-violet-600" />,
                title: "Intégration multiplateforme",
                description: "Collecte les photos de toutes les sources : photobooths, smartphones, réseaux sociaux."
              },
              {
                icon: <Layout className="w-10 h-10 text-violet-600" />,
                title: "Personnalisation visuelle",
                description: "Design et animations adaptés à votre charte graphique et au thème de l'événement."
              },
              {
                icon: <Shield className="w-10 h-10 text-violet-600" />,
                title: "Modération de contenu",
                description: "Système de filtrage automatique et modération manuelle pour un contenu approprié."
              },
              {
                icon: <Grid className="w-10 h-10 text-violet-600" />,
                title: "Animation sans effort",
                description: "Crée une animation visuelle dynamique sans nécessiter d'animateur dédié."
              }
            ].map((advantage, index) => (
              <div key={index} className="card bg-white p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center mr-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold">{advantage.title}</h3>
                </div>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre événement avec une galerie dynamique ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Créez un point focal visuel qui rassemble vos invités et rend votre événement inoubliable.
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

    {/* FAQ Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
      <p className="text-lg text-gray-700">
        Tout ce que vous devez savoir sur notre service de Galerie Live.
      </p>
    </div>

    <div className="max-w-3xl mx-auto space-y-6">
      {[
        {
          question: "Comment installer la Galerie Live sur mon événement ?",
          answer:
            "L'installation est simple et rapide. Notre équipe s'occupe de toute la configuration technique, incluant la mise en place des écrans, la connexion au réseau et la synchronisation avec les sources d'images (photobooths, smartphones, hashtags). Nous arrivons généralement 2-3 heures avant le début de l'événement pour tout installer et tester.",
        },
        {
          question: "Quels équipements sont nécessaires pour la Galerie Live ?",
          answer:
            "Nous fournissons tous les équipements nécessaires : écrans, ordinateurs, logiciels et supports. Vous n'avez besoin que d'une alimentation électrique standard et, idéalement, d'une connexion internet (Wi-Fi ou filaire). Pour les grands espaces, nous pouvons aussi utiliser votre système de projection existant si disponible.",
        },
        {
          question: "Est-il possible de personnaliser l'apparence de la galerie ?",
          answer:
            "Absolument ! La galerie est entièrement personnalisable aux couleurs de votre marque ou au thème de votre événement. Nous pouvons adapter les animations, transitions, mises en page, ainsi que les éléments graphiques comme votre logo, slogan ou motifs spécifiques.",
        },
        {
          question: "Comment les invités peuvent-ils contribuer à la galerie ?",
          answer:
            "Les invités peuvent contribuer de plusieurs façons : en utilisant nos photobooths sur place, en prenant des photos avec notre application web sur leur smartphone, ou en publiant sur les réseaux sociaux avec votre hashtag dédié. Toutes ces sources sont automatiquement collectées et affichées en temps réel.",
        },
        {
          question: "Quelle est la capacité maximale de photos que la galerie peut afficher ?",
          answer:
            "Notre galerie peut gérer un nombre illimité de photos. Que votre événement génère 100 ou 10 000 images, notre système les gère efficacement. Les algorithmes intelligents assurent une rotation équilibrée des nouvelles et anciennes photos pour maintenir l'intérêt tout au long de l'événement.",
        },
        {
          question: "La Galerie Live fonctionne-t-elle sans connexion Internet ?",
          answer:
            "Oui, nous proposons un mode hors-ligne où la galerie peut fonctionner avec les sources locales comme nos photobooths. Cependant, pour collecter les photos depuis les smartphones ou les réseaux sociaux, une connexion internet est nécessaire. Nous pouvons discuter de solutions alternatives selon les contraintes de votre lieu.",
        },
        {
          question: "Peut-on modérer le contenu avant qu'il apparaisse sur les écrans ?",
          answer:
            "Oui, nous proposons plusieurs niveaux de modération : une IA qui filtre automatiquement les contenus inappropriés, une interface de pré-modération manuelle pour votre équipe, et même un service de modération en direct par nos opérateurs. Vous gardez un contrôle total sur ce qui est affiché.",
        },
        {
          question: "Est-il possible d'intégrer la Galerie Live à nos réseaux sociaux ?",
          answer:
            "Tout à fait. Notre solution s'intègre parfaitement avec les principales plateformes sociales. Nous pouvons collecter le contenu depuis vos hashtags Instagram, Twitter ou TikTok, et également permettre aux invités de partager directement leur expérience sur leurs réseaux, augmentant ainsi la visibilité de votre événement.",
        },
      ].map((faq, index) => (
        <div
          key={index}
          className="card bg-white shadow-md rounded-xl overflow-hidden"
        >
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
}
