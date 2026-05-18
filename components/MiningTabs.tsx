"use client";

import { useState } from "react";

import MiningDashboard from "@/components/MiningDashboard";
import Leaderboard from "@/components/Leaderboard";
import Tokenomics from "@/components/Tokenomics";
import DocsContent from "@/components/DocsContent";

export default function MiningTabs() {
  const [activeTab, setActiveTab] = useState("mining");

  const tabs = [
    { id: "mining", label: "Mining" },
    { id: "leaderboard", label: "Leaderboard" },
    { id: "tokenomics", label: "Tokenomics" },
    { id: "docs", label: "Docs" },
  ];

  return (
    <section>
      <div className="mb-8 flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-2xl px-5 py-3 font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-green-400 text-black shadow-[0_0_35px_rgba(34,197,94,0.7)]"
                : "border border-white/10 bg-white/[0.03] text-gray-300 hover:bg-white/[0.08]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        {activeTab === "mining" && <MiningDashboard />}

        {activeTab === "leaderboard" && <Leaderboard />}

        {activeTab === "tokenomics" && <Tokenomics />}

        {activeTab === "docs" && <DocsContent />}
      </div>
    </section>
  );
}