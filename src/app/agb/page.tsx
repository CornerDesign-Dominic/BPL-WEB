import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "AGB | Brennpunkt Logistik GmbH",
  description: "Allgemeine Geschäftsbedingungen der Brennpunkt Logistik GmbH.",
};

export default function AgbPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="legal-page">
        <div className="page-container">
          <h1>AGB</h1>
          <p>Inhalt wird noch ergänzt.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
