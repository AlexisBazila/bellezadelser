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
      caption: "Agenda Tu Sesión",
    },
    {
      image: sesionRegistros,
      title: "Registros Akáshicos",
      description:
        "Conecta con la sabiduría de tu alma, recibe claridad y guía para tu camino personal y espiritual.",
      link: "/sesiones/registros-akashicos#sessionCalendar",
      caption: "Agenda Tu Sesión",
    },
    {
      image: sesionAcompañamiento,
      title: "Acompañamiento Holístico",
      description:
        "Descubre tu potencial, supera obstáculos y avanza con foco hacia la vida que quieres crear.",
      link: "/sesiones/acompañamiento#sessionCalendar",
      caption: "Agenda Tu Sesión",
    },
    // Revisar antes de lanzar
    {
      image: sesionAbundancia,
      title: "Abundancia y Apertura de Caminos",
      description:
        "Armoniza tu energía, libera bloqueos y favorece la apertura de caminos.",
      link: "/otras-sanaciones/activacion#sessionCalendar",
      caption: "Agenda Tu Sesión",
    },
    {
      image: sesionBloqueos,
      title: "Sanación de Bloqueos en el Amor",
      description:
        "Libera bloqueos en el amor, sana tu energía y permite que todo fluya.",
      link: "/otras-sanaciones/bloqueos#sessionCalendar",
      caption: "Agenda Tu Sesión",
    },
    {
      image: sesionUtero,
      title: "Sanación de Útero",
      description:
        "Libera bloqueos en tu útero, sana tu energía y reconecta con tu poder femenino.",
      link: "/otras-sanaciones/sanacion-de-utero#sessionCalendar",
      caption: "Agenda Tu Sesión",
    },
    {
      image: sesionEstres,
      title: "Sanación para el Estrés y la Ansiedad",
      description:
        "Relaja tu cuerpo, aquieta tu mente y restablece tu energía.",
      link: "/otras-sanaciones/sanacion-estres#sessionCalendar",
      caption: "Agenda Tu Sesión",
    },
    {
      image: sesionChakras,
      title: "Limpieza y Alineación de chakras",
      description:
        "Limpia y alinea tus chakras, liberando bloqueos y elevando tu energía.",
      link: "/otras-sanaciones/chakras#sessionCalendar",
      caption: "Agenda Tu Sesión",
    },
    {
      image: sesionLimpiezaEspacios,
      title: "Limpieza Energética de Espacios",
      description:
        "Limpia la energía de tus espacios, libera cargas y restablece la armonía.",
      link: "/otras-sanaciones/limpieza-de-espacios#sessionCalendar",
      caption: "Agenda Tu Sesión",
    },
    {
      image: sesionMascotas,
      title: "Reiki para Mascotas",
      description:
        "Armoniza la energía de tu mascota, reduce el estrés y favorece su bienestar.",
      link: "/otras-sanaciones/reiki-para-mascotas#sessionCalendar",
      caption: "Agenda Tu Sesión",
    },
    {
      image: sesionOncologico,
      title: "Reiki Oncológico",
      description:
        "Acompaña tu proceso, armoniza tu energía y brinda calma y bienestar.",
      link: "/otras-sanaciones/reiki-oncologico#sessionCalendar",
      caption: "Agenda Tu Sesión",
    },
    {
      image: sesionBelleza,
      title: "Ritual de Belleza Holística",
      description:
        "Nutre tu piel, armoniza tu energía y realza tu belleza natural.",
      link: "/belleza-holistica/belleza#sessionCalendar",
      caption: "Agenda Tu Sesión",
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
            caption={session.caption}
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
