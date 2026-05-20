"use client";

import Link from "next/link";
import WalletConnectButton from "./WalletConnectButton";

export default function Navbar() {
  return (
    <nav className="relative z-[9999] w-full border-b border-zinc-900 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 pt-4">
        <Link href="/" className="text-2xl font-black">
          NONCE<span className="text-lime-400">FORGE</span>
        </Link>
      </div>

      <div className="relative z-[10000] flex w-full justify-center px-4 py-4">
        <WalletConnectButton />
      </div>
    </nav>
  );
}