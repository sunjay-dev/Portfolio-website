"use client";

import { useId, type ComponentProps } from "react";
import { addCollection, Icon as IconifyIcon } from "@iconify/react/offline";
import devicon from "@/data/icons/devicon.json";
import fa6Brands from "@/data/icons/fa6-brands.json";
import logos from "@/data/icons/logos.json";
import lucide from "@/data/icons/lucide.json";
import materialIconTheme from "@/data/icons/material-icon-theme.json";
import mdi from "@/data/icons/mdi.json";
import simpleIcons from "@/data/icons/simple-icons.json";
import skillIcons from "@/data/icons/skill-icons.json";
import tabler from "@/data/icons/tabler.json";
import thesvg from "@/data/icons/thesvg.json";

const registered = { done: false };

function registerIcons() {
  if (registered.done) return;
  try {
    addCollection(devicon);
    addCollection(fa6Brands);
    addCollection(logos);
    addCollection(lucide);
    addCollection(materialIconTheme);
    addCollection(mdi);
    addCollection(simpleIcons);
    addCollection(skillIcons);
    addCollection(tabler);
    addCollection(thesvg);
    registered.done = true;
  } catch {
    // error
  }
}

registerIcons();

export default function Icon({ id, ...props }: ComponentProps<typeof IconifyIcon>) {
  const autoId = useId();
  return <IconifyIcon id={id ?? autoId} {...props} />;
}
