// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#102216] text-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="size-8 text-primary">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 2.83L16.17 10H7.83L12 5.83zM18 18H6v-6h12v6z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Aserradero Monte Moriah</h3>
            </div>
            <p className="text-sm text-gray-400">
              Calidad y confianza en productos madereros.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="hover:text-primary" href="#">
                  Inicio
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#about">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#catalog">
                  Catálogo
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#gallery">
                  Galería
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  location_on
                </span>
                Av. Siempre Viva 742
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  call
                </span>
                +54 9 11 1234-5678
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  mail
                </span>
                contacto@montemoriah.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© 2025 Aserradero Monte Moriah. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
