# Frontend Wizards - Stage 1 Multi-Page Application

A responsive, accessible multi-page web application featuring a profile card, contact form with validation, and an about me page. Built with semantic HTML, modern CSS, and vanilla JavaScript. This project builds on Stage 0 and meets all requirements for the Frontend Wizards Stage 1 task.

## Live Demo

[Live Demo Link](https://funny-faun-bcfa9e.netlify.app/)

## Features

### Stage 0 Requirements (Profile Card)
- **Profile card root container** - `data-testid="test-profile-card"`
- **Name (plain text)** - `data-testid="test-user-name"`
- **Short biography** - `data-testid="test-user-bio"`
- **Current time (milliseconds)** - `data-testid="test-user-time"`
- **Avatar image** - `data-testid="test-user-avatar"`
- **Social links list** - `data-testid="test-user-social-links"`
- **Hobbies list** - `data-testid="test-user-hobbies"`
- **Dislikes list** - `data-testid="test-user-dislikes"`

### Stage 1 Requirements (Multi-Page Application)

#### Contact Us Page
- **Full name field** - `data-testid="test-contact-name"`
- **Email field** - `data-testid="test-contact-email"`
- **Subject field** - `data-testid="test-contact-subject"`
- **Message field** - `data-testid="test-contact-message"`
- **Submit button** - `data-testid="test-contact-submit"`
- **Error messages** - `data-testid="test-contact-error-<field>"`
- **Success message** - `data-testid="test-contact-success"`
- **Form validation**: All fields required, email validation, 10+ character message
- **Accessibility**: Labels linked with `for`, error messages with `aria-describedby`

#### About Me Page
- **Main container** - `data-testid="test-about-page"`
- **Bio section** - `data-testid="test-about-bio"`
- **Goals section** - `data-testid="test-about-goals"`
- **Confidence areas** - `data-testid="test-about-confidence"`
- **Future note** - `data-testid="test-about-future-note"`
- **Extra thoughts** - `data-testid="test-about-extra"`
- **Semantic structure**: `<main>`, `<section>`, proper headings

### Design Features
- **Multi-Page Navigation**: Sticky navigation with active page indicators
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Modern UI**: Gradient backgrounds, smooth animations, hover effects
- **Form Validation**: Real-time validation with accessible error messages
- **Accessibility**: Semantic HTML, keyboard navigation, focus styles, ARIA attributes
- **Performance**: Optimized CSS and JavaScript with modular architecture

### Technical Implementation
- **Semantic HTML5**: Uses `<main>`, `<nav>`, `<article>`, `<header>`, `<section>`, `<figure>`, `<form>`
- **Modern CSS**: Flexbox and Grid layouts, CSS custom properties, responsive design
- **Vanilla JavaScript**: Form validation, dynamic updates, keyboard navigation enhancement
- **Accessibility**: ARIA labels, focus management, screen reader support, reduced motion
- **Form Handling**: Client-side validation, error messaging, success states

## Local Development

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Quick Start

1. **Clone or download** this repository
2. **Navigate** to the project directory
3. **Open** `index.html` in your browser

### Using a Local Server (Recommended)

#### Option 1: Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Option 2: Node.js
```bash
# Install a simple server globally
npm install -g http-server

# Run the server
http-server
```

#### Option 3: VS Code Live Server
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Access the Application
Open your browser and navigate to:
- Direct file: `file:///path/to/index.html`
- Local server: `http://localhost:8000`

## Project Structure

```
profile-card/
├── index.html          # Profile page (Stage 0)
├── contact.html        # Contact Us page with form validation
├── about.html          # About Me page with reflections
├── styles.css          # Responsive CSS for all pages
├── script.js           # Core JavaScript functionality
├── contact.js          # Contact form validation logic
└── README.md           # This file
```

## Testing

### Manual Testing Checklist

#### Profile Page (Stage 0)
- [ ] `test-profile-card` - Profile card container exists
- [ ] `test-user-name` - User name is displayed
- [ ] `test-user-bio` - Biography paragraph exists
- [ ] `test-user-time` - Current timestamp in milliseconds
- [ ] `test-user-avatar` - Avatar image with alt text
- [ ] `test-user-social-links` - Social links container
- [ ] `test-user-hobbies` - Hobbies list
- [ ] `test-user-dislikes` - Dislikes list

#### Contact Page (Stage 1)
- [ ] `test-contact-name` - Full name input field
- [ ] `test-contact-email` - Email input field
- [ ] `test-contact-subject` - Subject input field
- [ ] `test-contact-message` - Message textarea
- [ ] `test-contact-submit` - Submit button
- [ ] `test-contact-error-name` - Name error message
- [ ] `test-contact-error-email` - Email error message
- [ ] `test-contact-error-subject` - Subject error message
- [ ] `test-contact-error-message` - Message error message
- [ ] `test-contact-success` - Success message

#### About Page (Stage 1)
- [ ] `test-about-page` - Main container
- [ ] `test-about-bio` - Bio section
- [ ] `test-about-goals` - Goals section
- [ ] `test-about-confidence` - Confidence areas section
- [ ] `test-about-future-note` - Future note section
- [ ] `test-about-extra` - Extra thoughts section

#### Functionality
- [ ] Navigation works between all pages
- [ ] Active page is highlighted in navigation
- [ ] Timestamp updates every second with `Date.now()`
- [ ] Social links open in new tab with `rel="noopener noreferrer"`
- [ ] Avatar has proper alt text
- [ ] Form validation prevents invalid submissions
- [ ] Email validation works (name@example.com format)
- [ ] Message requires minimum 10 characters
- [ ] Success message shows after valid submission
- [ ] All interactive elements are keyboard accessible
- [ ] Focus styles are visible
- [ ] Error messages are announced to screen readers

#### Responsive Design
- [ ] Mobile (320px+): Stacked layout
- [ ] Tablet (768px+): Horizontal header layout
- [ ] Desktop (1024px+): Optimized spacing and typography

#### Accessibility
- [ ] Semantic HTML structure
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] High contrast mode support
- [ ] Reduced motion support

### Automated Testing
The JavaScript includes a validation function that checks for all required data-testids:

```javascript
// Run in browser console to validate
validateTestIds();
```

## Deployment

### Netlify (Recommended)
1. Create a Netlify account
2. Drag and drop the project folder to Netlify
3. Your site will be automatically deployed

### GitHub Pages
1. Push code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## Acceptance Criteria Status

### Stage 0 (Profile Card)
- All required elements with correct data-testids
- Semantic HTML5 structure
- Dynamic timestamp showing `Date.now()` in milliseconds
- Avatar with alt attribute and proper data-testid
- Social links with proper attributes and individual testids
- Distinct hobbies and dislikes lists

### Stage 1 (Multi-Page Application)
- Contact Us page with all required fields and data-testids
- Form validation (required fields, email format, message length)
- Success message after valid submission
- About Me page with all required sections and data-testids
- Semantic HTML structure (`<main>`, `<section>`, proper headings)
- Navigation between pages
- Accessibility (labels, ARIA associations, keyboard navigation)
- Responsive design across all devices
- Modular, readable, and consistent code

## Customization

### Changing Profile Information
Edit the content in `index.html`:
- Update name in the `h1` tag
- Modify biography in the `p` tag
- Change avatar `src` attribute
- Update social media links

### Styling Modifications
Customize the appearance in `styles.css`:
- Modify CSS custom properties for colors
- Adjust breakpoints for responsive design
- Update animations and transitions

### Adding Features
Extend functionality in `script.js`:
- Add new interactive elements
- Implement additional accessibility features
- Create custom animations

## 📝 License

This project is created for the Frontend Wizards Stage 0 task and is free to use and modify.

## 👨‍💻 Author

**Abdul Rahman**
- GitHub: [@abdul](https://github.com/abdul)
- Twitter: [@abdul](https://twitter.com/abdul)
- LinkedIn: [Abdul Rahman](https://linkedin.com/in/abdul)

---

*Built with love for Frontend Wizards Stage 1 Task*
