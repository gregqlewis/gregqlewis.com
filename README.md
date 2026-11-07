# gregqlewis.com

Personal portfolio site. Static HTML, CSS, and JS with no build step, deployed as a static-assets Cloudflare Worker from the `cloudflare-site` branch.

- `wrangler.jsonc`: Worker config; serves `public/` as static assets
- `public/index.html`: the page
- `public/style.css`, `public/main.js`: kept out of the HTML so the CSP can run without `unsafe-inline`
- `public/_headers`: security headers applied to every response

The old Jekyll site lives on `main` and stays on GitHub Pages until DNS moves.
