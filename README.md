# Next.js + Tailwind Portfolio for SUMIT BADAKE

This repository contains a complete, production-ready **Next.js + TailwindCSS** portfolio tailored to your resume. It includes: home, about, projects, internships, achievements, skills, contact form (MongoDB), resume download, and deployment instructions.

## Project structure

```
next-portfolio-sumit/
├─ README.md
├─ package.json
├─ next.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ public/
│  ├─ resume.pdf   <-- Replace with actual resume file
│  └─ images/
├─ pages/
│  ├─ _app.jsx
│  ├─ index.jsx
│  ├─ about.jsx
│  ├─ projects.jsx
│  ├─ internships.jsx
│  ├─ achievements.jsx
│  ├─ contact.jsx
│  └─ api/
│     └─ contact.js
├─ components/
│  ├─ Layout.jsx
│  ├─ Navbar.jsx
│  ├─ Hero.jsx
│  ├─ ProjectCard.jsx
│  ├─ SkillPill.jsx
│  ├─ Footer.jsx
│  └─ Timeline.jsx
├─ lib/
│  └─ mongodb.js
├─ styles/
│  └─ globals.css
└─ .env.local.example
```

## Deployment & Run Instructions

1. **Install dependencies**

```bash
npm install
```

2. **Replace resume file**

Replace the placeholder `public/resume.pdf` with your actual resume file.

3. **Set environment variables**

Create `.env.local` with values from `.env.local.example`.

4. **Run locally**

```bash
npm run dev
```

5. **Deploy**

- Push to GitHub. Connect the repo to Vercel.
- Set `MONGODB_URI` and `MONGODB_DB` in Vercel environment variables.

## Customization

Edit the strings in `pages/index.jsx` and `pages/about.jsx` to update personal information, projects, skills, and other details.