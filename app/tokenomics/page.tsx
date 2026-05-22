import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Tokenomics from "@/components/Tokenomics";

export default function TokenomicsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-28">
        <Tokenomics />
      </section>

      <Footer />
    </main>
  );
}