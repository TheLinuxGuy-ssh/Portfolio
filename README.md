<div align="center">

# TheLinuxGuy Portfolio

<video src="https://github.com/user-attachments/assets/551280bc-f150-40ed-a981-8475c70791b3">

**Built with SvelteKit, this portfolio achieves 100/100 on all four Lighthouse metrics. Open sourced to show how these optimizations were accomplished.**

<br />


[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-ffffff?style=for-the-badge&logo=lighthouse&logoColor=white)](#core-web-vitals)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-2.57.1-ffffff?style=for-the-badge&logo=svelte&logoColor=white)](https://kit.svelte.dev/)
[![Svelte](https://img.shields.io/badge/Svelte-5.45.2-ffffff?style=for-the-badge&logo=svelte&logoColor=white)](https://svelte.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-ffffff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

[![Stars](https://img.shields.io/github/stars/thelinuxguy-ssh/portfolio?style=for-the-badge&color=ffffff&labelColor=0c0c0e)](https://github.com/thelinuxguy-ssh/portfolio/stargazers)
[![License](https://img.shields.io/github/license/thelinuxguy-ssh/portfolio?style=for-the-badge&color=ffffff&labelColor=0c0c0e)](./LICENSE)

</div>

<br />

---

## Table of Contents

- [Image Optimization](#image-optimization)
- [Video Optimization](#video-optimization)
- [Font Loading](#font-loading)
- [JavaScript Loading](#javascript-loading)
- [CSS Generation](#css-generation)
- [Core Web Vitals](#core-web-vitals)
- [Structure](#structure)
- [Why This Approach](#why-this-approach)
- [Development](#development)
- [Building](#building)
- [Dependencies](#dependencies)

---

## Image Optimization

Images use `@sveltejs/enhanced-img` which automatically converts to modern formats (WebP/AVIF) at build time with fallbacks. This handles responsive images, lazy loading, and prevents layout shifts by calculating dimensions ahead of time.

```svelte
<script>
  import logo from "$lib/assets/logo.webp";
</script>

<enhanced:img src={logo} alt="" />
```

All images (logo, GitHub icon, navigation icons) are processed through this pipeline.

---

## Video Optimization

Videos are encoded in H.264 (MP4) with `preload="metadata"` to avoid loading the full file upfront:

| File | Size |
|---|---|
| `Desktop.mp4` | 220 KB |
| `tlglink.mp4` | 164 KB |
| Project videos | Various |

```html
<video src="/Desktop.mp4" muted loop autoplay playsinline></video>
```

H.264 was chosen over VP9 because it provides excellent compression, universal browser support, and hardware acceleration on all platforms. This saves 80% compared to animated GIFs.

---

## Font Loading

Two WOFF2 fonts total (34 KB):

| File | Size |
|---|---|
| `Hermit-Light.woff2` | 20 KB |
| `ProFont.woff2` | 14 KB |

Using `font-display: swap` prevents layout shifts by showing system fonts immediately, then swapping in the custom fonts when loaded.

```css
@font-face {
  font-family: HermitBold;
  src: url(/fonts/Hermit/Hermit-Light.woff2) format('woff2');
  font-display: swap;
}
```

---

## JavaScript Loading

Heavy libraries (GSAP, AOS, Locomotive Scroll) are lazy loaded in the `onMount` hook instead of blocking the initial render:

```javascript
onMount(async () => {
  await import("$lib/js/script.js");
});
```

This ensures the page is interactive before animations load.

---

## CSS Generation

Where possible, effects are built with CSS gradients instead of images. The hero section background, for example, uses pure CSS — zero image requests.

---

## Core Web Vitals

| Metric | Result | Why |
|---|---|---|
| **LCP** (Largest Contentful Paint) | Fast | Enhanced images with explicit dimensions load quickly |
| **CLS** (Cumulative Layout Shift) | 0.0 | `font-display: swap` prevents font shifts, all elements have fixed dimensions |
| **FID / INP** | Clear | Main thread stays free by deferring heavy JS to `onMount` |

---

## Structure

```
src/
├── routes/              SvelteKit pages
├── components/          Svelte components (Hero, Work, About, etc.)
├── lib/
│   ├── assets/          Images for enhanced:img
│   ├── js/script.js     Lazy-loaded animations
│   └── projects.json    Project data
├── app.css               Global styles + fonts
└── app.html               HTML template (uses display: contents)

static/
├── fonts/                WOFF2 files
├── images/                Logos and project videos
├── css/                  Normalize, links, locomotive, main styles
└── audio/                 Boot sound
```

---

## Why This Approach

Modern image formats reduce file sizes 30-50%. Video instead of GIF saves 80%. WOFF2 fonts are 30-50% smaller than WOFF. Lazy loading JS keeps the main thread responsive. Using `font-display: swap` and explicit dimensions eliminates layout shifts entirely.

Vercel's global CDN and Lighthouse monitoring made it easy to test and verify scores across different devices and connection speeds.

---

## Development

```bash
npm install
npm run dev
```

---

## Building

```bash
npm run build
```

Produces optimized static assets. Deployed to Vercel with automatic image optimization and zero-config HTTPS.

---

## Dependencies

| Package | Version |
|---|---|
| SvelteKit | 2.57.1 |
| Svelte | 5.45.2 |
| Vite | 7.3.1 |
| `@sveltejs/enhanced-img` | 0.10.4 |
| GSAP | 3.14.2 |
| AOS | 2.3.4 |
| Locomotive Scroll | 5.0.1 |
| `@vercel/analytics` + `speed-insights` | monitoring |
