"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  Coins,
  Droplets,
  Layers,
  Lock,
  Rocket,
  Shield,
} from "lucide-react";

const distribution = [
  { name: "Mining Rewards", value: 60 },
  { name: "Liquidity", value: 25 },
  { name: "Ecosystem", value: 10 },
  { name: "Team", value: 5 },
];

const COLORS = ["#84cc16", "#22c55e", "#06b6d4", "#e5e7eb"];

const epochs = [
  { epoch: "Epoch 1", reward: "100 NFG", allocation: "2,000,000", maxMint: "10" },
  { epoch: "Epoch 2", reward: "75 NFG", allocation: "3,000,000", maxMint: "25" },
  { epoch: "Epoch 3", reward: "50 NFG", allocation: "4,000,000", maxMint: "50" },
  { epoch: "Epoch 4", reward: "25 NFG", allocation: "6,000,000", maxMint: "100" },
  { epoch: "Epoch 5", reward: "10 NFG", allocation: "6,000,000", maxMint: "200" },
];

export default function Tokenomics() {
  return (
    <section className="relative overflow-hidden px-6 py-20 text-white">
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 shadow-2xl">
          <div className="mb-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">
              <Coins size={16} />
              TOKENOMICS
            </div>

            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              Fair Supply Distribution
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              NonceForge uses a fair-launch emission model with mining rewards,
              liquidity support, ecosystem reserve, and a limited team allocation.
            </p>
          </div>

          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap">
              {[
                ["Total Epochs", "5", Rocket],
                ["Launch Model", "Fair Launch", Shield],
                ["Blockchain", "Base", Layers],
                ["Team Allocation", "5%", Lock],
              ].map(([label, value, Icon]: any) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/10 text-lime-300">
                    <Icon size={18} />
                  </div>

                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {label}
                  </p>

                  <p className="mt-2 text-lg font-black text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-lime-400/20 bg-lime-400/10 px-6 py-5">
              <p className="text-sm text-zinc-400">Max Supply</p>

              <p className="text-3xl font-black text-lime-300">
                21,000,000 NFG
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <div className="grid items-center gap-6 md:grid-cols-[260px_1fr]">
                <div className="relative h-[260px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={distribution}
                        innerRadius={72}
                        outerRadius={108}
                        paddingAngle={4}
                        dataKey="value"
                        stroke="none"
                      >
                        {distribution.map((entry, index) => (
                          <Cell key={entry.name} fill={COLORS[index]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-3xl font-black">100%</p>

                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Supply
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {distribution.map((item, index) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: COLORS[index] }}
                        />

                        <p className="text-sm text-zinc-300">{item.name}</p>
                      </div>

                      <span className="text-sm font-bold text-white">
                        {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                ["Mining Rewards", "60%", "Distributed to miners through nonce discovery.", Coins],
                ["Liquidity", "25%", "Mining fees routed into liquidity pools.", Droplets],
                ["Ecosystem", "10%", "Treasury for ecosystem expansion and development.", Rocket],
                ["Team", "5%", "Limited allocation for long-term contributors.", Shield],
              ].map(([title, value, desc, Icon]: any) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lime-300">
                    <Icon size={21} />
                  </div>

                  <p className="text-sm text-zinc-500">{title}</p>

                  <h3 className="mt-2 text-3xl font-black text-lime-300">
                    {value}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 shadow-2xl">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">
                Epoch Emission
              </p>

              <h3 className="text-3xl font-black tracking-tight">
                Reward & Allocation Schedule
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-6 text-zinc-400">
              Early epochs provide higher mining rewards with lower mint limits.
              Later epochs gradually reduce rewards while expanding total
              allocation and mint capacity.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {epochs.map((item) => (
              <div
                key={item.epoch}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-lime-400/30 hover:bg-lime-400/10"
              >
                <p className="text-sm font-bold text-lime-300">{item.epoch}</p>

                <h4 className="mt-4 text-3xl font-black">{item.reward}</h4>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-zinc-500">Allocation</span>

                    <span className="font-semibold text-white">
                      {item.allocation}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-zinc-500">Max Mint</span>

                    <span className="font-semibold text-white">
                      {item.maxMint}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}