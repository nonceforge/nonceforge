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
      <div className="h-10 w-32 rounded-full border border-white/10 bg-white/5" />
    );
  }

  return (
    <div className="relative z-[9999]">
      <ConnectButton />
    </div>
  );
}