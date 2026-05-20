"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const distribution = [
  { name: "Mining Rewards", value: 60 },
  { name: "Liquidity", value: 25 },
  { name: "Ecosystem", value: 10 },
  { name: "Team", value: 5 },
];

const COLORS = [
  "#84cc16",
  "#22c55e",
  "#06b6d4",
  "#e5e7eb",
];

const epochs = [
  {
    epoch: "Epoch 1",
    reward: "100 NFG",
    difficulty: "Easy",
    allocation: "2,000,000",
  },
  {
    epoch: "Epoch 2",
    reward: "75 NFG",
    difficulty: "Normal",
    allocation: "3,000,000",
  },
  {
    epoch: "Epoch 3",
    reward: "50 NFG",
    difficulty: "Hard",
    allocation: "4,000,000",
  },
  {
    epoch: "Epoch 4",
    reward: "25 NFG",
    difficulty: "Very Hard",
    allocation: "6,000,000",
  },
  {
    epoch: "Epoch 5",
    reward: "10 NFG",
    difficulty: "Extreme",
    allocation: "6,000,000",
  },
];

export default function Tokenomics() {
  return (
    <section className="px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl space-y-10">

        {/* HEADER */}
        <div className="rounded-3xl border border-lime-400/20 bg-black/60 p-8 shadow-[0_0_40px_rgba(132,204,22,0.08)]">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-lime-400">
            Tokenomics
          </p>

          <div className="grid gap-10 lg:grid-cols-2">

            {/* LEFT */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-zinc-500">
                  Max Supply
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  21,000,000
                </h2>

                <p className="mt-1 text-zinc-400">
                  NFG
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Total Epochs
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  5
                </h2>

                <p className="mt-1 text-zinc-400">
                  Progressive Emission
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Launch Model
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Fair Launch
                </h2>

                <p className="mt-1 text-zinc-400">
                  No Presale
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Blockchain
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Base
                </h2>

                <p className="mt-1 text-zinc-400">
                  L2 Network
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center justify-center gap-8">
              <div className="h-[220px] w-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={distribution}
                      innerRadius={60}
                      outerRadius={90}
                      dataKey="value"
                      stroke="none"
                    >
                      {distribution.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[index]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-3">
                {distribution.map((item, index) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{
                        backgroundColor: COLORS[index],
                      }}
                    />

                    <p className="text-sm text-zinc-300">
                      {item.name}
                    </p>

                    <span className="ml-auto text-sm font-semibold">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* EMISSION MODEL */}
        <div className="rounded-3xl border border-lime-400/20 bg-black/60 p-8">
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-lime-400">
            Epoch Emission Schedule
          </p>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {epochs.map((item) => (
              <div
                key={item.epoch}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5"
              >
                <p className="text-sm text-lime-400">
                  {item.epoch}
                </p>

                <h3 className="mt-3 text-3xl font-black">
                  {item.reward}
                </h3>

                <div className="mt-5 space-y-2 text-sm text-zinc-400">
                  <p>
                    Difficulty:{" "}
                    <span className="text-white">
                      {item.difficulty}
                    </span>
                  </p>

                  <p>
                    Allocation:{" "}
                    <span className="text-white">
                      {item.allocation}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FEE MODEL */}
        <div className="rounded-3xl border border-lime-400/20 bg-black/60 p-8">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-lime-400">
            Mining Fee Model
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
              <h3 className="text-2xl font-bold text-lime-400">
                70%
              </h3>

              <p className="mt-2 text-zinc-300">
                Mining fees automatically injected into liquidity pool.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
              <h3 className="text-2xl font-bold text-cyan-400">
                20%
              </h3>

              <p className="mt-2 text-zinc-300">
                Ecosystem treasury for future protocol expansion.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
              <h3 className="text-2xl font-bold text-red-400">
                10%
              </h3>

              <p className="mt-2 text-zinc-300">
                Permanent token burn reducing circulating supply.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}