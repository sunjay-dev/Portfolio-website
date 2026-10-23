/**
 * Registers the exact icons the site uses with @iconify/react's offline store,
 * so no icon is ever fetched from api.iconify.design at runtime (that API is
 * unreachable on some networks and leaves icons invisible).
 *
 * Client-side only: @iconify/react is a "use client" package, so icons render
 * after hydration. Import this from a client component that is always mounted
 * (ThemeInit). Regenerate the JSON subsets after adding new icons:
 *   node scripts/generate-icon-subsets.mjs
 */
import { addCollection } from "@iconify/react";
import lucide from "@/data/icons/lucide.json";
import fa6Brands from "@/data/icons/fa6-brands.json";
import logos from "@/data/icons/logos.json";
import simpleIcons from "@/data/icons/simple-icons.json";
import skillIcons from "@/data/icons/skill-icons.json";
import tabler from "@/data/icons/tabler.json";
import mdi from "@/data/icons/mdi.json";
import materialIconTheme from "@/data/icons/material-icon-theme.json";
import devicon from "@/data/icons/devicon.json";

if (typeof window !== "undefined") {
  addCollection(lucide);
  addCollection(fa6Brands);
  addCollection(logos);
  addCollection(simpleIcons);
  addCollection(skillIcons);
  addCollection(tabler);
  addCollection(mdi);
  addCollection(materialIconTheme);
  addCollection(devicon);
}
