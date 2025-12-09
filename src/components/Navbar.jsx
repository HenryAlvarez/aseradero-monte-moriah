// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Enlaces principales
  const navLinks = [
    { label: "Inicio", path: "/" },
    { label: "Sobre Nosotros", hash: "about" },
    { label: "Catálogo", path: "catalogo" },
    { label: "Galería", hash: "gallery" },
    { label: "Contacto", hash: "contact" },
  ];

  const goToSection = (hash) => {
    setOpen(false);

    if (location.pathname === "/") {
      // Ya estamos en Home → solo scroll
      window.location.hash = hash;
    } else {
      // Estamos en otra página → ir a Home y luego scroll
      navigate(`/#${hash}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between w-full max-w-6xl px-4 py-3">
        
        {/* LOGO */}
        <div className="flex items-center gap-4">
          <div className="size-8 text-[#2F4F4F] dark:text-primary">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 2.83L16.17 10H7.83L12 5.83zM18 18H6v-6h12v6z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-tight text-[#2F4F4F] dark:text-white">
            Aserradero Monte Moriah
          </h2>
        </div>

        {/* NAV ESCRITORIO */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            // Enlaces a páginas
            if (link.path) {
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium hover:text-primary dark:hover:text-primary"
                >
                  {link.label}
                </Link>
              );
            }

            // Enlaces a secciones (anchors)
            return (
              <button
                key={link.label}
                onClick={() => goToSection(link.hash)}
                className="text-sm font-medium hover:text-primary dark:hover:text-primary"
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* BOTÓN MOBILE */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setOpen(!open)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden w-full border-t border-gray-200 dark:border-gray-800 bg-background-light/95 dark:bg-background-dark/95 px-4 pb-3">
          <nav className="flex flex-col gap-3 pt-2">
            {navLinks.map((link) => {
              if (link.path) {
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium py-1 hover:text-primary dark:hover:text-primary"
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <button
                  key={link.label}
                  onClick={() => goToSection(link.hash)}
                  className="text-sm text-left font-medium py-1 hover:text-primary dark:hover:text-primary"
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
