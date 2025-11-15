import React from "react";
import "./heroArmonizaciones.css";
import FirstButton from "../../components/firstButton/FirstButton";
function HeroArmonizaciones() {
  return (
    <section className="heroSectionArmonizaciones">
      <div className="lightHero">
        <div className="contentHeroArmonizaciones">
          <div className="paragraphHeroArmonizaciones">
            <div className="titleAndSubtitleHeroArmonizaciones">
              <h1 className="title">Armonizá tu energía</h1>
              <h2>
                Sesiones que elevan tu vibración y restablecen tu equilibrio
                interior.
              </h2>
            </div>
            <FirstButton caption="Activar Mi Bienestar" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroArmonizaciones;
