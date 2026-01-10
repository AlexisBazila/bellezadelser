import React from "react";
import "./missionSection.css";

import SmallButton from "../../components/smallButton/SmallButton";

import myself from "../../assets/images/natyHome.jpg";

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
            Terapeuta Energética & Guía Espiritual, experta en Sanación
            Energética, Emocional y Espiritual, con muchos años de experiencia.
            Mi propósito es ayudarte a reconectar tu energía, tu esencia y
            activar tu poder interior.
          </p>
          <SmallButton caption="Saber Más" link={"/sobre-mi"} />
        </div>
      </div>
      <div className="photoParagraph">
        <div className="pharagraphBox">
          <p>
            Aquí empieza el cambio que buscabas. En cada propuesta vas a
            encontrar un camino claro para transformar tu vida, con contenidos
            prácticos y fáciles de aplicar, para avanzar a tu ritmo y lograr
            resultados reales.
          </p>
        </div>

        <img src={myself} alt="" className="missionPhoto" />
      </div>
      <div className="MyselfParagraphMovil">
        <h4>Naty Batista</h4>
        <p>
          Terapeuta Energética & Guía Espiritual, experta en Sanación
          Energética, Emocional y Espiritual, con muchos años de experiencia. Mi
          propósito es ayudarte a reconectar tu energía, tu esencia y activar tu
          poder interior.
        </p>
        <div className="boton">
          <SmallButton caption="Saber Más" link={"/sobre-mi"} />
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
