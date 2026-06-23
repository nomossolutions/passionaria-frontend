import { Leaf, Globe, TrendingUp } from "lucide-react";
import decorImg from "../assets/maracuya7.png";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    desc: "Sin conservantes ni aditivos artificiales. Cultivado de forma sostenible.",
  },
  {
    icon: Globe,
    title: "Origen Responsable",
    desc: "Producido con prácticas agrícolas que cuidan el medio ambiente.",
  },
  {
    icon: TrendingUp,
    title: "Alta Trazabilidad",
    desc: "Control de calidad en cada etapa, del campo a tu industria.",
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="features-decor" aria-hidden="true">
        <img src={decorImg} alt="" />
      </div>
      <div className="container">
        <div className="features-grid">
          {features.map((f) => (
            <article className="feature-card" key={f.title}>
              <div className="feature-icon">
                <f.icon size={36} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
