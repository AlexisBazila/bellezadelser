import React from "react";
import HeroSession from "../layouts/HeroSession/HeroSession";
import PackCard from "../components/PackCard/PackCard";

function SesionsPack() {
  return (
    <>
      <HeroSession title={"Packs de Sanación"} />

      <PackCard
        code="PACK 1"
        title="Reiki Usui + Registros Akáshicos"
        modalidad="a distancia, sin conexión en vivo."
        sessionName="Reiki + Registros Akáshicos"
        includes={[
          "Sesión de Reiki Usui (armonización energética integral)",
          "Sesión de Registros Akáshicos (guía y comprensión del alma)",
          "Informe energético completo con todo lo trabajado",
        ]}
        description="Cuando la energía se ordena y la conciencia se expande, todo empieza a encajar. Este pack combina sanación energética y lectura de conciencia para acompañarte a equilibrar tu campo energético y comprender los aprendizajes que estás atravesando."
        links={{
          online: {
            latam: true,
            world: "https://calendly.com/bellezadelseroficial/1",
          },
          distance: {
            latam: true,
            world: "https://calendly.com/bellezadelseroficial/1",
          },
        }}
      />

      <PackCard
        code="PACK 2"
        title="Reset Energético Esencial"
        modalidad="a distancia, sin conexión en vivo."
        sessionName="Reset Energético Esencial"
        includes={[
          "Limpieza y alineación de Chakras",
          "Sanación para el estrés y la ansiedad consciente",
          "Informe energético completo con todo lo trabajado",
        ]}
        description="Cuando el cuero está en alerta y la mente no descansa, la energía pide orden.
Este pack es ideal para bajar el ruido interno, liberar tensión acumulada y volver a un estado de calma y equilibrio. 
Un primer paso profundo para resetear tu energía y recuperar claridad."
        links={{
          online: {
            latam: true,
            world: "https://calendly.com/bellezadelseroficial/1",
          },
          distance: {
            latam: true,
            world: "https://calendly.com/bellezadelseroficial/1",
          },
        }}
      />
    </>
  );
}

export default SesionsPack;
