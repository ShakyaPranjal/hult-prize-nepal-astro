# EF Hult Prize Nepal website (Astro)

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Edit content

Almost everything on the site lives in `src/data/site.ts`: season dates, stats, team, past leadership, champions, campus results, Campus Directors, workshops, gallery captions, FAQs and sources. Change it there and the page updates.

- Photos: `src/assets/photos/` (Astro converts them to WebP at build time). Reference them by file name in `site.ts`.
- SDG icons: `src/assets/sdg/sdg-01.png` … `sdg-17.png`, taken from the Hult Prize Nepal proposal.
- Logos and brand art: `public/brand/`.
- Sections: one component per section in `src/components/`, assembled in `src/pages/index.astro`.

## Announce Campus Directors

Add each person to `campusDirectors` in `src/data/site.ts`, for example
`{ name: 'Full Name', campus: 'College name', photo: 'file-name' }` (photo optional, saved in `src/assets/photos/`).
The section switches from "Announcing soon" to their flip cards automatically.
