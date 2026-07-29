import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Impressum | Brennpunkt Logistik GmbH",
  description: "Impressum der Brennpunkt Logistik GmbH.",
};

export default function ImpressumPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="legal-page">
        <div className="page-container">
          <h1>Impressum</h1>
          <p>Inhalt wird noch ergänzt.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
