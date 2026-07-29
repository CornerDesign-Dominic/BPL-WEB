import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero__content">
        <p className="eyebrow">Expresslogistik aus Wuppertal</p>
        <h1 id="hero-title">Wenn jede Minute zählt.</h1>
        <p className="hero__subheadline">Zeitkritische Transporte in Deutschland und Europa.</p>
        <p className="hero__intro">Unser Ziel: keine Zeit verlieren – und Ihren Transport sofort in Bewegung bringen.</p>
      </Container>
    </section>
  );
}
