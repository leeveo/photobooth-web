import Link from 'next/link';

export default function MentionsLegales() {
  return (
    <section className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Informations légales</h2>
              <p className="text-gray-700 mb-4">
                Le site PixelMagic est édité par la société PixelMagic SAS, société par actions simplifiée au capital de 10 000 €, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 123 456 789, dont le siège social est situé au 123 Avenue de l'Innovation, 75000 Paris.
              </p>
              <p className="text-gray-700">
                Numéro de TVA intracommunautaire : FR12 123 456 789<br />
                Numéro de téléphone : +33 1 23 45 67 89<br />
                Email : contact@pixelmagic.fr
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Directeur de la publication</h2>
              <p className="text-gray-700">
                Le directeur de la publication du site est Monsieur Thomas Beaumont, en sa qualité de Président de la société PixelMagic SAS.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Hébergeur</h2>
              <p className="text-gray-700">
                Le site est hébergé par la société Vercel Inc., dont le siège social est situé au 340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis.<br />
                Site web : https://vercel.com<br />
                Email : legal@vercel.com
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Propriété intellectuelle</h2>
              <p className="text-gray-700 mb-4">
                L'ensemble du contenu de ce site, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société PixelMagic SAS à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
              </p>
              <p className="text-gray-700">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de PixelMagic SAS.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Données personnelles</h2>
              <p className="text-gray-700 mb-4">
                Les informations recueillies sur ce site sont nécessaires à la gestion de nos services et de nos relations commerciales. Elles peuvent être transmises aux sociétés qui contribuent à ces relations telles que celles chargées de l'exécution des services et commandes pour leur gestion, exécution, traitement et paiement.
              </p>
              <p className="text-gray-700 mb-4">
                Ces informations et données sont également conservées à des fins de sécurité, afin de respecter les obligations légales et réglementaires et ainsi que pour nous permettre d'améliorer et personnaliser les services que nous vous proposons et les informations que nous vous adressons.
              </p>
              <p className="text-gray-700">
                Pour en savoir plus sur notre politique de protection des données, veuillez consulter notre <Link href="/politique-confidentialite" className="text-violet-600 hover:text-violet-800 underline">Politique de confidentialité</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Loi applicable et juridiction</h2>
              <p className="text-gray-700 mb-4">
                Les présentes mentions légales sont régies par la loi française. En cas de litige, les tribunaux français seront compétents.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Contactez-nous</h2>
              <p className="text-gray-700">
                Pour toute question relative à ces mentions légales ou si vous souhaitez nous contacter, veuillez nous écrire à l'adresse email suivante : juridique@pixelmagic.fr ou par courrier à l'adresse du siège social indiquée ci-dessus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
