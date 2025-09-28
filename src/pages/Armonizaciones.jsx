import React from "react";
import HeroArmonizaciones from "../layouts/heroArmonizaciones/HeroArmonizaciones";
import ArmonizacionesSection from "../layouts/ArmonizacionesSection/ArmonizacionesSection";
import SessionsSection from "../layouts/sessionsSection/SessionsSection";

function Armonizaciones() {
  return (
    <>
      <div>
        <HeroArmonizaciones />
        <ArmonizacionesSection />
        <SessionsSection />
      </div>
    </>
  );
}

export default Armonizaciones;
