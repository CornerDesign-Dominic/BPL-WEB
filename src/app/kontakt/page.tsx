import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Kontakt | Brennpunkt Logistik GmbH",
  description: "Kontaktdaten der Brennpunkt Logistik GmbH für allgemeine und zeitkritische Transportanfragen.",
};

export default function KontaktPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="legal-page contact-page">
        <div className="page-container">
          <h1>Kontakt</h1>
          <div className="contact-page__details">
            <section className="contact-page__group" aria-labelledby="contact-general-title">
              <h2 id="contact-general-title">Allgemein</h2>
              <a href="tel:+4920226155771">+49 202 26155-771</a>
              <a href="mailto:info@brennpunkt-logistik.de">info@brennpunkt-logistik.de</a>
            </section>
            <section className="contact-page__group" aria-labelledby="contact-express-title">
              <h2 id="contact-express-title">Express</h2>
              <a href="tel:+4920226155771">+49 202 26155-771</a>
              <a href="mailto:express@brennpunkt-logistik.de">express@brennpunkt-logistik.de</a>
            </section>
            <section className="contact-page__group" aria-labelledby="contact-address-title">
              <h2 id="contact-address-title">Adresse</h2>
              <address>Reinshagenstraße 1<br />42369 Wuppertal</address>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
