"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/iHedge/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, AccountCircleIcon } from "@/components/iHedge/ui";

interface Props {
  className?: string;
}

const LeftSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 right-full"
  >
    <path d="M0 0C13.2548 0 24 10.7452 24 24V0H0Z" fill="white" />
  </svg>
);

const RightSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 left-full"
  >
    <path d="M24 0C10.7452 0 0 10.7452 0 24V0H24Z" fill="white" />
  </svg>
);

export const PreviewNavbar: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeTab = pathname === "/ihedge/preview/account" ? "history" : "strategy";

  return (
    <header
      className={cn(className, "w-full px-5 xl:px-[100px] py-0 relative")}
    >
      <nav className="flex items-center w-full justify-between h-[66px]">
        {/* Logo Section */}
        <div className="flex sm:mt-5 items-center gap-1.25 w-[150px]">
          <Link href="/ihedge">
            <Image
              src="/assets/desktop-logo.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        {/* Desktop Center Buttons Section */}
        <div className="hidden md:flex items-start gap-0 h-full">
          <div className="relative">
            {activeTab === "strategy" && <LeftSVG />}
            <Link
              href="/ihedge/preview/dashboard"
              className={cn(
                "w-[184px] h-[66px] flex items-center justify-center gap-[10px] pt-4 pb-4 px-6 rounded-br-[20px] rounded-bl-[20px] text-base font-medium transition-all cursor-pointer",
                activeTab === "strategy"
                  ? "bg-white text-[#008BF5]"
                  : "bg-transparent text-[#5D6172] opacity-100",
              )}
            >
              <HomeIcon
                className={
                  activeTab === "strategy" ? "text-[#008BF5]" : "text-[#5D6172]"
                }
              />
              Dashboard
            </Link>
            {activeTab === "strategy" && <RightSVG />}
          </div>

          <div className="relative">
            {activeTab === "history" && <LeftSVG />}
            <Link
              href="/ihedge/preview/account"
              className={cn(
                "w-[184px] h-[66px] flex items-center justify-center gap-[10px] pt-4 pb-4 px-6 rounded-br-[20px] rounded-bl-[20px] text-base font-medium transition-all cursor-pointer",
                activeTab === "history"
                  ? "bg-white text-[#008BF5]"
                  : "bg-transparent text-[#5D6172] opacity-100",
              )}
            >
              <AccountCircleIcon />
              My Account
            </Link>
            {activeTab === "history" && <RightSVG />}
          </div>
        </div>

        {/* Right Section / Burger */}
        <div className="shrink-0 w-[150px] sm:mt-5 flex justify-end items-center">
          {/* Desktop Back Button */}
          <Link href="/ihedge" className="hidden md:block">
            <Button
              variant="default"
              className="text-[#47AFFF] hover:cursor-pointer"
            >
              Back
            </Button>
          </Link>

          {/* Mobile Burger Button */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "block w-6 h-0.5 bg-black transition-transform duration-200",
                isMenuOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-black transition-opacity duration-200",
                isMenuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-black transition-transform duration-200",
                isMenuOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[66px] left-0 w-full bg-[#1A1C24] border-t border-white/10 z-50">
          <ul className="flex flex-col p-4 gap-2">
            <li>
              <Link
                href="/ihedge/preview/dashboard"
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all",
                  activeTab === "strategy"
                    ? "bg-white text-[#008BF5]"
                    : "text-white hover:bg-white/5",
                )}
              >
                <HomeIcon />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/ihedge/preview/account"
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all",
                  activeTab === "history"
                    ? "bg-white text-[#008BF5]"
                    : "text-white hover:bg-white/5",
                )}
              >
                <AccountCircleIcon />
                My Account
              </Link>
            </li>
            <li className="mt-2 pt-2 border-t border-white/10">
              <Link
                href="/ihedge"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center gap-3 p-4 text-white hover:bg-white/5 rounded-xl transition-all"
              >
                Back
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

