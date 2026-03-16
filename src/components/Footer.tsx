"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 bg-dark border-t border-white/5" id="contact">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <h2 className="text-4xl font-extrabold mb-4">
            Let&apos;s build <br /> something{" "}
            <span className="text-primary">extraordinary.</span>
          </h2>
          <p className="text-gray-500">
            Currently taking inquiries for Q3 2024.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-right">
          <a
            href="mailto:hello@creative.dev"
            className="text-2xl font-medium hover:text-primary transition-colors"
          >
            hello@creative.dev
          </a>
          <div className="flex gap-6 justify-end text-sm text-gray-400 uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Dribbble
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-10 border-t border-white/5 text-gray-600 text-xs flex justify-between">
        <p>© 2024 Creative Developer UI Specialist. All Rights Reserved.</p>
        <p>Designed with Intent.</p>
      </div>
    </footer>
  );
}
