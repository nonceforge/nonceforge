"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Pickaxe,
  ShieldCheck,
  BarChart3,
  Coins,
  ArrowRight,
  Zap,
} from "lucide-react";

import {
  FaXTwitter,
  FaGithub,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa6";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl" />

        <div className="absolute bottom-[-160px] right-[-100px] h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="relative z-20 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <img src="/icon.png" alt="NonceForge" className="h-8 w-8" />

            <span className="text-lg font-bold tracking-wide">
              NonceForge
            </span>
          </Link>

          <nav className="hidden items-center gap-5 text-sm text-zinc-400 md:flex lg:gap-8">
            <Link href="/mining" className="transition hover:text-lime-300">
              Mining
            </Link>

            <Link
              href="/leaderboard"
              className="transition hover:text-lime-300"
            >
              Leaderboard
            </Link>

            <Link
              href="/roadmap"
              className="transition hover:text-lime-300"
            >
              Roadmap
            </Link>

            <Link
              href="/tokenomics"
              className="transition hover:text-lime-300"
            >
              Tokenomics
            </Link>

            <Link href="/docs" className="transition hover:text-lime-300">
              Docs
            </Link>
          </nav>

          <div className="hidden w-[40px] md:block" />
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm text-lime-300">
            <Zap size={16} />
            Proof-of-Nonce Mining Protocol
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Mine Nonces.
            <br />
            Forge Rewards.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            NonceForge is a browser mining protocol where users compete to
            discover valid nonces, earn rewards, and participate in a fair
            on-chain mining ecosystem.
          </p>

          <div className="mt-9">
            <Link
              href="/mining"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-lime-300"
            >
              Launch App

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-lime-400/10 blur-2xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-lime-400/20 bg-black p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-500">Mining Status</p>

                  <h3 className="text-2xl font-bold text-lime-300">
                    Ready to Forge
                  </h3>
                </div>

                <Pickaxe className="text-lime-300" size={34} />
              </div>

              <div className="grid gap-4">
                {[
                  ["Current Epoch", "01"],
                  ["Network Difficulty", "Dynamic"],
                  ["Reward System", "Fair Mining"],
                  ["Liquidity Model", "Fee Powered"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
                  >
                    <span className="text-sm text-zinc-400">{label}</span>

                    <span className="font-semibold text-white">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[62%] rounded-full bg-lime-400" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Cards */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Pickaxe,
              title: "Mining",
              text: "Start mining and compete to discover valid nonces.",
              href: "/mining",
            },

            {
              icon: BarChart3,
              title: "Leaderboard",
              text: "Track miner ranking, activity, and mining performance.",
              href: "/leaderboard",
            },

            {
              icon: Coins,
              title: "Tokenomics",
              text: "View NFG allocation, mining rewards, liquidity, and ecosystem.",
              href: "/tokenomics",
            },
          ].map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-lime-400/40 hover:bg-lime-400/[0.04]"
            >
              <item.icon className="mb-6 text-lime-300" size={34} />

              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>

              <p className="leading-7 text-zinc-400">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Protocol */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 md:p-12">
          <div className="mb-10 flex items-center gap-4">
            <ShieldCheck className="text-lime-300" size={36} />

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-lime-300">
                Protocol
              </p>

              <h2 className="text-3xl font-black md:text-4xl">
                Fair Launch Browser Mining
              </h2>
            </div>
          </div>

          <p className="max-w-3xl leading-8 text-zinc-400">
            NonceForge is designed for transparent mining activity,
            leaderboard competition, and a token economy powered by mining
            rewards and liquidity mechanics.
          </p>
        </div>
      </section>

      {/* Social */}
      <div className="relative z-10 mx-auto mb-6 flex max-w-7xl justify-end px-6">
        <div className="flex items-center gap-2">
          <Link
            href="https://x.com/nonceforge"
            target="_blank"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-zinc-300 transition hover:border-lime-400/50 hover:text-lime-300"
          >
            <FaXTwitter size={14} />
          </Link>

          <button className="flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-zinc-600">
            <FaGithub size={14} />
          </button>

          <button className="flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-zinc-600">
            <FaDiscord size={14} />
          </button>

          <button className="flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-zinc-600">
            <FaTelegram size={14} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 NonceForge. All rights reserved.
      </footer>
    </main>
  );
}