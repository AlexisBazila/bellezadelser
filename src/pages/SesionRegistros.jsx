import React from "react";
import ProductsMarkedSection from "../layouts/ProductsMarkedSection/ProductsMarkedSection";
import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionRegistrosImage from "../assets/images/sesionRegistros.png";
import SesionRegistrosIMovil from "../assets/images/sesionRegistrosMovil.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";
import TipoSesionSection from "../layouts/TipoSesionSection/TipoSesionSection";

function SesionRegistros() {
  return (
    <>
      <div>
        <HeroSession
          title={"Sesión de Registros Akáshicos"}
          subtitle={
            "Conecta con la sabiduría de tu alma, recibe claridad y guía para tu camino personal y espiritual."
          }
          duracion={"50 minutos"}
          modalidad={"Online y a Distancia"}
        />
        <ProductDescriptionSection
          subTtitle={"¿Qué son los Registros Akáshicos?"}
          paragraphs={[
            "Los Registros Akáshicos son una herramienta espiritual que permite acceder a la memoria energética del alma: un espacio sutil donde se guardan experiencias, aprendizajes y potenciales de esta vida y de otras.",
            "A través de esta conexión, recibís información, guía y claridad sobre situaciones que estás viviendo, patrones que se repiten o decisiones importantes que necesitás tomar.",
            "Una lectura te ayuda a comprender tu camino con mayor profundidad, liberar cargas emocionales y reconectar con tu esencia, para avanzar con más paz, propósito y confianza.",
          ]}
          imageDesktop={SesionRegistrosImage}
          imageMobile={SesionRegistrosIMovil}
        />
        <TipoSesionSection />
        <SessionCalendarSection
          links={{
            online: {
              // latam: "https://mpago.la/1AnXre4",
              latam:
                "https://calendly.com/bellezadelseroficial/registrosvivo?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
              world:
                "https://calendly.com/bellezadelseroficial/regoneu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            },
            distance: {
              // latam: "https://mpago.la/2JG8mzD",
              latam:
                "https://calendly.com/bellezadelseroficial/registros?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
              world:
                "https://calendly.com/bellezadelseroficial/regdiseu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            },
          }}
        />
      </div>
    </>
  );
}

export default SesionRegistros;
