import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero__content">
        <h1 id="hero-title">Expresslogistik aus Wuppertal</h1>
        <p className="hero__subheadline">Transporte in Deutschland und Europa.</p>
        <div className="hero__goal">
          <p className="eyebrow">Unser Ziel</p>
          <p className="hero__intro">Keine Zeit verlieren – und Ihren Transport sofort in Bewegung bringen.</p>
        </div>
      </Container>
    </section>
  );
}
