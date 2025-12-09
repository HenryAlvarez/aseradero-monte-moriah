// src/components/BenefitsSection.jsx
import React from "react";

export default function BenefitsSection() {
  return (
    <section className="py-16 sm:py-24" id="benefits">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-[#2F4F4F] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">
          Por Qué Elegirnos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center size-16 bg-primary/20 rounded-full text-primary">
              <span className="material-symbols-outlined !text-4xl">
                verified
              </span>
            </div>
            <h3 className="text-lg font-bold">Calidad Garantizada</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Solo trabajamos con madera de la mejor calidad para asegurar la
              durabilidad de sus proyectos.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center size-16 bg-primary/20 rounded-full text-primary">
              <span className="material-symbols-outlined !text-4xl">
                local_shipping
              </span>
            </div>
            <h3 className="text-lg font-bold">Entrega Confiable</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Coordinamos la entrega para que reciba sus materiales a tiempo y
              en perfectas condiciones.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center size-16 bg-primary/20 rounded-full text-primary">
              <span className="material-symbols-outlined !text-4xl">
                support_agent
              </span>
            </div>
            <h3 className="text-lg font-bold">Asesoramiento Experto</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Nuestro equipo está listo para ayudarle a elegir los productos
              adecuados para sus necesidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
