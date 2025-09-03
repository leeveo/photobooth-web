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
                src="/karaoke/retro-neon.png"
                alt="Karaoké Box en action"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                    Interface Rétro Néon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Performance Vocale IA */}
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
                <Mic className="w-5 h-5 mr-3" />
                Expérience Karaoké Premium
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Chantez avec le <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">plus vaste catalogue</span> musical
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Plus de 150 titres à votre disposition, des enregistrements HD automatiques 
                et un partage instantané pour faire le buzz sur les réseaux sociaux.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Interface Karaoké IA */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">Studio Karaoké Premium</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/80 rounded-xl p-6 space-y-4">
                    {/* Simulation d'interface karaoké */}
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-lg border border-pink-500/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                          <Music className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">Catalogue: 150+ titres</span>
                      </div>
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">LIVE</div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg border border-blue-500/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                          <Video className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">Enregistrement HD</span>
                      </div>
                      <div className="text-blue-300 text-sm">Qualité studio</div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-lg border border-violet-500/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Share2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">Partage instantané</span>
                      </div>
                      <div className="bg-violet-500 text-white px-3 py-1 rounded-full text-xs font-bold">EMAIL</div>
                    </div>

                    {/* Visualiseur de catalogue */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="text-white text-sm font-medium">Titres populaires:</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">🎵 Les derniers hits</span>
                          <span className="text-purple-400 text-xs">2025</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">🎤 Classiques français</span>
                          <span className="text-blue-400 text-xs">50+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">🌍 Hits internationaux</span>
                          <span className="text-green-400 text-xs">100+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
                      � Catalogue: Large
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
                      📧 Envoi: Instantané
                    </div>
                  </div>
                </div>
              </div>

              {/* Avantages Karaoké */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Catalogue immense</h4>
                      <p className="text-gray-300">
                        Plus de 150 titres disponibles, des derniers hits aux classiques intemporels, mis à jour régulièrement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Share2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Partage viral instantané</h4>
                      <p className="text-gray-300">
                        Envoi automatique par email et partage direct sur les réseaux sociaux pour maximiser la viralité de vos performances.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Enregistrement HD</h4>
                      <p className="text-gray-300">
                        Capture vidéo en haute définition de vos performances avec un son de qualité professionnelle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/20 mb-16">
              <h3 className="text-3xl font-bold text-white text-center mb-8">
                Performance du Karaoké Box en chiffres
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">+20K</div>
                  <p className="text-gray-300 text-sm">Titres disponibles</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">98%</div>
                  <p className="text-gray-300 text-sm">Satisfaction utilisateur</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">10sec</div>
                  <p className="text-gray-300 text-sm">Envoi par email</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">+500%</div>
                  <p className="text-gray-300 text-sm">Engagement réseaux</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Prêt à faire vibrer vos <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">performances</span> ?
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Découvrez le karaoké nouvelle génération avec le plus vaste catalogue musical et un partage viral instantané.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg group"
                    >
                      Réserver maintenant
                      <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </Link>
                  </div>
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
                {["Catalogue de +500 titres", "Auto-tune IA intégré", "Effets vidéo temps réel", "Enregistrement HD"].map((feature, index) => (
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
                  src="/karaoke/tropical-party.png"
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
                Interface Tropical Party - Découvrez l'expérience Karaoké Box
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Templates et Styles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Interfaces personnalisables</h2>
            <p className="text-lg text-gray-700">
              Choisissez parmi nos nombreux templates d'interface pour adapter l'expérience karaoké à votre événement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Rétro Néon",
                description: "Ambiance années 80 avec des néons colorés et un style vintage pour des soirées nostalgiques.",
                image: "/karaoke/retro-neon.png",
                style: "Vintage"
              },
              {
                title: "Tropical Party",
                description: "Interface colorée et festive parfaite pour les événements estivaux et les fêtes tropicales.",
                image: "/karaoke/tropical-party.png",
                style: "Festif"
              },
              {
                title: "Template Élégant",
                description: "Design sophistiqué et épuré pour les événements d'entreprise et soirées formelles.",
                image: "/karaoke/template004.png",
                style: "Corporate"
              },
              {
                title: "Style Moderne",
                description: "Interface contemporaine avec des animations fluides et un design minimaliste.",
                image: "/karaoke/template005.png",
                style: "Moderne"
              },
              {
                title: "Thème Festif",
                description: "Couleurs vives et éléments graphiques dynamiques pour les célébrations et fêtes.",
                image: "/karaoke/template006.png",
                style: "Festif"
              },
              {
                title: "Design Premium",
                description: "Interface haut de gamme avec des effets visuels sophistiqués et une typographie élégante.",
                image: "/karaoke/template018.png",
                style: "Premium"
              },
              {
                title: "Style Artistique",
                description: "Design créatif avec des éléments graphiques uniques pour les événements culturels.",
                image: "/karaoke/template008.png",
                style: "Artistique"
              },
              {
                title: "Thème Classique",
                description: "Interface intemporelle adaptée à tous types d'événements avec un design universel.",
                image: "/karaoke/template009.png",
                style: "Classique"
              },
              {
                title: "Design Innovant",
                description: "Template futuriste avec des animations avancées et des effets visuels immersifs.",
                image: "/karaoke/template010.png",
                style: "Futuriste"
              }
            ].map((template, index) => (
              <div key={index} className="card bg-white overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-violet-600 text-white text-xs font-medium rounded-full">
                      {template.style}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{template.title}</h3>
                  <p className="text-gray-600 text-sm">{template.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Plus de 30 templates disponibles, entièrement personnalisables selon vos besoins
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 rounded-full bg-violet-600 text-white font-semibold shadow-lg hover:bg-violet-700 transition-colors text-lg"
            >
              Voir tous les templates
            </Link>
          </div>
        </div>
      </section>

      {/* Section Processus en 5 étapes */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <Mic className="w-4 h-4 mr-2" />
              Processus Karaoké
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-300">
              Un processus simple en 5 étapes pour une expérience karaoké parfaite à chaque fois
            </p>
          </div>

          {/* Timeline avec icônes centrées */}
          <div className="relative max-w-7xl mx-auto">
            {/* Ligne de timeline */}
            <div className="absolute top-0 left-8 md:left-0 md:top-1/2 w-1 md:w-full md:h-1 h-full md:h-auto bg-gradient-to-b md:bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 md:transform md:-translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {[
                {
                  step: "01",
                  title: "Choix du titre",
                  description: "Parcourez notre catalogue de 150+ titres et sélectionnez votre chanson préférée",
                  color: "from-purple-500 to-pink-500",
                  icon: <Music className="w-12 h-12" />
                },
                {
                  step: "02", 
                  title: "Préparation",
                  description: "Ajustez le micro, choisissez votre template d'interface et préparez-vous à briller",
                  color: "from-blue-500 to-purple-500",
                  icon: <Mic className="w-12 h-12" />
                },
                {
                  step: "03",
                  title: "Enregistrement",
                  description: "Chantez votre performance avec enregistrement HD automatique",
                  color: "from-green-500 to-blue-500",
                  icon: <Video className="w-12 h-12" />
                },
                {
                  step: "04",
                  title: "Review",
                  description: "Visionnez votre performance et validez avant l'envoi final",
                  color: "from-orange-500 to-red-500",
                  icon: <Monitor className="w-12 h-12" />
                },
                {
                  step: "05",
                  title: "Envoi par email",
                  description: "Recevez instantanément votre clip et partagez sur vos réseaux sociaux",
                  color: "from-pink-500 to-purple-500",
                  icon: <Share2 className="w-12 h-12" />
                }
              ].map((step, index) => (
                <div key={index} className="relative group">
                  {/* Card avec icône centrée */}
                  <div className="ml-12 md:ml-0 md:mt-12 group-hover:transform group-hover:-translate-y-2 transition-all duration-500">
                    {/* Container avec icône centrée */}
                    <div className="relative mb-6 mx-auto w-32 h-32 md:w-40 md:h-40">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 group-hover:scale-105`}></div>
                      <div className="relative h-full flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                      
                      {/* Badge étape */}
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                        {step.step}
                      </div>
                    </div>
                    
                    {/* Contenu textuel */}
                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed px-2">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA section moderne */}
          <div className="text-center mt-20">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/20">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Simple, Professionnel, <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Viral !</span>
                </h3>
                <p className="text-xl text-gray-300 mb-8">
                  Créez des <span className="text-purple-400 font-bold">performances mémorables</span> qui seront partagées et applaudies.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg group"
                >
                  <span>Découvrir nos Karaoké Box</span>
                  <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Link>
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
                title: "Enregistrement professionnel",
                description: "Système d'enregistrement haute qualité avec micros professionnels pour capturer chaque nuance de votre performance.",
                image: "/karaoke/template011.png"
              },
              {
                icon: <Music className="w-12 h-12 text-violet-600" />,
                title: "Catalogue musical varié",
                description: "Plus de 150 titres soigneusement sélectionnés, des classiques aux derniers hits, régulièrement mis à jour.",
                image: "/karaoke/template012.png"
              },
              {
                icon: <Video className="w-12 h-12 text-violet-600" />,
                title: "Interfaces immersives",
                description: "Écrans tactiles avec interfaces thématiques qui s'adaptent parfaitement à l'ambiance de votre événement.",
                image: "/karaoke/template013.png"
              },
              {
                icon: <Users className="w-12 h-12 text-violet-600" />,
                title: "Expérience collaborative",
                description: "Modes duo et groupe avec gestion intelligente des microphones pour des performances collectives mémorables.",
                image: "/karaoke/template014.png"
              },
              {
                icon: <Monitor className="w-12 h-12 text-violet-600" />,
                title: "Affichage personnalisable",
                description: "Écrans haute définition avec plus de 30 templates visuels pour une expérience sur mesure.",
                image: "/karaoke/template015.png"
              },
              {
                icon: <Share2 className="w-12 h-12 text-violet-600" />,
                title: "Partage instantané",
                description: "Envoi automatique par email et partage sur réseaux sociaux pour maximiser l'impact de vos performances.",
                image: "/karaoke/template017.png"
              }
            ].map((feature, index) => (
              <div key={index} className="card bg-white p-6 group hover:shadow-xl transition-all duration-300">
                <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
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
        "Notre catalogue compte plus de 500 titres régulièrement mis à jour. Via notre plateforme, vous pouvez présélectionner les chansons disponibles pour votre événement, créer des catégories thématiques, ou définir une playlist prioritaire. Vous pouvez également laisser l'accès au catalogue complet à vos invités.",
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
