import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const services = [
  {
    number: "01",
    title: "Express- und Sonderfahrten",
    text: "Direkte und kurzfristig organisierte Transporte für zeitkritische Sendungen.",
  },
  {
    number: "02",
    title: "Regelmäßige Transporte",
    text: "Planbare Kapazitäten und verlässliche Abläufe für wiederkehrende Transportbedarfe.",
  },
  {
    number: "03",
    title: "Sammelgut und Stückgut",
    text: "Wirtschaftliche Lösungen für kleinere und gebündelte Sendungen.",
  },
  {
    number: "04",
    title: "Spezial- und Projekttransporte",
    text: "Individuelle Planung für besondere Abmessungen und komplexe Anforderungen.",
  },
];

export function ServicesOverview() {
  return (
    <Section className="section--surface" id="leistungen" aria-labelledby="services-title">
      <Container>
        <div className="section-heading">
          <p className="eyebrow">Leistungen</p>
          <h2 id="services-title">Unsere Kernleistungen</h2>
          <p>
            Passende Transportlösungen für zeitkritische, regelmäßige und
            besondere Anforderungen.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <p className="service-card__number">{service.number}</p>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="text-link">
                Mehr erfahren
              </span>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
