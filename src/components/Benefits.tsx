import { Award, Building2, TrendingUp } from "lucide-react";

const statCards = [
  { number: "15+", label: "Años de experiencia", icon: Award },
  { number: "50+", label: "Clientes satisfechos", icon: Building2 },
  { number: "100%", label: "Productos naturales", icon: TrendingUp },
];

const benefits = [
  {
    title: "Calidad industrial consistente",
    desc: "Cada lote pasa por controles de calidad rigurosos. Sabor, color y textura uniformes en cada entrega.",
  },
  {
    title: "Rendimiento superior",
    desc: "1 kg de nuestra pulpa equivale a 3 kg de fruta fresca. Menos almacenamiento, más rendimiento.",
  },
  {
    title: "Certificaciones que importan",
    desc: "Procesos certificados HACCP y BPM. La tranquilidad de trabajar con un proveedor que cumple estándares internacionales.",
  },
  {
    title: "Logística confiable",
    desc: "Entregas programadas a tu industria en Tucumán y el norte argentino. Cadena de frío garantizada.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="benefits">
      <div className="container">
        <div className="benefits-inner">
          <div className="benefits-content">
            <h2>¿Por qué elegir Passionaria?</h2>
            <p className="benefits-lead">
              Más de 15 años abasteciendo a la industria argentina con pulpa de
              maracuyá de la más alta calidad.
            </p>
            <div className="benefits-list">
              {benefits.map((b) => (
                <div className="benefit-item" key={b.title}>
                  <div className="benefit-dot" />
                  <div>
                    <strong>{b.title}</strong>
                    <p>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="benefits-visual">
            {statCards.map((s) => (
              <div className="benefits-card" key={s.label}>
                <div className="benefits-card-header">
                  <s.icon size={24} strokeWidth={1.5} aria-hidden="true" className="benefits-card-icon" />
                  <div className="benefits-card-number">{s.number}</div>
                </div>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
