import type { Metadata } from "next";
import "@/app/ui/globals.css";

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
