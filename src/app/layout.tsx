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
  title: "BloodMoney 2 - Play Human Expenditure Program Online Free",
  description:
    "Experience BloodMoney 2, the Human Expenditure Program simulation game. Control Harvey Harvington's life with dark comedy and strategic decisions.",
  keywords: [
    "bloodmoney 2 org",
    "human expenditure program",
    "harvey harvington",
    "life simulation game",
    "dark comedy game",
    "management simulator",
    "bloodmoney game",
    "free online game",
    "browser game",
    "simulation game",
    "strategy game",
    "indie game",
    "dark humor game",
    "life management",
    "decision making game",
  ],
  alternates: {
    canonical: "https://bloodmoney2.org/",
  },
  openGraph: {
    title: "BloodMoney 2 - Play Human Expenditure Program Online Free",
    description:
      "Experience BloodMoney 2, the Human Expenditure Program simulation game. Control Harvey Harvington's life with dark comedy and strategic decisions.",
    url: "https://bloodmoney2.org/",
    siteName: "BloodMoney 2",
    images: [
      {
        url: "https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BloodMoney 2 - Play Human Expenditure Program Online Free",
    description:
      "Experience BloodMoney 2, the Human Expenditure Program simulation game. Control Harvey Harvington's life with dark comedy and strategic decisions. Play free online now!",
    images: [
      "https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="msvalidate.01" content="CCBDC370B5C44A8783235902B48C5F92" />
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        {/* Canonical URL */}
        {/* <link rel="canonical" href="https://bloodmoney2.org/" /> */}
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tav8qqoyp1");
            `,
          }}
        />
        <meta
          name="google-site-verification"
          content="kgrAV53WTnwqMtB90Ba0CSW-Q97XZG0DRVVqVJgtdhU"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
