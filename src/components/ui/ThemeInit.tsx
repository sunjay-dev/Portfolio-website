"use client";

import { useEffect } from "react";

/**
 * Initialises the theme on page load based on system preference or
 * a previously saved value in localStorage.  Runs only on the client.
 */
export default function ThemeInit() {
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = saved ?? (prefersDark ? "dark" : "light");

      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch {
      // SSR / private-browsing: ignore
    }
  }, []);

  return null;
}
