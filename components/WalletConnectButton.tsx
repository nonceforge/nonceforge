"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function WalletConnectButton() {
  return (
    <div className="relative z-[9999]">
      <ConnectButton.Custom>
        {({
          account,
          mounted,
          openAccountModal,
          openConnectModal,
        }) => {
          if (!mounted) return null;

          if (account) {
            return (
              <button
                onClick={openAccountModal}
                className="rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-xs font-bold text-green-400"
              >
                {account.displayName}
              </button>
            );
          }

          return (
            <button
              onClick={openConnectModal}
              className="rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-xs font-bold text-green-400"
            >
              Connect
            </button>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
}