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

## Ella quick guide

Ella offers 34 selectable questions with prewritten answers about the TK WMS features documented on the website. Visitors select a WMS question and send it to see a prewritten reply in a compact messaging panel. No chat input, AI service, API key, or backend is needed.

Deploy as a Vite site with `npm run build` and output directory `dist`.

## Included

- One continuous product page with sticky anchor tabs for Home, What We Offer, Explore, Our Goal, and Contact
- 13 keyboard-accessible tabs with menu-level explanations covering setup, inbound, outbound, inventory, replenishment, counts, tasks, kitting, cross-docking, strategy, rules, workflow design, visibility, tools, administration, and training
- Dedicated emphasis on TK WMS strategy, suggested-location rules, reservation attributes, workflow/RF/voice design, and implementation tools
- Operational visibility and dashboard/query categories based on the menus observed in TK WMS
- Responsive navigation, cinematic warehouse hero, restrained swoosh motion, and reduced-motion support
- Multi-column footer navigation and an Ella greeting card, round chat launcher, and messaging panel with TK WMS feature questions and answers
- Contact section with an inquiry form and direct links into relevant Explore topics
- Local TK WMS logo and an Unsplash stock portrait used to represent Ella, the product guide (not an actual TK WMS employee)

The site describes menus observed in TK WMS; exact availability can depend on a user's role and configuration. Operational access should be provided by a separately authenticated application, not this public marketing site. The contact form is a preview only and does not send or store submissions until a verified TK WMS recipient and delivery service are configured.

## Product pages and navigation

The homepage’s Explore section remains the quick menu overview. Three category pages provide distinct introductions:

- `/solutions.html`: inventory accuracy, fulfillment control, inbound flow, and configurable execution.
- `/operations.html`: the eight operational areas from master data to cross-docking.
- `/platform-tools.html`: strategy, rules, workflow design, visibility, and implementation.

Each dropdown topic opens its own HTML page under `/solutions/`, `/operations/`, or `/platform/`. Seventeen topic pages contain original explanatory content and workflow walkthroughs based on the product information documented in this repository. These pages do not read live WMS records.

Shared styles and dropdown behavior live in `public/site.css` and `public/navigation.js`. Vite builds every HTML entry point listed or discovered in `vite.config.js`.
