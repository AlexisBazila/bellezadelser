import VariableContentSection from "../../components/VariableContentSection/VariableContentSection";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

import fondo from "../../assets/images/fondo.png";
import mapaInicialImg from "../../assets/images/mapaInicialImg.jpg";

import "./MapaInicial.css";
import SmallButton from "../../components/smallButton/SmallButton";

export default function MapaInicial() {
  return (
    <VariableContentSection
      image={mapaInicialImg}
      imagePosition="right"
      quote='"Porque una verdadera transformación requiere profundidad, estrategia y personalización."'
    >
      <div className="MapaTitle">
        <h2>Mapa Inicial del Ser</h2>
        <h4>El punto de partida de tu transformación</h4>
      </div>
      <div className="MapaParagraph">
        <p>
          Antes de comenzar, realizaremos una evaluación profunda y
          personalizada para identificar las áreas que hoy están impactando tu
          energía, bienestar, identidad, imagen y dirección de vida.
        </p>
        <p>
          Este diagnóstico inicial permite diseñar una experiencia completamente
          adaptada a ti.
        </p>
      </div>
      <div className="MapaInicialListContainer">
        <h3 className="MapaInicialListTitle">
          <strong>Exploraremos aspectos como:</strong>
        </h3>

        <ul className="MapaInicialList">
          <li>Energía y bienestar emocional</li>
          <li>Autoestima y autoimagen</li>
          <li>Identidad actual vs. identidad deseada</li>
          <li>Hábitos y coherencia personal</li>
          <li>Imagen y presencia</li>
          <li>Bloqueos internos y patrones limitantes</li>
          <li>Claridad, visión y expansión personal</li>
        </ul>
      </div>

      <div className="Metodobutton">
        <SmallButton caption="Quiero Transformarme" link={"/sobre-mi"} />
      </div>
    </VariableContentSection>
  );
}
