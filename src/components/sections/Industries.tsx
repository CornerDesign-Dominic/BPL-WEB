import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const industries = [
  {
    title: "Industrie",
    text: "Zeitkritische Versorgung für Produktion, Instandhaltung und abgestimmte Lieferfenster.",
  },
  {
    title: "Handel",
    text: "Verlässliche Warenbewegungen für Filialen, Lager und eng getaktete Lieferketten.",
  },
  {
    title: "Lebensmittelwirtschaft",
    text: "Passende Disposition für sensible Warenströme und verbindliche Zustelltermine.",
  },
];

export function Industries() {
  return (
    <Section className="section--surface section--after-request" id="branchen" aria-labelledby="industries-title">
      <Container>
        <div className="section-heading">
          <p className="eyebrow">Branchen</p>
          <h2 id="industries-title">Für Branchen mit verbindlichen Zeitfenstern</h2>
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
