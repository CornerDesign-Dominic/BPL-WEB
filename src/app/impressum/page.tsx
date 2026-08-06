import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Impressum | Brennpunkt Logistik GmbH",
  description: "Impressum der Brennpunkt Logistik GmbH.",
};

export default function ImpressumPage() {
  return (
    <div className="site-shell">
      <Header />
      <main id="inhalt">
        <section className="legal-hero" aria-labelledby="legal-title">
          <Container className="legal-hero__content">
            <p className="eyebrow">Rechtliches</p>
            <h1 id="legal-title">Impressum</h1>
            <p>Angaben zur Brennpunkt Logistik GmbH.</p>
          </Container>
        </section>
        <Section className="legal-section" aria-labelledby="legal-content-title">
          <Container>
            <article className="legal-document">
              <h2 id="legal-content-title">Impressum</h2>
              <p>Inhalt wird noch ergänzt.</p>
            </article>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
