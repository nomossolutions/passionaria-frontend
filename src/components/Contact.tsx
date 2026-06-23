import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const contactItems = [
  { icon: Mail, label: "Email", value: "contacto@passionaria.com", href: "mailto:contacto@passionaria.com" },
  { icon: Phone, label: "Teléfono", value: "+54 9 3816 86-1832", href: "tel:+5493816861832" },
  { icon: MapPin, label: "Ubicación", value: "Tucumán, Argentina" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact-heading">
          <div className="contact-accent" aria-hidden="true" />
          <h2>Contáctanos</h2>
          <p>Estamos listos para atender tu consulta.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            {contactItems.map((item) => (
              <div className="contact-item" key={item.label}>
                <div className="contact-icon" aria-hidden="true">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <strong>{item.label}</strong>
                  {item.href ? (
                    <p>
                      <a href={item.href} className="contact-link">
                        {item.value}
                      </a>
                    </p>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="contact-info-note">
              <p>
                También puedes escribirnos por{" "}
                <a
                  href="https://wa.me/5493816861832?text=Hola%2C%20quiero%20informaci%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-wa"
                >
                  WhatsApp
                </a>
                . Respondemos en menos de 2 horas.
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {status === "success" && (
              <div className="form-feedback form-success" role="alert">
                <CheckCircle size={20} aria-hidden="true" />
                Mensaje enviado correctamente. Te contactaremos pronto.
              </div>
            )}
            {status === "error" && (
              <div className="form-feedback form-error" role="alert">
                <AlertCircle size={20} aria-hidden="true" />
                Hubo un error al enviar. Intenta nuevamente o escríbenos por WhatsApp.
              </div>
            )}

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="contact-name" className="sr-only">Nombre</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  className="form-input"
                  value={form.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              <div className="form-field">
                <label htmlFor="contact-email" className="sr-only">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-input"
                  value={form.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="contact-subject" className="sr-only">Asunto</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Asunto"
                className="form-input"
                value={form.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message" className="sr-only">Mensaje</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Mensaje"
                className="form-textarea"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>Enviando…</>
              ) : (
                <>
                  Enviar mensaje <Send size={16} aria-hidden="true" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
