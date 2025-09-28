import React from "react";
import "./sessionsSection.css";
import Card from "../../components/Card/Card";
import photo from "../../assets/images/photoExample.png";
function SessionsSection() {
  return (
    <section className="smallSessons">
      <div className="contentSessions">
        <div>
          <h2 className="titleSection">Mini Sesiones</h2>
        </div>
        <div className="cardsSessions">
          <Card
            image={photo}
            title="Armonización con cristales"
            description="Energía de piedras naturales para equilibrar cuerpo y mente."
          />
          <Card
            image={photo}
            title="Armonización sonora"
            description="Vibraciones de cuencos y sonidos que relajan y armonizan tu interior."
          />
          <Card
            image={photo}
            title="Limpieza energética"
            description="Eliminación de cargas negativas para renovar tu campo energético."
          />
          <Card
            image={photo}
            title="Armonización con cristales"
            description="Energía de piedras naturales para equilibrar cuerpo y mente."
          />
          <Card
            image={photo}
            title="Armonización sonora"
            description="Vibraciones de cuencos y sonidos que relajan y armonizan tu interior."
          />
          <Card
            image={photo}
            title="Limpieza energética"
            description="Eliminación de cargas negativas para renovar tu campo energético."
          />
        </div>
      </div>
    </section>
  );
}

export default SessionsSection;
