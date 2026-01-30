"use client";

import Icon from "./Icon";

export default function Toggle() {
  return (
    <button
      aria-label="Toggle bright and dark mode"
      onClick={() => document.documentElement.classList.toggle("dark")}
      className="fixed bottom-6 cursor-pointer right-6 z-50 bg-[#3d3d3d] text-white rounded-full p-2 dark:p-3 select-none"
    >
      <Icon icon="wi:day-sunny" className="dark:hidden w-7 h-7" />
      <Icon icon="ri:moon-line" className="hidden dark:block w-5 h-5" />
    </button>
  );
}
