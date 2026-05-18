import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Tokenomics from "@/components/Tokenomics";
import MiningTabs from "@/components/MiningTabs";

export default function TokenomicsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-28">
        <MiningTabs />
        <Tokenomics />
      </section>

      <Footer />
    </main>
  );
}