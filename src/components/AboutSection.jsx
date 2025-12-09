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
              Aserradero Monte Moriah es un negocio dedicado a la venta de
              madera y productos forestales, comprometidos con la calidad y el
              servicio al cliente. Ofrecemos una amplia variedad de productos
              para satisfacer las necesidades de nuestros clientes, tanto
              mayoristas como minoristas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4 p-6 rounded-lg bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold text-[#2F4F4F] dark:text-white">
                Misión
              </h3>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                Proveer madera de la más alta calidad, obtenida de manera
                sostenible, garantizando la satisfacción total de nuestros
                clientes a través de un servicio excepcional y precios
                competitivos.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-lg bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold text-[#2F4F4F] dark:text-white">
                Visión
              </h3>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                Ser la empresa líder en el sector maderero, reconocida por
                nuestra integridad, innovación y compromiso con el medio
                ambiente y la comunidad.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-lg bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold text-[#2F4F4F] dark:text-white">
                Valores
              </h3>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                Calidad: Nos esforzamos por la excelencia en cada producto.
                Responsabilidad: Operamos de manera sostenible y ética.
                Confianza: Construimos relaciones duraderas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
