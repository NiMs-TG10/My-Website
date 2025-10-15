import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Inter, Fredoka } from "next/font/google";

// Configure the font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // CSS variable for body font
});

// Configure the font for display headings
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Make sure to include needed weights
  display: "swap",
  variable: "--font-fredoka", // CSS variable for display font
});

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
    "Nishant Mehta | Full Stack Developer | Rust Developer | AI/ML / Blokchain Developer | Devops | MLOps | DeFi Infra Engineer | Web3 Security Enthusiast",
  description:
    "Portfolio of Nishant Mehta, a Full Stack Developer specializing in React and Next.js",
  icons: {
    icon: "favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${fredoka.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
