import React from "react";
import "./focusSection.css";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import focusImage from "../../assets/images/natyFocus.png";
function FocusSection() {
  return (
    <section className="focusSection">
      <div className="focusContent">
        <div className="focusImage">
          <img src={focusImage} alt="" />
        </div>
        <div className="focusPharagraph">
          <LeftAlignedParagraph
            subTtitle="Mi enfoque"
            paragraphs={[
              "Combino herramientas como reiki, registros akáshicos, armonizaciones y coaching, adaptándolas a cada persona. Creo en el poder de la energía, la escucha y la conexión para generar cambios reales.",
            ]}
          />
        </div>
      </div>
      <div className="aboutFooter">
        <h2 className="textAboutFooter">
          Si sentís que es momento de transformar tu energía y abrirte a nuevas
          posibilidades, estaré feliz de acompañarte en ese proceso.
        </h2>
        <div className="lineAboutFooter"></div>
      </div>
    </section>
  );
}

export default FocusSection;
