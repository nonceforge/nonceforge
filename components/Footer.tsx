"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h2 className="text-2xl font-black text-white">
            NONCE<span className="text-lime-400">FORGE</span>
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Fair Launch Browser Mining on Base.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-zinc-400">
          <a
            href="https://x.com/nonceforge"
            target="_blank"
            className="transition-colors duration-300 hover:text-lime-400"
          >
            Twitter/X
          </a>

          <a
            href="#"
            className="transition-colors duration-300 hover:text-lime-400"
          >
            GitHub (Soon)
          </a>

          <Link
            href="/docs"
            className="transition-colors duration-300 hover:text-lime-400"
          >
            Docs
          </Link>
        </div>
      </div>
    </footer>
  );
}