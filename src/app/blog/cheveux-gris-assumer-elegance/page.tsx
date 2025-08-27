import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Sparkles, Brain, Eye, Smartphone, Wand2, Users, Camera, Zap, Settings, CheckCircle, Star, Award, Target, Palette, Globe, Heart, Scissors, Clock, ThumbsUp, Crown, Shield, Lightbulb, Gem, Moon, Sun } from 'lucide-react'

export const metadata = {
  title: 'Cheveux Gris : Assumer son Élégance Naturelle avec Style',
  description: 'Guide complet pour sublimer et entretenir vos cheveux gris. Découvrez comment transformer vos cheveux argentés en atout beauté avec nos conseils d\'expert et tendances 2025.',
  keywords: 'cheveux gris, cheveux argentés, beauté mature, transition cheveux gris, entretien cheveux blancs, élégance naturelle'
}

const relatedArticles = [
  {
    title: "Coiffures tendance pour seniors 2025",
    excerpt: "Découvrez les dernières tendances coiffure spécialement adaptées aux seniors pour un style moderne et élégant.",
    image: "/blog/coiffures-seniors-elegantes.jpg",
    slug: "coiffures-tendance-seniors"
  },
  {
    title: "Coupe pixie pour femmes seniors : Le guide complet",
    excerpt: "Tout savoir sur la coupe pixie adaptée aux femmes matures : techniques, entretien et styling.",
    image: "/coupe-cheveux/pixie_senior_hair_style.jpg",
    slug: "coupe-pixie-femmes-seniors"
  }
]

export default function CheveuxGrisAssumerElegance() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white rounded-full px-6 py-2 mb-6 shadow-sm">
              <Gem className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-600 font-medium">Beauté Naturelle</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cheveux Gris : 
              <span className="text-violet-600"> Assumer son Élégance Naturelle</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Découvrez comment transformer vos cheveux gris en véritable atout beauté. 
              Guide complet pour sublimer, entretenir et porter fièrement vos cheveux argentés avec style et confiance.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Lecture 10 min</span>
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2" />
                <span>Guide expert</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                <span>Confiance & Élégance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-8 border border-violet-100 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl p-3 mr-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-violet-800">La révolution du gris : De tabou à tendance</h2>
                  <p className="text-violet-600 font-medium">2025, l'année de l'acceptation et de la célébration</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Longtemps perçus comme un signe de vieillissement à cacher, les <span className="font-bold text-violet-700">cheveux gris</span> 
                  connaissent une véritable révolution en 2025. Stars, influenceuses et femmes de tous âges assument désormais 
                  leur <span className="font-bold text-violet-700">argenté naturel</span> avec fierté. Cette tendance représente bien plus 
                  qu'un simple choix esthétique : c'est un véritable mouvement d'acceptation de soi et de beauté authentique.
                </p>
              </div>

              {/* Revolution Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-violet-100 text-center">
                  <div className="text-3xl font-bold text-violet-700 mb-2">78%</div>
                  <p className="text-sm text-gray-600">Des femmes 45+ embrassent leurs cheveux gris</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-violet-100 text-center">
                  <div className="text-3xl font-bold text-violet-700 mb-2">+156%</div>
                  <p className="text-sm text-gray-600">Recherches "cheveux gris naturels" en 2024</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-violet-100 text-center">
                  <div className="text-3xl font-bold text-violet-700 mb-2">65%</div>
                  <p className="text-sm text-gray-600">Se sentent plus confiantes avec leurs gris</p>
                </div>
              </div>
            </div>

            {/* Chapter 1: Understanding Gray Hair */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-3 mr-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-800">1. Comprendre ses cheveux gris</h2>
                  <p className="text-blue-600 font-medium">La science derrière la beauté argentée</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Les <span className="font-bold text-blue-700">cheveux gris</span> ne sont pas simplement des cheveux colorés qui ont perdu leur teinte. 
                  Ils ont une structure unique qui leur confère des propriétés particulières. Comprendre ces spécificités 
                  est essentiel pour <span className="font-bold text-blue-700">les entretenir et les sublimer</span> correctement.
                </p>
              </div>

              {/* Hair Science Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-blue-100">
                  <h3 className="font-bold text-lg text-blue-800 mb-4 flex items-center">
                    <Lightbulb className="w-5 h-5 text-blue-600 mr-2" />
                    Pourquoi les cheveux deviennent-ils gris ?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Diminution de la mélanine</div>
                        <div className="text-sm text-gray-600">Les cellules productrices de pigments ralentissent</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Facteurs génétiques</div>
                        <div className="text-sm text-gray-600">L'hérédité détermine le moment et la vitesse</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Processus naturel</div>
                        <div className="text-sm text-gray-600">Évolution normale qui peut commencer dès 30 ans</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-blue-100">
                  <h3 className="font-bold text-lg text-blue-800 mb-4 flex items-center">
                    <Star className="w-5 h-5 text-blue-600 mr-2" />
                    Caractéristiques uniques du cheveu gris
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Gem className="w-4 h-4 text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Texture différente</div>
                        <div className="text-sm text-gray-600">Souvent plus épais et plus résistant</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Gem className="w-4 h-4 text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Tendance à la sécheresse</div>
                        <div className="text-sm text-gray-600">Production de sébum réduite avec l'âge</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Gem className="w-4 h-4 text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Reflets naturels</div>
                        <div className="text-sm text-gray-600">Nuances argentées, blanches ou nacrées</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gray Hair Types */}
              <div className="bg-white rounded-xl p-6 border border-blue-100">
                <h3 className="font-bold text-lg text-blue-800 mb-4 flex items-center">
                  <Palette className="w-5 h-5 text-blue-600 mr-2" />
                  Les différents types de gris
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Moon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">Gris argenté</div>
                    <div className="text-sm text-gray-600">Reflets métalliques brillants</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Gem className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">Blanc nacré</div>
                    <div className="text-sm text-gray-600">Nuances irisées délicates</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">Poivre et sel</div>
                    <div className="text-sm text-gray-600">Mélange harmonieux</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Crown className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">Platine naturel</div>
                    <div className="text-sm text-gray-600">Blond très clair sophistiqué</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapter 2: Transition Process */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-3 mr-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-emerald-800">2. Gérer la transition en douceur</h2>
                  <p className="text-emerald-600 font-medium">Stratégies pour un passage harmonieux</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  La <span className="font-bold text-emerald-700">transition vers les cheveux gris</span> peut sembler intimidante, 
                  mais avec les bonnes stratégies, elle devient un voyage passionnant vers l'acceptation de votre beauté naturelle. 
                  Il existe plusieurs approches pour <span className="font-bold text-emerald-700">faciliter cette transition</span> 
                  selon votre rythme et vos préférences.
                </p>
              </div>

              {/* Transition Strategies */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-emerald-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-emerald-800 mb-3">Transition rapide</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>• Coupe courte drastique</div>
                    <div>• Élimination totale de la couleur</div>
                    <div>• Résultat immédiat</div>
                    <div>• Pour les audacieuses</div>
                  </div>
                  <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                    <div className="text-xs text-emerald-700 font-semibold">Durée : 1-2 mois</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-emerald-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-emerald-800 mb-3">Transition progressive</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>• Mèches argentées graduelles</div>
                    <div>• Balayage dégressif</div>
                    <div>• Adaptation en douceur</div>
                    <div>• Confort psychologique</div>
                  </div>
                  <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                    <div className="text-xs text-emerald-700 font-semibold">Durée : 6-12 mois</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-emerald-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-emerald-800 mb-3">Transition naturelle</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>• Arrêt total des colorations</div>
                    <div>• Pousse naturelle</div>
                    <div>• Patience requise</div>
                    <div>• Résultat 100% authentique</div>
                  </div>
                  <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                    <div className="text-xs text-emerald-700 font-semibold">Durée : 12-18 mois</div>
                  </div>
                </div>
              </div>

              {/* Transition Timeline */}
              <div className="bg-white rounded-xl p-6 border border-emerald-100">
                <h3 className="font-bold text-lg text-emerald-800 mb-6 flex items-center">
                  <Clock className="w-5 h-5 text-emerald-600 mr-2" />
                  Chronologie d'une transition réussie
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Mois 1-2 : Préparation mentale</div>
                      <div className="text-sm text-gray-600">Acceptation du changement, recherche d'inspiration</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Mois 3-6 : Phase de transition</div>
                      <div className="text-sm text-gray-600">Premiers gris visibles, adaptation des soins</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-300 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Mois 6-12 : Affirmation du style</div>
                      <div className="text-sm text-gray-600">Coupe adaptée, routine optimisée</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-teal-500 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Mois 12+ : Épanouissement</div>
                      <div className="text-sm text-gray-600">Confiance retrouvée, style assumé</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapter 3: Care & Maintenance */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-100 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl p-3 mr-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-amber-800">3. Soins spécifiques aux cheveux gris</h2>
                  <p className="text-amber-600 font-medium">Une routine adaptée pour un éclat optimal</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Les <span className="font-bold text-amber-700">cheveux gris</span> ont des besoins particuliers qui diffèrent 
                  des cheveux colorés ou naturels. Une routine de soins adaptée est essentielle pour 
                  <span className="font-bold text-amber-700"> maintenir leur beauté et leur éclat</span>. 
                  Découvrez les secrets d'un entretien optimal.
                </p>
              </div>

              {/* Care Routine Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-amber-100">
                  <h3 className="font-bold text-lg text-amber-800 mb-4 flex items-center">
                    <Sparkles className="w-5 h-5 text-amber-600 mr-2" />
                    Nettoyage et hydratation
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Sun className="w-4 h-4 text-amber-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Shampooing violet/argenté</div>
                        <div className="text-sm text-gray-600">Neutralise les reflets jaunâtres, 1-2x/semaine</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Moon className="w-4 h-4 text-amber-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Shampooing hydratant</div>
                        <div className="text-sm text-gray-600">Formule douce pour les autres lavages</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Heart className="w-4 h-4 text-amber-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Après-shampooing nourrissant</div>
                        <div className="text-sm text-gray-600">Riche en agents hydratants, à chaque lavage</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-amber-100">
                  <h3 className="font-bold text-lg text-amber-800 mb-4 flex items-center">
                    <Gem className="w-5 h-5 text-amber-600 mr-2" />
                    Traitements intensifs
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Star className="w-4 h-4 text-amber-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Masque hebdomadaire</div>
                        <div className="text-sm text-gray-600">Nutrition profonde et réparation</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Sparkles className="w-4 h-4 text-amber-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Huile capillaire</div>
                        <div className="text-sm text-gray-600">Argan, coco ou jojoba, 2-3x/semaine</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Crown className="w-4 h-4 text-amber-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Sérum brillance</div>
                        <div className="text-sm text-gray-600">Boost d'éclat quotidien</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Recommendations */}
              <div className="bg-white rounded-xl p-6 border border-amber-100">
                <h3 className="font-bold text-lg text-amber-800 mb-6 flex items-center">
                  <Award className="w-5 h-5 text-amber-600 mr-2" />
                  Ingrédients clés à rechercher
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-3">
                      <Gem className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Kératine</h4>
                    <p className="text-sm text-gray-600">Renforce la fibre capillaire et lisse les écailles</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-3">
                      <Heart className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Acide hyaluronique</h4>
                    <p className="text-sm text-gray-600">Hydratation intense et effet repulpant</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-3">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Pigments violets</h4>
                    <p className="text-sm text-gray-600">Neutralise les tons jaunes indésirables</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapter 4: Styling & Confidence */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3 mr-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-purple-800">4. Styling et confiance : Porter ses gris avec fierté</h2>
                  <p className="text-purple-600 font-medium">L'art de sublimer sa beauté naturelle</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Avoir des <span className="font-bold text-purple-700">cheveux gris</span> ne signifie pas renoncer au style. 
                  Au contraire, c'est l'opportunité de découvrir une nouvelle version de soi, plus authentique et élégante. 
                  Apprenez à <span className="font-bold text-purple-700">coiffer et accessoiriser</span> vos cheveux argentés 
                  pour un look toujours impeccable.
                </p>
              </div>

              {/* Styling Tips Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-purple-100">
                  <h3 className="font-bold text-lg text-purple-800 mb-4 flex items-center">
                    <Scissors className="w-5 h-5 text-purple-600 mr-2" />
                    Coupes qui subliment le gris
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Pixie moderne</div>
                        <div className="text-sm text-gray-600">Met en valeur les traits du visage</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Bob sophistiqué</div>
                        <div className="text-sm text-gray-600">Élégance intemporelle</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Carré long texturé</div>
                        <div className="text-sm text-gray-600">Mouvement et volume naturels</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-purple-100">
                  <h3 className="font-bold text-lg text-purple-800 mb-4 flex items-center">
                    <Sparkles className="w-5 h-5 text-purple-600 mr-2" />
                    Techniques de coiffage
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Star className="w-4 h-4 text-purple-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Volume à la racine</div>
                        <div className="text-sm text-gray-600">Mousse volumisante + séchage tête en bas</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Star className="w-4 h-4 text-purple-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Texture naturelle</div>
                        <div className="text-sm text-gray-600">Crème définissante pour cheveux bouclés</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Star className="w-4 h-4 text-purple-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Lissage sophistiqué</div>
                        <div className="text-sm text-gray-600">Brushing avec protection thermique</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confidence Boosters */}
              <div className="bg-white rounded-xl p-6 border border-purple-100">
                <h3 className="font-bold text-lg text-purple-800 mb-6 flex items-center">
                  <Heart className="w-5 h-5 text-purple-600 mr-2" />
                  Accessoires et maquillage pour sublimer le gris
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Accessoires cheveux</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>• Bandeaux métalliques</div>
                      <div>• Barrettes ornées</div>
                      <div>• Foulards en soie</div>
                      <div>• Épingles à cheveux dorées</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Maquillage adapté</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>• Rouge à lèvres vifs</div>
                      <div>• Fard à paupières coloré</div>
                      <div>• Sourcils bien définis</div>
                      <div>• Blush pour bonne mine</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Bijoux assortis</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>• Argent et métaux blancs</div>
                      <div>• Perles et nacre</div>
                      <div>• Pierres précieuses colorées</div>
                      <div>• Créoles sophistiquées</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapter 5: Inspiration & Mindset */}
            <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl p-8 border border-rose-100 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-rose-500 to-red-500 rounded-xl p-3 mr-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-rose-800">5. Inspiration et état d'esprit positif</h2>
                  <p className="text-rose-600 font-medium">Célébrer sa beauté à chaque étape de la vie</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Adopter ses <span className="font-bold text-rose-700">cheveux gris</span> est avant tout un état d'esprit. 
                  C'est choisir l'authenticité plutôt que la conformité, la confiance plutôt que la peur du jugement. 
                  De nombreuses femmes inspirantes prouvent chaque jour que la beauté n'a pas d'âge et que 
                  <span className="font-bold text-rose-700"> les cheveux gris sont synonymes d'élégance</span>.
                </p>
              </div>

              {/* Mindset Shifts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-rose-100">
                  <h3 className="font-bold text-lg text-rose-800 mb-4 flex items-center">
                    <Brain className="w-5 h-5 text-rose-600 mr-2" />
                    Changement de perspective
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-rose-50 rounded-lg">
                      <div className="font-semibold text-rose-800 mb-1">❌ Ancienne vision</div>
                      <div className="text-sm text-gray-600">"Mes cheveux gris me vieillissent"</div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="font-semibold text-green-800 mb-1">✅ Nouvelle vision</div>
                      <div className="text-sm text-gray-600">"Mes cheveux gris révèlent ma sagesse et mon authenticité"</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-rose-100">
                  <h3 className="font-bold text-lg text-rose-800 mb-4 flex items-center">
                    <Star className="w-5 h-5 text-rose-600 mr-2" />
                    Icônes aux cheveux gris
                  </h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>• <strong>Helen Mirren</strong> - Élégance royale</div>
                    <div>• <strong>Jamie Lee Curtis</strong> - Naturel assumé</div>
                    <div>• <strong>Andie MacDowell</strong> - Beauté authentique</div>
                    <div>• <strong>Emmylou Harris</strong> - Style intemporel</div>
                  </div>
                  <div className="mt-4 p-3 bg-rose-50 rounded-lg">
                    <div className="text-xs text-rose-700">Ces femmes prouvent que l'âge est un atout beauté</div>
                  </div>
                </div>
              </div>

              {/* Positive Affirmations */}
              <div className="bg-white rounded-xl p-6 border border-rose-100">
                <h3 className="font-bold text-lg text-rose-800 mb-6 flex items-center">
                  <Crown className="w-5 h-5 text-rose-600 mr-2" />
                  Affirmations positives pour cheveux gris
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg">
                      <div className="text-center">
                        <Gem className="w-6 h-6 text-rose-600 mx-auto mb-2" />
                        <div className="font-semibold text-rose-800">"Je suis précieuse comme un diamant"</div>
                        <div className="text-xs text-gray-600">Mes cheveux argentés reflètent ma valeur</div>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg">
                      <div className="text-center">
                        <Crown className="w-6 h-6 text-rose-600 mx-auto mb-2" />
                        <div className="font-semibold text-rose-800">"Je porte ma couronne de sagesse"</div>
                        <div className="text-xs text-gray-600">Chaque cheveu gris raconte mon histoire</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg">
                      <div className="text-center">
                        <Heart className="w-6 h-6 text-rose-600 mx-auto mb-2" />
                        <div className="font-semibold text-rose-800">"J'aime ma beauté authentique"</div>
                        <div className="text-xs text-gray-600">Je choisis l'amour de soi avant tout</div>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg">
                      <div className="text-center">
                        <Star className="w-6 h-6 text-rose-600 mx-auto mb-2" />
                        <div className="font-semibold text-rose-800">"Je rayonne de confiance"</div>
                        <div className="text-xs text-gray-600">Mon éclat intérieur illumine tout</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion Section */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-8 border border-violet-100 mb-12">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl p-3 inline-flex mb-4">
                  <Gem className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-violet-800 mb-2">Conclusion : Vos cheveux gris, votre fierté</h2>
                <p className="text-violet-600 font-medium">L'élégance n'a pas d'âge, elle a du caractère</p>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed text-center">
                  Assumer ses <span className="font-bold text-violet-700">cheveux gris</span> en 2025, c'est faire le choix de 
                  l'authenticité dans un monde d'apparences. C'est affirmer que la beauté réside dans l'acceptation de soi 
                  et que <span className="font-bold text-violet-700">chaque étape de la vie</span> apporte sa propre splendeur. 
                  Vos cheveux argentés ne sont pas un signe de vieillissement, ils sont le symbole de votre sagesse, 
                  de votre force et de votre beauté unique.
                </p>
              </div>

              {/* Final Message */}
              <div className="bg-gradient-to-r from-violet-100 to-indigo-100 rounded-xl p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3 text-violet-800 flex items-center justify-center">
                    <Crown className="w-6 h-6 mr-2" />
                    Votre beauté, votre règne
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Chaque femme qui assume ses cheveux gris ouvre la voie à d'autres. 
                    Vous participez à une révolution silencieuse qui redéfinit les standards de beauté. 
                    Portez vos cheveux argentés comme une couronne : avec fierté, grâce et assurance.
                  </p>
                  <div className="inline-flex items-center bg-white rounded-lg px-4 py-2 border border-violet-200">
                    <Gem className="w-5 h-5 text-violet-600 mr-2" />
                    <span className="text-violet-700 font-semibold">Vous êtes précieuse, vous êtes belle, vous êtes vous</span>
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
                className="inline-flex items-center px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors"
              >
                Voir tous les articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
