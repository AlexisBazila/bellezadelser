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
            "Los Registros Akáshicos son un campo de conciencia donde se guarda la información del alma: experiencias, aprendizajes, patrones, bloqueos, dones y propósito.",

            "Acceder a ellos no es adivinación ni predicción, sino un acto de escucha profunda y consciente que permite comprender por qué estás viviendo ciertas situaciones y qué aprendizaje hay detrás.",
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
                "Sientes que repites historias y no entiendes por qué",
                "Percibes que algo en tu vida no avanza",
                "Experimentas bloqueo, confusión o dolor emocional",
                "Quieres comprender patrones que se repiten en vínculos o situaciones",
                "Necesitas claridad para tomar decisiones importantes",
                "Deseas entender procesos y relaciones desde el alma",
                "Buscas conectar con tu propósito actual",
                "Sientes el llamado a sanar desde la comprensión profunda, no solo desde la energía",
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
                "El Reiki es un acompañamiento energético complementario",
                "No reemplaza tratamientos ni terapias médicas",
                "Cada proceso es único y personal",
                "Es un trabajo en equipo: la energía acompaña y tú sostienes el proceso en tu vida diaria",
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
                { text: "Sesión energética completa" },
                { text: "Escaneo y armonización del campo energético" },
                { text: "Trabajo sobre centros energéticos (chakras)" },
                { text: "Limpieza energética y sellado de protección" },
                {
                  text: "Informe escrito personalizado con:",
                  children: [
                    "Qué se trabajó en la sesión",
                    "Bloqueos energéticos detectados",
                    "Lectura del cuerpo y la energía",
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
                "https://calendly.com/bellezadelseroficial/registrosvivo?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
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
