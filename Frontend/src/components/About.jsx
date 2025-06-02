export default function About() {
  return (
    <section className="min-w-dvw bg-white md:px-16 py-16 px-0 sm:px-6" id="about">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="space-y-4 sm:px-0 px-6">
          <h2 className="text-4xl font-bold mb-14"><u>About </u>me</h2>
          <p className="text-2xl font-semibold">Hey! I'm Sunjay Kumar</p>
          <div className="font-normal opacity-80 selection:opacity-100 space-y-4">

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
            className="absolute border border-dashed border-gray-300 rounded-full w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          </div>
          <div
            className="absolute border border-dashed border-gray-300 rounded-full w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          </div>
          <div
            className="absolute border border-dashed border-gray-300 rounded-full w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          </div>

          {/* Icons */}

          {/* React Icon */}
          <div className="absolute px-3 py-3 top-[10%] left-[50%] bg-white rounded-full shadow-lg animate-float"
            style={{ transform: 'translate(-50%, 0)' }}>
            <img src="/svg/techIcons/react.svg" className="w-7 h-7 sm:w-8 sm:h-8" alt="React" />
          </div>

          {/* JavaScript Icon */}
          <div className="absolute px-3 py-3 top-[50%] right-[10%] bg-white rounded-full shadow-lg animate-float"
            style={{ animationDelay: '0.5s', transform: 'translate(50%, -50%)' }}>
            <img src="/svg/techIcons/javascript.svg" className="w-7 h-7 sm:w-8 sm:h-8" alt="JavaScript" />
          </div>

          {/* TypeScript Icon */}
          <div className="absolute px-3 py-3 bottom-[10%] left-[55%] bg-white rounded-full shadow-lg animate-float"
            style={{ animationDelay: '1s', transform: 'translate(-50%, 0)' }}>
            <img src="/svg/techIcons/typescript.svg" className="w-7 h-7 sm:w-8 sm:h-8" alt="TypeScript" />
          </div>

          {/* Node.js Icon */}
          <div className="absolute px-3 py-3 bg-white top-[15%] left-[20%] rounded-full shadow-lg animate-float"
            style={{ animationDelay: '0.7s' }}>
            <img src="/svg/techIcons/nodejs.svg" className="w-7 h-7 sm:w-8 sm:h-8" alt="Node.js" />
          </div>

          {/* Docker Icon */}
          <div className="absolute px-2 py-2 top-[25%] right-[5%] bg-white rounded-full shadow-lg animate-float"
            style={{ animationDelay: '1.3s' }}>
            <img src="/svg/techIcons/docker.svg" className="w-9 h-9 sm:w-10 sm:h-10" alt="Docker" />
          </div>

          {/* MongoDB Icon */}
          <div className="absolute px-3 py-3 top-[50%] left-[15%] bg-white rounded-full shadow-lg animate-float"
            style={{ animationDelay: '0.9s', transform: 'translateY(-50%)' }}>
            <img src="/svg/techIcons/mongodb.svg" className="w-7 h-7 sm:w-8 sm:h-8" alt="MongoDB" />
          </div>

          {/* Tailwind CSS Icon */}
          <div className="absolute px-3 py-3 bottom-[10%] left-[23%] bg-white rounded-full shadow-lg animate-float"
            style={{ animationDelay: '1.5s', transform: 'translateX(-50%)' }}>
            <img src="/svg/techIcons/tailwindcss.svg" className="w-7 h-7 sm:w-8 sm:h-8" alt="Tailwind CSS" />
          </div>


          {/* Center Avatar */}
          <img src="/img/me.jpg" alt="Avatar"
            className="absolute top-1/2 left-1/2 w-36 h-36 sm:w-52 sm:h-52 -translate-x-1/2 -translate-y-1/2 z-0 rounded-full object-cover shadow-lg border-4 border-white" />
        </div>
      </div>
    </section>
  )
}
