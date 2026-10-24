import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceList from "@/components/sections/ExperienceList";

export default function Experience() {
  return (
    <section id="experience">
      <div className="flex flex-col gap-4">
        <SectionHeading>Work Experience</SectionHeading>

        <ExperienceList />
      </div>
    </section>
  );
}
