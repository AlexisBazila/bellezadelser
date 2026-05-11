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
        modalidad="A distancia y En vivo."
        sessionName="Reiki + Registros Akáshicos"
        includes={[
          "Sesión de Reiki Usui (armonización energética integral)",
          "Sesión de Registros Akáshicos (guía y comprensión del alma)",
          "Informe energético completo con todo lo trabajado",
        ]}
        description={[
          "Cuando la energía se ordena y la conciencia se expande, todo empieza a encajar. Este pack combina sanación energética y lectura de conciencia para acompañarte a equilibrar tu campo energético y comprender los aprendizajes que estás atravesando.",
        ]}
        links={{
          distance: {
            latam:
              "https://calendly.com/bellezadelseroficial/packreiregdisarg?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            world:
              "https://calendly.com/bellezadelseroficial/packreiregdiseu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
          },
          online: {
            latam:
              "https://calendly.com/bellezadelseroficial/packreiregarg?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            world:
              "https://calendly.com/bellezadelseroficial/packreiregeu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
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
        description={[
          "Cuando el cuerpo está en alerta y la mente no descansa, la energía pide orden.",
          "Este pack es ideal para bajar el ruido interno, liberar tensión acumulada y volver a un estado de calma y equilibrio.",
          "Un primer paso profundo para resetear tu energía y recuperar claridad.",
        ]}
        links={{
          distance: {
            latam:
              "https://calendly.com/bellezadelseroficial/resetenerarg?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            world:
              "https://calendly.com/bellezadelseroficial/resetenereu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
          },
        }}
      />

      <PackCard
        code="PACK 3"
        title="Sanación Femenina Integral"
        modalidad="a distancia, sin conexión en vivo."
        sessionName="Sanación Femenina Integral"
        includes={[
          "Sanación de útero",
          "Limpieza y alineación de Chakras",
          "Sanación para el estrés y la ansiedad consciente",
          "Informe energético completo con todo lo trabajado",
        ]}
        description={[
          "Un espacio de contención y sanación para mujeres que sienten que su cuerpo guarda historias no resueltas.",
          "Este pack acompaña la liberación emocional, la reconexión con la energía femenina y el descanso profundo del sistema nervioso.",
          "Sanar desde adentro para volver a habitarte con suavidad.",
        ]}
        links={{
          distance: {
            latam:
              "https://calendly.com/bellezadelseroficial/sanfemarg?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            world:
              "https://calendly.com/bellezadelseroficial/sanfemeu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
          },
        }}
      />

      <PackCard
        code="PACK 4"
        title="Sanación Emocional Profunda"
        modalidad="a distancia, sin conexión en vivo."
        sessionName="Sanación Emocional Profunda"
        includes={[
          "Sanación de bloqueos en el amor",
          "Limpieza y alineación de Chakras",
          "Activación de abundancia y apertura de caminos",
          "Informe energético completo con todo lo trabajado",
        ]}
        description={[
          "Cuando el corazón duele, la energía se estanca y la vida no parece avanzar. Este pack está diseñado para liberar patrones emocionales, cerrar ciclos y volver a abrirte al amor, la confianza y las oportunidades. Un proceso de liberación y reordenamiento profundo.",
        ]}
        links={{
          distance: {
            latam:
              "https://calendly.com/bellezadelseroficial/emoproarg?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            world:
              "https://calendly.com/bellezadelseroficial/emoproeu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
          },
        }}
      />

      <PackCard
        code="PACK 5"
        title="Apertura y Expansión"
        modalidad="a distancia, sin conexión en vivo."
        sessionName="Apertura y Expansión"
        includes={[
          "Activación de abundancia y apertura de caminos",
          "Limpieza energética de espacios",
          "Limpieza y alineación de Chakras",
          "Informe energético completo con todo lo trabajado",
        ]}
        description={[
          "Ideal para momentos de cambio, mudanzas, nuevos proyectos o estancamientos prolongados. Este pack limpia, ordena y activa la energía personal y del espacio para que la vida vuelva a fluir con claridad y expansión. Cuando la energía se ordena, los caminos se abren.",
        ]}
        links={{
          distance: {
            latam:
              "https://calendly.com/bellezadelseroficial/aperexpaarg?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            world:
              "https://calendly.com/bellezadelseroficial/aperexpaeu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
          },
        }}
      />

      <PackCard
        code="PACK 6"
        title="Acompañamiento Holístico"
        modalidad="online (Zoom o Videollamada)"
        sessionName="Acompañamiento Holístico"
        description={[
          "El acompañamiento holístico es un proceso de 4 sesiones diseñado para personas que necesitan continuidad, contención y guía consciente para atravesar un momento de cambio, bloqueo o transformación personal.",

          "No es una sesión aislada. ",
          "Es un espacio de acompañamiento integral, donde se trabaja la energía, las emociones, la mente y la conciencia, respetando el ritmo de cada persona.",

          "Este proceso permite profundizar, sostener y dar seguimiento a lo que en una sola sesión quedaría incompleto.",
        ]}
        links={{
          online: {
            latam:
              "https://calendly.com/bellezadelseroficial/acompackarg?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            world:
              "https://calendly.com/bellezadelseroficial/acompackeu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
          },
        }}
      />
    </>
  );
}

export default SesionsPack;
