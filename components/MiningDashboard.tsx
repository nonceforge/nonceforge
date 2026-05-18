"use client";

import { useMemo, useState } from "react";
import MiningActivity from "@/components/MiningActivity";

export default function MiningDashboard() {
  const [selectedMiner, setSelectedMiner] = useState("web");

  const totalMined = 0;
  const hashrate = 0;
  const nonceChecked = 0;
  const validNonce = 0;

  const formatNumber = (value: number) => {
    return value.toLocaleString("en-US");
  };

  const epochs = [
    { epoch: 1, maxMined: 1000, reward: 100 },
    { epoch: 2, maxMined: 3000, reward: 75 },
    { epoch: 3, maxMined: 6000, reward: 50 },
    { epoch: 4, maxMined: 10000, reward: 25 },
    { epoch: 5, maxMined: 15000, reward: 10 },
  ];

  const currentEpoch = useMemo(() => {
    return epochs.find((item) => totalMined <= item.maxMined) ?? epochs[4];
  }, [totalMined]);

  const previousLimit =
    currentEpoch.epoch === 1 ? 0 : epochs[currentEpoch.epoch - 2].maxMined;

  const epochProgress =
    ((totalMined - previousLimit) /
      (currentEpoch.maxMined - previousLimit)) *
    100;

  return (
    <section className="w-full">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
          NonceForge Mining
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Mining Dashboard
        </h2>

        <p className="mt-3 max-w-2xl text-gray-400">
          Browser mining interface is preparing for launch. Mining will be
          enabled after smart contract and nonce validation are live.
        </p>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <button
          onClick={() => setSelectedMiner("web")}
          className={`rounded-3xl border p-6 text-left transition-all duration-300 ${
            selectedMiner === "web"
              ? "border-green-400 bg-green-400/10 shadow-[0_0_40px_rgba(34,197,94,0.4)]"
              : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-green-400">
            Browser Mining
          </p>

          <h3 className="mt-3 text-2xl font-bold">Web Miner</h3>

          <p className="mt-3 text-sm text-gray-400">
            Lightweight browser-based mining designed for easy onboarding.
          </p>

          <div className="mt-5 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-semibold text-green-400">
            GENESIS READY
          </div>
        </button>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 opacity-70">
          <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
            CPU Mining
          </p>

          <h3 className="mt-3 text-2xl font-bold">Desktop / VPS</h3>

          <p className="mt-3 text-sm text-gray-400">
            Dedicated desktop and VPS mining clients are planned for future
            protocol upgrades.
          </p>

          <div className="mt-5 inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-semibold text-yellow-400">
            PLANNED
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 opacity-70">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            GPU Mining
          </p>

          <h3 className="mt-3 text-2xl font-bold">CUDA / OpenCL</h3>

          <p className="mt-3 text-sm text-gray-400">
            High-performance GPU mining infrastructure is planned for advanced
            miners.
          </p>

          <div className="mt-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-400">
            PLANNED
          </div>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-4">
        <button
          disabled
          className="cursor-not-allowed rounded-2xl bg-zinc-800 px-7 py-4 font-bold text-zinc-500"
        >
          Mining Launch Soon
        </button>

        <div className="rounded-2xl border border-green-400/20 bg-green-400/5 px-7 py-4 text-sm font-semibold text-green-400">
          Smart Contract Pending
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
          <p className="text-sm text-gray-400">Current Epoch</p>

          <h3 className="mt-3 text-4xl font-bold text-green-400">
            Epoch {currentEpoch.epoch}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Limit: {formatNumber(currentEpoch.maxMined)} mined
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
          <p className="text-sm text-gray-400">Hashrate</p>

          <h3 className="mt-3 text-4xl font-bold text-white">
            {formatNumber(hashrate)} H/s
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Browser mining not active yet
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
          <p className="text-sm text-gray-400">Mining Status</p>

          <h3 className="mt-3 text-4xl font-bold text-yellow-400">
            Pending
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Waiting for contract launch
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
          <p className="text-sm text-gray-400">Total Mined</p>

          <h3 className="mt-3 text-4xl font-bold text-white">
            {formatNumber(totalMined)}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Total mined rewards
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
          <p className="text-sm text-gray-400">Nonce Checked</p>

          <h3 className="mt-3 text-4xl font-bold text-white">
            {formatNumber(nonceChecked)}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Total nonce attempts
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
          <p className="text-sm text-gray-400">Valid Nonce</p>

          <h3 className="mt-3 text-4xl font-bold text-green-400">
            {formatNumber(validNonce)}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Accepted nonce results
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-black/40 p-6">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm text-gray-400">Epoch Progress</p>

          <p className="text-sm font-semibold text-green-400">
            {Math.min(epochProgress, 100).toFixed(1)}%
          </p>
        </div>

        <div className="h-4 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-green-400 transition-all duration-700"
            style={{
              width: `${Math.min(epochProgress, 100)}%`,
            }}
          />
        </div>

        <p className="mt-3 text-sm text-gray-500">
          Epoch {currentEpoch.epoch} ends at{" "}
          {formatNumber(currentEpoch.maxMined)} mined.
        </p>
      </div>

      <MiningActivity />
    </section>
  );
}