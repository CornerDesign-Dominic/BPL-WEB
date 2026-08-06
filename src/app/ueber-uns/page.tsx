import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Über uns | Brennpunkt Logistik GmbH",
  description: "Brennpunkt Logistik: persönlich, flexibel und zuverlässig für Ihre Transportorganisation.",
};

export default function UeberUnsPage() {
  return (
    <div className="site-shell">
      <Header />
      <main id="inhalt">
        <section className="about-hero" aria-labelledby="about-title">
          <Container className="about-hero__content">
            <p className="eyebrow">Über uns</p>
            <h1 id="about-title">Logistik, die persönlich bleibt.</h1>
            <p>
              Brennpunkt Logistik organisiert seit 2016 Transporte für Unternehmen aus Industrie, Handel und Lebensmittelwirtschaft.
            </p>
          </Container>
        </section>

        <Section className="about-section" aria-labelledby="about-approach-title">
          <Container>
            <div className="section-heading">
              <h2 id="about-approach-title">Wofür wir stehen</h2>
              <p>
                Transporte sind für uns mehr als die Fahrt von A nach B. Entscheidend sind klare Absprachen, verlässliche Organisation und ein Ansprechpartner, der erreichbar bleibt.
              </p>
            </div>
            <div className="about-values">
              <article>
                <h3>Persönliche Betreuung</h3>
                <p>Wir hören zu, klären die Anforderungen und begleiten Ihre Anfrage vom ersten Gespräch bis zur Zustellung.</p>
              </article>
              <article>
                <h3>Kurze Entscheidungswege</h3>
                <p>Wenn Zeit entscheidend ist, schaffen direkte Abstimmungen die Grundlage für schnelle und klare Entscheidungen.</p>
              </article>
              <article>
                <h3>Flexible Organisation</h3>
                <p>Jede Sendung bringt eigene Voraussetzungen mit. Wir richten die Transportlösung an Ihrem tatsächlichen Bedarf aus.</p>
              </article>
            </div>
          </Container>
        </Section>

        <Section className="about-section about-section--surface" aria-labelledby="about-work-title">
          <Container className="about-work">
            <div>
              <p className="eyebrow">Zusammenarbeit</p>
              <h2 id="about-work-title">Klar organisiert. Verlässlich begleitet.</h2>
            </div>
            <div className="about-work__text">
              <p>
                Unser Anspruch ist es, Transporte zuverlässig zum Abschluss zu bringen – von der ersten Anfrage über die Disposition bis zur Ankunft am Ziel.
              </p>
              <p>
                Dabei setzen wir auf partnerschaftliche Zusammenarbeit, nachvollziehbare Kommunikation und Lösungen, die im Alltag funktionieren.
              </p>
            </div>
          </Container>
        </Section>

        <section className="about-cta" aria-labelledby="about-cta-title">
          <Container className="about-cta__content">
            <div>
              <h2 id="about-cta-title">Lernen Sie uns kennen.</h2>
              <p>Sie haben eine Transportanfrage oder möchten mehr über unsere Arbeitsweise erfahren?</p>
            </div>
            <Button href="/#transportanfrage">Transportanfrage starten</Button>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
