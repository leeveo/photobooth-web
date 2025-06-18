import { readdirSync } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  const exts = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  
  try {
    const images = readdirSync(galleryDir)
      .filter(file => exts.some(ext => file.toLowerCase().endsWith(ext)))
      .map((file, idx) => ({
        src: `/gallery/${file}`,
        title: `Création IA #${idx + 1}`,
        style: 'Style artistique généré par IA'
      }));
      
    return NextResponse.json(images);
  } catch (e) {
    return NextResponse.json([]);
  }
}
