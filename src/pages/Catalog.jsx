// src/pages/Catalog.jsx
import React from "react";

const whatsappLink = "https://wa.me/"; // cambia el número cuando quieras

export default function Catalog() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden font-catalog bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-10">
        <div className="flex flex-col max-w-[1200px] flex-1">
          {/* Título principal */}
          <main className="flex flex-col gap-8">
            <div className="flex flex-wrap justify-between items-center gap-4 px-4 sm:px-6 lg:px-10">
              <p className="text-text-light dark:text-text-dark text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                Nuestro Catálogo de Productos
              </p>
            </div>

            {/* Filtros (por ahora solo decorativos) */}
            <div className="flex gap-3 p-3 flex-wrap px-4 sm:px-6 lg:px-10">
              <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 dark:bg-primary/30 pl-4 pr-4">
                <p className="text-primary dark:text-primary text-sm font-bold leading-normal">
                  Todos
                </p>
              </div>
              <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark pl-4 pr-4">
                <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                  Maderas Duras
                </p>
              </div>
              <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark pl-4 pr-4">
                <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                  Maderas Blandas
                </p>
              </div>
              <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark pl-4 pr-4">
                <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                  Vigas
                </p>
              </div>
              <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark pl-4 pr-4">
                <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                  Tablas
                </p>
              </div>
            </div>

            {/* Estado vacío (sin productos) */}
            <div
              id="catalog"
              className="flex flex-col items-center justify-center gap-4 p-10 sm:p-16 lg:p-20 text-center"
            >
              <span className="material-symbols-outlined text-5xl text-primary">
                inventory_2
              </span>
              <h2 className="text-2xl font-bold text-text-light dark:text-text-dark">
                Por el momento no hay productos disponibles
              </h2>
              <p className="max-w-md text-sm text-subtle-text-light dark:text-subtle-text-dark">
                Estamos actualizando nuestro catálogo. Si deseas más información
                sobre disponibilidad de productos, puedes escribirnos por WhatsApp.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 w-full sm:w-auto h-11 rounded-lg bg-primary text-white font-bold text-sm px-6 transition-transform hover:scale-105 active:scale-95"
              >
                <span className="material-symbols-outlined">chat</span>
                Consultar por WhatsApp
              </a>
            </div>

            {/* Footer interno del catálogo (encima del Footer global) */}
            <section className="flex flex-col gap-8 px-5 py-10 text-center border-t border-solid border-border-light dark:border-border-dark mt-10">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                <span className="text-subtle-text-light dark:text-subtle-text-dark text-base">
                  Dirección: Guatemala
                </span>
                <span className="text-subtle-text-light dark:text-subtle-text-dark text-base">
                  Teléfono: Por confirmar
                </span>
                <span className="text-subtle-text-light dark:text-subtle-text-dark text-base">
                  Email: Por confirmar
                </span>
              </div>

              <p className="text-subtle-text-light dark:text-subtle-text-dark text-sm">
                © 2025 Aserradero Monte Moriah. Todos los derechos reservados.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
