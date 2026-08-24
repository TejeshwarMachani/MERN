# React Resume - Component-Based Portfolio

A modern, responsive resume built with React demonstrating both **Class Components** and **Functional Components** with Hooks.

## 🌟 Features

- **Class Components**: Header, Experience, Projects (with state management)
- **Functional Components**: Summary, Skills, Education, Certifications, Footer
- **Hooks Usage**: useState for interactive elements (Skills filter, Experience expand, Project modal)
- **Responsive Design**: Mobile-first CSS with print styles
- **Modern UI**: Gradient themes, animations, hover effects
- **Accessibility**: Semantic HTML, ARIA attributes, keyboard navigation

## 📁 Project Structure

```
react-resume/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── Header.js       # Class Component - Name, title, contact
│   │   ├── Summary.js      # Functional Component - Professional summary
│   │   ├── Experience.js   # Class Component - Expandable work history
│   │   ├── Education.js    # Functional Component - Academic background
│   │   ├── Skills.js       # Functional Component - Categorized skills with bars
│   │   ├── Projects.js     # Class Component - Project cards with modal
│   │   ├── Certifications.js # Functional Component - Certs & achievements
│   │   └── Footer.js       # Functional Component - Links & copyright
│   ├── App.js              # Main app component
│   ├── index.js            # Entry point
│   └── styles.css          # Complete styling
├── package.json
└── README.md
```

## 🎨 Component Architecture

### Class Components (Lifecycle Methods & State)

| Component | Purpose | State |
|-----------|---------|-------|
| **Header** | Profile header with expandable contact | `isExpanded` |
| **Experience** | Work history with expandable details | `expandedIndex` |
| **Projects** | Project showcase with modal detail view | `selectedProject` |

### Functional Components (Hooks)

| Component | Purpose | Hooks |
|-----------|---------|-------|
| **Summary** | Professional profile | None (presentational) |
| **Skills** | Filterable skill categories with progress bars | `useState` |
| **Education** | Academic background | None (presentational) |
| **Certifications** | Certificates & achievements | None (presentational) |
| **Footer** | Links & attribution | None (presentational) |

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
cd react-resume
npm install
```

### Development

```bash
npm start
```
Opens at http://localhost:3000 with hot reload.

### Production Build

```bash
npm run build
```
Creates optimized build in `build/` folder.

## 💡 Key Implementation Details

### Class Component Pattern
```javascript
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false };
  }

  toggleExpand = () => {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  };

  render() {
    return <header>...</header>;
  }
}
```

### Functional Component with Hooks
```javascript
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section>
      <button onClick={() => setActiveCategory('frontend')}>Frontend</button>
      {/* Render filtered skills */}
    </section>
  );
};
```

### State Management Examples

1. **Skills Filter** - `useState` for active category
2. **Experience Expand** - `useState` for expanded card index
3. **Project Modal** - `useState` for selected project object

## 🎨 Styling Highlights

- **CSS Custom Properties** for consistent theming
- **CSS Grid & Flexbox** for responsive layouts
- **Animations** - fadeIn, slideUp, hover transitions
- **Print Styles** - optimized for PDF generation
- **Mobile-First** - breakpoints at 768px
- **Dark Header** - gradient with decorative elements

## 📱 Responsive Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | < 768px | Single column, stacked sections |
| Tablet | 768px - 1024px | Two-column sidebar/content |
| Desktop | > 1024px | Full two-column layout |

## 🖨️ Print/PDF Export

The resume includes `@media print` styles:
1. Open in browser
2. Press `Ctrl+P` (Windows) / `Cmd+P` (Mac)
3. Save as PDF
4. Hide expand buttons, show all details

## 🔧 Customization

### Update Personal Info
Edit data in each component file:
- `Header.js` - Name, title, contact
- `Summary.js` - Professional summary
- `Experience.js` - Work history array
- `Education.js` - Education array
- `Skills.js` - Skill categories & levels
- `Projects.js` - Project array
- `Certifications.js` - Certifications & achievements

### Theme Colors
Modify CSS custom properties in `styles.css`:
```css
:root {
  --primary: #667eea;
  --secondary: #764ba2;
  --accent: #e74c3c;
  /* ... more variables */
}
```

## 📚 Learning Outcomes

- ✅ Class vs Functional Components
- ✅ State management with `this.setState` vs `useState`
- ✅ Event handling patterns
- ✅ Conditional rendering
- ✅ List rendering with keys
- ✅ Component composition
- ✅ CSS-in-JS vs external CSS
- ✅ Responsive design with CSS
- ✅ Accessibility best practices

## 🚀 Deployment

### GitHub Pages
```bash
npm install --save gh-pages
# Add to package.json:
# "homepage": "https://username.github.io/repo-name",
# "scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d build" }
npm run deploy
```

### Netlify/Vercel
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `build`

---

*Built with React 18 • Demonstrating modern component patterns*