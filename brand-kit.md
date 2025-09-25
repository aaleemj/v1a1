# v1a1 Brand Mini‑Kit

This document outlines the colour palette, typography and key UI components used throughout the v1a1 marketing site. Use these guidelines to maintain consistency across future marketing materials.

## Colours

| Token      | Hex       | Usage                         |
|-----------|-----------|-------------------------------|
| `primary` | `#7B5CB0` | Violet accent used for call‑to‑action buttons, links and headings |
| `dark`    | `#0D0D1A` | Midnight background for sections and pages |
| `light`   | `#FFFFFF` | Soft white for text on dark backgrounds and card surfaces |
| `muted`   | `#F5F5F5` | Subtle grey used for backgrounds or separators |

## Typography

- **Display font:** *Cormorant Garamond* – used for large headings and section titles to evoke elegance and authority.
- **Body font:** *Poppins* – a clean, modern sans‑serif used for paragraphs, lists and UI elements.

Both fonts are loaded via Google Fonts in `src/app/globals.css`.

## Components

- **Buttons**: Rounded corners with the primary violet fill and white text. On hover, the fill colour darkens slightly. Example class:

  ```html
  <button class="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition">Book a call</button>
  ```

- **Cards**: Bordered containers with a dark background and violet border on hover. Used to group service descriptions, case studies and process steps.

- **Navigation Bar**: A semi‑transparent dark header that becomes sticky on scroll. Links are spaced evenly with underline transitions on hover. The call‑to‑action button stands out in violet.

Refer to the codebase (especially `Navbar.tsx` and `Footer.tsx`) for more examples of how these tokens and components are applied.