"use client";

import Link from "next/link";

export default function MiningTabs() {
  const tabs = [
    {
      href: "/mining",
      label: "Mining",
    },
    {
      href: "/leaderboard",
      label: "Leaderboard",
    },
    {
      href: "/tokenomics",
      label: "Tokenomics",
    },
    {
      href: "/docs",
      label: "Docs",
    },
  ];

  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 font-semibold text-gray-300 transition-all duration-300 hover:bg-green-400 hover:text-black hover:shadow-[0_0_35px_rgba(34,197,94,0.7)]"
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}