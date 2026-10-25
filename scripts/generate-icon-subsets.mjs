/**
 * Scans src/ for every "set:name" Iconify reference and writes a small JSON
 * subset per icon set to src/data/icons/. The app registers these offline via
 * src/lib/offline-icons.ts so icons never depend on api.iconify.design.
 *
 * Re-run after adding new icons:  node scripts/generate-icon-subsets.mjs
 */
import { createRequire } from "node:module";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { globSync } from "node:fs";
import { getIcons } from "@iconify/utils";

const require = createRequire(import.meta.url);
const root = dirname(dirname(fileURLToPath(import.meta.url)));
const srcDir = join(root, "src");
const outDir = join(srcDir, "data", "icons");

// Collect every "prefix:name" string in the source tree
const found = new Map(); // prefix -> Set<names>
const files = globSync("**/*.{ts,tsx,json}", { cwd: srcDir, ignore: ["data/icons/**"] });
const refRe = /["']([a-z0-9-]+):([a-z0-9-]+)["']/g;

for (const rel of files) {
  const text = readFileSync(join(srcDir, rel), "utf8");
  for (const m of text.matchAll(refRe)) {
    const [, prefix, name] = m;
    try {
      require.resolve(`@iconify-json/${prefix}/icons.json`);
    } catch {
      continue; // not an installed icon set, ignore
    }
    if (!found.has(prefix)) found.set(prefix, new Set());
    found.get(prefix).add(name);
  }
}

mkdirSync(outDir, { recursive: true });
const missing = [];

for (const [prefix, names] of found) {
  const data = require.resolve(`@iconify-json/${prefix}/icons.json`);
  const subset = getIcons(JSON.parse(readFileSync(data, "utf8")), [...names]);
  if (!subset) {
    missing.push(...[...names].map(n => `${prefix}:${n} (whole set missing)`));
    continue;
  }
  writeFileSync(join(outDir, `${prefix}.json`), JSON.stringify(subset));

  // report names that don't exist in the source set
  for (const n of names) {
    if (!subset.icons?.[n] && !subset.aliases?.[n]) missing.push(`${prefix}:${n}`);
  }
  console.log(`${prefix}.json <- ${names.size} icons`);
}

if (missing.length) {
  console.warn("Names not found in their sets (skipped):");
  for (const m of missing) console.warn(`  - ${m}`);
}
console.log("Done.");
