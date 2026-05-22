import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocsContent from "@/components/DocsContent";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-28">
        <DocsContent />
      </section>

      <Footer />
    </main>
  );
}