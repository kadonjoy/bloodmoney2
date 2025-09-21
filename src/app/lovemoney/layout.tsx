import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "@/app/ui/globals.css";

export const metadata: Metadata = {
  title: "LoveMoney - Play the Moral Choice Clicker RPG Online Free",
  description:
    "Dive into LoveMoney, a one-of-a-kind clicker RPG where chasing $25,000 forces you to confront tough ethical dilemmas. Start playing LoveMoney online for free today!",
  keywords: [
    "lovemoney",
    "clicker rpg",
    "moral choices game",
    "story driven clicker",
    "incremental game",
    "narrative clicker",
    "lovemoney game",
  ],

  openGraph: {
    title: "LoveMoney - Play the Moral Choice Clicker RPG Online Free",
    description:
      "Dive into LoveMoney, a one-of-a-kind clicker RPG where chasing $25,000 forces you to confront tough ethical dilemmas. Tap to earn, make life-changing choices, and see where your path leads. Start playing LoveMoney online for free today!",
    url: "https://bloodmoney2.org/lovemoney",
    siteName: "lovemoney",
    images: [
      {
        url: "https://s.clicker-game.com/games/lovemoney/lovemoney-2.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoveMoney - Play the Moral Choice Clicker RPG Online Free",
    description:
      "Dive into LoveMoney, a one-of-a-kind clicker RPG where chasing $25,000 forces you to confront tough ethical dilemmas. Tap to earn, make life-changing choices, and see where your path leads. Start playing LoveMoney online for free today! Play free online now!",
    images: ["https://s.clicker-game.com/games/lovemoney/lovemoney-2.jpg"],
  },
  alternates: {
    canonical: "https://bloodmoney2.org/lovemoney",
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
