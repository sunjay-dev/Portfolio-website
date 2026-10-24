import { Marquee } from "@/components/magicui/marquee";
import Icon from "@/components/ui/Icon";

/*
 * Temporary design-preview route: UNIQUE concepts for the projects section
 * header — new copy, new structures. Safe to delete
 * (src/app/header-variants/).
 */

function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative flex min-h-52 w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-border px-6 py-10">
        {children}
      </div>
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
    </div>
  );
}

const marqueeWords = [
  "Full-Stack",
  "AI",
  "Real-Time",
  "Open Source",
  "TypeScript",
  "Production",
];

export default function HeaderVariants() {
  return (
    <main className="flex flex-col gap-8 py-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Projects header concepts</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Six unique directions — different copy, different structure.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* 1. Terminal */}
        <Frame label="1 — Terminal">
          <div className="w-full font-mono">
            <p className="text-lg text-foreground">
              <span className="text-green-600 dark:text-green-400">$</span> ls
              ~/projects
              <span className="ml-2 inline-block h-4 w-2 animate-pulse bg-foreground align-middle" />
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {"// 4 repos · from AI SaaS to cron schedulers"}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {"// run "}
              <span className="text-foreground">open --all</span> below
            </p>
          </div>
        </Frame>

        {/* 2. Editorial index */}
        <Frame label="2 — Editorial index">
          <div className="w-full">
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Index
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                2023 — 2026
              </span>
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Selected Work
              </h2>
              <a
                href="#"
                className="group inline-flex shrink-0 items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                View all
                <Icon
                  icon="lucide:arrow-up-right"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </Frame>

        {/* 3. Ghost number */}
        <Frame label="3 — Ghost number">
          <div className="relative w-full py-2">
            <span
              aria-hidden
              className="absolute -top-4 right-0 text-[110px] leading-none font-bold text-transparent [-webkit-text-stroke:1.5px_var(--border)] select-none"
            >
              04
            </span>
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tighter">
                Things I&apos;ve built.
              </h2>
              <p className="mt-2 max-w-[75%] text-sm text-muted-foreground">
                From AI chat apps to cron schedulers — each one live in
                production.
              </p>
            </div>
          </div>
        </Frame>

        {/* 4. Underlined word */}
        <Frame label="4 — Underlined word">
          <span className="mb-1 rounded-xl border bg-primary px-4 py-1 font-medium text-background text-sm">
            My Projects
          </span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Check out my latest{" "}
            <span className="relative inline-block">
              work
              <svg
                aria-hidden
                viewBox="0 0 120 10"
                fill="none"
                preserveAspectRatio="none"
                className="absolute -bottom-1.5 left-0 h-2.5 w-full text-foreground/70"
              >
                <path
                  d="M2 6 C 20 2, 45 9, 70 5 S 110 3, 118 6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-balance text-center text-muted-foreground">
            From AI chat to cron scheduling — live and in production.
          </p>
        </Frame>

        {/* 5. Split header */}
        <Frame label="5 — Split header + meta">
          <div className="w-full">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Latest Work
              </h2>
              <a
                href="#"
                className="group inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon icon="lucide:github" className="size-3.5" />
                GitHub
              </a>
            </div>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              04 projects · 2023 — 2026 · all live
            </p>
          </div>
        </Frame>

        {/* 6. Marquee eyebrow */}
        <Frame label="6 — Marquee eyebrow">
          <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <Marquee pauseOnHover className="py-0.5 [--duration:14s]">
              {marqueeWords.map((word) => (
                <span
                  key={word}
                  className="mx-3 text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase"
                >
                  {word} <span className="text-foreground/30">✦</span>
                </span>
              ))}
            </Marquee>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Built, shipped, maintained.
          </h2>
          <p className="text-balance text-center text-muted-foreground">
            Four projects that stayed live longer than they took to build.
          </p>
        </Frame>
      </div>
    </main>
  );
}
