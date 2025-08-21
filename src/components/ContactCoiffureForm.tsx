'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactCoiffureFormProps {
  selectedPlan?: string;
}

export default function ContactCoiffureForm({ selectedPlan }: ContactCoiffureFormProps) {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    nomSalon: '',
    ville: '',
    nombreEmployes: '',
    typeInteret: selectedPlan || '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulation d'envoi - à remplacer par votre API
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      
      // Réinitialiser le formulaire après succès
      setTimeout(() => {
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          nomSalon: '',
          ville: '',
          nombreEmployes: '',
          typeInteret: selectedPlan || '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Demande envoyée avec succès !</h3>
        <p className="text-green-700">
          Nous vous contacterons dans les 24h pour organiser une démonstration personnalisée de notre solution.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
            Nom et Prénom *
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-colors"
            placeholder="Jean Dupont"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email professionnel *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-colors"
            placeholder="jean@monsalon.fr"
          />
        </div>

        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-colors"
            placeholder="06 12 34 56 78"
          />
        </div>

        <div>
          <label htmlFor="nomSalon" className="block text-sm font-medium text-gray-700 mb-2">
            Nom du salon *
          </label>
          <input
            type="text"
            id="nomSalon"
            name="nomSalon"
            required
            value={formData.nomSalon}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-colors"
            placeholder="Salon BeautyStyle"
          />
        </div>

        <div>
          <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-2">
            Ville *
          </label>
          <input
            type="text"
            id="ville"
            name="ville"
            required
            value={formData.ville}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-colors"
            placeholder="Paris"
          />
        </div>

        <div>
          <label htmlFor="nombreEmployes" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre d'employés
          </label>
          <select
            id="nombreEmployes"
            name="nombreEmployes"
            value={formData.nombreEmployes}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-colors"
          >
            <option value="">Sélectionnez</option>
            <option value="1">1 personne</option>
            <option value="2-5">2 à 5 personnes</option>
            <option value="6-10">6 à 10 personnes</option>
            <option value="11+">Plus de 10 personnes</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="typeInteret" className="block text-sm font-medium text-gray-700 mb-2">
          Solution qui vous intéresse *
        </label>
        <select
          id="typeInteret"
          name="typeInteret"
          required
          value={formData.typeInteret}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-colors"
        >
          <option value="">Sélectionnez une solution</option>
          <option value="platform">Abonnement Plateforme (49€/mois)</option>
          <option value="rental">Location Tablette (89€/mois)</option>
          <option value="purchase">Achat Tablette (1290€)</option>
          <option value="widget">Widget Site Web uniquement</option>
          <option value="custom">Solution personnalisée</option>
          <option value="demo">Démonstration gratuite</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message (optionnel)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-colors resize-none"
          placeholder="Décrivez vos besoins, vos questions ou toute information qui nous aiderait à mieux vous conseiller..."
        />
      </div>

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
          <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
          <p className="text-red-700">
            Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou nous contacter directement.
          </p>
        </div>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`inline-flex items-center px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-colors ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700'
          } text-white`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Demander une démonstration
            </>
          )}
        </button>
        
        <p className="text-sm text-gray-500 mt-4">
          En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe concernant nos solutions pour salons de coiffure.
        </p>
      </div>
    </form>
  );
}
