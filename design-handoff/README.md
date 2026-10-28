# Handoff: Mountainview Masonry Ltd. website

## Overview
A new one-page site for Mountainview Masonry Ltd., a brick, block and stone subcontractor based in Mission, BC. It serves the Lower Mainland and Fraser Valley. **The audience is general contractors, builders, developers and project managers.** The goal is quote requests and phone calls.

All copy comes from the client's Facebook post. Job photos and the logo were supplied by the client.

## About the design files
These are **design references built in HTML**, not production code. Rebuild them in a real stack. If there's no existing codebase, use **Astro or Next.js (static export) + Tailwind**, deployed on Vercel.
- `Mountainview Masonry.dc.html`: the source prototype. The data arrays are in the script at the bottom: `FACTS`, `TRADES`, `POINTS`, `WORK`, `AREAS` and `SCOPE`.
- `preview.html`: a self-contained clickable preview. Unzip the folder first, because some images load from `mvm/`.
- `mvm/`:
  - `logo.png` has a transparent background but dark navy lettering. **Only place it on dark backgrounds.**
  - The other files are the job photos.
- `support.js`: prototype runtime only. **Do not ship it.**

## Fidelity
**High fidelity.** Colours, type, spacing and copy are final. Exact values are inline in the prototype. Don't add services, reviews, prices or claims.

## Sections (single route `/`, anchor links)
1. **Header:** sticky, charcoal, 96px tall.
   - The logo at 74px high, nav links, the phone number, and a red "Request a quote" button.
2. **Hero:** a charcoal split layout that fills the screen on desktop.
   - Left side:
     - A small line in tan: "Masonry subcontractor · Mission, BC".
     - H1: "Brick, block and stone, built to last."
     - A short paragraph, then two buttons: "Request a quote" and "Call 604-889-9042".
     - A row of 3 facts.
   - Right side: a full-height fireplace photo. It wipes in from the right using clip-path and scales from 1.12 down to 1.
3. **What we build** (on cream):
   - 3 cards, one each for Brick, Block and Stone. Each has a 4:5 photo, a red label, a title and a bullet list. Photos zoom slightly on hover.
   - Below them, a dark panel for repairs, restoration and repointing: photo on the left, text on the right.
4. **Contractors** (navy #0F1C2E):
   - Firewall photo on the left. On the right: the H2, the client's pitch, and 4 points each marked with a 3px red line on its left edge.
5. **Recent work:**
   - 6 photos in masonry columns (3, or 2 on smaller screens), each with a caption and a material label. Click a photo to open it full size.
   - Instagram link: https://www.instagram.com/mountainviewmasonryltd/
6. **Service area** (brick red): headline plus the list of cities.
7. **Quote:**
   - Left side, sticky on desktop: heading and a dark phone card.
   - Right side, a form: company, name, phone, email, project location, scope checkboxes, details and timeline, and file upload for drawings or photos.
8. **Footer** (charcoal): logo, tagline, ©, phone, and "Powered by Backpack Digital Media" linking to https://backpackdigitalmedia.com.
9. **Mobile** (below 1000px): the layout stacks, and a sticky bottom bar with Call and Get a quote appears. The footer gets 100px of bottom padding so the bar doesn't cover it.

## Motion
- **Easing:** `cubic-bezier(.16,.84,.3,1)`.
- **Hero load:** hero text rises 36px, staggered 100ms per element.
- **Scroll reveal:** elements marked `[data-reveal]` fade up 30px when scrolled into view.
  - Content must never stay hidden. Elements already on screen when the page loads show immediately.
  - Use an IntersectionObserver plus a scroll fallback, and a 2.5s safety timeout that reveals anything still hidden.
- **Reduced motion:** respect `prefers-reduced-motion`.

## Tokens
- **Colours:**
  - Charcoal #151515, cream background #F4F0E8, card line #DDD6C9.
  - Brick red #B23A26, tan #C8A26B, navy #0F1C2E (taken from the logo lettering).
  - Text #1A1A1A / #3A3630 / #4A4640. On dark backgrounds: #D6D2CA / #A9A49B / #CBD3DE.
- **Fonts:**
  - Archivo 700–800 for headings: tight tracking (−0.03em), line-height ~1, sentence case.
  - Figtree for body text at 18px.
- **Shape:** square corners everywhere.
- **Layout:** max width 1480px, side padding clamp(18px, 4vw, 48px), section padding clamp(80px, 10vw, 140px).

## Contact
604-889-9042 · Mission, BC · Instagram @mountainviewmasonryltd

## To finish at build time
- Connect the form to email, including file uploads (e.g. Formspree or Resend).
- Add a page title and description, Open Graph image, favicon (use the mountain from the logo), and LocalBusiness JSON-LD.
- Convert photos to WebP or AVIF and lazy-load them below the fold.

## Confirm with client
- **Email address:** none was given.
- **Photo captions:** these describe what each photo shows. Confirm the job details.
- **Short point descriptions:** written from the client's post.
- **Logo files:** a vector logo, plus a version that works on light backgrounds.
