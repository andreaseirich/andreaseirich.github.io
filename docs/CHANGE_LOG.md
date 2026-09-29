# CHANGE_LOG.md — andreaseirich.github.io

Jede Änderung wird hier feingranular dokumentiert.
Format: `docs/conventions/micro-change-log.md`

*(Neue Tagesblöcke oben einfügen)*

### 2026-09-29 — Veraltete Angaben und kaputte Links korrigiert

#### 07:45 — Link auf privates Repo entfernt
- **Dateien:** `radhuus-nortrup.html`
- **Aktion:** Link-Karte „GitHub Repository“ entfernt; das Repo `radhuus-nortrup` ist privat, Besucher bekamen eine 404-Seite. Der Link zur Live-Website bleibt.
- **Ergebnis:** OK
- **Verifikation:** `grep` findet auf keiner Seite mehr Links auf private Repos
- **Nächster Schritt:** Preceptly-Screenshots reparieren
- **Blocker:** –
- **Weiter bei:** –

#### 07:50 — Preceptly-Screenshots repariert
- **Dateien:** `images/preceptly-*.png` (vorher `images/tutorflow-*.png`), `index.html`
- **Aktion:** Screenshots von `tutorflow-*` auf `preceptly-*` umbenannt. `preceptly.html` verwies bereits auf `preceptly-*.png`, die Dateien fehlten, deshalb erschienen dort nur Platzhalter. Verweis in `index.html` angepasst.
- **Ergebnis:** OK
- **Verifikation:** `grep -rn "tutorflow-"` über alle HTML-Dateien ohne Treffer; alle referenzierten Bilddateien vorhanden
- **Nächster Schritt:** Preceptly-Seite aktualisieren
- **Blocker:** –
- **Weiter bei:** –

#### 07:55 — Preceptly-Seite auf aktuellen Stand gebracht
- **Dateien:** `preceptly.html`
- **Aktion:** Status von „Submitted to Hackathon“ auf „Live at preceptly.de“ geändert (Hackathon als Ursprung); veraltete „Planned Features“ (u. a. native App, laut PRD nicht im Scope; Kalenderintegration, inzwischen live) durch „Added since the hackathon“ ersetzt; „Premium“ → „Pro plan“; Django 6.0 → 6.1; PostgreSQL als Produktionsdatenbank; Channels/Redis und Stripe im Stack ergänzt.
- **Ergebnis:** OK
- **Verifikation:** Abgleich mit `PRD.md` (Stand 24.09.2026), `CLAUDE.md` und `requirements.txt` im Repo `preceptly`
- **Nächster Schritt:** Schreibweise andicode.de
- **Blocker:** –
- **Weiter bei:** –

#### 08:00 — Schreibweise „andicode.de“ vereinheitlicht
- **Dateien:** `andicode.html`, `index.html`
- **Aktion:** „AndiCode.de“ durchgehend zu „andicode.de“ (Titel, Meta-Tags, Überschriften, Alt-Texte) geändert, auf Wunsch von Andreas.
- **Ergebnis:** OK
- **Verifikation:** `grep "AndiCode.de"` ohne Treffer
- **Nächster Schritt:** README und STATUS aktualisieren
- **Blocker:** –
- **Weiter bei:** –

#### 08:05 — README und STATUS aktualisiert
- **Dateien:** `README.md`, `docs/STATUS.md`
- **Aktion:** TutorFlow durch Preceptly ersetzt; Projektstruktur, Projektseiten und Projektliste um ChatCompanion, RADhuus Nortrup und andicode.de ergänzt.
- **Ergebnis:** OK
- **Verifikation:** `grep -i "tutorflow.html"` in Doku ohne Treffer (außer diesem Log)
- **Nächster Schritt:** –
- **Blocker:** –
- **Weiter bei:** –

### 2026-04-17 — Dokumentationsstruktur eingeführt

#### 12:00 — Vollständige docs/-Struktur angelegt
- **Dateien:** `docs/README.md`, `docs/STATUS.md`, `docs/CONTEXT_RECOVERY.md`, `docs/CHANGE_LOG.md`, `docs/conventions/`
- **Aktion:** GERMADE-konforme Dokumentationsstruktur für Portfolio eingerichtet.
- **Ergebnis:** OK
- **Verifikation:** Dateien vorhanden
- **Nächster Schritt:** Bei jeder Änderung hier eintr
