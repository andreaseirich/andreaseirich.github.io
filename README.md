# Portfolio - Andreas Eirich

A modern, responsive portfolio website with dark mode design that presents projects, technical expertise, and professional experience.

## 🎨 Features

- **Dark Mode Design**: Modern, eye-friendly dark mode interface with gradient accents
- **Responsive Design**: Optimized for all devices (Desktop, Tablet, Mobile)
- **Smooth Animations**: Fluid transitions and hover effects
- **Glassmorphism**: Modern UI elements with backdrop blur effects
- **Project Showcase**: Detailed project pages with case studies, architecture overviews, and screenshots
- **Tech Snapshot**: Overview of main technologies, architecture focus, and development principles
- **Contact Form**: Functional contact form with direct email sending (Web3Forms)
- **404 Error Page**: Custom error page with navigation
- **Social Media Links**: GitHub and LinkedIn integration

## 🚀 Technologies

- **HTML5**: Semantic structuring with clean, maintainable code
- **CSS3**: Modern styling with Flexbox, Grid, Animations, and Custom Properties
- **JavaScript**: Vanilla JS for interactive form functionality
- **Web3Forms**: Email sending service (free, no registration required)
- **Google Fonts**: Poppins font for modern typography
- **Mobile-First**: Responsive design approach

## 📁 Project Structure

```
portfolio/
├── index.html              # Main portfolio page
├── style.css               # Stylesheet with dark mode design
├── preceptly.html          # Preceptly project overview page
├── honey-treasures.html    # Honey Treasures project overview page
├── chatcompanion.html      # ChatCompanion project overview page
├── radhuus-nortrup.html    # RADhuus Nortrup project overview page
├── andicode.html           # andicode.de project overview page
├── 404.html                # 404 error page
├── sitemap.xml, robots.txt # SEO
├── _config.yml             # Jekyll configuration (optional)
├── images/                 # Project screenshots
│   ├── honey-treasures-*.png
│   ├── preceptly-*.png
│   └── …
└── README.md               # Project documentation
```

## 📱 Website Structure

### Main Page (index.html)
- **Header**: Hero section with name and description
- **About Me**: Personal introduction and skills
- **Projects**: Clickable project cards linking to detailed pages
- **Tech Snapshot**: Overview of technologies, architecture focus, and principles
- **Contact**: Functional contact form
- **Footer**: Copyright and social media links

### Project Pages
Each project page includes:
- **Overview**: Project description and status
- **Case Study** (Honey Treasures, RADhuus Nortrup, andicode.de): Problem, solution, responsibilities
- **Why?** (Preceptly): Problem analysis and benefits
- **Features**: Key functionality and capabilities
- **Technology Stack**: Detailed tech breakdown
- **Architecture & Security**: Technical implementation details
- **Screenshots**: Visual project showcase
- **Links**: Repository and live site links

## 🛠️ Installation & Setup

1. **Clone repository**
   ```bash
   git clone https://github.com/andreaseirich/andreaseirich.github.io.git
   cd andreaseirich.github.io
   ```

2. **Local Development**
   - Open `index.html` directly in browser, or
   - Use a local server:
     ```bash
     python -m http.server 8000
     # or
     npx http-server
     ```

3. **View in browser**
   - Navigate to `http://localhost:8000`

## 🎯 Design Principles

- **Minimalist**: Clean, focused design without unnecessary elements
- **Readability**: Optimized spacing and typography for easy reading
- **Consistency**: Unified structure across all pages
- **Professional**: Suitable for recruiters and technical decision-makers

## 📝 Projects

### Honey Treasures
- **Status**: Production system (live at honey-treasures.com)
- **Type**: E-Commerce system for small apiaries
- **Tech**: Django, Python, HTML/CSS/JavaScript
- **Highlights**: Case study, architecture overview, security implementation

### Preceptly
- **Status**: Live at [preceptly.de](https://preceptly.de); started as a CodeCraze Hackathon submission (Nov–Dec 2025)
- **Type**: Tutoring management system with student/parent portal, video meeting rooms and AI lesson planning
- **Tech**: Django, Python, PostgreSQL, Django Channels, Stripe, AI/LLM integration
- **Highlights**: Domain logic, conflict detection, workflow automation

### ChatCompanion
- **Status**: Open source, built for the Code Spring hackathon
- **Type**: Offline, privacy-first assistant that helps young people recognize risky chat patterns
- **Tech**: Python, Streamlit, local ML models
- **Highlights**: Rules-first detection, evidence-based explanations, no data uploads

### RADhuus Nortrup
- **Status**: Live at [radhuus-nortrup.de](https://radhuus-nortrup.de) (client project, source code private)
- **Type**: Static business website for a bicycle shop in Lower Saxony
- **Tech**: HTML, CSS, JavaScript
- **Highlights**: GDPR-compliant without cookies, image payload reduced from ~38 MB to ~8 MB

### andicode.de
- **Status**: Live at [andicode.de](https://andicode.de)
- **Type**: Freelance web development website
- **Tech**: HTML, Tailwind CSS, JavaScript
- **Highlights**: Dark theme, glassmorphism, scroll-reveal animations

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📄 License

Personal portfolio material. All rights reserved.

## 👤 Author

**Andreas Eirich**

- GitHub: [@andreaseirich](https://github.com/andreaseirich)
- LinkedIn: [andreas-eirich](https://www.linkedin.com/in/andreas-eirich)
- Portfolio: [andreaseirich.github.io](https://andreaseirich.github.io)

---

**Note**: This portfolio is continuously updated and improved.
