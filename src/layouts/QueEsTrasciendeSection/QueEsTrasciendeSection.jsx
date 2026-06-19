import React from "react";
import VariableContentSection from "../../components/VariableContentSection/VariableContentSection";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import SmallButton from "../../components/smallButton/SmallButton";
import "./QueEsTrasciendeSection.css";

function QueEsTrasciendeSection() {
  return (
    <>
      <VariableContentSection>
        <div className="QueEsParagraphContainer">
          <h2>¿Qué es TRASCIENDE™?</h2>

          <p>
            TRASCIENDE™ es una experiencia premium 1:1 diseñada para elevar tu
            energía, fortalecer tu identidad, potenciar tu imagen y rediseñar la
            forma en la que construyes y habitas tu vida.
          </p>
        </div>

        <div className="QueEsListContainer">
          <p>Cada proceso es:</p>

          <ul>
            <li>Privado</li>
            <li>Exclusivo</li>
            <li>Estratégico</li>
            <li>Profundamente personalizado</li>
          </ul>
        </div>
        <div className="QueEsParagraphContainer">
          <p>
            No trabajamos desde la perfección. Trabajamos desde consciencia,
            coherencia y transformación real.
          </p>
          <p>
            Porque no puedes crear una nueva realidad desde una identidad que
            sigue viviendo en el pasado.
          </p>
        </div>
        <div className="QueEsbutton">
          <SmallButton caption="Quiero Trascender" link="https://calendly.com/bellezadelseroficial/expeciende" />
        </div>
      </VariableContentSection>
    </>
  );
}

export default QueEsTrasciendeSection;
