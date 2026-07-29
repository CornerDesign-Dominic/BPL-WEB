import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const trustPoints = [
  "europaweite Transportlösungen",
  "kurze Entscheidungswege",
  "feste Ansprechpartner",
  "seit 2016",
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero__content">
        <p className="eyebrow">Logistik aus Wuppertal</p>
        <h1 id="hero-title">Express-, Regel- und Spezialtransporte in ganz Europa</h1>
        <p className="hero__intro">
          Wir organisieren Transporte für Industrie, Handel und die
          Lebensmittelbranche – schnell, zuverlässig und mit festen
          Ansprechpartnern.
        </p>
        <div className="hero__actions">
          <Button href="#transportanfrage">Transport anfragen</Button>
          <Button href="tel:+4920226155771" variant="secondary">
            Express direkt anfragen
          </Button>
        </div>
        <ul className="trust-points" aria-label="Vorteile">
          {trustPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
