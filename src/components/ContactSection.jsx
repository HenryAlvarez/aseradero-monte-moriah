// src/components/ContactSection.jsx
import React from "react";

export default function ContactSection() {
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
                  Av. Siempre Viva 742, Springfield
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-2xl mt-1">
                call
              </span>
              <div>
                <h4 className="font-bold">Teléfono</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  +54 9 11 1234-5678
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-2xl mt-1">
                mail
              </span>
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  contacto@montemoriah.com
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126438.285480749!2d-122.5222002364132!3d37.75769480721245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1689588647622!5m2!1sen!2s"
                style={{ border: 0, width: "100%" }}
              ></iframe>
            </div>
          </div>

          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
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
                className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark/50 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="message"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark/50 focus:ring-primary focus:border-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-[#102216] text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors"
            >
              Enviar Consulta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
