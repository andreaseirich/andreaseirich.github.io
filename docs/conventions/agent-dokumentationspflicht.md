# Agent / Claude: Dokumentation mitführen (verbindlich)

**Gilt für:** KI-Assistenten, die an diesem Projekt arbeiten.

## Harte Pflicht (NON-NEGOTIABLE)

1. **Keine Änderung ohne Doku-Update.** Wer Code, Config, Infra oder sichtbares Verhalten ändert, muss **in derselben Arbeitsphase** die passende Dokumentation aktualisieren.
2. **Keine „fertig"-Meldung ohne Doku-Check.** Vor Abschluss den Doku-Drift-Check durchführen.
3. **Micro-Change-Log führen.** Jede Änderung erhält einen Eintrag in `docs/CHANGE_LOG.md`.

## Timing

**Nach jedem logischen Block** — nicht erst am Ende einer Session.

## Was wohin?

| Situation | Doku anpassen |
|-----------|---------------|
| Neues Feature | `docs/features/` |
| Code-/Config-Änderung | `docs/CHANGE_LOG.md` |
| Ist-Stand | `docs/project/STATUS.md` |
| Architekturentscheidung | `docs/project/DECISIONS.md` |
| Bei Unterbrechung | `docs/CHANGE_LOG.md` → „Weiter bei:" |

## Doku-Drift-Check (Pflicht vor „fertig")

- [ ] `CHANGE_LOG.md` hat Einträge für alle Änderungen?
- [ ] `STATUS.md` spiegelt aktuellen Stand wider?
- [ ] Betroffene Feature-Dateien aktualisiert?
- [ ] Bei Abweichung vom Plan: dokumentiert?

## Stil

- Deutsch in Doku-Inhalten, ASCII in Dateinamen
- Echte Unicode-Zeichen: ä, ö, ü, ß — nicht ae, oe, ue, ss
- Modular: kleine Dateien statt Monolithe
