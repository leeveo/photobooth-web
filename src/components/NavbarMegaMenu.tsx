"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Camera, 
  Smartphone, 
  Video, 
  Sparkles, 
  ArrowRight, 
  BrainCog, 
  Grid, 
  Box, 
  Glasses, 
  QrCode, 
  Globe, 
  Share2, 
  Users, 
  Film, 
  FastForward, 
  Edit,
  Palette,
  Music,
  Rotate3d,
  Bot,
  Activity,
  ImageIcon,
} from 'lucide-react';

const megaMenuData = {
  columns: [
    {
      title: 'Photobooth IA',
      icon: <Camera className="w-5 h-5" />,
      links: [
        { 
          name: 'Technologie IA', 
          href: '/technologie-ia', 
          description: 'Innovation photographique',
          icon: <BrainCog size={18} />
        },
        { 
          name: 'Photomosaïque', 
          href: '/photomosaique', 
          description: 'Création collective',
          icon: <Grid size={18} />
        },
        { 
          name: 'Kit photobooth', 
          href: '/kit-photobooth', 
          description: 'Matériel complet',
          icon: <Box size={18} />
        },
        { 
          name: 'Réalité augmentée', 
          href: '/realite-augmentee', 
          description: 'Expérience immersive',
          icon: <Glasses size={18} />
        }
      ]
    },
    {
      title: 'Solution Mobile',
      icon: <Smartphone className="w-5 h-5" />,
      links: [
        { 
          name: 'QR Code Photobooth', 
          href: '/qr-photobooth', 
          description: 'Accès instantané',
          icon: <QrCode size={18} />
        },
        { 
          name: 'Application web', 
          href: '/application-web', 
          description: 'Sans téléchargement',
          icon: <Globe size={18} />
        },
        { 
          name: 'Partage social', 
          href: '/photo-sharing', 
          description: 'Diffusion immédiate',
          icon: <Share2 size={18} />
        },
        { 
          name: 'Galerie LIVE', 
          href: '/galerie-live', 
          description: 'Visualisation temps-réel',
          icon: <Users size={18} />
        }
      ]
    },
    {
      title: 'Video Booth',
      icon: <Video className="w-5 h-5" />,
      links: [
        { 
          name: 'Clip AI', 
          href: '/videobooth', 
          description: 'Montage intelligent',
          icon: <Film size={18} />
        },
        { 
          name: 'Gif Animé', 
          href: '/gif-anime', 
          description: 'Animation ludique',
          icon: <FastForward size={18} />
        }
      
      ]
    },
    {
      title: 'Nouveautés',
      icon: <Sparkles className="w-5 h-5" />,
      featured: true,
      links: [
       
        { 
          name: 'Photo Live', 
          href: '/photolive', 
          description: 'Galerie temps réel',
          icon: <ImageIcon size={18} />
        },
        { 
          name: 'Video Live', 
          href: '/videolive', 
          description: 'Mur vidéo instantané',
          icon: <Video size={18} />
        },
        { 
          name: 'Karaoké Box', 
          href: '/karaoke-box', 
          description: 'Animation musicale',
          icon: <Music size={18} />
        },
     
      ],
      featuredItem: {
        title: 'PixelMotion',
        description: 'Découvrez nos toutes nouvelles animations interactives pour vos événements',
        image: '/features/pixelmotion.jpg',
        href: '/photolive',
      }
    }
  ]
};

interface NavbarMegaMenuProps {
  onClose?: () => void;
  isMobile?: boolean;
}

export default function NavbarMegaMenu({ onClose, isMobile = false }: NavbarMegaMenuProps) {
  if (isMobile) {
    return (
      <div className="space-y-4 mt-1 mb-2">
        {megaMenuData.columns.map((column, colIndex) => (
          <div key={colIndex} className="py-2">
            <h4 className="flex items-center gap-1.5 font-semibold text-indigo-600 mb-2 px-3">
              {column.icon}
              {column.title}
            </h4>
            <div className="space-y-3">
              {column.links.map((link, linkIndex) => (
                <div key={linkIndex}>
                  <Link 
                    href={link.href}
                    className="block py-2 px-3 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    onClick={onClose}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-indigo-500">{link.icon}</span>
                      <span>{link.name}</span>
                    </div>
                    <p className="text-xs text-gray-500 ml-7 mt-0.5">{link.description}</p>
                  </Link>
                </div>
              ))}
            </div>
            
            {column.featuredItem && (
              <div className="mt-3 mx-3 rounded-lg overflow-hidden border border-indigo-100">
                <div className="p-3 bg-indigo-50">
                  <h5 className="font-semibold text-indigo-700">{column.featuredItem.title}</h5>
                  <p className="text-sm text-indigo-600">{column.featuredItem.description}</p>
                  <Link 
                    href={column.featuredItem.href}
                    className="mt-2 text-xs font-medium text-indigo-700 flex items-center"
                    onClick={onClose}
                  >
                    En savoir plus
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  
  return (
    <div className="w-max bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden mega-menu-enter">
      <div className="grid grid-cols-4 gap-0">
        {megaMenuData.columns.map((column, colIndex) => (
          <div 
            key={colIndex} 
            className={`p-6 ${column.featured ? 'bg-gradient-to-br from-indigo-50 to-violet-50' : ''}`}
          >
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-indigo-600 mb-4">
              {column.icon}
              {column.title}
            </h3>
            <ul className="space-y-4">
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link 
                    href={link.href}
                    className="group block"
                  >
                    <div className="flex items-center text-gray-700 group-hover:text-indigo-600 mb-1">
                      <span className="text-indigo-500 mr-2">{link.icon}</span>
                      <span className="font-medium group-hover:translate-x-0.5 transition-transform">
                        {link.name}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 group-hover:text-gray-700 ml-7">
                      {link.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            
            {column.featuredItem && (
              <div className="mt-6 bg-white rounded-lg overflow-hidden shadow-sm border border-indigo-100">
                <div className="relative h-32 w-full">
                  <Image
                    src={column.featuredItem.image}
                    alt={column.featuredItem.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent flex items-end">
                    <div className="p-3">
                      <h4 className="text-white font-semibold">{column.featuredItem.title}</h4>
                      <p className="text-white/80 text-sm">{column.featuredItem.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white">
                  <Link 
                    href={column.featuredItem.href} 
                    className="text-sm font-medium text-indigo-600 flex items-center hover:text-indigo-800 transition-colors"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Footer with call-to-action banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex justify-between items-center">
        <p className="text-white font-medium">Besoin d'une solution sur mesure ?</p>
        <Link 
          href="/contact"
          className="px-4 py-1.5 bg-white text-indigo-700 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
        >
          Contactez-nous
        </Link>
      </div>
    </div>
  );
}
