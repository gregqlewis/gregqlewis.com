# gregqlewis.com

Personal portfolio site. Static HTML, CSS, and JS with no build step, deployed on Cloudflare Pages from the `cloudflare-site` branch.

- `index.html`: the page
- `style.css`, `main.js`: kept out of the HTML so the CSP can run without `unsafe-inline`
- `_headers`: security headers that Cloudflare Pages applies to every response

The old Jekyll site lives on `main` and stays on GitHub Pages until DNS moves.
