import React, { useState, useEffect } from "react";
import "./reviewsSection.css";
import LabelReviews from "../../components/labelReviews/LabelReviews";
import review1 from "../../assets/images/review1.svg";
import review2 from "../../assets/images/review2.svg";
import review3 from "../../assets/images/review3.svg";
import review4 from "../../assets/images/review4.svg";
import review5 from "../../assets/images/review5.svg";
import review6 from "../../assets/images/review6.svg";
import review7 from "../../assets/images/review7.svg";
import review8 from "../../assets/images/review8.svg";
import review9 from "../../assets/images/review9.svg";

function ReviewsSection() {
  const reviews = [
    {
      alt: "Florencia C.",
      image: review1,
    },
    {
      alt: "Alicia S.",
      image: review2,
    },
    {
      alt: "Paula G.",
      image: review3,
    },
    {
      alt: "Daiana A.",
      image: review4,
    },
    {
      alt: "Liliana H.",
      image: review5,
    },
    {
      alt: "Alma R.",
      image: review6,
    },
    {
      alt: "Brenda A.",
      image: review7,
    },
    {
      alt: "Marta G.",
      image: review8,
    },
    {
      alt: "Gabriel O.",
      image: review9,
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
                <LabelReviews image={r.image} alt={r.alt} />
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
