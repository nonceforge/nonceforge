"use client";

import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function WalletConnectButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-24 rounded-full border border-white/10 bg-white/5" />
    );
  }

  return (
    <ConnectButton.Custom>
      {({ account, openAccountModal, openConnectModal }) => {
        if (account) {
          return (
            <button
              onClick={openAccountModal}
              className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-400"
            >
              {account.displayName}
            </button>
          );
        }

        return (
          <button
            onClick={openConnectModal}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:border-lime-400/30 hover:text-lime-400"
          >
            Connect
          </button>
        );
      }}
    </ConnectButton.Custom>
  );
}