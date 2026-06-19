import React from "react";
import VariableContentSection from "../../components/VariableContentSection/VariableContentSection";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import SmallButton from "../../components/smallButton/SmallButton";
import "./ExperimentarTrasciendeSection.css";

function ExperimetarTrasciendeSection() {
  return (
    <div className="ExperimentarTrasciendeSection">
      <VariableContentSection quote="Importante: Cada proceso es único. Y los resultados también dependen del compromiso, apertura y trabajo personal de cada participante.">
        <div className="EsParatiSiParagraphContainer">
          <h2>Lo que podrías experimentar dentro de TRASCIENDE™</h2>
        </div>

        <div className="EsParatiSiListContainer">
          <ul>
            <li>Sentirte más seguro/a, alineado/a y en paz contigo.</li>
            <li>
              Recuperar claridad mental, dirección y una sensación más profunda
              de propósito personal.
            </li>
            <li>
              Elevar tu energía y dejar de vivir desde el agotamiento, la
              autoexigencia o la desconexión interna.
            </li>
            <li>
              Fortalecer tu autoestima y comenzar a relacionarte contigo desde
              más amor, merecimiento y confianza.
            </li>
            <li>
              Proyectarte con mayor autenticidad, presencia y coherencia
              personal.
            </li>
            <li>
              Reconectar con una versión más auténtica, segura y alineada de ti.
            </li>
            <li>
              Tomar decisiones más alineadas con la vida que verdaderamente
              deseas construir.
            </li>
            <li>
              Liberarte de patrones, bloqueos o dinámicas que limitaban tu
              bienestar, tus relaciones o tu crecimiento personal.
            </li>
            <li>
              Sentir mayor coherencia entre tu energía, identidad, imagen y la
              realidad que deseas sostener.
            </li>
            <li>
              Construir hábitos, vínculos y una forma de vivir más conscientes,
              alineados y sostenibles.
            </li>
            <li>
              Aprender a recibir más bienestar, abundancia, amor y expansión
              desde una identidad más sólida y alineada.
            </li>
            <li>
              Dejar de sobrevivir emocionalmente… y comenzar a construir una
              vida que realmente se sienta tuya.
            </li>
            <li>
              Experimentar una sensación más profunda de conexión contigo,
              claridad interna y expansión personal.
            </li>
            <li>
              Y comenzar a convertirte en la persona capaz de sostener la vida
              que realmente deseas vivir.
            </li>
          </ul>
        </div>
      </VariableContentSection>
      <div className="ExperimetnarTrasciendeButton">
        <SmallButton caption="Lo Quiero Ya!" link="https://calendly.com/bellezadelseroficial/expeciende" />
      </div>
    </div>
  );
}

export default ExperimetarTrasciendeSection;
