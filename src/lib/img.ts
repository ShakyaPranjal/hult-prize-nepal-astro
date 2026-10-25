import type { ImageMetadata } from 'astro';

const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,png}', { eager: true });
const sdgIcons = import.meta.glob<{ default: ImageMetadata }>('../assets/sdg/*.png', { eager: true });

/** Look up a photo in src/assets/photos by file name without extension. */
export function photo(name: string): ImageMetadata {
  const hit = Object.entries(photos).find(([path]) => path.split('/').pop()!.replace(/\.(jpg|png)$/, '') === name);
  if (!hit) throw new Error(`Missing photo: ${name}`);
  return hit[1].default;
}

/** SDG icon 1–17 from the Hult Prize Nepal proposal. */
export function sdgIcon(n: number): ImageMetadata {
  const key = `../assets/sdg/sdg-${String(n).padStart(2, '0')}.png`;
  const hit = sdgIcons[key];
  if (!hit) throw new Error(`Missing SDG icon ${n}`);
  return hit.default;
}
