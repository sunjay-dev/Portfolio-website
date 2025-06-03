import { Icon } from "@iconify/react";
import skills from '../data/skills.json'
export default function Skills() {
        return (
        <section className="w-dvw bg-[#f8f8f8] md:px-16 pt-16 px-6 pb-32" id="skills">
            <h2 className="text-4xl font-bold text-[#3d3d3d]"><u>Tech</u>nical Skills</h2>
            <div className="mt-14 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 " id="skillsDiv">
                {skills.map((skill, index) => (
                    <div key={index} title={skill.name} className="flex space-x-2 sm:items-center cursor-pointer items-end border border-gray-200 rounded-md p-4 hover:bg-zinc-100 active:bg-zinc-100" >
                        <Icon icon={`logos:${skill.icon}`} width="24" height="24"></Icon>
                        <p className="sm:text-xl text-sm text-[#3d3d3d] font-normal">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section >
    )
}