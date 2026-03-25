import React, { useEffect, useRef, useState } from "react";
import "./ContentSection.css";

function ContentSection({
  title,
  content = [],
  background = "light",
  image,
  imagePosition = "bottom",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section className={`content-section ${background}`} ref={ref}>
      {/* Imagen arriba */}
      {image && imagePosition === "top" && (
        <div className={`content-image ${visible ? "visible" : ""}`}>
          <img src={image} alt={title} />
        </div>
      )}

      {/* Contenido */}
      <div className={`content-container ${visible ? "visible" : ""}`}>
        <h2 className="content-title">{title}</h2>

        <div className="content-text">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Imagen abajo */}
      {image && imagePosition === "bottom" && (
        <div className={`content-image ${visible ? "visible" : ""}`}>
          <img src={image} alt={title} />
        </div>
      )}
    </section>
  );
}

export default ContentSection;
