import { useEffect, useState } from 'react'
import ProjectCard from './cards/ProjectCard'
// import projects from '../data/projects.json'
export default function Projects() {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const UserName = import.meta.env.VITE_GITHUB_USERNAME;
        fetch(`https://api.github.com/users/${UserName}/repos?sort=created&direction=desc&per_page=10`)
            .then(res => {
                if (!res.ok)
                    throw new Error('Something went Wrong!')
                return res.json();
            })
            .then(res => {
                const filtered = res
                    .filter((r: { fork: boolean }) => !r.fork)
                    .slice(0, 3);
                setProjects(filtered);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <section className="min-w-dvw bg-white text-[#3d3d3d] dark:bg-[#1e1e1e] dark:text-white md:px-16 py-16 px-6" id='projects'>
            <h2 className="text-4xl font-bold "><u>Proj</u>ects</h2>
            {projects.map((project, index) => <ProjectCard key={index} project={project} />)}
        </section>
    )
}