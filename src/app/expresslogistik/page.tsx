import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Expresslogistik | Brennpunkt Logistik GmbH",
  description:
    "Zeitkritische Express- und Direkttransporte in Deutschland und Europa – kurzfristig organisiert durch Brennpunkt Logistik.",
};

const processSteps = [
  "Anfrage und Anforderungen kurzfristig prüfen",
  "passendes Fahrzeug organisieren",
  "direkte Fahrt ohne Umladung",
  "Transport während der Durchführung koordinieren",
  "Zustellung und aktuellen Stand klar kommunizieren",
];

const vehicles = ["Sprinter", "Klein-Lkw", "40-Tonner", "individuelle Sonderlösung"];

export default function ExpresslogistikPage() {
  return (
    <div className="site-shell">
      <Header />
      <main id="inhalt">
        <section className="express-hero" aria-labelledby="express-hero-title">
          <Container className="express-hero__content">
            <p className="eyebrow">Expresslogistik</p>
            <h1 id="express-hero-title">Wenn jede Minute zählt.</h1>
            <p className="express-hero__subheadline">
              Zeitkritische Transporte Europaweit
            </p>
          </Container>
        </section>

        <Section className="express-section" aria-labelledby="express-need-title">
          <Container>
            <div className="express-section__heading express-section__heading--need">
              <h2 id="express-need-title">Wann entstehen Express-Transporte?</h2>
              <p>
                Gründe für eine zügige Umsetzung können verschieden sein: Ein fehlendes Bauteil kann die Produktion aufhalten, eine dringend benötigte Ware muss kurzfristig verfügbar sein oder eine kritische Lieferung soll ihren verbindlichen Termin noch erreichen.
              </p>
              <p>
                All diese Situationen haben eines gemeinsam: Sie erfordern unverzügliches Handeln. Wir prüfen die Anfrage kurzfristig, organisieren das passende Fahrzeug und koordinieren die direkte Fahrt, damit Ihre Sendung zügig und zuverlässig ihr Ziel erreicht.
              </p>
            </div>
          </Container>
        </Section>

        <Section className="express-section express-section--surface" aria-labelledby="express-process-title">
          <Container>
            <div className="express-section__heading">
              <h2 id="express-process-title">Direkt organisiert. Klar umgesetzt.</h2>
            </div>
            <ul className="express-checklist">
              {processSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </Container>
        </Section>

        <Section className="express-section" aria-labelledby="express-vehicles-title">
          <Container className="express-two-column">
            <div className="express-section__heading">
              <h2 id="express-vehicles-title">Das passende Fahrzeug für Ihre Sendung</h2>
              <p>
                Je nach Größe, Gewicht und Dringlichkeit organisieren wir die passende Fahrzeuglösung.
              </p>
            </div>
            <ul className="express-vehicle-list">
              {vehicles.map((vehicle) => (
                <li key={vehicle}>{vehicle}</li>
              ))}
            </ul>
          </Container>
        </Section>

        <Section className="express-section express-section--surface" aria-labelledby="express-area-title">
          <Container>
            <div className="express-section__heading express-section__heading--compact">
              <h2 id="express-area-title">Deutschland und Europa</h2>
              <p>
                Wir organisieren Express- und Direkttransporte innerhalb Deutschlands sowie europaweit.
              </p>
            </div>
          </Container>
        </Section>

        <section className="express-cta" aria-labelledby="express-cta-title">
          <Container className="express-cta__content">
            <div>
              <h2 id="express-cta-title">Ihre Sendung kann nicht warten?</h2>
              <p>
                Senden Sie uns die wichtigsten Transportdaten. Wir prüfen kurzfristig die passende Lösung.
              </p>
            </div>
            <Button href="/#transportanfrage">Expressanfrage starten</Button>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
