import { WhatsAppIcon } from "./icons";

const WHATSAPP_URL =
  "https://wa.me/5493816861832?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20pulpa%20de%20maracuy%C3%A1";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
