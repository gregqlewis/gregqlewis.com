# gregqlewis.com

Personal portfolio site. Static HTML, CSS, and JS with no build step, deployed as a static-assets Cloudflare Worker from the `cloudflare-site` branch.

- `wrangler.jsonc`: Worker config; serves `public/` as static assets
- `public/index.html`: the page
- `public/style.css`, `public/main.js`: kept out of the HTML so the CSP can run without `unsafe-inline`
- `public/_headers`: security headers applied to every response

`cloudflare-site` is the default branch. `master` holds the old Jekyll theme the site started from and isn't deployed anywhere. This repo is a fork of the theme, so don't use GitHub's "Sync fork" button: it would try to merge thousands of upstream theme commits into the site.
