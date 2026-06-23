import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import recipeImg1 from "../assets/maracuya3.png";
import recipeImg2 from "../assets/maracuya4.png";
import recipeImg3 from "../assets/maracuya5.png";
import recipeImg4 from "../assets/maracuya6.png";

const recipes = [
  {
    image: recipeImg3,
    tag: "Bebida",
    title: "Jugo Natural de Maracuyá",
    desc: "Refrescante jugo tropical, perfecto para empezar el día con energía.",
    ingredients: ["3 cucharadas de pulpa de maracuyá", "500 ml de agua fría", "Endulzante al gusto", "Hielo al gusto"],
    steps: [
      "En una licuadora, agrega la pulpa de maracuyá y el agua fría.",
      "Licúa por 30 segundos hasta integrar bien.",
      "Cuela la mezcla para retirar las semillas (opcional).",
      "Endulza al gusto y sirve con abundante hielo.",
    ],
  },
  {
    image: recipeImg4,
    tag: "Postre",
    title: "Mousse de Maracuyá",
    desc: "Esponjoso y cremoso mousse con el equilibrio perfecto entre dulce y ácido.",
    ingredients: ["1 taza de pulpa de maracuyá", "1 lata de leche condensada", "1 lata de crema de leche", "Gelatina sin sabor (opcional)"],
    steps: [
      "Mezcla la pulpa de maracuyá con la leche condensada.",
      "Agrega la crema de leche y bate hasta que esté homogéneo.",
      "Si deseas más firmeza, hidrata la gelatina y agrégala tibia.",
      "Vierte en copas y refrigera por al menos 3 horas.",
    ],
  },
  {
    image: recipeImg3,
    tag: "Coctelería",
    title: "Maracuyá Sour",
    desc: "Un giro tropical al clásico cóctel, fresco y vibrante.",
    ingredients: ["2 oz de pisco", "1 oz de pulpa de maracuyá colada", "1 oz de jarabe de goma", "1 clara de huevo", "Hielo y gotas de amargo"],
    steps: [
      "En una coctelera, agrega pisco, pulpa, jarabe y clara de huevo.",
      "Agita en seco 15 segundos para emulsionar la clara.",
      "Agrega hielo y agita nuevamente 10 segundos.",
      "Cuela, sirve y decora con amargo y rodaja de limón.",
    ],
  },
  {
    image: recipeImg4,
    tag: "Helado",
    title: "Helado de Maracuyá",
    desc: "Cremoso helado artesanal con el sabor intenso de la fruta de la pasión.",
    ingredients: ["1 taza de pulpa de maracuyá", "2 tazas de crema para batir", "1/2 taza de azúcar", "4 yemas de huevo", "Esencia de vainilla"],
    steps: [
      "Calienta la crema a fuego medio sin que hierva.",
      "Bate las yemas con el azúcar hasta que estén espumosas.",
      "Vierte la crema caliente sobre las yemas sin dejar de batir.",
      "Cocina a baño María hasta espesar, agrega pulpa y vainilla.",
      "Enfría y lleva a la heladera según instrucciones.",
    ],
  },
];

export default function Recipes() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? recipes : recipes.slice(0, 2);

  return (
    <section id="recetas" className="recipes">
      <div className="container">
        <div className="recipes-heading">
          <span className="recipes-overline">Inspírate</span>
          <h2>Recetas con Maracuyá</h2>
        </div>
        <div className="recipes-grid">
          {visible.map((r, i) => (
            <article className="recipe-card" key={i}>
              <div className="recipe-card-image">
                <img src={r.image} alt={r.title} className="recipe-card-img" />
              </div>
              <div className="recipe-card-body">
                <span className="recipe-tag">{r.tag}</span>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <details className="recipe-details">
                  <summary>Ingredientes</summary>
                  <ul>{r.ingredients.map((ing, j) => <li key={j}>{ing}</li>)}</ul>
                </details>
                <details className="recipe-details">
                  <summary>Preparación</summary>
                  <ol>{r.steps.map((step, j) => <li key={j}>{step}</li>)}</ol>
                </details>
              </div>
            </article>
          ))}
        </div>

        {recipes.length > 2 && (
          <div className="recipes-toggle">
            <button
              className="btn btn-text"
              onClick={() => setShowAll((p) => !p)}
              aria-expanded={showAll}
            >
              {showAll ? (
                <>Ver menos <ChevronUp size={18} aria-hidden="true" /></>
              ) : (
                <>Ver todas las recetas <ChevronDown size={18} aria-hidden="true" /></>
              )}
            </button>
          </div>
        )}

        <div className="recipe-submit">
          <h3>Comparte tu receta</h3>
          <p>¿Tienes una receta con maracuyá que quieras compartir? ¡Envíanosla!</p>
          <form
            className="recipe-submit-form"
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
          >
            <div className="form-row">
              <input type="url" name="image" placeholder="URL de la imagen (opcional)" className="form-input" />
              <input type="text" name="name" placeholder="Nombre de la receta" className="form-input" required />
            </div>
            <input type="text" name="category" placeholder="Categoría (Ej: Bebida, Postre)" className="form-input" required />
            <textarea name="ingredients" placeholder="Ingredientes (uno por línea)" className="form-textarea" rows={4} required />
            <textarea name="preparation" placeholder="Preparación (pasos detallados)" className="form-textarea" rows={5} required />
            <button type="submit" className="btn btn-primary form-submit">
              Enviar receta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
