import "./MetodoAcademiaSection.css";

import VariableContentSection from "../../components/VariableContentSection/VariableContentSection";
import SmallButton from "../../components/smallButton/SmallButton";

import PorQueConfiarAcademia from "../../assets/images/PorQueConfiarAcademia.jpg";

function MetodoAcademiaSection() {
  return (
    <VariableContentSection image={PorQueConfiarAcademia} imagePosition="right">
      <div className="MetodoParagraphContainer">
        <h2>¿Por qué confiar en mi método?</h2>
        <p>
          <strong>
            TRANSFORMÉ MI PROPIA VIDA. AHORA TE ACOMPAÑO A TRANSFORMAR LA TUYA.
          </strong>
        </p>
        <p>Soy Naty Batista, Mentora y Guía en Transformación Personal.</p>
      </div>

      <div className="MetodoListContainer">
        <p>
          Durante años recorrí mi propio proceso de reconstrucción, aprendizaje
          y evolución. De esa experiencia nació
          <strong> Arquitectura del Ser</strong>, mi método de transformación
          integral basado en cinco pilares:
        </p>

        <ul>
          <li>Energía Base</li>
          <li>Identidad Consciente</li>
          <li>Imagen y Presencia</li>
          <li>Diseño de Vida y Manifestación</li>
          <li>Integración y Expansión</li>
        </ul>
      </div>
      <VariableContentSection.Quote>
        Un método creado para atravesar lo que te desconectó de ti, recuperar tu
        poder y trascender hacia la vida que amas.
      </VariableContentSection.Quote>
      <div className="Metodobutton">
        <SmallButton caption="Conoce Más Sobre Mi" link="/sobre-mi" />
      </div>
    </VariableContentSection>
  );
}

export default MetodoAcademiaSection;
