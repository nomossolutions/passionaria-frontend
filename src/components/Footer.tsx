import { Leaf } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <Leaf size={28} strokeWidth={1.5} aria-hidden="true" />
            <span className="logo-text">Passionaria</span>
          </div>
          <p>Pulpa de maracuyá de la más alta calidad para la industria argentina.</p>
        </div>
        <div className="footer-links">
          <h4>Producto</h4>
          <a href="#catalogo">Pulpa de Maracuyá</a>
          <a href="#catalogo">Precios</a>
          <a href="#recetas">Recetas</a>
        </div>
        <div className="footer-links">
          <h4>Compañía</h4>
          <a href="#beneficios">Nosotros</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {year} Passionaria. Todos los derechos reservados.</p>
          <p className="footer-credit">
            Desarrollado por{" "}
            <a href="https://nomosdigital.com.ar" target="_blank" rel="noopener noreferrer">
              Nomos Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
