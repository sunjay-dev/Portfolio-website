import Image from "next/image";
import Icon from "@/components/ui/Icon";
import LocalTime from "@/components/ui/LocalTime";
import User from "@/data/user.json";

/*
 * Temporary design-preview route: what to do with the empty side margins
 * around the content column on desktop. Each band simulates the real page
 * (mock hero centered, side treatments in the margins). Safe to delete
 * (src/app/side-variants/).
 */

function Band({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative left-1/2 w-screen -translate-x-1/2 border-y border-border">
        <div className="relative mx-auto flex h-96 max-w-2xl items-center px-6">
          {/* mock hero */}
          <div className="flex items-center gap-6">
            <Image
              src="/img/me.jpg"
              alt=""
              width={96}
              height={96}
              className="size-24 rounded-full border-2 border-border object-cover"
            />
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-semibold tracking-tighter text-foreground">
                Hi, I&apos;m Sunjay 👋
              </span>
              <span className="text-sm text-muted-foreground">
                Full Stack Developer · Building robust, scalable web solutions
              </span>
            </div>
          </div>
          {/* side treatment */}
          {children}
        </div>
      </div>
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
    </div>
  );
}

const socials = [
  { icon: "lucide:github", label: "GitHub" },
  { icon: "lucide:linkedin", label: "LinkedIn" },
  { icon: "lucide:mail", label: "Email" },
];

export default function SideVariants() {
  return (
    <main className="flex flex-col gap-10 py-8">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold tracking-tight">Side margin prototypes</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Treatments for the empty margins beside the content column (desktop
          only). Mock hero in the middle for scale.
        </p>
      </div>

      {/* A. Social rail */}
      <Band label="A — Vertical social rail (left)">
        <div className="absolute left-8 top-1/2 flex -translate-y-1/2 flex-col items-center gap-4">
          {socials.map((s) => (
            <Icon
              key={s.label}
              icon={s.icon}
              aria-label={s.label}
              className="size-4 text-muted-foreground transition-colors hover:text-foreground"
            />
          ))}
          <span className="h-20 w-px bg-border" />
        </div>
      </Band>

      {/* B. Section indicator */}
      <Band label="B — Vertical section indicator (right)">
        <div className="absolute right-8 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3">
          <span className="h-12 w-px bg-border" />
          <span className="font-mono text-xs tracking-widest text-muted-foreground [writing-mode:vertical-rl]">
            01 — INTRO
          </span>
          <span className="h-12 w-px bg-foreground/40" />
        </div>
      </Band>

      {/* C. Ghost watermark */}
      <Band label="C — Ghost watermark (right)">
        <span
          aria-hidden
          className="absolute right-10 top-1/2 -translate-y-1/2 font-mono text-6xl font-bold uppercase tracking-widest text-transparent [-webkit-text-stroke:1px_var(--border)] select-none [writing-mode:vertical-rl]"
        >
          Sunjay.dev
        </span>
      </Band>

      {/* D. Availability card */}
      <Band label="D — Availability mini-card (right)">
        <div className="absolute right-8 top-1/2 w-44 -translate-y-1/2 rounded-xl border bg-card p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-medium text-foreground">
              Available for work
            </span>
          </div>
          <p className="mt-2 font-mono text-[11px] text-muted-foreground">
            Local — <LocalTime timeZone="Asia/Karachi" />
          </p>
          <p className="mt-1 text-[11px] text-muted-foreground">
            {User.location}
          </p>
        </div>
      </Band>

      {/* E. Scroll progress track */}
      <Band label="E — Scroll progress track (right)">
        <div className="absolute right-8 top-1/2 flex -translate-y-1/2 flex-col items-center gap-2">
          <span className="font-mono text-[10px] text-muted-foreground">12%</span>
          <span className="relative h-32 w-px bg-border">
            <span className="absolute left-0 top-0 h-2/5 w-px bg-foreground" />
            <span className="absolute -left-[3px] top-2/5 size-[7px] rounded-full border border-border bg-background" />
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">100</span>
        </div>
      </Band>

      {/* F. Corner ticks */}
      <Band label="F — Corner ticks (minimal)">
        <span aria-hidden className="absolute left-6 top-6 size-3 border-l border-t border-border" />
        <span aria-hidden className="absolute right-6 top-6 size-3 border-r border-t border-border" />
        <span aria-hidden className="absolute bottom-6 left-6 size-3 border-b border-l border-border" />
        <span aria-hidden className="absolute bottom-6 right-6 size-3 border-b border-r border-border" />
      </Band>
    </main>
  );
}
