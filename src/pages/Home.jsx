// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CatalogSection from "../components/CatalogSection";
import BenefitsSection from "../components/BenefitsSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CatalogSection />
      <BenefitsSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
