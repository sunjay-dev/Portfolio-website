import ProjectCard from "@/components/cards/ProjectCard";
import User from "@/data/user.json";

type Repo = {
  name: string;
  html_url: string;
  description: string;
  topics: string[];
  fork: boolean;
  created_at: string;
  updated_at: string;
  full_name: string;
  homepage: string;
};

export default async function Projects() {
  const filtered: Repo[] = [];
  const userName = User.social.github.userName;
  const repoCount = User.social.github.reposFetchLimit || 20;

  try {
    const res = await fetch(
      `https://api.github.com/users/${userName}/repos?sort=created&direction=desc&per_page=${repoCount}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error("Failed to fetch repos");
    const repos: Repo[] = await res.json();

    // Only repos tagged "include" are showcased, up to 4.
    for (const repo of repos) {
      if (filtered.length >= 4) break;
      if (!repo.fork && repo.topics?.includes("include")) filtered.push(repo);
    }
  } catch (err) {
    console.error(err);
  }

  return (
    <section id="projects" className="flex flex-col gap-y-8">
      {/* Section header in the portfolio2 style: pill between gradient lines,
          big centered heading, centered description */}
      <div className="flex flex-col items-center justify-center gap-y-4">
        <div className="flex w-full items-center">
          <div className="h-px flex-1 bg-linear-to-r from-5% from-transparent via-95% via-border to-transparent" />
          <div className="z-10 rounded-xl border bg-primary px-4 py-1">
            <span className="text-sm font-medium text-background">My Projects</span>
          </div>
          <div className="h-px flex-1 bg-linear-to-l from-5% from-transparent via-95% via-border to-transparent" />
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Check out my latest work
        </h2>
        <p className="text-balance text-center text-muted-foreground lg:text-base/relaxed xl:text-lg/relaxed">
          I&apos;ve built a variety of projects, from AI applications to full-stack
          web platforms. Here are a few of my favorites.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
        {filtered.length > 0 ? (
          filtered.map((project, i) => <ProjectCard key={i} project={project} />)
        ) : (
          <p className="text-center text-muted-foreground text-sm">
            No projects to display yet. Make sure your GitHub repos have the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
              include
            </code>{" "}
            topic.
          </p>
        )}
      </div>
    </section>
  );
}
