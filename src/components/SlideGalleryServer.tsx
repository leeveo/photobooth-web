import Image from 'next/image';
import SlideGallery from './SlideGallery';

// Exemple de données pour la galerie
const galleryItems = [
  { id: 1, src: '/gallery/event1.jpg', alt: 'Événement corporate' },
  { id: 2, src: '/gallery/event2.jpg', alt: 'Mariage' },
  { id: 3, src: '/gallery/event3.jpg', alt: 'Anniversaire' },
  { id: 4, src: '/gallery/event4.jpg', alt: 'Salon professionnel' },
  { id: 5, src: '/gallery/event5.jpg', alt: 'Conférence' },
  { id: 6, src: '/gallery/event6.jpg', alt: 'Gala' },
];

export default function SlideGalleryServer() {
  // Images par défaut (remplacer par vos propres images)
  const images = [
    '/slides/slide1.jpg',
    '/slides/slide2.jpg',
    '/slides/slide3.jpg',
    '/slides/slide4.jpg',
  ];

  return (
    <div>
      <SlideGallery images={images} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="relative h-64 rounded-lg overflow-hidden shadow-md">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm">{item.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
