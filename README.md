# Wassersport Mikulan

**Motorboot · Seerundfahrten · Bootscharter · Wasserski · Wakesurfen** — direkt am Seecorso, Velden am Wörthersee.

- **Live**: https://wassersport.arkserver.arkturian.com
- **Kontakt**: +43 664 220 34 00 · [Instagram](https://www.instagram.com/wassersportmikulan/)

---

## Stack

- **Build**: [Vite 8](https://vite.dev) + React 19 + TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) mit `@theme` design tokens (`src/index.css`)
- **Animation**: [framer-motion](https://motion.dev) — `whileInView` scroll reveals, `AnimatePresence`
- **Routing**: [react-router-dom v7](https://reactrouter.com) — Home + Impressum + Datenschutz
- **Karte**: [maplibre-gl](https://maplibre.org) — 3D perspective, auto-rotation, [OpenFreeMap](https://openfreemap.org) tiles (kein API-Key)

### Palette

| Token | Hex | Rolle |
|---|---|---|
| `coral` | `#ee6a4a` | Hero-Accent · CTAs · Highlights |
| `forest` | `#2a5d51` | Sections · Boat backdrop |
| `cream` | `#f5efe4` | Background · Textkontrast |
| `ink` | `#1a1810` | Body-Text · Footer |

### Fonts

- **Display**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) 700 · uppercase mit `-0.02em` letter-spacing
- **Body**: [Inter](https://fonts.google.com/specimen/Inter) 400–600

---

## Development

```bash
npm install
npm run dev        # localhost:5173
npm run build      # → dist/
npm run preview    # serves dist/
```

## Deployment

### Automatisch — GitHub Actions

Push zu `main` triggert `.github/workflows/deploy.yml` → SSH deploy zu Ziel-Server, dann `npm ci && npm run build && rsync dist/ → /var/www/…`.

**Required GH-Secrets** (Repo Settings → Secrets and variables → Actions):

| Secret | Wert |
|---|---|
| `DEPLOY_HOST` | `arkserver.arkturian.com` |
| `DEPLOY_USER` | `alex` |
| `DEPLOY_SSH_KEY` | Private-Key mit Push-Rechten auf arkserver:/var/www/… |
| `DEPLOY_PORT` | `22` (optional) |

### Manuell — Release-Script

Aus dem Repo-Root:

```bash
./devops release        # dev → main merge + push (triggert Actions)
./devops build          # local build test
./devops rollback       # restore from /var/backups/wassersport-mikulan-*
```

---

## Struktur

```
src/
├── App.tsx                 BrowserRouter + Routes + Nav + Footer
├── main.tsx                React root
├── index.css               Tailwind v4 @theme
├── data/content.ts         Alle Texte + Links + Coords zentral
├── components/
│   ├── Reveal.tsx          whileInView scroll-fade helper
│   ├── Nav.tsx             Fixed top nav, coral-on-scroll
│   ├── Hero.tsx            Full-bleed video + "A little party" headline
│   ├── Boat.tsx            NKT 20 spec-sheet layout
│   ├── Location.tsx        3D maplibre map with coral pin
│   ├── Captain.tsx         Kevin portrait + Q&A quote
│   ├── Booking.tsx         3 CTA cards (Anrufen / WhatsApp / Instagram)
│   └── Footer.tsx          Wave-video header + contact grid
└── pages/
    ├── Home.tsx            Komponiert alle sections
    └── Legal.tsx           Impressum + Datenschutz (kind prop)

public/media/
├── images/                 Kevin, NKT 20, Logo, Wave overlay
└── videos/                 Velden aerial, wave loops
```

---

## Content-Update

Alle Texte, Kontakt-Daten, Öffnungszeiten und Koordinaten in **`src/data/content.ts`**. Einfach editieren, `npm run build`, deployen.

Karten-Koordinaten (`brand.coords`): `[longitude, latitude]` — für Google-Maps-Link automatisch umgewandelt.

---

© 2024 Wassersport Mikulan. Rebuild aus dem originalen Framer-Preview als eigenständige React-Website.
