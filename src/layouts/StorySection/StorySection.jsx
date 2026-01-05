import React from "react";
import "./storySection.css";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import storyImage from "../../assets/images/natyStory.png";
function StorySection() {
  return (
    <section className="storySection">
      <div className="storyContent">
        <div className="storyPharagraph">
          <LeftAlignedParagraph
            subTtitle="Mi historia"
            paragraphs={[
              "Hace años comencé a explorar distintas técnicas de sanación buscando respuestas para mí misma. Ese recorrido me transformó profundamente y me inspiró a compartirlo con otros. Hoy acompaño a quienes buscan equilibrio y bienestar desde un enfoque amoroso y consciente.",
            ]}
          />
        </div>
        <div className="storyImage">
          <img src={storyImage} alt="Mujer con vestido blanco en el bosque" />
        </div>
      </div>
    </section>
  );
}

export default StorySection;
