import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/ui/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Ormblok - Play a new arcade puzzle game for Game Boy Color Online Free",
  description:
    "Ormblok is an arcade style falling block game with a twist. Use your blocks to create pellets in the playfield and then use the worm to eat the pellets!",
  keywords: [
    "ormblok",
    "arcade puzzle game",
    "tetris snake hybrid",
    "game boy color puzzle",
    "block puzzle game",
    "worm puzzle game",
    "ormblok online",
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    // maximumScale: 1,
  },
  openGraph: {
    title:
      "Ormblok - Play a new arcade puzzle game for Game Boy Color Online Free",
    description:
      "Ormblok is an arcade style falling block game with a twist. Use your blocks to create pellets in the playfield and then use the worm to eat the pellets!",
    url: "https://bloodmoney2.org/ormblok",
    siteName: "ormblok",
    images: [
      {
        url: "https://s.clicker-game.com/games/ormblok/ormblok.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ormblok - Play a new arcade puzzle game for Game Boy Color Online Free",
    description:
      "Ormblok is an arcade style falling block game with a twist. Use your blocks to create pellets in the playfield and then use the worm to eat the pellets!",
    images: ["https://s.clicker-game.com/games/ormblok/ormblok.jpg"],
  },
  alternates: {
    canonical: "https://bloodmoney2.org/ormblok",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
