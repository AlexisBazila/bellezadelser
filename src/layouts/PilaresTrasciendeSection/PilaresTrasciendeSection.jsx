import React, { useEffect, useState } from "react";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import SmallButton from "../../components/smallButton/SmallButton";
import "./PilaresTrasciendeSection.css";
import LabelPilares from "../../components/LabelPilares/LabelPilares";
import MagiaIcon from "../../assets/icons/Magia.svg";
import EnergiaIcon from "../../assets/icons/Energia.svg";
import IdentidadIcon from "../../assets/icons/Identidad.svg";
import DiseñoIcon from "../../assets/icons/Diseño.svg";
import IntegracionIcon from "../../assets/icons/Integracion.svg";

function PilaresTrasciendeSection() {
  const pilares = [
    {
      icon: EnergiaIcon,
      tag: "PILAR 1",
      title: "Energía Base",
      subtitle: "Todo comienza por la energía que sostienes. ",
      description:
        "Trabajamos bienestar interior, equilibrio energético y regulación emocional para ayudarte a recuperar claridad, vitalidad y coherencia interna.",
    },
    {
      icon: IdentidadIcon,
      tag: "PILAR 2",
      title: "Identidad Consciente",
      subtitle:
        "La vida que construyes siempre está condicionada por la identidad que habitas.",
      description:
        "Profundizamos en autoestima, creencias, autenticidad y seguridad personal para ayudarte a fortalecer una identidad más alineada con quien deseas ser.",
    },
    {
      icon: MagiaIcon,
      tag: "PILAR 3",
      title: "Imagen & Presencia Expandida",
      subtitle: "Tu imagen también comunica energía, identidad y percepción.",
      description:
        "Aprenderás a proyectarte con mayor autenticidad, presencia y coherencia, alineando tu expresión externa con tu evolución interna.",
    },
    {
      icon: DiseñoIcon,
      tag: "PILAR 4",
      title: "Diseño de Vida & Manifestación",
      subtitle:
        "La manifestación no comienza en el deseo. Comienza en la coherencia.",
      description:
        "Trabajamos claridad, decisiones, hábitos y dirección personal para ayudarte a construir una vida más alineada con lo que verdaderamente deseas vivir y sostener.",
    },
    {
      icon: IntegracionIcon,
      tag: "PILAR 5",
      title: "Integración & Expansión",
      subtitle:
        "La transformación real no se mide por un momento de motivación.",
      description:
        "Se mide por la capacidad de sostener una nueva versión de ti en el tiempo. Este pilar busca ayudarte a integrar cambios reales y expandirte desde una identidad más consciente, sólida y alineada.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, pilares.length - cardsPerView);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [cardsPerView, maxIndex]);

  const next = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const slidesWrapperStyle = {
    width: `${(pilares.length * 100) / cardsPerView}%`,
    transform: `translateX(-${(index * 100) / pilares.length}%)`,
  };

  const slideStyle = {
    width: `${100 / pilares.length}%`,
  };

  return (
    <>
      <section className="PilaresTrasciendeSection">
        <div className="PilaresTrasciendeTitle">
          <h2>Los 5 Pilares del Método Arquitectura del Ser™</h2>
        </div>
        <div className="carouselContainer">
          <div className="carousel">
            <div className="slidesWrapper" style={slidesWrapperStyle}>
              {pilares.map((r, i) => (
                <div key={i} className="slide" style={slideStyle}>
                  <LabelPilares
                    icon={r.icon}
                    tag={r.tag}
                    title={r.title}
                    subtitle={r.subtitle}
                    description={r.description}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="controls">
            <button
              className="arrowBottom"
              onClick={prev}
              aria-label="Anterior"
            >
              ←
            </button>

            <div className="dots">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  className={`dot ${index === i ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir a ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="arrowBottom"
              onClick={next}
              aria-label="Siguiente"
            >
              →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default PilaresTrasciendeSection;
