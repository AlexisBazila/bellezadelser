import React from "react";
import "./experienceSection.css";
import IconLeftAlignedParagraph from "../../components/IconLeftAlignedParagraph/IconLeftAlignedParagraph";
import FirstButton from "../../components/firstButton/FirstButton";
import hand from "../../assets/images/handExperience.png";
import logo from "../../assets/images/withe-logo.png";
function ExperienceSection() {
  return (
    <section className="experienceSection">
      <div className="experienceContent">
        <div className="experiencePick">
          <img src={hand} alt="" className="photo" />
          <div className="experienceButtonMovil">
            <FirstButton caption={"Activar Mi Bienestar"} />
          </div>
        </div>
        <div className="experienceTexts">
          <div className="paragraphTexts">
            <IconLeftAlignedParagraph
              logo={logo}
              subTtitle="Activaciones de bienestar"
              paragraphs={[
                "Mini sesiones prácticas que podés hacer en cualquier momento para recuperar equilibrio, liberar tensiones y conectar con tu propósito.",
              ]}
            />
          </div>
          <div className="experienceButton">
            <FirstButton
              caption={"Activar Mi Bienestar"}
              link={"/Armonizaciones/activaciones"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
