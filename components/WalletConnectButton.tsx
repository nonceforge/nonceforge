"use client";

import { useAccount } from "wagmi";
import { useAccountModal, useConnectModal } from "@rainbow-me/rainbowkit";

export default function WalletConnectButton() {
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();

  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : "Connect";

  return (
    <button
      type="button"
      onClick={() => {
        if (isConnected) {
          openAccountModal?.();
        } else {
          openConnectModal?.();
        }
      }}
      className="rounded-full border border-lime-400/30 bg-lime-400/10 px-5 py-2 text-sm font-bold text-lime-400"
    >
      {isConnected ? shortAddress : "Connect"}
    </button>
  );
}