# Fiber Link Website

Marketing/product website for Fiber Link, including a landing page and a placeholder `Request Demo` flow.

## What is included

- Product landing page
- Business-focused positioning and product copy
- `Request Demo` section with a coming-soon interest form
- Static-site deployment setup suitable for Coolify

## Project structure

- `index.html` — main landing page
- `styles.css` — site styling
- `script.js` — placeholder Request Demo behavior
- `Dockerfile` — static nginx container for deployment
- `nginx.conf` — nginx config for Coolify/static hosting

## Local preview

You can open `index.html` directly in a browser, or run a simple local web server.

### Python

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Request Demo behavior

Current behavior is intentionally marked as **coming soon**.

- The form does **not** create real demo accounts yet.
- Submissions are stored in browser `localStorage` only as a placeholder UX.
- Future versions can replace this with a backend or external form endpoint.

## Deploy with Coolify

This repo is designed to be easy to deploy as a static website.

### Option A: Dockerfile deploy (recommended)

In Coolify:

1. Create a new application from this repo.
2. Choose the repo branch you want to deploy.
3. Use the included `Dockerfile`.
4. Expose port `8080`.
5. Deploy.

### Option B: Static site / Nixpacks

You can also serve the static files with another runtime, but the included Dockerfile is the simplest path.

## Notes

This website is intentionally focused on:

- community monetization
- creator earnings
- low-friction micropayments
- admin-friendly adoption

It is **not** positioned as a general wallet product.
