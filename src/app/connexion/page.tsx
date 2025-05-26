'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simuler une connexion - À remplacer par votre authentification réelle
    setTimeout(() => {
      setIsLoading(false);
      // Rediriger ou afficher un message selon le résultat de l'authentification
      alert('Fonctionnalité en cours de développement');
    }, 1000);
  };

  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Link href="/" className="inline-flex items-center mb-6 text-violet-600 hover:text-violet-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="card bg-white p-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Connexion</h1>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Mot de passe
                  </label>
                  <Link href="/mot-de-passe-oublie" className="text-sm text-violet-600 hover:text-violet-700">
                    Mot de passe oublié ?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2 px-4 rounded-md hover:from-violet-700 hover:to-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Connexion en cours...' : 'Se connecter'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Pas encore de compte ?{' '}
                <Link href="/inscription" className="text-violet-600 hover:text-violet-700 font-medium">
                  Inscrivez-vous
                </Link>
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Ou connectez-vous à la plateforme SaaS pour gérer vos événements et accéder à vos statistiques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
