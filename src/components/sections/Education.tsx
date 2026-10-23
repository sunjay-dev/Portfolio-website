import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import SectionHeading from "@/components/ui/SectionHeading";
import data from "@/data/education.json";

/*
 * portfolio2's education section: rows with the school as the bold title and
 * the degree as the muted subtitle, logo circle on the left, start - end dates
 * on the right, whole row linking out.
 */
export default function Education() {
  const items = data.education;

  return (
    <section id="education">
      <div className="flex flex-col gap-y-6">
        <SectionHeading>Education</SectionHeading>

        <div className="flex flex-col gap-8">
          {items.map((item) => (
            <Link
              key={item.school}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-x-3"
            >
              <div className="flex min-w-0 flex-1 items-center gap-x-3">
                {item.logoUrl ? (
                  <Image
                    src={item.logoUrl}
                    alt={item.school}
                    width={44}
                    height={44}
                    unoptimized
                    className="size-9 flex-none rounded-full object-contain md:size-11"
                  />
                ) : (
                  <div className="size-9 flex-none rounded-full bg-muted md:size-11" />
                )}
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <div className="flex items-center gap-2 font-semibold leading-none">
                    {item.school}
                    <Icon
                      icon="lucide:arrow-up-right"
                      className="size-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">{item.degree}</div>
                </div>
              </div>
              <div className="flex flex-none items-center gap-1 text-right text-xs tabular-nums text-muted-foreground">
                <span>
                  {item.start} - {item.end}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
