import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lumière | The New Standard of Beauty",
  description: "Cinematic luxury cosmetics brand offering the intersection of botanical purity and clinical efficacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased bg-[white] text-black overflow-x-hidden selection:bg-champagne/30 selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
