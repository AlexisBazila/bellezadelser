import React from "react";
import "./reviewsSection.css";
function ReviewsSection() {
  return (
    <section className="reviewsSection">
      <div>
        <h2 className="titleSection">
          Lo que dicen quienes ya vivieron esta experiencia
        </h2>
      </div>
      <div className="reviews">
        <div className="review">
          <h4>Nombre A.</h4>{" "}
          <p>
            “El curso de Reiki me ayudó a encontrar calma en momentos de mucho
            estrés. Las prácticas fueron simples de aplicar y sentí un cambio
            real en mi energía.”
          </p>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
