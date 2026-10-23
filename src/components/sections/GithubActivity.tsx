import SectionHeading from "@/components/ui/SectionHeading";
import User from "@/data/user.json";

/*
 * Matches the Github Activities chart of the "portfolio" inspiration (a
 * ghchart.rshah.org/158a17/ image): monochrome #158a17 ramp (white-mixed
 * shades), 11px square cells with 1px gaps, labels included. Only past days
 * are drawn. Rendered from data since ghchart.rshah.org is unreachable on
 * some networks.
 */
const LEVEL_CLASS = [
  "bg-[#eeeeee]",
  "bg-[#c4e1c5]",
  "bg-[#8ac48b]",
  "bg-[#4fa751]",
  "bg-[#158a17]",
];

const CELL = "size-[5px] sm:size-[11px]";
const GAP = "gap-[1px]";

type Contribution = { date: string; count: number; level: number };

// One column per week, rows Sun..Sat — same alignment as GitHub's graph
function buildWeeks(contributions: Contribution[]): Contribution[][] {
  const weeks: Contribution[][] = [];
  let week: Contribution[] = [];

  for (const day of contributions) {
    const weekday = new Date(`${day.date}T00:00:00`).getDay();
    if (weekday === 0 && week.length) {
      weeks.push(week);
      week = [];
    }
    week.push(day);
  }
  if (week.length) weeks.push(week);
  return weeks;
}

// Short month name at the first full week of each month, null elsewhere
function monthLabels(weeks: Contribution[][]): (string | null)[] {
  const labels: (string | null)[] = weeks.map(() => null);
  let lastMonth = -1;

  weeks.forEach((week, i) => {
    const first = new Date(`${week[0].date}T00:00:00`);
    if (first.getMonth() !== lastMonth) {
      lastMonth = first.getMonth();
      if (i > 0 && i < weeks.length - 1 && week.length === 7) {
        labels[i] = first.toLocaleString("en-US", { month: "short" });
      }
    }
  });
  return labels;
}

export default async function GithubActivity() {
  const userName = User.social.github.userName;
  let contributions: Contribution[] = [];

  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${userName}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error(`Contributions API returned ${res.status}`);
    const data: { contributions: Contribution[] } = await res.json();
    contributions = data.contributions;
  } catch (err) {
    console.error("Failed to load GitHub contributions:", err);
  }

  // The API returns full calendar years including future dates (count 0) —
  // drop anything after today, then keep the trailing 365 days like GitHub does
  const today = new Date().toISOString().slice(0, 10);
  const sorted = contributions
    .filter((d) => d.date <= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  const year = sorted.slice(-365);
  const weeks = buildWeeks(year);
  const labels = monthLabels(weeks);

  return (
    <section id="github-activity">
      <div className="flex flex-col items-center gap-5">
        <SectionHeading>GitHub Activity</SectionHeading>

        {year.length > 0 ? (
          // -mx-5 lets the 661px grid fill the column like portfolio's image
          <div className="-mx-5 overflow-x-auto pb-1">
            <div className="w-fit">
              {/* Month labels — text size must sit on the div, its line-box
                  strut otherwise pushes the text into the grid */}
              <div className={`ml-0 flex ${GAP} sm:ml-[26px]`}>
                {labels.map((month, i) => (
                  <div
                    key={i}
                    className="w-[5px] flex-none text-[8px] leading-none sm:w-[11px] sm:text-[10px]"
                  >
                    {month && (
                      <span className="whitespace-nowrap text-muted-foreground">
                        {month}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-1 flex gap-[6px]">
                {/* Weekday labels — hidden on phones like GitHub's mobile view */}
                <div className={`hidden w-5 flex-none flex-col sm:flex ${GAP}`}>
                  {["", "Mon", "", "Wed", "", "Fri", ""].map((day, r) => (
                    <div
                      key={r}
                      className={`${CELL} text-[9px] leading-[11px] text-muted-foreground`}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Contribution cells */}
                <div className={`flex ${GAP}`}>
                  {weeks.map((week, w) => (
                    <div key={w} className={`flex flex-col ${GAP}`}>
                      {week.map((day) => (
                        <div
                          key={day.date}
                          title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                          className={`${CELL} ${LEVEL_CLASS[day.level] ?? LEVEL_CLASS[0]}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            Couldn&apos;t load the contribution chart right now.
          </p>
        )}
      </div>
    </section>
  );
}
