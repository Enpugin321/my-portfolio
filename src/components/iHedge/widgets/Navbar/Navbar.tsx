"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/iHedge/ui";

interface Props {
  className?: string;
}

export const Navbar: React.FC<Props> = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={cn(className, "w-full px-5 xl:px-[100px] py-[11px]")}>
      <nav className="flex items-center w-full justify-between">
        {/* Logo */}
        {/* Burger button (mobile / small tablet) */}

        <div className="md:hidden flex items-center gap-1.25">
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "block w-6 h-0.5 bg-current transition-transform duration-200",
                menuOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-current transition-opacity duration-200",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-current transition-transform duration-200",
                menuOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
          <div className="md:hidden mt-1.5 sm:mt-0">
            <Image
              src="/assets/desktop-logo.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Desktop / Laptop nav links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-16 text-base lg:text-xl">
          <li className="mr-5">
            <Image
              src="/assets/desktop-logo.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Alpha Vault</a>
          </li>
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>

        {/* Desktop / Laptop CTA */}
        <div className="shrink-0">
          <Button variant="default" className="text-[#47AFFF]">
            Connect wallet
          </Button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 py-4 text-lg">
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              About us
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Alpha Vault
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              How it works
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};
