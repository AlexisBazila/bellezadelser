import React from "react";
import HeroAcademia from "../layouts/HeroAcademia/HeroAcademia";
import CaracteristicasAcademia from "../layouts/CaracteristicasAcademia/CaracteristicasAcademia";
import CursosAcademiaSection from "../layouts/CursosAcademiaSection/CursosAcademiaSection";
import MetodoAcademiaSection from "../layouts/MetodoAcademiaSection/MetodoAcademiaSection";

function Academia() {
  return (
    <>
      <HeroAcademia />
      <CaracteristicasAcademia />
      <CursosAcademiaSection />
      <MetodoAcademiaSection />
    </>
  );
}

export default Academia;
