import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playFair = Playfair_Display({
  variable: "--font-play-fair",
  subsets: ["latin"],
});

const montSerrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seun & Abigail | A Celebration of Love",
  description:
    "Join us as we celebrate the union of Seun and Abigail — a timeless journey of love, joy, and faith. Discover event details, venue, schedule, and share your blessings with the couple.",
  keywords: [
    "Seun and Abigail Wedding",
    "Nigerian wedding",
    "Love celebration",
    "Wedding invitation",
    "Couple website",
    "Seun & Abigail 2025",
  ],
  authors: [{ name: "Seun & Abigail" }],
  openGraph: {
    title: "Seun & Abigail | A Celebration of Love",
    description:
      "A day to remember — join Seun and Abigail as they begin their forever journey together.",
    url: "https://seunandabigail.com",
    siteName: "Seun & Abigail Wedding",
    images: [
      {
        url: "/assets/15.jpg",
        width: 1200,
        height: 630,
        alt: "Seun & Abigail Wedding Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seun & Abigail | A Celebration of Love",
    description:
      "Celebrate with Seun and Abigail — a wedding filled with joy, laughter, and love.",
    images: ["/assets/15.jpg"],
  },
  themeColor: "#fff0f5",
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/15.jpg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playFair.variable} ${montSerrat.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
