import Image from 'next/image';
import Link from 'next/link';
import { Box, CheckCircle, Camera, Zap, Smartphone, Palette, Clock, Download, Image as ImageIcon } from 'lucide-react';

export default function KitPhotobooth() {
  // Définir les features
  const features = [
    "Installation en moins de 10 minutes",
    "Technologie IA intégrée",
    "Compatible avec tous les événements",
    "Support technique inclus",
    "Livraison express en 48h"
  ];

  // Définir les éléments du kit
  const kitItems = [
    {
      title: "Support ajustable premium",
      description: "Support en aluminium léger mais robuste, réglable en hauteur (120-180 cm) avec fixation sécurisée pour tablette.",
      icon: <Box className="w-10 h-10 text-violet-600" />,
      image: "/kit-photobooth/support.jpg"
    },
    {
      title: "iPad Pro 11 pouces",
      description: "Tablette puissante préinstallée avec notre application PixelMagic et tous les filtres IA premium.",
      icon: <Smartphone className="w-10 h-10 text-violet-600" />,
      image: "/kit-photobooth/tablet.jpg"
    },
    {
      title: "Éclairage annulaire LED",
      description: "Anneau lumineux de 48 cm avec réglage de température et d'intensité pour des photos parfaites en toute condition.",
      icon: <Camera className="w-10 h-10 text-violet-600" />,
      image: "/kit-photobooth/ring-light.jpg"
    },
    {
      title: "Imprimante sans fil",
      description: "Imprimante photo compacte qui se connecte automatiquement pour des impressions instantanées de haute qualité.",
      icon: <Download className="w-10 h-10 text-violet-600" />,
      image: "/kit-photobooth/printer.jpg"
    },
    {
      title: "Accessoires personnalisables",
      description: "Kit d'accessoires thématiques incluant cadres, lunettes, chapeaux et plus encore, personnalisables selon votre événement.",
      icon: <Palette className="w-10 h-10 text-violet-600" />,
      image: "/kit-photobooth/accessories.jpg"
    },
    {
      title: "Fond photo réversible",
      description: "Toile de fond 2x2m avec support pliable, proposant deux textures différentes pour s'adapter à tous les types d'événements.",
      icon: <ImageIcon className="w-10 h-10 text-violet-600" />,
      image: "/kit-photobooth/backdrop.jpg"
    }
  ];

  // Étapes d'installation
  const installSteps = [
    {
      step: "1",
      title: "Déployez le support",
      description: "Dépliez le support et ajustez-le à la hauteur souhaitée avec le système de verrouillage simple.",
      icon: <Box className="w-8 h-8 text-white" />
    },
    {
      step: "2",
      title: "Montez la tablette",
      description: "Fixez l'iPad sur le support avec le système de fixation magnétique sécurisé.",
      icon: <Smartphone className="w-8 h-8 text-white" />
    },
    {
      step: "3",
      title: "Allumez le système",
      description: "Appuyez sur le bouton d'allumage, l'application se lance automatiquement avec tous vos paramètres.",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      step: "4",
      title: "Commencez à capturer",
      description: "Votre photobooth est prêt ! Les invités peuvent commencer à prendre des photos immédiatement.",
      icon: <Camera className="w-8 h-8 text-white" />
    }
  ];

  // Avantages
  const advantages = [
    {
      title: "Plug & Play",
      description: "Aucune configuration complexe, tout est préinstallé et prêt à l'emploi.",
      icon: <Zap className="w-6 h-6 text-violet-600" />
    },
    {
      title: "Ultra portable",
      description: "L'ensemble pèse moins de 7kg et tient dans une seule valise de transport (incluse).",
      icon: <Box className="w-6 h-6 text-violet-600" />
    },
    {
      title: "Support technique",
      description: "Assistance téléphonique pendant les événements en cas de besoin.",
      icon: <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 10h-4V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z" />
      </svg>
    },
    {
      title: "Mises à jour automatiques",
      description: "Nouveaux filtres et fonctionnalités ajoutés régulièrement via mises à jour cloud.",
      icon: <Download className="w-6 h-6 text-violet-600" />
    }
  ];

  // Options
  const options = [
    {
      title: "Personnalisation visuelle",
      price: "+149€",
      description: "Personnalisation complète de l'interface aux couleurs de votre marque, écrans d'accueil personnalisés et impressions avec logo.",
      image: "/kit-photobooth/option-branding.jpg"
    },
    {
      title: "Kit d'éclairage avancé",
      price: "+299€",
      description: "Deux panneaux LED latéraux supplémentaires avec diffuseurs et supports, pour un éclairage professionnel en toute condition.",
      image: "/kit-photobooth/option-lighting.jpg"
    },
    {
      title: "Arrière-plans premium",
      price: "+199€",
      description: "Set de 3 arrière-plans additionnels avec système de fixation rapide : texture or sequin, motif géométrique et fond vert pour montages personnalisés.",
      image: "/kit-photobooth/option-backdrop.jpg"
    }
  ];

  // Témoignages
  const testimonials = [
    {
      quote: "En tant que wedding planner, je cherchais une solution simple mais professionnelle. Le Kit Express a été parfait pour mes besoins, ultra-facile à installer entre deux préparatifs.",
      author: "Émilie Bertrand",
      role: "Wedding Planner - Paris",
      image: "/testimonials/testimonial-kit-1.jpg"
    },
    {
      quote: "La qualité des photos et la simplicité d'utilisation sont exceptionnelles. Mes clients sont toujours impressionnés par les créations IA qui rendent chaque événement unique.",
      author: "Thomas Renaud",
      role: "Photographe événementiel",
      image: "/testimonials/testimonial-kit-2.jpg"
    },
    {
      quote: "J'organise des événements corporate toute l'année. Ce kit est devenu un élément indispensable qui ajoute une touche mémorable et interactive à chaque soirée.",
      author: "Sophie Martinez",
      role: "Directrice événementiel - AgencePro",
      image: "/testimonials/testimonial-kit-3.jpg"
    }
  ];

  // Options d'achat
  const purchaseOptions = [
    {
      title: "Achat définitif",
      price: "2 999€",
      description: "Kit complet avec garantie 2 ans et accès aux mises à jour pendant 12 mois. Idéal pour une utilisation régulière.",
      features: [
        "Kit complet avec tous les accessoires",
        "Livraison et installation",
        "Formation à l'utilisation (2h)",
        "Garantie 2 ans pièces et main d'œuvre",
        "Support téléphonique prioritaire"
      ],
      cta: "Commander"
    },
    {
      title: "Location événement",
      price: "399€",
      period: "/événement",
      description: "Location ponctuelle pour un événement spécifique, livraison et récupération incluses. Durée de 24h.",
      features: [
        "Installation par nos techniciens",
        "Présence d'un opérateur en option (+199€)",
        "Accessoires personnalisés à votre événement",
        "Assistance technique 24h/24",
        "Assurance tous risques incluse"
      ],
      cta: "Réserver",
      popular: true
    },
    {
      title: "Location longue durée",
      price: "299€",
      period: "/mois",
      description: "Location mensuelle avec possibilité d'achat après 12 mois. Maintenance et mises à jour incluses.",
      features: [
        "Engagement minimum 3 mois",
        "Maintenance préventive trimestrielle",
        "Remplacement matériel sous 24h en cas de panne",
        "Mises à jour logicielles automatiques",
        "Option d'achat après 12 mois (-50% des loyers versés)"
      ],
      cta: "Souscrire"
    }
  ];

  // FAQ
  const faqItems = [
    {
      question: "Puis-je utiliser le kit en extérieur ?",
      answer: "Oui, le kit est conçu pour fonctionner aussi bien en intérieur qu'en extérieur couvert. L'éclairage LED est suffisamment puissant pour compenser la luminosité variable. Notez cependant qu'il n'est pas étanche et doit être protégé en cas de pluie."
    },
    {
      question: "Quelle est l'autonomie de la batterie ?",
      answer: "La tablette et l'imprimante ont une autonomie d'environ 6 heures d'utilisation continue. L'éclairage LED fonctionne pendant 3 heures à pleine puissance. Des batteries externes sont incluses pour prolonger l'autonomie si nécessaire."
    },
    {
      question: "Le kit nécessite-t-il une connexion Internet ?",
      answer: "Le kit peut fonctionner sans connexion Internet grâce au mode hors-ligne. Cependant, une connexion est nécessaire pour les fonctionnalités de partage sur les réseaux sociaux et l'envoi par email, ainsi que pour les mises à jour."
    },
    {
      question: "Combien de temps faut-il pour être opérationnel ?",
      answer: "L'installation complète prend environ 10 minutes pour une personne seule. Notre record est de 7 minutes ! Un guide d'installation rapide est inclus, et des tutoriels vidéo sont disponibles via un QR code sur l'équipement."
    },
    {
      question: "Puis-je personnaliser l'interface aux couleurs de mon événement ?",
      answer: "Absolument ! L'application permet une personnalisation basique des couleurs et du logo directement depuis la tablette. Pour des personnalisations plus avancées, notre option 'Personnalisation visuelle' vous offre un service sur mesure."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Kit Photobooth
              </span>
              <span className="text-gray-800"> Express</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Tout ce dont vous avez besoin pour créer une expérience photobooth professionnelle en quelques minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Commander votre kit
              </Link>
              <Link
                href="/demo"
                className="inline-block px-8 py-3 rounded-full bg-violet-300 text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander une démonstration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation du produit */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/kit-photobooth/kit-complet.jpg"
                  alt="Kit Photobooth Express"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="text-sm uppercase font-bold">À partir de</p>
                <p className="text-2xl font-bold">899€</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Créez des moments magiques en toute simplicité</h2>
              <p className="text-lg text-gray-700 mb-6">
                Le Kit Photobooth Express est une solution clé en main qui vous permet d'installer un photobooth professionnel en moins de 10 minutes, sans compétences techniques particulières.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Conçu pour les professionnels de l'événementiel, les photographes et les entreprises qui souhaitent offrir une expérience photobooth de qualité sans complications.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Ce qui est inclus dans votre kit</h2>
            <p className="text-lg text-gray-700">
              Tout ce dont vous avez besoin pour démarrer immédiatement, sans achat supplémentaire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kitItems.map((item, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full p-2 bg-violet-100 mr-3">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Installation ultra-rapide en 4 étapes</h2>
            <p className="text-lg text-gray-700">
              Prêt à l'emploi en moins de 10 minutes, sans compétence technique nécessaire.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {installSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href="https://www.youtube.com/watch?v=xyz" className="btn-secondary inline-flex items-center" target="_blank">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0zm3.5 10.5l-5 3c-.17.1-.35-.04-.35-.23v-6c0-.19.18-.33.35-.23l5 3c.17.1.17.33 0 .43z" />
                </svg>
                Voir la vidéo d'installation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pourquoi choisir notre Kit Photobooth Express</h2>
              <p className="text-lg text-gray-700 mb-8">
                Une solution pensée pour les professionnels qui veulent offrir une expérience photobooth de qualité sans les tracas techniques habituels.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <div className="rounded-full p-2 bg-violet-100 mr-3 flex-shrink-0">
                      {advantage.icon}
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{advantage.title}</h3>
                      <p className="text-gray-700 text-sm">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-first lg:order-last">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/kit-photobooth/usage-1.jpg"
                    alt="Kit en action - Mariage"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg mt-6">
                  <Image
                    src="/kit-photobooth/usage-2.jpg"
                    alt="Kit en action - Événement corporate"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/kit-photobooth/usage-3.jpg"
                    alt="Kit en action - Fête"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg mt-6">
                  <Image
                    src="/kit-photobooth/usage-4.jpg"
                    alt="Kit en action - Festival"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spécifications */}
      <section id="specifications" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Spécifications techniques</h2>
            <p className="text-lg text-gray-700">
              Des équipements de qualité professionnelle pour des résultats impeccables.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card bg-white overflow-hidden">
              <div className="border-b">
                <div className="flex">
                  <div className="w-1/3 p-4 bg-gray-50 font-semibold">Tablet</div>
                  <div className="w-2/3 p-4">
                    iPad Pro 11 pouces, 256 GB, Puce M1, Caméra 12MP Ultra Wide
                  </div>
                </div>
              </div>
              <div className="border-b">
                <div className="flex">
                  <div className="w-1/3 p-4 bg-gray-50 font-semibold">Support</div>
                  <div className="w-2/3 p-4">
                    Aluminium aviation, hauteur ajustable 120-180cm, poids max supporté 5kg, pliable
                  </div>
                </div>
              </div>
              <div className="border-b">
                <div className="flex">
                  <div className="w-1/3 p-4 bg-gray-50 font-semibold">Éclairage</div>
                  <div className="w-2/3 p-4">
                    LED Ring Light 48cm, 3200-5600K, intensité variable, batterie rechargeable intégrée (autonomie 3h)
                  </div>
                </div>
              </div>
              <div className="border-b">
                <div className="flex">
                  <div className="w-1/3 p-4 bg-gray-50 font-semibold">Imprimante</div>
                  <div className="w-2/3 p-4">
                    Imprimante thermique portable, papier 10x15cm, 300 DPI, connexion Wi-Fi/Bluetooth, batterie rechargeable
                  </div>
                </div>
              </div>
              <div className="border-b">
                <div className="flex">
                  <div className="w-1/3 p-4 bg-gray-50 font-semibold">Arrière-plan</div>
                  <div className="w-2/3 p-4">
                    Toile réversible 2x2m avec support démontable, 2 textures (uni/motif), traitement anti-reflet
                  </div>
                </div>
              </div>
              <div className="border-b">
                <div className="flex">
                  <div className="w-1/3 p-4 bg-gray-50 font-semibold">Logiciel</div>
                  <div className="w-2/3 p-4">
                    Application PixelMagic préinstallée, 50+ filtres IA, mode galerie, partage réseaux sociaux, photomosaïque
                  </div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="w-1/3 p-4 bg-gray-50 font-semibold">Transport</div>
                  <div className="w-2/3 p-4">
                    Valise de transport rigide avec roulettes et poignée télescopique, dimensions 65x45x25cm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Options et personnalisation</h2>
            <p className="text-lg text-gray-700">
              Adaptez votre kit à vos besoins spécifiques avec nos options premium.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {options.map((option, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-violet-600 text-white px-3 py-1 rounded-full font-semibold">
                    {option.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                  <p className="text-gray-700">{option.description}</p>
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
              Des professionnels de l'événementiel qui utilisent notre kit au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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

      {/* Options d'achat */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Options d'acquisition</h2>
            <p className="text-lg text-gray-700">
              Flexibilité maximale : achetez, louez ou optez pour notre formule de location avec option d'achat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {purchaseOptions.map((option, index) => (
              <div 
                key={index}
                className={`card bg-white ${option.popular ? 'border-violet-400 shadow-lg relative transform scale-105' : 'border-violet-100'}`}
              >
                {option.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Le plus populaire
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{option.price}</span>
                    {option.period && <span className="text-gray-600">{option.period}</span>}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className={option.popular ? "btn-primary w-full text-center block" : "btn-secondary w-full text-center block"}
                  >
                    {option.cta}
                  </Link>
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
              Tout ce que vous devez savoir sur notre Kit Photobooth Express.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((faq, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer vos événements ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Commandez dès aujourd'hui votre Kit Photobooth Express et recevez-le sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Commander votre kit
              </Link>
              <Link
                href="/demo"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander une démonstration
              </Link>
            </div>
            <p className="mt-8 text-sm opacity-80">
              Livraison disponible en France métropolitaine, Belgique, Suisse et Luxembourg.
              <br />Un conseiller vous contactera dans les 24h suivant votre commande pour confirmer les détails.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}


