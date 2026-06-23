import { Check } from "lucide-react";
import catalogPhoto from "../assets/maracuya1.png";

export default function Catalog() {
  return (
    <section id="catalogo" className="catalog">
      <div className="container">
        <div className="catalog-heading">
          <span className="catalog-eyebrow">Producto estrella</span>
          <h2>Pulpa de Maracuyá</h2>
          <p>
            Nuestra pulpa congelada es 100% natural, sin conservantes ni
            azúcares añadidos. Ideal para jugos, helados, repostería,
            coctelería y gastronomía en general.
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
              <span className="catalog-badge">Certificado HACCP</span>
            </div>
          </div>

          <div className="catalog-info">
            <div className="catalog-desc">
              <h3>Pulpa Congelada de Maracuyá</h3>
              <p>
                Obtenida de maracuyá seleccionado en su punto óptimo de
                maduración. Proceso de congelado rápido que preserva el sabor,
                aroma y propiedades nutricionales de la fruta fresca.
              </p>
              <ul className="catalog-features">
                <li>
                  <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                  Rendimiento: 1 kg de pulpa equivale a 3 kg de fruta fresca
                </li>
                <li>
                  <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                  Empaque al vacío para máxima conservación
                </li>
                <li>
                  <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                  Vida útil: 12 meses en congelación (-18°C)
                </li>
                <li>
                  <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                  Certificación HACCP y BPM
                </li>
              </ul>
            </div>

            <table className="pricing-table" aria-label="Tabla de precios por volumen">
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
                  <td className="pricing-price">ARS/ 25.00</td>
                  <td className="pricing-discount">—</td>
                </tr>
                <tr>
                  <td className="pricing-qty">5 kg</td>
                  <td className="pricing-price">ARS/ 110.00</td>
                  <td className="pricing-discount">Ahorras 12%</td>
                </tr>
                <tr className="pricing-row-popular">
                  <td className="pricing-qty">
                    <span className="pricing-qty-label">10 kg</span>
                    <span className="pricing-badge">Más popular</span>
                  </td>
                  <td className="pricing-price">ARS/ 200.00</td>
                  <td className="pricing-discount">Ahorras 20%</td>
                </tr>
                <tr>
                  <td className="pricing-qty">25 kg</td>
                  <td className="pricing-price">ARS/ 450.00</td>
                  <td className="pricing-discount">Ahorras 28%</td>
                </tr>
                <tr>
                  <td className="pricing-qty">50+ kg</td>
                  <td className="pricing-price pricing-consult">Consultar</td>
                  <td className="pricing-discount">Volumen</td>
                </tr>
              </tbody>
            </table>

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
