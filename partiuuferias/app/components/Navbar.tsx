"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Início", href: "#home" },
  { label: "Viagens", href: "#viagens" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta se o usuário rolou a página pra dar sombra na navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu ao clicar num link
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@400;600;700&display=swap');

        .nav-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: #0F1F4B;
          transition: box-shadow 0.3s ease;
          font-family: 'Lato', sans-serif;
        }

        .nav-root.scrolled {
          box-shadow: 0 4px 24px rgba(30, 58, 138, 0.35);
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* LOGO */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          cursor: pointer;
        }

        .nav-logo-icon {
          width: 38px;
          height: 38px;
          background: #F59E0B;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .nav-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .nav-logo-title {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: 0.3px;
        }

        .nav-logo-subtitle {
          font-size: 10px;
          font-weight: 600;
          color: #F59E0B;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        /* LINKS DESKTOP */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links li a {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.85);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding: 8px 16px;
          border-radius: 6px;
          transition: all 0.2s ease;
          position: relative;
        }

        .nav-links li a:hover {
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Botão CTA especial */
        .nav-cta {
          background: #F59E0B !important;
          color: #0F1F4B !important;
          border-radius: 8px !important;
          font-weight: 700 !important;
          padding: 9px 20px !important;
          transition: all 0.2s ease !important;
        }

        .nav-cta:hover {
          background: #FBBF24 !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(245, 158, 11, 0.4);
        }

        /* HAMBURGER (mobile) */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 6px;
          border-radius: 6px;
          transition: background 0.2s;
        }

        .nav-hamburger:hover {
          background: rgba(255,255,255,0.1);
        }

        .hamburger-line {
          width: 24px;
          height: 2px;
          background: #FFFFFF;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .nav-hamburger.open .hamburger-line:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .nav-hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .nav-hamburger.open .hamburger-line:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* MENU MOBILE */
        .nav-mobile-menu {
          display: none;
          flex-direction: column;
          background: #0F1F4B;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 12px 24px 20px;
          gap: 4px;
          animation: slideDown 0.25s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .nav-mobile-menu.open {
          display: flex;
        }

        .nav-mobile-menu a {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.85);
          font-size: 15px;
          font-weight: 600;
          padding: 12px 16px;
          border-radius: 8px;
          transition: all 0.2s ease;
          letter-spacing: 0.3px;
        }

        .nav-mobile-menu a:hover {
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.1);
        }

        .nav-mobile-cta {
          background: #F59E0B !important;
          color: #0F1F4B !important;
          font-weight: 700 !important;
          text-align: center;
          margin-top: 8px;
          border-radius: 8px !important;
        }

        .nav-mobile-cta:hover {
          background: #FBBF24 !important;
        }

        /* Linha dourada decorativa no topo */
        .nav-gold-bar {
          height: 3px;
          background: linear-gradient(90deg, #0F1F4B, #F59E0B 40%, #F59E0B 60%, #0F1F4B);
        }

        /* Responsivo */
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>

      {/* Barra dourada decorativa */}
      <div className="nav-gold-bar" />

      <nav className={`nav-root${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Logo */}
          <a className="nav-logo" href="#home" onClick={handleLinkClick}>
            <div className="nav-logo-icon">✈️</div>
            <div className="nav-logo-text">
              <span className="nav-logo-title">Partiuuferias</span>
              <span className="nav-logo-subtitle">Consultor de Viagens</span>
            </div>
          </a>

          {/* Links Desktop */}
          <ul className="nav-links">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="#contato" className="nav-cta">
                Fale Comigo
              </a>
            </li>
          </ul>

          {/* Hamburguer Mobile */}
          <button
            className={`nav-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`}>
          {NAV_LINKS.slice(0, 3).map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
          <a href="#contato" className="nav-mobile-cta" onClick={handleLinkClick}>
            ✈ Fale Comigo
          </a>
        </div>
      </nav>
    </>
  );
}
