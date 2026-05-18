import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MiningTabs from "@/components/MiningTabs";

export default function MiningPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
            NonceForge App
          </p>

          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Mining Dashboard
          </h1>

          <p className="max-w-2xl text-gray-400">
            Mine valid nonces, track leaderboard rankings, review tokenomics,
            and read protocol documentation.
          </p>
        </div>

        <MiningTabs />
      </section>

      <Footer />
    </main>
  );
}