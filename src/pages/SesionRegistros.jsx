import React from "react";
import ProductsMarkedSection from "../layouts/ProductsMarkedSection/ProductsMarkedSection";
import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionRegistrosImage from "../assets/images/sesionRegistros.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";
import TipoSesionSection from "../layouts/TipoSesionSection/TipoSesionSection";
import SesionSections from "../components/SesionSections/SesionSections";

function SesionRegistros() {
  return (
    <>
      <div>
        <HeroSession
          title={"Sesión de Registros Akáshicos"}
          duracion={"50 minutos"}
          modalidad={"Online y a Distancia"}
          buttonText="Agendar Sesión"
          buttonLink="#sessionCalendar"
        />
        <ProductDescriptionSection
          subTtitle={"¿Qué son los Registros Akáshicos?"}
          paragraphs={[
            "Los Registros Akáshicos son un campo de conciencia donde se guarda la información del alma: bold[experiencias, aprendizajes, patrones, bloqueos, dones y propósito.]",

            "Acceder a ellos no es adivinación ni predicción, sino un bold[acto de escucha profunda y consciente] que permite comprender por qué estás viviendo ciertas situaciones y qué aprendizaje hay detrás.",
          ]}
          imageDesktop={SesionRegistrosImage}
          imageMobile={SesionRegistrosImage}
        />
        <SesionSections
          title="Esta sesión es para ti si…"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Sientes que bold[repites historias y no entiendes por qué]",
                "Percibes que bold[algo en tu vida no avanza]",
                "Experimentas bold[bloqueo, confusión o dolor emocional]",
                "Quieres comprender bold[patrones que se repiten en vínculos o situaciones]",
                "Necesitas bold[claridad para tomar decisiones importantes]",
                "Deseas bold[entender procesos y relaciones desde el alma]",
                "Buscas bold[conectar con tu propósito actual]",
                "Sientes el llamado a bold[sanar desde la comprensión profunda, no solo desde la energía]",
              ],
            },
            {
              type: "paragraph",
              text: "Cuando la mente se ordena y el alma comprende, la energía también encuentra su equilibrio.",
            },
          ]}
        />
        <TipoSesionSection />
        <SesionSections
          title="Beneficios de los Registros Akáshicos"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Mayor claridad sobre tu vida y procesos",
                "Comprensión de bloqueos y aprendizajes del alma",
                "Toma de decisiones más consciente",
                "Paz interna y alivio emocional",
                "Alineación con tu camino",
                "Conexión con tu sabiduría interior",
              ],
            },
          ]}
        />
        <SesionSections
          title="Importante saber"
          variant="strong"
          content={[
            {
              type: "list",
              items: [
                "No es adivinación ni futurología.",
                "No reemplaza tratamientos médicos o terapéuticos.",
                "No se trabaja sobre terceras personas sin permiso.",
                "Cada mensaje llega según lo que el alma está lista para recibir.",
                "Es un trabajo en equipo: la información llega, tú la integras.",
              ],
            },
          ]}
        />
        <SesionSections
          title="Incluye"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                {
                  text: "Apertura y cierre consciente de los Registros Akáshicos.",
                },
                { text: "Respuestas a las preguntas realizadas." },
                { text: "Canalización de mensajes y comprensiones del alma." },
                {
                  text: "Informe escrito personalizado con:",
                  children: [
                    "Qué información se recibió",
                    "Qué bloqueos o patrones aparecieron",
                    "Qué aprendizajes se están manifestando",
                    "Recomendaciones prácticas para integrar el proceso",
                  ],
                },
              ],
            },
          ]}
        />
        <SessionCalendarSection
          links={{
            online: {
              latam:
                "https://calendly.com/bellezadelseroficial/vanciacami?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
              world:
                "https://calendly.com/bellezadelseroficial/regoneu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            },
            distance: {
              latam:
                "https://calendly.com/bellezadelseroficial/registros?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
              world:
                "https://calendly.com/bellezadelseroficial/regdiseu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            },
          }}
          sessionName="Sesión de Registros Akáshicos"
        />
      </div>
    </>
  );
}

export default SesionRegistros;
