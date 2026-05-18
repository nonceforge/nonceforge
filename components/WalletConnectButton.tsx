"use client";

export default function WalletConnectButton() {
  return (
    <button
      type="button"
      onClick={() => alert("Tombol Connect bisa diklik")}
      className="relative z-[99999] rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white"
    >
      Connect
    </button>
  );
}