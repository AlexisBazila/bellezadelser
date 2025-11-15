import React from "react";
import "./missionSection.css";

import SmallButton from "../../components/smallButton/SmallButton";

import myself from "../../assets/images/natyHome.png";

function MissionSection() {
  return (
    <section className="missionSection">
      <div className="firstParagraph">
        <h2>
          Mi misión es acompañarte en tu camino de sanación y transformación
        </h2>
        <div className="MyselfParagraph">
          <h4>Naty Batista</h4>
          <p>
            Terapeuta holística con años de experiencia en Reiki, Registros
            Akáshicos y Coaching. Mi propósito es ayudarte a reconectar con tu
            energía, tu esencia y tu poder interior.
          </p>
          <SmallButton caption="Saber Más" />
        </div>
      </div>
      <div className="photoParagraph">
        <div className="pharagraphBox">
          <p>
            En cada proceso te acompaño desde la confianza y la calidez. Vas a
            recibir feedback constante, para que midas tus avances y puedas
            resolver tus dudas en todo momento.
          </p>
        </div>

        <img src={myself} alt="" className="missionPhoto" />
      </div>
      <div className="MyselfParagraphMovil">
        <h4>Naty Batista</h4>
        <p>
          Terapeuta holística con años de experiencia en Reiki, Registros
          Akáshicos y Coaching. Mi propósito es ayudarte a reconectar con tu
          energía, tu esencia y tu poder interior.
        </p>
        <div className="boton">
          <SmallButton caption="Saber Más" />
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
