import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Existing flavorthing.com vibe: all sans-serif, restrained.
// Inter (sans) for everything; Caveat (handwriting) only for the redline-edit "inserts".
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const handwriting = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Flavor Thing — The advisory company for the creator economy.",
  description:
    "The advisory company for the creator economy. New York. Two founders. We work alongside the creators building the next generation of media companies.",
  metadataBase: new URL("https://flavorthing.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${handwriting.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-neutral-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
