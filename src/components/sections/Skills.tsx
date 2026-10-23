import { Icon } from "@iconify/react";
import { SKILLS } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills">
      <div className="flex flex-col gap-4">
        <SectionHeading>Skills</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill, i) => (
            <div
              key={i}
              className="flex h-8 w-fit items-center gap-2 rounded-xl border border-border bg-background px-3 ring-1 ring-border/30 transition-all duration-150 hover:bg-accent"
            >
              <Icon
                icon={skill.icon}
                className="size-4 shrink-0"
              />
              <span className="text-sm font-medium text-foreground">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
