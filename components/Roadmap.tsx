"use client";

import {
  CheckCircle2,
  Clock3,
  Cpu,
  Gem,
  Globe,
  Image,
  Layers,
  Pickaxe,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Trophy,
  Wallet,
  Zap,
} from "lucide-react";

const roadmap = [
  {
    phase: "Phase 01",
    title: "Genesis Preview",
    description:
      "Build the first public interface including landing page, mining dashboard, tokenomics, docs, leaderboard, and roadmap.",
    status: "COMPLETED",
    icon: Rocket,
    color: "text-lime-300",
    border: "border-lime-400/20",
    bg: "bg-lime-400/10",
  },
  {
    phase: "Phase 02",
    title: "Smart Contract Core",
    description:
      "Develop NFG token contract, nonce validation, epoch emission, max supply protection, claim logic, and reward verification.",
    status: "IN PROGRESS",
    icon: ShieldCheck,
    color: "text-yellow-300",
    border: "border-yellow-400/20",
    bg: "bg-yellow-400/10",
  },
  {
    phase: "Phase 03",
    title: "Base Mainnet Launch + Liquidity",
    description:
      "Deploy NonceForge on Base Mainnet and activate protocol liquidity support directly from the launch structure.",
    status: "PLANNED",
    icon: Globe,
    color: "text-cyan-300",
    border: "border-cyan-400/20",
    bg: "bg-cyan-400/10",
  },
  {
    phase: "Phase 04",
    title: "Browser Mining Activation",
    description:
      "Enable public browser mining, wallet connection, valid nonce submission, reward claiming, and live epoch tracking.",
    status: "PLANNED",
    icon: Pickaxe,
    color: "text-white",
    border: "border-white/10",
    bg: "bg-white/[0.03]",
  },
  {
    phase: "Phase 05",
    title: "CPU / VPS Miner",
    description:
      "Release a dedicated CPU miner for desktop and VPS users to support stronger participation without opening GPU dominance too early.",
    status: "PLANNED",
    icon: Cpu,
    color: "text-white",
    border: "border-white/10",
    bg: "bg-white/[0.03]",
  },
  {
    phase: "Phase 06",
    title: "On-chain Leaderboard",
    description:
      "Connect leaderboard ranking directly to smart contract data including wallet rank, valid nonce count, mined rewards, and active epoch.",
    status: "PLANNED",
    icon: Trophy,
    color: "text-white",
    border: "border-white/10",
    bg: "bg-white/[0.03]",
  },
  {
    phase: "Phase 07",
    title: "GPU / CUDA Infrastructure",
    description:
      "Introduce CUDA/OpenCL mining after the network is more mature, liquidity is stronger, and early mining fairness is protected.",
    status: "PLANNED",
    icon: Server,
    color: "text-white",
    border: "border-white/10",
    bg: "bg-white/[0.03]",
  },
  {
    phase: "Phase 08",
    title: "NonceForge NFT Launch",
    description:
      "Launch the NonceForge NFT collection as an ecosystem identity layer for miners, early users, and future utilities.",
    status: "PLANNED",
    icon: Image,
    color: "text-white",
    border: "border-white/10",
    bg: "bg-white/[0.03]",
  },
  {
    phase: "Phase 09",
    title: "Ecosystem Expansion",
    description:
      "Expand NonceForge with community utilities, mining upgrades, NFT integrations, ecosystem partnerships, and protocol improvements.",
    status: "PLANNED",
    icon: Layers,
    color: "text-white",
    border: "border-white/10",
    bg: "bg-white/[0.03]",
  },
];

export default function Roadmap() {
  return (
    <section className="relative w-full overflow-hidden text-white">
      <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative z-10 space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 shadow-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/25 bg-lime-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">
            <Sparkles size={14} />
            NonceForge Roadmap
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight md:text-6xl">
            Protocol Growth Roadmap
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-8 text-zinc-400 md:text-lg">
            NonceForge roadmap focuses on direct Base Mainnet deployment,
            browser mining, CPU/VPS mining, on-chain ranking, GPU expansion,
            NFT ecosystem growth, and long-term protocol development.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-lime-400/20 bg-lime-400/10 p-5">
              <p className="text-sm text-zinc-400">Launch Strategy</p>
              <h3 className="mt-2 text-xl font-black text-lime-300">
                Mainnet First
              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-zinc-400">Mining Rollout</p>
              <h3 className="mt-2 text-xl font-black text-white">
                Browser → CPU → GPU
              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-zinc-400">Expansion Layer</p>
              <h3 className="mt-2 text-xl font-black text-white">
                NFT Ecosystem
              </h3>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-lime-400/20 md:block" />

          <div className="space-y-5">
            {roadmap.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.phase}
                  className="relative grid gap-5 md:grid-cols-[64px_1fr]"
                >
                  <div className="hidden md:flex">
                    <div
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border ${item.border} ${item.bg} ${item.color}`}
                    >
                      <Icon size={24} />
                    </div>
                  </div>

                  <div
                    className={`rounded-[2rem] border ${item.border} ${item.bg} p-6 transition hover:border-lime-400/30`}
                  >
                    <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className={`text-sm font-bold ${item.color}`}>
                          {item.phase}
                        </p>

                        <h3 className="mt-2 text-2xl font-black text-white">
                          {item.title}
                        </h3>
                      </div>

                      <div
                        className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold ${item.border} ${item.bg} ${item.color}`}
                      >
                        {item.status === "COMPLETED" ? (
                          <CheckCircle2 size={14} />
                        ) : item.status === "IN PROGRESS" ? (
                          <Clock3 size={14} />
                        ) : (
                          <Rocket size={14} />
                        )}

                        {item.status}
                      </div>
                    </div>

                    <p className="max-w-4xl text-sm leading-7 text-zinc-400 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 shadow-2xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-300">
                Roadmap Note
              </p>

              <h3 className="mt-3 text-2xl font-black text-white">
                No fixed dates. Milestones move by readiness.
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
                CPU/VPS mining is planned before GPU mining to keep early mining
                more balanced. GPU/CUDA comes later so browser and CPU miners
                are not immediately dominated.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-5 py-3 text-sm font-semibold text-lime-300">
              <Zap size={16} />
              Mainnet Roadmap
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}