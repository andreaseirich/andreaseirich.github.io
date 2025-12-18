# Kontaktformular Setup

Das Kontaktformular verwendet **Formspree**, einen kostenlosen Service für statische Websites.

## Einrichtung

### Schritt 1: Formspree Account erstellen
1. Gehe zu [https://formspree.io/](https://formspree.io/)
2. Erstelle einen kostenlosen Account (kostenlos bis zu 50 Formular-Einreichungen pro Monat)

### Schritt 2: Neues Formular erstellen
1. Nach dem Login, klicke auf "New Form"
2. Gib einen Namen für das Formular ein (z.B. "Portfolio Kontakt")
3. Formspree generiert eine eindeutige Form-ID

### Schritt 3: Form-ID in index.html eintragen
1. Öffne `index.html`
2. Finde die Zeile mit: `action="https://formspree.io/f/YOUR_FORM_ID"`
3. Ersetze `YOUR_FORM_ID` mit deiner tatsächlichen Formspree-Form-ID
4. Beispiel: `action="https://formspree.io/f/xpzgkqyz"`

### Schritt 4: E-Mail-Benachrichtigungen konfigurieren
1. In deinem Formspree-Dashboard kannst du die E-Mail-Adresse einstellen, an die die Formular-Einreichungen gesendet werden sollen
2. Optional: Aktiviere Auto-Responder, um automatische Bestätigungs-E-Mails an Absender zu senden

## Funktionalität

- ✅ Formular-Validierung (clientseitig)
- ✅ Erfolgs-/Fehlermeldungen
- ✅ Spam-Schutz (durch Formspree)
- ✅ Keine Backend-Infrastruktur erforderlich
- ✅ Funktioniert mit GitHub Pages

## Alternative Lösungen

Falls du Formspree nicht verwenden möchtest, gibt es folgende Alternativen:

### EmailJS
- JavaScript-basierte Lösung
- Erfordert API-Konfiguration
- Dokumentation: https://www.emailjs.com/

### Netlify Forms
- Nur wenn du Netlify für Hosting verwendest
- Automatische Formular-Erkennung

### Eigener Backend-Service
- Node.js/Express, Python/Flask, etc.
- Erfordert eigenen Server

## Testen

Nach der Einrichtung:
1. Fülle das Formular auf deiner Website aus
2. Sende eine Testnachricht
3. Prüfe dein E-Mail-Postfach (und Spam-Ordner)
4. Prüfe das Formspree-Dashboard für Einreichungen

## Kosten

- **Kostenlos**: Bis zu 50 Einreichungen pro Monat
- **Pro Plan**: $19/Monat für unbegrenzte Einreichungen
