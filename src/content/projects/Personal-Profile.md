---
title: "Personal-Profile"
description: "A personal portfolio and blog built with Vue 3, Vite, and TypeScript, featuring a dark retro/mono aesthetic and markdown-driven content, deployed on Cloudflare Pages."
tags: [Vue, TypeScript, Tailwind CSS, Vite, Radix Vue, Lucide Vue Next, Vue Router, Cloudflare Pages]
imageUrl: ""
repoUrl: "https://github.com/SCWPretorius/Personal-Profile"
liveUrl: "https://schalkpretorius.com"
featured: true
---

## Overview

Personal portfolio and blog built with Vue 3, Vite, and TypeScript. Features a dark retro/mono aesthetic, markdown-driven content, and is deployed globally on Cloudflare Pages.

## Tech Stack

- **Framework**: Vue 3 (Composition API + <script setup>)
- **Build Tool**: Vite 5
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v3 + @tailwindcss/typography
- **UI Primitives**: Radix Vue
- **Icons**: Lucide Vue Next
- **Routing**: Vue Router 4 (HTML5 history mode)
- **Content**: Markdown files with YAML frontmatter
- **Hosting**: Cloudflare Pages

## How It Works

1. Markdown files in src/content/ (blog and projects) are parsed at runtime with YAML frontmatter for metadata.
2. Vue Router handles client-side navigation for pages like home, about, skills, projects, and blog.
3. Build with Vite for production, outputting to dist/ folder.
4. Deploy via GitHub CI/CD to Cloudflare Pages, using _redirects for SPA routing.

## Key Features

- Dark retro/mono design with responsive UI.
- Content management via Markdown (no CMS needed).
- Project and blog listings with individual detail pages.
- Global deployment for fast loading.
- Local dev server, type checking, and preview commands.