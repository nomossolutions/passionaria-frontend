import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "./icons";
import logo from "../assets/passionaria-logo.jpeg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo" aria-label="Passionaria - Inicio">
          <img src={logo} className="logo-img" alt="" />
          <span className="logo-text">Passionaria</span>
        </a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <div
          className={`nav-overlay${menuOpen ? " nav-overlay--visible" : ""}`}
          onClick={closeMenu}
          aria-hidden="true"
        />
        <nav className={`nav${menuOpen ? " nav-open" : ""}`} role="navigation" aria-label="Navegación principal">
          <div className="nav-links">
            <a href="#catalogo" onClick={closeMenu}>Catálogo</a>
            <a href="#recetas" onClick={closeMenu}>Recetas</a>
            <a href="#beneficios" onClick={closeMenu}>Beneficios</a>
            <a href="#testimonios" onClick={closeMenu}>Testimonios</a>
            <a href="#contacto" onClick={closeMenu}>Contacto</a>
          </div>
          <a
            href="https://wa.me/51999888777?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20pulpa%20de%20maracuy%C3%A1"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            onClick={closeMenu}
          >
            <WhatsAppIcon size={18} />
            <span className="nav-cta-label">WhatsApp</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
