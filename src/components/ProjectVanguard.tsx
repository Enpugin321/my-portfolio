"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectVanguard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".vanguard-content", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
      });

      gsap.to(".bg-parallax", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/screenshot.png"
          alt="Project background"
          fill
          className="bg-parallax object-cover"
        />
        <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center">
        <div className="vanguard-content flex-1 max-w-2xl glass-morphism p-12 rounded-custom border-white/5">
          <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
            Case Study 01
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8">iHedge</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            A professional digital asset management platform for retail crypto
            investors. Offering institutional-grade strategies with full
            transparency and a minimum entry barrier of just 100 USDT.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/ihedge">
              <button className="bg-[#008BF5] text-white px-8 py-3 rounded-custom font-bold hover:scale-105 transition-transform">
                Live Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
