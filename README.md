# Personal Portfolio — schalkpretorius.com

> **Live site →** [schalkpretorius.com](https://schalkpretorius.com)

Personal portfolio and blog built with Vue 3, Vite, and TypeScript. Features a dark retro/mono aesthetic, markdown-driven content, and is deployed globally on Cloudflare Pages.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`) |
| Build tool | [Vite 5](https://vitejs.dev/) |
| Language | TypeScript 5 |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/) + `@tailwindcss/typography` |
| UI primitives | [Radix Vue](https://www.radix-vue.com/) |
| Icons | [Lucide Vue Next](https://lucide.dev/) |
| Routing | [Vue Router 4](https://router.vuejs.org/) (HTML5 history mode) |
| Content | Markdown files with YAML frontmatter |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com/) |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero + featured work |
| `/about` | About me |
| `/skills` | Skills overview |
| `/projects` | Project listing |
| `/projects/:slug` | Individual project post |
| `/blog` | Blog listing |
| `/blog/:slug` | Individual blog post |

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type check
npm run type-check

# Production build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## Content

Blog posts and project pages are driven by Markdown files with YAML frontmatter. No CMS or build-time data layer — files are imported and parsed at runtime.

### Blog posts

Add a `.md` file to `src/content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2025-01-01"
description: "A short description shown in the listing."
tags: [Tag1, Tag2]
---

Your post content here...
```

### Projects

Add a `.md` file to `src/content/projects/` and a corresponding cover image to `public/projects/`:

```markdown
---
title: "Project Name"
description: "Short description."
tags: [Vue.js, TypeScript]
imageUrl: "/projects/your-image.jpg"
repoUrl: "https://github.com/you/repo"
liveUrl: "https://yourproject.com"
featured: true
---

## Overview

Project details here...
```

---

## Deployment

This site is deployed on **Cloudflare Pages** via GitHub CI/CD.

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `20` (set via `NODE_VERSION` env var) |

### SPA Routing

`public/_redirects` configures Cloudflare Pages to serve `index.html` for all routes (required for Vue Router's HTML5 history mode), while static assets are served directly:

```
/assets/* /assets/:splat 200
/projects/* /projects/:splat 200
/favicon.svg /favicon.svg 200
/headshot.jpeg /headshot.jpeg 200
/* /index.html 200
```

> **Note:** Cloudflare Pages applies redirect rules unconditionally — static asset passthroughs must appear before the SPA catch-all.

---

## License

MIT
