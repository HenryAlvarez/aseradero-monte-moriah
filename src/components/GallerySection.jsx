// src/components/GallerySection.jsx
import React from "react";
import cepilloImg from '../assets/generales/cepillo.jpg'
// import SierraImg from '../assets/generales/sierra de sinta.jpg'
import tornoImg from '../assets/generales/torno para madera.jpg'
import trabajandoImg from '../assets/generales/trabajando pecho paloma.jpg'
import trozaImg from '../assets/generales/troza.jpg'

export default function GallerySection() {
  return (
    <section
      className="py-16 sm:py-24 bg-white dark:bg-background-dark/50"
      id="gallery"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-[#2F4F4F] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">
          Galería
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="group overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover aspect-square transform group-hover:scale-110 transition-transform duration-300"
              src={cepilloImg}
              alt="Close-up of freshly cut wood logs showing the rings and texture."
            />
          </div>
          <div className="group overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover aspect-square transform group-hover:scale-110 transition-transform duration-300"
              alt="Interior of a modern house with exposed wooden ceiling beams."
              src={trozaImg}
            />
          </div>
          <div className="group overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover aspect-square transform group-hover:scale-110 transition-transform duration-300"
              alt="A worker in the sawmill operating machinery to cut a large plank of wood."
              src={tornoImg}
            />
          </div>
          <div className="group overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover aspect-square transform group-hover:scale-110 transition-transform duration-300"
              alt="Elegant wooden furniture in a well-lit room."
              src={trabajandoImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
