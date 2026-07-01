import productPhoto from "../assets/maracuya2.png";
import { InstagramIcon } from "./icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-pattern" />
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-badge">100% Natural · Sin aditivos</span>
          <h1 className="hero-title">
            La pulpa de maracuyá que tus productos merecen
          </h1>
          <p className="hero-subtitle">
            Lista para usar, sin conservantes ni azúcar añadida.
            El sabor real que hace la diferencia en tus helados, jugos y postres.
          </p>
          <div className="hero-actions">
            <a href="#catalogo" className="btn btn-primary">
              Ver Presentaciones
            </a>
            <a
              href="https://www.instagram.com/passionariaok_"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <InstagramIcon size={18} />
              Seguinos en Instagram
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src={productPhoto}
              alt="Pulpa de Maracuyá Passionaria"
              className="hero-product-image"
            />
            <div className="hero-image-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
