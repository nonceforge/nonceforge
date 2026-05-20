"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <section className="relative min-h-screen border-t border-white/10 px-6 pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(132,255,0,0.24),transparent_38%),linear-gradient(90deg,#000_0%,rgba(0,0,0,0.92)_35%,rgba(0,0,0,0.55)_100%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="z-10"
          >
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.45em] text-lime-400">
              Proof of Work Protocol
            </p>

            <h1 className="text-6xl font-black leading-[1.08] tracking-tight md:text-8xl">
              Mine.
              <br />
              Compete.
              <br />
              Earn.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
              NonceForge is a browser mining protocol on Base featuring
              epoch-based rewards, nonce competition, and liquidity-backed
              mining economics.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/app"
                className="rounded-2xl bg-lime-400 px-9 py-5 text-lg font-bold text-black shadow-[0_0_35px_rgba(132,255,0,0.45)] transition hover:scale-105 hover:bg-lime-300"
              >
                Launch App →
              </Link>

              <Link
                href="/docs"
                className="rounded-2xl border border-white/15 bg-white/5 px-9 py-5 text-lg font-bold text-white transition hover:border-lime-400/60 hover:bg-lime-400/10"
              >
                View Docs
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
              {[
                ["Max Supply", "21M"],
                ["Epochs", "5"],
                ["Network", "Base"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur"
                >
                  <p className="text-sm text-zinc-400">{label}</p>
                  <p className="mt-3 text-2xl font-black">{value}</p>
                  <div className="mt-5 h-[2px] w-14 bg-lime-400" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative hidden min-h-[720px] items-center justify-center lg:flex"
          >
            <div className="absolute h-[720px] w-[820px] rounded-full bg-lime-400/10 blur-[100px]" />

            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-[620px] w-[760px]"
            >
              <Image
                src="/hero-core.png"
                alt="NonceForge Hologram Core"
                fill
                priority
                className="object-cover opacity-90 mix-blend-screen [mask-image:radial-gradient(circle_at_center,black_36%,transparent_72%)]"
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.95)_78%)]" />
            </motion.div>

            <div className="absolute left-8 top-52 rounded-2xl border border-white/15 bg-black/55 p-5 backdrop-blur-xl">
              <p className="text-sm text-zinc-400">Current Epoch</p>
              <p className="mt-2 text-2xl font-black text-lime-400">Genesis</p>
            </div>

            <div className="absolute bottom-36 right-8 rounded-2xl border border-white/15 bg-black/55 p-5 backdrop-blur-xl">
              <p className="text-sm text-zinc-400">Epoch 1 Reward</p>
              <p className="mt-2 text-2xl font-black text-lime-400">100 NFG</p>
              <p className="mt-1 text-sm text-zinc-500">per valid nonce</p>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto mb-10 mt-8 grid max-w-7xl gap-4 rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur md:grid-cols-4">
          {[
            ["Epoch-Based Rewards", "Earn based on network epochs and your contribution."],
            ["Nonce Competition", "Compete for higher rewards with better nonces."],
            ["Liquidity Backed", "Sustainable rewards backed by protocol liquidity."],
            ["Secure & Transparent", "Built on Base. Verifiable and community-first."],
          ].map(([title, desc]) => (
            <div key={title} className="p-4">
              <p className="font-bold text-white">{title}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}