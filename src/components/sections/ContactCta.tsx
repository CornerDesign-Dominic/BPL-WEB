import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function ContactCta() {
  return (
    <section className="contact-cta" id="kontakt" aria-labelledby="contact-title">
      <Container className="contact-cta__inner">
        <div>
          <p className="eyebrow eyebrow--light">Kontakt</p>
          <h2 id="contact-title">Sie haben eine Transportanfrage?</h2>
        </div>
        <div className="contact-cta__content">
          <p>
            Sprechen Sie mit uns über Ihre Anforderungen. Wir prüfen kurzfristig,
            welche Transportlösung zu Ihrem Bedarf passt.
          </p>
          <div className="contact-cta__actions">
            <Button href="mailto:info@brennpunkt-logistik.de" variant="secondary">
              Transport anfragen
            </Button>
            <Button href="mailto:express@brennpunkt-logistik.de" variant="secondary">
              Express kontaktieren
            </Button>
          </div>
          <div className="contact-details">
            <div>
              <span>Allgemein</span>
              <a href="tel:+4920226155771">+49 202 26155-771</a>
              <a href="mailto:info@brennpunkt-logistik.de">
                info@brennpunkt-logistik.de
              </a>
            </div>
            <div>
              <span>Express</span>
              <a href="tel:+4920226155771">+49 202 26155-771</a>
              <a href="mailto:express@brennpunkt-logistik.de">
                express@brennpunkt-logistik.de
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
