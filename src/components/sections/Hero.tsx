import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import User from "@/data/user.json";
import ResumeDownloadButton from "@/components/ui/ResumeDownloadButton";
import LocalTime from "@/components/ui/LocalTime";

export default function Hero() {
  const firstName = User.name.split(" ")[0];

  return (
    <section id="hero" className="pt-2 sm:pt-6">
      <div className="flex flex-row items-start justify-between gap-4">
        {/* Text */}
        <div className="flex min-w-0 flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
            Hi, I&apos;m {firstName} 👋
          </h1>

          {/* Location + availability pill */}
          <div className="inline-flex w-full max-w-full items-center justify-center gap-1.5 rounded-full bg-muted/60 px-2.5 py-1.5 text-sm sm:w-fit sm:justify-start sm:gap-2 sm:px-3">
            <span className="size-2 shrink-0 rounded-full bg-green-500" />
            <span className="font-medium text-foreground">{User.location}</span>
            <span className="text-muted-foreground">·</span>
            <Icon
              icon="lucide:sunrise"
              className="hidden size-4 shrink-0 text-muted-foreground sm:block"
              aria-hidden
            />
            <span className="whitespace-nowrap text-muted-foreground">
              <LocalTime timeZone="Asia/Karachi" />
            </span>
          </div>

          <p className="max-w-xs text-muted-foreground sm:max-w-sm">
            {User.title} · {User.intro}
          </p>

          {/* CTA buttons */}
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="#connect"
              id="hero-contact-btn"
              className="inline-flex h-9 items-center gap-2 rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              <Icon icon="lucide:mail" className="h-3.5 w-3.5" />
              Get in Touch
            </Link>
            <ResumeDownloadButton />
          </div>

          {/* Social links */}
          <div className="mt-1 flex items-center gap-4">
            <a
              href={User.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon icon="lucide:github" className="h-5 w-5" />
            </a>
            <a
              href={User.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon icon="lucide:linkedin" className="h-5 w-5" />
            </a>
            <a
              href={User.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode profile"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon icon="simple-icons:leetcode" className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="relative size-20 flex-none overflow-hidden rounded-full border-2 border-border shadow-md sm:size-28 md:size-32">
          <Image
            src="/img/me.webp"
            alt={User.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 640px) 5rem, (max-width: 768px) 7rem, 8rem"
          />
        </div>
      </div>
    </section>
  );
}
