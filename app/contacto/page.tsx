"use client";

import { useState } from "react";
import "./contacto.css";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setForm({
        nombre: "",
        email: "",
        telefono: "",
        servicio: "",
        mensaje: "",
      });
    }
  };

  return (
    <section className="contacto">
      <div className="contacto-container">

        <h1>Contacto</h1>

        <form onSubmit={handleSubmit} className="contacto-form">

          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={handleChange}
          />

          <select
            name="servicio"
            value={form.servicio}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un servicio</option>
            <option>Electricidad</option>
            <option>Aerometría</option>
            <option>Reformas</option>
            <option>Telecomunicaciones</option>
            <option>Placas solares</option>
            <option>Fontanería</option>
          </select>

          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {success && <p className="success">Mensaje enviado correctamente ✔</p>}

        </form>

      </div>
    </section>
  );
}
