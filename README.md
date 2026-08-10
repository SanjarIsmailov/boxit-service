# BOXIT Service

A clean, responsive landing page for **BOXIT Group**, a London-based removals and home-services business.

## Features

- Responsive desktop, tablet and mobile layout
- BOXIT branding with `logo.jpg`
- Hero section with moving-service illustration
- WhatsApp contact button
- Special Offer card
- Special Offer uses a pure HTML/CSS moving-box illustration
- Services grid
- Coming Soon labels for selected services
- Why BOXIT section
- How it works / process section
- Service comparison table
- Moving tips
- Reviews section
- FAQ
- Quote/contact form
- Floating WhatsApp button
- Animated service ticker
- Smooth, subtle UI animations

## Services

- House Removals
- Man & Van
- Packing
- Furniture Delivery
- Cleaning
- Handyman
- Rubbish Removal
- Storage

## Project Structure

```text
boxit-service/
├── index.html
├── logo.jpg
└── README.md
```

## Run locally

No build tools are required.

Open `index.html` directly in a browser, or use a simple local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages

This project is a static HTML/CSS/JavaScript website, so it can be deployed directly with GitHub Pages.

1. Push `index.html`, `logo.jpg`, and `README.md` to the repository.
2. Open **Settings → Pages**.
3. Select the `main` branch as the deployment source.
4. Save the settings.
5. GitHub Pages will publish the site.

## Branding

The header uses the repository's `logo.jpg`:

```html
<img class="header-logo" src="logo.jpg" alt="BOXIT Group">
```

Keep `logo.jpg` in the same directory as `index.html`.

## Contact

Phone: `07949 286 369`

WhatsApp: `+44 7949 286369`
