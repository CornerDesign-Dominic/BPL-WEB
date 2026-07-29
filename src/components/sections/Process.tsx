import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const steps = [
  "Anfrage übermitteln",
  "Anforderungen prüfen",
  "Fahrzeug und Route organisieren",
  "Transport begleiten",
  "Zustellung abschließen",
];

export function Process() {
  return (
    <Section className="process-section" aria-labelledby="process-title">
      <Container>
        <div className="section-heading">
          <p className="eyebrow">Ablauf</p>
          <h2 id="process-title">Ihre Transportanforderung steht im Mittelpunkt</h2>
          <p>
            Von der ersten Anfrage bis zur Zustellung begleiten wir Ihren
            Transport mit klaren Abläufen und transparenter Kommunikation.
          </p>
        </div>
        <ol className="process-list">
          {steps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
