"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".bento-item");

      gsap.to(elements, {
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });

      // Force refresh to ensure positions are correct
      ScrollTrigger.refresh();
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="py-32 bg-surface" id="skills">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="heading-anim text-3xl md:text-5xl font-bold mb-4">
            The Tech Stack
          </h2>
          <p className="heading-anim text-gray-400">
            Leveraging cutting-edge tools to build the future of the web.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* Next.js */}
          <div className="bento-item opacity-0 md:col-span-2 md:row-span-1 bento-card glass-morphism p-8 flex flex-col justify-start rounded-custom">
            <div className="bg-black w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Next.js</h3>
              <p className="text-gray-400">
                React framework for production-grade web applications.
              </p>
            </div>
          </div>

          {/* Tailwind */}
          <div className="bento-item opacity-0 md:col-span-1 bento-card glass-morphism p-8 flex flex-col justify-start rounded-custom">
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C7.666,17.818,9.027,19,12.001,19c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Tailwind CSS</h3>
            <p className="text-sm text-gray-400">Utility-first CSS styling.</p>
          </div>

          {/* GSAP */}
          <div className="bento-item opacity-0 md:col-span-1 bento-card glass-morphism p-8 flex flex-col justify-start rounded-custom">
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <Image
                src="/gsap.png"
                alt="GSAP"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">GSAP</h3>
            <p className="text-sm text-gray-400">
              High-performance web animations.
            </p>
          </div>

          {/* Motion Design */}
          <div className="bento-item opacity-0 md:col-span-1 md:row-span-1 bento-card glass-morphism p-8 flex flex-col justify-start rounded-custom">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/framermo.webp"
                alt="Motion Design"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Motion Design</h3>
            <p className="text-sm text-gray-400">
              Fluid physics-based interactions.
            </p>
          </div>

          {/* React */}
          <div className="bento-item opacity-0 md:col-span-3 md:row-span-1 bento-card glass-morphism p-8 flex flex-col justify-start rounded-custom overflow-hidden relative">
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <Image
                src="/react.png"
                alt="React"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">React</h3>
              <p className="text-gray-400 max-w-xl">
                Building complex, high-performance user interfaces with a
                component-based approach and modern state management.
              </p>
            </div>
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-5 blur-sm pointer-events-none">
              <Image
                src="/react.png"
                alt=""
                width={300}
                height={300}
                className="object-contain grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
