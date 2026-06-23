import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Desde que empezamos a usar la pulpa de Passionaria, la calidad de nuestros helados artesanales subió notablemente. El sabor es consistente lote tras lote.",
    author: "María García",
    role: "Jefa de Producción",
    company: "Helados Delicia",
  },
  {
    quote:
      "La trazabilidad y certificaciones nos dieron la confianza para hacer de Passionaria nuestro proveedor exclusivo de pulpa de maracuyá.",
    author: "Carlos Mendoza",
    role: "Gerente de Compras",
    company: "Bebidas Naturales SAC",
  },
  {
    quote:
      "El rendimiento de 3 kg de fruta por cada kg de pulpa transformó nuestra operación. Ahorro real en almacenamiento y merma.",
    author: "Ana Torres",
    role: "Directora de Operaciones",
    company: "Grupo Gastronómico El Sazón",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="testimonials">
      <div className="container">
        <div className="testimonials-heading">
          <span className="testimonials-eyebrow">Clientes que confían</span>
          <h2>Lo que dicen de nosotros</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <article className="testimonial-card" key={i}>
              <Quote size={28} strokeWidth={1} aria-hidden="true" className="testimonial-quote-icon" />
              <blockquote className="testimonial-text">{t.quote}</blockquote>
              <div className="testimonial-stars" aria-label="5 estrellas">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={14} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                ))}
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <strong>{t.author}</strong>
                  <span>
                    {t.role}, {t.company}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
