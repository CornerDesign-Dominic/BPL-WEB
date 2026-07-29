import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function ServicesOverview() {
  return (
    <Section className="service-focus" id="leistungen" aria-labelledby="services-title">
      <Container>
        <div className="service-focus__intro">
          <p className="eyebrow">Unser Anspruch</p>
          <h2 id="services-title"><span>Schnell von A nach B</span><span>Ohne Umwege. Ohne Zeitverlust</span></h2>
          <p>
            Ihre Transportanforderung steht bei uns im Mittelpunkt. Wir organisieren
            zeitkritische Sendungen so direkt und effizient wie möglich – mit klaren
            Abläufen, kurzen Entscheidungswegen und transparenter Kommunikation.
          </p>
        </div>
        <article className="service-focus__core">
          <p className="eyebrow">Unsere Kernleistung</p>
          <h3>Express- und Direkttransporte</h3>
          <p>
            Wenn eine Sendung nicht warten kann, stellen wir kurzfristig das passende
            Fahrzeug bereit und bringen Ihren Transport direkt ans Ziel. Je nach
            Anforderung ist eine Fahrzeugbereitstellung bereits ab einer Vorlaufzeit
            von vier Stunden bis Ladebeginn möglich.
          </p>
          <p>
            Während des gesamten Transportprozesses koordinieren wir den Ablauf,
            reagieren flexibel auf Veränderungen und halten Sie über den aktuellen
            Stand informiert. So entsteht eine Transportlösung, die schnell organisiert,
            zuverlässig umgesetzt und klar begleitet wird.
          </p>
        </article>
      </Container>
    </Section>
  );
}
