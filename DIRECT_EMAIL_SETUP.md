# Direktes E-Mail-Versenden einrichten

Für direktes Senden von E-Mails (ohne E-Mail-Programm zu öffnen) gibt es mehrere Optionen:

## Option 1: Web3Forms (EINFACHSTE - Keine Registrierung nötig!)

1. Gehe zu [https://web3forms.com/](https://web3forms.com/)
2. Gib deine E-Mail-Adresse ein (z.B. `eirichandreas2004@icloud.com`)
3. Klicke auf "Get Your Access Key"
4. Du erhältst sofort einen Access Key (keine Registrierung!)
5. Kopiere den Access Key
6. Öffne `index.html` und ersetze `YOUR_ACCESS_KEY` in Zeile ~98 mit deinem Access Key
7. Fertig! Das Formular sendet jetzt direkt E-Mails

**Vorteile:**
- ✅ Keine Registrierung nötig
- ✅ Funktioniert sofort
- ✅ Kostenlos (250 E-Mails/Monat)
- ✅ Funktioniert mit jeder E-Mail-Adresse (iCloud, Gmail, Outlook, etc.)

## Option 2: Eigener Backend-Endpoint (Vercel/Netlify)

### Mit Vercel (kostenlos):

1. Erstelle einen Account auf [vercel.com](https://vercel.com) (kostenlos)
2. Installiere Vercel CLI: `npm i -g vercel`
3. Erstelle eine `vercel.json` Datei:
```json
{
  "functions": {
    "api/send-email.js": {
      "runtime": "nodejs18.x"
    }
  }
}
```

4. Verwende einen E-Mail-Service wie Resend:
   - Gehe zu [resend.com](https://resend.com)
   - Erstelle einen kostenlosen Account
   - Erhalte API Key
   - Installiere: `npm install resend`
   - Konfiguriere in `api/send-email.js`

5. Deploy auf Vercel: `vercel`
6. Kopiere die URL und setze sie in `index.html` als `BACKEND_URL`

### Mit Netlify Functions:

1. Erstelle einen Account auf [netlify.com](https://netlify.com) (kostenlos)
2. Erstelle `netlify/functions/send-email.js`
3. Verwende einen E-Mail-Service (siehe oben)
4. Deploy auf Netlify
5. Setze `BACKEND_URL` in `index.html`

## Option 3: Resend (Empfohlen für Backend)

1. Gehe zu [resend.com](https://resend.com)
2. Erstelle einen kostenlosen Account
3. Erhalte API Key
4. Verwende in deinem Backend:
```javascript
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'eirichandreas2004@icloud.com',
  subject: 'Kontaktanfrage',
  html: '<p>Nachricht</p>'
});
```

**Kostenlos:** 100 E-Mails/Monat

## Option 4: SendGrid

1. Gehe zu [sendgrid.com](https://sendgrid.com)
2. Erstelle einen kostenlosen Account
3. Erhalte API Key
4. Verwende in deinem Backend

**Kostenlos:** 100 E-Mails/Tag

## Empfehlung

**Für den einfachsten Start ohne Registrierung:**
→ Verwende **Web3Forms** (Option 1)

**Für professionelle Lösung:**
→ Verwende **Resend** mit **Vercel** (Option 2 + 3)

## Aktuelle Konfiguration

In `index.html` kannst du zwischen den Optionen wählen:

```javascript
// Option 1: Web3Forms (einfachste)
const WEB3FORMS_ACCESS_KEY = 'DEIN_ACCESS_KEY';

// Option 2: Eigener Backend
const BACKEND_URL = 'https://dein-backend.vercel.app/api/send-email';

// E-Mail-Adresse
const YOUR_EMAIL = 'eirichandreas2004@icloud.com';
```

Die Lösung fällt automatisch auf `mailto:` zurück, wenn nichts konfiguriert ist.
