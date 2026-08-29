import React from "react";
import HeroAcademia from "../layouts/HeroAcademia/HeroAcademia";
import CaracteristicasAcademia from "../layouts/CaracteristicasAcademia/CaracteristicasAcademia";
import CursosAcademiaSection from "../layouts/CursosAcademiaSection/CursosAcademiaSection";
import MetodoAcademiaSection from "../layouts/MetodoAcademiaSection/MetodoAcademiaSection";
import CredencialesAcademiaSection from "../layouts/CredencialesAcademiaSection/CredencialesAcademiaSection";
import ReviewsAcademiaSection from "../layouts/ReviewsAcademiaSection/ReviewsAcademiaSection";
import TransformacionAcademiaSection from "../layouts/TransformacionAcademiaSection/TransformacionAcademiaSection";

function Academia() {
  return (
    <>
      <HeroAcademia />
      <CaracteristicasAcademia />
      <CursosAcademiaSection />
      <MetodoAcademiaSection />
      <CredencialesAcademiaSection />
      <ReviewsAcademiaSection />
      <TransformacionAcademiaSection />
    </>
  );
}

export default Academia;
