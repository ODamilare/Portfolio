# Damilare Oluwashanu — Portfolio

A Next.js 14 (App Router) + TypeScript + Tailwind CSS portfolio site.

## Stack

- **Interface** — React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Zustand
- **Forms & data** — React Hook Form, Yup, Recharts
- **Icons** — lucide-react

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/                 Next.js App Router entry (layout, page, global CSS)
  components/          All UI sections (Nav, Hero, About, Stack, Projects, Resume, Contact, Footer)
  data/                Edit these files to update site content
    site.ts            Name, role, email, socials, resume path, bio, quick facts
    stack.ts            Skill groups + proficiency chart data
    projects.ts         Your 6 project cards
  store/               Zustand store (mobile nav state)
  lib/                 Yup validation schema for the contact form
public/
  cv/                  Drop your real CV PDF here (see public/cv/README.txt)
```

## What to edit before launch

1. **`src/data/site.ts`** — your real email, GitHub, LinkedIn, and resume path.
2. **`src/data/projects.ts`** — replace all six placeholder projects with real names, summaries,
   tech tags, and live/repo links.
3. **`src/data/stack.ts`** — adjust the `proficiency` values if you want the chart to reflect
   your real confidence levels.
4. **`public/cv/`** — drop in `Damilare_Oluwashanu_CV.pdf` so the Download CV buttons work.
5. **Contact form** — `src/components/ContactForm.tsx` currently opens the visitor's mail client
   with a pre-filled message. Swap the `onSubmit` handler for a `fetch()` call to your own API
   route, or a service like Resend/Formspree, if you want it to send without leaving the page.

## Build for production

```bash
npm run build
npm start
```

## Deploying

This is a standard Next.js app — it deploys as-is to Vercel, Netlify, or any Node host. On
Vercel: push to a GitHub repo, import it at vercel.com, and it builds with zero config.
