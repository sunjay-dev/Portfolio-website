import ProjectCard from './cards/ProjectCard'
import projects from '../data/projects.json'
export default function Projects() {
    return (
        <section className="min-w-dvw bg-white text-[#3d3d3d] dark:bg-[#3d3d3d] dark:text-white md:px-16 py-16 px-6" id='projects'>
            <h2 className="text-4xl font-bold "><u>Proj</u>ects</h2>
            {projects.map(project => <ProjectCard key={project.name} project={project}/>)}
        </section>
    )
}
