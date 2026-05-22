"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Mining", href: "/mining" },
    { label: "Leaderboard", href: "/leaderboard" },
    { label: "Tokenomics", href: "/tokenomics" },
    { label: "Docs", href: "/docs" },
  ];

  return (
    <header className="relative z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <img src="/icon.png" alt="NonceForge" className="h-8 w-8" />

          <span className="text-lg font-bold tracking-wide text-white">
            NonceForge
          </span>
        </Link>

        <nav className="hidden items-center gap-3 text-sm md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 font-semibold transition ${
                  active
                    ? "border border-lime-400/40 bg-lime-400/10 text-lime-300"
                    : "text-zinc-400 hover:text-lime-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            mounted,
          }) => {
            const ready = mounted;
            const connected = ready && account && chain;

            return (
              <div
                {...(!ready && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                })}
              >
                {!connected ? (
                  <button
                    type="button"
                    onClick={openConnectModal}
                    className="rounded-full border border-lime-400/40 bg-lime-400/10 px-5 py-2 text-sm font-semibold text-lime-300 transition hover:bg-lime-400 hover:text-black"
                  >
                    Connect
                  </button>
                ) : chain.unsupported ? (
                  <button
                    type="button"
                    onClick={openChainModal}
                    className="rounded-full border border-red-400/40 bg-red-400/10 px-5 py-2 text-sm font-semibold text-red-300"
                  >
                    Wrong Network
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={openAccountModal}
                    className="rounded-full border border-lime-400/40 bg-lime-400/10 px-5 py-2 text-sm font-semibold text-lime-300 transition hover:bg-lime-400 hover:text-black"
                  >
                    {account.displayName}
                  </button>
                )}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>
    </header>
  );
}