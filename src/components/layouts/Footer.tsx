import Link from "next/link";
import User from "@/data/user.json";

// Simple one-line credit footer, in the "portfolio" inspiration's style:
// "Designed and Developed by <name-chip>" — the name is a small chip link.
export default function Footer() {
  return (
    <footer className="flex items-center justify-center pt-2 text-center text-sm text-muted-foreground">
      Designed and Developed by
      <Link
        className="ml-1.5 rounded-xs bg-muted px-[6px] py-[1px] font-normal text-foreground"
        href={User.social.github.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {User.name}
      </Link>
    </footer>
  );
}
