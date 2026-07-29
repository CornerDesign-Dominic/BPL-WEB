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
              <span aria-disabled="true">Impressum</span>
              <span aria-disabled="true">Datenschutz</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
