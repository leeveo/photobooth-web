import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Blog() {
  const articles = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
      slug: "tendances-photobooth-2024",
      title: "5 tendances photobooth qui domineront en 2024",
      excerpt: "Anticipez les innovations et tendances qui transformeront l'industrie du photobooth événementiel dans les mois à venir.",
      author: "Sophie Martin",
      date: "20 Octobre 2023",
      readTime: "9 min",
      image: "/blog/trends-2024.jpg",
      category: "Tendances"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Le <span className="gradient-text">Blog</span> PixelMagic
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Actualités, tendances et conseils sur les photobooths IA et l'innovation événementielle
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Featured Article */}
          <div className="mb-16">
            <Link href={`/blog/${articles[0].slug}`} className="block group">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Image 
                    src={articles[0].image}
                    alt={articles[0].title}
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                      À la une
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-sm font-medium rounded-full mb-4">
                    {articles[0].category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-violet-700 transition-colors">
                    {articles[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{articles[0].date}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{articles[0].readTime} de lecture</span>
                    </div>
                    <span className="text-violet-600 font-medium flex items-center group-hover:text-violet-800">
                      Lire l'article
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <Link 
                href={`/blog/${article.slug}`}
                key={article.id}
                className="card bg-white hover:shadow-lg transition-shadow group"
              >
                <div className="relative rounded-t-xl overflow-hidden">
                  <div className="aspect-video">
                    <Image 
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 group-hover:text-violet-700 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <span className="text-violet-600 font-medium flex items-center group-hover:text-violet-800">
                      Lire
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Restez informé</h2>
            <p className="text-gray-700 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et actualités sur l'innovation photobooth.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                required
              />
              <button className="btn-primary whitespace-nowrap">
                S'abonner
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              En vous inscrivant, vous acceptez notre politique de confidentialité. Vous pouvez vous désabonner à tout moment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
