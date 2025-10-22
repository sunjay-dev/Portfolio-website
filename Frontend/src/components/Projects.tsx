import { useEffect, useState } from 'react'
import ProjectCard from './cards/ProjectCard'
export default function Projects() {
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
    const [projects, setProjects] = useState<Repo[]>([]);
    useEffect(() => {
        const userName = import.meta.env.VITE_GITHUB_USERNAME;
        const repoCount = import.meta.env.VITE_GITHUB_REPOS_FETCH_LIMIT || 20;
        fetch(`https://api.github.com/users/${userName}/repos?sort=created&direction=desc&per_page=${repoCount}`)
            .then(res => {
                if (!res.ok)
                    throw new Error('Something went Wrong!')
                return res.json();
            })
            .then(repos => {
                const filtered = [];
                for (const repo of repos) {
                    if (!repo.fork && repo.topics?.includes('include'))
                        filtered.push(repo)
                    if (filtered.length === 3) break;
                }
                setProjects(filtered);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <section className="min-w-dvw bg-white text-[#3d3d3d] dark:bg-[#1e1e1e] dark:text-white md:px-16 py-16 px-6" id='projects'>
            <h2 className="text-4xl font-bold "><u>Proj</u>ects</h2>
            {projects.map((project, index) => <ProjectCard key={index} project={project} />)}
        </section>
    )
}