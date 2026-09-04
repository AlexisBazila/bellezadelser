import React from "react";
import "./heroAcademia.css";
import FirstButton from "../../components/firstButton/FirstButton";

function HeroAcademia() {
  return (
    <section className="heroAcademia">
      <div className="overlayAcademia">
        <div className="contentAcademiaHero">
          <div className="paragraphHero">
            <div className="titleAndSubtitleAcademia">
              <h1 className="Academiatitle">Academia Belleza del Ser</h1>
              <h2 className="h2Border">
                El espacio donde comienza la transformación que va a cambiar tu
                vida
              </h2>
              <h2>
                Sana tu Energía, Reconstruye tu Vida y Despierta tu Poder
                Interior.
              </h2>
            </div>
            <a href="#CursosAcademiaSection" className="AcademiaButton">
              Quiero Comenzar Mi Transformación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroAcademia;
