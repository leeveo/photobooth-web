import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import { readdirSync } from 'fs';

// Fonction utilitaire pour obtenir la liste des images du dossier /public/gallery
function getGalleryImages() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  const exts = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  try {
    return readdirSync(galleryDir)
      .filter(file => exts.some(ext => file.toLowerCase().endsWith(ext)))
      .map((file, idx) => ({
        src: `/gallery/${file}`,
        title: `Création IA #${idx + 1}`,
        style: 'Style artistique généré par IA'
      }));
  } catch (e) {
    return [];
  }
}

export default function GalleryPage() {
  const galleryImages = getGalleryImages();

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-violet-100 border border-violet-200">
            <span className="mr-2">🖼️</span>
            <span className="text-violet-800 text-sm font-medium">Générée par intelligence artificielle</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
           Découvrez nos<span className="text-gradient">Créations IA</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Explorez une sélection d'images générées par notre photomaton IA dans divers styles artistiques.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div key={i} className="gallery-card">
              <div className="aspect-square rounded-xl overflow-hidden relative group">
                <Image
                  src={img.src}
                  alt={img.title}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"></div>
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h4 className="text-white font-medium">{img.title}</h4>
                  <p className="text-white/70 text-sm">{img.style}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity z-30">
                  <Link href={img.src} target="_blank" className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 3L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 3H3V21H21V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
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
