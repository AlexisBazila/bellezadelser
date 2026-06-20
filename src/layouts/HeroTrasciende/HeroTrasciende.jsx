import React from "react";
import "./heroTrasciende.css";
import FirstButton from "../../components/firstButton/FirstButton";

function HeroTrasciende() {
  return (
    <section className="heroTrasciende">
      <div className="overlayTrasciende">
        <div className="contentHero">
          <div className="paragraphHero">
            <div className="titleAndSubtitleTrasciende">
              <h1 className="title">Trasciende™</h1>
              <h2>
                Eleva tu energía. Potencia tu imagen. Diseña y manifiesta una
                vida que ames.
              </h2>
              <h2>
                Una experiencia premium 1:1 para liberar bloqueos, recuperar tu
                poder personal y transformar tu realidad.
              </h2>
              <h2>Basada en el Método Arquitectura del Ser™</h2>
            </div>
            <FirstButton
              caption="Reservar Mi Plaza"
              link="https://calendly.com/bellezadelseroficial/expeciende"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroTrasciende;
