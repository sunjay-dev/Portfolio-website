import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import GithubActivity from "@/components/sections/GithubActivity";
import Connect from "@/components/sections/Connect";
import Footer from "@/components/layouts/Footer";

export default function Page() {
  return (
    <main className="flex flex-col gap-14">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <GithubActivity />
      <Connect />
      <Footer />
    </main>
  );
}
