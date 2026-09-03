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
                SANA TU ENERGÍA. RECONSTRUYE TU VIDA. VUELVE A TI.
              </h1>
              {/* <h2>
                Cuando liberas la raíz invisible de tus bloqueos, todo comienza
                a moverse fuera. Te acompaño a dar ese paso.
              </h2> */}
            </div>
            <FirstButton
              caption="Quiero Trabajar en Mi"
              link={"#sessionSection"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
