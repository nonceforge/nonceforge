"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LaunchButton from "@/components/LaunchButton";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-lime-400/20 blur-[140px]" />

      <Navbar />

      <section className="relative flex min-h-screen items-center justify-center px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-lime-400">
              Proof Of Work Protocol
            </p>

            <h1 className="mb-8 text-5xl font-black leading-tight md:text-7xl">
              Mine. <br />
              Compete. <br />
              Earn.
            </h1>

            <p className="max-w-xl text-lg leading-8 text-zinc-400">
              NonceForge is a browser mining protocol on Base featuring
              epoch-based rewards, nonce competition, and liquidity-backed
              mining economics.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <LaunchButton />

              <Link
                href="/docs"
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-8 py-5 font-semibold text-zinc-300 transition-all hover:border-lime-400/40 hover:text-white"
              >
                View Docs
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-4 md:gap-6">
              <div className="rounded-2xl border border-zinc-900 bg-zinc-950/50 p-5">
                <p className="text-sm text-zinc-500">Max Supply</p>
                <h3 className="mt-2 text-2xl font-bold">21M</h3>
              </div>

              <div className="rounded-2xl border border-zinc-900 bg-zinc-950/50 p-5">
                <p className="text-sm text-zinc-500">Epochs</p>
                <h3 className="mt-2 text-2xl font-bold">5</h3>
              </div>

              <div className="rounded-2xl border border-zinc-900 bg-zinc-950/50 p-5">
                <p className="text-sm text-zinc-500">Network</p>
                <h3 className="mt-2 text-2xl font-bold">Base</h3>
              </div>
            </div>
          </motion.div>

          {/* RIGHT HOLOGRAM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
          >
            <div className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-lime-400/20 blur-[120px] md:h-[520px] md:w-[520px]" />

            <div className="relative flex items-center justify-center">
              <motion.img
                src="/hero-core.png"
                alt="NonceForge Core"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 h-[320px] w-[320px] object-contain drop-shadow-[0_0_80px_rgba(132,204,22,0.75)] md:h-[460px] md:w-[460px]"
              />

              <div className="absolute left-[-10px] top-[70px] z-20 rounded-2xl border border-zinc-800 bg-black/80 p-4 backdrop-blur md:left-[-30px]">
                <p className="text-xs text-zinc-500">Current Epoch</p>
                <h4 className="mt-2 text-xl font-bold text-lime-400">
                  Genesis
                </h4>
              </div>

              <div className="absolute bottom-[70px] right-[-10px] z-20 rounded-2xl border border-zinc-800 bg-black/80 p-4 backdrop-blur md:right-[-30px]">
                <p className="text-xs text-zinc-500">Mining Fee</p>
                <h4 className="mt-2 text-xl font-bold text-lime-400">
                  0.00005 ETH
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}