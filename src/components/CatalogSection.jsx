// src/components/CatalogSection.jsx
import React from "react";
import { Link } from "react-router-dom";

// Imágenes reales (desde src/assets)
import celosillaAbiertaImg from "../assets/Productos/selocilla abierta.jpg";
import celosillaMarcoImg from "../assets/Productos/selocilla con marco.jpg";
import pilaresTorneadosImg from "../assets/Productos/pilares torneados.jpg";
import tablasImg from "../assets/Productos/tablas.jpg";

export default function CatalogSection() {
  return (
    <section
      className="py-16 sm:py-24 bg-white dark:bg-background-dark/50"
      id="catalog"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-[#2F4F4F] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">
          Catálogo de Productos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Item 1 */}
          <div className="flex flex-col gap-3 group">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
              data-alt="Celosilla abierta para pérgola"
              style={{ backgroundImage: `url("${celosillaAbiertaImg}")` }}
            />
            <div>
              <p className="text-base font-medium">Celosilla (abierta)</p>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                Abierta 5 cm, 1.20 cm x 2.40 cm.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col gap-3 group">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
              data-alt="Celosilla con marco para pérgola"
              style={{ backgroundImage: `url("${celosillaMarcoImg}")` }}
            />
            <div>
              <p className="text-base font-medium">Marco de celosilla</p>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                4.5 cm, 1.20 cm x 2.40 cm.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col gap-3 group">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
              data-alt="Pilares torneados de ciprés para pérgola"
              style={{ backgroundImage: `url("${pilaresTorneadosImg}")` }}
            />
            <div>
              <p className="text-base font-medium">Pilares torneados</p>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                8&quot; x 8&quot; x 8&apos; ciprés (bajo pedido).
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col gap-3 group">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
              data-alt="Tablas de madera aserrada"
              style={{ backgroundImage: `url("${tablasImg}")` }}
            />
            <div>
              <p className="text-base font-medium">Tablas</p>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                De todas las medidas (madera aserrada).
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/catalogo"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-transparent border border-primary text-primary text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:bg-primary/10 transition-colors"
          >
            <span className="truncate">Ver Catálogo Completo</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
