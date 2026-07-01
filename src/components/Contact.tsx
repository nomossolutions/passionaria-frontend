import { Mail, Phone, MapPin } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "./icons";

const contactItems = [
  { icon: Mail, label: "Email", value: "contacto@passionaria.com", href: "mailto:contacto@passionaria.com" },
  { icon: Phone, label: "Teléfono", value: "+54 9 3816 86-1832", href: "tel:+5493816861832" },
  { icon: MapPin, label: "Ubicación", value: "Tucumán, Argentina" },
];

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact-heading">
          <div className="contact-accent" aria-hidden="true" />
          <h2>Hablemos</h2>
          <p>Contanos qué hacés y te ayudamos a encontrar la presentación ideal para tu negocio.</p>
        </div>

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

          <div className="contact-cta-buttons">
            <a
              href="https://wa.me/5493816861832?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20pulpa%20de%20maracuy%C3%A1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsAppIcon size={18} />
              Escribir por WhatsApp
            </a>
            <a
              href="https://www.instagram.com/passionariaok_"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <InstagramIcon size={18} />
              Seguirnos en Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

