import Image from 'next/image';
import Link from 'next/link';
import { Camera, FastForward, Clock, Share2, Users, Sparkles, Smartphone, Download, MessageSquare, Palette, ArrowRight, Eye, BarChart } from 'lucide-react';

export default function GifAnime() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Boomerang
              </span>
              <span className="text-gray-800"> : L'effet vidéo qui captive</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Créez des animations hypnotiques avec notre technologie Boomerang IA qui transforme vos moments en boucles vidéo captivantes et virales.
            </p>
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video relative">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/gif-anime/gif-hero.mp4" type="video/mp4" />
                  Votre navigateur ne prend pas en charge la vidéo HTML5.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                      Effet Boomerang IA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Boomerang Viral */}
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
                <FastForward className="w-5 h-5 mr-3" />
                Effet Boomerang Viral
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Créez des <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">boucles hypnotiques</span> qui captivent
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                L'effet Boomerang transforme chaque mouvement en animation captivante qui se répète à l'infini. 
                Parfait pour créer du contenu viral sur tous les réseaux sociaux.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Interface Boomerang */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">Studio Boomerang</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/80 rounded-xl p-6 space-y-4">
                    {/* Simulation de timeline boomerang */}
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-lg border border-pink-500/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                          <FastForward className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">Mode Boomerang Actif</span>
                      </div>
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">REC</div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg border border-blue-500/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                          <Clock className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">Durée: 3 secondes</span>
                      </div>
                      <div className="text-blue-300 text-sm">Aller • Retour</div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-lg border border-violet-500/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">Optimisation IA</span>
                      </div>
                      <div className="bg-violet-500 text-white px-3 py-1 rounded-full text-xs font-bold">AUTO</div>
                    </div>

                    {/* Timeline visuelle */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="text-white text-sm font-medium">Timeline:</div>
                        <div className="flex-1 flex space-x-1">
                          {[1,2,3,4,5,4,3,2,1].map((frame, index) => (
                            <div 
                              key={index} 
                              className={`h-2 rounded-full flex-1 ${
                                index === 4 ? 'bg-purple-400' : 'bg-gradient-to-r from-purple-500/60 to-blue-500/60'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div className="text-gray-400 text-xs text-center">∞ Boucle infinie</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
                      ⚡ Création: 5 secondes
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
                      🔄 Boucle: Parfaite
                    </div>
                  </div>
                </div>
              </div>

              {/* Avantages Boomerang */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Effet hypnotique</h4>
                      <p className="text-gray-300">
                        Le mouvement de va-et-vient capte immédiatement l'attention et maintient l'engagement plus longtemps qu'une vidéo classique.
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
                      <h4 className="text-xl font-bold text-white mb-2">Viral sur tous réseaux</h4>
                      <p className="text-gray-300">
                        Format idéal pour Instagram Stories, TikTok, Facebook et Twitter. Les Boomerangs génèrent 4x plus d'engagement que les photos statiques.
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
                      <h4 className="text-xl font-bold text-white mb-2">Optimisation IA</h4>
                      <p className="text-gray-300">
                        Notre IA analyse le mouvement pour créer la boucle parfaite, éliminant les saccades et optimisant la fluidité automatiquement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/20 mb-16">
              <h3 className="text-3xl font-bold text-white text-center mb-8">
                Performances Boomerang impressionnantes
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">+400%</div>
                  <p className="text-gray-300 text-sm">Engagement vs photo</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">95%</div>
                  <p className="text-gray-300 text-sm">Taux de partage</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">8.5 sec</div>
                  <p className="text-gray-300 text-sm">Temps d'attention moyen</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">x7</div>
                  <p className="text-gray-300 text-sm">Mémorisation</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Prêt à créer des <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Boomerangs captivants</span> ?
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Transformez vos événements en créant du contenu viral avec l'effet Boomerang optimisé par IA.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg group"
                    >
                      <span>Activer les Boomerangs</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/demo"
                      className="inline-flex items-center px-8 py-4 rounded-2xl bg-transparent border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-lg"
                    >
                      <Eye className="mr-2 w-5 h-5" />
                      Voir des Boomerangs en action
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
              <h2 className="text-3xl font-bold mb-6">Qu'est-ce que le Boomerang Photobooth ?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre solution Boomerang transforme le traditionnel photobooth en un studio de création de contenus hypnotiques. En capturant une courte séquence vidéo et en la retournant automatiquement, nous créons des boucles parfaites qui captivent l'attention.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Idéal pour tous types d'événements, l'effet Boomerang ajoute une dimension ludique et moderne à l'expérience de vos invités, tout en maximisant considérablement le potentiel viral sur les réseaux sociaux.
              </p>
              <div className="bg-violet-50 border border-violet-100 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <FastForward className="w-5 h-5 text-violet-600 mr-2" />
                  L'effet qui captive tous les regards
                </h3>
                <p className="text-gray-700">
                  Les Boomerangs hypnotisent par leur mouvement de va-et-vient infini. Ils sont statistiquement visionnés 4 fois plus longtemps et partagés 5 fois plus souvent que les vidéos traditionnelles sur les réseaux sociaux.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander un devis
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/gif-anime/exemple-gif-1.jpg"
                    alt="Exemple de Boomerang - Effet classique"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="p-3 bg-white">
                    <p className="font-medium text-center">Boomerang Classique</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md mt-8">
                  <Image
                    src="/gif-anime/exemple-gif-2.jpg"
                    alt="Exemple de Boomerang - Slow motion"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="p-3 bg-white">
                    <p className="font-medium text-center">Boomerang Slow Motion</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md col-span-2">
                  <Image
                    src="/gif-anime/exemple-gif-3.jpg"
                    alt="Exemple de Boomerang - Groupe"
                    width={600}
                    height={300}
                    className="w-full h-auto"
                  />
                  <div className="p-3 bg-white">
                    <p className="font-medium text-center">Boomerang de Groupe</p>
                  </div>
                </div>
              </div>
            </div>
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
              <FastForward className="w-4 h-4 mr-2" />
              Processus Boomerang
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-300">
              Un processus simple en 5 étapes pour créer des Boomerangs parfaits à chaque fois
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
                  title: "Positionnez-vous",
                  description: "Placez-vous face à la caméra et préparez votre mouvement",
                  color: "from-purple-500 to-pink-500",
                  icon: <Camera className="w-12 h-12" />
                },
                {
                  step: "02", 
                  title: "Action !",
                  description: "Effectuez votre mouvement pendant 3 secondes avec fluidité",
                  color: "from-blue-500 to-purple-500",
                  icon: <Clock className="w-12 h-12" />
                },
                {
                  step: "03",
                  title: "Génération IA",
                  description: "Notre IA analyse et optimise la séquence automatiquement",
                  color: "from-green-500 to-blue-500",
                  icon: <Sparkles className="w-12 h-12" />
                },
                {
                  step: "04",
                  title: "Effet Boomerang",
                  description: "Transformation en boucle hypnotique aller-retour",
                  color: "from-orange-500 to-red-500",
                  icon: <FastForward className="w-12 h-12" />
                },
                {
                  step: "05",
                  title: "Partagez",
                  description: "Diffusion instantanée sur tous vos réseaux sociaux",
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
                    <FastForward className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Simple, Hypnotique, <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Viral !</span>
                </h3>
                <p className="text-xl text-gray-300 mb-8">
                  Créez des <span className="text-purple-400 font-bold">Boomerangs captivants</span> qui marquent les esprits et génèrent de l'engagement.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg group"
                >
                  <span>Découvrir nos Boomerangs</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'animations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Différents modes d'animation</h2>
            <p className="text-lg text-gray-700">
              Variez l'expérience avec nos multiples modes d'animation personnalisables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Boucle standard",
                description: "Animation classique qui défile en boucle continue, parfaite pour capturer une séquence d'action.",
                image: "/gif-anime/mode-boucle.jpg"
              },
              {
                title: "Boomerang",
                description: "Les images défilent d'abord en avant puis en arrière, créant un effet de va-et-vient dynamique et amusant.",
                image: "/gif-anime/mode-boomerang.jpg"
              },
              {
                title: "Slow motion",
                description: "Ralentissement de l'animation pour un effet cinématique qui met en valeur les mouvements subtils.",
                image: "/gif-anime/mode-slowmotion.jpg"
              },
              {
                title: "Séquence photo",
                description: "Présentation de chaque photo individuellement avant de les assembler en animation fluide.",
                image: "/gif-anime/mode-sequence.jpg"
              },
              {
                title: "Stop motion",
                description: "Animation image par image avec un léger délai qui donne un effet artistique unique.",
                image: "/gif-anime/mode-stopmotion.jpg"
              },
              {
                title: "Personnalisé",
                description: "Mode d'animation sur mesure adapté à votre marque ou au thème de votre événement.",
                image: "/gif-anime/mode-personnalise.jpg"
              }
            ].map((mode, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={mode.image}
                    alt={`Mode ${mode.title}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <h3 className="text-white font-bold text-xl">{mode.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{mode.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Options de personnalisation */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Options de personnalisation</h2>
            <p className="text-lg text-gray-700">
              Adaptez l'expérience GIF à votre marque ou au thème de votre événement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                    <Palette className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Bordures et cadres</h3>
                    <p className="text-gray-700">
                      Ajoutez votre logo, les couleurs de votre marque ou des éléments graphiques personnalisés autour de chaque GIF.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Filtres et effets IA</h3>
                    <p className="text-gray-700">
                      Appliquez des filtres artistiques générés par IA ou des effets spéciaux qui s'adaptent au mouvement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Textes et overlays</h3>
                    <p className="text-gray-700">
                      Intégrez des textes personnalisés, dates d'événement, hashtags ou messages qui apparaissent de façon dynamique.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                    <FastForward className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Timing et transitions</h3>
                    <p className="text-gray-700">
                      Personnalisez la vitesse de l'animation, le nombre d'images capturées et les transitions entre chaque cliché.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/gif-anime/personnalisation.jpg"
                  alt="Options de personnalisation de GIF animé"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm uppercase font-bold">Entièrement personnalisable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'utilisation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Parfait pour tous types d'événements</h2>
            <p className="text-lg text-gray-700">
              Le Boomerang s'adapte à toutes les occasions pour créer des moments mémorables et viraux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expérience AR",
                description: "Intégrez des éléments de réalité augmentée dans vos Boomerangs pour une expérience immersive et futuriste qui fascine vos invités.",
                image: "/event/ar-experience.jpg"
              },
              {
                title: "Cartes à collectionner",
                description: "Créez des Boomerangs uniques qui deviennent de véritables cartes à collectionner numériques pour vos participants.",
                image: "/event/collectible-cards.jpg"
              },
              {
                title: "Mur de galerie",
                description: "Affichez vos Boomerangs en temps réel sur un mur digital pour créer une galerie vivante et interactive.",
                image: "/event/gallery-wall.jpg"
              },
              {
                title: "Lounge professionnel",
                description: "Proposez des Boomerangs de qualité studio dans un espace dédié avec éclairage professionnel et accessoires premium.",
                image: "/event/headshot-lounge.jpg"
              },
              {
                title: "Couverture magazine",
                description: "Transformez vos invités en stars avec des Boomerangs façon couverture de magazine personnalisée à votre événement.",
                image: "/event/magazine-cover.jpg"
              },
              {
                title: "Moments mascotte",
                description: "Créez des interactions amusantes entre vos invités et la mascotte de votre marque avec des Boomerangs mémorables.",
                image: "/event/mascot-moments.jpg"
              },
              {
                title: "Cadres surdimensionnés",
                description: "Utilisez des cadres géants comme décor pour des Boomerangs spectaculaires qui marquent les esprits.",
                image: "/event/oversized-frames.jpg"
              },
              {
                title: "Sondages persona",
                description: "Associez la création de Boomerangs à des questionnaires interactifs pour mieux connaître votre audience.",
                image: "/event/persona-surveys.jpg"
              },
              {
                title: "Mise en avant produit",
                description: "Intégrez vos produits dans des Boomerangs créatifs pour un marketing authentique et engageant.",
                image: "/event/product-spotlight.jpg"
              },
              {
                title: "Accessoires pro",
                description: "Équipez votre espace de props professionnels pour des Boomerangs de qualité supérieure et thématiques.",
                image: "/event/professional-props.jpg"
              },
              {
                title: "Événements saisonniers",
                description: "Adaptez vos Boomerangs aux saisons et fêtes avec des décors et filtres spécialement conçus pour l'occasion.",
                image: "/event/seasonal.jpg"
              },
              {
                title: "Mosaïque d'équipe",
                description: "Créez une mosaïque collective avec les Boomerangs de tous vos collaborateurs pour renforcer l'esprit d'équipe.",
                image: "/event/team-mosaic.jpg"
              }
            ].map((event, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <h3 className="text-white font-bold text-xl">{event.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{event.description}</p>
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
            <h2 className="text-3xl font-bold mb-4">Les avantages des GIFs animés</h2>
            <p className="text-lg text-gray-700">
              Pourquoi choisir notre solution GIF plutôt qu'un photobooth traditionnel ?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Share2 className="w-10 h-10 text-violet-600" />,
                title: "Potentiel viral démultiplié",
                description: "Les GIFs sont partagés 3 fois plus que les images statiques sur les réseaux sociaux, augmentant la visibilité de votre événement."
              },
              {
                icon: <Users className="w-10 h-10 text-violet-600" />,
                title: "Expérience collaborative",
                description: "Encourage les participants à interagir ensemble pour créer des séquences coordonnées et des moments spontanés."
              },
              {
                icon: <Sparkles className="w-10 h-10 text-violet-600" />,
                title: "Souvenirs dynamiques",
                description: "Capture l'énergie et l'ambiance d'un événement bien mieux qu'une photo fixe ne pourrait le faire."
              },
              {
                icon: <Smartphone className="w-10 h-10 text-violet-600" />,
                title: "Compatible multi-plateformes",
                description: "Les GIFs sont universellement pris en charge sur tous les appareils et réseaux sociaux, sans application spécifique nécessaire."
              },
              {
                icon: <Download className="w-10 h-10 text-violet-600" />,
                title: "Formats légers",
                description: "Poids de fichier réduit par rapport aux vidéos, facilitant le partage instantané même avec une connexion limitée."
              },
              {
                icon: <FastForward className="w-10 h-10 text-violet-600" />,
                title: "Répétition infinie",
                description: "L'effet de boucle capte l'attention plus longtemps qu'une image fixe ou même qu'une courte vidéo."
              }
            ].map((advantage, index) => (
              <div key={index} className="flex items-start">
                <div className="rounded-lg p-3 bg-white shadow-md mr-4 flex-shrink-0">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                  <p className="text-gray-700">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Ce que nos clients disent</h2>
            <p className="text-lg text-gray-700">
              Des événements transformés grâce à notre service GIF animé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Le GIF booth a été la star de notre mariage ! Nos invités ont adoré créer des animations et les partager immédiatement. Les moments capturés sont bien plus vivants que des photos traditionnelles.",
                author: "Camille et Thomas",
                role: "Mariage à Paris",
                image: "/gif-anime/testimonial-1.jpg"
              },
              {
                quote: "Pour notre stand au salon professionnel, le GIF animé a augmenté notre trafic de 60% par rapport à l'année précédente. Les visiteurs faisaient la queue pour vivre l'expérience et partager notre marque !",
                author: "Maxime Durand",
                role: "Directeur Marketing, TechSolutions",
                image: "/gif-anime/testimonial-2.jpg"
              },
              {
                quote: "L'option GIF animé a totalement transformé notre événement de lancement. Les animations étaient si populaires que notre hashtag est devenu trending sur Twitter pendant 3 heures.",
                author: "Laura Martin",
                role: "Événementiel, Fashion Brand",
                image: "/gif-anime/testimonial-3.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="card bg-white p-6">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-700">
              Tout ce que vous devez savoir sur notre service GIF animé.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Combien de personnes peuvent apparaître dans un GIF ?",
                answer: "Nos GIF booths sont conçus pour accueillir jusqu'à 6-8 personnes confortablement, selon la configuration choisie. Pour les groupes plus nombreux, nous proposons des solutions sur mesure avec un angle de capture plus large."
              },
              {
                question: "Quel est le délai pour recevoir les GIFs après la prise ?",
                answer: "Les GIFs sont générés instantanément et disponibles pour partage immédiat. Ils sont envoyés par email ou SMS en moins de 10 secondes, et peuvent être partagés directement sur les réseaux sociaux depuis notre interface."
              },
              {
                question: "Peut-on ajouter notre logo ou des éléments de marque ?",
                answer: "Absolument ! Tous nos forfaits incluent un niveau de personnalisation. Vous pouvez ajouter votre logo, slogan, hashtag ou tout autre élément de marque qui apparaîtra sur les GIFs générés."
              },
              {
                question: "Quelle est la qualité des GIFs produits ?",
                answer: "Nos GIFs sont générés en haute définition pour garantir une qualité optimale tout en maintenant un poids de fichier raisonnable pour le partage. La résolution standard est de 720p, mais nous proposons aussi des options en 1080p pour les forfaits premium."
              },
              {
                question: "Faut-il une connexion internet pour utiliser le service ?",
                answer: "Une connexion internet est recommandée pour les fonctionnalités de partage immédiat et l'envoi par email. Cependant, notre système peut fonctionner hors ligne et stocker les GIFs localement pour un partage ultérieur si nécessaire."
              }
            ].map((faq, index) => (
              <div key={index} className="card bg-white">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à animer votre prochain événement ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Offrez à vos invités une expérience mémorable et créez des souvenirs animés qui seront partagés encore et encore.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander un devis
              </Link>
              <Link
                href="/demo"
                className="inline-block px-8 py-3 rounded-full bg-transparent border-2 border-white text-white font-semibold shadow-lg hover:bg-white/10 transition-colors text-lg"
              >
                Voir une démonstration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
