'use client'

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { Briefcase, Users, Clock, Palette, Share2, Zap, BarChart, CreditCard, Shield, Activity, Award, Globe } from 'lucide-react';

// Component for image with fallback
interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc: string;
}

const ImageWithFallback = ({ src, fallbackSrc, ...props }: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return <Image {...props} src={imgSrc} onError={handleError} />;
};

export default function SolutionsAgences() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Solutions Agences
              </span>
              <span className="text-gray-800"> : Votre succès, notre priorité</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Proposez des expériences interactives innovantes à vos clients et démarquez-vous de la concurrence avec notre plateforme complète.
            </p>
            
            {/* Hero Image */}
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="/agency/agency-hero.jpg" 
                fallbackSrc="/steps/003_bis.png"
                alt="Solutions pour agences événementielles"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Add more sections as needed */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos solutions pour agences</h2>
          {/* Add content here */}
        </div>
      </section>
    </div>
  );
}
