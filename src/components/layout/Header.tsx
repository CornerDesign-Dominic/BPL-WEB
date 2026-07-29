"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationItems = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#unternehmen", label: "Unternehmen" },
  { href: "#branchen", label: "Branchen" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const homePrefix = pathname === "/" ? "" : "/";
  const homeLink = (hash: string) => `${homePrefix}${hash}`;

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-brand" href={homeLink("#inhalt")} aria-label="Zur Startseite">
          <span className="site-brand__mark" aria-hidden="true">
            <Image
              src="/images/branding/logo-eye.jpg"
              alt=""
              width={44}
              height={44}
              priority
            />
          </span>
          <span className="site-brand__name">Brennpunkt Logistik GmbH</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span>{isMenuOpen ? "Menü schließen" : "Menü"}</span>
          <span className="menu-toggle__icon" aria-hidden="true" />
        </button>
        <nav
          className={`site-navigation ${isMenuOpen ? "site-navigation--open" : ""}`}
          id="primary-navigation"
          aria-label="Hauptnavigation"
        >
          {navigationItems.map((item) => (
            <a href={homeLink(item.href)} key={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <span className="site-navigation__disabled" aria-disabled="true">
            Karriere
          </span>
          <a href="/kontakt" onClick={() => setIsMenuOpen(false)}>
            Kontakt
          </a>
          <a className="site-navigation__request" href={homeLink("#transportanfrage")} onClick={() => setIsMenuOpen(false)}>
            Anfrage starten
          </a>
        </nav>
      </div>
    </header>
  );
}
