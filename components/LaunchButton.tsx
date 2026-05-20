"use client";

import Link from "next/link";

export default function LaunchButton() {
  return (
    <Link
      href="/mining"
      className="relative z-10 inline-block rounded-2xl bg-green-500 px-10 py-5 text-xl font-bold text-black shadow-[0_0_35px_rgba(34,197,94,0.75)] transition-all duration-300 hover:bg-green-400"
    >
      Launch App
    </Link>
  );
}