import { Icon } from "@iconify/react";
import aboutIcons from "../data/about.json";

export default function About() {
  return (
    <section className="min-w-dvw bg-white text-[#3d3d3d] dark:bg-[#1e1e1e] dark:text-white md:px-16 py-16 px-0 sm:px-6" id="about">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="space-y-4 sm:px-0 px-6">
          <h2 className="text-4xl font-bold mb-14"><u>About </u>me</h2>
          <p className="text-2xl font-semibold">Hey! I'm Sunjay Kumar</p>
          <div className="font-normal dark:opacity-95 opacity-80 selection:opacity-100 space-y-4">
            <p>I am a passionate software engineer specializing in full-stack development. I love writing clean,
              efficient code and building amazing user experiences.</p>
            <p>Skilled in JavaScript, Node.js, React, and databases like MongoDB, and MySQL, I enjoy working on innovative
              projects that solve real-world problems.</p>
            <p>Always eager to learn new technologies and improve my skills through collaborative teamwork and
              challenging tasks.</p>
          </div>
        </div>

        {/* Right Side Avatar + Icons */}
        <div className="relative w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] mx-auto sm:-mt-10 select-none">
          <div
            className="absolute border border-dashed border-gray-300 dark:border-zinc-500 rounded-full w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          </div>
          <div
            className="absolute border border-dashed border-gray-300 dark:border-zinc-500 rounded-full w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          </div>
          <div
            className="absolute border border-dashed border-gray-300 dark:border-zinc-500 rounded-full w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          </div>

          {/* icons */}
          {aboutIcons.map((icon) => {
            return (
            <div key={icon.name} className="absolute px-3 py-3 bg-white dark:bg-[#2f2f2f] rounded-full shadow-lg animate-float"
            style={{ animationDelay: icon.delay, ...icon.position }}>
            <div className={`w-7 h-7 sm:w-8 sm:h-8 ${icon.size || ''}`}>
              <Icon icon={icon.icon} width="100%" height="100%" />
            </div>
          </div>
          )
          })}

          {/* Center Avatar */}
          <img src="/img/me.jpg" alt="Avatar"
            className="absolute top-1/2 left-1/2 w-36 h-36 sm:w-52 sm:h-52 -translate-x-1/2 -translate-y-1/2 z-0 rounded-full object-cover shadow-lg border-4 border-white dark:border-[#2f2f2f]" />
        </div>
      </div>
    </section>
  )
}