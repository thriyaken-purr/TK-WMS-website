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

## Ella messaging guide

Ella runs entirely in the browser, with no connected AI model, API key, per-message token usage, or live WMS access. She combines saved TK WMS descriptions, detail retrieved from the public product guides, and a curated 65-topic general WMS reference. The general reference explains concepts without presenting unverified concepts as TK WMS features.

Visitors can ask definitions, compare concepts such as FIFO and FEFO, request detailed documented explanations, and follow up with “Tell me more” or “Give me an example.” Matching handles selected synonyms, acronyms, and simple spelling errors. Unknown features, exact customer configuration, live records, and other unsupported requests receive a fallback. This is offline retrieval, not open-ended AI reasoning; it cannot reliably answer every question.

- `public/ella-offline.js`: selects general-reference topics, comparisons, spelling matches, and follow-up context.
- `public/wms-library.js`: curated definitions, explanations, examples, and related TK WMS links.
- `public/ella-answers.js`, `public/ella-guide.js`, and `public/ella-terminology.js`: documented TK WMS replies and PO/ASN explanations.
- `public/ella-chat.js`: renders messages using safe text nodes.
- `scripts/generate-ella-knowledge.mjs`: refreshes saved product-guide content before production builds.
- `scripts/build-wms-reference.mjs`: builds the searchable `/resources/wms-guide.html` from the same reference used by Ella.

Run `node --test tests/*.test.mjs` to check documented replies, broad terminology, comparisons, context, spelling, fallbacks, and reference destinations. Messages remain in the current page session and are not sent to a server. Deploy with `npm run build` and output directory `dist`.

## Included

- One continuous product page with sticky anchor tabs for Home, What We Offer, Explore, Our Goal, and Contact
- 13 keyboard-accessible overview tabs with links to detailed guides covering setup, inbound, outbound, inventory, replenishment, counts, tasks, kitting, cross-docking, strategy, rules, workflow design, visibility, tools, administration, and training
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

## Platform & AI story

`/platform/ai.html` introduces the AI-assisted development approach confirmed by the product creator. Distinct guides cover development, voice recording, and Ella. Voice recording is confirmed at a high level; speech transcription, command execution, storage mechanisms, and specific AI vendors have not been verified in this repository and are not claimed by these pages. The original configuration overview remains available at `/platform-tools.html` through the Platform & AI dropdown.

## Content structure

The homepage introduces the product, preserves the six capability summaries, and helps visitors choose a question to investigate. Explore is a concise menu index; the detailed product explanations belong to dedicated pages. Solution stories use illustrative operational situations, Operations explains the workspaces, and Platform explains the configuration concerns. Each detail page has a contextual reading path instead of a repeated set of recommendations. General WMS definitions remain in the separate searchable reference.
