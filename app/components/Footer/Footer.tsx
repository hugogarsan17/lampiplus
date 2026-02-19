export default function Footer() {
  return (
    <footer className="bg-[#0b1f44] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h3 className="text-xl font-semibold tracking-wide">
            LAMPIPLUS
          </h3>
          <p className="text-blue-300 text-sm mt-2">
            Electricidad y fontanería profesional.
          </p>
        </div>

        <div className="text-sm text-blue-300">
          © {new Date().getFullYear()} Lampiplus. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}
