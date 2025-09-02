'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const articles = [
    {
      id: 1,
      slug: "photobooth-ia-salon-coiffure",
      title: "Photobooth IA Salon de Coiffure : Révolutionner l'Expérience Client avec une Tablette",
      excerpt: "Découvrez comment transformer votre salon de coiffure avec un photobooth IA. Fidélisation client, marketing viral et croissance du chiffre d'affaires garantis avec une simple tablette.",
      author: "Sophie Martin",
      date: "15 novembre 2024",
      readTime: "13 min",
      image: "/coupe-cheveux/web002.jpg",
      category: "Salon de Coiffure"
    },
    {
      id: 2,
      slug: "deploiement-campagne-street-marketing",
      title: "Comment Déployer une Campagne de Street Marketing avec WaiBooth",
      excerpt: "Guide complet pour organiser une campagne street marketing réussie en utilisant des bornes photobooth IA. Découvrez les stratégies gagnantes des experts.",
      author: "Marc Dubois",
      date: "12 novembre 2024",
      readTime: "15 min",
      image: "/blog/photobooth-setup.jpg",
      category: "Street Marketing"
    },
    {
      id: 3,
      slug: "photobooth-fan-zone",
      title: "Créer une Fan Zone Photobooth pour Événements Sportifs",
      excerpt: "Découvrez comment transformer vos événements sportifs avec une fan zone photobooth IA. Engagement spectateur et mémorabilité garantis.",
      author: "Thomas Sport",
      date: "10 novembre 2024",
      readTime: "12 min",
      image: "/marketing/fan-zone.jpg",
      category: "Événementiel"
    },
    {
      id: 4,
      slug: "campagne-photobooth-ia-cout-reduit",
      title: "Campagnes Photobooth IA à Coût Réduit : Maximiser l'Impact avec des Tablettes",
      excerpt: "Découvrez comment créer des campagnes marketing virales avec un budget limité en utilisant des tablettes photobooth IA. ROI exceptionnel garanti.",
      author: "Julie Budget",
      date: "8 novembre 2024",
      readTime: "10 min",
      image: "/marketing/retail003.jpg",
      category: "Budget"
    },
    {
      id: 5,
      slug: "campagne-virale-retail",
      title: "Campagnes Virales Retail : Créer l'Engagement avec WaiBooth",
      excerpt: "Guide pratique pour créer des campagnes marketing virales dans le retail avec WaiBooth. Découvrez les stratégies qui transforment les clients en ambassadeurs.",
      author: "Sarah Retail",
      date: "6 novembre 2024",
      readTime: "11 min",
      image: "/marketing/retail001.jpg",
      category: "Retail"
    },
    {
      id: 6,
      slug: "evolution-photobooths-evenements",
      title: "L'évolution des photobooths : de la cabine traditionnelle à l'expérience événementielle moderne",
      excerpt: "Découvrez comment les photobooths se sont transformés au fil des années pour devenir un incontournable de tout événement réussi.",
      author: "Sophie Martin",
      date: "12 Mai 2023",
      readTime: "8 min",
      image: "/blog/photobooth-evolution.jpg",
      category: "Tendances"
    },
    {
      id: 7,
      slug: "photomosaique-art-collaboratif",
      title: "La photomosaïque : quand vos invités créent une œuvre d'art collaborative",
      excerpt: "Comment la technologie de photomosaïque transforme des centaines de photos individuelles en une création visuelle spectaculaire lors de vos événements.",
      author: "Thomas Beaumont",
      date: "24 Juin 2023",
      readTime: "6 min",
      image: "/blog/photomosaic-art.jpg",
      category: "Innovation"
    },
    {
      id: 8,
      slug: "ia-revolution-photobooth",
      title: "Comment l'IA révolutionne l'expérience photobooth pour vos événements",
      excerpt: "L'intelligence artificielle transforme radicalement les photobooths en offrant des expériences personnalisées et des créations uniques en temps réel.",
      author: "Julie Legrand",
      date: "8 Juillet 2023",
      readTime: "10 min",
      image: "/blog/ai-photobooth.jpg",
      category: "Technologie IA"
    },
    {
      id: 9,
      slug: "reussir-installation-photobooth",
      title: "10 conseils pour réussir l'installation de votre photobooth lors d'un événement",
      excerpt: "Guide pratique pour optimiser l'emplacement, l'éclairage et l'expérience utilisateur de votre photobooth lors de votre prochain événement.",
      author: "Marc Dupont",
      date: "15 Août 2023",
      readTime: "7 min",
      image: "/blog/photobooth-setup.jpg",
      category: "Conseils"
    },
    {
      id: 10,
      slug: "retour-investissement-photobooth",
      title: "Le ROI des photobooths pour les événements corporate : étude de cas",
      excerpt: "Analyse détaillée de l'impact commercial et du retour sur investissement des solutions photobooth lors d'événements professionnels.",
      author: "Nicolas Lambert",
      date: "2 Septembre 2023",
      readTime: "12 min",
      image: "/blog/corporate-roi.jpg",
      category: "Business"
    },
    {
      id: 11,
      slug: "tendances-photobooth-2024",
      title: "5 tendances photobooth qui domineront en 2024",
      excerpt: "Anticipez les innovations et tendances qui transformeront l'industrie du photobooth événementiel dans les mois à venir.",
      author: "Sophie Martin",
      date: "20 Octobre 2023",
      readTime: "9 min",
      image: "/blog/trends-2024.jpg",
      category: "Tendances"
    },
    {
      id: 12,
      slug: "coupe-pixie-femmes-seniors",
      title: "La coupe pixie intemporelle : le guide ultime pour les femmes de 50 ans et plus",
      excerpt: "Découvrez pourquoi la coupe pixie est le choix parfait pour les femmes matures qui souhaitent adopter un style élégant, moderne et facile à entretenir.",
      author: "Sophie Martin",
      date: "15 Août 2024",
      readTime: "8 min",
      image: "/coupe-cheveux/pixie001.jpg",
      category: "Coiffure & Style"
    },
    {
      id: 13,
      slug: "coiffures-tendance-seniors",
      title: "Coiffures Tendance pour Seniors 2025 : Style et Élégance à Tout Âge",
      excerpt: "Découvrez les dernières tendances coiffure spécialement adaptées aux seniors. Coupes modernes, techniques de styling et conseils pour sublimer vos cheveux matures avec style et élégance.",
      author: "Sophie Martin",
      date: "27 Août 2025",
      readTime: "8 min",
      image: "/coupe-cheveux/pixie002.jpg",
      category: "Coiffure & Style"
    },
    {
      id: 14,
      slug: "cheveux-gris-assumer-elegance",
      title: "Cheveux Gris : Assumer son Élégance Naturelle avec Style",
      excerpt: "Guide complet pour sublimer et entretenir vos cheveux gris. Découvrez comment transformer vos cheveux argentés en atout beauté avec nos conseils d'expert et tendances 2025.",
      author: "Sophie Martin",
      date: "27 Août 2025",
      readTime: "12 min",
      image: "/coupe-cheveux/pixie003.jpg",
      category: "Coiffure & Style"
    },
    {
      id: 15,
      slug: "coupes-cheveux-rajeunissantes",
      title: "10 Coupes de Cheveux Rajeunissantes pour Paraître 10 Ans de Moins",
      excerpt: "Découvrez les secrets des coiffeurs professionnels pour créer l'illusion de jeunesse. Guide complet des coupes qui subliment et rajeunissent instantanément votre visage.",
      author: "Sophie Martin",
      date: "27 Août 2025",
      readTime: "15 min",
      image: "/coupe-cheveux/pixie004.jpg",
      category: "Coiffure & Style"
    },
    {
      id: 16,
      slug: "photobooth-realite-augmentee-evenements",
      title: "La réalité augmentée révolutionne les photobooths : guide complet pour événements immersifs",
      excerpt: "Plongez dans l'univers des photobooths AR et découvrez comment cette technologie transforme l'expérience événementielle avec des interactions digitales spectaculaires.",
      author: "Alexandre Chen",
      date: "5 Novembre 2023",
      readTime: "11 min",
      image: "/blog/metaverse-gallery.jpg",
      category: "Technologie AR"
    },
    {
      id: 17,
      slug: "experience-qr-code-photobooth",
      title: "QR codes et photobooths : créer une expérience utilisateur sans friction",
      excerpt: "Optimisez l'engagement de vos invités avec des QR codes intelligents qui simplifient l'accès et le partage de vos photobooths événementiels.",
      author: "Marie Dubois",
      date: "18 Novembre 2023",
      readTime: "7 min",
      image: "/blog/qr-experience.jpg",
      category: "UX Design"
    }
  ];

  const categories = [
    { name: "Toutes les catégories", slug: "all" },
    { name: "Salon de Coiffure", slug: "salon-coiffure" },
    { name: "Street Marketing", slug: "street-marketing" },
    { name: "Événementiel", slug: "evenementiel" },
    { name: "Budget", slug: "budget" },
    { name: "Retail", slug: "retail" },
    { name: "Tendances", slug: "tendances" },
    { name: "Innovation", slug: "innovation" },
    { name: "Technologie IA", slug: "technologie-ia" },
    { name: "Conseils", slug: "conseils" },
    { name: "Business", slug: "business" },
    { name: "Coiffure & Style", slug: "coiffure-style" },
    { name: "Technologie AR", slug: "technologie-ar" },
    { name: "UX Design", slug: "ux-design" }
  ];

  // Fonction pour normaliser les catégories pour le filtrage
  const normalizeCategory = (category: string): string => {
    const categoryMap: { [key: string]: string } = {
      'Salon de Coiffure': 'salon-coiffure',
      'Street Marketing': 'street-marketing',
      'Événementiel': 'evenementiel',
      'Budget': 'budget',
      'Retail': 'retail',
      'Tendances': 'tendances',
      'Innovation': 'innovation',
      'Technologie IA': 'technologie-ia',
      'Conseils': 'conseils',
      'Business': 'business',
      'Coiffure & Style': 'coiffure-style',
      'Technologie AR': 'technologie-ar',
      'UX Design': 'ux-design'
    };
    return categoryMap[category] || category.toLowerCase().replace(/\s+/g, '-');
  };

  // Filtrer les articles en fonction de la catégorie sélectionnée
  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => normalizeCategory(article.category) === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog WaiBooth
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Découvrez les dernières tendances, conseils et innovations dans l'univers des photobooths et de l'expérience événementielle
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white/90">✨ Tendances 2024</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white/90">🤖 Intelligence Artificielle</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white/90">💡 Conseils d'experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.slug === selectedCategory
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Affichage du nombre d'articles */}
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} 
              {selectedCategory !== 'all' && (
                <span>
                  {' '}dans la catégorie{' '}
                  <span className="font-semibold text-blue-600">
                    {categories.find(cat => cat.slug === selectedCategory)?.name}
                  </span>
                </span>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link
                href={`/blog/${article.slug}`}
                key={article.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Message si aucun article trouvé */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aucun article trouvé dans cette catégorie.</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Voir tous les articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Restez informé des dernières tendances
            </h2>
            <p className="text-blue-100 mb-8">
              Recevez notre newsletter hebdomadaire avec les derniers articles, conseils et innovations du secteur
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
