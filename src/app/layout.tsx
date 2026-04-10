import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-cormorant",
  style: ["normal", "italic"]
});

const jost = Jost({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-jost",
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
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <head>
        <link href="https://fonts.cdnfonts.com/css/samarkan" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}

