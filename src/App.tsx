import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
            <span className="logo-icon">&#127825;</span>
            <span className="logo-text">Passionaria</span>
          </div>
          <nav className="nav">
            <a href="#catalogo">Catálogo</a>
            <a href="#recetas">Recetas</a>
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
              Pulpa de maracuyá de la más alta calidad para la industria
              alimenticia, cosmética y gastronómica.
            </p>
            <div className="hero-actions">
              <a href="#catalogo" className="btn btn-primary">
                Ver catálogo
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

      <section id="catalogo" className="catalog">
        <div className="container">
          <div className="section-header">
            <h2>Pulpa de Maracuyá</h2>
            <p>
              Nuestra pulpa congelada es 100% natural, sin conservantes ni azúcares añadidos.
              Ideal para jugos, helados, repostería, coctelería y gastronomía en general.
            </p>
          </div>
          <div className="catalog-card">
            <div className="catalog-visual">
              <div className="catalog-circle">
                <span className="catalog-emoji">&#127865;</span>
              </div>
              <div className="catalog-badges">
                <span className="catalog-badge">Sin conservantes</span>
                <span className="catalog-badge">100% natural</span>
                <span className="catalog-badge">Sin azúcar</span>
              </div>
            </div>
            <div className="catalog-info">
              <div className="catalog-desc">
                <h3>Pulpa Congelada de Maracuyá</h3>
                <p>
                  Obtenida de maracuyá seleccionado en su punto óptimo de maduración.
                  Proceso de congelado rápido que preserva el sabor, aroma y propiedades
                  nutricionales de la fruta fresca.
                </p>
                <ul className="catalog-features">
                  <li>&#10003; Rendimiento: 1 kg de pulpa equivale a 3 kg de fruta fresca</li>
                  <li>&#10003; Empaque al vacío para máxima conservación</li>
                  <li>&#10003; Vida útil: 12 meses en congelación (-18°C)</li>
                  <li>&#10003; Certificación HACCP y BPM</li>
                </ul>
              </div>
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Presentación</th>
                    <th>Precio</th>
                    <th>Descuento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pricing-qty">1 kg</td>
                    <td className="pricing-price">S/ 25.00</td>
                    <td className="pricing-discount">—</td>
                  </tr>
                  <tr>
                    <td className="pricing-qty">5 kg</td>
                    <td className="pricing-price">S/ 110.00</td>
                    <td className="pricing-discount">Ahorras 12%</td>
                  </tr>
                  <tr>
                    <td className="pricing-qty">10 kg</td>
                    <td className="pricing-price">S/ 200.00</td>
                    <td className="pricing-discount">Ahorras 20%</td>
                  </tr>
                  <tr>
                    <td className="pricing-qty">25 kg</td>
                    <td className="pricing-price">S/ 450.00</td>
                    <td className="pricing-discount">Ahorras 28%</td>
                  </tr>
                  <tr>
                    <td className="pricing-qty">50+ kg</td>
                    <td className="pricing-price pricing-consult">Consultar</td>
                    <td className="pricing-discount">Volumen</td>
                  </tr>
                </tbody>
              </table>
              <a href="#contacto" className="btn btn-primary">
                Solicitar cotización
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="recetas" className="recipes">
        <div className="container">
          <div className="section-header">
            <h2>Recetas con Maracuyá</h2>
            <p>
              Descubre formas deliciosas de usar nuestra pulpa de maracuyá en la cocina.
            </p>
          </div>
          <div className="recipes-grid">
            <div className="recipe-card">
              <div className="recipe-card-image">
                <span className="recipe-emoji">&#127864;</span>
              </div>
              <div className="recipe-card-body">
                <div className="recipe-tag">Bebida</div>
                <h3>Jugo Natural de Maracuyá</h3>
                <p>Refrescante jugo tropical, perfecto para empezar el día con energía.</p>
                <details className="recipe-details">
                  <summary>Ingredientes</summary>
                  <ul>
                    <li>3 cucharadas de pulpa de maracuyá</li>
                    <li>500 ml de agua fría</li>
                    <li>Endulzante al gusto</li>
                    <li>Hielo al gusto</li>
                  </ul>
                </details>
                <details className="recipe-details">
                  <summary>Preparación</summary>
                  <ol>
                    <li>En una licuadora, agrega la pulpa de maracuyá y el agua fría.</li>
                    <li>Licúa por 30 segundos hasta integrar bien.</li>
                    <li>Cuela la mezcla para retirar las semillas (opcional).</li>
                    <li>Endulza al gusto y sirve con abundante hielo.</li>
                  </ol>
                </details>
              </div>
            </div>
            <div className="recipe-card">
              <div className="recipe-card-image">
                <span className="recipe-emoji">&#127856;</span>
              </div>
              <div className="recipe-card-body">
                <div className="recipe-tag">Postre</div>
                <h3>Mousse de Maracuyá</h3>
                <p>Esponjoso y cremoso mousse con el equilibrio perfecto entre dulce y ácido.</p>
                <details className="recipe-details">
                  <summary>Ingredientes</summary>
                  <ul>
                    <li>1 taza de pulpa de maracuyá</li>
                    <li>1 lata de leche condensada</li>
                    <li>1 lata de crema de leche</li>
                    <li>Gelatina sin sabor (opcional)</li>
                  </ul>
                </details>
                <details className="recipe-details">
                  <summary>Preparación</summary>
                  <ol>
                    <li>En un bol, mezcla la pulpa de maracuyá con la leche condensada.</li>
                    <li>Agrega la crema de leche y bate hasta que esté homogéneo.</li>
                    <li>Si deseas más firmeza, hidrata la gelatina y agrégala tibia a la mezcla.</li>
                    <li>Vierte en copas individuales y refrigera por al menos 3 horas.</li>
                    <li>Decora con semillas de maracuyá frescas antes de servir.</li>
                  </ol>
                </details>
              </div>
            </div>
            <div className="recipe-card">
              <div className="recipe-card-image">
                <span className="recipe-emoji">&#127866;</span>
              </div>
              <div className="recipe-card-body">
                <div className="recipe-tag">Coctelería</div>
                <h3>Maracuyá Sour</h3>
                <p>Un twist tropical del clásico coctel peruano, fresco y vibrante.</p>
                <details className="recipe-details">
                  <summary>Ingredientes</summary>
                  <ul>
                    <li>2 oz de pisco</li>
                    <li>1 oz de pulpa de maracuyá colada</li>
                    <li>1 oz de jarabe de goma</li>
                    <li>1 clara de huevo</li>
                    <li>Hielo y gotas de amargo</li>
                  </ul>
                </details>
                <details className="recipe-details">
                  <summary>Preparación</summary>
                  <ol>
                    <li>En una coctelera, agrega pisco, pulpa de maracuyá, jarabe y clara de huevo.</li>
                    <li>Agita en seco (sin hielo) por 15 segundos para emulsionar la clara.</li>
                    <li>Agrega hielo y agita nuevamente por 10 segundos.</li>
                    <li>Cuela y sirve en un vaso bajo.</li>
                    <li>Decora con 3 gotas de amargo y una rodaja de limón.</li>
                  </ol>
                </details>
              </div>
            </div>
            <div className="recipe-card">
              <div className="recipe-card-image">
                <span className="recipe-emoji">&#127847;</span>
              </div>
              <div className="recipe-card-body">
                <div className="recipe-tag">Helado</div>
                <h3>Helado de Maracuyá</h3>
                <p>Cremoso helado artesanal con el sabor intenso de la fruta de la pasión.</p>
                <details className="recipe-details">
                  <summary>Ingredientes</summary>
                  <ul>
                    <li>1 taza de pulpa de maracuyá</li>
                    <li>2 tazas de crema para batir</li>
                    <li>1/2 taza de azúcar</li>
                    <li>4 yemas de huevo</li>
                    <li>Esencia de vainilla</li>
                  </ul>
                </details>
                <details className="recipe-details">
                  <summary>Preparación</summary>
                  <ol>
                    <li>Calienta la crema a fuego medio sin que hierva.</li>
                    <li>Bate las yemas con el azúcar hasta que estén espumosas.</li>
                    <li>Vierte la crema caliente sobre las yemas sin dejar de batir.</li>
                    <li>Regresa la mezcla al fuego y cocina a baño María hasta espesar.</li>
                    <li>Agrega la pulpa de maracuyá y la vainilla, mezcla bien.</li>
                    <li>Enfría y lleva a la heladera según las instrucciones del fabricante.</li>
                  </ol>
                </details>
              </div>
            </div>
          </div>

          <div className="recipe-submit">
            <h3>Comparte tu receta</h3>
            <p>¿Tienes una receta con maracuyá que quieras compartir? ¡Envíanosla!</p>
            <form className="recipe-submit-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <input type="url" placeholder="URL de la imagen (opcional)" className="form-input" />
                <input type="text" placeholder="Nombre de la receta" className="form-input" required />
              </div>
              <input type="text" placeholder="Categoría (Ej: Bebida, Postre, Coctelería)" className="form-input" required />
              <textarea placeholder="Ingredientes (uno por línea)" className="form-textarea" rows={4} required />
              <textarea placeholder="Preparación (pasos detallados)" className="form-textarea form-textarea-prep" rows={5} required />
              <button type="submit" className="btn btn-primary form-submit">
                Enviar receta
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="beneficios" className="benefits">
        <div className="container">
          <div className="benefits-inner">
            <div className="benefits-content">
              <h2>¿Por qué elegir Passionaria?</h2>
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
            Solicita una cotización o una muestra de nuestra pulpa de maracuyá.
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
                  <p>contacto@passionaria.com</p>
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
            <span className="logo-text">Passionaria</span>
            <p>Pulpa de maracuyá de la más alta calidad.</p>
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
            <a href="#contacto">Contacto</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} <a href="https://www.nomosdigital.com.ar/" target="_blank" rel="noopener noreferrer">Nomos Digital</a>. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
