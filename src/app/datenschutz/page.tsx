import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Datenschutz | Brennpunkt Logistik GmbH",
  description: "Datenschutzhinweise der Brennpunkt Logistik GmbH.",
};

export default function DatenschutzPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="legal-page">
        <div className="page-container">
          <h1>Datenschutz</h1>
          <p>Inhalt wird noch ergänzt.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
