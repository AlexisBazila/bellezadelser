import React from "react";
import HeroTrasciende from "../layouts/HeroTrasciende/HeroTrasciende";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import MapaInicial from "../layouts/MapaInicial/MapaInicial";
import TrasciendeDescriptionSection from "../layouts/TrasciendeDescritpionSection/TrasciendeDescriptionSection";
import SectionSeparator from "../layouts/SectionSeparator/SectionSeparator";
import TrasciendeMetodoSection from "../layouts/TrasciendeMetodo/TrasciendeMetodoSection";
import PilaresTrasciendeSection from "../layouts/PilaresTrasciendeSection/PilaresTrasciendeSection";
import QueEsTrasciendeSection from "../layouts/QueEsTrasciendeSection/QueEsTrasciendeSection";
import EsParatiSiSection from "../layouts/EsParatiSiSection/EsParatiSiSection";
import IncluyeTrasciendeSection from "../layouts/IncluyeTrasciendeSection/IncluyeTrasciendeSection";

function Trasciende() {
  return (
    <>
      <HeroTrasciende />
      <TrasciendeDescriptionSection />
      <SectionSeparator title="Ocurre cuando transformas la estructura interna desde donde construyes tu vida." />
      <TrasciendeMetodoSection />
      <SectionSeparator
        // backgroundColor="#FFFFFF"
        // textColor="#8D9B6A"
        paragraphs={[
          "No se trata de convertirte en alguien diferente. Se trata de liberar bloqueos, fortalecer tu identidad y aprender a habitar una versión más alineada, auténtica y expansiva de ti.",
          "Porque la verdadera transformación ocurre cuando lo interno y lo externo comienzan a caminar en coherencia.",
        ]}
        title="La vida que sostienes siempre será un reflejo de la identidad que habitas."
      />
      <MapaInicial />
      <PilaresTrasciendeSection />
      <QueEsTrasciendeSection />
      <EsParatiSiSection />
      <IncluyeTrasciendeSection />
    </>
  );
}

export default Trasciende;
