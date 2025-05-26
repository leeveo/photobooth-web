'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    status: 'idle',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        status: 'error',
        message: 'Veuillez remplir tous les champs obligatoires.',
      });
      return;
    }
    
    setFormStatus({
      status: 'loading',
      message: 'Envoi en cours...',
    });
    
    // Simulation d'envoi (à remplacer par votre véritable API)
    try {
      // Simuler un délai de traitement
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simule une réussite
      setFormStatus({
        status: 'success',
        message: 'Merci pour votre message ! Nous vous répondrons sous 24h.',
      });
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: '',
      });
    } catch (error) {
      setFormStatus({
        status: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.',
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Contactez-nous</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Une question, un projet ou une demande de devis ? Notre équipe est à votre disposition.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Nos coordonnées</h2>
              <p className="text-gray-700 mb-8">
                N'hésitez pas à nous contacter directement ou à utiliser le formulaire pour toute demande.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-violet-700" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Téléphone</h3>
                    <p className="text-gray-700">+33 1 23 45 67 89</p>
                    <p className="text-sm text-gray-500 mt-1">Du lundi au vendredi, de 9h à 18h</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-violet-700" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-700">contact@pixelmagic.fr</p>
                    <p className="text-sm text-gray-500 mt-1">Nous répondons sous 24h ouvrées</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-violet-700" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Adresse</h3>
                    <p className="text-gray-700">123 Avenue de l'Innovation<br />75000 Paris, France</p>
                    <p className="text-sm text-gray-500 mt-1">Sur rendez-vous uniquement</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10 rounded-lg overflow-hidden h-64 bg-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410654896!2d2.276995235331708!3d48.85883773941056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1655971752276!5m2!1sfr!2sfr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Envoyez-nous un message</h2>
              <p className="text-gray-700 mb-8">
                Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                      Type d'événement
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner</option>
                      <option value="wedding">Mariage</option>
                      <option value="corporate">Événement d'entreprise</option>
                      <option value="birthday">Anniversaire</option>
                      <option value="conference">Conférence</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Date de l'événement
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Votre message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                {formStatus.status !== 'idle' && (
                  <div className={`p-4 rounded-lg ${
                    formStatus.status === 'success' 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : formStatus.status === 'error'
                        ? 'bg-red-50 text-red-700 border border-red-200'
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}>
                    <div className="flex items-center">
                      {formStatus.status === 'success' ? (
                        <CheckCircle className="w-5 h-5 mr-2" />
                      ) : formStatus.status === 'error' ? (
                        <AlertCircle className="w-5 h-5 mr-2" />
                      ) : (
                        <div className="animate-spin w-5 h-5 mr-2 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                      )}
                      {formStatus.message}
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={formStatus.status === 'loading'}
                >
                  {formStatus.status === 'loading' ? (
                    <>
                      <div className="mr-2 h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer le message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Questions fréquentes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "Quel est le délai de réponse?",
                  answer: "Nous nous engageons à répondre à toutes les demandes dans un délai de 24 heures ouvrées."
                },
                {
                  question: "Pouvez-vous vous déplacer partout en France?",
                  answer: "Oui, nous intervenons sur l'ensemble du territoire français. Des frais de déplacement peuvent s'appliquer selon la distance."
                },
                {
                  question: "Proposez-vous des démonstrations?",
                  answer: "Absolument! Nous organisons des démonstrations dans nos locaux à Paris ou des démos virtuelles pour les clients éloignés."
                },
                {
                  question: "Comment se déroule la réservation?",
                  answer: "Après validation du devis, nous vous demandons un acompte de 30% pour confirmer la réservation. Le solde est à régler 7 jours avant l'événement."
                }
              ].map((item, index) => (
                <div key={index} className="card bg-white">
                  <h3 className="font-bold mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a href="/faq" className="text-violet-600 font-medium hover:text-violet-800 flex items-center justify-center">
                Voir toutes les questions fréquentes
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
