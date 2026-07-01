export default function CTA() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <h2>¿Listo para transformar tus productos?</h2>
        <p>
          Solicita una cotización o una muestra gratis de nuestra pulpa de maracuyá y descubre la diferencia.
        </p>
        <div className="cta-actions">
          <a href="#contacto" className="btn btn-primary">
            Pedir muestra gratis
          </a>
          <a
            href="https://wa.me/5493816861832?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20pulpa%20de%20maracuy%C3%A1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
