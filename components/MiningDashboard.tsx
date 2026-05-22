"use client";

import { useMemo, useState } from "react";
import MiningActivity from "@/components/MiningActivity";
import {
  Activity,
  BarChart3,
  Cpu,
  Gauge,
  Gem,
  Pickaxe,
  Radio,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export default function MiningDashboard() {
  const [selectedMiner, setSelectedMiner] = useState("web");

  const totalMined = 0;
  const hashrate = 0;
  const nonceChecked = 0;
  const validNonce = 0;

  const formatNumber = (value: number) => value.toLocaleString("en-US");

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

  const minerCards = [
    {
      id: "web",
      label: "Browser Mining",
      title: "Web Miner",
      desc: "Lightweight browser mining interface for early protocol onboarding.",
      status: "GENESIS READY",
      icon: Pickaxe,
      accent: "text-lime-300",
      border: "border-lime-400/40",
      bg: "bg-lime-400/10",
    },
    {
      id: "cpu",
      label: "CPU Mining",
      title: "Desktop / VPS",
      desc: "Dedicated CPU mining client planned for future protocol upgrades.",
      status: "PLANNED",
      icon: Cpu,
      accent: "text-yellow-300",
      border: "border-yellow-400/30",
      bg: "bg-yellow-400/10",
    },
    {
      id: "gpu",
      label: "GPU Mining",
      title: "CUDA / OpenCL",
      desc: "High-performance GPU mining infrastructure for advanced miners.",
      status: "PLANNED",
      icon: Server,
      accent: "text-cyan-300",
      border: "border-cyan-400/30",
      bg: "bg-cyan-400/10",
    },
  ];

  const stats = [
    {
      label: "Current Epoch",
      value: `Epoch ${currentEpoch.epoch}`,
      sub: `Reward ${currentEpoch.reward} NFG`,
      icon: Rocket,
      color: "text-lime-300",
    },
    {
      label: "Hashrate",
      value: `${formatNumber(hashrate)} H/s`,
      sub: "Browser miner idle",
      icon: Gauge,
      color: "text-white",
    },
    {
      label: "Mining Status",
      value: "Pending",
      sub: "Waiting for contract launch",
      icon: Radio,
      color: "text-yellow-300",
    },
    {
      label: "Total Mined",
      value: formatNumber(totalMined),
      sub: "Total mined rewards",
      icon: Gem,
      color: "text-white",
    },
    {
      label: "Nonce Checked",
      value: formatNumber(nonceChecked),
      sub: "Total nonce attempts",
      icon: BarChart3,
      color: "text-white",
    },
    {
      label: "Valid Nonce",
      value: formatNumber(validNonce),
      sub: "Accepted nonce results",
      icon: ShieldCheck,
      color: "text-lime-300",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-400/25 bg-lime-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">
              <Sparkles size={14} />
              NonceForge Mining
            </div>

            <h1 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
              Mining Dashboard
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              Browser mining interface is preparing for launch. Mining will be
              enabled after smart contract deployment, nonce validation, and
              reward verification are live.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                disabled
                className="cursor-not-allowed rounded-full bg-zinc-800 px-6 py-3 text-sm font-bold text-zinc-500"
              >
                Mining Launch Soon
              </button>

              <div className="rounded-full border border-lime-400/20 bg-lime-400/10 px-6 py-3 text-sm font-semibold text-lime-300">
                Smart Contract Pending
              </div>
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-white/10 bg-zinc-950/70 p-6 shadow-2xl">
            <div className="absolute inset-0 rounded-[2rem] bg-lime-400/5" />

            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-500">Mining Core</p>
                  <h3 className="text-2xl font-bold text-lime-300">
                    Standby Mode
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lime-300">
                  <Zap size={28} />
                </div>
              </div>

              <div className="relative mx-auto flex h-52 w-52 items-center justify-center rounded-full border border-lime-400/20 bg-black">
                <div className="absolute h-40 w-40 rounded-full border border-lime-400/20" />
                <div className="absolute h-28 w-28 rounded-full border border-lime-400/30" />
                <div className="absolute h-16 w-16 rounded-full bg-lime-400/20 blur-xl" />

                <Pickaxe className="relative text-lime-300" size={48} />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-zinc-500">Difficulty</p>
                  <p className="mt-1 font-bold text-white">Dynamic</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-zinc-500">Network</p>
                  <p className="mt-1 font-bold text-white">Base Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {minerCards.map((miner) => {
            const Icon = miner.icon;
            const active = selectedMiner === miner.id;

            return (
              <button
                key={miner.id}
                onClick={() => setSelectedMiner(miner.id)}
                className={`rounded-3xl border p-6 text-left transition-all duration-300 ${
                  active
                    ? `${miner.border} ${miner.bg} shadow-[0_0_35px_rgba(163,230,53,0.18)]`
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <p
                    className={`text-xs uppercase tracking-[0.25em] ${miner.accent}`}
                  >
                    {miner.label}
                  </p>

                  <Icon className={miner.accent} size={26} />
                </div>

                <h3 className="text-2xl font-bold">{miner.title}</h3>

                <p className="mt-3 min-h-[66px] text-sm leading-6 text-zinc-400">
                  {miner.desc}
                </p>

                <div
                  className={`mt-5 inline-flex rounded-full border px-4 py-2 text-xs font-semibold ${miner.border} ${miner.bg} ${miner.accent}`}
                >
                  {miner.status}
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-zinc-950/60 p-6 transition hover:border-lime-400/20"
              >
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm text-zinc-400">{item.label}</p>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-lime-300">
                    <Icon size={21} />
                  </div>
                </div>

                <h3 className={`text-3xl font-black md:text-4xl ${item.color}`}>
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-zinc-500">{item.sub}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-zinc-950/60 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-400">Epoch Progress</p>
              <h3 className="mt-1 text-xl font-bold">
                Epoch {currentEpoch.epoch} Reward Window
              </h3>
            </div>

            <p className="text-sm font-semibold text-lime-300">
              {Math.min(epochProgress, 100).toFixed(1)}%
            </p>
          </div>

          <div className="h-4 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-lime-400 transition-all duration-700"
              style={{
                width: `${Math.min(epochProgress, 100)}%`,
              }}
            />
          </div>

          <div className="mt-4 flex flex-wrap justify-between gap-3 text-sm text-zinc-500">
            <p>Start: {formatNumber(previousLimit)} mined</p>
            <p>End: {formatNumber(currentEpoch.maxMined)} mined</p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 p-6">
            <div className="mb-5 flex items-center gap-3">
              <Activity className="text-lime-300" size={24} />
              <h3 className="text-xl font-bold">Protocol Checklist</h3>
            </div>

            <div className="space-y-3">
              {[
                ["Landing Interface", "Ready"],
                ["Mining UI", "Ready"],
                ["Smart Contract", "Pending"],
                ["Nonce Validation", "Pending"],
                ["Reward Claim", "Pending"],
              ].map(([label, status]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm"
                >
                  <span className="text-zinc-400">{label}</span>

                  <span
                    className={
                      status === "Ready"
                        ? "font-semibold text-lime-300"
                        : "font-semibold text-yellow-300"
                    }
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <MiningActivity />
        </div>
      </div>
    </section>
  );
}