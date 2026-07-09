# our scrapbook 💛

A handmade, interactive digital scrapbook — built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Making it yours

Everything you'll want to personalize lives in plain data files — no need to touch components:

| What | File |
|---|---|
| Your names on the cover | `src/app/page.tsx` (`NAME_ONE`, `NAME_TWO` constants near the top) |
| Timeline milestones | `src/data/timeline.ts` |
| "Open When" letters (add/remove freely) | `src/data/letters.ts` |
| Gallery photos | `src/data/gallery.ts` |
| Messages from friends & family | `src/data/messages.ts` |
| Starter bucket-list dreams | `src/data/dreams.ts` (once loaded, changes are saved to the browser via localStorage, so he can add/edit/complete dreams himself on the live site) |

### Photos

Placeholder images currently come from `picsum.photos`. Replace any `src` value in the data files with your own photo — either:
- a URL to an image hosted elsewhere, or
- a local file dropped into `public/images/` and referenced as `/images/your-file.jpg`

### Music

Drop an mp3 into `public/audio/music.mp3` and the Home page play/pause button will work automatically. For the voice-note postcard in Messages, add a file and set its `mediaSrc` in `src/data/messages.ts`.

### Sunflower cursor

Lives in `src/components/SunflowerCursor.tsx`. It automatically disables on touch devices, and there's an on/off toggle in the navbar for anyone who prefers the system cursor.

## Deploying

### Option A — GitHub Pages (free, static)

This project is already configured for it.

1. Push this folder to a new GitHub repo.
2. Open `next.config.js` and set `repoName` to your repo's exact name (skip this if you're using a custom domain, or your repo is literally named `<your-username>.github.io`).
3. In your repo on GitHub: **Settings → Pages → Source → GitHub Actions**.
4. Push to `main`. The included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically — check the **Actions** tab for progress, then your site will be live at `https://<your-username>.github.io/<repo-name>/`.

A few things behave differently on GitHub Pages vs. a normal Node host, since it's pure static hosting:
- Images run "unoptimized" (no server-side resizing) — this is already handled in the config.
- The Future Dreams data still saves fine — it uses the browser's localStorage, not a server, so it works the same anywhere.
- There's no server, so anything requiring one (API routes, server actions) won't work — this project doesn't use any, so you're safe.

### Option B — Vercel (also free, zero config)

Push this folder to a GitHub repo and import it at [vercel.com](https://vercel.com) — no configuration needed, and you get server-side image optimization for free. You could also run `npm run build && npm run start` on any Node host.

Made with love, one polaroid at a time. 🌻
