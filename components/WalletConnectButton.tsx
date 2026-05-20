"use client";

export default function WalletConnectButton() {
  return (
    <button
      type="button"
      onClick={() => alert("Connect berhasil diklik")}
      onTouchStart={() => alert("Connect berhasil disentuh")}
      className="w-full max-w-xs rounded-full border border-lime-400/30 bg-lime-400/10 px-6 py-4 text-center text-base font-bold text-lime-400"
    >
      Connect
    </button>
  );
}