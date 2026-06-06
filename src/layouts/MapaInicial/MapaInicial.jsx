import VariableContentSection from "../../components/VariableContentSection/VariableContentSection";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

import fondo from "../../assets/images/fondo.png";
import mapaInicialImg from "../../assets/images/mapaInicialImg.jpg";

import "./MapaInicial.css";

export default function MapaInicial() {
  return (
    <VariableContentSection
      image={mapaInicialImg}
      imagePosition="right"
      backgroundImage={fondo}
    >
      <LeftAlignedParagraph
        title="Mapa Inicial del Ser"
        subTitle="El punto de partida de tu transformación"
        paragraphs={["Antes de comenzar...", "Este diagnóstico inicial..."]}
      />

      <div className="MapaInicialListContainer">
        <h3 className="MapaInicialListTitle">Exploraremos aspectos como:</h3>

        <ul className="MapaInicialList">
          <li>Energía y bienestar emocional</li>
          <li>Autoestima y autoimagen</li>
          <li>Imagen y presencia</li>
          <li>Hábitos y coherencia personal</li>
        </ul>
      </div>

      <blockquote className="MapaInicialQuote">
        Porque una verdadera transformación requiere profundidad, estrategia y
        personalización.
      </blockquote>
    </VariableContentSection>
  );
}
