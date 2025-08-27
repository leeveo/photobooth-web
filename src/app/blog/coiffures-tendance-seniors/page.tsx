import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Sparkles, Brain, Eye, Smartphone, Wand2, Users, Camera, Zap, Settings, CheckCircle, Star, Award, Target, Palette, Globe, Heart, Scissors, Clock, ThumbsUp, Crown, Shield, Lightbulb } from 'lucide-react'

export const metadata = {
  title: 'Coiffures Tendance pour Seniors 2025 : Style et Élégance à Tout Âge',
  description: 'Découvrez les dernières tendances coiffure spécialement adaptées aux seniors. Coupes modernes, techniques de styling et conseils pour sublimer vos cheveux matures avec style et élégance.',
  keywords: 'coiffures seniors, tendances 2025, cheveux matures, style élégant, coupes modernes seniors, coiffure femme âgée'
}

const relatedArticles = [
  {
    title: "Cheveux gris : Assumer son élégance naturelle",
    excerpt: "Guide complet pour sublimer et entretenir vos cheveux gris avec style et confiance.",
    image: "/blog/cheveux-gris-elegance.jpg",
    slug: "cheveux-gris-assumer-elegance"
  },
  {
    title: "Coupe pixie pour femmes seniors : Le guide complet",
    excerpt: "Tout savoir sur la coupe pixie adaptée aux femmes matures : techniques, entretien et styling.",
    image: "/coupe-cheveux/pixie_senior_hair_style.jpg",
    slug: "coupe-pixie-femmes-seniors"
  }
]

export default function CoiffuresTendanceSeniors() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white rounded-full px-6 py-2 mb-6 shadow-sm">
              <Crown className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-600 font-medium">Tendances Coiffure Seniors</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Coiffures Tendance pour Seniors 2025 : 
              <span className="text-violet-600"> Style et Élégance à Tout Âge</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Découvrez les dernières tendances coiffure spécialement adaptées aux seniors. 
              Des coupes modernes aux techniques de styling, apprenez à sublimer vos cheveux matures avec style et confiance.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Lecture 8 min</span>
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2" />
                <span>Guide complet</span>
              </div>
              <div className="flex items-center">
                <ThumbsUp className="w-4 h-4 mr-2" />
                <span>Conseils d'expert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/coupe-cheveux/pixie002.jpg"
                alt="Coiffures tendance pour seniors - Style moderne et élégant"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-gray-700 font-medium">
                    Exemple de coiffure tendance adaptée aux seniors : moderne, élégante et facile à entretenir
                  </p>
                </div>
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
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-violet-800">L'âge n'est qu'un chiffre : Révolutionnez votre style</h2>
                  <p className="text-violet-600 font-medium">2025, l'année de l'élégance mature assumée</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  En 2025, les <span className="font-bold text-violet-700">coiffures pour seniors</span> connaissent une véritable révolution. 
                  Fini les clichés sur les "coiffures d'âge" ! Place à des styles modernes, dynamiques et parfaitement adaptés 
                  à la beauté mature. Découvrez comment <span className="font-bold text-violet-700">sublimer vos cheveux</span> 
                  avec des coupes tendance qui célèbrent votre personnalité unique.
                </p>
              </div>

              {/* Key Benefits Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-violet-100 text-center">
                  <Crown className="w-8 h-8 text-violet-600 mx-auto mb-3" />
                  <h3 className="font-bold text-violet-800">Élégance moderne</h3>
                  <p className="text-sm text-gray-600">Coupes contemporaines adaptées à votre style de vie</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-violet-100 text-center">
                  <Heart className="w-8 h-8 text-violet-600 mx-auto mb-3" />
                  <h3 className="font-bold text-violet-800">Confiance retrouvée</h3>
                  <p className="text-sm text-gray-600">Styles qui valorisent votre beauté naturelle</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-violet-100 text-center">
                  <Lightbulb className="w-8 h-8 text-violet-600 mx-auto mb-3" />
                  <h3 className="font-bold text-violet-800">Entretien simplifié</h3>
                  <p className="text-sm text-gray-600">Coupes pratiques pour un quotidien facile</p>
                </div>
              </div>
            </div>

            {/* Trend #1: Short & Chic Cuts */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-3 mr-4">
                  <Scissors className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-purple-800">1. Les coupes courtes chic et modernes</h2>
                  <p className="text-purple-600 font-medium">L'art de la coupe courte sophistiquée</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Les <span className="font-bold text-purple-700">coupes courtes</span> restent la tendance phare pour les seniors en 2025. 
                  Plus que jamais, elles incarnent modernité, praticité et élégance. Ces styles libèrent du temps tout en 
                  apportant une <span className="font-bold text-purple-700">jeunesse instantanée</span> au visage.
                </p>
              </div>

              {/* Short Cuts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-lg text-purple-800 mb-4 flex items-center">
                    <Star className="w-5 h-5 text-purple-600 mr-2" />
                    Le Pixie raffiné
                  </h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-3 mt-0.5" />
                      <span>Dégradé subtil sur les côtés</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-3 mt-0.5" />
                      <span>Volume sur le dessus</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-3 mt-0.5" />
                      <span>Frange longue effilée</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-3 mt-0.5" />
                      <span>Styling facile au quotidien</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-lg text-purple-800 mb-4 flex items-center">
                    <Award className="w-5 h-5 text-purple-600 mr-2" />
                    Le Bob sophistiqué
                  </h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-3 mt-0.5" />
                      <span>Longueur au niveau du menton</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-3 mt-0.5" />
                      <span>Ligne nette ou dégradée</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-3 mt-0.5" />
                      <span>Adaptable à tous les visages</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-3 mt-0.5" />
                      <span>Polyvalent pour toutes occasions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits and Styling Tips */}
              <div className="bg-white rounded-xl p-6 border border-purple-100">
                <h3 className="font-bold text-lg text-purple-800 mb-4 flex items-center">
                  <Lightbulb className="w-5 h-5 text-purple-600 mr-2" />
                  Conseils de styling pour coupes courtes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Produits essentiels</h4>
                    <div className="space-y-1 text-sm text-gray-700">
                      <div>• Mousse volumisante légère</div>
                      <div>• Cire texturisante</div>
                      <div>• Spray de finition</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Techniques de coiffage</h4>
                    <div className="space-y-1 text-sm text-gray-700">
                      <div>• Séchage tête en bas pour le volume</div>
                      <div>• Brushing avec brosse ronde</div>
                      <div>• Finish avec les doigts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trend #2: Medium Length Styles */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-3 mr-4">
                  <Wand2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-emerald-800">2. Les longueurs moyennes structurées</h2>
                  <p className="text-emerald-600 font-medium">L'équilibre parfait entre style et praticité</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Pour celles qui préfèrent garder un peu plus de longueur, les <span className="font-bold text-emerald-700">coupes mi-longues</span> 
                  offrent une polyvalence incomparable. Ces styles permettent de jouer avec les textures et les volumes 
                  tout en restant <span className="font-bold text-emerald-700">faciles à entretenir</span> au quotidien.
                </p>
              </div>

              {/* Medium Length Styles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-emerald-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                    <Crown className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-emerald-800 mb-3">Carré plongeant moderne</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>• Plus long devant qu'arrière</div>
                    <div>• Effet lissant et rajeunissant</div>
                    <div>• Idéal pour cheveux fins</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-emerald-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-emerald-800 mb-3">Lob (Long Bob)</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>• Longueur aux épaules</div>
                    <div>• Dégradé subtil</div>
                    <div>• Très versatile</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-emerald-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-emerald-800 mb-3">Shag contemporain</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>• Couches déstructurées</div>
                    <div>• Mouvement naturel</div>
                    <div>• Look décontracté chic</div>
                  </div>
                </div>
              </div>

              {/* Styling Versatility */}
              <div className="bg-white rounded-xl p-6 border border-emerald-100">
                <h3 className="font-bold text-lg text-emerald-800 mb-4 flex items-center">
                  <Target className="w-5 h-5 text-emerald-600 mr-2" />
                  Polyvalence des longueurs moyennes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Occasions formelles</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                        <span>Chignon bas élégant</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                        <span>Brushing lisse sophistiqué</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                        <span>Boucles glamour</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Quotidien décontracté</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                        <span>Séchage naturel texturé</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                        <span>Queue de cheval moderne</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                        <span>Torsades latérales</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trend #3: Color & Highlights */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-3 mr-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-amber-800">3. Couleurs et mèches : Sublimer les cheveux matures</h2>
                  <p className="text-amber-600 font-medium">L'art de la coloration adaptée aux seniors</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  La <span className="font-bold text-amber-700">coloration des cheveux matures</span> demande une approche spécifique. 
                  En 2025, les techniques se raffinent pour offrir des résultats naturels qui illuminent le visage 
                  et apportent de la <span className="font-bold text-amber-700">luminosité</span> sans paraître artificielles.
                </p>
              </div>

              {/* Color Techniques Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-amber-100">
                  <h3 className="font-bold text-lg text-amber-800 mb-4 flex items-center">
                    <Sparkles className="w-5 h-5 text-amber-600 mr-2" />
                    Techniques douces recommandées
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-gray-800">Balayage naturel</div>
                      <div className="text-sm text-gray-600">Mèches subtiles qui imitent les reflets du soleil</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Babylights</div>
                      <div className="text-sm text-gray-600">Très fines mèches pour un effet lumineux délicat</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Root shadow</div>
                      <div className="text-sm text-gray-600">Racines légèrement plus foncées pour un effet naturel</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-amber-100">
                  <h3 className="font-bold text-lg text-amber-800 mb-4 flex items-center">
                    <Crown className="w-5 h-5 text-amber-600 mr-2" />
                    Couleurs tendance 2025
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-gray-800">Blonds chauds</div>
                      <div className="text-sm text-gray-600">Tons dorés et beiges pour réchauffer le teint</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Châtains nuancés</div>
                      <div className="text-sm text-gray-600">Reflets caramel et miel pour la profondeur</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Gris assumé</div>
                      <div className="text-sm text-gray-600">Argenté élégant avec reflets nacrés</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Color Care Tips */}
              <div className="bg-white rounded-xl p-6 border border-amber-100">
                <h3 className="font-bold text-lg text-amber-800 mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-amber-600 mr-2" />
                  Entretien et protection de la couleur
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-3">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div className="font-semibold text-gray-800">Hydratation</div>
                    <div className="text-sm text-gray-600">Masques nourrissants hebdomadaires</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-3">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div className="font-semibold text-gray-800">Protection UV</div>
                    <div className="text-sm text-gray-600">Sprays protecteurs solaires</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-3">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div className="font-semibold text-gray-800">Brillance</div>
                    <div className="text-sm text-gray-600">Sérums illuminateurs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trend #4: Styling & Care */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-100 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl p-3 mr-4">
                  <Wand2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-violet-800">4. Techniques de styling et soins adaptés</h2>
                  <p className="text-violet-600 font-medium">Des cheveux en santé à tout âge</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Les <span className="font-bold text-violet-700">cheveux matures</span> ont des besoins spécifiques. 
                  Avec l'âge, ils deviennent souvent plus fins, plus fragiles et perdent en densité. 
                  Les bonnes techniques de styling et de soins permettent de <span className="font-bold text-violet-700">maximiser leur potentiel</span>.
                </p>
              </div>

              {/* Care & Styling Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-violet-100">
                  <h3 className="font-bold text-lg text-violet-800 mb-4 flex items-center">
                    <Heart className="w-5 h-5 text-violet-600 mr-2" />
                    Soins essentiels
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-violet-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Shampooing doux</div>
                        <div className="text-sm text-gray-600">Formules sans sulfate, lavage tous les 2-3 jours</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-violet-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Après-shampooing nourrissant</div>
                        <div className="text-sm text-gray-600">Focus sur les longueurs et pointes</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-violet-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Traitement hebdomadaire</div>
                        <div className="text-sm text-gray-600">Masque réparateur ou huile nutritive</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-violet-100">
                  <h3 className="font-bold text-lg text-violet-800 mb-4 flex items-center">
                    <Zap className="w-5 h-5 text-violet-600 mr-2" />
                    Techniques de volume
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-violet-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Séchage tête en bas</div>
                        <div className="text-sm text-gray-600">Crée du volume dès la racine</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-violet-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Produits volumisants</div>
                        <div className="text-sm text-gray-600">Mousses légères appliquées sur cheveux humides</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-violet-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800">Brossage adapté</div>
                        <div className="text-sm text-gray-600">Brosse en poils de sanglier pour la douceur</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Daily Routine */}
              <div className="bg-white rounded-xl p-6 border border-violet-100">
                <h3 className="font-bold text-lg text-violet-800 mb-6 flex items-center">
                  <Clock className="w-5 h-5 text-violet-600 mr-2" />
                  Routine quotidienne simplifiée
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-violet-50 rounded-lg">
                    <div className="text-2xl font-bold text-violet-700 mb-1">Matin</div>
                    <div className="text-sm text-gray-600">Spray hydratant + coiffage rapide</div>
                  </div>
                  <div className="text-center p-4 bg-violet-50 rounded-lg">
                    <div className="text-2xl font-bold text-violet-700 mb-1">Journée</div>
                    <div className="text-sm text-gray-600">Retouches avec les doigts</div>
                  </div>
                  <div className="text-center p-4 bg-violet-50 rounded-lg">
                    <div className="text-2xl font-bold text-violet-700 mb-1">Soir</div>
                    <div className="text-sm text-gray-600">Brossage doux + protection</div>
                  </div>
                  <div className="text-center p-4 bg-violet-50 rounded-lg">
                    <div className="text-2xl font-bold text-violet-700 mb-1">Nuit</div>
                    <div className="text-sm text-gray-600">Taie d'oreiller en soie</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion Section */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-8 border border-violet-100 mb-12">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl p-3 inline-flex mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-violet-800 mb-2">Conclusion : Votre beauté n'a pas d'âge limite</h2>
                <p className="text-violet-600 font-medium">Embrassez votre style unique avec confiance</p>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed text-center">
                  En 2025, les <span className="font-bold text-violet-700">coiffures pour seniors</span> cassent tous les codes traditionnels. 
                  Il n'y a plus d'âge pour être <span className="font-bold text-violet-700">stylée, moderne et élégante</span>. 
                  Que vous optiez pour une coupe courte dynamique, des longueurs moyennes versatiles ou que vous assumiez vos cheveux gris, 
                  l'important est de choisir un style qui vous ressemble et vous met en valeur.
                </p>
              </div>

              {/* Key Takeaways */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-violet-100 text-center">
                  <Sparkles className="w-8 h-8 text-violet-600 mx-auto mb-3" />
                  <h3 className="font-bold text-violet-800 mb-2">Style personnel</h3>
                  <p className="text-sm text-gray-600">Choisissez une coupe qui reflète votre personnalité unique</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-violet-100 text-center">
                  <Heart className="w-8 h-8 text-violet-600 mx-auto mb-3" />
                  <h3 className="font-bold text-violet-800 mb-2">Entretien adapté</h3>
                  <p className="text-sm text-gray-600">Adoptez des soins spécifiques aux cheveux matures</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-violet-100 text-center">
                  <Crown className="w-8 h-8 text-violet-600 mx-auto mb-3" />
                  <h3 className="font-bold text-violet-800 mb-2">Confiance assumée</h3>
                  <p className="text-sm text-gray-600">Portez votre coiffure avec fierté et assurance</p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-violet-100 to-indigo-100 rounded-xl p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3 text-violet-800">
                    Prête pour votre transformation ?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    N'hésitez pas à consulter un professionnel pour trouver la coupe et la couleur qui 
                    sublimeront votre beauté naturelle. Votre âge est un atout, pas une limite !
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
