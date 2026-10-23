"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import SectionHeading from "@/components/ui/SectionHeading";
import achievements from "@/data/achivements.json";

type AchievementItem = {
  id: number;
  time: string;
  name: string;
  icon: string;
  logo?: string;
  place: string;
  url: string;
  shortDesc: string;
  KeyAchievement: string[];
  hidden?: boolean;
};

export default function Experience() {
  const [openId, setOpenId] = useState<number | null>(null);

  // Entries with "hidden": true stay in the data file but are not rendered
  const items = (achievements as AchievementItem[]).filter(
    (item) => item.hidden !== true
  );

  return (
    <section id="experience">
      <div className="flex flex-col gap-4">
        <SectionHeading>Experience</SectionHeading>

        <div className="flex flex-col">
          {items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="border-b border-border last:border-b-0">
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="group flex w-full cursor-pointer items-center justify-between gap-x-3 py-3 text-left"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-x-3">
                    {item.logo ? (
                      // White brand mark: black-on-light circle in light mode
                      // (CSS-inverted), white-on-dark in dark mode
                      <div className="flex size-9 flex-none items-center justify-center rounded-full bg-muted dark:bg-neutral-900 md:size-11">
                        <Image
                          src={item.logo}
                          alt={item.name}
                          width={40}
                          height={40}
                          unoptimized
                          className="size-5 object-contain invert dark:invert-0 md:size-6"
                        />
                      </div>
                    ) : (
                      <div className="flex size-9 flex-none items-center justify-center rounded-full bg-muted md:size-11">
                        <Icon icon={item.icon} className="size-4 text-muted-foreground" />
                      </div>
                    )}
                    <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <div className="flex items-center gap-1.5 font-semibold leading-none">
                        {item.name}
                        <Icon
                          icon="lucide:chevron-down"
                          className={`size-3.5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      <div className="truncate text-sm text-muted-foreground">{item.place}</div>
                    </div>
                  </div>
                  <div className="flex flex-none items-center gap-1 text-right text-xs tabular-nums text-muted-foreground">
                    <span className="whitespace-nowrap">{item.time}</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="ml-12 animate-fade-in space-y-3 pb-4 md:ml-14">
                    <p
                      className="text-sm leading-relaxed text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: item.shortDesc }}
                    />
                    <ul className="list-disc space-y-1.5 pl-4 text-xs text-muted-foreground sm:text-sm">
                      {item.KeyAchievement.map((point, i) => (
                        <li key={i} className="leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-1 text-sm font-medium text-foreground hover:underline"
                    >
                      {item.place}
                      <Icon icon="lucide:arrow-up-right" className="size-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
