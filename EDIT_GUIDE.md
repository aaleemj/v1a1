# Edit Guide

This short guide explains how to make common content updates to the v1a1 marketing site without deep technical knowledge.

## Updating Text

All pages live in the `src/app` directory and are written in React/TypeScript. To edit the copy on any page:

1. Open the corresponding `page.tsx` file (e.g., `src/app/services/page.tsx`).
2. Locate the text inside HTML elements (`<p>`, `<h1>`, etc.) and modify it. Be careful not to change any curly brace `{}` expressions unless you understand JavaScript/TypeScript.
3. Save your changes. If running locally with `npm run dev`, the page will hot reload.

## Adding/Removing Services or Case Studies

Each service or case study is defined in an array at the top of its respective file. For example, in `src/app/services/page.tsx`:

```ts
const services = [
  {
    name: 'Venture Debt',
    description: '...',
    eligibility: '...',
    typicalRange: '...',
    timeline: '...',
  },
  // more services
];
```

To add a new entry, copy an existing object, update the fields, and paste it into the array. To remove one, delete its object.

## Updating Contact Information

Contact details appear in multiple places:

- `src/components/Footer.tsx` – update phone, email or address lines.
- `src/app/contact/page.tsx` – update the WhatsApp link, email and address in the final section.

## Changing Images

Images are stored in the `public` directory. Replace `public/hero.png` or `public/og-default.png` with new image files using the same filenames to avoid updating imports. Ensure that new images are optimised (ideally under 500KB).

## Adjusting Colours or Fonts

Colour tokens and fonts are defined in `tailwind.config.ts` and `src/app/globals.css`. Changing values there will propagate throughout the site. Refer to `brand-kit.md` for guidance.

## Deploying Updates

After making changes, commit your code and deploy via Vercel (see `README.md` for instructions). Vercel will automatically build and host the updated site.

If you prefer not to use Vercel, you can export a static version of the site with `next export` and host the files on any static hosting platform.