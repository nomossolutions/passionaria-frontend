import { Award, Building2, TrendingUp } from "lucide-react";

const statCards = [
  { number: "5+", label: "Años elaborando pulpa", icon: Award },
  { number: "50+", label: "Emprendedores que confían", icon: Building2 },
  { number: "100%", label: "Fruta natural, sin aditivos", icon: TrendingUp },
];

const benefits = [
  {
    title: "Sabor auténtico en cada receta",
    desc: "Pulpa sin conservantes ni colorantes artificiales. El sabor real del maracuyá que distingue tus productos artesanales.",
  },
  {
    title: "Más rendimiento, menos desperdicio",
    desc: "1 kg de pulpa equivale a 3 kg de fruta fresca. Producís más con menos, sin tiempo ni esfuerzo en el procesado.",
  },
  {
    title: "Pedidos a tu escala",
    desc: "Sin mínimos imposibles. Adaptamos las cantidades a tu producción semanal o mensual, con entregas en Tucumán y el norte argentino.",
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
              La pulpa que tu emprendimiento necesita: natural, lista para usar y con el sabor que tus clientes van a notar.
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
