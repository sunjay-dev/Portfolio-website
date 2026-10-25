import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import User from "@/data/user.json";
import ResumeDownloadButton from "@/components/ui/ResumeDownloadButton";
import LocalTime from "@/components/ui/LocalTime";

function LocationPill({ className }: { className?: string }) {
  return (
    <div className={`w-fit max-w-full items-center gap-1.5 rounded-full bg-muted/60 px-2.5 py-1.5 text-sm sm:gap-2 sm:px-3 ${className ?? ""}`}>
      <span className="size-2 shrink-0 rounded-full bg-green-500" />
      <span className="whitespace-nowrap font-medium text-foreground">{User.location}</span>
      <span className="text-muted-foreground">·</span>
      <Icon icon="lucide:sunrise" className="hidden size-4 shrink-0 text-muted-foreground sm:block" aria-hidden />
      <span className="whitespace-nowrap text-muted-foreground">
        <LocalTime timeZone="Asia/Karachi" />
      </span>
    </div>
  );
}

export default function Hero() {
  const firstName = User.name.split(" ")[0];

  return (
    <section id="hero" className="pt-2 sm:pt-6">
      <div className="flex flex-row items-start justify-between gap-4">
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <div className="relative order-1 mx-auto size-40 overflow-hidden rounded-full border-2 border-border shadow-md sm:hidden">
            <Image
              src="/img/me.jpg"
              alt={User.name}
              fill
              priority
              loading="eager"
              quality={100}
              className="object-cover object-[center_25%]"
              sizes="160px"
            />
          </div>

          <h1 className="order-2 text-3xl font-semibold tracking-tighter sm:order-0 sm:text-4xl lg:text-5xl">Hi, I&apos;m {firstName} 👋</h1>

          <LocationPill className="order-3 flex sm:order-0 sm:inline-flex" />

          <p className="order-4 max-w-xs text-muted-foreground sm:order-0 sm:max-w-sm">
            {User.title} · {User.intro}
          </p>

          <div className="order-5 mt-3 flex flex-wrap gap-3 sm:order-0">
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
          <div className="order-6 mt-1 flex items-center gap-4 sm:order-0">
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

        {/* Avatar: desktop only*/}
        <div className="relative hidden size-36 flex-none overflow-hidden rounded-full border-2 border-border shadow-md md:size-40 sm:block">
          <Image
            src="/img/me.jpg"
            alt={User.name}
            fill
            priority
            loading="eager"
            quality={100}
            className="object-cover object-[center_33%]"
            sizes="(max-width: 640px) 6rem, (max-width: 768px) 9rem, 10rem"
          />
        </div>
      </div>
    </section>
  );
}
