import React, { useState } from "react";
import "./sessionSection.css";
import SessionCard from "../../components/SessionCard/SessionCard";

import sesionReiki from "../../assets/images/sesionReiki.png";
import sesionRegistros from "../../assets/images/sesionRegistros.png";
import sesionAcompañamiento from "../../assets/images/sesionAcompañamiento.png";
import sesionBloqueos from "../../assets/images/sesionBloqueos.png";
import sesionChakras from "../../assets/images/sesionChakras.png";
import sesionEstres from "../../assets/images/sesionEstres.png";
import sesionLimpiezaEspacios from "../../assets/images/sesionLimpiezaEspacios.png";
import sesionMascotas from "../../assets/images/sesionMascotas.png";
import sesionOncologico from "../../assets/images/sesionOncologico.png";
import sesionUtero from "../../assets/images/sesionUtero.png";
import sesionAbundancia from "../../assets/images/sesionAbundancia.png";
import sesionBelleza from "../../assets/images/sesionBelleza.png";

// 🔹 Ejemplo
import extra1 from "../../assets/images/sesionReiki.png";

function SessionSection() {
  const [showMore, setShowMore] = useState(false);

  const sessions = [
    {
      image: sesionReiki,
      title: "Reiki Usui",
      description:
        "Equilibra tu energía, libera bloqueos y recupera la armonía interior a través de la sanación con Reiki.",
      link: "/sesiones/reiki#sessionCalendar",
    },
    {
      image: sesionRegistros,
      title: "Registros Akáshicos",
      description:
        "Conecta con la sabiduría de tu alma, recibe claridad y guía para tu camino personal y espiritual.",
      link: "/sesiones/registros-akashicos#sessionCalendar",
    },
    {
      image: sesionAcompañamiento,
      title: "Acompañamiento Holístico",
      description:
        "Descubre tu potencial, supera obstáculos y avanza con foco hacia la vida que querés crear.",
      link: "/sesiones/acompañamiento#sessionCalendar",
    },
    // Revisar antes de lanzar
    {
      image: sesionAbundancia,
      title: "Activacion de Abundancia y Apertura de Caminos",
      // description:
      //   "Descripción corta para sesiones nuevas en sección de cards de sesiones",
      link: "/otras-sanaciones/activacion#sessionCalendar",
    },
    {
      image: sesionBloqueos,
      title: "Sanación de Bloqueos en el Amor",
      // description:
      //   "Descripción corta para sesiones nuevas en sección de cards de sesiones",
      link: "/otras-sanaciones/bloqueos#sessionCalendar",
    },
    {
      image: sesionUtero,
      title: "Sanación de Útero",
      description: "Reconecta con tu energía femenina",
      link: "/otras-sanaciones/sanacion-de-utero#sessionCalendar",
    },
    {
      image: sesionEstres,
      title: "Sanación para el Estrés y la Ansiedad Consciente",
      // description:
      //   "Descripción corta para sesiones nuevas en sección de cards de sesiones",
      link: "/otras-sanaciones/sanacion-estres#sessionCalendar",
    },
    {
      image: sesionChakras,
      title: "Limpieza y Alineación de chakras",
      // description:
      //   "Descripción corta para sesiones nuevas en sección de cards de sesiones",
      link: "/otras-sanaciones/chakras#sessionCalendar",
    },
    {
      image: sesionLimpiezaEspacios,
      title: "Limpieza Energética de Espacios",
      // description:
      //   "Descripción corta para sesiones nuevas en sección de cards de sesiones",
      link: "/otras-sanaciones/limpieza-de-espacios#sessionCalendar",
    },
    {
      image: sesionMascotas,
      title: "Reiki para Mascotas",
      // description:
      //   "Descripción corta para sesiones nuevas en sección de cards de sesiones",
      link: "/otras-sanaciones/reiki-para-mascotas#sessionCalendar",
    },
    {
      image: sesionOncologico,
      title: "Reiki Oncológico",
      // description:
      //   "Descripción corta para sesiones nuevas en sección de cards de sesiones",
      link: "/otras-sanaciones/reiki-oncologico#sessionCalendar",
    },
    {
      image: sesionBelleza,
      title: "Ritual de Belleza Holística",
      // description:
      //   "Descripción corta para sesiones nuevas en sección de cards de sesiones",
      link: "/belleza-holistica/belleza#sessionCalendar",
    },
  ];

  return (
    <section className="sessionSection" id="sessionSection">
      <div className="titleSession">
        <h2 className="titleSection">Agenda tu Sesión</h2>
      </div>

      <div className={`cardSession ${showMore ? "expanded" : ""}`}>
        {sessions.map((session, index) => (
          <SessionCard
            key={index}
            image={session.image}
            title={session.title}
            description={session.description}
            link={session.link}
          />
        ))}
      </div>

      <div className="showMoreContainer">
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </section>
  );
}

export default SessionSection;
