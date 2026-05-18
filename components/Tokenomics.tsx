export default function Tokenomics() {
  const allocation = [
    {
      label: "Mining Rewards",
      percent: 60,
      desc: "Distributed to miners through epoch-based rewards.",
    },
    {
      label: "Liquidity",
      percent: 25,
      desc: "Reserved to support market depth and healthier trading.",
    },
    {
      label: "Team / Dev",
      percent: 10,
      desc: "Locked for development, maintenance, and protocol growth.",
    },
    {
      label: "Marketing",
      percent: 5,
      desc: "Used for community campaigns and ecosystem expansion.",
    },
  ];

  const epochs = [
    { epoch: 1, reward: 100, title: "Genesis Advantage" },
    { epoch: 2, reward: 75, title: "Early Expansion" },
    { epoch: 3, reward: 50, title: "Balanced Emission" },
    { epoch: 4, reward: 25, title: "Supply Control" },
    { epoch: 5, reward: 10, title: "Final Reduction" },
  ];

  return (
    <section className="w-full">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
          NonceForge Economy
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Tokenomics Built for Early Miners
        </h2>

        <p className="mt-4 max-w-3xl text-gray-400">
          NonceForge is designed to reward early participation with higher
          mining emissions, while gradually reducing rewards across each epoch
          to help control supply pressure and support long-term sustainability.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        {allocation.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-400/50 hover:bg-green-400/5"
          >
            <p className="text-sm text-gray-400">{item.label}</p>

            <h3 className="mt-3 text-4xl font-bold text-green-400">
              {item.percent}%
            </h3>

            <p className="mt-3 text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-green-400/20 bg-green-400/5 p-6">
        <h3 className="text-2xl font-bold text-green-400">
          Early Miner Advantage
        </h3>

        <p className="mt-3 max-w-3xl text-gray-300">
          Epoch 1 miners receive the highest reward rate. As more blocks are
          mined, rewards decrease automatically, creating a stronger incentive
          for early participation before emissions become more limited.
        </p>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-black/40 p-6">
        <h3 className="mb-5 text-2xl font-bold">Epoch Reward Roadmap</h3>

        <div className="grid gap-4 md:grid-cols-5">
          {epochs.map((item) => (
            <div
              key={item.epoch}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-yellow-400/50 hover:bg-yellow-400/5"
            >
              <p className="text-sm text-gray-400">Epoch {item.epoch}</p>

              <h4 className="mt-2 text-2xl font-bold text-yellow-400">
                {item.reward} NFG
              </h4>

              <p className="mt-2 text-sm font-semibold text-white">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
          <h4 className="text-xl font-bold text-white">
            Fair Launch Mining
          </h4>
          <p className="mt-3 text-sm text-gray-400">
            Rewards are earned through mining activity, not instant free
            allocation.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
          <h4 className="text-xl font-bold text-white">
            Decreasing Emission
          </h4>
          <p className="mt-3 text-sm text-gray-400">
            Each epoch reduces rewards to help manage token circulation over
            time.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
          <h4 className="text-xl font-bold text-white">
            Liquidity Support
          </h4>
          <p className="mt-3 text-sm text-gray-400">
            A dedicated liquidity allocation helps support smoother trading
            once the market opens.
          </p>
        </div>
        <div className="mt-8 rounded-3xl border border-green-400/20 bg-green-400/5 p-6">
  <h3 className="text-2xl font-bold text-green-400">
    Mining Fee → Liquidity Support
  </h3>

  <p className="mt-3 max-w-3xl text-gray-300">
    Each successful mining submission includes a small mining fee. This fee is
    designed to support protocol liquidity, helping create healthier market
    depth and a more sustainable trading environment for NFG.
  </p>

  <div className="mt-5 grid gap-4 md:grid-cols-3">
    <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
      <p className="text-sm text-gray-400">Step 1</p>
      <h4 className="mt-2 text-lg font-bold text-white">
        Miner Finds Nonce
      </h4>
    </div>

    <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
      <p className="text-sm text-gray-400">Step 2</p>
      <h4 className="mt-2 text-lg font-bold text-white">
        Mining Fee Collected
      </h4>
    </div>

    <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
      <p className="text-sm text-gray-400">Step 3</p>
      <h4 className="mt-2 text-lg font-bold text-white">
        Fee Supports Liquidity
      </h4>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}