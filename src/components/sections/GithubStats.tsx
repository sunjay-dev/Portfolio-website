import User from "@/data/user.json";

const LEVEL_CLASS = ["bg-[#eeeeee]", "bg-[#62d764]", "bg-[#48bd4a]", "bg-[#158a17]", "bg-[#116e12]"];

const CELL = "size-[5px] sm:size-[10px]";
const GAP = "gap-[1px]";

type Contribution = { date: string; count: number; level: number };

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

export default async function GithubStats() {
  const userName = User.social.github.userName;
  let contributions: Contribution[] = [];

  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${userName}`, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Contributions API returned ${res.status}`);
    const data: { contributions: Contribution[] } = await res.json();
    contributions = data.contributions;
  } catch (err) {
    console.error("Failed to load GitHub contributions:", err);
  }

  const today = new Date().toISOString().slice(0, 10);
  const sorted = contributions.filter((d) => d.date <= today).sort((a, b) => a.date.localeCompare(b.date));
  const year = sorted.slice(-365);
  const weeks = buildWeeks(year);
  const labels = monthLabels(weeks);

  return (
    <div className="-mx-5 overflow-x-auto pb-1">
      <div className="mx-auto w-fit">
        <div className={`ml-0 flex ${GAP} sm:ml-6.5`}>
          {labels.map((month, i) => (
            <div key={i} className="w-1.25 flex-none text-[8px] leading-none sm:w-2.5 sm:text-[10px]">
              {month && <span className="whitespace-nowrap text-[#767676]">{month}</span>}
            </div>
          ))}
        </div>

        <div className="mt-1 flex gap-1.5">
          <div className={`hidden w-5 flex-none flex-col sm:flex ${GAP}`}>
            {["", "Mon", "", "Wed", "", "Fri", ""].map((day, r) => (
              <div key={r} className={`${CELL} text-[9px] leading-2.5 text-[#767676]`}>
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
  );
}
