export default function DocsContent() {
  const stats = [
    ["Network", "Base Mainnet"],
    ["Token Symbol", "NFG"],
    ["Max Supply", "21,000,000 NFG"],
    ["Mining Model", "Proof-of-Work"],
  ];

  const steps = [
    "Connect wallet",
    "Access mining dashboard",
    "Generate nonce",
    "Submit valid proof",
    "Claim reward when mining launches",
  ];

  return (
    <div>
      <div className="rounded-3xl border border-green-400/20 bg-gradient-to-br from-green-400/10 via-black to-black p-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
          NonceForge Documentation
        </p>

        <h1 className="max-w-4xl text-4xl font-black md:text-6xl">
          Fair Launch Browser Mining Protocol
        </h1>

        <p className="mt-5 max-w-4xl text-lg text-gray-300">
          NonceForge is a proof-of-work browser mining protocol on Base designed
          for fair launch participation, fixed supply distribution, decreasing
          emissions, and early miner incentives.
        </p>

        <div className="mt-6 inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 text-sm font-semibold text-yellow-300">
          Genesis Preview • Mining Not Yet Publicly Active
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {stats.map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-black/40 p-5"
          >
            <p className="text-sm text-gray-500">{label}</p>

            <h3 className="mt-2 text-xl font-bold text-green-400">
              {value}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-green-400/20 bg-green-400/5 p-7">
        <h2 className="text-2xl font-bold text-green-400">
          Mining Fee & Liquidity
        </h2>

        <p className="mt-4 text-gray-300">
          When a miner submits a valid nonce, a small protocol mining fee may
          be required. The fee is designed to support liquidity infrastructure
          instead of hidden insider allocation.
        </p>

        <p className="mt-4 text-gray-300">
          The objective is to create a more sustainable mining economy where
          mining activity contributes back to liquidity growth and healthier
          market depth for NFG participants.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <p className="text-sm text-gray-400">Step 1</p>

            <h3 className="mt-2 text-lg font-bold text-white">
              Miner Finds Nonce
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <p className="text-sm text-gray-400">Step 2</p>

            <h3 className="mt-2 text-lg font-bold text-white">
              Protocol Fee Processed
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <p className="text-sm text-gray-400">Step 3</p>

            <h3 className="mt-2 text-lg font-bold text-white">
              Liquidity Infrastructure Supported
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-black/40 p-7">
        <h2 className="text-2xl font-bold text-white">
          Protocol Overview
        </h2>

        <p className="mt-4 text-gray-400">
          Unlike traditional token launches that depend on private allocation or
          centralized distribution, NonceForge is designed around proof-based
          participation where miners compete to discover valid nonces that
          satisfy the active protocol difficulty target.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg font-bold text-green-400">
              Fair Distribution
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Rewards are designed to be earned through mining activity rather
              than hidden free allocation or unlimited minting.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg font-bold text-green-400">
              Genesis Epoch
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Early protocol participants are expected to benefit from Genesis
              phase reward structures before future emission reductions.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg font-bold text-green-400">
              Browser Mining First
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              NonceForge initially focuses on browser accessibility to simplify
              onboarding and early ecosystem participation.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-black/40 p-7">
        <h2 className="text-2xl font-bold text-white">
          Genesis Browser Mining
        </h2>

        <p className="mt-4 text-gray-400">
          NonceForge currently operates in Genesis Preview while mining
          infrastructure, nonce validation, reward mechanics, and protocol
          security continue to be finalized before public activation.
        </p>

        <div className="mt-6 rounded-2xl border border-green-400/20 bg-green-400/5 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Genesis Preview
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white">
            Browser Mining Preview
          </h3>

          <p className="mt-3 text-sm text-gray-300">
            Browser mining infrastructure is currently in preview mode while
            desktop CPU and GPU mining environments continue to be developed for
            future protocol expansion.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-black/40 p-7">
        <h2 className="text-2xl font-bold text-white">
          How Mining Works
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-sm font-bold text-green-400">
                Step {index + 1}
              </p>

              <h3 className="mt-2 font-semibold text-white">
                {step}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-green-400/20 bg-green-400/5 p-5">
          <pre className="overflow-x-auto text-sm leading-7 text-green-300">
{`nonce + wallet + epochSeed
        ↓
keccak256 hash
        ↓
hash must be below target
        ↓
valid nonce submitted
        ↓
reward eligibility verified`}
          </pre>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-black/40 p-7">
        <h2 className="text-2xl font-bold text-white">
          Miner Modes
        </h2>

        <p className="mt-4 text-gray-400">
          NonceForge currently focuses on browser-based mining infrastructure
          during the Genesis Preview phase. Additional mining clients for
          desktop CPU and GPU environments are planned for future protocol
          expansion.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-green-400/20 bg-green-400/5 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-green-400">
              Browser Mining
            </p>

            <h3 className="mt-3 text-xl font-bold">
              Genesis Preview
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Lightweight browser-based mining designed for accessible Genesis
              onboarding and early protocol participation.
            </p>

            <div className="mt-5 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-semibold text-green-400">
              PREVIEW
            </div>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5 opacity-80">
            <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
              CPU Mining
            </p>

            <h3 className="mt-3 text-xl font-bold">
              Desktop / VPS
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Dedicated desktop and VPS mining clients are planned for future
              protocol upgrades.
            </p>

            <div className="mt-5 inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-semibold text-yellow-400">
              PLANNED
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5 opacity-80">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              GPU Mining
            </p>

            <h3 className="mt-3 text-xl font-bold">
              CUDA / OpenCL
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              High-performance GPU mining infrastructure is planned for advanced
              and competitive miners.
            </p>

            <div className="mt-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-400">
              PLANNED
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-black/40 p-7">
          <h2 className="text-2xl font-bold text-white">
            Supply Protection
          </h2>

          <p className="mt-4 text-gray-400">
            NonceForge is designed around a fixed maximum supply. Smart contract
            architecture is intended to prevent minting beyond the
            21,000,000 NFG cap.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/40 p-7">
          <h2 className="text-2xl font-bold text-white">
            Difficulty Control
          </h2>

          <p className="mt-4 text-gray-400">
            Mining difficulty determines how challenging it is to discover a
            valid nonce. Higher difficulty requires more computational work and
            helps regulate emission speed.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
        <h2 className="text-2xl font-bold text-yellow-400">
          Risk Disclaimer
        </h2>

        <p className="mt-4 text-gray-300">
          NonceForge is experimental blockchain infrastructure currently under
          development. Mining rewards, liquidity conditions, protocol behavior,
          and token value are not guaranteed. Users should always perform
          independent research before participating.
        </p>
      </div>
    </div>
  );
}