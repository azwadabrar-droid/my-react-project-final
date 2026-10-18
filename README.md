# Digital Agency – React (Vite + React Router)

All 9 pages from the Figma file "Digital Agency (Copy)":

| Route | Figma frame |
|---|---|
| `/` | Home Page (B) |
| `/about` | About (A) |
| `/services` | Services {A} |
| `/services/details` | Service Details (A) |
| `/portfolio` | Portfolio (B) |
| `/blog` | Blog (A) |
| `/blog/details` | Blog Details (B) |
| `/contact` | Contact (A) |
| any other URL | 404 Error (A) |

```bash
npm install      # also downloads the exact Figma icons/photos (see MISSING_ASSETS.md)
npm run dev      # development
npm run build    # production build in dist/
```

`vercel.json` rewrites every URL to the app so deep links work on Vercel.

## Dark mode and responsive
- **Dark mode:** the Light/Dark switch in the header works on every page. It follows the visitor's system setting on first visit and the choice is remembered (`localStorage`). Colours are CSS variables in `src/styles.css` (`[data-theme="dark"]`).
- **Responsive:** above 1024px, inner pages are the exact 1920px Figma canvas (scaled to fit). Below 1024px they reflow into one readable column, and the header becomes a menu button. Home is fluid at every width.

## How it is built
- **Home** uses flexible layouts. Every other page is the exact 1920px Figma canvas (`src/components/Stage.jsx`), shown 1:1 on screens ≥1920px, scaled down between 1024 and 1920px, and reflowed below 1024px.
- All images are local files in `public/assets/` – nothing loads from Figma, so nothing expires.
- Exact Figma assets are fetched by `npm install`; the rest must be exported by you – see **MISSING_ASSETS.md**.
- `src/styles.css` (Home + shared) and `src/pages.css` (inner pages) hold all styles; colours/shadows are the Figma tokens.
