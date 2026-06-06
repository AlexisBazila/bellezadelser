import React from "react";
import HeroTrasciende from "../layouts/HeroTrasciende/HeroTrasciende";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import MapaInicial from "../layouts/MapaInicial/MapaInicial";
import TrasciendeDescriptionSection from "../layouts/TrasciendeDescritpionSection/TrasciendeDescriptionSection";
import SectionSeparator from "../layouts/SectionSeparator/SectionSeparator";

function Trasciende() {
  return (
    <>
      <HeroTrasciende />
      <TrasciendeDescriptionSection />
      <SectionSeparator title="Ocurre cuando transformas la estructura interna desde donde construyes tu vida." />
      <MapaInicial />
      <SectionSeparator
        // backgroundColor="#FFFFFF"
        // textColor="#8D9B6A"
        paragraph="No se trata de convertirte en alguien diferente. Se trata de liberar bloqueos, fortalecer tu identidad y aprender a habitar una versión más alineada, auténtica y expansiva de ti."
        title="La vida que sostienes siempre será un reflejo de la identidad que habitas."
      />
    </>
  );
}

export default Trasciende;
