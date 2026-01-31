Minimal portfolio built with **Next.js 16 (App Router)**, **Tailwind CSS**, and **shadcn/ui**.

Includes:
- Projects page with client-side search + tag filters
- Blog powered by local MDX files (static generation)
- Dark/light/system theme toggle

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customize

### 1) Your info / links
Edit `src/lib/site.ts`.

### 2) Projects
Edit `content/projects.ts`.

### 3) Blog posts
Add new `.mdx` files in `content/blog/`.

Each post uses frontmatter:

```md
---
title: "Post title"
date: "2026-01-30"
description: "Short summary"
tags: ["nextjs", "ui"]
published: true
---
```

## Build

```bash
npm run build
npm start
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy
Vercel works great for this project. Any platform that supports Next.js is fine.
