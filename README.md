# Portfolio - Andreas Eirich

Ein modernes, responsives Portfolio-Website mit Dark Mode Design, das meine Projekte und Fähigkeiten präsentiert.

## 🎨 Features

- **Dark Mode Design**: Modernes, augenschonendes Dark Mode Interface
- **Responsive Design**: Optimiert für alle Geräte (Desktop, Tablet, Mobile)
- **Smooth Animations**: Flüssige Übergänge und Hover-Effekte
- **Glasmorphismus**: Moderne UI-Elemente mit Backdrop-Blur-Effekten
- **Gradient-Design**: Ansprechende Farbverläufe und visuelle Effekte
- **Sticky Navigation**: Fixierte Navigationsleiste für einfache Navigation
- **Kontaktformular**: Funktionsfähiges Kontaktformular mit direktem E-Mail-Versand (Web3Forms)
- **Projekt-Showcase**: Übersichtliche Darstellung von Projekten mit Technologie-Stack

## 🚀 Technologien

- **HTML5**: Semantische Strukturierung
- **CSS3**: Modernes Styling mit Flexbox, Grid, Animations und Custom Properties
- **JavaScript**: Interaktive Formular-Funktionalität
- **Web3Forms**: E-Mail-Versand-Service (kostenlos, keine Registrierung)
- **Google Fonts**: Poppins Schriftart für moderne Typografie
- **Responsive Design**: Mobile-First Ansatz

## 📁 Projektstruktur

```
portfolio/
├── index.html          # Haupt-HTML-Datei
├── style.css           # Stylesheet mit Dark Mode Design
└── README.md           # Projekt-Dokumentation
```

## 🛠️ Installation & Setup

1. **Repository klonen oder herunterladen**
   ```bash
   git clone https://github.com/andreaseirich/andreaseirich.github.io.git
   cd andreaseirich.github.io
   ```

2. **Lokale Entwicklung**
   - Öffne die `index.html` Datei direkt im Browser, oder
   - Nutze einen lokalen Entwicklungsserver:
     ```bash
     # Mit Python
     python -m http.server 8000
     
     # Mit Node.js (http-server)
     npx http-server
     ```

3. **Im Browser öffnen**
   - Navigiere zu `http://localhost:8000` (oder dem entsprechenden Port)

## 📱 Verwendung

Die Website besteht aus folgenden Hauptbereichen:

- **Header**: Hero-Section mit Name und Beschreibung
- **Navigation**: Sticky Navigation mit Sprungmarken zu den Bereichen
- **Über mich**: Persönliche Vorstellung und Fähigkeiten
- **Projekte**: Übersicht der entwickelten Projekte mit Details
- **Kontakt**: Funktionsfähiges Kontaktformular mit direktem E-Mail-Versand
- **Footer**: Copyright-Informationen

## 🎯 Design-Highlights

### Farbpalette
- **Hintergrund**: Dunkles Schwarz (#0a0a0a) mit subtilen Gradient-Overlays
- **Akzente**: Lila-Blau Gradient (#6a11cb → #2575fc)
- **Text**: Helles Grau (#e0e0e0) für optimale Lesbarkeit

### Animationen
- Fade-in Animationen beim Laden
- Smooth Scroll-Verhalten
- Hover-Effekte auf interaktiven Elementen
- Gradient-Animationen im Header

### Responsive Breakpoints
- Desktop: > 768px (volle Features)
- Tablet: 768px (angepasstes Layout)
- Mobile: < 768px (optimiert für Touch)

## 📝 Anpassungen

### Eigene Projekte hinzufügen

Bearbeite die `index.html` Datei und füge neue Projekt-Karten im `<section id="projects">` Bereich hinzu:

```html
<div class="project">
  <h3>Projektname</h3>
  <p>Projektbeschreibung</p>
  <ul>
    <li>Technologie 1: X%</li>
    <li>Technologie 2: Y%</li>
  </ul>
  <a href="https://github.com/username/project" target="_blank">Repository auf GitHub</a>
</div>
```

### Farben anpassen

Die Hauptfarben können in `style.css` angepasst werden:
- Gradient-Farben: `#6a11cb` und `#2575fc`
- Hintergrund: `#0a0a0a`
- Text: `#e0e0e0`

### Kontaktformular konfigurieren

Das Kontaktformular verwendet Web3Forms für direkten E-Mail-Versand. Die Konfiguration befindet sich in `index.html`:

```javascript
const WEB3FORMS_ACCESS_KEY = 'dein-access-key';
const YOUR_EMAIL = 'deine-email@example.com';
```

**Hinweis**: Das Formular ist bereits konfiguriert und funktionsfähig. E-Mails werden direkt an die konfigurierte Adresse gesendet.

## 🌐 Browser-Unterstützung

- ✅ Chrome (neueste Version)
- ✅ Firefox (neueste Version)
- ✅ Safari (neueste Version)
- ✅ Edge (neueste Version)

## 📄 Lizenz

Dieses Projekt ist persönliches Portfolio-Material. Alle Rechte vorbehalten.

## 👤 Autor

**Andreas Eirich**

- GitHub: [@andreaseirich](https://github.com/andreaseirich)
- Portfolio: [Portfolio-Website](https://andreaseirich.github.io)

## 🙏 Danksagungen

- [Google Fonts](https://fonts.google.com/) für die Poppins Schriftart
- Inspiration von modernen Dark Mode Designs

---

**Hinweis**: Dieses Portfolio wird kontinuierlich aktualisiert und verbessert. Feedback und Vorschläge sind willkommen!
