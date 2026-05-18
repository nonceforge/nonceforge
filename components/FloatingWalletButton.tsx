"use client";

import WalletConnectButton from "./WalletConnectButton";

export default function FloatingWalletButton() {
  return (
    <div className="fixed right-4 top-4 z-[999999] pointer-events-auto">
      <WalletConnectButton />
    </div>
  );
}