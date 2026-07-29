import { Container } from "@/components/ui/Container";

const benefits = [
  "Europaweite Transportlösungen",
  "Kurze Entscheidungswege",
  "Transparente Kommunikation",
  "Feste Ansprechpartner",
];

export function BenefitsBar() {
  return (
    <section className="benefits-bar" aria-label="Brennpunkt Logistik auf einen Blick">
      <Container>
        <ul>
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
