# AGENTS.md — template-elegant

Single-page Next.js static export for GitHub Pages. See `.agents/prd.md` for full spec.

## Stack & config

- `next.config.ts` must set `output: "export"`, `basePath: "/template-elegant"`, `trailingSlash: true`, `images: { unoptimized: true }`.
- `tsconfig.json` uses `@/` path alias for root.
- Tailwind CSS 4 + PostCSS (`@tailwindcss/postcss`).
- **Package manager: npm** (not pnpm, unlike the hub repo).
- No runtime API calls — fully static.

## Critical paths

- **Clean install before build**: delete `node_modules` + `package-lock.json` then `npm install` if dependencies were hoisted by parent pnpm monorepo.
- Asset helpers in `shared/utils/paths.ts` — uses `BASE = ""` (works with `basePath` in next.config).
- Public assets live under `public/templates/classic/elegant/` (images, audio) and `public/decorations/classic/` (SVGs).
- Import `assetPath()` from `@/shared/utils` for all asset URLs (prevents 404 on GH Pages subpath).

## Dev commands

```bash
npm run dev      # local dev server
npm run build    # produces static out/
```

No test, lint, or typecheck scripts defined.

## Sync with main repo

This repo is a **git submodule** of `invita-sin/invita-sin.github.io` at `apps/template-elegant/`.

- **Source of truth for shared code**: `invita-sin.github.io` root repo.
- Add `npm run sync:template` to root repo when shared code changes, then commit & push both sides.
- **Template-specific changes** (e.g. `page.tsx`, `config.json`, `next.config.ts`): edit directly in this repo.

## Architecture

- **Entry**: `app/page.tsx` — renders `TemplateRenderer` which composes all sections.
- **Sections** (in `shared/components/`): Cover, GoldParticles (canvas particle effect), Hero, Couple, Event, Countdown, LoveStory, Gallery (masonry CSS columns), Maps, RSVP, Gift, Closing, MusicPlayer, FloatingNav.
- **Hooks** (in `shared/hooks/`): `useCountdown`, `useMusicPlayer`, `useScrollAnimation`.
- **Types**: `shared/types/config.ts` — TS interfaces for `config.json`.
- **Config**: `config.json` imported statically at build time (not fetched at runtime in this template).
- **No routing** — single page only (`/`).

## CI/CD

- `.github/workflows/deploy.yml` — push to `main` triggers `npm ci` → `npm run build` → deploy to GH Pages.
- GitHub Pages source must be set to "GitHub Actions".

## Template-specific conventions

| Concern | Choice |
|---|---|
| Theme colors | Gold `#D4AF37`, ivory `#fffff0`, charcoal `#2d2d2d` |
| Fonts | Playfair Display (serif), Poppins (body), Montserrat (accent) |
| CSS variables | Defined in `app/theme-presets.css` (`--gold`, `--elegant-bg`, etc.) |
| Tailwind colors | Extended in `tailwind.config.ts` — `gold`, `ivory`, `champagne`, `charcoal` |
| WhatsApp number (centralized) | `6289697751622` — do not vary per template |
| Responsive | Test at 360px–1440px |
| No dark mode | Template has its own gold/ivory theme; `ThemeToggle` component exists but is unused |
| Music | Auto-play after first user tap (browser policy); mute toggle via `useMusicPlayer` |
| SEO | JSON-LD schema in `layout.tsx` |

## PRD sections NOT yet implemented (refer to `.agents/prd.md`)

- (All PRD sections are now implemented)
- Smooth scroll uses native `scroll-behavior: smooth` in `globals.css`
