import React from "react";
import ProductsMarkedSection from "../layouts/ProductsMarkedSection/ProductsMarkedSection";
import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionRegistrosImage from "../assets/images/sesionRegistros.png";
import SesionRegistrosIMovil from "../assets/images/sesionRegistrosMovil.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";

function SesionRegistros() {
  return (
    <>
      <div>
        <HeroSession
          title={"Sesión de Registros Akáshicos"}
          subtitle={
            "Conecta con la sabiduría de tu alma, recibe claridad y guía para tu camino personal y espiritual."
          }
          duracion={"60 minutos"}
          modalidad={"Online"}
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
        <SessionCalendarSection
          links={{
            online: {
              latam: "https://mpago.la/reiki-latam",
              world: "https://paypal.me/reiki-world",
            },
            distance: {
              latam: "https://mpago.la/reiki-distancia-latam",
              world: "https://paypal.me/reiki-distancia-world",
            },
          }}
        />
      </div>
    </>
  );
}

export default SesionRegistros;
