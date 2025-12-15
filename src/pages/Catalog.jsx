// src/pages/Catalog.jsx
import React, { useMemo, useState } from "react";
import capitelImg from '../assets/Productos/capitel.jpg'
// import patasTorneadasImg from "../assets/Productos/patas torneadas.jpg";
import pergaminosImg from "../assets/Productos/pergaminos .jpg";
import pilaresTorneadosImg from "../assets/Productos/pilares torneados.jpg";
import celosillaAbiertaImg from "../assets/Productos/selocilla abierta.jpg";
import celosillaMarcoImg from "../assets/Productos/selocilla con marco.jpg";
import tablasImg from "../assets/Productos/tablas.jpg";
import vigasImg from "../assets/Productos/vigas .jpg";
import lepaImg from "../assets/Productos/lepa.jpg";
import lenaImg from "../assets/Productos/leña1.jpg";
import aserrinImg from "../assets/Productos/Aserrin.jpg";
import celosllaCerradaImg from "../assets/Productos/celosillaCerrada.jpeg";

const WHATSAPP_NUMBER = "50247222020"; // ← pon tu número SIN +, ejemplo: "50212345678"
const whatsappBase = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : "https://wa.me/";


const PRODUCTS = [
  {
    id: "celosilla-abierta",
    name: "Celosilla (abierta)",
    description: "abierta 5 cm, 1.20 cm x 2.40 cm",
    price: 330,
    category: "pérgola",
    image: celosillaAbiertaImg,
    inventory: 5,
  },
  {
    id: "celosilla-cerrada",
    name: "Celosilla (cerrada)",
    description: "cerrada 3cm, 1.20 cm x 2.40 cm",
    price: 360,
    category: "pérgola",
    image: celosllaCerradaImg,
    inventory: 5,
  },
  {
    id: "pilares-torneados",
    name: "Pilares torneados",
    description: '8" x 8" x 8\' cipres',
    price: 850,
    category: "pérgola",
    image: pilaresTorneadosImg,
    inventory: "bajo pedido",
  },
  {
    id: "capiteles",
    name: "Capiteles",
    description: '6" x 8" x 20" cipres',
    price: 180,
    category: "pérgola",
    image: capitelImg,
    inventory: "bajo pedido",
  },
  {
    id: "pergamino",
    name: "Pergamino",
    description: '2" x 8" x 12" cipres',
    price: 90,
    category: "pérgola",
    image: pergaminosImg,
    inventory: "bajo pedido",
  },
  {
    id: "marco-celosilla",
    name: "Marco de celosilla",
    description: "4.5 cm 1.20 cm x 2.40 cm",
    price: 160,
    category: "pérgola",
    image: celosillaMarcoImg,
    inventory: "bajo pedido",
  },
  {
    id: "tablas",
    name: "Tablas",
    description: "de todas las medidas",
    price: null,
    category: "madera aserrada",
    image: tablasImg,
    inventory: "bajo pedido",
  },
  {
    id: "reglas",
    name: "Reglas",
    description: "de todas las medidas",
    price: null,
    category: "madera aserrada",
    image: vigasImg,
    inventory: "bajo pedido",
  },
  {
    id: "lepa",
    name: "Lepa",
    description: "diferentes largos",
    price: null,
    category: "madera aserrada",
    image: lepaImg,
    inventory: "bajo pedido",
  },
  {
    id: "lena",
    name: "Leña",
    description: "por cuarto, media y tarea completa",
    price: null,
    category: "madera aserrada",
    image: lenaImg,
    inventory: "3 tareas",
  },
  {
    id: "aserrin",
    name: "Aserrín",
    description: "por costal",
    price: 13,
    category: "madera aserrada",
    image: aserrinImg,
    inventory: "15 costales",
  },
];

function formatCategory(cat) {
  if (!cat) return "";
  // Normalizamos acentos/case para mostrar bonito
  const c = cat.toLowerCase();
  if (c === "pergola" || c === "pérgola") return "Pérgola";
  if (c === "madera aserrada") return "Madera aserrada";
  return cat;
}

function formatPrice(price) {
  if (price === null || price === undefined || price === "") return null;
  return `Q ${Number(price).toFixed(0)}`;
}

function buildWhatsappLink({ name }) {
  const msg = encodeURIComponent(
    `Hola, me interesa este producto: ${name}. ¿Me puedes dar disponibilidad y precio final?`
  );
  return `${whatsappBase}?text=${msg}`;
}

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const categories = useMemo(() => {
    const set = new Set(PRODUCTS.map((p) => formatCategory(p.category)));
    return ["Todos", ...Array.from(set)];
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeFilter === "Todos") return PRODUCTS;
    return PRODUCTS.filter((p) => formatCategory(p.category) === activeFilter);
  }, [activeFilter]);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden font-catalog bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-10">
        <div className="flex flex-col max-w-[1200px] flex-1">
          <main className="flex flex-col gap-8">
            {/* Título */}
            <div className="flex flex-wrap justify-between items-center gap-4 px-4 sm:px-6 lg:px-10">
              <p className="text-text-light dark:text-text-dark text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                Nuestro Catálogo de Productos
              </p>
            </div>

            {/* Filtros reales (según tu tabla) */}
            <div className="flex gap-3 p-3 flex-wrap px-4 sm:px-6 lg:px-10">
              {categories.map((cat) => {
                const selected = cat === activeFilter;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={[
                      "flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 transition-colors",
                      selected
                        ? "bg-primary/20 dark:bg-primary/30"
                        : "bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:bg-primary/10 dark:hover:bg-primary/20",
                    ].join(" ")}
                  >
                    <p
                      className={[
                        "text-sm leading-normal",
                        selected
                          ? "text-primary dark:text-primary font-bold"
                          : "text-text-light dark:text-text-dark font-medium",
                      ].join(" ")}
                    >
                      {cat}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Grid de productos */}
            <div
              id="catalog"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:p-6 lg:p-10"
            >
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            {/* Footer interno del catálogo */}
            {/* <section className="flex flex-col gap-8 px-5 py-10 text-center border-t border-solid border-border-light dark:border-border-dark mt-10">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                <span className="text-subtle-text-light dark:text-subtle-text-dark text-base">
                  Dirección: Caserio santa isabel, 1 calle 1-117 zona 4 santa lucias milpas altas
                </span>
                <span className="text-subtle-text-light dark:text-subtle-text-dark text-base">
                  Teléfono: +502 47222020
                </span>
                <span className="text-subtle-text-light dark:text-subtle-text-dark text-base">
                  Email: vickyleivacastillo04@gmail.com
                </span>
              </div>

              <p className="text-subtle-text-light dark:text-subtle-text-dark text-sm">
                © 2025 Aserradero Monte Moriah. Todos los derechos reservados.
              </p>
            </section> */}
          </main>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const { name, description, category, price, image, inventory } = product;

  const img = image?.trim() ? image : '';
  const priceText = formatPrice(price);
  const categoryText = formatCategory(category);
  const whatsappLink = buildWhatsappLink({ name });

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-4 transition-shadow hover:shadow-lg dark:hover:shadow-primary/10">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
        style={{ backgroundImage: `url("${img}")` }}
        aria-label={name}
      />

      <div className="flex flex-col gap-2">
        <p className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">
          {name}
        </p>

        <p className="text-subtle-text-light dark:text-subtle-text-dark text-sm">
          {description}
        </p>

        <div className="flex flex-col gap-1">
          <p className="text-subtle-text-light dark:text-subtle-text-dark text-xs font-medium uppercase tracking-wider">
            Categoría: {categoryText}
          </p>

          <p className="text-subtle-text-light dark:text-subtle-text-dark text-xs font-medium uppercase tracking-wider">
            Inventario:{" "}
            {typeof inventory === "number" ? `${inventory}` : inventory || "—"}
          </p>

          {priceText && (
            <p className="text-text-light dark:text-text-dark text-sm font-bold">
              {priceText}
            </p>
          )}
        </div>
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full h-11 rounded-lg bg-primary text-white font-bold text-sm transition-transform hover:scale-105 active:scale-95"
      >
        <span className="material-symbols-outlined">chat</span>
        Consultar por WhatsApp
      </a>
    </div>
  );
}
