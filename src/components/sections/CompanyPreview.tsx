import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
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
      <Container className="split-layout">
        <ImagePlaceholder
          path="public/images/company/company.webp"
          label="Unternehmensbild"
          variant="square"
        />
        <div className="split-layout__content">
          <p className="eyebrow">Unternehmen</p>
          <h2 id="company-title">Brennpunkt Logistik aus Wuppertal</h2>
          <p>
            Seit 2016 organisiert die Brennpunkt Logistik GmbH europaweite
            Transporte für Unternehmen aus Industrie, Handel und der
            Lebensmittelbranche. Unser Fokus liegt auf schneller Organisation,
            reibungslosen Abläufen und einer Kommunikation, auf die sich unsere
            Kunden verlassen können.
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
