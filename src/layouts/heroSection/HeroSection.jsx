import React from "react";
import "./heroSection.css";
import FirstButton from "../../components/firstButton/FirstButton";

function HeroSection() {
  return (
    <section className="heroSection">
      <div className="overlay">
        <div className="contentHero">
          <div className="paragraphHero">
            <div className="titleAndSubtitleHero">
              <h1 className="title">
                Transformá tu energía, <br />{" "}
                <strong>transformá tu vida.</strong>
              </h1>
              <h2>
                Formaciones y prácticas energéticas para tu bienestar interior y
                exterior.
              </h2>
            </div>
            <FirstButton caption="Quiero Conectar" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
