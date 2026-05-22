import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <Link href="/" className="flex items-center gap-3">
          <img src="/icon.png" alt="NonceForge" className="h-8 w-8" />

          <span className="text-lg font-bold tracking-wide text-white">
            NonceForge
          </span>
        </Link>

        <p className="hidden text-sm text-zinc-600 md:block">
          © 2026 NonceForge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}