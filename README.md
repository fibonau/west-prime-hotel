# West Prime Hotel & Restaurant — Calbayog City

A premium, editorial, single-page marketing website for **West Prime Hotel &
Restaurant** in Calbayog City, Samar. Built as a presentation sample for the
owner — warm-dark, image-led, and welcoming.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (custom luxury design tokens)
- **framer-motion** — scroll reveals + gentle image parallax (respects
  `prefers-reduced-motion`)
- **next/image** with remote Unsplash optimization
- `next/font` — Cormorant Garamond (display serif), Jost (body), Pinyon Script
  (gold accent script)
- Frontend-only: all forms validate client-side and show success states.

## Sections

Header · Hero (inline booking bar) · Trust row · About · Rooms & Rates (price
cards + quick-view modal) · Editorial gallery · West Prime Restaurant (reservation
form) · Amenities · Guest reviews · Location (map) · Footer (newsletter).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # clean production build
npm run start    # serve the production build
```

## Deploy

Push to a repo and import into **Vercel** — zero config.

## Design tokens

| Token      | Hex       | Use                             |
| ---------- | --------- | ------------------------------- |
| `espresso` | `#1C1A17` | dark sections, footer, overlays |
| `cream`    | `#F1EBE1` | light editorial sections        |
| `gold`     | `#C0A05C` | buttons, hairlines, highlights  |
| `stone`    | `#8A8178` | secondary text                  |
| `noir`     | `#0E110F` | restaurant (moody dark section) |

## Before presenting to the owner

- Swap Unsplash placeholders for West Prime's real photos and logo
- Confirm Booking.com rating (currently shown as 8/10 — see `lib/data.ts`)
- Add real phone and email from their Facebook page (marked with `// TODO`)

## Notes

- Photography uses free Unsplash images as placeholders.
- All copy is original; room rates and dish prices are estimates for presentation.
