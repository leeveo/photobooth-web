import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-violet-800 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/logo-white.svg" 
                alt="PixelMagic Logo" 
                width={180} 
                height={40} 
                className="h-10 w-auto" 
              />
            </Link>
            <p className="text-violet-100 mb-6">
              Solutions innovantes de photobooth et vidéobooth avec intelligence artificielle pour vos événements.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg className="h-5 w-5 text-violet-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.035 10.035 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482 13.98 13.98 0 01-10.15-5.147 4.92 4.92 0 001.522 6.55 4.892 4.892 0 01-2.23-.616v.06a4.923 4.923 0 003.95 4.827 4.996 4.996 0 01-2.224.085 4.948 4.948 0 004.6 3.42 9.89 9.89 0 01-7.29 2.04 13.94 13.94 0 007.55 2.213c9.053 0 14-7.5 14-14 0-.21 0-.42-.016-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg className="h-5 w-5 text-violet-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg className="h-5 w-5 text-violet-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white opacity-90">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-violet-100 hover:text-white transition-colors inline-block py-1">Accueil</Link></li>
              <li><Link href="/solutions" className="text-violet-100 hover:text-white transition-colors inline-block py-1">Solutions</Link></li>
              <li><Link href="/gallery" className="text-violet-100 hover:text-white transition-colors inline-block py-1">Galerie</Link></li>
              <li><Link href="/faq" className="text-violet-100 hover:text-white transition-colors inline-block py-1">FAQ</Link></li>
             <li><Link href="/contact" className="text-violet-100 hover:text-white transition-colors inline-block py-1">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white opacity-90">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/photobooth-ai" className="text-violet-100 hover:text-white transition-colors inline-block py-1">PhotoBooth IA</Link></li>
              <li><Link href="/videobooth" className="text-violet-100 hover:text-white transition-colors inline-block py-1">VideoBooth</Link></li>
              <li><Link href="/technologie-ia" className="text-violet-100 hover:text-white transition-colors inline-block py-1">Solutions IA</Link></li>
              <li><Link href="/event" className="text-violet-100 hover:text-white transition-colors inline-block py-1">Services événementiels</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white opacity-90">Contact</h3>
            <address className="not-italic text-violet-100">
              <p className="py-1 flex items-center gap-2">
                <svg className="h-5 w-5 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                123 Avenue des Photos, 75000 Paris, France
              </p>
              <p className="py-1 flex items-center gap-2">
                <svg className="h-5 w-5 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@pixelmagic.fr" className="hover:text-white transition-colors">
                  contact@pixelmagic.fr
                </a>
              </p>
              <p className="py-1 flex items-center gap-2">
                <svg className="h-5 w-5 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+33123456789" className="hover:text-white transition-colors">
                  +33 1 23 45 67 89
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Newsletter & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Recevez nos actualités</h4>
              <form className="flex max-w-sm">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-white/10 text-white border border-white/20 rounded-l-lg focus:outline-none focus:border-white/40"
                  required
                />
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-white text-violet-700 font-medium rounded-r-lg hover:bg-violet-100 transition-colors"
                >
                  S'inscrire
                </button>
              </form>
            </div>
            <div className="text-right text-sm text-violet-200 self-end">
              <p>&copy; {currentYear} PixelMagic. Tous droits réservés.</p>
              <div className="flex justify-end space-x-4 mt-2">
                <Link href="/politique-confidentialite" className="text-violet-200 hover:text-white">Confidentialité</Link>
                <Link href="/mentions-legales" className="text-violet-200 hover:text-white">Conditions d'utilisation</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
