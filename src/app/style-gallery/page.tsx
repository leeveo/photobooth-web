'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styleTemplatesData from '../data/styleTemplatesData.json';

export default function StyleGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Get all unique collection IDs for the category buttons
  const categories = ['all', ...Array.from(new Set(styleTemplatesData.map(collection => collection.id)))];
  
  // Filter collections based on selected category
  const filteredCollections = selectedCategory === 'all' 
    ? styleTemplatesData 
    : styleTemplatesData.filter(collection => collection.id === selectedCategory);

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-violet-100 border border-violet-200">
            <span className="mr-2">🎨</span>
            <span className="text-violet-800 text-sm font-medium">Styles artistiques</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Explorez nos <span className="text-gradient">Styles IA</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Découvrez notre collection de styles artistiques disponibles pour transformer vos photos.
          </p>
          
          {/* Category Filter Buttons */}
          <div className="category-filters flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => {
              // Find the collection to get its name (for 'all' we use a default)
              const collection = category === 'all' 
                ? { name: 'Tous les styles' } 
                : styleTemplatesData.find(c => c.id === category);
                
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {collection?.name || category}
                </button>
              );
            })}
          </div>
        </div>

        {filteredCollections.map((collection) => (
          <div key={collection.id} className="mb-24 animate-fadeIn">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-6">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{collection.name}</h2>
                <p className="text-gray-600">{collection.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collection.styles.map((style) => (
                <div key={style.style_key} className="style-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square relative">
                    {style.preview_image ? (
                      <Image
                        src={style.preview_image}
                        alt={style.name}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <span className="text-gray-400">Aperçu non disponible</span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 text-xs font-medium bg-violet-100 text-violet-800 rounded-full">
                        {style.gender === 'm' ? 'Masculin' : style.gender === 'f' ? 'Féminin' : 'Unisexe'}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{style.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{style.description}</p>
                    {style.variations && (
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 7H17M7 12H17M7 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {style.variations} variation{style.variations > 1 ? 's' : ''}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-semibold shadow-lg hover:from-fuchsia-600 hover:to-violet-700 transition-colors text-lg"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
