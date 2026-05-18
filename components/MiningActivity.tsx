"use client";

import { useEffect, useState } from "react";

type MinerActivity = {
  wallet: string;
  hashrate: number;
  validNonce: number;
  lastNonce?: string;
  status: "mining" | "found";
};

export default function MiningActivity() {
  const [miners, setMiners] = useState<MinerActivity[]>([]);

  useEffect(() => {
    async function loadMiners() {
      try {
        const res = await fetch("/api/mining/activity", {
          cache: "no-store",
        });

        if (!res.ok) return;

        const data = await res.json();
        setMiners(data.miners || []);
      } catch (error) {
        console.error("Failed to load mining activity", error);
      }
    }

    loadMiners();

    const interval = setInterval(loadMiners, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-black/40 p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">
            Live Mining Activity
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            Active miners, hashrate, and valid nonce submissions will appear
            here once live mining is connected.
          </p>
        </div>

        <div className="rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-bold text-green-400">
          LIVE
        </div>
      </div>

      {miners.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-gray-400">
          No active miners yet. Activity will appear automatically after mining
          goes live.
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-4 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-gray-300">
            <div>Wallet</div>
            <div>Hashrate</div>
            <div>Valid Nonce</div>
            <div className="text-right">Status</div>
          </div>

          {miners.map((miner) => (
            <div
              key={miner.wallet}
              className="grid grid-cols-4 border-b border-white/5 px-5 py-4 text-sm"
            >
              <div className="font-mono text-gray-300">{miner.wallet}</div>

              <div className="font-bold text-white">
                {miner.hashrate.toLocaleString()} H/s
              </div>

              <div className="font-bold text-green-400">
                {miner.validNonce}
              </div>

              <div
                className={`text-right font-bold ${
                  miner.status === "found"
                    ? "text-yellow-400"
                    : "text-green-400"
                }`}
              >
                {miner.status === "found" ? "Nonce Found" : "Mining"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}