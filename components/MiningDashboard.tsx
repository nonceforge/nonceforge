"use client";

import { useEffect, useMemo, useState } from "react";
import MiningActivity from "@/components/MiningActivity";
import {
  Activity,
  BarChart3,
  Cpu,
  FileCode2,
  Gem,
  Pickaxe,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export default function MiningDashboard() {
  const [selectedMiner, setSelectedMiner] = useState("web");
  const [isMining, setIsMining] = useState(false);

  const [hashrate, setHashrate] = useState(0);
  const [nonceChecked, setNonceChecked] = useState(0);

  const [contractStats, setContractStats] = useState({
    totalMined: 0,
    userValidNonce: 0,
    contractStatus: "Pending",
  });

  const epochs = [
    {
      epoch: 1,
      reward: 100,
      fee: 0.00005,
      allocation: 2_000_000,
      maxMintPerUser: 10,
      chance: 0.97,
    },
    {
      epoch: 2,
      reward: 75,
      fee: 0.00007,
      allocation: 3_000_000,
      maxMintPerUser: 25,
      chance: 0.95,
    },
    {
      epoch: 3,
      reward: 50,
      fee: 0.0001,
      allocation: 4_000_000,
      maxMintPerUser: 50,
      chance: 0.93,
    },
    {
      epoch: 4,
      reward: 25,
      fee: 0.00015,
      allocation: 6_000_000,
      maxMintPerUser: 100,
      chance: 0.9,
    },
    {
      epoch: 5,
      reward: 10,
      fee: 0.0002,
      allocation: 6_000_000,
      maxMintPerUser: 200,
      chance: 0.87,
    },
  ];

  const totalAllocation = epochs.reduce(
    (sum, item) => sum + item.allocation,
    0
  );

  const currentEpoch = useMemo(() => {
    let accumulated = 0;

    for (const item of epochs) {
      accumulated += item.allocation;

      if (contractStats.totalMined < accumulated) {
        return {
          ...item,
          epochStart: accumulated - item.allocation,
          epochEnd: accumulated,
        };
      }
    }

    const lastEpoch = epochs[epochs.length - 1];

    return {
      ...lastEpoch,
      epochStart: totalAllocation - lastEpoch.allocation,
      epochEnd: totalAllocation,
    };
  }, [contractStats.totalMined, totalAllocation]);

  const epochProgress =
    ((contractStats.totalMined - currentEpoch.epochStart) /
      (currentEpoch.epochEnd - currentEpoch.epochStart)) *
    100;

  const totalProgress = (contractStats.totalMined / totalAllocation) * 100;

  const userMintProgress =
    (contractStats.userValidNonce / currentEpoch.maxMintPerUser) * 100;

  const formatNumber = (value: number) => {
    return value.toLocaleString("en-US", {
      maximumFractionDigits: 2,
    });
  };

  const formatCompact = (value: number) => {
    return Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(value);
  };

  useEffect(() => {
    if (!isMining) {
      setHashrate(0);
      return;
    }

    if (contractStats.userValidNonce >= currentEpoch.maxMintPerUser) {
      setIsMining(false);
      return;
    }

    if (contractStats.totalMined >= totalAllocation) {
      setIsMining(false);
      return;
    }

    const interval = setInterval(() => {
      const randomHashrate = Math.floor(1200 + Math.random() * 4200);
      const randomNonce = Math.floor(300 + Math.random() * 1500);
      const foundValid = Math.random() > currentEpoch.chance;

      setHashrate(randomHashrate);
      setNonceChecked((prev) => prev + randomNonce);

      if (foundValid) {
        setContractStats((prev) => ({
          ...prev,
          totalMined: prev.totalMined + currentEpoch.reward,
          userValidNonce: prev.userValidNonce + 1,
        }));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [
    isMining,
    currentEpoch.chance,
    currentEpoch.reward,
    currentEpoch.maxMintPerUser,
    contractStats.userValidNonce,
    contractStats.totalMined,
    totalAllocation,
  ]);

  const minerCards = [
    {
      id: "web",
      label: "Browser Mining",
      title: "Web Miner",
      desc: "Genesis mining interface for public onboarding and early protocol participation.",
      status: "GENESIS",
      icon: Pickaxe,
      accent: "text-lime-300",
      border: "border-lime-400/40",
      bg: "bg-lime-400/10",
    },
    {
      id: "cpu",
      label: "CPU / VPS Mining",
      title: "Desktop / VPS Miner",
      desc: "Dedicated CPU miner planned after browser mining activation to expand participation without opening GPU dominance too early.",
      status: "NEXT",
      icon: Cpu,
      accent: "text-yellow-300",
      border: "border-yellow-400/30",
      bg: "bg-yellow-400/10",
    },
    {
      id: "gpu",
      label: "GPU Mining",
      title: "CUDA / OpenCL",
      desc: "High-performance GPU mining planned later after network stability, stronger liquidity, and wider miner participation.",
      status: "LATER",
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
      sub: `${currentEpoch.reward} NFG per valid nonce`,
      icon: Rocket,
      color: "text-lime-300",
    },
    {
      label: "Claim Fee",
      value: `${currentEpoch.fee} ETH`,
      sub: "Fee handled by smart contract",
      icon: Gem,
      color: "text-lime-300",
    },
    {
      label: "Hashrate",
      value: `${formatCompact(hashrate)} H/s`,
      sub: isMining ? "Browser miner running" : "Browser miner idle",
      icon: Zap,
      color: "text-white",
    },
    {
      label: "Network Mined",
      value: `${formatCompact(contractStats.totalMined)} NFG`,
      sub: "Global mined supply",
      icon: BarChart3,
      color: "text-white",
    },
    {
      label: "Your Mint",
      value: `${contractStats.userValidNonce}/${currentEpoch.maxMintPerUser}`,
      sub: `Max mint in Epoch ${currentEpoch.epoch}`,
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
              Mine valid nonces directly from your browser and earn NFG rewards.
              Epoch changes automatically based on total network mined supply.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => setIsMining(!isMining)}
                disabled={
                  contractStats.userValidNonce >= currentEpoch.maxMintPerUser ||
                  contractStats.totalMined >= totalAllocation
                }
                className={`rounded-full px-6 py-3 text-sm font-bold transition ${
                  contractStats.userValidNonce >= currentEpoch.maxMintPerUser ||
                  contractStats.totalMined >= totalAllocation
                    ? "cursor-not-allowed bg-zinc-800 text-zinc-500"
                    : isMining
                    ? "border border-red-400/30 bg-red-500/15 text-red-300 hover:bg-red-500/25"
                    : "bg-lime-400 text-black hover:bg-lime-300"
                }`}
              >
                {contractStats.totalMined >= totalAllocation
                  ? "All Epochs Completed"
                  : contractStats.userValidNonce >= currentEpoch.maxMintPerUser
                  ? "Epoch Mint Limit Reached"
                  : isMining
                  ? "Stop Mining"
                  : "Start Mining"}
              </button>

              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-6 py-3 text-sm font-semibold text-yellow-300">
                <FileCode2 size={16} />
                Smart Contract: {contractStats.contractStatus}
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
                    {isMining ? "Active Mining" : "Standby Mode"}
                  </h3>
                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-lime-300 ${
                    isMining
                      ? "border-lime-400/40 bg-lime-400/20 shadow-[0_0_35px_rgba(163,230,53,0.25)]"
                      : "border-lime-400/20 bg-lime-400/10"
                  }`}
                >
                  <Zap size={28} />
                </div>
              </div>

              <div
                className={`relative mx-auto flex h-52 w-52 items-center justify-center rounded-full border bg-black transition ${
                  isMining
                    ? "border-lime-400/50 shadow-[0_0_55px_rgba(163,230,53,0.2)]"
                    : "border-lime-400/20"
                }`}
              >
                <div className="absolute h-40 w-40 rounded-full border border-lime-400/20" />
                <div className="absolute h-28 w-28 rounded-full border border-lime-400/30" />

                <div
                  className={`absolute h-16 w-16 rounded-full bg-lime-400/20 blur-xl ${
                    isMining ? "animate-pulse" : ""
                  }`}
                />

                <Pickaxe className="relative text-lime-300" size={48} />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-zinc-500">Nonce Checked</p>
                  <p className="mt-1 font-bold text-white">
                    {formatCompact(nonceChecked)}
                  </p>
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
              <p className="text-sm text-zinc-400">Epoch Allocation Progress</p>

              <h3 className="mt-1 text-xl font-bold">
                Epoch {currentEpoch.epoch}:{" "}
                {formatNumber(
                  contractStats.totalMined - currentEpoch.epochStart
                )}{" "}
                / {formatNumber(currentEpoch.allocation)} NFG
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
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-zinc-950/60 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-400">Your Mint Progress</p>

              <h3 className="mt-1 text-xl font-bold">
                {contractStats.userValidNonce}/{currentEpoch.maxMintPerUser}{" "}
                Valid Nonce
              </h3>
            </div>

            <p className="text-sm font-semibold text-lime-300">
              {Math.min(userMintProgress, 100).toFixed(1)}%
            </p>
          </div>

          <div className="h-4 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-lime-400 transition-all duration-700"
              style={{
                width: `${Math.min(userMintProgress, 100)}%`,
              }}
            />
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-zinc-950/60 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-400">Total Network Progress</p>

              <h3 className="mt-1 text-xl font-bold">
                {formatNumber(contractStats.totalMined)} /{" "}
                {formatNumber(totalAllocation)} NFG
              </h3>
            </div>

            <p className="text-sm font-semibold text-lime-300">
              {Math.min(totalProgress, 100).toFixed(1)}%
            </p>
          </div>

          <div className="h-4 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-lime-400 transition-all duration-700"
              style={{
                width: `${Math.min(totalProgress, 100)}%`,
              }}
            />
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
                ["Wallet Connect", "Ready"],
                ["Smart Contract", "Pending"],
                ["Base Mainnet + Liquidity", "Pending"],
                ["Browser Mining", "Pending"],
                ["CPU / VPS Miner", "Planned"],
                ["GPU / CUDA Miner", "Later"],
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
                        : status === "Later"
                        ? "font-semibold text-cyan-300"
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