import Icon from "@/components/ui/Icon";
import aboutIcons from "@/data/about.json";
import Image from "next/image";
import User from "@/data/user.json";

export default function About() {
  return (
    <section className="min-w-dvw bg-white text-[#3d3d3d] dark:bg-[#1e1e1e] dark:text-white md:px-16 py-16 px-0 sm:px-6" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4 sm:px-0 px-6">
          <h2 className="text-4xl font-bold mb-14">
            <u>About </u>me
          </h2>
          <p className="text-2xl font-semibold">Hey! I&apos;m {User.name}</p>
          <div className="font-normal dark:opacity-95 opacity-80 selection:opacity-100 space-y-4">
            {User.about.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>

        <div className="relative w-90 h-90 sm:w-120 sm:h-120 mx-auto sm:-mt-10 select-none">
          <div className="absolute border border-dashed border-gray-300 dark:border-zinc-500 rounded-full w-85 h-85 sm:w-110 sm:h-110 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute border border-dashed border-gray-300 dark:border-zinc-500 rounded-full w-70 h-70 sm:w-90 sm:h-90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute border border-dashed border-gray-300 dark:border-zinc-500 rounded-full w-55 h-55 sm:w-70 sm:h-70 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

          {aboutIcons.map((icon) => {
            return (
              <div
                key={icon.name}
                className="absolute px-3 py-3 bg-white dark:bg-[#2f2f2f] rounded-full shadow-lg animate-float"
                style={{ animationDelay: icon.delay, ...icon.position }}
              >
                <div className={`w-7 h-7 sm:w-8 sm:h-8 ${icon.size || ""}`}>
                  <Icon icon={icon.icon} width="100%" height="100%" />
                </div>
              </div>
            );
          })}

          <div className="absolute top-1/2 left-1/2 w-36 h-36 sm:w-52 sm:h-52 -translate-x-1/2 -translate-y-1/2 z-0 rounded-full overflow-hidden border-4 border-white dark:border-[#2f2f2f]">
            <Image
              src="/img/me.webp"
              alt="Avatar"
              sizes="(max-width: 640px) 9rem, (max-width: 768px) 13rem, 208px"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
