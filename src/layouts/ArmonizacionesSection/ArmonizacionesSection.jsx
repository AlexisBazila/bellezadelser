import React from "react";
import "./ArmonizacionesSection.css";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import ArmonizacionesImage from "../../assets/images/armonizaciones.png";
function ArmonizacionesSection() {
  return (
    <section className="ArmonizacionesSection">
      <div className="ArmonizacionesContent">
        <div className="ArmonizacionesPharagraph">
          <LeftAlignedParagraph
            subTtitle="¿Qué son las armonizaciones?"
            paragraphs={[
              "Pequeños encuentros energéticos que ayudan a liberar bloqueos, recuperar el equilibrio y elevar tu vibración para sentir mayor paz y bienestar en tu día a día.",
            ]}
          />
        </div>
        <div className="ArmonizacionesImage">
          <img src={ArmonizacionesImage} alt="" />
        </div>
      </div>
    </section>
  );
}

export default ArmonizacionesSection;
