# Shivam Patidar — Portfolio

Live: **https://socialshivam.github.io/portfolio-2026/**
(The previous site is untouched at https://socialshivam.github.io/Portfolio/.)

A static site (plain HTML, CSS and JavaScript, no build step) for GitHub Pages.

```
├── index.html          ← page structure and section copy
├── css/style.css       ← design: colours, fonts, layout
├── js/data.js          ← ALL case studies & pitches (edit text here)
├── js/main.js          ← interactions, case drawer, deck viewer
├── assets/decks/<deck>/001.webp …   ← every deck page as an image
├── assets/decks/<deck>/t/…          ← small thumbnails for the viewer
├── assets/og.jpg       ← preview image when the link is shared
├── favicon.svg
└── .nojekyll           ← tells GitHub Pages to serve files as-is
```

## Update the live site

Edit files on your computer, then from this folder:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Or edit a file directly on github.com (pencil icon) and commit. The site refreshes in 1–2 minutes.

GitHub Pages settings: **Settings → Pages → Deploy from a branch → `main` / `(root)`**.

## Edit content

- **Case study or pitch text / numbers:** `js/data.js`. Each project has `challenge`, `insight`,
  `move` (what I did), and `results`. The page rebuilds from this file automatically.
- **Hero, TL;DR, philosophy, operations, 90-day plan, contact:** `index.html`.
- **Hero rotating phrases:** top of `js/main.js` (`const words = [...]`).
- **Instagram reels:** `window.REELS` at the bottom of `js/data.js`. Each video is
  `["Label", "CODE"]`, where CODE is the part after `/reel/` in the Instagram link.
- **Colours / fonts:** the `:root` block at the top of `css/style.css` (`--accent` is the orange).

## Add a new deck

1. Export the deck to PDF.
2. Convert pages to images (needs Python with `pymupdf` and `pillow`):
   each page as `assets/decks/<name>/001.webp, 002.webp …` at 1600 px wide,
   a 900 px `cover.webp`, and 320 px thumbnails in `assets/decks/<name>/t/`.
3. Add it to `window.DECKS` in `js/data.js` (title + page count), and link it from a project
   with `deck: "<name>"`.

## Shareable links

- A case study: `https://socialshivam.github.io/portfolio-2026/#case/credai`
- A deck at a page: `https://socialshivam.github.io/portfolio-2026/#deck/lemount/37`

Project IDs are the `id` values in `js/data.js`; deck names are the keys of `window.DECKS`.

## Preview on your computer

```bash
python -m http.server 8000
```

Then open http://localhost:8000.
