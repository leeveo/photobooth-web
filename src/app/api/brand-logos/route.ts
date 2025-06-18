import { readdirSync } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const brandDir = path.join(process.cwd(), 'public', 'brand');
  const exts = ['.jpg', '.jpeg', '.png', '.webp', '.svg'];
  
  try {
    const logos = readdirSync(brandDir)
      .filter(file => exts.some(ext => file.toLowerCase().endsWith(ext)))
      .map(file => `/brand/${file}`);
      
    return NextResponse.json(logos);
  } catch (e) {
    return NextResponse.json([]);
  }
}
