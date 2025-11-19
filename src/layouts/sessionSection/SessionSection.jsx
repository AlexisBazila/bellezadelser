import React from "react";
import "./sessionSection.css";
import SessionCard from "../../components/SessionCard/SessionCard";
import photo from "../../assets/images/photoExample.png";
import sesionReiki from "../../assets/images/sesionReiki.png";
import sesionRegistros from "../../assets/images/sesionRegistros.png";
import sessionCoaching from "../../assets/images/sesionCoaching.png";
function SessionSection() {
  return (
    <section className="sessionSection" id="sessionSection">
      <div className="titleSession">
        <h2 className="titleSection">Agenda tu Sesión</h2>
      </div>
      <div className="cardSession">
        <SessionCard
          image={sesionReiki}
          title="Reiki"
          description="Equilibra tu energía, libera bloqueos y recupera la armonía interior a través de la sanación con Reiki."
          link={"/sesiones/reiki#sessionCalendar"}
        />
        <SessionCard
          image={sesionRegistros}
          title="Registros Akáshicos"
          description="Conecta con la sabiduría de tu alma, recibe claridad y guía para tu camino personal y espiritual."
          link={"/sesiones/registros-akashicos#sessionCalendar"}
        />
        <SessionCard
          image={sessionCoaching}
          title="Coaching"
          description="Descubre tu potencial, supera obstáculos y avanza con foco hacia la vida que querés crear."
          link={"/sesiones/coaching#sessionCalendar"}
        />
      </div>
    </section>
  );
}

export default SessionSection;
