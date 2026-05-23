"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const navItems = [
  { name: "Mining", href: "/mining" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "Tokenomics", href: "/tokenomics" },
  { name: "Docs", href: "/docs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/icon.png" alt="NonceForge" className="h-8 w-8" />

          <span className="text-lg font-bold tracking-wide text-white">
            NonceForge
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-3 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 transition ${
                isActive(item.href)
                  ? "bg-lime-400/10 text-lime-300 ring-1 ring-lime-400/30"
                  : "text-zinc-400 hover:text-lime-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Custom Wallet Button */}
          <div className="hidden sm:block">
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
              }) => {
                const connected =
                  mounted && account && chain;

                return (
                  <div>
                    {!connected ? (
                      <button
                        onClick={openConnectModal}
                        className="rounded-full border border-lime-400/30 bg-lime-400 px-5 py-2 text-sm font-bold text-black transition hover:bg-lime-300"
                      >
                        Connect Wallet
                      </button>
                    ) : chain.unsupported ? (
                      <button
                        onClick={openChainModal}
                        className="rounded-full border border-red-500/30 bg-red-500 px-5 py-2 text-sm font-bold text-white"
                      >
                        Wrong Network
                      </button>
                    ) : (
                      <button
                        onClick={openAccountModal}
                        className="rounded-full border border-lime-400/30 bg-zinc-900 px-5 py-2 text-sm font-bold text-lime-300 transition hover:border-lime-300"
                      >
                        {account.displayName}
                      </button>
                    )}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-2 text-zinc-300">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 transition ${
                  isActive(item.href)
                    ? "bg-lime-400/10 text-lime-300 ring-1 ring-lime-400/30"
                    : "hover:bg-white/5 hover:text-lime-300"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Connect */}
            <div className="mt-4">
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  mounted,
                }) => {
                  const connected =
                    mounted && account && chain;

                  return (
                    <div>
                      {!connected ? (
                        <button
                          onClick={openConnectModal}
                          className="w-full rounded-xl bg-lime-400 px-5 py-3 font-bold text-black"
                        >
                          Connect Wallet
                        </button>
                      ) : chain.unsupported ? (
                        <button
                          onClick={openChainModal}
                          className="w-full rounded-xl bg-red-500 px-5 py-3 font-bold text-white"
                        >
                          Wrong Network
                        </button>
                      ) : (
                        <button
                          onClick={openAccountModal}
                          className="w-full rounded-xl border border-lime-400/30 bg-zinc-900 px-5 py-3 font-bold text-lime-300"
                        >
                          {account.displayName}
                        </button>
                      )}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}