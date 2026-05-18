"use client";

import { useAccount } from "wagmi";
import {
  useAccountModal,
  useConnectModal,
} from "@rainbow-me/rainbowkit";

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
      className="relative z-[9999] rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:border-lime-400/30 hover:text-lime-400"
    >
      {isConnected ? shortAddress : "Connect"}
    </button>
  );
}