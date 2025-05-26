import Image from 'next/image';
import Link from 'next/link';
import { Share2, Mail, Smartphone, Send, Download, BarChart, Globe, Hash } from 'lucide-react';

// Temporairement remplacé les icônes react-icons par une solution plus simple

export default function PhotoSharing() {
  // Définir les plateformes sociales avec des noms simples en attendant d'installer react-icons
  const socialPlatforms = [
    { name: "Instagram", color: "bg-pink-600" },
    { name: "Facebook", color: "bg-blue-600" },
    { name: "Twitter", color: "bg-blue-400" },
    { name: "TikTok", color: "bg-black" },
    { name: "WhatsApp", color: "bg-green-500" },
    { name: "Gmail", color: "bg-red-500" },
    { name: "LinkedIn", color: "bg-blue-700" },
    { name: "Messenger", color: "bg-blue-500" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Photo Sharing
              </span>
              <span className="text-gray-800"> : Diffusez vos souvenirs instantanément</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Des solutions de partage instantané qui permettent à vos invités de recevoir et diffuser leurs photos en quelques secondes.
            </p>
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/photo-sharing/sharing-hero.jpg"
                alt="Partage de photos en action"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                    Immédiat et multiplateforme
                  </span>
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
              <h2 className="text-3xl font-bold mb-6">Solutions de partage instantané</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre système de Photo Sharing permet à vos invités de recevoir instantanément leurs créations et de les partager sur leurs réseaux sociaux, par email ou SMS, maximisant ainsi la visibilité de votre événement ou marque.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Cette solution s'intègre parfaitement avec nos photobooths et expériences smartphone, créant une expérience fluide et engageante qui génère un contenu authentique et viral.
              </p>
              <div className="bg-violet-50 border border-violet-100 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <Globe className="w-5 h-5 text-violet-600 mr-2" />
                  Amplifiez votre présence digitale
                </h3>
                <p className="text-gray-700">
                  En moyenne, les événements utilisant notre solution de partage voient leur visibilité sur les réseaux sociaux multipliée par 4, avec un taux de partage de 78% parmi les participants.
                </p>
              </div>
              <Link href="/contact"    className="inline-block px-8 py-3 rounded-full bg-purple border-2 border-white text-white font-semibold shadow-lg hover:bg-white/10 transition-colors text-lg"
              >
                Demander un devis
              </Link>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-3">
                    <Image 
                      src="/photo-sharing/sharing-email.jpg" 
                      alt="Partage par email" 
                      width={240} 
                      height={320}
                      className="rounded-lg w-full h-auto"
                    />
                    <div className="mt-3 flex items-center justify-center bg-violet-100 text-violet-700 py-2 px-3 rounded-lg text-sm font-medium">
                      <Mail className="w-4 h-4 mr-2" /> 
                      Email
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-2">
                    <Image 
                      src="/photo-sharing/sharing-instagram.jpg" 
                      alt="Partage sur Instagram" 
                      width={240} 
                      height={320}
                      className="rounded-lg w-full h-auto"
                    />
                    <div className="mt-3 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-3 rounded-lg text-sm font-medium">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                      </svg>
                      Instagram
                    </div>
                  </div>
                </div>
                <div className="space-y-6 mt-10">
                  <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-3">
                    <Image 
                      src="/photo-sharing/sharing-sms.jpg" 
                      alt="Partage par SMS" 
                      width={240} 
                      height={320}
                      className="rounded-lg w-full h-auto"
                    />
                    <div className="mt-3 flex items-center justify-center bg-green-100 text-green-700 py-2 px-3 rounded-lg text-sm font-medium">
                      <Smartphone className="w-4 h-4 mr-2" /> 
                      SMS
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-2">
                    <Image 
                      src="/photo-sharing/sharing-download.jpg" 
                      alt="Téléchargement direct" 
                      width={240} 
                      height={320}
                      className="rounded-lg w-full h-auto"
                    />
                    <div className="mt-3 flex items-center justify-center bg-blue-100 text-blue-700 py-2 px-3 rounded-lg text-sm font-medium">
                      <Download className="w-4 h-4 mr-2" /> 
                      Téléchargement
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Options de partage */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Options de partage complètes</h2>
            <p className="text-lg text-gray-700">
              Des solutions de diffusion adaptées à tous les besoins et préférences de vos invités.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Mail className="w-12 h-12 text-violet-600" />,
                title: "Email instantané",
                description: "Envoi immédiat des photos par email avec votre branding et message personnalisé."
              },
              {
                icon: <Smartphone className="w-12 h-12 text-violet-600" />,
                title: "SMS avec lien",
                description: "Réception des créations directement par SMS pour un partage facile depuis le mobile."
              },
              {
                icon: <Hash className="w-12 h-12 text-violet-600" />,
                title: "Réseaux sociaux",
                description: "Partage direct sur Instagram, Facebook, Twitter et autres avec hashtags personnalisés."
              },
              {
                icon: <Download className="w-12 h-12 text-violet-600" />,
                title: "QR code et téléchargement",
                description: "QR codes individuels pour récupérer facilement les photos sur n'importe quel appareil."
              }
            ].map((option, index) => (
              <div key={index} className="card bg-white text-center p-6">
                <div className="flex justify-center mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white rounded-xl shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <Image
                  src="/photo-sharing/gallery-preview.jpg"
                  alt="Galerie personnalisée"
                  width={300}
                  height={400}
                  className="rounded-lg w-full h-auto shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Galerie personnalisée</h3>
                <p className="text-gray-700 mb-4">
                  Chaque événement bénéficie d'une galerie web dédiée où toutes les photos sont automatiquement regroupées. Personnalisez-la aux couleurs de votre marque ou du thème de votre événement.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "URL personnalisée facile à mémoriser",
                    "Filtres et recherche par date, personne ou style",
                    "Protection par mot de passe en option",
                    "Statistiques de visites et téléchargements"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/demo" className="btn-secondary inline-flex items-center">
                  Voir une démo de galerie
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Les avantages du partage instantané</h2>
            <p className="text-lg text-gray-700">
              Maximisez l'impact de vos créations photo et vidéo grâce à nos solutions de diffusion optimisées.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Amplification organique",
                description: "Augmentez la visibilité de votre événement ou marque grâce aux partages spontanés de vos invités sur leurs réseaux.",
                stat: "+300%",
                statLabel: "de portée organique"
              },
              {
                title: "Engagement immédiat",
                description: "Les participants reçoivent instantanément leurs créations, maintenant l'enthousiasme et l'engagement élevés.",
                stat: "5 sec",
                statLabel: "temps moyen de réception"
              },
              {
                title: "Données marketing exploitables",
                description: "Collectez des coordonnées opt-in et analysez les comportements de partage pour affiner vos futures stratégies.",
                stat: "85%",
                statLabel: "taux de collecte d'emails"
              },
              {
                title: "Extension de l'expérience",
                description: "Prolongez l'impact de votre événement bien au-delà de sa durée réelle grâce aux partages et interactions post-événement.",
                stat: "2-3x",
                statLabel: "durée d'engagement"
              },
              {
                title: "Personnalisation de marque",
                description: "Chaque point de contact est personnalisable avec votre logo, couleurs et messages pour renforcer l'identité de marque.",
                stat: "100%",
                statLabel: "personnalisable"
              },
              {
                title: "Analyse complète",
                description: "Mesurez précisément le ROI de vos activations grâce à des statistiques détaillées sur les partages et l'engagement.",
                stat: "15+",
                statLabel: "métriques disponibles"
              }
            ].map((advantage, index) => (
              <div key={index} className="card bg-white overflow-hidden">
                <div className="p-6">
                  <div className="mb-4">
                    <div className="bg-violet-50 text-violet-700 inline-block px-4 py-2 rounded-lg font-bold">
                      {advantage.stat}
                    </div>
                    <div className="text-sm text-violet-600 mt-1">{advantage.statLabel}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intégrations */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Intégrations multiplateforme</h2>
            <p className="text-lg text-gray-700">
              Une compatibilité étendue pour une diffusion optimale sur tous les canaux.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-8 text-center">Plateformes et services pris en charge</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {socialPlatforms.map((platform, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-16 h-16 flex items-center justify-center ${platform.color} text-white rounded-full font-bold`}>
                    {platform.name.charAt(0)}
                  </div>
                  <p className="text-sm font-medium mt-2">{platform.name}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-100">
              <h4 className="font-bold mb-3">Intégrations API avancées</h4>
              <p className="text-gray-700 mb-4">
                Notre API permet également l'intégration avec des plateformes CRM, des applications événementielles et des systèmes marketing automation comme :
              </p>
              <div className="flex flex-wrap gap-2">
                {["Salesforce", "Mailchimp", "HubSpot", "Marketo", "Zapier", "Eventbrite"].map((service, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à amplifier l'impact de votre événement ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Nos solutions de partage instantané transforment chaque photo en une opportunité de visibilité pour votre marque.
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
    </>
  );
}
