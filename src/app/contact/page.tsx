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
    
    // Envoi via l'API
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({
          status: 'success',
          message: 'Merci pour votre message ! Nous vous répondrons sous 24h. Un email de confirmation vous a été envoyé.',
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
      } else {
        setFormStatus({
          status: 'error',
          message: result.error || 'Une erreur est survenue lors de l\'envoi.',
        });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setFormStatus({
        status: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.',
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900 relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/5 to-indigo-600/5 rounded-full blur-3xl"></div>
          
          {/* Lumière animée qui se ballade */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-gradient-radial from-yellow-300/60 via-orange-400/40 to-yellow-200/20 rounded-full blur-2xl animate-[float_8s_ease-in-out_infinite]" 
                 style={{
                   animation: 'floatingLight 12s ease-in-out infinite',
                   animationDelay: '0s'
                 }}>
            </div>
            <div className="absolute w-64 h-64 bg-gradient-radial from-purple-300/50 via-violet-400/30 to-purple-200/15 rounded-full blur-xl animate-[float_10s_ease-in-out_infinite]" 
                 style={{
                   animation: 'floatingLight2 15s ease-in-out infinite reverse',
                   animationDelay: '2s'
                 }}>
            </div>
            <div className="absolute w-80 h-80 bg-gradient-radial from-indigo-300/40 via-blue-400/25 to-indigo-200/12 rounded-full blur-2xl" 
                 style={{
                   animation: 'floatingLight3 18s ease-in-out infinite',
                   animationDelay: '4s'
                 }}>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes floatingLight {
            0% { transform: translate(-20%, 80%) scale(0.8); opacity: 0.7; }
            25% { transform: translate(120%, 20%) scale(1.2); opacity: 1.0; }
            50% { transform: translate(80%, -10%) scale(0.9); opacity: 0.8; }
            75% { transform: translate(-10%, 30%) scale(1.1); opacity: 0.9; }
            100% { transform: translate(-20%, 80%) scale(0.8); opacity: 0.7; }
          }
          
          @keyframes floatingLight2 {
            0% { transform: translate(110%, -20%) scale(0.7); opacity: 0.6; }
            30% { transform: translate(-20%, 40%) scale(1.0); opacity: 0.9; }
            60% { transform: translate(60%, 90%) scale(0.8); opacity: 0.7; }
            100% { transform: translate(110%, -20%) scale(0.7); opacity: 0.6; }
          }
          
          @keyframes floatingLight3 {
            0% { transform: translate(50%, 100%) scale(0.6); opacity: 0.5; }
            35% { transform: translate(-30%, 10%) scale(1.3); opacity: 0.8; }
            70% { transform: translate(100%, 50%) scale(0.9); opacity: 0.6; }
            100% { transform: translate(50%, 100%) scale(0.6); opacity: 0.5; }
          }
        `}</style>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/20 text-violet-300 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Prise de Contact
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Parlons de Votre{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Projet
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Une question, un projet ou une demande de devis ? Notre équipe est à votre disposition.
            </p>

            {/* Encarts modernes flottants */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Encart 1 - Réponse Rapide */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Réponse sous 24h</h3>
                <p className="text-gray-300 text-sm">
                  Nous nous engageons à répondre à toutes vos demandes dans les 24 heures ouvrées
                </p>
              </div>

              {/* Encart 2 - Devis Gratuit */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Devis Gratuit</h3>
                <p className="text-gray-300 text-sm">
                  Recevez un devis personnalisé et détaillé gratuitement pour votre événement
                </p>
              </div>

              {/* Encart 3 - Support Expert */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Support Expert</h3>
                <p className="text-gray-300 text-sm">
                  Notre équipe d'experts vous accompagne de A à Z pour la réussite de votre projet
                </p>
              </div>
            </div>
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
                    <Mail className="w-5 h-5 text-violet-700" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-700">contact@WaiBooth.app</p>
                    <p className="text-sm text-gray-500 mt-1">Nous répondons sous 24h ouvrées</p>
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
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-lg border border-violet-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="font-bold text-lg mb-3 text-gray-800">{item.question}</h3>
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
