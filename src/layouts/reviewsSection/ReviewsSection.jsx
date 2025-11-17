import React, { useState, useEffect } from "react";
import "./reviewsSection.css";
import LabelReviews from "../../components/labelReviews/LabelReviews";

function ReviewsSection() {
  const reviews = [
    {
      name: "Florencia C.",
      review:
        "Guaaau tal cual lo decís, dolor de espalda alta, y el estómago vivía quejándome. Me siento tranquila con mucho sueño y alivio en mi cuerpo. Gracias!",
    },
    {
      name: "Alicia S.",
      review:
        "Hola Naty querida! La verdad, me veo en todo lo que dice. Voy a empezar con las afirmaciones y sugerencias que me mandaste. Muchas muchas gracias.",
    },
    {
      name: "Paula G.",
      review:
        "Ufff y el dolor en el pecho infaltable cada día... Muchas gracias Naty... siempre que te leo o te escucho sale el llanto. Agradecida de haber llegado a vos 🙌🏻",
    },
    {
      name: "Daiana A.",
      review:
        "También me resonó mucho la limpieza y alineación de chakras liberaste tensión en el pecho y plexo solar. SI LO SENTÍ ",
    },
    {
      name: "Liliana H.",
      review:
        "Resuena absolutamente todo, hace semanas vengo con malestar justo en la boca del estómago. Con todo lo que me decís, todo cobra sentido!",
    },
    {
      name: "Alma R.",
      review:
        "Ayer vi un video tuyo por primera vez y fuiste mi salvación. Tenía un dolor de cabeza y al verlo me aliviaste 🙌🏻",
    },
    {
      name: "Brenda A.",
      review:
        "No tengo palabras para describir la sensación de paz y de luz que emana de mí. Siento que me he quitado un peso de encima. Agradecimiento contigo!",
    },
    {
      name: "Marta G.",
      review:
        "Hola Naty, es increíble todo lo que me decís, realmente soy yo así tal cual me describiste. Me siento totalmente agradecida.",
    },
    {
      name: "Gabriel O.",
      review:
        "Ese nudo que tú dices, es un nudo de tristeza y decepción. Es increíble de verdad el efecto, estoy muy agradecido!",
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

  const maxIndex = Math.max(0, reviews.length - cardsPerView);

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
    width: `${(reviews.length * 100) / cardsPerView}%`,
    transform: `translateX(-${(index * 100) / reviews.length}%)`,
  };

  const slideStyle = {
    width: `${100 / reviews.length}%`,
  };

  return (
    <section className="reviewsSection">
      <h2 className="ReviewTitleSection">
        Lo que dicen quienes ya vivieron esta experiencia
      </h2>

      <div className="carouselContainer">
        <div className="carousel">
          <div className="slidesWrapper" style={slidesWrapperStyle}>
            {reviews.map((r, i) => (
              <div key={i} className="slide" style={slideStyle}>
                <LabelReviews name={r.name} review={r.review} />
              </div>
            ))}
          </div>
        </div>

        <div className="controls">
          <button className="arrowBottom" onClick={prev} aria-label="Anterior">
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

          <button className="arrowBottom" onClick={next} aria-label="Siguiente">
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
