# Modern Portfolio Website

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://dynamic-madeleine-b29089.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/dynamic-madeleine-b29089/deploys)

> 🚀 **[View Live Demo](https://dynamic-madeleine-b29089.netlify.app/)**

A high-performance, accessible portfolio website built with React 18, TypeScript, Vite, and TailwindCSS.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, TailwindCSS
- **High Performance**: Lighthouse score ≥ 95 (Mobile & Desktop)
- **Accessibility First**: WCAG 2.1 compliant with semantic HTML, keyboard navigation, and ARIA labels
- **SEO Optimized**: Meta tags, JSON-LD schema, sitemap, and robots.txt
- **Responsive Design**: Mobile-first approach with clean, professional UI
- **Code Splitting**: Lazy-loaded routes and components for optimal performance
- **Lite Mode**: Toggle to disable animations for low-end devices
- **Modern Icons**: Inline SVG icons from Lucide React
- **Smooth Animations**: Lightweight CSS-only micro-interactions
- **Form Validation**: Contact form with client-side validation

## 📁 Project Structure

```
modern-portfolio/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SEO.tsx
│   │   └── JSONLDSchema.tsx
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   ├── Work.tsx
│   │   ├── WorkDetail.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── hooks/              # Custom React hooks
│   │   └── useLiteMode.ts
│   ├── data/               # Static data
│   │   └── projects.ts
│   ├── styles/             # Global styles
│   │   └── index.css
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── public/                 # Static assets
│   ├── sitemap.xml
│   └── robots.txt
└── package.json
```

## 🛠️ Installation

### Prerequisites

- Node.js 18+ installed
- pnpm package manager

### Steps

1. **Clone or download the project**:
   ```bash
   cd modern-portfolio
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Run development server**:
   ```bash
   pnpm dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173`

## 📦 Build & Deployment

### Build for production

```bash
pnpm build
```

The optimized build will be in the `dist/` folder.

### Preview production build

```bash
pnpm preview
```

### Deploy

The `dist/` folder can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## ⚡ Performance Optimizations

### Code Splitting
- ✅ Lazy-loaded routes with React.lazy()
- ✅ Dynamic imports for heavy components
- ✅ Manual chunk splitting for vendors

### Image Optimization
- ✅ Lazy loading with `loading="lazy"`
- ✅ Responsive images with srcset (via Unsplash)
- ✅ WebP/AVIF format support

### JavaScript Optimization
- ✅ Tree-shaking unused code
- ✅ Minification with Terser
- ✅ Remove console logs in production

### CSS Optimization
- ✅ TailwindCSS purging unused styles
- ✅ CSS code splitting
- ✅ Critical CSS inlining

### Font Loading
- ✅ Preconnect to Google Fonts
- ✅ `font-display: swap` for FOIT prevention
- ✅ Subset fonts (Latin only)

### Network Optimization
- ✅ Preload critical resources
- ✅ Compression (handled by hosting)
- ✅ CDN for static assets

## ♿ Accessibility Features

- **Semantic HTML**: Proper landmark elements (`nav`, `main`, `footer`, `section`)
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Focus Indicators**: Visible focus states for all focusable elements
- **ARIA Labels**: Descriptive labels for screen readers
- **Color Contrast**: WCAG AA compliant (4.5:1 minimum)
- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **Alt Text**: All images have descriptive alt attributes
- **Form Validation**: Clear error messages with ARIA alerts

## 🎨 Customization

### Colors

Edit [tailwind.config.js](tailwind.config.js) to customize the color palette:

```js
colors: {
  primary: { ... },
  neutral: { ... }
}
```

### Content

- **Projects**: Edit [src/data/projects.ts](src/data/projects.ts)
- **Personal Info**: Update text in page components
- **Social Links**: Modify [src/components/Footer.tsx](src/components/Footer.tsx)

### SEO

- **Site URL**: Update `sitemap.xml` and `robots.txt` in `public/`
- **Meta Tags**: Customize SEO component in each page
- **JSON-LD**: Edit [src/components/JSONLDSchema.tsx](src/components/JSONLDSchema.tsx)

## 🧪 Performance Checklist

- [x] Lighthouse Performance score ≥ 95
- [x] First Contentful Paint < 1.8s
- [x] Time to Interactive < 3.8s
- [x] Cumulative Layout Shift < 0.1
- [x] Total Blocking Time < 200ms
- [x] Code splitting implemented
- [x] Images lazy loaded
- [x] Fonts optimized with swap
- [x] CSS minified and purged
- [x] JS tree-shaken and minified
- [x] Lite mode for low-end devices
- [x] Prefers-reduced-motion support

## 📄 License

MIT License

Copyright (c) 2025 Mutlu Kurt

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

**Built with 💚 by Mutlu Kurt**
React 18 • TypeScript • Vite • TailwindCSS
