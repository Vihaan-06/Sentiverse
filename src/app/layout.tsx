import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Internet Mood Map",
  description:
    "Real-time global dashboard visualizing the emotional mood of the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} bg-[#0b0b0f] text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
