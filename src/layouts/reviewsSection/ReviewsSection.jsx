import React, { useState } from "react";
import "./reviewsSection.css";
import LabelReviews from "../../components/labelReviews/LabelReviews";

function ReviewsSection() {
  const reviews = [
    {
      name: "Valeria A.",
      review:
        "Hola Naty, desde que empecé a leer no paro de llorar. Todo lo que me escribiste tiene sentido y verdad ✨",
    },
    {
      name: "Eugenia F.",
      review:
        "Desde ya muchas gracias, hoy no me podía despertar, era como si por fin pude dormir 😌 Me siento más liviana y todo lo que me dijiste me resonó!",
    },
    {
      name: "Carla P.",
      review:
        "Ay tengo la piel de gallina. Más preciso no puede ser. Ayer hice tu meditación y dormí como hace mucho no dormía 🙌🏻",
    },
    {
      name: "Nombre A",
      review: "Otro testimonio más para extender el carrusel ✨",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="reviewsSection">
      <h2 className="titleSection">
        Lo que dicen quienes ya vivieron esta experiencia
      </h2>

      <div className="carouselContainer">
        <button className="arrow left" onClick={prev}>
          ←
        </button>

        <div className="carousel">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="slide"
              style={{
                transform: `translateX(${-index * 100}%)`,
              }}
            >
              <LabelReviews name={r.name} review={r.review} />
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={next}>
          →
        </button>
      </div>

      <div className="dots">
        {reviews.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default ReviewsSection;
