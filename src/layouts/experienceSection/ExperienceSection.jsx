import React from "react";
import "./experienceSection.css";
import IconLeftAlignedParagraph from "../../components/IconLeftAlignedParagraph/IconLeftAlignedParagraph";
import FirstButton from "../../components/firstButton/FirstButton";
import hand from "../../assets/images/experience.png";
import logo from "../../assets/images/withe-logo.png";
function ExperienceSection() {
  return (
    <section className="experienceSection">
      <div className="experienceContent">
        <div className="experiencePick">
          <img src={hand} alt="manos en el pecho" className="photo" />
          <div className="experienceButtonMovil">
            <FirstButton
              caption={"Activar Mi Bienestar"}
              link={"/Armonizaciones/activaciones"}
            />
          </div>
        </div>
        <div className="experienceTexts">
          <div className="paragraphTexts">
            <IconLeftAlignedParagraph
              logo={logo}
              subTtitle="Activaciones Energéticas"
              paragraphs={[
                "Activaciones energéticas guiadas para liberar tensiones, calmar tu mente y reequilibrar tu energía en el momento en que lo necesites.",
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
