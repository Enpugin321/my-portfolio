"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectLumina() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".proj-info", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".proj-visual", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-32 container mx-auto px-6"
      id="work"
    >
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Project Info */}
        <div className="proj-info w-full lg:w-1/3">
          <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
            Case Study 01
          </span>
          <h2 className="text-4xl font-bold mb-6">
            GOOD RESTAURANTS — Multi-page Ecosystem
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            A sophisticated digital presence for a premium restaurant group. I
            focused on translating their &quot;anti-hype&quot; philosophy into a
            calm, high-performance web experience. No unnecessary clutter—just
            smooth transitions, impeccable typography, and a focus on the
            atmosphere of each venue.
          </p>

          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-3">
              Stack
            </span>
            <div className="flex flex-wrap gap-3">
              {["Next.js", "React", "GSAP", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="https://goodrest.kz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold border-b border-primary pb-1 hover:gap-4 transition-all"
          >
            View Project{" "}
            <svg
              fill="currentColor"
              height="20"
              viewBox="0 0 256 256"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
            </svg>
          </Link>
        </div>

        {/* Video Mockup */}
        <div className="proj-visual w-full lg:w-2/3">
          <div className="mockup-frame rounded-[20px] overflow-hidden bg-[#1a1a1e] border border-white/10 p-2 md:p-4 glass-morphism">
            <div className="bg-dark rounded-[12px] overflow-hidden aspect-video relative">
              {/* Mock browser UI */}
              <div className="absolute top-0 w-full h-8 bg-[#2a2a2e] flex items-center px-4 gap-2 z-20">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                </div>
              </div>
              {/* Video Content */}
              <video
                src="/goodrest.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover pt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
