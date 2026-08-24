# CSS Demo - Inline, Internal & External CSS

A demonstration of the three ways to apply CSS to HTML documents.

## 📁 Folder Structure

```
css-demo/
├── inline-css/      # Styles applied directly to HTML elements
├── internal-css/    # Styles in <style> tag within <head>
└── external-css/    # Styles in separate .css file (recommended)
```

## 🎯 CSS Methods Explained

### 1. Inline CSS (`inline-css/`)
Styles applied directly to HTML elements using the `style` attribute.

```html
<h1 style="color: #2c3e50; text-align: center;">Inline CSS Demo</h1>
```

**Pros:** Highest specificity, quick prototyping
**Cons:** Not reusable, hard to maintain, mixes content with presentation

### 2. Internal CSS (`internal-css/`)
Styles defined within a `<style>` tag in the `<head>` section.

```html
<head>
  <style>
    body { font-family: Arial; }
    h1 { color: #2c3e50; }
  </style>
</head>
```

**Pros:** Reusable within page, no extra HTTP request
**Cons:** Not reusable across pages, not cached, increases page size

### 3. External CSS (`external-css/`) ✅ **Recommended**
Styles in a separate `.css` file linked via `<link>` tag.

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

**Pros:** Reusable across pages, cached by browser, separation of concerns, team-friendly
**Cons:** Extra HTTP request (mitigated by caching)

## 🚀 How to View

Open any `index.html` file in a browser:
- `inline-css/index.html`
- `internal-css/index.html`
- `external-css/index.html`

## 📚 Learning Points

1. **External CSS** is the industry standard for production websites
2. **Inline CSS** should be used sparingly (email templates, dynamic styles)
3. **Internal CSS** is suitable for single-page documents or testing
4. CSS specificity: Inline > Internal > External > Browser defaults

---
*Created as part of MERN stack learning exercises*