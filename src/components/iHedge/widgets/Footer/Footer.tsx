import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer
      className={cn("w-full px-5 xl:px-[100px] py-12 mt-auto", className)}
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4">
        {/* Left Block */}
        <div className="flex flex-col items-center md:items-start gap-4 shrink-0">
          <Image
            src="/assets/desktop-logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-[100px] h-auto"
          />
          <p className="text-sm text-muted-foreground mt-2">
            © 2025 iHedge. All Rights Reserved.
          </p>
        </div>

        {/* Middle Block (Nav) */}
        <nav className="flex-1 flex justify-center w-full">
          <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-base font-medium">
            <li>
              <Link
                href="#"
                className="hover:text-project-accent transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-project-accent transition-colors"
              >
                Alpha Vault
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-project-accent transition-colors"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-project-accent transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-project-accent transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Block (Socials) */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-project-accent flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            aria-label="Telegram"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z" />
            </svg>
          </Link>

          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-project-accent flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </Link>

          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-project-accent flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            aria-label="X (Twitter)"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};
