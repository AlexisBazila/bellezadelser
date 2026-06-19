import React from "react";
import "./AgendaTrasciendeSection.css";

import SmallButton from "../../components/smallButton/SmallButton";

import Sol from "../../assets/icons/Sol.svg";
import Diseño from "../../assets/icons/Diseño.svg";
import Transforma from "../../assets/icons/Transforma.svg";

function AgendaTrasciendeSection() {
  return (
    <section className="AgendaTrasciendeSection">
      <div className="AgendaTrasciendeContainer">
        {/* Título */}
        <div className="AgendaTrasciendeHeader">
          <h2>TRASCIENDE™</h2>

          <p className="AgendaTrasciendeSubtitle">
            BASADO EN EL MÉTODO LA ARQUITECTURA DEL SER™
          </p>
        </div>

        {/* Beneficios */}
        <div className="AgendaTrasciendeBenefits">
          <div className="AgendaBenefitItem">
            <img src={Sol} alt="Eleva tu energía" />
            <h3>Eleva tu energía</h3>
          </div>

          <div className="AgendaBenefitItem">
            <img src={Transforma} alt="Transforma tu identidad" />
            <h3>Transforma tu identidad</h3>
          </div>

          <div className="AgendaBenefitItem">
            <img src={Diseño} alt="Diseña y manifiesta una vida que ames" />
            <h3>Diseña y manifiesta una vida que ames</h3>
          </div>
        </div>

        {/* Texto central */}
        <div className="AgendaTrasciendeText">
          <p>
            La versión de ti que deseas ser solo necesita una estructura interna
            capaz de sostenerla. Y estás a una decisión de comenzar a
            construirla.
          </p>
        </div>

        {/* Línea */}
        <div className="AgendaTrasciendeLine"></div>

        {/* Firma */}
        <div className="AgendaTrasciendeAuthor">
          <h3>Natalia Batista</h3>
          <span>FUNDADORA</span>
        </div>

        {/* Botón */}
        <div className="AgendaTrasciendeButton">
          <SmallButton
            caption="Comenzar Mi Transformación"
            link="https://calendly.com/bellezadelseroficial/expeciende"
          />
        </div>

        {/* Nota */}
        <div className="AgendaTrasciendeFooter">
          <p>
            Precio especial Edición Fundadora. Plazas limitadas.
            <br />
            Acompañamiento premium exclusivo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AgendaTrasciendeSection;
