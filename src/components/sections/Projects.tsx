import ProjectCard from "@/components/cards/ProjectCard";
import User from "@/data/user.json";
export default async function Projects() {
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

  const filtered: Repo[] = [];
  const userName = User.social.github.userName;
  const repoCount = User.social.github.reposFetchLimit || 20;

  try {
    const res = await fetch(`https://api.github.com/users/${userName}/repos?sort=created&direction=desc&per_page=${repoCount}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Something went Wrong!");
    const repos = await res.json();
    for (const repo of repos) {
      if (!repo.fork && repo.topics?.includes("include")) filtered.push(repo);
      if (filtered.length === 3) break;
    }
  } catch (err) {
    console.log(err);
  }

  return (
    <section className="min-w-dvw bg-white text-[#3d3d3d] dark:bg-[#1e1e1e] dark:text-white md:px-16 py-16 px-6" id="projects">
      <h2 className="text-4xl font-bold ">
        <u>Proj</u>ects
      </h2>
      {filtered.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
}
