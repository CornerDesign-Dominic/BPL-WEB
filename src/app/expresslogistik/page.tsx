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
                Gründe für eine zügige Umsetzung können verschieden sein: ein fehlendes Bauteil, eine dringend benötigte Ware oder eine unerwartete Bestellung. Von der Beschaffung bis zur Distribution können viele Ereignisse einen Expresstransport zur Folge haben.
              </p>
              <p>
                All diese Situationen haben eines gemeinsam: Sie erfordern unverzügliches Handeln.
              </p>
            </div>
          </Container>
        </Section>

        <Section className="express-section express-section--surface" aria-labelledby="express-process-title">
          <Container>
            <div className="express-section__heading express-section__heading--compact">
              <h2 id="express-process-title">Worauf kommt es jetzt an?</h2>
              <p>
                Entscheidend sind vollständige und klare Angaben zu Abholung, Zustellung, Sendungsmaß, Gewicht und Termin. So kann schnell das passende Fahrzeug organisiert und der Transport ohne unnötigen Zeitverlust zuverlässig umgesetzt werden.
              </p>
            </div>
          </Container>
        </Section>

        <Section className="express-section" aria-labelledby="express-vehicles-title">
          <Container>
            <div className="express-section__heading express-section__heading--compact">
              <h2 id="express-vehicles-title">Kapazität finden</h2>
              <p>
                Sind die Rahmenbedingungen klar, muss der passende Frachtraum gefunden werden. Genau hier kommen wir mit Erfahrung, einem verlässlichen Netzwerk und kurzen Entscheidungswegen ins Spiel.
              </p>
              <p>
                Wir stimmen Fahrzeuggröße, Ladefläche und Verfügbarkeit auf Ihre Sendung ab und organisieren die Kapazität so, dass der Transport ohne unnötige Verzögerung starten kann.
              </p>
            </div>
          </Container>
        </Section>

        <section className="express-cta" aria-labelledby="express-cta-title">
          <Container className="express-cta__content">
            <div>
              <h2 id="express-cta-title">Ihre Sendung kann nicht warten?</h2>
              <p>
                Senden Sie uns Ihre Anfrage und verlieren Sie keine weitere Zeit.<br />
                Jede Minute zählt.
              </p>
            </div>
            <div className="express-cta__actions">
              <Button href="/#transportanfrage">Zum Angebotsformular</Button>
              <div className="express-cta__contact">
                <a href="mailto:express@brennpunkt-logistik.de">express@brennpunkt-logistik.de</a>
                <a href="tel:+4920226155771">0202-26155771</a>
              </div>
            </div>
          </Container>
        </section>

        <Section className="express-about" aria-labelledby="express-about-title">
          <Container className="express-about__content">
            <h2 id="express-about-title">Warum Brennpunkt Logistik?</h2>
            <p>
              Wir verbinden kurze Entscheidungswege mit persönlicher Betreuung und zuverlässiger Transportorganisation.
            </p>
            <p>
              So behalten Sie auch bei zeitkritischen Sendungen einen klaren Ansprechpartner und eine Lösung, die zu Ihrem Bedarf passt.
            </p>
            <a className="express-about__link" href="/ueber-uns">Mehr über uns</a>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
