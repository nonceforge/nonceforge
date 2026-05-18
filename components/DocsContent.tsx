export default function DocsContent() {
  const stats = [
    ["Network", "Base Mainnet"],
    ["Token Symbol", "NFG"],
    ["Max Supply", "21,000,000 NFG"],
    ["Mining Model", "Proof-of-Work"],
  ];

  const steps = [
    "Connect wallet",
    "Start browser mining",
    "Generate nonce",
    "Submit valid proof",
    "Receive epoch reward",
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
          emissions, and early miner rewards.
        </p>
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
    When a miner submits a valid nonce, a small mining fee may be required by
    the protocol. This fee is designed to support liquidity instead of being
    used as hidden allocation.
  </p>

  <p className="mt-4 text-gray-300">
    The goal is to create a more sustainable mining economy where successful
    mining activity contributes back to the market structure and helps support
    healthier trading depth for NFG.
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
        Mining Fee Collected
      </h3>
    </div>

    <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
      <p className="text-sm text-gray-400">Step 3</p>

      <h3 className="mt-2 text-lg font-bold text-white">
        Fee Supports Liquidity
      </h3>
    </div>
  </div>
</div>
      <div className="mt-10 rounded-3xl border border-white/10 bg-black/40 p-7">
        <h2 className="text-2xl font-bold text-white">Protocol Overview</h2>

        <p className="mt-4 text-gray-400">
          Unlike traditional token launches that depend on private allocation or
          centralized distribution, NonceForge rewards miners through valid
          proof submissions. Every browser miner competes to discover nonces
          that satisfy the active difficulty target.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg font-bold text-green-400">
              Fair Distribution
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Rewards are earned through mining work, not unlimited minting or
              hidden free allocation.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg font-bold text-green-400">
              Early Miner Advantage
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Genesis Epoch miners receive the highest reward rate before later
              epochs reduce emissions.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg font-bold text-green-400">
              Browser Mining First
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Genesis launch focuses on browser mining first to keep onboarding
              simple, accessible, and community-friendly.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-black/40 p-7">
        <h2 className="text-2xl font-bold text-white">
          Genesis Browser Mining
        </h2>

        <p className="mt-4 text-gray-400">
          NonceForge Genesis launch focuses on browser-based mining to simplify
          onboarding and allow early community participation directly from the
          web interface.
        </p>

        <div className="mt-6 rounded-2xl border border-green-400/20 bg-green-400/5 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Genesis Launch
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white">
            Browser Mining Active
          </h3>

          <p className="mt-3 text-sm text-gray-300">
            Browser mining is planned to be available during the Genesis Epoch
            while desktop CPU and GPU mining infrastructure continue to be
            developed for future expansion.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-black/40 p-7">
        <h2 className="text-2xl font-bold text-white">How Mining Works</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-sm font-bold text-green-400">
                Step {index + 1}
              </p>
              <h3 className="mt-2 font-semibold text-white">{step}</h3>
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
epoch reward distributed`}
          </pre>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-black/40 p-7">
        <h2 className="text-2xl font-bold text-white">Miner Modes</h2>

        <p className="mt-4 text-gray-400">
          NonceForge currently focuses on browser-based mining for the Genesis
          launch phase. Additional mining clients for desktop CPU and GPU
          environments are planned for future protocol expansion.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-green-400/20 bg-green-400/5 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-green-400">
              Browser Mining
            </p>

            <h3 className="mt-3 text-xl font-bold">Active</h3>

            <p className="mt-3 text-sm text-gray-400">
              Lightweight browser-based mining designed for easy onboarding and
              Genesis Epoch participation.
            </p>

            <div className="mt-5 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-semibold text-green-400">
              ACTIVE
            </div>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5 opacity-80">
            <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
              CPU Mining
            </p>

            <h3 className="mt-3 text-xl font-bold">Desktop / VPS</h3>

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

            <h3 className="mt-3 text-xl font-bold">CUDA / OpenCL</h3>

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
          <h2 className="text-2xl font-bold text-white">Supply Protection</h2>
          <p className="mt-4 text-gray-400">
            NonceForge is designed around a fixed maximum supply. The smart
            contract should prevent minting beyond the 21,000,000 NFG cap.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/40 p-7">
          <h2 className="text-2xl font-bold text-white">Difficulty Control</h2>
          <p className="mt-4 text-gray-400">
            Mining difficulty controls how hard it is to find a valid nonce.
            Higher difficulty requires more computational work and helps slow
            excessive emission.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
        <h2 className="text-2xl font-bold text-yellow-400">Risk Disclaimer</h2>
        <p className="mt-4 text-gray-300">
          NonceForge is experimental blockchain infrastructure. Mining rewards,
          token value, liquidity, and market performance are not guaranteed.
          Users should always do independent research before participating.
        </p>
      </div>
    </div>
  );
}