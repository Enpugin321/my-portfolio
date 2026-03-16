"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

import {
  Hero,
  CaseWidget,
  HowItWorks,
  DeFiCeFi,
  FAQ,
  Hero2,
} from "@/components/iHedge/widgets";
import { Button } from "@/components/iHedge/ui/button";
import { ArrowIcon } from "@/components/iHedge/ui/icons";
import FeaturesGrid from "@/components/iHedge/widgets/FeaturesGrid/FeaturesGrid";

gsap.registerPlugin(ScrollTrigger);

export default function IHedgePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      if (containerRef.current) {
        const blocks = gsap.utils.toArray(
          containerRef.current.children,
        ) as HTMLElement[];

        blocks.forEach((block) => {
          gsap.fromTo(
            block,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: block,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      }
    }, containerRef);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
      ctx.revert();
    };
  }, []);

  return (
    <div>
      <main ref={containerRef} className="">
        <div className="p-3 opacity-0">
          <Hero />

          <CaseWidget />
        </div>

        <div className="mt-[95px] lg:px-5 2xl:px-[100px]">
          <img src="/assets/AlphaVault.svg" alt="" className="w-full" />
        </div>

        <div className="px-5 lg:px-[60px] 2xl:px-[100px]">
          <div className="flex sm:flex-row flex-col gap-5 pr-[33px]">
            <h2 className="text-[80px] font-medium leading-[1.15]">
              A flagship fund for retail crypto investors
            </h2>

            <div className="flex 2xl:flex-row flex-col pt-5 gap-[30px] items-start 2xl:items-center">
              <p className="text-[#5D6172] text-xl">
                Alpha Vault is our flagship fund designed for retail crypto
                investors, offering access to professional digital asset
                management strategies with a minimum entry barrier of just 100
                USDT.
              </p>
              <Link href="/ihedge/preview/account">
                <Button
                  variant="ghost"
                  className="h-fit sm:pt-[5px] sm:pr-[5px] sm:pb-[4px] sm:pl-[34px] pt-[5px] pr-[5px] pb-[4px] pl-[34px] rounded-[20px] gap-[15px] bg-[#008BF5] shadow-[0px_10px_54px_0px_#008BF580] text-white hover:bg-[#008BF5]/90 hover:text-white"
                >
                  Invest now
                  <div className="p-[23px] bg-[#0074CC] rounded-[15px]">
                    <ArrowIcon className="w-6 h-6" />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="px-5 lg:px-[60px] 2xl:px-[100px]">
          <FeaturesGrid />
        </div>

        {/* How it works */}
        <HowItWorks />

        {/* DeFi & CeFi */}
        <DeFiCeFi />

        {/* FAQ */}
        <FAQ />

        <div className="p-3 mt-[150px]">
          <Hero2 />
        </div>
      </main>
    </div>
  );
}
