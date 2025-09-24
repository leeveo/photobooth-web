import Link from 'next/link';

export default function PolitiqueConfidentialite() {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Politique de Confidentialité
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-blue-700">🛡️ Votre confidentialité est notre priorité.</span><br />
                  WaiBooth.app SAS accorde une grande importance à la protection de votre vie privée et de vos données personnelles. Cette politique de confidentialité décrit comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous utilisez notre site web et nos services de photobooth IA.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">1. Informations que nous collectons</h2>
              </div>
              <p className="text-gray-700 mb-4">Nous pouvons collecter les types d'informations suivants :</p>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-l-4 border-green-500">
                  <p className="text-gray-700">
                    <span className="font-semibold text-green-700">👤 Informations d'identification personnelle :</span> nom, prénom, adresse email, numéro de téléphone, adresse postale lorsque vous créez un compte, réservez nos services ou nous contactez.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-l-4 border-green-500">
                  <p className="text-gray-700">
                    <span className="font-semibold text-green-700">📸 Images et contenus générés :</span> photos, vidéos et contenus créatifs générés lors de l'utilisation de nos photobooths.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-l-4 border-green-500">
                  <p className="text-gray-700">
                    <span className="font-semibold text-green-700">📊 Données d'utilisation :</span> informations sur la façon dont vous utilisez notre site et nos services.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-l-4 border-green-500">
                  <p className="text-gray-700">
                    <span className="font-semibold text-green-700">🔧 Informations techniques :</span> adresse IP, type et version de navigateur, paramètres de fuseau horaire, types et versions de plug-in, système d'exploitation et plateforme.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">2. Utilisation des données personnelles</h2>
              </div>
              <p className="text-gray-700 mb-4">Nous utilisons vos données personnelles pour :</p>
              <div className="grid gap-3">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-3 border-l-4 border-purple-500">
                  <p className="text-gray-700">⚙️ Fournir, exploiter et maintenir nos services</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-3 border-l-4 border-purple-500">
                  <p className="text-gray-700">📅 Traiter et gérer vos réservations et commandes</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-3 border-l-4 border-purple-500">
                  <p className="text-gray-700">📧 Vous envoyer des informations techniques, des mises à jour et des messages liés au support</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-3 border-l-4 border-purple-500">
                  <p className="text-gray-700">💬 Répondre à vos demandes et commentaires</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-3 border-l-4 border-purple-500">
                  <p className="text-gray-700">🚀 Améliorer nos services et développer de nouvelles fonctionnalités</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-3 border-l-4 border-purple-500">
                  <p className="text-gray-700">🔐 Assurer la sécurité de nos services et prévenir la fraude</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-3 border-l-4 border-purple-500">
                  <p className="text-gray-700">📢 Vous envoyer des communications marketing avec votre consentement</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">3. Conservation et traitement des images</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border-l-4 border-orange-500">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-orange-700">🤖 Traitement IA :</span> Lorsque vous utilisez nos photobooths, des photos et vidéos sont capturées et peuvent être traitées par notre technologie d'intelligence artificielle. Ces contenus sont stockés de manière sécurisée et conservés pour une durée limitée, en fonction du forfait choisi.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border-l-4 border-yellow-500">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-yellow-700">⚠️ Responsabilité :</span> Nous vous rappelons que vous êtes responsable d'obtenir le consentement des personnes apparaissant sur les photos prises lors de votre événement. WaiBooth.app ne pourra être tenu responsable des problèmes liés au droit à l'image des personnes photographiées.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">4. Partage des données</h2>
              </div>
              <p className="text-gray-700 mb-4">Nous pouvons partager vos données personnelles avec :</p>
              <div className="space-y-3 mb-4">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-3 border-l-4 border-indigo-500">
                  <p className="text-gray-700">
                    <span className="font-semibold text-indigo-700">🔧 Nos prestataires de services</span> qui nous aident à fournir nos services (hébergement, paiement, analytics)
                  </p>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-3 border-l-4 border-indigo-500">
                  <p className="text-gray-700">
                    <span className="font-semibold text-indigo-700">🤝 Nos partenaires</span> avec votre consentement explicite
                  </p>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-3 border-l-4 border-indigo-500">
                  <p className="text-gray-700">
                    <span className="font-semibold text-indigo-700">⚖️ Les autorités légales</span> si nous sommes légalement tenus de le faire
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-l-4 border-green-500">
                <p className="text-gray-700">
                  <span className="font-semibold text-green-700">✅ Engagement :</span> Nous ne vendons pas vos données personnelles à des tiers.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">5. Sécurité des données</h2>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-4 border-l-4 border-red-500">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-red-700">🔒 Protection maximale :</span> Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès, utilisation, divulgation, altération ou destruction non autorisés. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée, et nous ne pouvons garantir une sécurité absolue.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">6. Vos droits RGPD</h2>
              </div>
              <p className="text-gray-700 mb-4">En vertu du Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
              <div className="grid gap-3 mb-4">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-3 border-l-4 border-teal-500">
                  <p className="text-gray-700">👁️ Droit d'accès à vos données personnelles</p>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-3 border-l-4 border-teal-500">
                  <p className="text-gray-700">✏️ Droit de rectification des données inexactes</p>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-3 border-l-4 border-teal-500">
                  <p className="text-gray-700">🗑️ Droit à l'effacement (droit à l'oubli)</p>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-3 border-l-4 border-teal-500">
                  <p className="text-gray-700">⏸️ Droit à la limitation du traitement</p>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-3 border-l-4 border-teal-500">
                  <p className="text-gray-700">📦 Droit à la portabilité des données</p>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-3 border-l-4 border-teal-500">
                  <p className="text-gray-700">🛑 Droit d'opposition au traitement</p>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-3 border-l-4 border-teal-500">
                  <p className="text-gray-700">🤖 Droit de ne pas faire l'objet d'une décision fondée exclusivement sur un traitement automatisé</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border-l-4 border-violet-500">
                <p className="text-gray-700">
                  <span className="font-semibold text-violet-700">📧 Contact RGPD :</span> Pour exercer ces droits, veuillez nous contacter à waibooth.app@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">7. Cookies</h2>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border-l-4 border-yellow-500">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-yellow-700">🍪 Amélioration de l'expérience :</span> Nous utilisons des cookies pour améliorer votre expérience sur notre site. Pour plus d'informations sur notre utilisation des cookies, veuillez consulter notre politique en matière de cookies.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">8. Modifications de cette politique</h2>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border-l-4 border-emerald-500">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-emerald-700">🔄 Mises à jour :</span> Nous pouvons mettre à jour cette politique de confidentialité périodiquement. Nous vous informerons de tout changement important en publiant un avis sur notre site ou en vous envoyant une notification par email.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-lg p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">9. Contact</h2>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="leading-relaxed">
                  <span className="font-semibold">💬 Une question sur vos données ?</span><br />
                  Si vous avez des questions concernant cette politique de confidentialité ou vos données personnelles, veuillez nous contacter à 
                  <span className="font-semibold text-yellow-300 ml-1">waibooth.app@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
