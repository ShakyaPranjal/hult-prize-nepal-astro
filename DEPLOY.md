# Putting the Hult Prize Nepal site online

Two ways to do it. Pick one.

| | Method 1: Netlify Drop | Method 2: GitHub + auto-deploy |
|---|---|---|
| Best for | Getting online today | Keeping the site updated all season |
| Accounts | Netlify | GitHub + Cloudflare (or Vercel) |
| Updating | Rebuild and drag the folder again | Edit, then `git push` — it goes live by itself |
| Cost | Free | Free |
| Time | ~10 minutes | ~30 minutes the first time |

Both give you a free web address (like `hultprizenepal.netlify.app` or `hultprizenepal.pages.dev`), HTTPS, and a global CDN, so the site loads fast anywhere. You can add your own domain later (Part 3).

---

## Part 0: Before you start (both methods)

1. **Get the team's go-ahead.** The site uses EF Hult Prize branding and names the national team, so confirm with Lakki and, if needed, the Hult Prize regional manager before it goes public.
2. **Check the content once more.** Everything lives in `src/data/site.ts`.
3. **Open a terminal in the project folder.** In File Explorer, open `Documents\Claude Code\hult-prize-nepal-astro`, click the address bar, type `cmd` and press Enter.
4. **Check your tools.** Run:
   ```
   node --version
   git --version
   ```
   You need Node 22 or newer (you have v26) and any recent Git (you have 2.55). If either is missing, install Node from https://nodejs.org (LTS) and Git from https://git-scm.com.
5. **Install and build.** Run:
   ```
   npm install
   npm run build
   ```
   This creates a `dist` folder. That folder *is* the website.
6. **Preview what will go live.** Run `npm run preview` and open http://localhost:4321. Press `Ctrl + C` in the terminal to stop it.

---

## Method 1: Netlify Drop (no Git, fastest)

### First time

1. Go to **https://app.netlify.com/signup** and sign up (email or Google). It's free. **Log in before you upload**, otherwise the site is deleted after an hour unless you claim it.
2. Go to **https://app.netlify.com/drop**.
3. In File Explorer, open `hult-prize-nepal-astro`. Drag the **`dist` folder** (not the whole project folder) onto the Netlify Drop page.
4. Wait about 30 seconds. Netlify shows a link like `https://random-words-12345.netlify.app`. Open it and check the site.
5. Give it a proper name: **Site configuration → Site details → Change site name**. Type something like `hultprizenepal` and save. Your address becomes `https://hultprizenepal.netlify.app` (if the name is free).

### Updating later

1. Change `src/data/site.ts` (or photos), then run `npm run build` again.
2. In Netlify, open your site → **Deploys** tab.
3. Drag the new **`dist`** folder onto the box that says *"Drag and drop your site output folder here"*.
4. It's live in under a minute. Older versions stay in the Deploys list, so you can roll back with **Publish deploy**.

---

## Method 2: GitHub + Cloudflare Pages (auto-deploy)

Your code lives on GitHub. Every time you push a change, Cloudflare rebuilds and publishes the site automatically. (Vercel works the same way; see 2E.)

### 2A. Create a GitHub account and repository

1. Sign up at **https://github.com/signup** (free).
2. Go to **https://github.com/new**.
   - Repository name: `hult-prize-nepal-site`
   - Choose **Private** (recommended) or Public.
   - **Do not** tick "Add a README", ".gitignore" or "license". The project already has them.
3. Click **Create repository** and keep the page open. You'll need its URL, e.g. `https://github.com/YOUR-USERNAME/hult-prize-nepal-site.git`.

### 2B. Upload the project to GitHub (one time)

In the terminal, inside `hult-prize-nepal-astro`, run these one by one:

```
git init
git add .
git commit -m "First version of the Hult Prize Nepal site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/hult-prize-nepal-site.git
git push -u origin main
```

- If Git asks who you are, run these first, then the `git commit` line again:
  ```
  git config --global user.name "Pranjal Man Shakya"
  git config --global user.email "pranjal.m.shakya@gmail.com"
  ```
- On `git push`, a browser window opens to sign in to GitHub. Approve it.
- `node_modules` and `dist` are **not** uploaded (the `.gitignore` file skips them). That's correct: the host builds the site itself.

Refresh the GitHub page. You should see `src`, `public`, `package.json` and the rest.

### 2C. Connect Cloudflare Pages

1. Sign up at **https://dash.cloudflare.com/sign-up** (free).
2. In the dashboard, open **Workers & Pages** → **Create** → the **Pages** tab → **Connect to Git** (sometimes labelled "Import an existing Git repository").
3. Click **Connect GitHub** and allow Cloudflare to see the `hult-prize-nepal-site` repository (you can allow just that one).
4. Pick the repository, then set the build settings:
   - **Project name:** `hultprizenepal` (this becomes `hultprizenepal.pages.dev`)
   - **Production branch:** `main`
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - Under **Environment variables**, add `NODE_VERSION` = `22`. (The project also has a `.nvmrc` file that asks for Node 22.)
5. Click **Save and Deploy**. The first build takes 1–3 minutes. When it finishes, open `https://hultprizenepal.pages.dev`.

If the build fails, open the build log. The most common cause is the Node version; make sure `NODE_VERSION` is `22`.

### 2D. Updating later (the everyday routine)

1. Edit content in `src/data/site.ts` (for example, add Campus Directors).
2. Check it locally: `npm run dev`, then open http://localhost:4321.
3. Publish:
   ```
   git add .
   git commit -m "Add Campus Directors"
   git push
   ```
4. Cloudflare rebuilds automatically. The new version is live in about a minute. Each push also gets its own preview link in the Cloudflare dashboard.

Teammates can help too: add them on GitHub under **Settings → Collaborators**. They can even edit `site.ts` directly on github.com with the pencil icon and click **Commit changes**; that triggers a deploy as well.

### 2E. Prefer Vercel instead of Cloudflare?

Use the same GitHub repository (steps 2A–2B), then:

1. Sign up at **https://vercel.com/signup** with **Continue with GitHub**.
2. **Add New… → Project** → **Import** `hult-prize-nepal-site`.
3. Vercel detects **Astro** automatically (build `npm run build`, output `dist`). Click **Deploy**.
4. Your site is at `https://hult-prize-nepal-site.vercel.app`. Rename it under **Settings → General → Project Name**.
5. Updates work the same way: `git push` and it redeploys.

Use one host, not both, so there's a single official address.

---

## Part 3: Your own domain (optional, both methods)

A domain like `hultprizenepal.org` looks more official than `.netlify.app` or `.pages.dev`.

1. **Get a domain.**
   - `.org` / `.com`: buy from Cloudflare Registrar (at cost, about US$10/year), Namecheap or similar.
   - `.org.np` / `.com.np`: registered through register.com.np (Mercantile). These need supporting documents for the organization. Check their current requirements.
2. **Connect it.**
   - **Netlify:** Site → **Domain management → Add a domain** → follow the DNS instructions.
   - **Cloudflare Pages:** Project → **Custom domains → Set up a custom domain**. If the domain is on Cloudflare, it's connected in one click.
   - **Vercel:** Project → **Settings → Domains → Add**, then copy the DNS records it shows to your domain provider.
3. HTTPS (the padlock) is set up automatically within minutes to a few hours.
4. Optional: once the domain works, put it in `astro.config.mjs` so links and previews use it:
   ```js
   export default defineConfig({ site: 'https://hultprizenepal.org' });
   ```
   Then rebuild and redeploy.

---

## Quick checklist after going live

- [ ] Open the live site on a phone and a laptop.
- [ ] Click **Register** and **hultprize.org**: both open the official site.
- [ ] Email links open the right addresses (Lakki and Pranjal).
- [ ] The **Privacy & terms** page loads at `/legal`.
- [ ] Share the link with the team and update the Instagram bio.

## If something goes wrong

| Problem | Fix |
|---|---|
| Netlify shows "Page not found" | You dragged the project folder. Drag the **`dist`** folder instead. |
| Old version still showing | Hard refresh with `Ctrl + Shift + R`, or wait a minute for the CDN. |
| Cloudflare/Vercel build fails | Check the log. Set Node to 22. Run `npm run build` locally to see the same error. |
| `git push` asks for a password | Use the browser sign-in window, not your GitHub password. |
| Photos missing after an update | New photos must be in `src/assets/photos/` and referenced by file name in `site.ts`. |
