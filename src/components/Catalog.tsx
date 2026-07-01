import { Check } from "lucide-react";
import catalogPhoto from "../assets/maracuya1.png";

export default function Catalog() {
  return (
    <section id="catalogo" className="catalog">
      <div className="container">
        <div className="catalog-heading">
          <span className="catalog-eyebrow">Nuestro producto</span>
          <h2>Pulpa de Maracuyá</h2>
          <p>
            100% fruta, sin nada más. Congelada en el momento justo para que
            llegue a tu cocina con el mismo sabor del día de la cosecha.
            Perfecta para jugos, helados artesanales, repostería y coctelería.
          </p>
        </div>

        <div className="catalog-card">
          <div className="catalog-visual">
            <div className="catalog-circle">
              <img src={catalogPhoto} alt="Pulpa de Maracuyá Passionaria" className="catalog-product-image" />
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
                Fruta seleccionada a mano y congelada rápidamente para preservar
                su sabor, aroma y color natural. Sin ningún paso de por medio entre
                la fruta y tu receta.
              </p>
              <ul className="catalog-features">
                <li>
                  <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                  1 kg rinde como 3 kg de fruta fresca: ahorrás tiempo y dinero
                </li>
                <li>
                  <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                  Empaque sellado al vacío, sin riesgo de contaminación
                </li>
                <li>
                  <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                  12 meses de vida útil en freezer doméstico (-18°C)
                </li>
              </ul>
            </div>

            <div className="pricing-table-wrapper">
              <table className="pricing-table" aria-label="Tabla de precios por volumen">
                <thead>
                  <tr>
                    <th>Presentación</th>
                    <th>Precio</th>
                    <th>—</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pricing-qty">500 gr</td>
                    <td className="pricing-price">ARS/ 5,000.00</td>
                    <td className="pricing-discount">—</td>
                  </tr>
                  <tr>
                    <td className="pricing-qty">1 kg</td>
                    <td className="pricing-price">ARS/ 9,000.00</td>
                    <td className="pricing-discount">—</td>
                  </tr>
                  <tr>
                    <td className="pricing-qty">2 kg</td>
                    <td className="pricing-price">ARS/ 18,000.00</td>
                    <td className="pricing-discount">—</td>
                  </tr>
                  <tr className="pricing-row-popular">
                    <td className="pricing-qty">
                      <span className="pricing-qty-label">Bidón 5L</span>
                      <span className="pricing-badge">Por Mayor</span>
                    </td>
                    <td className="pricing-price">ARS/ 40,000.00</td>
                    <td className="pricing-discount">—</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="catalog-actions">
              <a href="#contacto" className="btn btn-primary">
                Solicitar cotización
              </a>
              <a href="#contacto" className="btn btn-outline">
                Solicitar muestra gratis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
