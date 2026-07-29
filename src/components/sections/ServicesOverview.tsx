import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const services = [
  {
    number: "01",
    title: "Express- und zeitkritische Transporte",
    text: "Direktfahrten und kurzfristige Disposition, wenn Ihre Sendung ohne Umwege ans Ziel muss.",
    emphasis: "primary",
  },
  {
    number: "02",
    title: "Regelmäßige Transporte",
    text: "Planbare Kapazitäten und verlässliche Abläufe für wiederkehrende Transportbedarfe.",
    emphasis: "secondary",
  },
  {
    number: "03",
    title: "Ergänzende Transportlösungen",
    text: "Sammelgut, Sprinterlösungen sowie Spezial- und weitere Transporte passend zu Ihrer Anforderung.",
    emphasis: "supporting",
  },
];

export function ServicesOverview() {
  return (
    <Section className="section--surface" id="leistungen" aria-labelledby="services-title">
      <Container>
        <div className="section-heading">
          <p className="eyebrow">Leistungen</p>
          <h2 id="services-title">Transportlösungen mit klarem Schwerpunkt</h2>
          <p>
            Wenn es eilt, organisieren wir direkt. Für wiederkehrende und
            besondere Anforderungen entwickeln wir den passenden Ablauf.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className={`service-card service-card--${service.emphasis}`} key={service.number}>
              <p className="service-card__number">{service.number}</p>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
