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
            Currently taking inquiries for Q2 2026.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-right">
          <a
            href="mailto:enpuginius@gmail.com"
            className="text-2xl font-medium hover:text-primary transition-colors"
          >
            enpuginius@gmail.com
          </a>
          <div className="flex gap-6 justify-end text-sm text-gray-400 uppercase tracking-widest">
            <Link
              href="https://t.me/enguga"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
