import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Clock, Calendar, Users, Camera, Zap, Settings, CheckCircle, Star, Target, Globe, Heart, TrendingUp, Shield, Lightbulb, Monitor, MapPin, Wifi, BarChart3, Trophy, Smartphone, Palette, Brain, Eye, Wand2, Crown, Gem, QrCode, Database, Coins, Receipt, CreditCard } from 'lucide-react'

export const metadata = {
  title: 'Location Photobooth pour Halls d\'Entreprise : Solution Autonome Long Terme',
  description: 'Location de photobooth IA autonome pour halls d\'entreprise. Installations permanentes ou temporaires avec changement quotidien de filtres IA. Formules semaine, mois, trimestre disponibles.',
  keywords: 'location photobooth, hall entreprise, photobooth autonome, location longue durée, photobooth permanent, filtres IA quotidiens, location photobooth mensuelle, installation photobooth entreprise'
}

const relatedArticles = [
  {
    title: "Kit Photobooth Express : Tablette Professionnelle",
    excerpt: "Découvrez notre solution complète de kit photobooth avec tablette intégrée pour tous vos besoins d'événements.",
    image: "/kit-photobooth/kit-complet.jpg",
    slug: "/kit-photobooth"
  },
  {
    title: "Photobooth IA Salon de Coiffure : Révolutionner l'Expérience Client",
    excerpt: "Transformez votre salon avec un photobooth IA. Fidélisation client et marketing viral garantis.",
    image: "/blog/ai-photobooth.jpg",
    slug: "photobooth-ia-salon-coiffure"
  }
]

export default function LocationPhotoboothHallEntreprise() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white rounded-full px-6 py-2 mb-6 shadow-sm">
              <Building2 className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium">Solution Entreprise</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Location de Photobooth pour 
              <span className="text-blue-600"> Halls d'Entreprise</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Installez de façon permanente ou temporaire des photobooths IA autonomes dans vos halls d'entreprise. 
              Solutions flexibles avec renouvellement quotidien des filtres IA et formules de location adaptées.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Lecture 10 min</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>Guide Entreprise</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>24 Septembre 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  Photobooth Autonome : La Révolution des Espaces Corporate
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Les halls d'entreprise se transforment en espaces d'expérience grâce aux photobooths IA autonomes. 
                  Notre solution de location permet d'installer des dispositifs permanents ou temporaires qui fonctionnent 
                  de manière autonome, offrant aux employés et visiteurs une expérience interactive unique avec des 
                  filtres IA qui se renouvellent quotidiennement.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <Image
                    src="/kit-photobooth/kit (1).jpg"
                    alt="Photobooth IA installé dans hall d'entreprise moderne"
                    width={500}
                    height={300}
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-4">Installation Simple et Discrète</h3>
                  <p className="text-gray-600 mb-4">
                    Nos photobooths se fondent parfaitement dans l'environnement corporate avec un design 
                    élégant et professionnel. Installation rapide sans travaux ni modifications structurelles.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Installation en moins de 30 minutes</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Design corporate élégant</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Fonctionnement 100% autonome</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 1: Avantages pour l'Entreprise */}
            <section className="mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building2 className="w-6 h-6 text-blue-600 mr-3" />
                  Pourquoi Installer un Photobooth dans Votre Hall d'Entreprise ?
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold mb-2">Engagement Employés</h3>
                    <p className="text-sm text-gray-600">
                      Renforcez la cohésion d'équipe et la culture d'entreprise avec des moments partagés créatifs
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-bold mb-2">Image de Marque</h3>
                    <p className="text-sm text-gray-600">
                      Modernisez l'image de votre entreprise auprès des visiteurs et partenaires
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-bold mb-2">Bien-être au Travail</h3>
                    <p className="text-sm text-gray-600">
                      Créez des pauses créatives qui favorisent la détente et la motivation
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src="/kit-photobooth/kit (2).jpg"
                      alt="Employés utilisant le photobooth IA dans hall d'entreprise"
                      width={400}
                      height={250}
                      className="rounded-lg w-full mb-4"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Contenu Généré par les Employés</h4>
                        <p className="text-sm text-gray-600">
                          Les employés créent naturellement du contenu authentique qui valorise votre marque employeur
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Analytics et Insights</h4>
                        <p className="text-sm text-gray-600">
                          Mesurez l'engagement et l'utilisation pour optimiser l'expérience collaborateur
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Conformité et Sécurité</h4>
                        <p className="text-sm text-gray-600">
                          Respect total des normes de sécurité entreprise et protection des données
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Fonctionnement Autonome */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Settings className="w-6 h-6 text-indigo-600 mr-3" />
                  Fonctionnement 100% Autonome : Zéro Maintenance
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Intelligence Artificielle Intégrée</h3>
                    <p className="text-gray-700 mb-6">
                      Notre photobooth fonctionne de manière totalement autonome grâce à l'IA intégrée. 
                      Les filtres se renouvellent automatiquement chaque jour, offrant une expérience 
                      toujours fraîche sans intervention humaine.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                          <Brain className="w-4 h-4 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Renouvellement Quotidien</h4>
                          <p className="text-sm text-gray-600">500+ filtres IA qui changent automatiquement</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                          <Monitor className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Gestion à Distance</h4>
                          <p className="text-sm text-gray-600">Monitoring et contrôle depuis notre plateforme cloud</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                          <Wifi className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Connectivité Garantie</h4>
                          <p className="text-sm text-gray-600">Connexion 4G/5G intégrée si besoin</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Image
                      src="/kit-photobooth/kit (3).jpg"
                      alt="Interface autonome du photobooth avec filtres IA rotatifs"
                      width={400}
                      height={300}
                      className="rounded-xl w-full"
                    />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4">Cycle Automatique des Filtres IA</h3>
                  <div className="grid grid-cols-1 md:grid-cols-7 gap-4 text-center">
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="text-2xl mb-2">🎨</div>
                      <div className="text-xs font-semibold">LUN</div>
                      <div className="text-xs text-gray-600">Pop Art</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-2xl mb-2">🌊</div>
                      <div className="text-xs font-semibold">MAR</div>
                      <div className="text-xs text-gray-600">Aquarelle</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <div className="text-2xl mb-2">🤖</div>
                      <div className="text-xs font-semibold">MER</div>
                      <div className="text-xs text-gray-600">Cyberpunk</div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-3">
                      <div className="text-2xl mb-2">📻</div>
                      <div className="text-xs font-semibold">JEU</div>
                      <div className="text-xs text-gray-600">Vintage</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="text-2xl mb-2">✨</div>
                      <div className="text-xs font-semibold">VEN</div>
                      <div className="text-xs text-gray-600">Minimaliste</div>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-3">
                      <div className="text-2xl mb-2">💡</div>
                      <div className="text-xs font-semibold">SAM</div>
                      <div className="text-xs text-gray-600">Néon</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <div className="text-2xl mb-2">🔮</div>
                      <div className="text-xs font-semibold">DIM</div>
                      <div className="text-xs text-gray-600">Futuriste</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Formules de Location */}
            <section className="mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                  Formules de Location Flexibles
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Location Semaine</h3>
                      <p className="text-sm text-gray-600">Parfait pour les événements courts</p>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>Installation et désinstallation incluses</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>7 cycles de filtres IA différents</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>Support technique 7j/7</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>Analytics de fin de période</span>
                      </li>
                    </ul>
                    
                    <Link href="/contact" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-center block hover:bg-blue-700 transition-colors">
                      Devis Semaine
                    </Link>
                  </div>
                  
                  <div className="border-2 border-blue-500 rounded-xl p-6 relative hover:shadow-xl transition-shadow">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Le plus populaire
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Location Mensuelle</h3>
                      <p className="text-sm text-gray-600">Idéal pour les tests longue durée</p>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>Installation permanente sur site</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>30 cycles de filtres IA uniques</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>Maintenance préventive incluse</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>Personnalisation aux couleurs entreprise</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>Rapports d'usage hebdomadaires</span>
                      </li>
                    </ul>
                    
                    <Link href="/contact" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-center block hover:bg-blue-700 transition-colors">
                      Devis Mensuel
                    </Link>
                  </div>
                  
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Trophy className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Location Trimestrielle</h3>
                      <p className="text-sm text-gray-600">Maximum d'économies et de services</p>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>3 mois d'installation continue</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>90+ cycles de filtres IA exclusifs</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>Option d'achat à prix réduit</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>Formation équipe interne</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>Dashboard analytics avancé</span>
                      </li>
                    </ul>
                    
                    <Link href="/contact" className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg text-center block hover:bg-purple-700 transition-colors">
                      Devis Trimestriel
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Installation et Intégration */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-green-600 mr-3" />
                  Installation et Intégration Simplifiées
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src="/kit-photobooth/kit (4).jpg"
                      alt="Process d'installation du photobooth dans hall d'entreprise"
                      width={400}
                      height={300}
                      className="rounded-xl w-full mb-6"
                    />
                    
                    <h3 className="text-lg font-bold mb-4">Process d'Installation en 3 Étapes</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-sm font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Audit de l'Espace</h4>
                          <p className="text-sm text-gray-600">
                            Analyse de votre hall pour déterminer l'emplacement optimal et les besoins techniques
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-sm font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Installation Express</h4>
                          <p className="text-sm text-gray-600">
                            Installation en moins de 30 minutes par nos techniciens certifiés
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-sm font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Activation et Formation</h4>
                          <p className="text-sm text-gray-600">
                            Configuration personnalisée et formation de vos équipes à la supervision
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6">
                      <h3 className="text-lg font-bold mb-4">Intégration Système d'Information</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center text-sm">
                          <Database className="w-4 h-4 text-blue-500 mr-2" />
                          <span>Connexion au réseau entreprise sécurisé</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <QrCode className="w-4 h-4 text-green-500 mr-2" />
                          <span>Authentification par badge employé (optionnel)</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <BarChart3 className="w-4 h-4 text-purple-500 mr-2" />
                          <span>Export données vers vos outils analytics</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Shield className="w-4 h-4 text-red-500 mr-2" />
                          <span>Conformité RGPD et normes sécurité IT</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6">
                      <h3 className="text-lg font-bold mb-4">Personnalisation Corporate</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center text-sm">
                          <Palette className="w-4 h-4 text-pink-500 mr-2" />
                          <span>Interface aux couleurs de votre marque</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Crown className="w-4 h-4 text-yellow-500 mr-2" />
                          <span>Logo et branding personnalisés</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Wand2 className="w-4 h-4 text-indigo-500 mr-2" />
                          <span>Filtres IA spécifiques métier disponibles</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Gem className="w-4 h-4 text-teal-500 mr-2" />
                          <span>Messages d'accueil personnalisés</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: ROI et Bénéfices */}
            <section className="mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
                  ROI et Bénéfices Mesurables
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-6">Impact sur la Marque Employeur</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                        <span className="text-sm font-medium">Engagement collaborateurs</span>
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                          <span className="text-sm font-bold text-green-600">+85%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                        <span className="text-sm font-medium">Temps de pause créative</span>
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '72%'}}></div>
                          </div>
                          <span className="text-sm font-bold text-blue-600">+72%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                        <span className="text-sm font-medium">Contenu généré UGC</span>
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                            <div className="bg-purple-500 h-2 rounded-full" style={{width: '94%'}}></div>
                          </div>
                          <span className="text-sm font-bold text-purple-600">+94%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Image
                      src="/kit-photobooth/kit (5).jpg"
                      alt="Analytics et métriques d'engagement du photobooth entreprise"
                      width={400}
                      height={300}
                      className="rounded-xl w-full"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2.3x</div>
                    <div className="text-sm text-gray-600">Plus de partages sur LinkedIn</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">-40%</div>
                    <div className="text-sm text-gray-600">Réduction stress au travail</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                    <div className="text-3xl font-bold text-purple-600 mb-2">89%</div>
                    <div className="text-sm text-gray-600">Satisfaction collaborateurs</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                    <div className="text-3xl font-bold text-orange-600 mb-2">15min</div>
                    <div className="text-sm text-gray-600">Temps moyen d'utilisation</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Prêt à Transformer Votre Hall d'Entreprise ?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Contactez-nous pour une démonstration personnalisée et un devis adapté à vos besoins
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Camera className="w-5 h-5 mr-2" />
                    Demander une démo
                  </Link>
                  
                  <Link
                    href="/kit-photobooth"
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Voir nos solutions
                  </Link>
                </div>
                
                <p className="text-sm mt-6 opacity-75">
                  Installation en 24h • Support inclus • Garantie satisfaction
                </p>
              </div>
            </section>

          </div>
        </div>
      </article>

      {/* Articles Suggérés */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">Articles Recommandés</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedArticles.map((article, index) => (
                <Link key={index} href={article.slug} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-3 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-blue-600 text-sm font-medium">
                        <span>Lire l'article</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}