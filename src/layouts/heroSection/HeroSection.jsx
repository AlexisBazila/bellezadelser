import React from "react";
import "./heroSection.css";
import FirstButton from "../../components/firstButton/FirstButton";

function HeroSection() {
  return (
    <section className="heroSection">
      <div className="contentHero">
        <div className="paragraphHero">
          <div className="titleAndSubtitleHero">
            <h1>
              Transformá tu energía, <br /> <strong>transformá tu vida.</strong>
            </h1>
            <h2>
              Cursos online de Reiki, Registros Akáshicos y Coaching Espiritual.
            </h2>
          </div>
          <FirstButton caption="Quiero Aprender" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
