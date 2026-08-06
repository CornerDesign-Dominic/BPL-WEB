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

const useCases = [
  {
    title: "Produktionsausfall",
    text: "Ein Bauteil oder Material fehlt und die Produktion steht oder droht stillzustehen.",
  },
  {
    title: "Kurzfristige Bestellung",
    text: "Eine dringend benötigte Ware muss schneller als über den regulären Transportweg geliefert werden.",
  },
  {
    title: "Verpasste oder kritische Lieferung",
    text: "Eine Sendung wurde verspätet, falsch disponiert oder muss einen verbindlichen Termin noch erreichen.",
  },
];

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
            <div className="express-section__heading">
              <h2 id="express-need-title">Wann entstehen Express-Transporte?</h2>
              <p>
                Expresslogistik kommt immer dann zum Einsatz, wenn Verzögerungen direkte Folgen für Produktion, Termine oder Kunden haben.
              </p>
            </div>
            <div className="express-use-cases">
              {useCases.map(({ title, text }) => (
                <article className="express-use-case" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
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
