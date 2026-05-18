"use client";

import Link from "next/link";
import WalletConnectButton from "./WalletConnectButton";

export default function AppNavbar() {
  return (
    <nav className="fixed top-0 z-[9999] w-full border-b border-zinc-900 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-black">
          NONCE<span className="text-lime-400">FORGE</span>
        </Link>

        <div className="hidden gap-8 text-sm text-zinc-300 md:flex">
          <Link href="/mining" className="hover:text-lime-400">
            Mining
          </Link>

          <Link href="/leaderboard" className="hover:text-lime-400">
            Leaderboard
          </Link>

          <Link href="/tokenomics" className="hover:text-lime-400">
            Tokenomics
          </Link>

          <Link href="/docs" className="hover:text-lime-400">
            Docs
          </Link>
        </div>

        <div className="relative z-[10000] flex min-w-[120px] justify-end">
          <WalletConnectButton />
        </div>
      </div>
    </nav>
  );
}