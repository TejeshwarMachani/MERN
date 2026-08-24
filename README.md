# MERN Stack Learning Exercises

This repository contains three learning exercises demonstrating key web development concepts:

## 📁 Folder Structure

```
.
├── css-demo/          # Inline, Internal & External CSS demonstration
├── mvc-demo/          # Model-View-Controller architecture demo (Python)
├── react-resume/      # React resume with Class & Functional Components
└── README.md
```

## 🎯 Exercises

### 1. CSS Demo (`css-demo/`)
Demonstrates the three ways to apply CSS to HTML:
- **Inline CSS**: Styles applied directly to HTML elements
- **Internal CSS**: Styles defined in `<style>` tag within `<head>`
- **External CSS**: Styles in separate `.css` file (recommended approach)

Each method is shown in its own folder with a complete HTML example.

### 2. MVC Architecture Demo (`mvc-demo/`)
A Python implementation of the Model-View-Controller pattern:
- **Model**: `model.py` - Handles data and business logic
- **View**: `view.py` - Handles display and user interface
- **Controller**: `controller.py` - Processes input and coordinates Model & View
- **Main**: `main.py` - Entry point to run the demo

Features a console-based user management system with CRUD operations.

### 3. React Resume (`react-resume/`)
A modern, responsive resume built with React demonstrating:
- **Class Components**: Header, Experience, Projects (with state management)
- **Functional Components**: Summary, Skills, Education, Certifications, Footer
- **Hooks Usage**: useState for interactive elements (filters, expandable sections, modals)
- **Responsive Design**: Mobile-first CSS with print styles for PDF export
- **Modern UI**: Gradient themes, animations, hover effects

## 🚀 Getting Started

Each exercise is self-contained. To run:

### CSS Demo
Open any `index.html` file in a browser:
- `css-demo/inline-css/index.html`
- `css-demo/internal-css/index.html`
- `css-demo/external-css/index.html`

### MVC Demo
```bash
cd mvc-demo
python main.py
```
Follow the on-screen menu to manage users.

### React Resume
```bash
cd react-resume
npm install
npm start
```
Opens at http://localhost:3000.

## 📚 Learning Outcomes

- Understand CSS specificity and best practices
- Learn MVC pattern separation of concerns
- Practice React component architecture (Class vs Functional)
- Implement state management with `useState` and `this.setState`
- Create responsive layouts with CSS Grid/Flexbox
- Build accessible, semantic HTML structures

## 🛠️ Technologies Used

- HTML5, CSS3
- Python 3
- React 18, JavaScript/JSX
- Node.js (for React tooling)

## 🤝 Contributing

These are learning exercises, but feel free to fork and experiment!

## 📄 License

MIT License - feel free to use for learning and projects.

---
*Created as part of MERN stack learning journey*