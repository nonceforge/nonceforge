import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LaunchButton from "@/components/LaunchButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="flex min-h-[85vh] items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-green-400">
            Proof of Work Mining
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            NonceForge
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400">
            Mine blocks, compete on the leaderboard, and earn rewards through
            a wallet-powered mining dashboard.
          </p>

          <LaunchButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}