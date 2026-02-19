import Image from "next/image";
import { Montserrat } from "next/font/google";
import "./Navbar.css";
import Link from "next/link";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-left">
        <Image
          src="/logo.png"
          alt="Lampiplus logo"
          width={100}
          height={42}
          priority
        />
        <h2 className={`navbar-title ${montserrat.className}`}>
          LAMPIPLUS
        </h2>
      </div>

      <nav className="navbar-nav">
        <Link href="/">Inicio</Link>
        <Link href="/#services">Servicios</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>

    </header>
  );
}
