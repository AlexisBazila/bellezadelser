import React from "react";
import "./heroAcademia.css";
import FirstButton from "../../components/firstButton/FirstButton";
import AcademyLine from "../../assets/images/AcademyLine.png";

function HeroAcademia() {
  return (
    <section className="heroAcademia">
      <div className="overlayAcademia">
        <div className="contentAcademiaHero">
          <div className="paragraphHero">
            <div className="titleAndSubtitleAcademia">
              <h1 className="Academiatitle">ACADEMIA BELLEZA DEL SER</h1>
              <h2 className="h2Border">
                El espacio donde comienza la transformación que va a cambiar tu
                vida
              </h2>
              <img
                src={AcademyLine}
                alt=""
                className="AcademiaDivider"
                aria-hidden="true"
              />
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
