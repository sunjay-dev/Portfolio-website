import SectionHeading from "@/components/ui/SectionHeading";
import GithubStats from "@/components/sections/GithubStats";

export default function GithubActivity() {
  return (
    <section id="github-activity">
      <div className="flex flex-col items-center gap-5">
        <SectionHeading>GitHub Activity</SectionHeading>

        <GithubStats />
      </div>
    </section>
  );
}
