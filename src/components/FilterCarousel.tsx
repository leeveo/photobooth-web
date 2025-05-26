"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const filters = [
  { id: 1, name: "Portrait Studio", image: "/filters/portrait-studio.jpg" },
  { id: 2, name: "Néon Retro", image: "/filters/neon-retro.jpg" },
  { id: 3, name: "Art Abstrait", image: "/filters/abstract-art.jpg" },
  { id: 4, name: "Cyberpunk", image: "/filters/cyberpunk.jpg" },
  { id: 5, name: "Aquarelle", image: "/filters/watercolor.jpg" },
  { id: 6, name: "Anime", image: "/filters/anime.jpg" }
];

export default function FilterCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      const scrollLeft = direction === 'left' 
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
      
      setTimeout(checkScrollButtons, 400);
    }
  };

  const scrollToNext = () => {
    if (carouselRef.current) {
      const newIndex = (activeIndex + 1) % filters.length;
      setActiveIndex(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * 320,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPrev = () => {
    if (carouselRef.current) {
      const newIndex = (activeIndex - 1 + filters.length) % filters.length;
      setActiveIndex(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * 320,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative max-w-full mx-auto px-4 py-8">
      <h3 className="text-2xl font-bold mb-6 text-center">Découvrez nos filtres IA</h3>
      
      {/* Boutons de navigation */}
      <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
        <button 
          onClick={scrollToPrev}
          className="bg-white rounded-full w-10 h-10 shadow-lg flex items-center justify-center hover:bg-gray-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      
      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
        <button 
          onClick={scrollToNext}
          className="bg-white rounded-full w-10 h-10 shadow-lg flex items-center justify-center hover:bg-gray-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Carousel */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-4"
        style={{ scrollbarWidth: 'none' }}
        onScroll={checkScrollButtons}
      >
        {filters.map((filter, index) => (
          <div 
            key={filter.id} 
            className={`min-w-[300px] snap-center rounded-lg overflow-hidden ${
              activeIndex === index ? 'ring-2 ring-violet-500' : ''
            }`}
          >
            <div className="relative h-64 w-full">
              <Image
                src={filter.image}
                alt={filter.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h4 className="font-medium text-center">{filter.name}</h4>
            </div>
          </div>
        ))}
      </div>
      
      {/* Indicateurs */}
      <div className="flex justify-center mt-4 gap-2">
        {filters.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? 'bg-violet-600' : 'bg-gray-300'
            }`}
            onClick={() => {
              setActiveIndex(index);
              carouselRef.current?.scrollTo({
                left: index * 320,
                behavior: 'smooth'
              });
            }}
          />
        ))}
      </div>
      
      {canScrollLeft && (
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center z-10 hover:bg-gray-50 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
      )}
      
      {canScrollRight && (
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center z-10 hover:bg-gray-50 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      )}
    </div>
  );
}
