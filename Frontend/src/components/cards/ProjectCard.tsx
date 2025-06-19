import { Icon } from "@iconify/react";
interface projectInterface {
  url: string,
  time: string,
  imgUrl: string,
  description: string,
  technology: string[],
  name: string
}
interface Props {
  project: projectInterface
}
export default function ProjectCard({ project }: Props) {
  return (
    <div onClick={() => window.open(`${project.url}`, '_blank')} className="cursor-pointer group active:scale-[1.02] mt-14 grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-7 justify-between items-center transition duration-300 transform hover:scale-[1.02] sm:hover:shadow-lg sm:hover:bg-[#f8f8f8] dark:hover:bg-[#2a2a2a] dark:active:bg-[#2a2a2a] sm:hover:p-4 sm:shadow-none shadow-lg sm:bg-transparent sm:p-0 p-4 rounded-xl">
      <img alt={project.name} src={project.imgUrl} className="md:col-span-1 w-full max-h-44 object-cover select-none sm:p-0 p-2 shadow rounded-xl sm:rounded-md" />
      <div className="md:col-span-2 space-y-2 p-2">
        <h3 className="text-xs font-medium">{project.time}</h3>
        <a href={project.url} target="_blank" className="text-lg sm:text-xl font-semibold flex items-center">{project.name}<Icon
          icon="heroicons:arrow-up-right-16-solid" className="ml-1 transition-transform duration-200 group-hover:translate-x-1 group-active:translate-x-1  group-hover:-translate-y-1 group-active:-translate-y-1" width="16" height="16"></Icon></a>
        <p className="font-normal opacity-90 selection:opacity-100">{project.description}</p>
        {project.technology.map(tech => <button key={tech} className="mr-1 px-3 py-1 rounded-full text-xs leading-5 bg-[#3d3d3d] text-gray-50 dark:text-[#3d3d3d] dark:bg-gray-50">{tech}</button>)}
      </div>
    </div>
  )
}