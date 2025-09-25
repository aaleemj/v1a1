# v1a1 – Global Private Debt Advisory

This repository contains the source code for the v1a1 marketing website. It is built with **Next.js 14** using the App Router, **TypeScript**, **TailwindCSS**, and **Framer Motion**. The design is inspired by minimalist finance sites and uses a midnight/violet colour palette with elegant typography.

## Getting Started

First, install dependencies (requires Node.js 18+):

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The site uses the App Router under `src/app`.

## Scripts

| Command       | Description                           |
|---------------|---------------------------------------|
| `npm run dev` | Starts the development server         |
| `npm run build` | Creates an optimized production build |
| `npm start`   | Starts the production server          |

## Environment Variables

The project currently embeds a Plausible analytics script in `layout.tsx`. Update the `data-domain` attribute to match your production domain. For forms and Calendly, replace the placeholder URLs in `src/app/contact/page.tsx` with your Tally or Formspark form ID and Calendly username.

## Deployment

The repository is ready to be deployed to **Vercel**:

1. Push the repository to GitHub or another Git provider.
2. Sign in to [Vercel](https://vercel.com) and create a new project from the repository.
3. Set the `NEXT_PUBLIC_BASE_URL` environment variable if needed (optional).
4. Vercel will detect the Next.js configuration and build the project automatically. Once deployed, you’ll receive a live URL (e.g. `https://v1a1-staging.vercel.app`).

## Project Structure

```
v1a1-site/
├── public/          # Static assets (images, favicons, robots.txt, sitemap.xml)
├── src/
│   ├── app/
│   │   ├── page.tsx            # Home page
│   │   ├── services/page.tsx   # Services listing
│   │   ├── process/page.tsx    # Process overview
│   │   ├── case-studies/page.tsx # Anonymised case studies
│   │   ├── about/page.tsx      # About us & team
│   │   ├── insights/page.tsx   # Insights/blog placeholder
│   │   ├── contact/page.tsx    # Contact form & Calendly embed
│   │   ├── privacy/page.tsx    # Privacy Policy
│   │   ├── terms/page.tsx      # Terms of Use
│   │   └── disclaimer/page.tsx # Legal disclaimer
│   ├── components/  # Reusable components (Navbar, Footer)
│   └── app/layout.tsx # Root layout with metadata & analytics
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
├── next.config.mjs     # Next.js configuration
└── package.json        # Project metadata and scripts
```

## Brand Mini‑Kit

| Token       | Hex value |
|-------------|-----------|
| Primary     | `#7B5CB0` (violet accent) |
| Dark        | `#0D0D1A` (midnight background) |
| Light       | `#FFFFFF` (soft white) |
| Muted       | `#F5F5F5` |

**Typefaces**

- Display: **Cormorant Garamond**, 400–700 weights, used for headlines and titles.
- Body: **Poppins**, 300–600 weights, used for paragraphs and UI labels.

**Spacing & Layout**

- Use a 4px baseline grid; common spacing increments are 4, 8, 16, 24 and 32px.
- Section padding defaults to `py-16` (64px) on larger screens and scales down on mobile.
- Cards and panels use 1px borders (`border-gray-700`) and 8px corner radius (`rounded-lg`).

## Edit Guide

Non‑technical updates can be made by editing the markdown content inside each page component under `src/app`. For example, to add a new case study, modify the `cases` array in `src/app/case-studies/page.tsx`. To update contact details or add new services, edit the corresponding arrays in their page files.

For more extensive changes (e.g. adding new pages or components), knowledge of React/Next.js and TailwindCSS is helpful. After editing, commit the changes and redeploy via Vercel.

## Disclosures

The site includes a “No Offer/No Advice” disclaimer and general risk warnings in the Disclaimer page. Please consult legal counsel to customise these disclosures to your specific regulatory jurisdiction (Dubai/DIFC) before going live.