"use client";

import { Icon } from "@iconify/react";
import User from "@/data/user.json";

export default function ResumeDownloadButton() {
  const filename = `${User.name.split(" ").join("_")}_Resume.pdf`;

  const handleDownload = async () => {
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
  };

  return (
    <button
      id="resume-download-btn"
      onClick={handleDownload}
      className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-accent"
    >
      <Icon icon="lucide:file-text" className="h-3.5 w-3.5" />
      Resume
    </button>
  );
}
