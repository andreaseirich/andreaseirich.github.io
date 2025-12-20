# Sitemap Troubleshooting

## Aktuelle Sitemap-URL
https://andreaseirich.github.io/sitemap.xml

## Validierung
Die Sitemap kann mit folgenden Tools validiert werden:
- https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Google Search Console Sitemap-Tester

## In Google Search Console einreichen

1. Gehe zu: https://search.google.com/search-console
2. Wähle deine Property: `andreaseirich.github.io`
3. Klicke auf "Sitemaps" im Menü
4. Gib ein: `sitemap.xml` (nur der Dateiname)
5. Klicke auf "Einreichen"

**Alternative**: Gib die vollständige URL ein: `https://andreaseirich.github.io/sitemap.xml`

## Häufige Probleme

1. **Cache-Verzögerung**: GitHub Pages kann 5-10 Minuten brauchen, bis Änderungen live sind
2. **Falsche URL**: Stelle sicher, dass du `sitemap.xml` (ohne Pfad) eingibst
3. **Berechtigung**: Die Sitemap muss öffentlich zugänglich sein (ist sie)

## Manuelle Indexierung beschleunigen

1. **URL Inspection Tool** in Google Search Console verwenden
2. Jede Seite einzeln zur Indexierung einreichen:
   - https://andreaseirich.github.io/
   - https://andreaseirich.github.io/honey-treasures.html
   - https://andreaseirich.github.io/tutorflow.html

## Status prüfen

Die Sitemap sollte unter folgender URL erreichbar sein:
```
https://andreaseirich.github.io/sitemap.xml
```

Falls die Sitemap weiterhin nicht gelesen werden kann, prüfe:
- Ist die Datei im Root-Verzeichnis? ✅ (Ja)
- Ist die XML-Struktur valide? ✅ (Ja)
- Ist die robots.txt korrekt? ✅ (Ja)
- Wurde die Sitemap in Google Search Console eingereicht? ⚠️ (Bitte prüfen)
