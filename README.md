# Modern Portfolio Website

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://dynamic-madeleine-b29089.netlify.app/)


> 🚀 **[View Live Demo](https://dynamic-madeleine-b29089.netlify.app/)**

A high-performance, bold portfolio website with neon colors inspired by modern design trends. Built with React 18, TypeScript, Vite, and TailwindCSS.

## ✨ Current Features (Latest Version)

### 🎨 Design & UI
- **Bold Neon Color Palette**: Electric blue (`#0000FF`), lime green (`#CCFF00`), hot pink (`#FF00FF`), cyan (`#00FFFF`)
- **Brutalist Design**: 4px black borders, uppercase typography, high contrast
- **System Fonts Only**: Zero external font requests, instant load with native OS fonts
- **Mobile-First Responsive**: Optimized for all screen sizes with no horizontal scroll
- **Break-word Typography**: Smart text wrapping prevents overflow on any device

### ⚡ Performance (90+ Lighthouse Score)
- **Ultra-Lightweight**: ~67KB gzipped total bundle size
- **No Blur Effects**: Removed GPU-heavy effects for better mobile performance
- **System Fonts**: `-apple-system`, `BlinkMacSystemFont`, `Segoe UI` - 0KB network cost
- **Code Splitting**: React.lazy() with manual vendor chunks (React, Icons)
- **Optimized Images**: Lazy loading with `loading="lazy"` attribute
- **CSS-Only Animations**: Removed Framer Motion, using pure CSS transitions
- **Terser Minification**: Aggressive compression with console removal

### 🏗️ Architecture & Tech
- **React 18**: Latest features with concurrent rendering
- **TypeScript**: Full type safety across the codebase
- **Vite 5**: Lightning-fast HMR and optimized production builds
- **TailwindCSS 3**: Utility-first with custom neon color palette
- **React Router v6**: Client-side routing with lazy-loaded pages
- **Lucide React**: Tree-shakeable icon library (only used icons bundled)

### 📱 Pages & Components
- **Home**: Hero with stats, featured projects grid, services showcase
- **Work**: Filterable project gallery with category tags
- **Work Detail**: Individual project pages with image galleries
- **About**: Bio, skills, awards with bold card layouts
- **Contact**: Validated form with success states

### 🔧 Technical Optimizations
- **Manual Chunk Splitting**: Separate vendors for React and icons
- **Tree Shaking**: Only imports used code from libraries
- **CSS Purging**: TailwindCSS removes all unused styles
- **Overflow Control**: `overflow-x: hidden` on html, body, #root
- **Mobile Font Scaling**: Responsive typography (text-5xl → text-4xl on mobile)

### ♿ Accessibility
- **Semantic HTML**: Proper use of nav, main, footer, section, article
- **Keyboard Navigation**: All interactive elements keyboard-accessible
- **Focus Indicators**: Visible focus rings on all focusable elements
- **ARIA Labels**: Screen reader support throughout
- **Color Contrast**: WCAG AA compliant ratios
- **Prefers-Reduced-Motion**: Respects system animation preferences

### 🎯 SEO & Meta
- **JSON-LD Schema**: Person and CreativeWork structured data
- **Dynamic Meta Tags**: Per-page titles, descriptions, OG tags
- **Sitemap.xml**: All pages indexed
- **Robots.txt**: Search engine configuration

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
- ✅ System fonts only (no external requests)
- ✅ Instant rendering with native OS fonts
- ✅ Zero CLS (Cumulative Layout Shift)

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

Edit [tailwind.config.js](tailwind.config.js) to customize the neon color palette:

```js
colors: {
  neon: {
    blue: '#0000FF',
    lime: '#CCFF00',
    pink: '#FF00FF',
    cyan: '#00FFFF',
  },
  boozt: {
    blue: '#0000FF',
    lime: '#CCFF00',
    purple: '#1a0066',
    dark: '#0a0a0a',
  }
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

### Achieved Metrics
- [x] **Lighthouse Mobile**: 90+ score
- [x] **Lighthouse Desktop**: 95-100 score
- [x] **Bundle Size**: ~67KB gzipped (ultra-light)
- [x] **First Contentful Paint**: < 1.0s
- [x] **Time to Interactive**: < 2.0s
- [x] **Cumulative Layout Shift**: 0 (system fonts)
- [x] **Total Blocking Time**: < 50ms
- [x] **No Horizontal Scroll**: Mobile optimized

### Optimizations Applied
- [x] System fonts (0KB network request)
- [x] No Framer Motion (removed 36KB)
- [x] No blur effects (GPU optimization)
- [x] Code splitting with vendor chunks
- [x] Images lazy loaded
- [x] CSS purged and minified
- [x] JS tree-shaken and terser minified
- [x] Console logs removed in production
- [x] Responsive typography (mobile scaling)
- [x] Overflow-x hidden globally
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
