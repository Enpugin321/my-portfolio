"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-dark/80 backdrop-blur-md py-4 " : "mix-blend-difference"
      }`}
    >
      <div className="text-xl font-extrabold tracking-tighter">
        TM<span className="text-primary">.</span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase">
        <Link href="#work" className="hover:text-primary transition-colors">
          Work
        </Link>
        <Link href="#skills" className="hover:text-primary transition-colors">
          Stack
        </Link>
        <Link href="#contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
      </div>
      <div></div>
    </nav>
  );
}
