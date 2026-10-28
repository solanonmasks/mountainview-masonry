# Mountainview Masonry Ltd. website

A one-page site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).
The original design handoff is in `design-handoff/` for reference.

## Run it on your computer

You need [Node.js](https://nodejs.org) version 22.12 or newer.

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4321. Changes you save show up straight away.

To make the final files for hosting (they go in `dist/`):

```bash
npm run build
```

## Where to change things

| What | File |
| --- | --- |
| Text, photos, cities, scope checkboxes, phone number | `src/site.ts` |
| Colours, fonts, animations | `src/styles/global.css` |
| Each section's layout | `src/components/` (one file per section) |
| Page title, description, Google business info | `src/layouts/Layout.astro` |
| Photos | `src/assets/photos/` (converted to WebP automatically when you build) |
| Favicon and social-share image | `public/` |

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, click **Add New → Project** and pick this repo.
3. Vercel detects Astro on its own. Click **Deploy**.

## Still to do

- **Connect the quote form.** Make a form at [Formspree](https://formspree.io) (file uploads need a paid plan), then paste its URL into `FORM_ENDPOINT` in `src/site.ts`. Until then, the form asks visitors to call instead.
- **Set the domain.** Once the domain is known, set `site` in `astro.config.mjs` so social-share previews get a full image link.
- **Confirm with the client:** an email address, the photo captions, the short point descriptions, and a vector logo (plus a version for light backgrounds).
