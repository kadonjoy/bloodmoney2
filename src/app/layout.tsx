import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BloodMoney 2 - Play Human Expenditure Program Online Free",
  description:
    "Experience BloodMoney 2, the Human Expenditure Program simulation game. Control Harvey Harvington's life with dark comedy and strategic decisions. Play free online now!",
  keywords: [
    "bloodmoney 2",
    "human expenditure program",
    "harvey harvington",
    "life simulation game",
    "dark comedy game",
    "management simulator",
    "bloodmoney game",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
