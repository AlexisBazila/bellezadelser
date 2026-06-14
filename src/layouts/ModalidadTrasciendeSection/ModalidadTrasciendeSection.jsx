import React from "react";
import "./ModalidadTrasciendeSection.css";

import Calendario from "../../assets/icons/Calendario.svg";
import Online from "../../assets/icons/Online.svg";
import Check from "../../assets/icons/Check.svg";

function ModalidadTrasciendeSection() {
  return (
    <section className="ModalidadTrasciendeSection">
      <div className="ModalidadTrasciendeContainer">
        {/* Columna izquierda */}
        <div className="ModalidadTrasciendeInfo">
          <h2>Duración & Modalidad</h2>

          <div className="ModalidadItem">
            <div className="ModalidadIcon">
              <img src={Calendario} alt="Calendario" />
            </div>

            <div>
              <h3>6 semanas + 2 semanas</h3>
              <p>de integración personalizada</p>
            </div>
          </div>

          <div className="ModalidadItem">
            <div className="ModalidadIcon">
              <img src={Online} alt="Modalidad online" />
            </div>

            <div>
              <h3>100% online</h3>
              <p>acompañamiento privado 1:1</p>
            </div>
          </div>

          <ul className="ModalidadBeneficios">
            <li>
              <img src={Check} alt="" />
              <span>6 encuentros privados de 90 minutos</span>
            </li>

            <li>
              <img src={Check} alt="" />
              <span>Soporte VIP durante todo el proceso</span>
            </li>

            <li>
              <img src={Check} alt="" />
              <span>Recursos exclusivos</span>
            </li>
          </ul>
        </div>

        {/* Columna derecha */}
        <div className="ModalidadCard">
          <blockquote>
            "Acceso limitado. TRASCIENDE™ trabaja con cupos reducidos para
            garantizar profundidad, cercanía y una experiencia verdaderamente
            personalizada."
          </blockquote>

          <p className="ModalidadCardText">
            Quizá no necesitas seguir adaptándote a una vida que ya no refleja
            quién eres. Quizá estás listo/a para reconstruirte desde una
            identidad más alineada, consciente y expansiva.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ModalidadTrasciendeSection;
