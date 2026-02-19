import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import "./hero.css";
import Whatsapp from "../whatsapp/whatsapp";
import Link from "next/link";

export default function Hero() {
  return (
        <>
    <section className="hero">

      <div className="hero-container">
        <div className="hero-grid">

          {/* LEFT COLUMN */}
          <div className="hero-left">
            <h2 className="hero-title">
              Tu lampista de confianza para electricidad y fontanería en tu vivienda
            </h2>

            <p className="hero-description">
              Solicita tu presupuesto en menos de un minuto para instalaciones,
              reparaciones o mantenimiento en tu hogar o negocio.
            </p>

            <div className="hero-cta">
              <Link href="/contacto"><button className="hero-button">
                Solicitar presupuesto
              </button></Link>

              <p className="hero-trust">
                Sin compromiso · 100 % online · Datos reales
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="hero-images">

            <div className="img-wrapper img-1">
              <Image
                src="/image.png"
                alt="Fontanería"
                fill
                className="img"
              />
            </div>

            <div className="img-wrapper img-2">
              <Image
                src="/image2.png"
                alt="Instalación"
                fill
                className="img"
              />
            </div>

            <div className="img-wrapper img-3">
              <Image
                src="/image3.png"
                alt="Electricista"
                fill
                className="img"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
<section className="services" id="services">
  <div className="services-container">

    <h2 className="services-title">Nuestros Servicios</h2>

    <div className="services-grid">

      <div className="service-card">
        <h3>Electricidad</h3>
        <p>
          Instalaciones y reparaciones eléctricas con garantía de seguridad y eficiencia.
        </p>
      </div>

      <div className="service-card">
        <h3>Aerometría</h3>
        <p>
          Soluciones avanzadas para el control y monitoreo de la calidad del aire.
        </p>
      </div>

      <div className="service-card">
        <h3>Reformas</h3>
        <p>
          Transformamos tus espacios con reformas integrales y personalizadas.
        </p>
      </div>

      <div className="service-card">
        <h3>Telecomunicaciones</h3>
        <p>
          Instalación y mantenimiento de sistemas de telecomunicaciones.
        </p>
      </div>

      <div className="service-card">
        <h3>Placas solares</h3>
        <p>
          Instalamos y mantenemos sistemas de placas solares que reducen el consumo energético.
        </p>
      </div>

      <div className="service-card">
        <h3>Fontanería</h3>
        <p>
          Servicios de fontanería profesional para instalaciones y reparaciones.
        </p>
      </div>

    </div>

  </div>
</section>
<Whatsapp />

    </>
  );
}
