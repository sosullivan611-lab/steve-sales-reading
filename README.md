# Reading Pipeline

A six-month modern sales reading plan for sellers between roles. Track 13 books (George Vitko’s curriculum + *Cold Calling Sucks*), lock in key lessons, run field drills, and turn each book into interview ammunition.

Repository: [github.com/sosullivan611-lab/steve-sales-reading](https://github.com/sosullivan611-lab/steve-sales-reading)

## What’s inside

- **Week 0:** *Cold Calling Sucks (and that’s why it works)* by Armand Farrokh & Nick Cegelski
- **Months 1–6:** Prospecting → Discovery → Methodology → Influence → Negotiation → Communication
- Daily reading streak + progress saved in your browser
- Job-search weekly rhythm so reading doesn’t replace outreach

## Run locally

```bash
git clone https://github.com/sosullivan611-lab/steve-sales-reading.git
cd steve-sales-reading
npm install
npm run dev
```

Open [http://127.0.0.1:43127](http://127.0.0.1:43127).

## Deploy on GitHub Pages

This repo builds a static export and deploys with GitHub Actions (see `.github/workflows/deploy-pages.yml`).

1. Push `main` to [steve-sales-reading](https://github.com/sosullivan611-lab/steve-sales-reading).
2. On GitHub: **Settings → Pages → Build and deployment → Source** → **GitHub Actions**.
3. **Actions** → **Deploy to GitHub Pages** → **Run workflow** (or push to `main`).
4. Live site:

   **https://sosullivan611-lab.github.io/steve-sales-reading/**

Progress saves in the browser (`localStorage`); no server or database required.

> **Private repos:** GitHub Pages on private repositories requires a paid GitHub plan. On the free tier, make the repo public or upgrade to use Pages.

## Stack

Next.js (static export), TypeScript, Tailwind CSS, shadcn/ui.
