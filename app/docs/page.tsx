import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocsContent from "@/components/DocsContent";
import MiningTabs from "@/components/MiningTabs";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-28">
        <MiningTabs />
        <DocsContent />
      </section>

      <Footer />
    </main>
  );
}