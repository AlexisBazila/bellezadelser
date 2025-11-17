import React from "react";
import "./mySelfSection.css";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

import storyImage from "../../assets/images/natyStory.png";
import focusImage from "../../assets/images/natyFocus.png";
import purposeImage from "../../assets/images/natyPurpose.png";
import movilstoryImage from "../../assets/images/natyStoryMovil.png";
import movilfocusImage from "../../assets/images/natyFocusmovil.png";
import movilpurposeImage from "../../assets/images/natyPurposemovil.png";

function SectionBlock({
  title,
  paragraphs,
  image,
  mobileImage,
  reverse = false,
}) {
  return (
    <div className={`sectionBlock ${reverse ? "reverse" : ""}`}>
      <div className="textContent">
        <LeftAlignedParagraph subTtitle={title} paragraphs={paragraphs} />
      </div>

      <div className="imageContent">
        <picture>
          <source media="(max-width: 1160px)" srcSet={mobileImage} />
          <img src={image} alt={title} />
        </picture>
      </div>
    </div>
  );
}

function MySelfSection() {
  return (
    <section className="myselfSection">
      <div className="sectionWrapper">
        <SectionBlock
          title="Mi historia"
          paragraphs={[
            "Hace años, mientras buscaba respuestas para mí misma y lidiaba con momentos difíciles, comencé a explorar distintas técnicas de sanación.",
            "Cada experiencia me transformó profundamente y me enseñó que todos podemos <strong>reconectar con nuestra energía y bienestar</strong>. Hoy comparto ese aprendizaje para acompañar a otros en su propio camino de transformación.",
          ]}
          image={storyImage}
          mobileImage={movilstoryImage}
        />

        <SectionBlock
          title="Mi enfoque"
          paragraphs={[
            "Mi trabajo combina Reiki, Registros Akáshicos, Coaching Holístico, y técnicas de sanación energética, adaptando cada sesión a las necesidades de cada persona.",
            "<strong>Creo en el poder de la energía</strong>, la escucha consciente y la conexión para generar cambios reales y duraderos.",
          ]}
          image={focusImage}
          mobileImage={movilfocusImage}
          reverse={true}
        />

        <SectionBlock
          title="Mi propósito y forma de trabajar"
          paragraphs={[
            "Lo que me inspira y apasiona es ver cómo cada persona se desbloquea, sana y recupera su energía.",
            "Cada proceso es único, y mi intención es guiarte de manera cercana y práctica para que sientas tu energía, descubras <strong>tu fuerza interna y logres cambios profundos.</strong>",
          ]}
          image={purposeImage}
          mobileImage={movilpurposeImage}
        />
      </div>
    </section>
  );
}

export default MySelfSection;
