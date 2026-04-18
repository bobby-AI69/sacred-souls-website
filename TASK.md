Build a complete Next.js 14 website for Sacred Soul — a gothic dark romance AI cinematic TikTok brand.

## BRAND
- Name: Sacred Soul
- Domain: sacred-souls.com.au
- Aesthetic: Surrealist gothic dark romance
- Palette: #0A0A0A (background), #E8A4A0 (pink/coral smoke), #D4A24C (gold), #5C1A1B (burgundy), white text
- Font: Google Fonts — "Cormorant Garamond" for headings (gothic, elegant), "Inter" for body
- Vibe: cinematic, haunting, intimate, mysterious. Think dark romance novel meets film poster.

## PAGES / STRUCTURE
1. Landing page (/) — hero section with autoplaying looped video background (muted), minimal text overlay, CTA to prints shop
2. Prints shop (/prints) — grid of digital print products with Stripe checkout
3. Episodes (/episodes) — episode archive for "Written in the Walls" series (placeholder for now)

## LANDING PAGE REQUIREMENTS
- Full-screen hero: dark video background (use a placeholder poster image for now — user will swap in TikTok clips)
- Pink/coral smoke CSS overlay effect (subtle gradient/blur overlay)
- Centred minimal text: "SACRED SOUL" in Cormorant Garamond, large, white, letter-spaced
- Tagline below: "she was there. and then she wasn't." in small italic white
- CTA button: "Enter the World" linking to /prints
- Below fold: 3-column grid teasing episode series (EP 1, EP 2, EP 3 cards — dark, minimal, poster-style)

## PRINTS SHOP (/prints)
- Dark grid layout, 2-3 columns
- Each print card: image placeholder, title, price in AUD, Download button
- Stripe integration (use env var STRIPE_SECRET_KEY — scaffold the API route only, no hardcoded keys)
- On purchase: deliver digital download link
- Start with 3 placeholder products

## TECHNICAL REQUIREMENTS
- Next.js 14 with App Router
- Tailwind CSS
- TypeScript
- Stripe for payments (scaffold /api/checkout route)
- Fully responsive, mobile-first
- Vercel-ready

## DELIVERABLES
- Full Next.js project scaffold
- All page components
- Tailwind config with brand colours
- Google Fonts setup
- Stripe API route scaffold
- .env.example file
- README with setup and Vercel deployment instructions

When completely finished, run: openclaw system event --text "Done: Sacred Soul Next.js website scaffolded and ready for GitHub" --mode now
