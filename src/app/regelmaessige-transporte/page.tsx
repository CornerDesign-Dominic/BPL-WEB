import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Regelmäßige Transporte | Brennpunkt Logistik GmbH",
  description: "Planbare und wiederkehrende Transporte sowie Liniengeschäfte mit Brennpunkt Logistik.",
};

export default function RegelmaessigeTransportePage() {
  return (
    <div className="site-shell">
      <Header />
      <main id="inhalt">
        <section className="regular-hero" aria-labelledby="regular-title">
          <Container className="regular-hero__content">
            <p className="eyebrow">Leistungen</p>
            <h1 id="regular-title">Regelmäßige Transporte</h1>
            <p>Planbar organisiert für wiederkehrende Verkehre und Liniengeschäfte.</p>
          </Container>
        </section>

        <Section className="regular-section" aria-labelledby="regular-benefit-title">
          <Container className="regular-layout">
            <div>
              <p className="eyebrow">Planbare Abläufe</p>
              <h2 id="regular-benefit-title">Verlässlich im Takt Ihres Geschäfts</h2>
            </div>
            <div className="regular-layout__text">
              <p>
                Wiederkehrende Transporte brauchen klare Abläufe, verlässliche Kapazitäten und eine Organisation, auf die Sie sich verlassen können.
              </p>
              <p>
                Wir planen regelmäßige Abholungen und Zustellungen passend zu Ihren Anforderungen und sorgen dafür, dass Ihre Transporte dauerhaft gut eingebunden sind.
              </p>
            </div>
          </Container>
        </Section>

        <Section className="regular-section regular-section--surface" aria-labelledby="regular-types-title">
          <Container>
            <div className="section-heading">
              <h2 id="regular-types-title">Geeignet für regelmäßige Verkehre</h2>
              <p>Wenn Transporte planbar wiederkehren, schaffen feste Abläufe Klarheit und Entlastung.</p>
            </div>
            <div className="regular-types">
              <article>
                <h3>Liniengeschäfte</h3>
                <p>Für definierte Strecken und wiederkehrende Transportbedarfe.</p>
              </article>
              <article>
                <h3>Regelmäßige Abholungen</h3>
                <p>Für feste Zeitfenster und abgestimmte Abläufe an Ihren Standorten.</p>
              </article>
              <article>
                <h3>Wiederkehrende Zustellungen</h3>
                <p>Für planbare Lieferungen an Empfänger, Filialen oder Partner.</p>
              </article>
            </div>
          </Container>
        </Section>

        <section className="regular-cta" aria-labelledby="regular-cta-title">
          <Container className="regular-cta__content">
            <div>
              <h2 id="regular-cta-title">Regelmäßigen Transport besprechen.</h2>
              <p>Teilen Sie uns Ihre Anforderungen mit. Gemeinsam finden wir den passenden Ablauf.</p>
            </div>
            <Button href="/#transportanfrage">Transportanfrage starten</Button>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
