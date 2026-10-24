import User from "@/data/user.json";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about">
      <div className="flex flex-col gap-4">
        <SectionHeading>About</SectionHeading>
        <div className="space-y-3 text-pretty leading-relaxed text-muted-foreground">
          {User.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
