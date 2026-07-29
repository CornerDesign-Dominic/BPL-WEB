import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero__content">
        <p className="eyebrow">Expresslogistik aus Wuppertal</p>
        <h1 id="hero-title">Wenn jede Stunde zählt.</h1>
        <p className="hero__subheadline">Zeitkritische Transporte in Deutschland und Europa.</p>
        <p className="hero__intro">
          Wir organisieren Express-, Direkt- und Sonderfahrten kurzfristig,
          persönlich und mit klarer Kommunikation.
        </p>
        <div className="hero__actions">
          <Button href="#transportanfrage">Expressanfrage starten</Button>
          <Button href="#transportanfrage" variant="secondary">
            Regelmäßigen Transport anfragen
          </Button>
        </div>
      </Container>
    </section>
  );
}
