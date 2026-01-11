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
              subTtitle="Activaciones de bienestar"
              paragraphs={[
                "Mini sesiones de Reiki y sanación en menos de 10 minutos. Cada cápsula está diseñada para ayudarte a soltar tensiones, calmar la mente, activar  y equilibrar tu energía, donde y cuando lo necesites.",
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
