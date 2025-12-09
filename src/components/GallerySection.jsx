// src/components/GallerySection.jsx
import React from "react";

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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDyncmV1zcOWfvHZdNEy4CYYeKNRonvUejtmOLjkZ2_2laLxjh8FqSNS6uGKcEUPnpwb4XTaWoVUzv-Fqg0ndShEfrj-0R_mSgOt1jR2gkYri-VcRyz4PogaTBfqq9ov5wDujszfdHA4JtHsS_DWhaWC7q8yb9-qFJRk9SpqY9Renw8-1vdJeZ8vjhdtWvvs_q9dEAZ-NR4mdxuIpP4JmEWZl34IC2EB596q3XAoPNmb-j3nTNp3_H9EU0UP_JvVkt3Ond18iUu9M"
              alt="Close-up of freshly cut wood logs showing the rings and texture."
            />
          </div>
          <div className="group overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover aspect-square transform group-hover:scale-110 transition-transform duration-300"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjSxr6sjXJJkrn1wr3tcuP43VnU86BzfXu1k56ACrasJFnZEuYSePYrIeg8MJ-RiynB9CDa4DazhAusypa9bGQYewchIeWa6lMBE_9ePatw64sumyQc8vCvH9NJI2hf6p_ABvBfThV23od3C5jHVvprlAWpEHhG3cGAPa-XsfPQdr3jakcbzMT0JePbISdoY8BNTPs6iIWpVwfhMajIwJT9XMPOHtWxEdcJpquWtLfC-SmVDUh0gxO1y2jGwr5gvDRTmWRBN1IRgE"
              alt="Interior of a modern house with exposed wooden ceiling beams."
            />
          </div>
          <div className="group overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover aspect-square transform group-hover:scale-110 transition-transform duration-300"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApt328ookgNQQDUXXR66P3Py4BtNWVk4U93dmw5v-ZmfpUIeTXB7zFUia28H9B0_N6r0qKYBWkIHn935d7oVnpvJQLbcD-JQZFMtJJjrldeBH-3Scb4V7mY5Phf3V8rGezO6UlYifxAqVHUHnfttCvONsPJoKyza9yPoujD0e2XJ92-okDxsockwu9FjxLjMKNQMK-MKz9mfCBjltiuekEKiXeOh1pRxVaZx-QJh4qRZ8CQENzI6cE6kgRkHkXp9wgWeXyOnz-dg4"
              alt="A worker in the sawmill operating machinery to cut a large plank of wood."
            />
          </div>
          <div className="group overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover aspect-square transform group-hover:scale-110 transition-transform duration-300"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByR94_3dwE8G_ydF5pLxhRcb0YXJDZwkecj2j5DRVlPEuoxj-eogyWvbaa7Pbp1ViRn4XRHk6ha45lMs1VqkjJspCW3MPhaEI2z-n1O0FwhoqpIUNXbSPQdh6Y_99PM2Zn58IWeWkJT4r0Jsk88o4o1SsPxx2HcMT7FHW3AmXNkcaB4W_VztQhcGYIcrepV0SBUuEH5gnp7yhKgZw9CFIEXcWe7_03SV1geFFY6yiuRZKN65c-fAT2q5PVOhPETlZEoGQ3o-hFNmU"
              alt="Elegant wooden furniture in a well-lit room."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
