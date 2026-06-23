import productPhoto from "../assets/maracuya2.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-pattern" />
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-badge">Proveedor Industrial</span>
          <h1 className="hero-title">
            La pulpa de maracuyá que tus productos merecen
          </h1>
          <p className="hero-subtitle">
            100% natural, entregada en 48h. La materia prima
            que transforma tus helados, bebidas y postres.
          </p>
          <div className="hero-actions">
            <a href="#contacto" className="btn btn-primary">
              Solicitar cotización
            </a>
            <a href="#catalogo" className="btn btn-secondary">
              Ver catálogo
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
