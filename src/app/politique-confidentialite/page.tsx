import Link from 'next/link';

export default function PolitiqueConfidentialite() {
  return (
    <section className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
          
          <div className="space-y-8">
            <div>
              <p className="text-gray-700 mb-4">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
              <p className="text-gray-700">
                PixelMagic SAS accorde une grande importance à la protection de votre vie privée et de vos données personnelles. Cette politique de confidentialité décrit comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous utilisez notre site web et nos services de photobooth IA.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">1. Informations que nous collectons</h2>
              <p className="text-gray-700 mb-2">Nous pouvons collecter les types d'informations suivants :</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Informations d'identification personnelle</strong> : nom, prénom, adresse email, numéro de téléphone, adresse postale lorsque vous créez un compte, réservez nos services ou nous contactez.</li>
                <li><strong>Images et contenus générés</strong> : photos, vidéos et contenus créatifs générés lors de l'utilisation de nos photobooths.</li>
                <li><strong>Données d'utilisation</strong> : informations sur la façon dont vous utilisez notre site et nos services.</li>
                <li><strong>Informations techniques</strong> : adresse IP, type et version de navigateur, paramètres de fuseau horaire, types et versions de plug-in, système d'exploitation et plateforme.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Utilisation des données personnelles</h2>
              <p className="text-gray-700 mb-2">Nous utilisons vos données personnelles pour :</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Fournir, exploiter et maintenir nos services</li>
                <li>Traiter et gérer vos réservations et commandes</li>
                <li>Vous envoyer des informations techniques, des mises à jour et des messages liés au support</li>
                <li>Répondre à vos demandes et commentaires</li>
                <li>Améliorer nos services et développer de nouvelles fonctionnalités</li>
                <li>Assurer la sécurité de nos services et prévenir la fraude</li>
                <li>Vous envoyer des communications marketing avec votre consentement</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Conservation et traitement des images</h2>
              <p className="text-gray-700 mb-4">
                Lorsque vous utilisez nos photobooths, des photos et vidéos sont capturées et peuvent être traitées par notre technologie d'intelligence artificielle. Ces contenus sont stockés de manière sécurisée et conservés pour une durée limitée, en fonction du forfait choisi.
              </p>
              <p className="text-gray-700">
                Nous vous rappelons que vous êtes responsable d'obtenir le consentement des personnes apparaissant sur les photos prises lors de votre événement. PixelMagic ne pourra être tenu responsable des problèmes liés au droit à l'image des personnes photographiées.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Partage des données</h2>
              <p className="text-gray-700 mb-2">Nous pouvons partager vos données personnelles avec :</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Nos prestataires de services</strong> qui nous aident à fournir nos services (hébergement, paiement, analytics)</li>
                <li><strong>Nos partenaires</strong> avec votre consentement explicite</li>
                <li><strong>Les autorités légales</strong> si nous sommes légalement tenus de le faire</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Nous ne vendons pas vos données personnelles à des tiers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Sécurité des données</h2>
              <p className="text-gray-700">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès, utilisation, divulgation, altération ou destruction non autorisés. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée, et nous ne pouvons garantir une sécurité absolue.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Vos droits</h2>
              <p className="text-gray-700 mb-2">En vertu du Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit à l'effacement (droit à l'oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition au traitement</li>
                <li>Droit de ne pas faire l'objet d'une décision fondée exclusivement sur un traitement automatisé</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Pour exercer ces droits, veuillez nous contacter à rgpd@pixelmagic.fr.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
              <p className="text-gray-700">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site. Pour plus d'informations sur notre utilisation des cookies, veuillez consulter notre politique en matière de cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Modifications de cette politique</h2>
              <p className="text-gray-700">
                Nous pouvons mettre à jour cette politique de confidentialité périodiquement. Nous vous informerons de tout changement important en publiant un avis sur notre site ou en vous envoyant une notification par email.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
              <p className="text-gray-700">
                Si vous avez des questions concernant cette politique de confidentialité ou vos données personnelles, veuillez nous contacter à rgpd@pixelmagic.fr ou par courrier à PixelMagic SAS, 123 Avenue de l'Innovation, 75000 Paris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
