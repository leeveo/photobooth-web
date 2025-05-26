import Link from 'next/link';
import { CheckCircle, XCircle } from 'lucide-react';

export default function Tarifs() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Des tarifs <span className="gradient-text">transparents</span> pour tous vos besoins
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Choisissez le forfait qui correspond le mieux à vos événements et à votre budget.
            </p>
          </div>
        </div>
      </section>

      {/* Plans de tarification */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Débutant */}
            <div className="card bg-white border-violet-100 hover:border-violet-300 transition-all">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Débutant</h3>
                <p className="text-gray-600 mb-6">Parfait pour les petits événements</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">59€</span>
                  <span className="text-gray-600">/événement</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "1 heure d'utilisation",
                    "Filtres IA standard",
                    "Galerie en ligne (30 jours)",
                    "Partage sur réseaux sociaux",
                    "Support par email"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {[
                    "Photomosaïque",
                    "Personnalisation avancée",
                    "Analytics"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-400">
                      <XCircle className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/essai-gratuit" className="btn-secondary w-full text-center block">
                  Commencer
                </Link>
              </div>
            </div>
            
            {/* Plan Professionnel */}
            <div className="card bg-white border-violet-300 shadow-lg hover:shadow-xl relative transform scale-105">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Le plus populaire
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Professionnel</h3>
                <p className="text-gray-600 mb-6">Idéal pour les événements d'entreprise</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">149€</span>
                  <span className="text-gray-600">/événement</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "4 heures d'utilisation",
                    "Filtres IA premium",
                    "Photomosaïque standard",
                    "Galerie en ligne (90 jours)",
                    "Partage sur réseaux sociaux",
                    "Personnalisation logo/couleurs",
                    "Support prioritaire"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {[
                    "Analytics avancés"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-400">
                      <XCircle className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/essai-gratuit" className="btn-primary w-full text-center block">
                  Commencer
                </Link>
              </div>
            </div>
            
            {/* Plan Entreprise */}
            <div className="card bg-white border-violet-100 hover:border-violet-300 transition-all">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Entreprise</h3>
                <p className="text-gray-600 mb-6">Solution complète pour grands événements</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">349€</span>
                  <span className="text-gray-600">/événement</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Utilisation illimitée",
                    "Tous les filtres IA",
                    "Photomosaïque avancée",
                    "Galerie permanente",
                    "Partage multi-plateformes",
                    "Personnalisation complète",
                    "Analytics avancés",
                    "Support dédié 24/7",
                    "Mode hors-ligne"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-secondary w-full text-center block">
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Abonnements */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Abonnements pour utilisations multiples</h2>
            <p className="text-gray-600">
              Économisez avec nos forfaits pour plusieurs événements. Idéal pour les agences et les organisateurs réguliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Abonnement Mensuel */}
            <div className="card bg-white h-full">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Abonnement Mensuel</h3>
                <p className="text-gray-600 mb-6">Pour les organisateurs réguliers</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">399€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Jusqu'à 5 événements par mois",
                    "Toutes les fonctionnalités premium",
                    "Photomosaïque avancée",
                    "Personnalisation complète",
                    "Analytics avancés",
                    "Support prioritaire"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-secondary w-full text-center block">
                  Nous contacter
                </Link>
              </div>
            </div>

            {/* Abonnement Annuel */}
            <div className="card bg-white h-full">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Abonnement Annuel</h3>
                <p className="text-gray-600 mb-6">Pour les agences événementielles</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">3 999€</span>
                  <span className="text-gray-600">/an</span>
                  <p className="text-sm text-green-600 mt-1">Économisez 20% par rapport au mensuel</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Événements illimités",
                    "Toutes les fonctionnalités premium",
                    "Photomosaïque avancée",
                    "API pour intégrations personnalisées",
                    "Formation et onboarding",
                    "Gestionnaire de compte dédié"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary w-full text-center block">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-gray-600">
              Tout ce que vous devez savoir sur nos tarifs et nos offres.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Puis-je changer de forfait après avoir commencé ?",
                answer: "Oui, vous pouvez passer à un forfait supérieur à tout moment. La différence de prix sera calculée au prorata pour la période restante."
              },
              {
                question: "Y a-t-il des frais cachés ?",
                answer: "Non, nos tarifs sont transparents et incluent toutes les fonctionnalités mentionnées. Aucun coût supplémentaire ne vous sera facturé, sauf si vous demandez des services additionnels spécifiques."
              },
              {
                question: "Puis-je obtenir un remboursement si je ne suis pas satisfait ?",
                answer: "Nous offrons une garantie de satisfaction de 30 jours pour tous nos forfaits. Si vous n'êtes pas satisfait, nous vous rembourserons intégralement."
              },
              {
                question: "Avez-vous des tarifs spéciaux pour les associations à but non lucratif ?",
                answer: "Oui, nous proposons des réductions pour les organisations à but non lucratif. Veuillez nous contacter pour en discuter."
              },
              {
                question: "Comment fonctionne la facturation pour les événements multiples ?",
                answer: "Pour les abonnements, vous êtes facturé mensuellement ou annuellement selon le plan choisi. Pour les forfaits par événement, vous payez à l'avance pour chaque événement."
              }
            ].map((faq, index) => (
              <div key={index} className="card bg-white">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vous n'êtes pas sûr du forfait qui vous convient ?</h2>
            <p className="text-xl opacity-90 mb-8">
              Nos experts sont là pour vous aider à choisir la solution idéale pour votre événement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                contactez nous
              </Link>
              <Link
                href="/demo"
                className="inline-block px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Demander une démonstration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
