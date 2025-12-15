// src/components/ContactSection.jsx
import React, { useMemo, useState } from "react";

export default function ContactSection() {
  const WHATSAPP_NUMBER = "50247222020"; // sin "+" y sin espacios

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const whatsappLink = useMemo(() => {
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    const lines = [
      "Hola, quiero hacer una consulta.",
      name ? `Nombre: ${name}` : null,
      email ? `Email: ${email}` : null,
      message ? `Mensaje: ${message}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }, [form]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validación mínima
    if (!form.name.trim() || !form.message.trim()) {
      alert("Por favor escribe tu nombre y tu mensaje.");
      return;
    }

    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 sm:py-24" id="contact">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-[#2F4F4F] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-12 text-center">
          Contacto
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-2xl mt-1">
                location_on
              </span>
              <div>
                <h4 className="font-bold">Dirección</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Caserio santa isabel, 1 calle 1-117 zona 4 santa lucias milpas
                  altas
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-2xl mt-1">
                call
              </span>
              <div>
                <h4 className="font-bold">Teléfono</h4>
                <p className="text-gray-600 dark:text-gray-400">+502 47222020</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-2xl mt-1">
                mail
              </span>
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  vickyleivacastillo04@gmail.com
                </p>
              </div>
            </div>

            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 mt-4">
              <iframe
                title="Ubicación Aserradero Monte Moriah"
                allowFullScreen
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Caser%C3%ADo%20Santa%20Isabel%2C%201%20calle%201-117%2C%20zona%204%2C%20Santa%20Luc%C3%ADa%20Milpas%20Altas%2C%20Guatemala&output=embed"
                style={{ border: 0, width: "100%" }}
              ></iframe>
            </div>
          </div>

          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark/50 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark/50 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={onChange}
                className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark/50 focus:ring-primary focus:border-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-[#102216] text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors"
            >
              Enviar por WhatsApp
            </button>

            {/* Opcional: link directo (por si el usuario quiere abrir WhatsApp sin enviar) */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary font-medium hover:underline"
            >
              Abrir WhatsApp con este mensaje
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
