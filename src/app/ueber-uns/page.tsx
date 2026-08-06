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
            <div className="section-heading about-section__heading--compact">
              <h2 id="about-approach-title">Wofür wir stehen</h2>
              <p>
                Transporte sind für uns mehr als die Fahrt von A nach B. Entscheidend sind klare Absprachen, eine verlässliche Organisation und ein persönlicher Ansprechpartner, der vom ersten Kontakt bis zur erfolgreichen Zustellung erreichbar bleibt.
              </p>
            </div>
          </Container>
        </Section>

        <Section className="about-section about-section--surface" aria-labelledby="about-work-title">
          <Container className="about-work">
            <div>
              <p className="eyebrow">Zusammenarbeit</p>
              <h2 id="about-work-title">Offen im Austausch. Stark in der Zusammenarbeit.</h2>
            </div>
            <div className="about-work__text">
              <p>
                Wir setzen auf klare Absprachen, direkte Kommunikation und verlässliche Ansprechpartner. Herausforderungen sprechen wir offen an und lösen sie gemeinsam – schnell, pragmatisch und partnerschaftlich.
              </p>
            </div>
          </Container>
        </Section>

        <Section className="about-section" aria-label="Mission und Vision">
          <Container>
            <div className="about-guiding">
              <article>
                <h3>Unsere Mission</h3>
                <p>Wir finden für jede Transportanforderung schnell eine verlässliche Lösung. Durch transparente Kommunikation schaffen wir Vertrauen und mit Verantwortung langfristige Partnerschaften.</p>
              </article>
              <article>
                <h3>Unsere Vision</h3>
                <p>Wir wollen Logistik so verlässlich machen, dass unsere Kunden auch in zeitlich herausfordernden Situationen jederzeit sicher planen können.</p>
              </article>
            </div>
          </Container>
        </Section>

        <Section className="about-section about-section--progress" aria-labelledby="about-progress-title">
          <Container className="about-progress">
            <div>
              <p className="eyebrow">Weiterentwicklung</p>
              <h2 id="about-progress-title">Mit dem Fluss</h2>
            </div>
            <div className="about-progress__text">
              <p>
                Die Zeit verändert sich – und wir gehen mit. Anforderungen an Transport und Logistik entwickeln sich weiter, deshalb hinterfragen wir unsere Abläufe und entwickeln sie kontinuierlich weiter.
              </p>
              <p>
                Unsere Ziele sind klar: Ein wichtiger Punkt auf unserer Agenda ist die ISO-9001-Zertifizierung bis 2030. Sie soll unsere Prozesse weiter stärken und unsere Qualität langfristig nachvollziehbar machen.
              </p>
            </div>
          </Container>
        </Section>

        <Section className="about-section" aria-labelledby="about-regular-title">
          <Container className="about-regular">
            <div>
              <p className="eyebrow">Leistungen</p>
              <h2 id="about-regular-title">Regelmäßige Transporte</h2>
            </div>
            <div className="about-regular__text">
              <p>
                Durch unsere Erfahrung im Expressbereich können wir selbstverständlich auch reguläre Transporte abbilden und anbieten. Dazu gehören beispielsweise Liniengeschäfte sowie regelmäßige und wiederkehrende Transporte.
              </p>
              <a href="/regelmaessige-transporte">Mehr zu regelmäßigen Transporten</a>
            </div>
          </Container>
        </Section>

        <section className="about-cta" aria-labelledby="about-cta-title">
          <Container className="about-cta__content">
            <div>
              <h2 id="about-cta-title">Lernen Sie uns kennen.</h2>
              <p>Sie haben eine Transportanfrage oder möchten mehr über unsere Arbeitsweise erfahren?</p>
            </div>
            <Button href="/kontakt">Zur Kontaktseite</Button>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
