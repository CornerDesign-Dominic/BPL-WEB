import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Über uns | Brennpunkt Logistik GmbH",
  description: "Brennpunkt Logistik: persönlich, flexibel und zuverlässig für Ihre Transportorganisation.",
};

export default function UeberUnsPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="legal-page about-page" id="inhalt">
        <div className="page-container">
          <h1>Über uns</h1>
          <p className="about-page__intro">
            Brennpunkt Logistik organisiert seit 2016 Transporte für Unternehmen aus Industrie, Handel und Lebensmittelwirtschaft.
          </p>
          <section className="about-page__content" aria-labelledby="about-approach-title">
            <h2 id="about-approach-title">Persönlich. Flexibel. Verlässlich.</h2>
            <p>
              Unser Anspruch ist es, erreichbar zu bleiben, schnell zu entscheiden und Transporte zuverlässig zum Abschluss zu bringen.
            </p>
            <p>
              Mit kurzen Entscheidungswegen und persönlicher Betreuung finden wir auch für zeitkritische Anforderungen die passende Lösung.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
