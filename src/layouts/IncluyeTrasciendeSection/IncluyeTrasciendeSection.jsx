import React, { useState } from "react";
import VariableContentSection from "../../components/VariableContentSection/VariableContentSection";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import SmallButton from "../../components/smallButton/SmallButton";
import AccordionMenu from "../../components/AccordionMenu/AccordionMenu";
import fondo from "../../assets/images/FondoGreenRightBottom.png";
import "./IncluyeTrasciendeSection.css";

function IncluyeTrasciendeSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const data = [
    {
      pregunta: "1. Seis Encuentros Privados 1:1",
      respuesta: [
        {
          type: "paragraph",
          content: [
            { text: "6 sesiones de 90 minutos" },
            {
              text: "Cada encuentro trabaja una dimensión específica de transformación:",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              text: "Semana 1 — Identidad & Visión",
              strong: true,
            },
            {
              text: "Claridad personal, identidad actual y expansión",
            },
          ],
        },

        {
          type: "paragraph",
          content: [
            {
              text: "Semana 2 — Imagen & Presencia",
              strong: true,
            },
            {
              text: "Estilo, presencia y coherencia visual.",
            },
          ],
        },

        {
          type: "paragraph",
          content: [
            {
              text: "Semana 3 — Bienestar Integral & Energía",
              strong: true,
            },
            {
              text: "Hábitos, bienestar y sostén interno.",
            },
          ],
        },

        {
          type: "paragraph",
          content: [
            {
              text: "Semana 4 — Autoestima & Seguridad",
              strong: true,
            },
            {
              text: "Reconexión con tu valor, autenticidad y confianza personal.",
            },
          ],
        },

        {
          type: "paragraph",
          content: [
            {
              text: "Semana 5 — Energía & Liberación",
              strong: true,
            },
            {
              text: "Desbloqueo, integración emocional y armonización energética.",
            },
          ],
        },

        {
          type: "paragraph",
          content: [
            {
              text: "Semana 6 — Manifestación & Diseño de Vida",
              strong: true,
            },
            {
              text: "Decisiones alineadas, visión y expansión consciente.",
            },
          ],
        },

        {
          type: "paragraph",
          content: [
            {
              text: "Semana 1 — Identidad & Visión",
              strong: true,
            },
            {
              text: "Claridad personal, identidad actual y expansión",
            },
          ],
        },
      ],
    },

    {
      pregunta: "2. Asesoría de Imagen Integral Premium",
      respuesta: [
        {
          type: "paragraph",
          content: [{ text: "Incluye:" }],
        },
        {
          type: "list",
          items: [
            "Morfología corporal",
            "Visagismo facial",
            "Colorimetría personal",
            "Definición de estilo",
            "Fondo de armario estratégico",
            "Compras conscientes",
            "Imagen profesional y presencia",
          ],
        },
      ],
    },

    {
      pregunta: "3. Auditoría de Imagen & Presencia",
      respuesta: [
        {
          type: "paragraph",
          content: [{ text: "Analizamos integralmente:" }],
        },
        {
          type: "list",
          items: [
            "Imagen actual",
            "Coherencia visual",
            "Comunicación no verbal",
            "Presencia",
            "Proyección energética",
            "Estilo personal",
          ],
        },
      ],
    },

    {
      pregunta: "4. Plan Nueva Versión",
      respuesta: [
        {
          type: "paragraph",
          content: [
            {
              text: "Un roadmap personalizado diseñado para ayudarte a integrar cambios sostenibles en:",
            },
          ],
        },
        {
          type: "list",
          items: [
            "Energía",
            "Hábitos",
            "Imagen",
            "Bienestar",
            "Autoestima",
            "Expansión personal",
            "Diseño de vida",
          ],
        },
      ],
    },

    {
      pregunta: "5. Acompañamiento Energético Integrativo",
      respuesta: [
        {
          type: "paragraph",
          content: [
            {
              text: "Herramientas complementarias desde una mirada holística orientadas al bienestar, claridad e integración personal.",
            },
          ],
        },
        {
          type: "quote",
          content:
            "Importante: este acompañamiento no sustituye procesos médicos, psicológicos ni terapéuticos.",
        },
      ],
    },

    {
      pregunta: "6. Soporte VIP Privado",
      respuesta: [
        {
          type: "paragraph",
          content: [
            {
              text: "Acompañamiento cercano y personalizado vía WhatsApp durante todo el proceso.",
            },
          ],
        },
      ],
    },

    {
      pregunta: "7. Feedback de Imagen & Presencia",
      respuesta: [
        {
          type: "paragraph",
          content: [
            {
              text: "Orientación personalizada sobre:",
            },
          ],
        },
        {
          type: "list",
          items: [
            "Looks",
            "Compras",
            "Imagen profesional",
            "Presencia digital",
            "Coherencia estética y energética",
          ],
        },
      ],
    },

    {
      pregunta: "8. Recursos Exclusivos",
      respuesta: [
        {
          type: "paragraph",
          content: [
            {
              text: "Acceso a herramientas diseñadas para acompañar tu transformación:",
            },
          ],
        },
        {
          type: "list",
          items: [
            "Audios de integración",
            "Meditaciones guiadas",
            "Workbook de expansión",
            "Journaling guiado",
            "Herramientas de autoestima",
            "Recursos personalizados",
          ],
        },
      ],
    },

    {
      pregunta: "9. Fase Integración TRASCIENDE™",
      respuesta: [
        {
          type: "paragraph",
          content: [
            {
              text: "2 semanas adicionales de acompañamiento personalizado.",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              text: "Diseñadas para ayudarte a sostener hábitos, integrar cambios y consolidar tu transformación desde una identidad más alineada y consciente.",
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <VariableContentSection
        backgroundImage={fondo}
        backgroundPosition="right bottom"
        backgroundOverlay="rgba(245,243,243)"
      >
        <div className="IncluyeTrasciendeParagraphContainer">
          <h2>¿Qué incluye tu experiencia TRASCIENDE™?</h2>
        </div>

        <div className="IncluyeTrasciendeListContainer">
          {data.map((item, index) => (
            <AccordionMenu
              key={index}
              pregunta={item.pregunta}
              respuesta={item.respuesta}
              isOpen={activeIndex === index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </div>
        <div className="IncluyeTrasciendebutton">
          <SmallButton caption="Quiero Trascender" link="https://calendly.com/bellezadelseroficial/expeciende" />
        </div>
      </VariableContentSection>
    </>
  );
}

export default IncluyeTrasciendeSection;
