"use client";

export default function Leaderboard() {
  const miners = [
    {
      rank: 1,
      wallet: "0x0000...0000",
      mined: 0,
    },
    {
      rank: 2,
      wallet: "0x0000...0000",
      mined: 0,
    },
    {
      rank: 3,
      wallet: "0x0000...0000",
      mined: 0,
    },
    {
      rank: 4,
      wallet: "0x0000...0000",
      mined: 0,
    },
    {
      rank: 5,
      wallet: "0x0000...0000",
      mined: 0,
    },
  ];

  return (
    <section className="w-full">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
          NonceForge Ranking
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Mining Leaderboard
        </h2>

        <p className="mt-3 max-w-2xl text-gray-400">
          Top miners will appear here automatically once mining begins.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40">
        <div className="grid grid-cols-3 border-b border-white/10 px-6 py-4 text-sm font-semibold text-gray-400">
          <div>Rank</div>
          <div>Wallet</div>
          <div className="text-right">Mined</div>
        </div>

        {miners.map((miner) => (
          <div
            key={miner.rank}
            className="grid grid-cols-3 items-center border-b border-white/5 px-6 py-5 transition-all duration-300 hover:bg-white/[0.03]"
          >
            <div className="font-bold text-green-400">
              #{miner.rank}
            </div>

            <div className="font-mono text-sm text-gray-300">
              {miner.wallet}
            </div>

            <div className="text-right font-semibold text-white">
              {miner.mined}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}