import React from "react";
import "./missionSection.css";

import SmallButton from "../../components/smallButton/SmallButton";
import myself from "../../assets/images/natyHome.png";

function MissionSection() {
  return (
    <section className="missionSection">
      <div className="MyselfDesktop">
        <div className="firstParagraph">
          <h2>
            Te acompaño a comprender tu energía, liberar bloqueos y reconectar
            con tu verdadero poder.
          </h2>

          <div className="MyselfParagraph">
            <h4>Naty Batista</h4>
            <p>
              Soy Natalia Batista, terapeuta energética y guía en procesos de
              transformación personal.
            </p>

            <p>
              Acompaño a personas que sienten que algo en su vida no termina de
              encajar, que están estancadas o repiten situaciones sin entender
              por qué, a comprender qué está pasando en su interior, a
              reconectar con su poder y a liberar lo que las está bloqueando.
            </p>

            <p>
              Mi trabajo no se queda en lo superficial. Vamos a la raíz de lo
              que estás sosteniendo, para que el cambio no sea momentáneo, sino
              real y sostenido en el tiempo.
            </p>

            <SmallButton caption="Saber Más" link={"/sobre-mi"} />
          </div>
        </div>

        {/* NUEVA ESTRUCTURA PARA IMAGEN + BOX */}
        <div className="photoWrapper">
          <div className="photoContainer">
            <img src={myself} alt="Naty Batista" className="missionPhoto" />

            <div className="pharagraphBox">
              <p>
                Aquí empieza el cambio que buscabas. En cada propuesta vas a
                encontrar un camino claro para transformar tu vida, con
                contenidos prácticos y fáciles de aplicar, para avanzar a tu
                ritmo y lograr resultados reales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
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
