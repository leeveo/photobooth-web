"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import NavbarMegaMenu from './NavbarMegaMenu';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [isMegaMenuMobile, setIsMegaMenuMobile] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setShowMegaMenu(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setShowMegaMenu(false);
    }, 150); // Petit délai pour permettre à la souris de se déplacer entre le bouton et le menu
  };

  useEffect(() => {
    return () => {
      if (megaMenuTimeoutRef.current) {
        clearTimeout(megaMenuTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-violet-700">PixelMagic</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="font-medium text-gray-700 hover:text-violet-700 transition-colors">
              Accueil
            </Link>
            
            {/* Menu Fonctionnalités avec MegaMenu */}
            <div className="relative" ref={megaMenuRef}>
              <button 
                className="font-medium text-gray-700 hover:text-violet-700 transition-colors flex items-center"
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
              >
                Fonctionnalités
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showMegaMenu && (
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 mt-2" 
                  style={{ minWidth: '900px', maxWidth: '95vw' }}
                  onMouseEnter={handleMegaMenuEnter}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <NavbarMegaMenu />
                </div>
              )}
            </div>
            
            <Link href="/event" className="font-medium text-gray-700 hover:text-violet-700 transition-colors">
              Événements
            </Link>
            <Link href="/tarifs" className="font-medium text-gray-700 hover:text-violet-700 transition-colors">
              Tarifs
            </Link>
            <Link href="/blog" className="font-medium text-gray-700 hover:text-violet-700 transition-colors">
              Blog
            </Link>
            <Link href="/faq" className="font-medium text-gray-700 hover:text-violet-700 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="font-medium text-gray-700 hover:text-violet-700 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/demo" 
              className="px-6 py-2.5 rounded-lg font-medium shadow-md 
                       bg-gradient-to-r from-violet-600 to-purple-600 text-white 
                       hover:from-violet-700 hover:to-purple-700 transition-all"
            >
              Demander une démo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-violet-700"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="block py-3 px-4 rounded-lg font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                onClick={closeMobileMenu}
              >
                Accueil
              </Link>
              
              {/* Mobile Fonctionnalités avec MegaMenu */}
              <div>
                <button 
                  onClick={() => setIsMegaMenuMobile(!isMegaMenuMobile)}
                  className="flex justify-between items-center w-full text-left py-3 px-4 rounded-lg font-medium
                            hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                >
                  <span>Fonctionnalités</span>
                  <svg className={`w-4 h-4 transform ${isMegaMenuMobile ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isMegaMenuMobile && (
                  <div className="pl-4">
                    <NavbarMegaMenu isMobile={true} onClose={closeMobileMenu} />
                  </div>
                )}
              </div>
              
              <Link 
                href="/event" 
                className="block py-3 px-4 rounded-lg font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                onClick={closeMobileMenu}
              >
                Événements
              </Link>
              <Link 
                href="/tarifs" 
                className="block py-3 px-4 rounded-lg font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                onClick={closeMobileMenu}
              >
                Tarifs
              </Link>
              <Link 
                href="/blog" 
                className="block py-3 px-4 rounded-lg font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
              <Link 
                href="/faq" 
                className="block py-3 px-4 rounded-lg font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
              <Link 
                href="/contact" 
                className="block py-3 px-4 rounded-lg font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              
              <div className="pt-4 mt-2 border-t border-gray-100">
                <Link 
                  href="/contact" 
                  className="block py-3 px-4 text-center rounded-lg font-medium 
                           bg-gradient-to-r from-indigo-600 to-purple-600 text-white
                           hover:from-indigo-700 hover:to-purple-700 transition-all
                           shadow-md hover:shadow-lg"
                  onClick={closeMobileMenu}
                >
                  Réserver une démo
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
