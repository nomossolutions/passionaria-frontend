import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
            <span className="logo-icon">&#127825;</span>
            <span className="logo-text">Pasionaria</span>
          </div>
          <nav className="nav">
            <a href="#productos">Productos</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg-pattern" />
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="hero-badge">100% Natural</span>
            <h1 className="hero-title">
              El sabor tropical que transforma tus productos
            </h1>
            <p className="hero-subtitle">
              Derivados de maracuyá de la más alta calidad para la industria
              alimenticia, cosmética y gastronómica.
            </p>
            <div className="hero-actions">
              <a href="#productos" className="btn btn-primary">
                Ver productos
              </a>
              <a href="#contacto" className="btn btn-secondary">
                Contáctanos
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-circle" />
            <div className="hero-fruit-icon">&#127825;</div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">&#127793;</div>
              <h3>100% Natural</h3>
              <p>Sin conservantes ni aditivos artificiales. Cultivado de forma sostenible.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#127758;</div>
              <h3>Origen Responsable</h3>
              <p>Producido con prácticas agrícolas que cuidan el medio ambiente.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#128200;</div>
              <h3>Alta Trazabilidad</h3>
              <p>Control de calidad en cada etapa, del campo a tu industria.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="productos" className="products">
        <div className="container">
          <div className="section-header">
            <h2>Nuestros Productos</h2>
            <p>
              Ofrecemos una amplia gama de derivados de maracuyá para satisfacer
              las necesidades de tu industria.
            </p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-card-image">
                <span className="product-emoji">&#127865;</span>
              </div>
              <h3>Pulpa Congelada</h3>
              <p>Pulpa de maracuyá concentrada, ideal para jugos, helados y repostería.</p>
            </div>
            <div className="product-card">
              <div className="product-card-image">
                <span className="product-emoji">&#127864;</span>
              </div>
              <h3>Jugo Concentrado</h3>
              <p>Jugo natural concentrado para bebidas y coctelería profesional.</p>
            </div>
            <div className="product-card">
              <div className="product-card-image">
                <span className="product-emoji">&#129513;</span>
              </div>
              <h3>Aceite de Semilla</h3>
              <p>Aceite prensado en frío rico en ácidos grasos esenciales para cosmética.</p>
            </div>
            <div className="product-card">
              <div className="product-card-image">
                <span className="product-emoji">&#127858;</span>
              </div>
              <h3>Harina de Maracuyá</h3>
              <p>Harina de la cáscara, rica en fibra para panadería y suplementos.</p>
            </div>
            <div className="product-card">
              <div className="product-card-image">
                <span className="product-emoji">&#127828;</span>
              </div>
              <h3>Mermelada Artesanal</h3>
              <p>Mermelada premium con trozos de fruta, sin colorantes artificiales.</p>
            </div>
            <div className="product-card">
              <div className="product-card-image">
                <span className="product-emoji">&#127793;</span>
              </div>
              <h3>Deshidratados</h3>
              <p>Maracuyá liofilizado y deshidratado para snacks y cereales.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="benefits">
        <div className="container">
          <div className="benefits-inner">
            <div className="benefits-content">
              <h2>¿Por qué elegir Pasionaria?</h2>
              <p className="benefits-lead">
                El maracuyá es una fruta excepcional con beneficios únicos para la salud y la industria.
              </p>
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-dot" />
                  <div>
                    <strong>Rico en antioxidantes</strong>
                    <p>Alto contenido de vitamina C y compuestos fenólicos que combaten el estrés oxidativo.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-dot" />
                  <div>
                    <strong>Propiedades relajantes</strong>
                    <p>La pasiflora es conocida por sus efectos calmantes y reguladores del sueño.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-dot" />
                  <div>
                    <strong>Alto valor nutricional</strong>
                    <p>Fuente de fibra, vitaminas A y C, potasio y hierro en cada porción.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-dot" />
                  <div>
                    <strong>Versatilidad industrial</strong>
                    <p>Ideal para alimentos, bebidas, cosméticos y productos farmacéuticos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefits-visual">
              <div className="benefits-card">
                <div className="benefits-card-number">15+</div>
                <p>Años de experiencia</p>
              </div>
              <div className="benefits-card">
                <div className="benefits-card-number">50+</div>
                <p>Clientes satisfechos</p>
              </div>
              <div className="benefits-card">
                <div className="benefits-card-number">100%</div>
                <p>Productos naturales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <h2>¿Listo para transformar tus productos?</h2>
          <p>
            Solicita una cotización o una muestra de nuestros derivados de maracuyá.
          </p>
          <a href="#contacto" className="btn btn-primary">
            Solicitar información
          </a>
        </div>
      </section>

      <section id="contacto" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contáctanos</h2>
            <p>Estamos listos para atender tu consulta.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">&#128231;</span>
                <div>
                  <strong>Email</strong>
                  <p>contacto@pasionaria.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">&#128222;</span>
                <div>
                  <strong>Teléfono</strong>
                  <p>+51 999 888 777</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">&#128205;</span>
                <div>
                  <strong>Ubicación</strong>
                  <p>Lima, Perú</p>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <input type="text" placeholder="Nombre" className="form-input" required />
                <input type="email" placeholder="Email" className="form-input" required />
              </div>
              <input type="text" placeholder="Asunto" className="form-input" />
              <textarea placeholder="Mensaje" className="form-textarea" rows={5} required />
              <button type="submit" className="btn btn-primary form-submit">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="logo-icon">&#127825;</span>
            <span className="logo-text">Pasionaria</span>
            <p>Derivados de maracuyá de la más alta calidad.</p>
          </div>
          <div className="footer-links">
            <h4>Productos</h4>
            <a href="#productos">Pulpa</a>
            <a href="#productos">Jugo</a>
            <a href="#productos">Aceite</a>
            <a href="#productos">Harina</a>
          </div>
          <div className="footer-links">
            <h4>Compañía</h4>
            <a href="#beneficios">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Pasionaria. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
