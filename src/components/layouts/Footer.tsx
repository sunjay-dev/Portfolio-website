import Icon from "../ui/Icon";
import User from "@/data/user.json";
export default function Footer() {
  const sections = ["home", "about", "skills", "projects", "achievements", "contact"];

  return (
    <footer className="bg-[#3d3d3d] dark:bg-[#1e1e1e] p-10 **:selection:bg-gray-50 **:selection:text-[#3d3d3d]">
      <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-between items-center mb-8 pt-4 pb-6 border-b border-[#6a6a6a]">
        <div className="flex text-start items-start sm:items-center space-x-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" x2="20" y1="19" y2="19"></line>
          </svg>
          <h1 className="font-bold text-xl">{User.name}</h1>
        </div>
        <div className="grid grid-cols-2 md:block md:space-x-4 sm:grid-cols-3 gap-2 sm:gap-4 text-gray-300 font-medium px-4 py-2">
          {sections.map((section, index) => (
            <a key={index} href={`#${section}`}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        <a aria-label="Scroll at top" href="#home" className="text-white p-2.5 rounded-full sm:animate-none animate-bounce bg-[#6a6a6a]">
          <Icon icon="mdi:arrow-bottom" className="w-5 h-5 hover:opacity-80 rotate-180 cursor-pointer" />
        </a>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-200">
        <p>Made with ❤️ using Next.js © {new Date().getFullYear()}</p>
        <p className="sm:block hidden">{User.title}</p>
      </div>
    </footer>
  );
}
