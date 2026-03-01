---
title: "Tailwind CSS Tips I Wish I Knew Earlier"
date: "2025-06-05"
excerpt: "After two years of Tailwind in production, here are the patterns and utilities that changed how I write CSS."
tags: ["css", "tailwind", "frontend"]
coverImage: ""
---

# Tailwind CSS Tips I Wish I Knew Earlier

## 1. Use `@layer components` for repeated patterns

```css
@layer components {
  .card {
    @apply bg-white rounded-lg border border-gray-200 p-6 shadow-sm;
  }
}
```

## 2. `clsx` + `tailwind-merge` is the combo you need

```ts
export const cn = (...inputs) => twMerge(clsx(inputs))
```

## 3. The `group` and `peer` utilities are underused

`group` lets parent hover states control child styles. `peer` lets sibling states control each other.
