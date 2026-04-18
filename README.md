# Sacred Soul

A surrealist gothic dark romance — cinematic prints, episodes, and haunted fragments.

Production site: **https://sacred-souls.com.au**

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Stripe**.

---

## Stack

- Next.js 14 · App Router · React 18
- TypeScript (strict)
- Tailwind CSS with brand palette
- Google Fonts: Cormorant Garamond (headings) + Inter (body)
- Stripe Checkout (server-side session creation)
- Vercel-ready

## Brand palette

| Token       | Hex       | Use                        |
|-------------|-----------|----------------------------|
| `obsidian`  | `#0A0A0A` | Background                 |
| `smoke`     | `#E8A4A0` | Pink/coral smoke accents   |
| `gold`      | `#D4A24C` | Labels, price accents      |
| `burgundy`  | `#5C1A1B` | Deep shadow / overlay tint |

---

## Project structure

```
app/
  layout.tsx           Root layout, fonts, nav + footer
  page.tsx             Landing page — hero + episode teasers
  globals.css          Tailwind + smoke/grain/vignette effects
  prints/
    page.tsx           Prints shop
    success/page.tsx   Post-payment thank-you page
    cancel/page.tsx    Abandoned-checkout page
  episodes/
    page.tsx           Episode archive (Written in the Walls)
  api/checkout/
    route.ts           Stripe Checkout session (POST)
components/
  nav.tsx
  footer.tsx
  hero.tsx             Full-bleed video + smoke overlay
  episode-card.tsx
  print-card.tsx       Client component — calls /api/checkout
lib/
  episodes.ts          Episode data
  prints.ts            Print product data (title, price, palette)
public/
  hero-poster.svg      Placeholder poster — swap for real artwork
```

---

## Local development

Requires Node 18+.

```bash
npm install
cp .env.example .env.local
# Fill in your Stripe test keys in .env.local
npm run dev
```

Open http://localhost:3000.

## Swapping in real content

**Hero video.** Drop a muted, looped MP4 at `public/hero.mp4` (and replace `public/hero-poster.svg` with a still frame as `hero-poster.jpg` or `.svg`). The `<video>` in `components/hero.tsx` is already `autoPlay muted loop playsInline`.

**Prints.** Edit `lib/prints.ts` — each entry becomes a card and a Stripe line item. Price is a whole AUD number (converted to cents server-side).

**Episodes.** Edit `lib/episodes.ts`. `status: "coming"` shows a "coming soon" tag on the card.

---

## Stripe

`POST /api/checkout` with `{ "printId": "print-..." }` creates a Stripe Checkout session and returns `{ url }`.

The route:
- Reads `STRIPE_SECRET_KEY` from env — never hardcoded.
- Looks up the print in `lib/prints.ts` (prevents price tampering from the client).
- Uses `price_data` with AUD to keep products defined in code rather than the Stripe dashboard.
- Redirects to `/prints/success` on payment and `/prints/cancel` on abandonment.

### Digital delivery

The success page tells the buyer the download link has been emailed. To actually send it, wire up a Stripe webhook:

1. Add `STRIPE_WEBHOOK_SECRET` to env.
2. Add a route at `app/api/stripe/webhook/route.ts` that verifies the signature and, on `checkout.session.completed`, emails a signed download URL (e.g. S3 pre-signed, or a token-gated `/downloads/[id]` route).

This webhook is intentionally **not** scaffolded yet — wire it up when the asset delivery pipeline (S3 / email provider) is chosen.

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project** and import the repo.
3. Framework preset: **Next.js** (auto-detected). No build customisation needed.
4. Add environment variables (Production + Preview):
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET` (when webhook is added)
   - `NEXT_PUBLIC_SITE_URL` → `https://sacred-souls.com.au`
5. Add the custom domain `sacred-souls.com.au` under **Project → Domains**, and point your DNS to Vercel.
6. Deploy.

Stripe webhook endpoint (once added) should be registered in the Stripe dashboard as:
`https://sacred-souls.com.au/api/stripe/webhook`

---

## Scripts

| Script           | Purpose                       |
|------------------|-------------------------------|
| `npm run dev`    | Local dev server              |
| `npm run build`  | Production build              |
| `npm start`      | Serve the production build    |
| `npm run lint`   | Next.js ESLint                |
| `npm run typecheck` | `tsc --noEmit`             |

---

_she was there. and then she wasn't._
