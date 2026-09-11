"use client";

import Icon from "./Icon";
import User from "@/data/user.json";

export default function ResumeDownloadButton() {
  const filename = `${User.name.split(" ").join("_")}_Resume.pdf`;

  async function handleDownload() {
    const res = await fetch("/pdf/resume.pdf");
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <button
      onClick={handleDownload}
      className="max-w-3xl py-3 px-6 flex items-center gap-2 box-border font-medium border-[#3d3d3d] border-2 rounded-md hover:bg-[#3d3d3d] hover:text-white active:text-white active:bg-[#3d3d3d] transition-transform dark:border-white dark:hover:bg-white dark:hover:text-[#3d3d3d] dark:active:bg-white dark:active:text-[#3d3d3d] dark:text-white"
    >
      <Icon icon="bx:file" className="w-5.5 h-5.5 dark:opacity-90 dark:hover:opacity-70" /> Resume
    </button>
  );
}
