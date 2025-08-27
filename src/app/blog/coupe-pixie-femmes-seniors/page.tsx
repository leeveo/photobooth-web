import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight, Scissors, Heart, Sparkles } from 'lucide-react';

export default function BlogArticle() {
  // Article metadata
  const article = {
    title: "La coupe pixie intemporelle : le guide ultime pour les femmes de 50 ans et plus",
    excerpt: "Découvrez pourquoi la coupe pixie est le choix parfait pour les femmes matures qui souhaitent adopter un style élégant, moderne et facile à entretenir.",
    author: "Sophie Martin",
    date: "15 Août 2024",
    readTime: "8 min",
    image: "/coupe-cheveux/pixie001.jpg",
    category: "Coiffure & Style"
  };

  // Related articles
  const relatedArticles = [
    {
      slug: "coiffures-tendance-seniors",
      title: "Les coiffures tendance pour femmes seniors : 10 styles qui rajeunissent",
      excerpt: "Explorez les coupes de cheveux modernes spécialement adaptées aux femmes de plus de 50 ans pour un look rafraîchi et élégant.",
      image: "/blog/senior-hairstyles.jpg",
    },
    {
      slug: "cheveux-gris-assumer-elegance",
      title: "Assumer ses cheveux gris avec élégance : le nouveau chic après 50 ans",
      excerpt: "Comment transformer ses cheveux gris en atout beauté et adopter cette tendance avec confiance et style.",
      image: "/blog/gray-hair-elegance.jpg",
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
                alt="Femme mature avec une élégante coupe pixie"
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
                <p className="text-sm text-gray-600">Experte en coiffure et beauté pour femmes matures</p>
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
            <p className="lead text-xl text-gray-700">
              La coupe pixie a conquis le cœur des femmes de tous âges, mais elle révèle un charme particulier chez les femmes matures. Loin des idées reçues qui associent les cheveux courts à un style trop masculin, la coupe pixie moderne offre une féminité sophistiquée qui sublime les traits et apporte une fraîcheur incomparable au visage.
            </p>
            
            <div className="my-8 bg-gradient-to-r from-violet-50 to-indigo-50 p-6 rounded-lg border-l-4 border-violet-500">
              <p className="italic text-gray-700 mb-0">
                "Une coupe pixie bien réalisée ne se contente pas de rajeunir : elle révèle la personnalité, met en valeur les traits du visage et offre une liberté au quotidien que beaucoup de femmes découvrent avec bonheur après 50 ans."
              </p>
            </div>

            <h2>Pourquoi la coupe pixie est-elle parfaite pour les femmes matures ?</h2>
            
            <p>
              La coupe pixie présente de nombreux avantages spécifiquement adaptés aux besoins et au style de vie des femmes de 50 ans et plus. Cette coupe iconique, popularisée par des icônes comme <strong>Audrey Hepburn</strong> et <strong>Mia Farrow</strong>, continue d'évoluer pour s'adapter aux tendances contemporaines tout en conservant son élégance intemporelle.
            </p>

            <div className="bg-gradient-to-r from-violet-50 to-indigo-50 rounded-xl p-6 my-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-violet-600 mb-2">5 min</div>
                  <p className="text-sm text-gray-600">de coiffage matinal</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-violet-600 mb-2">6 sem</div>
                  <p className="text-sm text-gray-600">entre les retouches</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-violet-600 mb-2">100%</div>
                  <p className="text-sm text-gray-600">adaptable à tous visages</p>
                </div>
              </div>
            </div>
            
            <h3>Un effet rajeunissant instantané</h3>
            
            <p>
              L'un des principaux atouts de la coupe pixie pour les femmes matures est son <strong>pouvoir rajeunissant</strong>. En dégageant le visage et le cou, elle attire l'attention sur les yeux et les pommettes, créant un effet lift naturel.
            </p>

            <div className="flex items-start space-x-4 my-6 p-4 bg-gray-50 rounded-lg">
              <div className="bg-violet-100 rounded-full p-2 flex-shrink-0">
                <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Le saviez-vous ?</h4>
                <p className="text-sm text-gray-600">Les cheveux courts donnent une impression de volume et de densité, particulièrement appréciable quand les cheveux ont tendance à s'affiner avec l'âge.</p>
              </div>
            </div>
            
            <p>
              Cette coupe permet aussi de <em>camoufler intelligemment</em> les premiers signes de l'âge au niveau du cou et de la nuque, zones souvent négligées dans d'autres styles de coiffure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
              <div className="flex flex-col items-center">
                <div className="rounded-lg overflow-hidden shadow-md mb-3 h-64 w-full">
                  <Image
                    src="/coupe-cheveux/pixie001.jpg"
                    alt="Coupe pixie élégante pour femme mature"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm text-center text-gray-600">Pixie élégante</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-lg overflow-hidden shadow-md mb-3 h-64 w-full">
                  <Image
                    src="/coupe-cheveux/pixie002.jpg"
                    alt="Coupe pixie moderne avec mèches"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm text-center text-gray-600">Pixie moderne</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-lg overflow-hidden shadow-md mb-3 h-64 w-full">
                  <Image
                    src="/coupe-cheveux/pixie003.jpg"
                    alt="Coupe pixie texturée volumineuse"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm text-center text-gray-600">Pixie texturée</p>
              </div>
            </div>
            
            <h3>Facilité d'entretien et gain de temps</h3>
            
            <div className="bg-white border-l-4 border-violet-500 p-6 my-6 shadow-sm">
              <p className="text-lg font-medium text-gray-800 mb-3">
                Pour beaucoup de femmes actives ou à la retraite, la <strong>simplicité d'entretien</strong> de la coupe pixie représente un avantage considérable.
              </p>
              
              <div className="bg-violet-50 rounded-lg p-4 mt-4">
                <h4 className="font-semibold text-violet-800 mb-2">Routine matinale express :</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>2 minutes</strong> : passage de doigts avec produit coiffant</li>
                  <li>• <strong>3 minutes</strong> : séchage rapide si nécessaire</li>
                  <li>• <strong>Style parfait</strong> toute la journée !</li>
                </ul>
              </div>
            </div>
            
            <p>
              Cette facilité d'entretien ne signifie pas pour autant un manque de sophistication. Au contraire, une coupe pixie bien taillée <em>garde sa forme plus longtemps</em> qu'une coupe longue et nécessite moins de retouches fréquentes.
            </p>
            
            <h3>Adaptabilité à tous les types de cheveux</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-br from-violet-50 to-indigo-50 p-6 rounded-xl">
                <h4 className="font-bold text-violet-800 mb-3">✨ Cheveux fins</h4>
                <p className="text-sm text-gray-700">Gagnent en volume apparent et en texture grâce aux techniques de coupe adaptées.</p>
              </div>
              <div className="bg-gradient-to-br from-violet-50 to-indigo-50 p-6 rounded-xl">
                <h4 className="font-bold text-violet-800 mb-3">💪 Cheveux épais</h4>
                <p className="text-sm text-gray-700">Révèlent leur texture naturelle de façon harmonieuse et moderne.</p>
              </div>
            </div>
            
            <p>
              Contrairement aux idées reçues, la coupe pixie s'adapte à <strong>tous les types de cheveux</strong>. Cheveux fins, épais, raides ou bouclés : chaque texture peut bénéficier d'une variante de pixie personnalisée.
            </p>

            <h2>Les différentes variantes de la coupe pixie pour femmes matures</h2>
            
            <div className="bg-violet-50 rounded-xl p-8 my-10">
              <h3 className="text-violet-800 font-bold mb-6 flex items-center">
                <Scissors className="w-6 h-6 mr-2" />
                Styles de pixie les plus flatteurs après 50 ans
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-violet-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <Heart className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Pixie classique sophistiquée</h4>
                    <p className="text-gray-600 text-sm">Coupe nette avec une frange effilée, parfaite pour un look professionnel et élégant.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-violet-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Pixie texturée voluminouse</h4>
                    <p className="text-gray-600 text-sm">Avec des couches effilées pour créer du mouvement et donner l'illusion de cheveux plus épais.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-violet-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <Heart className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Pixie asymétrique moderne</h4>
                    <p className="text-gray-600 text-sm">Une version contemporaine avec des longueurs inégales pour un effet jeune et dynamique.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-violet-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Pixie allongée sur le dessus</h4>
                    <p className="text-gray-600 text-sm">Plus de longueur sur le sommet du crâne pour plus de possibilités de coiffage.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3>La pixie classique revisitée</h3>
            
            <p>
              La version classique de la coupe pixie reste une valeur sûre pour les femmes matures. Caractérisée par des cheveux très courts sur les côtés et légèrement plus longs sur le dessus, elle se décline aujourd'hui avec des finitions plus douces et des contours moins marqués qu'à l'époque d'Audrey Hepburn.
            </p>
            
            <p>
              Cette variante convient particulièrement aux femmes aux traits fins et délicats, mettant en valeur la structure du visage sans l'alourdir.
            </p>
            
            <h3>La pixie texturée pour plus de volume</h3>
            
            <p>
              Pour les femmes dont les cheveux manquent de densité, la pixie texturée représente une solution idéale. Les couches effilées et les mèches déstructurées créent un effet de mouvement qui donne l'illusion de cheveux plus fournis.
            </p>
            
            <p>
              Cette technique permet également d'intégrer harmonieusement les cheveux gris ou blancs, leur donnant une allure moderne plutôt que vieillissante.
            </p>
            
            <h3>La pixie asymétrique pour un look contemporain</h3>
            
            <p>
              Pour les femmes qui souhaitent adopter un style plus audacieux tout en restant élégantes, la pixie asymétrique offre un parfait compromis. Une mèche plus longue d'un côté ou une frange latérale apportent une touche de modernité sans tomber dans l'excentricité.
            </p>

            <h2>Comment choisir sa coupe pixie selon sa morphologie</h2>
            
            <p className="text-lg text-center mb-8">
              Le succès d'une coupe pixie repose largement sur son adaptation à la <strong>morphologie du visage</strong>. Voici comment optimiser cette coupe selon votre profil :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-violet-100">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-violet-600 font-bold">○</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Visage rond</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  <strong>Objectif :</strong> créer de la hauteur et affiner les traits
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Plus de volume sur le dessus</li>
                  <li>✓ Côtés bien dégagés</li>
                  <li>✓ Frange effilée sur le côté</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-violet-100">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-violet-600 font-bold">□</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Visage carré</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  <strong>Objectif :</strong> adoucir les angles et arrondir
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Contours plus doux</li>
                  <li>✓ Couches effilées</li>
                  <li>✓ Frange balayée</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-violet-100">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-violet-600 font-bold">⬭</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Visage ovale</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  <strong>Avantage :</strong> s'adapte à toutes les variantes !
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>🌟 Versions créatives</li>
                  <li>🌟 Pixie classique</li>
                  <li>🌟 Liberté totale de style</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-violet-100">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-violet-600 font-bold">▭</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Visage allongé</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  <strong>Objectif :</strong> équilibrer et raccourcir visuellement
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Frange droite ou effilée</li>
                  <li>✓ Éviter trop de volume sur le dessus</li>
                  <li>✓ Largeur sur les côtés</li>
                </ul>
              </div>
            </div>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-3">Conseils de stylistes pour réussir sa pixie</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-violet-100 rounded-full p-2 mr-3">
                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Choisissez un coiffeur expérimenté</span>
                    <p className="text-sm text-gray-600">La pixie demande une expertise technique : assurez-vous que votre coiffeur maîtrise cette coupe</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-violet-100 rounded-full p-2 mr-3">
                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Adaptez à votre style de vie</span>
                    <p className="text-sm text-gray-600">Discutez avec votre coiffeur de vos habitudes et du temps que vous souhaitez consacrer au coiffage</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-violet-100 rounded-full p-2 mr-3">
                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Préparez la transition en douceur</span>
                    <p className="text-sm text-gray-600">Si vous avez les cheveux longs, envisagez une coupe intermédiaire avant la pixie</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-violet-100 rounded-full p-2 mr-3">
                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Investissez dans de bons produits</span>
                    <p className="text-sm text-gray-600">Une cire texturisante et un spray volumisant suffisent pour styliser votre pixie au quotidien</p>
                  </div>
                </div>
              </div>
            </div>

            <h2>L'entretien de votre coupe pixie : conseils pratiques</h2>
            
            <div className="bg-gradient-to-r from-violet-50 to-indigo-50 p-6 rounded-xl my-8">
              <p className="text-lg text-center text-gray-700 mb-0">
                Une coupe pixie bien entretenue conserve sa <strong>beauté et son éclat</strong> plus longtemps. Voici les clés pour maintenir votre style au quotidien :
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-violet-500">
                <h3 className="text-xl font-bold text-violet-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Fréquence des retouches
                </h3>
                
                <div className="bg-violet-50 p-4 rounded-lg mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-600">4-6 semaines</div>
                    <p className="text-sm text-gray-600">entre chaque visite</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm">
                  Contrairement aux cheveux longs, la pixie nécessite des retouches plus fréquentes pour conserver sa forme. Ces retouches régulières permettent de maintenir les proportions parfaites.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-violet-500">
                <h3 className="text-xl font-bold text-violet-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Styling quotidien
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="bg-violet-100 text-violet-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    <p className="text-sm text-gray-700">Appliquez une noisette de mousse volumisante sur cheveux humides</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-violet-100 text-violet-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    <p className="text-sm text-gray-700">Séchez en froissant légèrement avec les doigts</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-violet-100 text-violet-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    <p className="text-sm text-gray-700">Finalisez avec une pointe de cire modelante</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm my-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Produits recommandés
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-violet-50 rounded-lg">
                  <div className="text-2xl mb-2">🧴</div>
                  <h4 className="font-semibold text-gray-800 mb-1">Shampoing volumisant</h4>
                  <p className="text-xs text-gray-600">Pour donner corps aux cheveux fins</p>
                </div>
                <div className="text-center p-4 bg-violet-50 rounded-lg">
                  <div className="text-2xl mb-2">💨</div>
                  <h4 className="font-semibold text-gray-800 mb-1">Mousse texturisante</h4>
                  <p className="text-xs text-gray-600">Pour créer volume et tenue</p>
                </div>
                <div className="text-center p-4 bg-violet-50 rounded-lg">
                  <div className="text-2xl mb-2">🪄</div>
                  <h4 className="font-semibold text-gray-800 mb-1">Cire modelante</h4>
                  <p className="text-xs text-gray-600">Pour définir et structurer</p>
                </div>
                <div className="text-center p-4 bg-violet-50 rounded-lg">
                  <div className="text-2xl mb-2">✨</div>
                  <h4 className="font-semibold text-gray-800 mb-1">Spray brillance</h4>
                  <p className="text-xs text-gray-600">Pour un fini lumineux</p>
                </div>
              </div>
            </div>

            <h2>Célébrités inspirantes : des femmes matures qui portent la pixie avec élégance</h2>
            
            <div className="bg-violet-50 p-6 rounded-xl my-8">
              <p className="text-lg text-center text-gray-700">
                De nombreuses <strong>célébrités</strong> prouvent que la coupe pixie transcende les âges et sublime les femmes matures. Leurs choix capillaires inspirent et démontrent la versatilité de cette coupe iconique.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-violet-100">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-full mx-auto flex items-center justify-center mb-3">
                    <span className="text-2xl">👑</span>
                  </div>
                  <h3 className="text-xl font-bold text-violet-800">Jamie Lee Curtis</h3>
                  <p className="text-sm text-violet-600 font-medium">L'icône intemporelle</p>
                </div>
                <p className="text-gray-700 text-sm">
                  Fidèle à sa <strong>pixie argentée</strong> depuis des années, elle incarne l'élégance assumée. Sa coupe met en valeur ses traits expressifs et prouve que les cheveux gris sont un véritable atout beauté.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-violet-100">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-full mx-auto flex items-center justify-center mb-3">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-xl font-bold text-violet-800">Halle Berry</h3>
                  <p className="text-sm text-violet-600 font-medium">La pixie glamour</p>
                </div>
                <p className="text-gray-700 text-sm">
                  A popularisé la <strong>pixie sophistiquée</strong>, montrant qu'une coupe très courte peut être incroyablement féminine. Ses variations prouvent l'adaptabilité de ce style.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-violet-100">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-full mx-auto flex items-center justify-center mb-3">
                    <span className="text-2xl">🎭</span>
                  </div>
                  <h3 className="text-xl font-bold text-violet-800">Judi Dench</h3>
                  <p className="text-sm text-violet-600 font-medium">L'élégance britannique</p>
                </div>
                <p className="text-gray-700 text-sm">
                  Arbore une <strong>pixie distinguée</strong> qui complète parfaitement son style raffiné. Sa coupe prouve qu'on peut être élégante et moderne à tout âge.
                </p>
              </div>
            </div>

            <h2>Psychologie de la transformation : l'impact d'une pixie sur la confiance en soi</h2>
            
            <div className="bg-gradient-to-r from-violet-100 to-indigo-100 p-8 rounded-xl my-8">
              <p className="text-lg text-center text-gray-800 mb-6">
                Au-delà de l'aspect esthétique, adopter une coupe pixie représente souvent un <strong>tournant psychologique important</strong> pour les femmes matures.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🆓</div>
                  <h4 className="font-bold text-violet-800 mb-1">Libération</h4>
                  <p className="text-sm text-gray-700">Routine simplifiée, plus de temps libre</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💪</div>
                  <h4 className="font-bold text-violet-800 mb-1">Affirmation</h4>
                  <p className="text-sm text-gray-700">Style qui reflète sa vraie personnalité</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌟</div>
                  <h4 className="font-bold text-violet-800 mb-1">Redécouverte</h4>
                  <p className="text-sm text-gray-700">Mise en valeur des traits du visage</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 my-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-violet-500">
                <h3 className="text-lg font-bold text-violet-800 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Libération et simplicité
                </h3>
                <p className="text-gray-700">
                  Beaucoup de femmes témoignent du <strong>sentiment de liberté</strong> ressenti après avoir adopté une pixie. Finies les heures passées à coiffer des cheveux longs, place à une routine simplifiée qui libère du temps pour d'autres activités.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-violet-500">
                <h3 className="text-lg font-bold text-violet-800 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Affirmation de soi
                </h3>
                <p className="text-gray-700">
                  Choisir une pixie après 50 ans constitue souvent un <strong>acte d'affirmation personnelle</strong>. C'est décider de ne plus se conformer aux attentes sociétales qui associent féminité et cheveux longs, pour embrasser un style qui reflète sa vraie personnalité.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-violet-500">
                <h3 className="text-lg font-bold text-violet-800 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Redécouverte de ses traits
                </h3>
                <p className="text-gray-700">
                  En dégageant complètement le visage, la pixie permet de <strong>redécouvrir ses traits</strong>, souvent cachés derrière des cheveux plus longs. Cette mise en valeur du regard et des expressions faciales renforce la présence et le charisme.
                </p>
              </div>
            </div>

            <h2>Conclusion : oser la pixie, un choix de style et de vie</h2>
            
            <p>
              La coupe pixie pour les femmes matures représente bien plus qu'un simple changement capillaire. C'est l'adoption d'un style de vie plus libre, d'une beauté assumée qui ne cherche pas à dissimuler l'âge mais à le sublimer avec élégance et modernité.
            </p>
            
            <p>
              Que vous soyez tentée par la pixie classique intemporelle, la version texturée volumineuse ou l'interprétation asymétrique contemporaine, l'essentiel réside dans le choix d'une coupe adaptée à votre morphologie et à votre personnalité.
            </p>
            
            <p>
              N'hésitez pas à franchir le pas : avec les bons conseils et un coiffeur expérimenté, la coupe pixie peut devenir votre signature beauté, révélant une version de vous-même plus confiante et radieuse.
            </p>
            
            <div className="my-8 bg-gradient-to-r from-violet-100 to-indigo-100 p-6 rounded-lg">
              <p className="italic text-gray-800 mb-0">
                "Une femme qui choisit la pixie après 50 ans ne rajeunit pas : elle révèle sa beauté authentique, débarrassée des artifices, et affirme une confiance en elle qui n'a plus besoin de se cacher derrière des cheveux."
              </p>
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
