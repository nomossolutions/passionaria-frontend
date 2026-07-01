import { Leaf, Globe, Sparkles } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Sin aditivos, sin sorpresas",
    desc: "Solo fruta. Sin conservantes, sin colorantes, sin azúcar añadida. Lo que ves en la etiqueta es todo lo que hay.",
  },
  {
    icon: Globe,
    title: "Fruta de origen conocido",
    desc: "Maracuyá cosechado en Tucumán, en su punto óptimo de maduración. Sabemos de dónde viene cada lote.",
  },
  {
    icon: Sparkles,
    title: "Lista para usar hoy",
    desc: "Descongelá, medí y usá. Sin pelar, sin procesar, sin merma. Más tiempo para hacer lo que mejor sabés hacer.",
  },
];

export default function Features() {
  return (
    <section className="features">
      
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
