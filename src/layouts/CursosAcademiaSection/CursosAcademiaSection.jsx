import React, { useState, useEffect, useRef, useCallback } from "react";
import "./CursosAcademiaSection.css";

import SessionCard from "../../components/SessionCard/SessionCard";

import RecgresoATi from "../../assets/images/RegresoATi.jpg";

// Cuánto "asoma" de la 3ra fila se deja visible antes de difuminar
const PEEK = 40;

function CursosAcademiaSection() {
  const [showMore, setShowMore] = useState(false);
  const [needsToggle, setNeedsToggle] = useState(false);
  const [collapsedHeight, setCollapsedHeight] = useState(null);
  const containerRef = useRef(null);

  const sessions = [
    {
      image: RecgresoATi,
      title: "El Regreso a Ti",
      description:
        "Un proceso de 9 meses para sanar bloqueos, recuperar tu seguridad y reconectar contigo para transformar y disfrutar plenamente de tu vida.",
      link: "https://go.hotmart.com/I106926912N?dp=1",
      caption: "Accede al Curso",
    },
  ];

  // Mide cuántas filas hay realmente (según cómo cayeron las cards con flex-wrap)
  // y calcula la altura exacta de las primeras 2 filas.
  const measureRows = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.children);
    if (cards.length === 0) return;

    const rowTops = [];
    cards.forEach((card) => {
      const top = card.offsetTop;
      if (!rowTops.some((t) => Math.abs(t - top) < 5)) {
        rowTops.push(top);
      }
    });
    rowTops.sort((a, b) => a - b);

    if (rowTops.length > 2) {
      const secondRowTop = rowTops[1];
      const secondRowCards = cards.filter(
        (card) => Math.abs(card.offsetTop - secondRowTop) < 5,
      );
      const secondRowBottom = Math.max(
        ...secondRowCards.map((card) => card.offsetTop + card.offsetHeight),
      );

      setCollapsedHeight(secondRowBottom + PEEK);
      setNeedsToggle(true);
    } else {
      setCollapsedHeight(null);
      setNeedsToggle(false);
    }
  }, []);

  useEffect(() => {
    measureRows();

    window.addEventListener("resize", measureRows);
    return () => window.removeEventListener("resize", measureRows);
  }, [measureRows, sessions.length]);

  const isClipped = needsToggle && !showMore;

  return (
    <section className="CursosAcademiaSection" id="CursosAcademiaSection">
      <div className="titleSession">
        <h2 className="titleSection">Tu camino de transformación</h2>
      </div>

      <div
        ref={containerRef}
        className={`cardSessionAcademia ${needsToggle ? "hasOverflow" : ""} ${showMore ? "expanded" : ""}`}
        style={isClipped ? { maxHeight: `${collapsedHeight}px` } : undefined}
      >
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

      {needsToggle && (
        <div className="showMoreContainer">
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Ver menos" : "Ver más"}
          </button>
        </div>
      )}
    </section>
  );
}

export default CursosAcademiaSection;
