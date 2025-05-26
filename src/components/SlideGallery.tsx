'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SlideGalleryProps {
  images: string[];
}

export default function SlideGallery({ images }: SlideGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avance automatiquement au slide suivant toutes les 5 secondes
  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos réalisations</h2>
          <p className="text-lg text-gray-600">
            Découvrez quelques-unes de nos plus belles créations
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <div className="relative h-[500px]">
              <Image 
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          
          {images.length > 1 && (
            <div className="flex justify-center mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    index === currentIndex ? 'bg-violet-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Voir slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
