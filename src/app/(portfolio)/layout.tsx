import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Tyniankin Mikhail | Portfolio",
  description: "Creative Developer & UI Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark scroll-smooth", "font-sans", geist.variable)}
    >
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
