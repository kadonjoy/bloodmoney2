import type { Metadata } from "next";
import "@/app/ui/globals.css";

export const metadata: Metadata = {
  title: "Normal Maths - Free Online Math Puzzle Games",
  description:
    "Dive into Normal Maths, a unique tile puzzle game where you uncover hidden rules, solve logic challenges, and boost pattern recognition skills. Play free online today!",
  keywords: [
    "normal maths",
    "puzzle game",
    "logic problems",
    "pattern recognition",
    "mathematical puzzle game",
    "logic puzzles",
    "tile puzzle",
    "brain teasers",
    "math challenges",
    "educational game",
    "strategy puzzle",
  ],

  openGraph: {
    title: "Normal Maths - Free Online Math Puzzle Games",
    description:
      "Dive into Normal Maths, a unique tile puzzle game where you uncover hidden rules, solve logic challenges, and boost pattern recognition skills. Play free online today!",
    url: "https://bloodmoney2.org/normal-maths",
    siteName: "normal-maths",
    images: [
      {
        url: "https://s.clicker-game.com/games/normal-maths/normal-maths.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Normal Maths - Free Online Math Puzzle Games",
    description:
      "Dive into Normal Maths, a unique tile puzzle game where you uncover hidden rules, solve logic challenges, and boost pattern recognition skills. Play free online today!",
    images: ["https://s.clicker-game.com/games/normal-maths/normal-maths.jpg"],
  },
  alternates: {
    canonical: "https://bloodmoney2.org/normal-maths",
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
