"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Box,
  Clock3,
  Droplets,
  FileText,
  Globe2,
  ShieldCheck,
  Trophy,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <header className="fixed left-0 top-0 z-50 flex h-[74px] w-full items-center justify-between border-b border-white/10 bg-black/70 px-8 backdrop-blur-xl">
        <Link href="/" className="text-2xl font-black tracking-tight">
          NONCE<span className="text-lime-400">FORGE</span>
        </Link>

        <button className="rounded-full border border-lime-400/60 px-7 py-3 font-bold text-lime-400 shadow-[0_0_25px_rgba(132,255,0,0.35)] transition hover:bg-lime-400 hover:text-black">
          Connect
        </button>
      </header>

      <section className="relative min-h-screen px-8 pt-[120px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_48%,rgba(132,255,0,0.24),transparent_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,#000_33%,rgba(0,0,0,0.35)_100%)]" />

        <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 lg:grid-cols-[520px_1fr]">
          <div className="z-20">
            <p className="mb-8 text-sm font-black uppercase tracking-[0.52em] text-lime-400">
              Proof of Work Protocol
            </p>

            <h1 className="text-[72px] font-black leading-[0.96] tracking-tight md:text-[88px]">
              Mine.
              <br />
              Compete.
              <br />
              Earn.
            </h1>

            <p className="mt-8 max-w-[520px] text-lg leading-8 text-zinc-300">
              NonceForge is a browser mining protocol on Base featuring
              epoch-based rewards, nonce competition, and liquidity-backed
              mining economics.
            </p>

            <div className="mt-10 flex gap-5">
              <Link
                href="/app"
                className="group flex h-[72px] items-center gap-8 rounded-2xl bg-lime-400 px-9 text-lg font-black text-black shadow-[0_0_45px_rgba(132,255,0,0.45)] transition hover:scale-[1.03] hover:bg-lime-300"
              >
                Launch App
                <ArrowRight className="h-6 w-6 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/docs"
                className="flex h-[72px] items-center gap-8 rounded-2xl border border-white/15 bg-white/[0.03] px-9 text-lg font-bold text-white backdrop-blur-xl transition hover:border-lime-400/70 hover:bg-lime-400/10"
              >
                View Docs
                <FileText className="h-5 w-5 text-lime-400" />
              </Link>
            </div>

            <div className="mt-9 grid grid-cols-3 gap-4">
              <Stat title="Max Supply" value="21M" icon={<Box />} />
              <Stat title="Epochs" value="5" icon={<Clock3 />} />
              <Stat title="Network" value="Base" icon={<Globe2 />} />
            </div>
          </div>

          <div className="relative hidden h-[700px] lg:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,255,0,0.2),transparent_56%)]" />

            <div className="absolute left-[8%] top-[4%] h-[650px] w-[880px]">
              <Image
                src="/hero-hologram.png"
                alt="NonceForge Hologram"
                fill
                priority
                className="object-contain drop-shadow-[0_0_80px_rgba(132,255,0,0.55)]"
              />
            </div>

            <div className="absolute left-[7%] top-[210px] rounded-2xl border border-white/15 bg-black/60 p-5 backdrop-blur-xl">
              <p className="text-sm text-zinc-400">Current Epoch</p>
              <p className="mt-2 text-2xl font-black text-lime-400">
                Genesis
              </p>
            </div>

            <div className="absolute right-[2%] top-[430px] rounded-2xl border border-white/15 bg-black/60 p-5 backdrop-blur-xl">
              <p className="text-sm text-zinc-400">Epoch 1 Reward</p>
              <p className="mt-2 text-3xl font-black text-lime-400">
                100 NFG
              </p>
              <p className="mt-1 text-sm text-zinc-400">per valid nonce</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-8 grid max-w-[1440px] overflow-hidden rounded-2xl border border-white/10 bg-black/55 backdrop-blur-xl md:grid-cols-4">
          <Feature
            icon={<ShieldCheck />}
            title="Epoch-Based Rewards"
            desc="Earn based on network epochs and your contribution."
          />
          <Feature
            icon={<Trophy />}
            title="Nonce Competition"
            desc="Compete for higher rewards with better nonces."
          />
          <Feature
            icon={<Droplets />}
            title="Liquidity Backed"
            desc="Sustainable rewards backed by protocol liquidity."
          />
          <Feature
            icon={<ShieldCheck />}
            title="Secure & Transparent"
            desc="Built on Base. Transparent, verifiable, and community-first."
          />
        </div>
      </section>
    </main>
  );
}

function Stat({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative min-h-[125px] rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur-xl">
      <p className="text-sm text-zinc-400">{title}</p>
      <p className="mt-3 text-3xl font-black">{value}</p>
      <div className="mt-4 h-[2px] w-14 bg-lime-400" />
      <div className="absolute bottom-5 right-5 text-lime-400 drop-shadow-[0_0_16px_rgba(132,255,0,0.8)]">
        {icon}
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-5 border-white/10 p-7 md:border-r">
      <div className="text-lime-400 drop-shadow-[0_0_16px_rgba(132,255,0,0.8)]">
        {icon}
      </div>
      <div>
        <p className="font-bold text-white">{title}</p>
        <p className="mt-2 text-sm leading-6 text-zinc-400">{desc}</p>
      </div>
    </div>
  );
}