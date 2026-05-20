"use client";

import { motion } from "framer-motion";
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
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.94,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 18,
      }}
      type="button"
      onClick={() => {
        if (isConnected) {
          openAccountModal?.();
        } else {
          openConnectModal?.();
        }
      }}
      className="
        relative
        overflow-hidden
        rounded-full
        border
        border-lime-400/30
        bg-lime-400/10
        px-5
        py-2
        text-sm
        font-bold
        text-lime-400
        shadow-[0_0_18px_rgba(132,204,22,0.35)]
      "
    >
      <span className="relative z-10">
        {isConnected ? shortAddress : "Connect"}
      </span>

      <span
        className="
          pointer-events-none
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
          transition-transform
          duration-700
          hover:translate-x-full
        "
      />
    </motion.button>
  );
}