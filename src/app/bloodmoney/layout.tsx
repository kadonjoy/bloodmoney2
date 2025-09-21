import type { Metadata } from "next";
import "@/app/ui/globals.css";

export const metadata: Metadata = {
  title: "BloodMoney - Online Free",
  description:
    "BloodMoney challenges players to earn $25,000 in a darkly twisted clicker game. Each decision ramps up tension and leads to shocking endings.",
  keywords: [
    "bloodmoney",
    "life management game",
    "dark comedy simulator",
    "decision game",
    "bloodmoney online",
    "original bloodmoney",
    "bloodmoney game",
  ],

  openGraph: {
    title: "BloodMoney - Online Free",
    description:
      "BloodMoney challenges players to earn $25,000 in a darkly twisted clicker game. Each decision ramps up tension and leads to shocking endings.",
    url: "https://bloodmoney2.org/bloodmoney",
    siteName: "BloodMoney online",
    images: [
      {
        url: "https://s.clicker-game.com/games/bloodmoney/bloodmoney.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BloodMoney - Online Free",
    description:
      "BloodMoney challenges players to earn $25,000 in a darkly twisted clicker game. Each decision ramps up tension and leads to shocking endings.",
    images: ["https://s.clicker-game.com/games/bloodmoney/bloodmoney.jpg"],
  },
  alternates: {
    canonical: "https://bloodmoney2.org/bloodmoney",
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
