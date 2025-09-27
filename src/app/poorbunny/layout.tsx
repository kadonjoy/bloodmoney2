import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "@/app/ui/globals.css";

export const metadata: Metadata = {
  title: "Poor Bunny - Play the High Score Chaser Game Online Free",
  description:
    "The core gameplay of Poor Bunny revolves around controlling a cute little rabbit, collecting carrots to score points while navigating through constantly appearing dangerous obstacles, and trying to survive.",
  keywords: [
    "poor bunny",
    "arcade survival game",
    "dodge obstacles",
    "reflex game",
    "incremental game",
    "poor bunny game",
  ],

  openGraph: {
    title: "Poor Bunny - Play the High Score Chaser Game Online Free",
    description:
      "The core gameplay of Poor Bunny revolves around controlling a cute little rabbit, collecting carrots to score points while navigating through constantly appearing dangerous obstacles, and trying to survive.",
    url: "https://bloodmoney2.org/poorbunny",
    siteName: "Poor Bunny",
    images: [
      {
        url: "https://s.clicker-game.com/games/poor-bunny/poor-bunny.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poor Bunny - Play the High Score Chaser Game Online Free",
    description:
      "The core gameplay of Poor Bunny revolves around controlling a cute little rabbit, collecting carrots to score points while navigating through constantly appearing dangerous obstacles, and trying to survive.",
    images: ["https://s.clicker-game.com/games/poor-bunny/poorbunny.jpg"],
  },
  alternates: {
    canonical: "https://bloodmoney2.org/poorbunny",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  // maximumScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
