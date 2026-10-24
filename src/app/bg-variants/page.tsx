import Image from "next/image";
import Icon from "@/components/ui/Icon";
import FlickeringGrid from "@/components/ui/FlickeringGrid";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { Meteors } from "@/components/magicui/meteors";
import User from "@/data/user.json";

/*
 * Temporary design-preview route: monochrome background candidates for the
 * hero's top band, each shown with the hero heading over it. Safe to delete
 * (src/app/bg-variants/).
 */

function Band({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-44 w-full overflow-hidden rounded-xl border border-border">
        {children}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 [mask-image:linear-gradient(to_bottom,transparent,black_25%)]">
          <h2 className="text-3xl font-semibold tracking-tighter text-foreground">
            Hi, I&apos;m {User.name.split(" ")[0]} 👋
          </h2>
        </div>
      </div>
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
    </div>
  );
}

export default function BgVariants() {
  return (
    <main className="flex flex-col gap-8 py-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Hero background prototypes</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Monochrome candidates for the top band — all follow the current theme.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* A. Current flickering grid */}
        <Band label="A — Current (flickering dots)">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={2}
            gridGap={2}
            style={{
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </Band>

        {/* B. Static dot pattern */}
        <Band label="B — Dot pattern (static)">
          <DotPattern
            width={16}
            height={16}
            cx={1}
            cy={1}
            cr={1}
            className="text-foreground/25 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          />
        </Band>

        {/* C. Static grid lines */}
        <Band label="C — Grid pattern (static lines)">
          <GridPattern
            width={28}
            height={28}
            className="h-full w-full [mask-image:linear-gradient(to_bottom,black,transparent)]"
          />
        </Band>

        {/* D. Animated grid lines */}
        <Band label="D — Animated grid pattern">
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={0.5}
            className="h-full w-full [mask-image:linear-gradient(to_bottom,black,transparent)]"
          />
        </Band>

        {/* E. Meteors */}
        <Band label="E — Meteors">
          <div className="absolute inset-0 overflow-hidden">
            <Meteors number={12} className="!bg-zinc-400 before:!from-zinc-300 dark:!bg-zinc-500 dark:before:!from-zinc-400" />
          </div>
        </Band>

        {/* F. Meteors + dots combined */}
        <Band label="F — Dots + meteors (combo)">
          <DotPattern
            width={16}
            height={16}
            cx={1}
            cy={1}
            cr={1}
            className="text-foreground/15 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          />
          <div className="absolute inset-0 overflow-hidden">
            <Meteors number={8} angle={215} className="!bg-zinc-400 before:!from-zinc-300 dark:!bg-zinc-500 dark:before:!from-zinc-400" />
          </div>
        </Band>
      </div>

      {/* context strip: how it sits above the real hero */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Icon icon="lucide:info" className="size-4" />
        <span>Each band shows the real heading on top so you can judge contrast.</span>
      </div>
      <Image src="/img/me.jpg" alt="" width={1} height={1} className="hidden" />
    </main>
  );
}
