import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const companyPoints = [
  "partnerschaftliche Zusammenarbeit",
  "kurze Entscheidungswege",
  "flexible Transportorganisation",
  "persönliche Betreuung",
];

export function CompanyPreview() {
  return (
    <Section id="unternehmen" aria-labelledby="company-title">
      <Container className="company-layout">
        <div className="company-layout__index" aria-hidden="true">
          <span>Seit</span>
          <strong>2016</strong>
          <span>Wuppertal</span>
        </div>
        <div className="split-layout__content">
          <p className="eyebrow">Unternehmen</p>
          <h2 id="company-title">Brennpunkt Logistik aus Wuppertal</h2>
          <p>
            Brennpunkt Logistik organisiert seit 2016 Transporte für Unternehmen
            aus Industrie, Handel und Lebensmittelwirtschaft. Unser Anspruch:
            erreichbar bleiben, schnell entscheiden und Transporte verlässlich
            zum Abschluss bringen.
          </p>
          <ul className="company-points">
            {companyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
