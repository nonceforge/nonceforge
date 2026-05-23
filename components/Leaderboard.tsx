"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  Crown,
  Medal,
  Pickaxe,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
  Wallet,
  Zap,
} from "lucide-react";

const miners = Array.from({ length: 25 }, (_, i) => ({
  rank: i + 1,
  wallet: "0x0000...0000",
  mined: 0,
  validNonce: 0,
  epoch: "-",
  status: "Waiting",
}));

export default function Leaderboard() {
  const [search, setSearch] = useState("");

  const filteredMiners = useMemo(() => {
    return miners.filter((miner) =>
      miner.wallet.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const formatNumber = (value: number) => {
    return value.toLocaleString("en-US");
  };

  const totalMiners = miners.filter((miner) => miner.wallet !== "0x0000...0000").length;
  const totalMined = miners.reduce((sum, miner) => sum + miner.mined, 0);
  const totalNonce = miners.reduce((sum, miner) => sum + miner.validNonce, 0);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative z-10 space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 shadow-2xl">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime-400/25 bg-lime-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">
                <Sparkles size={14} />
                NonceForge Ranking
              </div>

              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Mining Leaderboard
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
                Live miner ranking based on valid nonce, mined rewards, and
                wallet activity. Data is prepared to sync directly from the
                smart contract once mining goes live.
              </p>
            </div>

            <div className="rounded-3xl border border-lime-400/20 bg-lime-400/10 p-5">
              <div className="mb-3 flex items-center gap-2 text-lime-300">
                <Trophy size={20} />
                <p className="text-sm font-semibold">Leaderboard Status</p>
              </div>

              <p className="text-2xl font-black text-white">Pending</p>

              <p className="mt-2 text-xs text-zinc-400">
                Waiting for contract data
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["Total Miners", formatNumber(totalMiners), Wallet],
              ["Valid Nonces", formatNumber(totalNonce), ShieldCheck],
              ["Total Mined", `${formatNumber(totalMined)} NFG`, Pickaxe],
              ["Data Source", "Contract", Activity],
            ].map(([label, value, Icon]: any) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lime-300">
                  <Icon size={21} />
                </div>

                <p className="text-sm text-zinc-500">{label}</p>

                <h3 className="mt-2 text-2xl font-black text-white">
                  {value}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 shadow-2xl">
          <div className="flex flex-col gap-4 border-b border-white/10 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-lime-300">
                Top 25 Miners
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Ranking will update automatically from on-chain mining results.
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search wallet..."
                className="w-full rounded-full border border-white/10 bg-black/40 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400/40"
              />
            </div>
          </div>

          <div className="hidden grid-cols-[0.7fr_1.8fr_1fr_1fr_1fr_1fr] border-b border-white/10 px-6 py-4 text-sm font-semibold text-zinc-500 md:grid">
            <div>Rank</div>
            <div>Wallet</div>
            <div>Valid Nonce</div>
            <div>Mined</div>
            <div>Epoch</div>
            <div className="text-right">Status</div>
          </div>

          <div className="max-h-[720px] divide-y divide-white/5 overflow-y-auto">
            {filteredMiners.map((miner) => (
              <div
                key={miner.rank}
                className="grid gap-4 px-6 py-5 transition hover:bg-white/[0.03] md:grid-cols-[0.7fr_1.8fr_1fr_1fr_1fr_1fr] md:items-center"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl border ${
                      miner.rank === 1
                        ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-300"
                        : miner.rank === 2
                        ? "border-zinc-300/30 bg-zinc-300/10 text-zinc-200"
                        : miner.rank === 3
                        ? "border-orange-400/30 bg-orange-400/10 text-orange-300"
                        : "border-white/10 bg-white/[0.03] text-zinc-400"
                    }`}
                  >
                    {miner.rank === 1 ? (
                      <Crown size={20} />
                    ) : miner.rank <= 3 ? (
                      <Medal size={20} />
                    ) : (
                      <span className="text-sm font-bold">#{miner.rank}</span>
                    )}
                  </div>

                  <span className="font-bold text-lime-300">
                    #{miner.rank}
                  </span>
                </div>

                <div>
                  <p className="mb-1 text-xs text-zinc-500 md:hidden">
                    Wallet
                  </p>

                  <p className="font-mono text-sm text-zinc-300">
                    {miner.wallet}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs text-zinc-500 md:hidden">
                    Valid Nonce
                  </p>

                  <p className="font-semibold text-white">
                    {formatNumber(miner.validNonce)}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs text-zinc-500 md:hidden">
                    Mined
                  </p>

                  <p className="font-semibold text-white">
                    {formatNumber(miner.mined)} NFG
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs text-zinc-500 md:hidden">
                    Epoch
                  </p>

                  <p className="font-semibold text-zinc-300">
                    {miner.epoch}
                  </p>
                </div>

                <div className="flex justify-start md:justify-end">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-semibold text-yellow-300">
                    <Zap size={14} />
                    {miner.status}
                  </div>
                </div>
              </div>
            ))}

            {filteredMiners.length === 0 && (
              <div className="px-6 py-12 text-center">
                <p className="text-sm font-semibold text-white">
                  Wallet not found
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  Try another wallet address.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-lime-300">
                On-chain Ranking System
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
                Leaderboard will use confirmed smart contract data: wallet
                address, valid nonce count, mined NFG, active epoch, and miner
                status.
              </p>
            </div>

            <div className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-3 text-sm font-semibold text-yellow-300">
              Data Source: Pending Contract
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}