import React from "react";
import "./experienceSection.css";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

function ExperienceSection() {
  return (
    <section className="experienceSection">
      <div className="experienceContent">
        <div className="experiencePick">
          <div className="Photo">Photo</div>
        </div>
        <div className="experienceTexts">
          <LeftAlignedParagraph
            subTtitle="Lo que vas a experimetar en este camino"
            paragraphs={[
              "• Aprendé a equilibrar tu energía y gestionar tus emociones.",
              "• Conectá con herramientas espirituales prácticas para tu día a día.",
              "• Descubrí un camino de autoconocimiento y transformación.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
