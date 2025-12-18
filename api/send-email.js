// Backend-Endpoint für Vercel/Netlify Functions
// Für Vercel: Speichere als api/send-email.js
// Für Netlify: Speichere als netlify/functions/send-email.js

// WICHTIG: Verwende einen kostenlosen E-Mail-Service wie:
// - Resend (resend.com) - 100 E-Mails/Monat kostenlos
// - SendGrid (sendgrid.com) - 100 E-Mails/Tag kostenlos
// - Mailgun (mailgun.com) - 5000 E-Mails/Monat kostenlos

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, to_email } = req.body;

  if (!name || !email || !message || !to_email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Beispiel mit Resend (kostenlos, einfach)
    // Installiere: npm install resend
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // 
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: to_email,
    //   subject: `Kontaktanfrage von ${name}`,
    //   html: `
    //     <h2>Neue Kontaktanfrage</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>E-Mail:</strong> ${email}</p>
    //     <p><strong>Nachricht:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `
    // });

    // Für jetzt: Einfache Antwort (ersetze mit echtem E-Mail-Service)
    return res.status(200).json({ 
      success: true,
      message: 'E-Mail würde gesendet werden (Backend muss konfiguriert werden)'
    });
  } catch (error) {
    console.error('E-Mail-Fehler:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
