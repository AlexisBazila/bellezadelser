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
            "6 sesiones de 90 minutos",
            "Cada encuentro trabaja una dimensión específica de transformación:",
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
          <SmallButton caption="Es Para Mi" link={"/sobre-mi"} />
        </div>
      </VariableContentSection>
    </>
  );
}

export default IncluyeTrasciendeSection;
