"use client";

import Link from "next/link";
import WalletConnectButton from "./WalletConnectButton";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-900 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-black">
          NONCE<span className="text-lime-400">FORGE</span>
        </Link>

        <WalletConnectButton />
      </div>
    </nav>
  );
}