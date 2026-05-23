import {
  AlertTriangle,
  Blocks,
  Cpu,
  FileText,
  Gauge,
  Globe2,
  Layers,
  Pickaxe,
  Rocket,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react";

export default function DocsContent() {
  const stats = [
    ["Network", "Base Mainnet", Globe2],
    ["Token Symbol", "NFG", Blocks],
    ["Max Supply", "21,000,000 NFG", ShieldCheck],
    ["Mining Model", "Proof-of-Work", Pickaxe],
  ];

  const miningSteps = [
    ["Connect Wallet", "User connects a Base-compatible wallet."],
    ["Start Miner", "Browser miner begins searching valid nonce."],
    ["Find Nonce", "Nonce is checked against the active epoch target."],
    ["Submit Proof", "Valid proof is submitted to the smart contract."],
    ["Claim Reward", "Eligible reward is minted after verification."],
  ];

  const protocolCards = [
    {
      title: "Fair Launch",
      text: "NFG is designed around mining participation instead of presale-based distribution.",
      icon: Rocket,
    },
    {
      title: "Fixed Supply",
      text: "The protocol is structured around a maximum supply of 21,000,000 NFG.",
      icon: ShieldCheck,
    },
    {
      title: "Epoch Emission",
      text: "Rewards decrease across epochs while allocation windows control emission flow.",
      icon: Layers,
    },
  ];

  const minerModes = [
    {
      title: "Browser Mining",
      status: "PREVIEW",
      text: "Accessible mining interface for early user onboarding.",
      color: "text-lime-300",
      border: "border-lime-400/20",
      bg: "bg-lime-400/10",
    },
    {
      title: "CPU Mining",
      status: "PLANNED",
      text: "Dedicated desktop and VPS miner planned for future expansion.",
      color: "text-yellow-300",
      border: "border-yellow-400/20",
      bg: "bg-yellow-400/10",
    },
    {
      title: "GPU Mining",
      status: "PLANNED",
      text: "High-performance CUDA/OpenCL mining planned for advanced miners.",
      color: "text-cyan-300",
      border: "border-cyan-400/20",
      bg: "bg-cyan-400/10",
    },
  ];

  return (
    <div className="relative overflow-hidden text-white">
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative space-y-8">
        <section className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 shadow-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/25 bg-lime-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">
            <FileText size={14} />
            NonceForge Documentation
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight md:text-6xl">
            Fair Launch Browser Mining Protocol
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-8 text-zinc-400 md:text-lg">
            NonceForge is a proof-of-work mining protocol on Base designed for
            fair launch participation, fixed supply distribution, epoch-based
            emissions, and transparent on-chain reward verification.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <div className="inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-3 text-sm font-semibold text-yellow-300">
              Genesis Preview
            </div>

            <div className="inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-5 py-3 text-sm font-semibold text-lime-300">
              Base Ready
            </div>

            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-zinc-300">
              Smart Contract Pending
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-4">
          {stats.map(([label, value, Icon]: any) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lime-300">
                <Icon size={21} />
              </div>

              <p className="text-sm text-zinc-500">{label}</p>

              <h3 className="mt-2 text-xl font-black text-white">{value}</h3>
            </div>
          ))}
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 shadow-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">
            Protocol Overview
          </p>

          <h2 className="text-3xl font-black tracking-tight">
            How NonceForge Works
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-400 md:text-base">
            Miners compete to discover valid nonces. A valid nonce must satisfy
            the active smart contract validation rule for the current epoch.
            Once verified, the miner becomes eligible to claim NFG rewards.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {protocolCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lime-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 shadow-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">
            Mining Flow
          </p>

          <h2 className="text-3xl font-black tracking-tight">
            From Wallet to Reward
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-5">
            {miningSteps.map(([title, text], index) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-sm font-bold text-lime-300">
                  Step {index + 1}
                </p>

                <h3 className="mt-3 text-lg font-black text-white">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-3xl border border-lime-400/20 bg-lime-400/5 p-6">
            <pre className="overflow-x-auto text-sm leading-7 text-lime-300">
{`wallet + nonce + epochSeed
        ↓
hash validation
        ↓
hash must satisfy target
        ↓
valid proof submitted
        ↓
reward eligibility confirmed`}
            </pre>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 shadow-2xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lime-300">
              <Gauge size={24} />
            </div>

            <h2 className="text-2xl font-black text-white">
              Epoch-Based Emission
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              NonceForge uses multiple emission epochs. Each epoch has its own
              reward amount, allocation window, and mint limit. Epoch transition
              is designed to follow total mined supply from the smart contract,
              not local frontend state.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 shadow-2xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lime-300">
              <Wallet size={24} />
            </div>

            <h2 className="text-2xl font-black text-white">
              Fee & Liquidity Flow
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Mining claim fees are intended to be handled by the smart contract.
              The fee mechanism is designed to support protocol liquidity and
              reduce reliance on hidden insider allocation.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 shadow-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">
            Miner Modes
          </p>

          <h2 className="text-3xl font-black tracking-tight">
            Mining Clients
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-400 md:text-base">
            NonceForge begins with browser mining for accessible onboarding.
            Dedicated CPU and GPU mining clients are planned for future protocol
            expansion.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {minerModes.map((item) => (
              <div
                key={item.title}
                className={`rounded-3xl border ${item.border} ${item.bg} p-6`}
              >
                <div className={`mb-4 ${item.color}`}>
                  <Cpu size={28} />
                </div>

                <p className={`text-sm font-semibold ${item.color}`}>
                  {item.status}
                </p>

                <h3 className="mt-3 text-xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 shadow-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">
            Smart Contract Readiness
          </p>

          <h2 className="text-3xl font-black tracking-tight">
            On-Chain Verification Layer
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              ["Nonce Validation", "Verify submitted proof on-chain.", Zap],
              ["Supply Cap", "Prevent minting beyond max supply.", ShieldCheck],
              ["Epoch State", "Read current epoch from mined supply.", Layers],
            ].map(([title, text, Icon]: any) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lime-300">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-black text-white">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-yellow-400/20 bg-yellow-400/5 p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-300">
              <AlertTriangle size={24} />
            </div>

            <div>
              <h2 className="text-2xl font-black text-yellow-300">
                Risk Disclaimer
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">
                NonceForge is experimental blockchain infrastructure under
                development. Mining rewards, liquidity conditions, smart
                contract behavior, and token value are not guaranteed. Users
                should always perform independent research before participating.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}