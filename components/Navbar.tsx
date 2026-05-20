"use client";

import Link from "next/link";
import WalletConnectButton from "./WalletConnectButton";

export default function Navbar() {
  return (
    <nav className="relative z-[9999] w-full border-b border-zinc-900 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-black md:text-2xl">
          NONCE<span className="text-lime-400">FORGE</span>
        </Link>

        <WalletConnectButton />
      </div>
    </nav>
  );
}