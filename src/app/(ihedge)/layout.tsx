import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./ihedge.css";
import { Navbar } from "@/components/iHedge/widgets";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "iHedge | Decentralized Crypto Management",
  description: "Invest, Earn, Withdraw. Fully Transparent Crypto.",
};

export default function IHedgeRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
