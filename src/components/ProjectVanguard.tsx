"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { PReviewDEmo } from "./iHedge/widgets/PreviewDemo/PreviewDemo";

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
          scrub: true
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCksJojzRrPe4-1aDDK-gMwsWWjkROclQqFH-zriamrCvzP2ajQbdOEB-x1lZTodlDNZWaRL3csUsSIXJndMWM4FVRJiWOdMO8JxN22SK7WBc5Dl-8mfRKwxg-nIwrtP5KENJBffwLjsOHMbpBQdtNbclOvSvP7gPNTfFMursmCuvTQ7JEHhdrSD0sxoEEM0V-GMzO6J_8pGIIGyHEUjBtd6LAhLLY13Vv3tEC1EiViSmjFLpjO3Io3z6Tl0IJ9qclErNrVC7Lmcdw"
          alt="Project background"
          fill
          className="bg-parallax object-cover"
        />
        <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center">
        <div className="vanguard-content flex-1 max-w-2xl glass-morphism p-12 rounded-custom border-white/5">
          <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
            Case Study 02
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Vanguard XR</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            Pushing the boundaries of immersive e-commerce. A 3D virtual store
            experience built for luxury brands to showcase high-fidelity digital
            twins in a web browser.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-3 rounded-custom font-bold hover:scale-105 transition-transform">
              Live Demo
            </button>
            <button className="border border-white/20 text-white px-8 py-3 rounded-custom font-bold hover:bg-white/10 transition-colors">
              Case Study
            </button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-2xl p-6 glass-morphism rounded-custom border-white/5 vanguard-content" style={{ opacity: 0 }}>
          <PReviewDEmo />
        </div>
      </div>
    </section>
  );
}
