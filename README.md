# Profile Card - Frontend Wizards Stage 0 Task

A responsive, accessible profile card component built with semantic HTML, modern CSS, and vanilla JavaScript. This project meets all the requirements for the Frontend Wizards Stage 0 task.

## 🚀 Live Demo

[Live Demo Link](https://your-netlify-url.netlify.app) *(Update this with your actual deployment URL)*

## 📋 Features

### ✅ Core Requirements Met
- **Profile card root container** - `data-testid="test-profile-card"`
- **Name (plain text)** - `data-testid="test-user-name"`
- **Short biography** - `data-testid="test-user-bio"`
- **Current time (milliseconds)** - `data-testid="test-user-time"`
- **Avatar image** - `data-testid="test-user-avatar"`
- **Social links list** - `data-testid="test-user-social-links"`
- **Hobbies list** - `data-testid="test-user-hobbies"`
- **Dislikes list** - `data-testid="test-user-dislikes"`

### 🎨 Design Features
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Modern UI**: Gradient backgrounds, smooth animations, hover effects
- **Accessibility**: Semantic HTML, keyboard navigation, focus styles
- **Performance**: Optimized CSS and JavaScript

### 🔧 Technical Implementation
- **Semantic HTML5**: Uses `<article>`, `<header>`, `<nav>`, `<section>`, `<figure>`
- **Modern CSS**: Flexbox and Grid layouts, CSS custom properties
- **Vanilla JavaScript**: Dynamic timestamp updates, keyboard navigation
- **Accessibility**: ARIA labels, focus management, reduced motion support

## 🛠️ Local Development

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

## 📁 Project Structure

```
profile-card/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Responsive CSS with modern design
├── script.js           # JavaScript for dynamic functionality
└── README.md           # This file
```

## 🧪 Testing

### Manual Testing Checklist

#### Data Test IDs
- [ ] `test-profile-card` - Profile card container exists
- [ ] `test-user-name` - User name is displayed
- [ ] `test-user-bio` - Biography paragraph exists
- [ ] `test-user-time` - Current timestamp in milliseconds
- [ ] `test-user-avatar` - Avatar image with alt text
- [ ] `test-user-social-links` - Social links container
- [ ] `test-user-hobbies` - Hobbies list
- [ ] `test-user-dislikes` - Dislikes list

#### Functionality
- [ ] Timestamp updates every second with `Date.now()`
- [ ] Social links open in new tab with `rel="noopener noreferrer"`
- [ ] Avatar has proper alt text
- [ ] All interactive elements are keyboard accessible
- [ ] Focus styles are visible

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

## 🚀 Deployment

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

## 🎯 Acceptance Criteria Status

- ✅ All required elements with correct data-testids
- ✅ Semantic HTML5 structure
- ✅ Dynamic timestamp showing `Date.now()` in milliseconds
- ✅ Avatar with alt attribute and proper data-testid
- ✅ Social links with proper attributes and individual testids
- ✅ Distinct hobbies and dislikes lists
- ✅ Keyboard navigation and focus styles
- ✅ Responsive layout for all screen sizes
- ✅ Accessible design patterns

## 🔧 Customization

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

*Built with ❤️ for Frontend Wizards Stage 0 Task*
