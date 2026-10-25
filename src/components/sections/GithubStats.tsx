import Image from "next/image";
import User from "@/data/user.json";

const CHART_BASE = "https://ghchart.rshah.org";
const CHART_COLOR = "158a17";
const CHART_WIDTH = 663;
const CHART_HEIGHT = 104;

export default function GithubStats() {
  const userName = User.social.github.userName;

  return (
    <Image
      src={`${CHART_BASE}/${CHART_COLOR}/${userName}`}
      alt={`${userName}'s GitHub contribution graph`}
      width={CHART_WIDTH}
      height={CHART_HEIGHT}
      unoptimized
      className="h-auto w-full"
    />
  );
}
