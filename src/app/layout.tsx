import type { Metadata } from "next";
import { Inter, Fragment_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  variable: "--font-fragment-mono",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "R&D Hoops | Elite Basketball Training",
  description: "International professional experience meets cutting-edge development. Yusuf Shehata brings elite-level detail to players of all levels.",
  openGraph: {
    title: "R&D Hoops | Elite Basketball Training",
    description: "International professional experience meets cutting-edge development. Yusuf Shehata brings elite-level detail to players of all levels.",
    images: [
      {
        url: '/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'Yusuf Shehata - R&D Hoops',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "R&D Hoops | Elite Basketball Training",
    description: "International professional experience meets cutting-edge development.",
    images: ['/hero-image.png'],
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
        className={`${inter.variable} ${fragmentMono.variable} antialiased cursor-none`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
