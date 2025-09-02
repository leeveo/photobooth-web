import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, eventType, eventDate, message } = await request.json();

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Les champs nom, email et message sont obligatoires.' },
        { status: 400 }
      );
    }

    // Configuration du transporteur email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true pour 465, false pour autres ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Contenu de l'email pour l'équipe
    const teamEmailContent = `
      Nouvelle demande de contact depuis le site web :
      
      Nom : ${name}
      Email : ${email}
      Téléphone : ${phone || 'Non renseigné'}
      Type d'événement : ${eventType || 'Non spécifié'}
      Date d'événement : ${eventDate || 'Non spécifiée'}
      
      Message :
      ${message}
    `;

    // Contenu de l'email de confirmation pour le client
    const clientEmailContent = `
      Bonjour ${name},
      
      Nous avons bien reçu votre demande de contact. Notre équipe vous répondra dans les plus brefs délais, généralement sous 24h.
      
      Récapitulatif de votre demande :
      - Type d'événement : ${eventType || 'Non spécifié'}
      - Date d'événement : ${eventDate || 'Non spécifiée'}
      - Message : ${message}
      
      Cordialement,
      L'équipe WaiBooth
      
      ---
      WaiBooth - Photobooth IA
      Email : contact@WaiBooth.app
    `;

    // Envoi de l'email à l'équipe
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'contact@WaiBooth.app',
      subject: `Nouvelle demande de contact - ${name}`,
      text: teamEmailContent,
      html: teamEmailContent.replace(/\n/g, '<br>'),
    });

    // Envoi de l'email de confirmation au client
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'Confirmation de réception - WaiBooth',
      text: clientEmailContent,
      html: clientEmailContent.replace(/\n/g, '<br>'),
    });

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
