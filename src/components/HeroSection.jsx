// src/components/HeroSection.jsx
import React from "react";

export default function HeroSection() {
  const whatsappLink = "https://wa.me/"; // ajusta el número si quieres

  return (
    <section
      className="flex flex-col min-h-[60vh] md:min-h-[75vh] items-center justify-center bg-cover bg-center bg-no-repeat"
      data-alt="A large truck fully loaded with high-quality timber logs, parked in a forest setting with sunlight filtering through the trees."
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjZmP_MojoUO6p187_gjaDrB6QwCf6PGJ8O1VOEfaEEdntq59SwAL6DMtcAo93nYkwT_1QYSxpHoh4t6UcTfCzBpY8XVyUCV7iJSJeTsW-roOIwi9plEdi-pOvC7pSqFFnJmSTYK2Q5BSimunVnzl__OjJq6DyjKuSj0H97BrO08P7VsBpEMHFrRVSxR4NTE50JiwfRbq1yaBTMVbKqmYWvwYX8WAmt0gxEbkFyNPkcynZQgSsTN5S6bdZpvS8dumkiAuNgEBqbfk")',
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="mt-4 text-lg md:text-xl mb-4 font-normal">
          Bienvenidos, pagina en contruccion.
        </h2>
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
          Aserradero Monte Moriah
        </h1>
        <h2 className="mt-4 text-lg md:text-xl font-normal">
          Venta de madera por mayor y menor
        </h2>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-[#102216] text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:bg-opacity-90 transition-colors"
        >
          <span className="truncate">Contactar por WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
