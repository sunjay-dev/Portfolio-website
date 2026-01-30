import Header from "@/components/layouts/Header";
import Image from "next/image";
import Link from "next/link";
import Icon from "../ui/Icon";
import User from "@/data/user.json";

export default function Home() {
  return (
    <section className="w-full h-full p-2 relative" id="home">
      <Image src="/img/homeBg.webp" alt="Home background" fill priority sizes="100vw" className="object-cover object-center -z-10" />

      <div className="absolute inset-0 bg-white opacity-95 z-0 sm:dark:opacity-85 dark:opacity-90 dark:bg-black"></div>
      <div className="relative z-10 sm:px-6 px-4 py-4 h-full flex flex-col justify-start">
        <Header />

        <div className="text-center sm:mt-8 mt-28">
          <h2 className="md:text-[4.6rem] sm:text-6xl text-5xl leading-[1.10] font-bold text-[#3d3d3d] dark:text-gray-100">{User.name}</h2>
          <p className="md:text-5xl sm:text-4xl text-3xl sm:mt-0 mt-2 font-bold text-[#6a6a6a] dark:text-gray-200">{User.title}</p>
          <p className=" md:text-2xl sm:text-xl text-lg text-[#6a6a6a] mt-6 dark:text-gray-200">{User.intro}</p>
        </div>
        <div className="mt-15 space-x-4 flex justify-center">
          <Link
            href="#contact"
            className="max-w-3xl py-3 px-6 flex items-center justify-center font-medium box-border bg-[#3d3d3d] text-white dark:text-[#3d3d3d] dark:bg-white border rounded-md hover:opacity-90 active:opacity-90"
          >
            Get in Touch
          </Link>

          <Link
            href="/pdf/resume.pdf"
            download={`${User.name.split(" ").join("_")}_Resume.pdf`}
            className="max-w-3xl py-3 px-6 flex items-center gap-2 box-border font-medium border-[#3d3d3d] border-2 rounded-md hover:bg-[#3d3d3d] hover:text-white active:text-white active:bg-[#3d3d3d] transition-transform dark:border-white dark:hover:bg-white dark:hover:text-[#3d3d3d] dark:active:bg-white dark:active:text-[#3d3d3d] dark:text-white"
          >
            <Icon icon="bx:file" className="w-5.5 h-5.5 dark:opacity-90 dark:hover:opacity-70" /> Resume
          </Link>
        </div>

        <div className="flex justify-center dark:text-white space-x-6 mt-14 items-center select-none">
          <a href={User.social.github.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${User.name}'s github profile`}>
            <Icon icon="lucide:github" className="w-6 h-6 opacity-70 hover:opacity-50 cursor-pointer dark:opacity-90 dark:hover:opacity-70" />
          </a>
          <a href={User.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${User.name}'s Linkedin profile`}>
            <Icon icon="meteor-icons:linkedin" className="w-6 h-6 opacity-70 hover:opacity-50 cursor-pointer dark:opacity-90 dark:hover:opacity-70" />
          </a>
          <a href={User.social.leetcode} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${User.name}'s LeetCode profile`}>
            <Icon
              icon="devicon-plain:leetcode"
              className="w-6 h-6 opacity-70 hover:opacity-50 cursor-pointer dark:opacity-90 dark:hover:opacity-70"
            />
          </a>
        </div>
        <Link aria-label="Go to second section" href="#about" className="flex justify-center items-center dark:text-white sm:mt-8 mt-12 select-none">
          <Icon
            icon="mdi:arrow-bottom"
            className="w-8.5 h-8.5 animate-bounce dark:opacity-90 dark:hover:opacity-70 opacity-60 cursor-pointer hover:opacity-40"
          />
        </Link>
      </div>
    </section>
  );
}
