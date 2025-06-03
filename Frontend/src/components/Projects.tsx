import ProjectCard from './cards/ProjectCard'
import projects from '../data/projects.json'
export default function Projects() {
    return (
        <section className="min-w-dvw  bg-white md:px-16 py-16 px-6" id='projects'>
            <h2 className="text-4xl font-bold text-[#3d3d3d]"><u>Proj</u>ects</h2>
            {projects.map(project => <ProjectCard key={project.name} project={project}/>)}
        </section>
    )
}
