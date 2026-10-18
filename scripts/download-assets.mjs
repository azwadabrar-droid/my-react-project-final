// Replaces the stand-in icons/photos in public/assets with the EXACT originals from Figma.
// Figma's links are temporary (valid ~7 days after they were generated, i.e. until about 24 Oct 2026),
// so run this once, then keep public/assets in your repo – the files are then yours permanently.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assets = JSON.parse(readFileSync(join(root, "assets-figma.json"), "utf8"));
const out = join(root, "public", "assets");
mkdirSync(out, { recursive: true });

let ok = 0;
const failed = [];
await Promise.all(
  Object.entries(assets).map(async ([name, url]) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      writeFileSync(join(out, name), Buffer.from(await res.arrayBuffer()));
      ok++;
    } catch (e) {
      failed.push(`${name} (${e.message})`);
    }
  })
);
console.log(`Downloaded ${ok}/${Object.keys(assets).length} exact Figma assets into public/assets`);
if (failed.length) {
  console.warn("Could not download (links expired?):\n  " + failed.join("\n  "));
  console.warn("The built-in stand-ins stay in place for these. See MISSING_ASSETS.md.");
}
