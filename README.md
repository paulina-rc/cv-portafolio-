# Paulina Rojas — Portfolio

> Personal portfolio website of Paulina Rojas, a web development student from Costa Rica.

**Live site:** [paulina-rc.github.io/cv-portafolio-](https://paulina-rc.github.io/cv-portafolio-/)

---

## About

This is my personal portfolio, built from scratch to showcase my projects, skills, and certifications as I grow as a web developer. It's fully responsive, deployed on GitHub Pages, and designed with a focus on clean typography and accessibility.

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom design system with CSS variables, Flexbox and Grid
- **JavaScript** — vanilla JS for interactivity (modals, dynamic content, navigation)
- **GitHub Pages** — hosting and deployment

## Features

- Fully responsive design (mobile, tablet, desktop)
- Multi-page architecture with reusable nav and footer components
- Interactive certificate previews with PDF modal viewer
- Project cards with detailed preview modal
- Custom SVG monogram logo and branded favicon
- Accessible color palette and typography

## Project Structure

```
cv-portafolio-/
├── index.html              # Home page
├── pages/
│   ├── certificates.html   # Certificates & credentials
│   └── projects.html       # Projects showcase
├── components/
│   ├── nav.html            # Shared navigation
│   └── footer.html         # Shared footer
├── css/
│   ├── style.css           # Main styles
│   ├── carousel.css        # Carousel styles
│   └── responsive.css      # Media queries
├── js/
│   ├── tabs.js             # Page navigation logic
│   ├── certificates.js     # Certificate modal logic
│   └── projects.js         # Project modal logic
└── assets/
    ├── favicon/            # Favicon set
    ├── certificates/       # Certificate PDFs and previews
    └── projects/           # Project screenshots
```

## Skills Showcased

**Programming Languages:** Java · JavaScript · Python · PHP · SQL · HTML · CSS

**Frameworks & Tools:** Flask · Git · GitHub · Figma · Docker · n8n

**Methodologies:** Scrum (certified)

**Languages:** Spanish (native) · English (B1) · Italian (A1)

## Certifications

- **Scrum Fundamentals Certified** — SCRUMstudy (2025)
- **IT Communication Technologies Operator** — INA Costa Rica (2025)
- **Python Essentials 1** — Cisco Networking Academy (2026)

## Running Locally

```bash
# Clone the repo
git clone https://github.com/paulina-rc/cv-portafolio-.git
cd cv-portafolio-

# Start a local server (Python)
python server.py

# Then open http://localhost:8000
```

A local server is required because the site uses `fetch()` to load shared components (nav and footer), which doesn't work when opening HTML files directly.

## Contact

- **GitHub:** [@paulina-rc](https://github.com/paulina-rc)
- **Email:** rojascarrillopaulina@gmail.com
