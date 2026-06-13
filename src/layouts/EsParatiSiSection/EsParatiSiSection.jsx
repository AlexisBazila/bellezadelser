import React from "react";
import VariableContentSection from "../../components/VariableContentSection/VariableContentSection";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import SmallButton from "../../components/smallButton/SmallButton";
import fondo from "../../assets/images/FondoGreenRightBottom.png";
import "./EsParatiSiSection.css";

function EsParatiSiSection() {
  return (
    <>
      <VariableContentSection
        backgroundImage={fondo}
        backgroundPosition="right bottom"
        backgroundOverlay="rgba(231,236,217,0.88)"
      >
        <div className="EsParatiSiParagraphContainer">
          <h2>Esta experiencia es para ti si…</h2>
        </div>

        <div className="EsParatiSiListContainer">
          <ul>
            <li>
              Sientes que has evolucionado internamente, pero tu vida actual ya
              no refleja la persona en la que sabes que puedes convertirte.
            </li>
            <li>
              Estás cansado/a de sobrevivir emocionalmente, sostener relaciones,
              hábitos o dinámicas que drenan tu energía y limitan tu expansión.
            </li>
            <li>
              Sabes que no necesitas más información. Necesitas transformación.
            </li>
            <li>
              Sientes que existe una versión más auténtica, segura, alineada y
              expansiva de ti… pero aún hay bloqueos internos que no te permiten
              habitarla por completo.
            </li>
            <li>
              Estás cansado/a de vivir desde la autoexigencia, la desconexión o
              la sensación constante de que nunca es suficiente.
            </li>
            <li>
              Deseas construir una relación más sana contigo, con el amor, el
              bienestar, el merecimiento y la abundancia en todas las áreas de
              tu vida.
            </li>
            <li>
              Comprendes que la realidad que sostienes hoy está profundamente
              conectada con la identidad que habitas.
            </li>
            <li>
              Quieres dejar de adaptarte a una vida que ya no se siente alineada
              contigo… y comenzar a diseñar una que sí lo esté.
            </li>
            <li>
              Deseas verte, sentirte y proyectarte de una forma más coherente
              con quien realmente eres.
            </li>
            <li>
              Quieres fortalecer tu autoestima, tu presencia, tu energía y la
              forma en la que te relacionas contigo y con el mundo.
            </li>
            <li>
              Sabes que la abundancia no comienza solo en lo económico, sino
              también en la energía, el amor propio, las decisiones y la
              capacidad de permitirte recibir más de la vida.
            </li>
            <li>
              Buscas una transformación profunda, estratégica y personalizada
              que trabaje tanto tu mundo interno como la forma en la que
              construyes tu realidad externa.
            </li>
            <li>
              Estás listo/a para dejar atrás versiones de ti que ya no
              representan tu verdadera expansión.
            </li>
            <li>
              Y sobre todo… sientes que ha llegado el momento de trascender la
              identidad que ya no puede sostener la vida que realmente deseas
              vivir.
            </li>
          </ul>
        </div>
        <div className="EsParatiSibutton">
          <SmallButton caption="Es Para Mi" link={"/sobre-mi"} />
        </div>
      </VariableContentSection>
    </>
  );
}

export default EsParatiSiSection;
