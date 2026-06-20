import VariableContentSection from "../../components/VariableContentSection/VariableContentSection";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

import fondo from "../../assets/images/fondo.png";
import metodoTrasciende from "../../assets/images/metodoTrasciende.jpg";

import "./TrasciendeMetodoSection.css";
import SmallButton from "../../components/smallButton/SmallButton";

function TrasciendeMetodoSection() {
  return (
    <VariableContentSection image={metodoTrasciende} imagePosition="right">
      <div className="MetodoParagraphContainer">
        <h2>El Método Arquitectura del Ser™</h2>
        {/* <p>
          <strong>Un enfoque exclusivo creado por Natalia Batista.</strong>
        </p> */}
        <p>
          La mayoría de las personas intenta cambiar su vida modificando lo que
          hace. Pero la verdadera transformación ocurre cuando transformas quién
          eres. Arquitectura del Ser™ fue creada para ayudarte a liberar
          bloqueos, fortalecer tu identidad y convertirte en la persona capaz de
          sostener la vida, el bienestar, el amor y la abundancia que realmente
          deseas experimentar.
        </p>
      </div>

      <div className="MetodoListContainer">
        <p>
          <strong>Este método integra estratégicamente:</strong>
        </p>

        <ul>
          <li>Energía</li>
          <li>Identidad</li>
          <li>Imagen y Presencia</li>
          <li>Bienestar Integral</li>
          <li>Manifestación consciente</li>
          <li>Expansión personal</li>
        </ul>
      </div>
      <div className="Metodobutton">
        <SmallButton
          caption="Comenzar Mi Transformación"
          link="https://calendly.com/bellezadelseroficial/expeciende"
        />
      </div>
    </VariableContentSection>
  );
}

export default TrasciendeMetodoSection;
