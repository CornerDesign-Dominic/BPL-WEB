import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__skyline" aria-hidden="true" />
      <div className="site-footer__bar">
        <div className="site-footer__inner">
          <div className="site-footer__company">
            <p className="site-footer__brand">Brennpunkt Logistik GmbH</p>
            <address>
              Reinshagenstraße 1<br />
              42369 Wuppertal
            </address>
          </div>
          <div className="site-footer__contact">
            <a href="tel:+4920226155771">+49 202 26155-771</a>
            <a href="mailto:info@brennpunkt-logistik.de">
              info@brennpunkt-logistik.de
            </a>
          </div>
          <div className="site-footer__legal">
            <p className="site-footer__claim">permanent · konsequent · effizient</p>
            <div className="site-footer__nav" aria-label="Rechtliche Hinweise">
              <Link href="/kontakt">Kontakt</Link>
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
              <Link href="/agb">AGB</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
