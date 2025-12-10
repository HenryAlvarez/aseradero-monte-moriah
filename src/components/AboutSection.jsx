// src/components/AboutSection.jsx
import React from "react";

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-24" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col gap-12 @container">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#2F4F4F] dark:text-white tracking-light text-3xl font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-3xl">
              Sobre Nosotros
            </h2>
            <p className="text-base font-normal leading-normal max-w-3xl text-gray-700 dark:text-gray-300">
              Aserradero Monte Moriah es una empresa dedicada a la venta de madera de pino y ciprés, regla y tabla, así como una amplia variedad de productos relacionados con la carpintería y la construcción.
Ofrecemos soluciones en pérgolas, pilares torneados, celosías, capiteles, pergaminos y más, siempre comprometidos con la calidad y la satisfacción de nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4 p-6 rounded-lg bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold text-[#2F4F4F] dark:text-white">
                Misión
              </h3>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                Brindar madera de alta calidad para la construcción y la carpintería, ofreciendo un servicio confiable y una excelente atención al cliente en cada proyecto.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-lg bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold text-[#2F4F4F] dark:text-white">
                Visión
              </h3>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
              Mejorar continuamente nuestros servicios y ampliar la variedad de productos para responder de manera efectiva a las necesidades de nuestra clientela, consolidándonos como un referente en el sector maderero.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-lg bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold text-[#2F4F4F] dark:text-white">
                Valores
              </h3>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                Productos de calidad, puntualidad en la entrega, responsabilidad en cada proceso y un firme compromiso con la satisfacción de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
