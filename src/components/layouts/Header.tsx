"use client";
import { useState } from "react";
import Icon from "../ui/Icon";
import User from "@/data/user.json";

export default function Header() {
  const [menuStatus, setmenuStatus] = useState(false);

  const openMenu = () => {
    setmenuStatus(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeMenu = () => {
    setmenuStatus(false);
    document.body.classList.remove("overflow-hidden");
  };

  const sections = ["home", "about", "skills", "projects", "achievements", "contact"];

  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-2 dark:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 select-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" x2="20" y1="19" y2="19"></line>
        </svg>
        <h1 className="font-bold opacity-80 dark:opacity-100 text-xl dark:text-white">{User.name}</h1>
      </div>

      <div className="*:cursor-pointer items-center space-x-8 pr-4 font-medium text-gray-600 hidden md:flex">
        {sections.map((section, index) => (
          <a key={index} href={`#${section}`} className="hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-200 capitalize">
            {section}
          </a>
        ))}
      </div>
      <button aria-label="Open menu" onClick={() => openMenu()} className="md:hidden dark:text-white">
        <Icon icon="charm:menu-hamburger" className="h-6 w-6" />
      </button>

      <div
        id="menu"
        className={`fixed inset-0 text-[#3d3d3d] bg-[#f8f8f8] dark:bg-[#3d3d3d] dark:text-white flex-col items-center justify-center space-y-6 text-xl z-50 ${menuStatus ? "flex" : "hidden"}`}
      >
        <button onClick={() => closeMenu()} aria-label="Close menu" id="close-btn" className="absolute top-6 right-5">
          <Icon icon="charm:cross" className="w-8 h-8" />
        </button>
        {sections.map((item, index) => (
          <a key={index} href={`#${item}`} onClick={closeMenu} className="active:underline font-medium capitalize">
            {item}
          </a>
        ))}
      </div>
    </header>
  );
}
