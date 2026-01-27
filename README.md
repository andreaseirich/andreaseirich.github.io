# Portfolio – Andreas Eirich

A modern, responsive portfolio website with 3D/interactive elements, dark mode design, and detailed project pages. Presents projects, technical expertise, and professional experience.

## 🎨 Features

- **3D/2D Interactive Experience**: Three.js background (wireframe geometry, particles), mouse-reactive effects, parallax hero
- **Dark Mode Design**: Eye-friendly dark interface with gradient accents (purple/blue)
- **Responsive Design**: Optimized for all devices (Desktop, Tablet, Mobile)
- **Smooth Animations**: Scroll reveal, 3D card tilt on hover, fluid transitions
- **Glassmorphism**: Navbar backdrop blur, modern UI elements
- **Project Showcase**: Detailed project pages (Honey Treasures, TutorFlow, ChatCompanion) with case studies, architecture, screenshots
- **Tech Snapshot**: Overview of technologies, architecture focus, and principles
- **Contact Form**: Web3Forms integration for email sending
- **404 Error Page**: Custom error page with navigation
- **Social Links**: GitHub and LinkedIn
- **Consistency**: Unified layout, fonts (Syne, DM Sans), and footer across index, project pages, and 404

## 🚀 Technologies

- **HTML5**: Semantic structure, maintainable markup
- **CSS3**: Flexbox, Grid, animations, custom properties, `style.css` + `style-3d.css`
- **JavaScript**: Vanilla JS (contact form, smooth scroll). **Three.js** for 3D background; custom `js/portfolio-3d.js`, `js/interactions.js`
- **Web3Forms**: Contact form email delivery
- **Google Fonts**: Syne (headings), DM Sans (body)
- **Mobile-First**: Responsive layout

## 📁 Project Structure

```
andreaseirich.github.io/
├── index.html              # Main portfolio (3D hero, projects, contact)
├── style.css               # Base styles (dark mode, components)
├── style-3d.css            # 3D layout, hero, navbar, subpage overrides
├── honey-treasures.html    # Honey Treasures project page
├── tutorflow.html          # TutorFlow project page
├── chatcompanion.html      # ChatCompanion project page
├── 404.html                # 404 error page
├── js/
│   ├── portfolio-3d.js     # Three.js scene (torus, particles)
│   └── interactions.js     # Card tilt, scroll reveal, parallax
├── images/                 # Project screenshots
│   ├── honey-treasures-*.png
│   ├── tutorflow-*.png
│   └── chatcompanion-*.png
├── _config.yml             # Jekyll config (optional)
├── sitemap.xml
├── robots.txt
└── README.md
```

## 📱 Website Structure

### Main Page (index.html)
- **Hero**: Full-viewport section with 3D canvas, mouse-follow glow, „Entdecken“ CTA
- **Nav**: Fixed navbar (About, Projects, Tech, Contact), backdrop on scroll
- **About Me**: Short intro and focus areas
- **Projects**: Cards linking to Honey Treasures, TutorFlow, ChatCompanion (3D tilt on hover)
- **Tech Snapshot**: Technologies, architecture, principles
- **Contact**: Web3Forms contact form
- **Footer**: © 2026, GitHub, LinkedIn

### Project Pages (honey-treasures, tutorflow, chatcompanion)
- **Header**: Project name and tagline
- **Nav**: „← Back to Portfolio“ + Overview / Case Study or Why? / Features / Technology / Links
- **Content**: Overview, case study or „Why?“, features, tech stack, screenshots, links
- **Footer**: Same as main page; `body.subpage` for consistent styling

### 404
- **Nav**: „← Back to Portfolio“
- **Content**: Error message, links to homepage and projects
- **Footer**: Same as main page

## 🛠️ Installation & Setup

1. **Clone repository**
   ```bash
   git clone https://github.com/andreaseirich/andreaseirich.github.io.git
   cd andreaseirich.github.io
   ```

2. **Local development**
   - Open `index.html` in a browser, or
   - Run a local server:
     ```bash
     python -m http.server 8000
     # or
     npx http-server
     ```

3. **View**
   - Go to `http://localhost:8000`

## 🎯 Design Principles

- **Minimalist**: Clear, focused layout
- **Readability**: Good spacing and typography
- **Consistency**: Same fonts, colors, nav, and footer across all pages
- **Professional**: Suitable for recruiters and technical audiences

## 📝 Projects

### Honey Treasures
- **Status**: Production (live at honey-treasures.com)
- **Type**: E-Commerce for small apiaries
- **Tech**: Django, Python, HTML/CSS/JavaScript
- **Highlights**: Case study, architecture, security

### TutorFlow
- **Status**: Submitted to CodeCraze Hackathon
- **Type**: Tutoring management with AI features
- **Tech**: Django, Python, AI/LLM
- **Highlights**: Domain logic, conflict detection, workflow automation

### ChatCompanion
- **Status**: Open source (Streamlit app)
- **Type**: Privacy-first chat analysis (manipulation, bullying, grooming)
- **Tech**: Python, Streamlit, optional ML
- **Highlights**: Offline-first, ethics, boundary-setting support

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📄 License

Personal portfolio. All rights reserved.

## 👤 Author

**Andreas Eirich**

- GitHub: [@andreaseirich](https://github.com/andreaseirich)
- LinkedIn: [andreas-eirich](https://www.linkedin.com/in/andreas-eirich)
- Portfolio: [andreaseirich.github.io](https://andreaseirich.github.io)

---

*This portfolio is updated regularly.*
