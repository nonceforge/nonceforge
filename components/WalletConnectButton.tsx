"use client";

export default function WalletConnectButton() {
  const testClick = () => {
    alert("Connect berhasil disentuh");
  };

  return (
    <button
      type="button"
      onClick={testClick}
      onTouchStart={testClick}
      onPointerDown={testClick}
      className="fixed right-4 top-4 z-[999999] rounded-full border border-lime-400/30 bg-black px-4 py-2 text-sm font-bold text-lime-400"
    >
      Connect
    </button>
  );
}