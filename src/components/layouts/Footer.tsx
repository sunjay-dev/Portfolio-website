import { Icon } from "@iconify/react";
import User from "@/data/user.json";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-1 pt-2 text-center text-xs text-muted-foreground">
      <p>
        © {new Date().getFullYear()} {User.name}
      </p>
      <p className="inline-flex items-center gap-1">
        Built with <Icon icon="fa6-brands:react" className="size-3" /> and Next.js
      </p>
    </footer>
  );
}
