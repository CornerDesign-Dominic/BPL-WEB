import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const industries = [
  {
    title: "Industrie",
    text: "Transportorganisation für Anforderungen aus industriellen Liefer- und Produktionsabläufen.",
  },
  {
    title: "Handel",
    text: "Transportlösungen für Warenbewegungen im Handel und entlang abgestimmter Lieferketten.",
  },
  {
    title: "Lebensmittelbranche",
    text: "Transportorganisation für Anforderungen aus der Lebensmittelbranche.",
  },
];

export function Industries() {
  return (
    <Section className="section--surface" id="branchen" aria-labelledby="industries-title">
      <Container>
        <div className="section-heading">
          <p className="eyebrow">Branchen</p>
          <h2 id="industries-title">Lösungen für unterschiedliche Branchen</h2>
        </div>
        <div className="industry-grid">
          {industries.map((industry) => (
            <article className="industry-card" key={industry.title}>
              <h3>{industry.title}</h3>
              <p>{industry.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
