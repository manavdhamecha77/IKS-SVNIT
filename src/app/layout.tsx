import type { Metadata } from "next";
import { Geist, Geist_Mono, Kurale } from "next/font/google";
import "./globals.css";

const kurale = Kurale({
  weight: "400",
  subsets: ["latin", "devanagari"],
  variable: "--font-kurale",
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
  title: "Centre for Indian Knowledge Systems and Holistic Education | SVNIT Surat",
  description:
    "The Centre for Indian Knowledge Systems and Holistic Education is a multidisciplinary hub for research on all aspects of Indian Knowledge Systems at SVNIT Surat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${kurale.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
