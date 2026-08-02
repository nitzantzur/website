# Nitzan Tzur-Ilan — Academic Website

Personal academic website built with Vite + React + TypeScript + Tailwind CSS + Framer Motion.
Auto-deploys to GitHub Pages via GitHub Actions on every push to `main`.

**Live site:** https://www.nitzantzur-ilan.com *(active after DNS switch)*

---

## Local Development

```bash
npm install
npm run dev        # starts dev server at http://localhost:5173
npm run build      # production build → dist/
npm run typecheck  # TypeScript check without build
```

---

## Updating Content

All content lives in `src/content/`. Edit the relevant JSON file, commit, and push.
The site auto-deploys in about 1 minute.

| File | What it controls |
|------|-----------------|
| `src/content/bio.json` | Name, title, bio text, research interests, external profile links |
| `src/content/publications.json` | Peer-reviewed publications |
| `src/content/working-papers.json` | Working papers and preprints |
| `src/content/media.json` | Press coverage, podcasts, interviews |
| `src/content/talks.json` | Conference presentations and seminars |
| `src/content/service.json` | Refereeing, editorial boards, committees |

### Adding a Publication

Open `src/content/publications.json` and add an entry at the top of the array:

```json
{
  "id": "unique-slug-for-paper",
  "title": "Your Paper Title",
  "authors": ["Tzur-Ilan, Nitzan", "Coauthor, Name"],
  "journal": "Journal Name",
  "year": 2025,
  "volume": "12",
  "issue": "3",
  "pages": "100–130",
  "doi": "10.xxxx/xxxxx",
  "ssrn": "https://papers.ssrn.com/...",
  "abstract": "Your abstract here.",
  "tags": ["real estate finance", "mortgages"],
  "featured": false
}
```

Set `"featured": true` to show it on the homepage.

### Adding a Working Paper

Open `src/content/working-papers.json`. Status options: `"new"`, `"under-review"`, `"revise-resubmit"`, `"draft"`.

```json
{
  "id": "unique-slug",
  "title": "Paper Title",
  "coauthors": ["Coauthor, Name"],
  "date": "2025-03",
  "abstract": "Abstract text.",
  "ssrn": "https://papers.ssrn.com/...",
  "pdf": "",
  "status": "under-review",
  "tags": ["urban economics"]
}
```

### Updating Profile Links

Open `src/content/bio.json` and update the `links` object. Any link containing `"PLACEHOLDER"` is
automatically hidden on the site until you replace it with a real URL.

---

## Adding Your Photo

Place your headshot at `public/photo.jpg` (JPG or PNG, square crop recommended, at least 240×240px).
The site falls back to a monogram "NT" avatar if the file is missing.

---

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`:

1. Installs dependencies (`npm ci`)
2. Builds the site (`npm run build` → `dist/`)
3. Deploys `dist/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`

The `gh-pages` branch is what GitHub Pages serves.

**One-time repo setup** (do this once in GitHub UI):
> Settings → Pages → Source: **Deploy from a branch** → Branch: `gh-pages` / `/ (root)`

---

## Switching Your Domain from Google Sites

When the new site is ready and you want to cut over from your Google Site:

1. **DNS:** At your domain registrar (Google Domains / Squarespace / etc.), update the `www` CNAME record to point to `nitzantzur.github.io`
2. **GitHub:** Settings → Pages → Custom domain: type `www.nitzantzur-ilan.com` → Save
3. **HTTPS:** Check "Enforce HTTPS" once the certificate provisions (takes ~10 minutes)
4. **Google Sites:** Archive or unpublish your old Google Site

The `CNAME` file in `public/` and the `cname:` setting in the GitHub Actions workflow ensure the
custom domain is preserved on every deploy.

> **Note on `vite.config.ts` base URL:** Currently set to `base: '/'`, which is correct with a
> custom domain. If you ever test on `nitzantzur.github.io/website/` before the domain switch,
> temporarily change this to `base: '/website/'`, then revert before going live.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Vite](https://vitejs.dev) | Build tool |
| [React 18](https://react.dev) | UI framework |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Tailwind CSS v3](https://tailwindcss.com) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Page transitions |
| [React Router v6](https://reactrouter.com) | Client-side routing |
| [react-helmet-async](https://github.com/staylor/react-helmet-async) | SEO meta tags |
| [GitHub Actions](https://github.com/features/actions) | CI/CD deployment |
| [GitHub Pages](https://pages.github.com) | Hosting (free) |
