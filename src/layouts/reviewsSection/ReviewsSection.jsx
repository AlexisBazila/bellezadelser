import React from "react";
import "./reviewsSection.css";
import LabelReviews from "../../components/labelReviews/LabelReviews";
function ReviewsSection() {
  return (
    <section className="reviewsSection">
      <div>
        <h2 className="titleSection">
          Lo que dicen quienes ya vivieron esta experiencia
        </h2>
      </div>
      <div className="reviews">
        <LabelReviews
          name={"Nombre A"}
          review={
            "“El curso de Reiki me ayudó a encontrar calma en momentos de mucho estrés. Las prácticas fueron simples de aplicar y sentí un cambio real en mi energía.”"
          }
        />
        <LabelReviews
          name={"Nombre B"}
          review={
            "“La sesión de Reiki fue profundamente sanadora. Sentí una paz interior que hacía mucho no experimentaba y después pude descansar mejor.”"
          }
        />
        <LabelReviews
          name={"Nombre C"}
          review={
            "“Al principio estaba escéptico, pero noté cómo mi cuerpo se relajaba y mi mente se despejaba. Fue una experiencia liberadora.”"
          }
        />
      </div>
    </section>
  );
}

export default ReviewsSection;
