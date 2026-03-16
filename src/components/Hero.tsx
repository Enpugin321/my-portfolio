"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".animate-fade-in-up", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.to(".bg-float-1", {
        y: -30,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".bg-float-2", {
        y: -40,
        rotation: -5,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-visible"
      id="hero"
    >
      {/* Dynamic background gradient */}
      <div className="absolute inset-x-0 -inset-y-40 pointer-events-none z-0 hero-gradient-overlay"></div>

      {/* Floating 3D-like elements */}
      <div className="bg-float-1 absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-[80px]"></div>
      <div className="bg-float-2 absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-600 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <p className="text-primary font-semibold tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
          Available for New Ventures
        </p>
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] animate-fade-in-up">
          Creative Developer <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">
            &amp; UI Specialist
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light mb-12 animate-fade-in-up">
          Crafting immersive digital experiences through elegant code and
          sophisticated motion design. High-end solutions for visionary brands.
        </p>
        <div className="animate-fade-in-up">
          <Link
            href="#work"
            className="inline-block border border-white/20 px-10 py-4 rounded-custom hover:bg-white hover:text-black transition-all duration-500 font-medium"
          >
            Explore Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
