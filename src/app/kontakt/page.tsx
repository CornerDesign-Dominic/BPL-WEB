import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Kontakt | Brennpunkt Logistik GmbH",
  description: "Kontaktdaten der Brennpunkt Logistik GmbH für allgemeine und zeitkritische Transportanfragen.",
};

export default function KontaktPage() {
  return (
    <div className="site-shell">
      <Header />
      <main id="inhalt">
        <section className="contact-hero" aria-labelledby="contact-title">
          <Container className="contact-hero__content">
            <p className="eyebrow">Kontakt</p>
            <h1 id="contact-title">Direkt erreichbar, wenn es darauf ankommt.</h1>
            <p>
              Ob allgemeine Transportanfrage oder zeitkritische Sendung: Wir sind persönlich für Sie da.
            </p>
          </Container>
        </section>

        <Section className="contact-section" aria-labelledby="contact-details-title">
          <Container>
            <div className="section-heading">
              <h2 id="contact-details-title">So erreichen Sie uns</h2>
              <p>Wählen Sie den passenden Kontaktweg für Ihr Anliegen.</p>
            </div>
            <div className="contact-details">
              <section className="contact-card" aria-labelledby="contact-general-title">
                <h3 id="contact-general-title">Allgemeine Anfragen</h3>
                <p>Für Fragen rund um unsere Leistungen und Ihre Transportorganisation.</p>
                <a href="tel:+4920226155771">+49 202 26155-771</a>
                <a href="mailto:info@brennpunkt-logistik.de">info@brennpunkt-logistik.de</a>
              </section>
              <section className="contact-card" aria-labelledby="contact-express-title">
                <h3 id="contact-express-title">Expressanfragen</h3>
                <p>Für zeitkritische Transporte und kurzfristige Anforderungen.</p>
                <a href="tel:+4920226155771">+49 202 26155-771</a>
                <a href="mailto:express@brennpunkt-logistik.de">express@brennpunkt-logistik.de</a>
              </section>
              <section className="contact-card" aria-labelledby="contact-address-title">
                <h3 id="contact-address-title">Standort</h3>
                <address>Reinshagenstraße 1<br />42369 Wuppertal</address>
              </section>
              <section className="contact-card" aria-labelledby="contact-hours-title">
                <h3 id="contact-hours-title">Öffnungszeiten</h3>
                <p>Montag bis Freitag<br />08:00–17:00 Uhr</p>
              </section>
            </div>
          </Container>
        </Section>

        <section className="contact-cta" aria-labelledby="contact-cta-title">
          <Container className="contact-cta__content">
            <div>
              <h2 id="contact-cta-title">Transport direkt anfragen.</h2>
              <p>Über unser Angebotsformular übermitteln Sie uns die wichtigsten Eckdaten Ihrer Sendung.</p>
            </div>
            <Button href="/#transportanfrage">Zum Angebotsformular</Button>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
