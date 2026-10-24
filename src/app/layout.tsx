import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import User from "@/data/user.json";
import ThemeInit from "@/components/ui/ThemeInit";
import Navbar from "@/components/layouts/Navbar";
import FlickeringGrid from "@/components/ui/FlickeringGrid";
import { Toaster } from "sonner";
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
  icons: {
    shortcut: "/svg/code.svg",
  },
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

        {/* Flickering grid background at the top — portfolio2's exact settings */}
        <div
          className="absolute inset-x-0 top-0 z-0 h-25 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <FlickeringGrid
            className="h-full w-full"
            squareSize={2}
            gridGap={2}
            style={{
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 mx-auto max-w-2xl px-6 py-12 pb-28 sm:py-24">
          {children}
        </div>

        {/* Floating bottom navbar */}
        <Navbar />

        {/* Toast notifications */}
        <Toaster richColors position="bottom-center" />
      </body>
    </html>
  );
}
