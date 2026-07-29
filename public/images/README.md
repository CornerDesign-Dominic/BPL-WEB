# Bildablage

Bilddateien werden später manuell in diese Ordner eingefügt. Die Website verwendet bis dahin ausschließlich Platzhalterflächen und referenziert keine fehlenden Dateien.

Neue, noch nicht zugeordnete Bilder werden zunächst in `public/images/inbox` abgelegt. Von dort werden sie später in den passenden Zielordner (`branding`, `homepage`, `company`, `services` oder `team`) verschoben.

| Dateiname | Ordner | Verwendungszweck | Empfohlenes Seitenverhältnis | Empfohlenes Format |
| --- | --- | --- | --- | --- |
| `logo-eye.jpg` | `branding` | Augenmotiv im Header | quadratisch | JPG (vorhanden); künftig PNG mit transparentem Hintergrund oder SVG |
| `wuppertal-skyline.jpg` | `branding` | Dekorative Skyline am unteren Rand des Footers | breit, etwa 4:1 | JPG (vorhanden); künftig bevorzugt SVG |
| `hero.webp` | `homepage` | Großes Bild rechts im Hero-Bereich | 4:5 oder 3:4, mindestens 1200 px hoch | WebP oder AVIF |
| `company.webp` | `company` | Bild im Unternehmensabschnitt der Startseite | 4:3 | WebP oder AVIF |
| `express.webp` | `services` | Bild für Express- und Sonderfahrten | 3:2 oder 4:3 | WebP oder AVIF |
| `regular-transport.webp` | `services` | Bild für regelmäßige Transporte | 3:2 oder 4:3 | WebP oder AVIF |
| `groupage.webp` | `services` | Bild für Sammelgut und Stückgut | 3:2 oder 4:3 | WebP oder AVIF |
| `special-transport.webp` | `services` | Bild für Spezial- und Projekttransporte | 3:2 oder 4:3 | WebP oder AVIF |
| `team.webp` | `team` | Bild für den späteren Team- oder Karrierebereich | 16:9 oder 3:2 | WebP oder AVIF |

Verwenden Sie verständliche Dateinamen und legen Sie Bilder ausschließlich in dieser Ordnerstruktur ab. Bilder werden nicht im Code eingebettet. Sobald eine Datei vorliegt, kann der zugehörige Platzhalter gezielt durch `next/image` ersetzt werden.
