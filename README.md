# TK WMS Product Website

A responsive public-facing overview of TK WMS capabilities. The production site contains no operations console, item records, login flow, or connection to the live WMS.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To verify a production build, run `npm run build`; use `npm run preview` to serve that build locally.

## Ella AI Setup

Ella uses an OpenAI API key from the server-side `/api/ella` endpoint. Never place the key in browser code, a `VITE_` variable, or a committed file.

For local development, copy `.env.example` to `.env.local`, add your key to `OPENAI_API_KEY`, and keep `OPENAI_MODEL` set to `gpt-4.1-mini` unless you choose another supported model. `.env.local` is ignored by Git. Restart the Vite server after changing environment variables.

For Vercel, add `OPENAI_API_KEY` and optionally `OPENAI_MODEL` under the project's Environment Variables, then redeploy. The key must be added privately in Vercel; do not send it in chat or commit it to GitHub.

Ella sends questions and recent chat context to OpenAI. The server prompt limits answers to public TK WMS product information and forbids access claims about the live WMS. Do not enter warehouse, customer, personal, or credential data. Configure provider billing/usage limits and production rate limiting before a public launch.

## Included

- One continuous product page with sticky anchor tabs for Home, What We Offer, Explore, Our Goal, and Contact
- 13 keyboard-accessible tabs with menu-level explanations covering setup, inbound, outbound, inventory, replenishment, counts, tasks, kitting, cross-docking, strategy, rules, workflow design, visibility, tools, administration, and training
- Dedicated emphasis on TK WMS strategy, suggested-location rules, reservation attributes, workflow/RF/voice design, and implementation tools
- Operational visibility and dashboard/query categories based on the menus observed in TK WMS
- Responsive navigation, cinematic warehouse hero, restrained swoosh motion, and reduced-motion support
- Multi-column footer navigation and an Ella greeting card, round chat launcher, and messaging panel backed by the server-side OpenAI endpoint when configured
- Contact section with an inquiry form and direct links into relevant Explore topics
- Local TK WMS logo and an Unsplash stock portrait used to represent Ella, the AI guide (not an actual TK WMS employee)

The site describes menus observed in TK WMS; exact availability can depend on a user's role and configuration. Operational access should be provided by a separately authenticated application, not this public marketing site. Ella's OpenAI endpoint is not connected to live WMS data; without `OPENAI_API_KEY`, it returns an unconfigured message. The contact form is a preview only and does not send or store submissions until a verified TK WMS recipient and delivery service are configured.
