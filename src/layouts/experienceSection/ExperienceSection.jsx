import React from "react";
import "./experienceSection.css";
import IconLeftAlignedParagraph from "../../components/IconLeftAlignedParagraph/IconLeftAlignedParagraph";
import FirstButton from "../../components/firstButton/FirstButton";
import hand from "../../assets/images/experience.png";
import logo from "../../assets/images/withe-logo.png";
import video1 from "../../assets/videos/trasciende2.mp4";
function ExperienceSection() {
  return (
    <section className="experienceSection">
      <div className="experienceContent">
        <div className="experiencePick">
          {/* <img src={hand} alt="manos en el pecho" className="photo" /> */}
          <video
            className="video-card"
            controls
            preload="metadata"
            controlsList="nodownload"
          >
            <source src={video1} type="video/mp4" />
          </video>
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
              subTtitle="Experiencia Trasciende"
              paragraphs={[
                "No naciste para conformarte. Naciste para expandirte.",
                "Hay una versión de ti más libre, más abundante y más poderosa esperando que recuerdes quién eres realmente.",
                "Descubre las claves para trascender tus límites, transformar tu identidad y convertirte en la persona capaz de crear una vida que realmente ames vivir.",
              ]}
            />
          </div>
          <div className="experienceButton">
            <FirstButton caption={"Quiero Saber Más"} link={"/trasciende"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
