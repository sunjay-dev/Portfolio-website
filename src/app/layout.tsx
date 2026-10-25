import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import User from "@/data/user.json";
import ThemeInit from "@/components/ui/ThemeInit";
import Navbar from "@/components/layouts/Navbar";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${User.name} | ${User.title}`,
  description: User.about[0],
  openGraph: {
    title: `${User.name} – ${User.title}`,
    description: User.about[0],
    url: "https://sunjay.xyz",
    type: "website",
    images: ["https://sunjay.xyz/img/me.jpg"],
  },
  // favicon comes from the src/app/icon.jpg file convention
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body
        className={`${geist.variable} ${geistMono.variable} relative min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <ThemeInit />

        {/* Animated grid background at the top (option D from /bg-variants) */}
        <div
          className="absolute inset-x-0 top-0 z-0 h-25 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={0.5}
            className="h-full w-full [mask-image:linear-gradient(to_bottom,black,transparent)]"
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 mx-auto max-w-2xl px-6 py-12 pb-28 sm:py-24">
          {children}
        </div>

        {/* Floating bottom navbar */}
        <Navbar />

        {/* Toast notifications */}
      </body>
    </html>
  );
}
