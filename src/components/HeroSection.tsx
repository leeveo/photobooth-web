"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Photobooth Event"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          style={{
            objectPosition: "center 30%"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/80 to-indigo-800/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transformez vos événements avec notre Photobooth IA
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Des expériences photo et vidéo extraordinaires grâce à l'intelligence artificielle
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              Demander un devis
            </Link>
            <Link href="/solutions" className="bg-transparent border-2 border-white hover:bg-white/10 transition-colors btn-primary">
              Découvrir nos solutions
            </Link>
          </div>
        </div>
      </div>

      {/* Décoration - Formes flottantes */}
      <div className="absolute top-1/4 right-[10%] w-20 h-20 bg-violet-500/20 backdrop-blur-xl rounded-full" />
      <div className="absolute bottom-1/4 right-[20%] w-32 h-32 bg-indigo-500/20 backdrop-blur-xl rounded-full" />
      <div className="absolute top-1/3 right-[30%] w-24 h-24 bg-pink-500/20 backdrop-blur-xl rounded-full" />
    </section>
  );
}
