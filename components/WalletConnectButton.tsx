"use client";

export default function WalletConnectButton() {
  return (
    <button
      type="button"
      onClick={() => alert("Berhasil diklik")}
      className="rounded-full border border-lime-400/30 bg-black px-4 py-2 text-sm font-bold text-lime-400"
    >
      Connect
    </button>
  );
}