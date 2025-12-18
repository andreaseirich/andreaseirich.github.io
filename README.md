# Portfolio - Andreas Eirich

A modern, responsive portfolio website with dark mode design that presents my projects and skills.

## 🎨 Features

- **Dark Mode Design**: Modern, eye-friendly dark mode interface
- **Responsive Design**: Optimized for all devices (Desktop, Tablet, Mobile)
- **Smooth Animations**: Fluid transitions and hover effects
- **Glassmorphism**: Modern UI elements with backdrop blur effects
- **Gradient Design**: Appealing color gradients and visual effects
- **Sticky Navigation**: Fixed navigation bar for easy navigation
- **Contact Form**: Functional contact form with direct email sending (Web3Forms)
- **Project Showcase**: Clear presentation of projects with technology stack

## 🚀 Technologies

- **HTML5**: Semantic structuring
- **CSS3**: Modern styling with Flexbox, Grid, Animations and Custom Properties
- **JavaScript**: Interactive form functionality
- **Web3Forms**: Email sending service (free, no registration required)
- **Google Fonts**: Poppins font for modern typography
- **Responsive Design**: Mobile-First approach

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with dark mode design
├── tutorflow.html      # TutorFlow project overview page
├── honey-treasures.html # Honey Treasures project overview page
├── 404.html            # 404 error page
├── _config.yml         # Jekyll configuration (optional)
└── README.md           # Project documentation
```

## 🛠️ Installation & Setup

1. **Clone or download repository**
   ```bash
   git clone https://github.com/andreaseirich/andreaseirich.github.io.git
   cd andreaseirich.github.io
   ```

2. **Local Development**
   - Open the `index.html` file directly in your browser, or
   - Use a local development server:
     ```bash
     # With Python
     python -m http.server 8000
     
     # With Node.js (http-server)
     npx http-server
     ```

3. **Open in browser**
   - Navigate to `http://localhost:8000` (or the corresponding port)

## 📱 Usage

The website consists of the following main sections:

- **Header**: Hero section with name and description
- **Navigation**: Sticky navigation with jump links to sections
- **About Me**: Personal introduction and skills
- **Projects**: Overview of developed projects with details
- **Contact**: Functional contact form for direct communication
- **Footer**: Copyright information and social media links

## 🎯 Design Highlights

### Color Palette
- **Background**: Dark black (#0a0a0a) with subtle gradient overlays
- **Accents**: Purple-blue gradient (#6a11cb → #2575fc)
- **Text**: Light gray (#e0e0e0) for optimal readability

### Animations
- Fade-in animations on load
- Smooth scroll behavior
- Hover effects on interactive elements
- Gradient animations in header

### Responsive Breakpoints
- Desktop: > 768px (full features)
- Tablet: 768px (adjusted layout)
- Mobile: < 768px (optimized for touch)

## 📝 Customization

### Adding Your Own Projects

Edit the `index.html` file and add new project cards in the `<section id="projects">` section:

```html
<a href="project-page.html" class="project project-link">
  <h3>Project Name</h3>
  <p>Project description</p>
  <ul>
    <li>Technology 1: X%</li>
    <li>Technology 2: Y%</li>
  </ul>
</a>
```

### Adjusting Colors

The main colors can be adjusted in `style.css`:
- Gradient colors: `#6a11cb` and `#2575fc`
- Background: `#0a0a0a`
- Text: `#e0e0e0`

### Configuring Contact Form

The contact form uses Web3Forms for direct email sending. The configuration is located in `index.html`:

```javascript
const WEB3FORMS_ACCESS_KEY = 'your-access-key';
const YOUR_EMAIL = 'your-email@example.com';
```

**Note**: The form is already configured and functional. Emails are sent directly to the configured address.

## 🌐 Browser Support

- ✅ Chrome (latest version)
- ✅ Firefox (latest version)
- ✅ Safari (latest version)
- ✅ Edge (latest version)

## 📄 License

This project is personal portfolio material. All rights reserved.

## 👤 Author

**Andreas Eirich**

- GitHub: [@andreaseirich](https://github.com/andreaseirich)
- LinkedIn: [andreas-eirich](https://www.linkedin.com/in/andreas-eirich)
- Portfolio: [Portfolio Website](https://andreaseirich.github.io)

## 🙏 Acknowledgments

- [Google Fonts](https://fonts.google.com/) for the Poppins font
- [Web3Forms](https://web3forms.com/) for the contact form service
- Inspiration from modern dark mode designs

---

**Note**: This portfolio is continuously updated and improved. Feedback and suggestions are welcome!
