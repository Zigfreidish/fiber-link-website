# Fiber Link Website (React)

Production-ready multi-page Fiber Link website built with React, React Router, locale URL routing, and animated interactions.

## Stack

- React 18 + React Router DOM
- Vite
- GSAP for major motion/reveal sequences
- anime.js for decorative micro-animation
- Framer Motion for route and interaction polish
- react-icons for iconography

## URL locale routing

Locale is path-based and supported for:

- `en`
- `zh`
- `ja`
- `ko`

Examples:

- `/en`
- `/zh/product`
- `/ko/how-it-works`

Unknown locale paths fallback to `/en`.

## Theming

Dark / Light / System mode is available from the top navigation.

## Pages

- `/[locale]` → Landing page
- `/[locale]/product`
- `/[locale]/use-cases`
- `/[locale]/how-it-works`
- `/[locale]/faq`
- `/[locale]/request-demo`

`Request Demo` is available from every page and keeps the current flow as a coming-soon collection form stored locally.

## Image strategy / Unsplash fallback

`CommunityVisual` attempts to use Unsplash random photo endpoints when a key is configured.

- Set `VITE_UNSPLASH_ACCESS_KEY` to enable remote images.
- If missing or failed, local curated SVG placeholders are used from `public/images/*`.
- The fallback is non-blocking and does not prevent rendering or deployment.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173/en`.

## Build

```bash
npm run build
```

## Coolify deployment

This repo is configured with a multi-stage Dockerfile for production image builds.

1. Install dependencies and run `npm run build`.
2. Serve `/usr/share/nginx/html` from Nginx.
3. Expose port `8080`.

`nginx.conf` is already set to SPA fallback (`try_files`) for client-side routes.

## Notes

- `Home` is the landing page.
- All major sections are converted into dedicated pages.
- Request Demo remains a local interest flow and is explicitly marked as coming soon.
