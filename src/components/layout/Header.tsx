"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const navigationItems = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#unternehmen", label: "Unternehmen" },
  { href: "#branchen", label: "Branchen" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-brand" href="#inhalt" aria-label="Zur Startseite">
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
            <a href={item.href} key={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <span className="site-navigation__disabled" aria-disabled="true">
            Karriere
          </span>
          <a href="#kontakt" onClick={() => setIsMenuOpen(false)}>
            Kontakt
          </a>
          <Button className="site-navigation__mobile-cta" href="#transportanfrage">
            Transport anfragen
          </Button>
        </nav>
        <Button className="site-header__cta" href="#transportanfrage">
          Transport anfragen
        </Button>
      </div>
    </header>
  );
}
