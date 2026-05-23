import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Roadmap from "@/components/Roadmap";

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-28">
        <Roadmap />
      </section>

      <Footer />
    </main>
  );
}