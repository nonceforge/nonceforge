import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MiningDashboard from "@/components/MiningDashboard";

export default function MiningPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <MiningDashboard />
      </section>

      <Footer />
    </main>
  );
}