import React, { useEffect, useRef, useState } from "react";
import "./ContentSection.css";
import i from "../../assets/images/fondo.png";

function ContentSection({
  title,
  content = [],
  background = "light",
  image,
  imagePosition = "bottom",
}) {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const [contentVisible, setContentVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target === contentRef.current) {
            setContentVisible(true);
          }
          if (entry.target === imageRef.current) {
            setImageVisible(true);
          }
        }
      },
      { threshold: 0.2 },
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`content-section ${background}`}>
      {/* Imagen arriba */}
      {image && imagePosition === "top" && (
        <div
          ref={imageRef}
          className={`content-image ${imageVisible ? "visible" : ""}`}
        >
          <img src={image} alt={title} />
        </div>
      )}

      {/* Contenido */}
      <div
        ref={contentRef}
        className={`content-container ${contentVisible ? "visible" : ""}`}
      >
        <h2 className="content-title">{title}</h2>

        <div className="content-text">
          {content.map((item, index) => {
            // string normal
            if (typeof item === "string") {
              return <p key={index}>{item}</p>;
            }

            // párrafo con partes en negrita
            if (item.type === "paragraph") {
              return (
                <p key={index}>
                  {item.content.map((part, i) =>
                    typeof part === "string" ? (
                      part
                    ) : (
                      <strong key={i}>{part.bold}</strong>
                    ),
                  )}
                </p>
              );
            }

            // párrafo completo en negrita
            if (item.type === "bold") {
              return (
                <p key={index}>
                  <strong>{item.text}</strong>
                </p>
              );
            }

            // lista (lo que ya hiciste)
            if (item.type === "list") {
              return (
                <ul key={index} className="content-list">
                  {item.items.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </div>
      </div>

      {/* Imagen abajo */}
      {image && imagePosition === "bottom" && (
        <div
          ref={imageRef}
          className={`content-image ${imageVisible ? "visible" : ""}`}
        >
          <img src={image} alt={title} />
        </div>
      )}
    </section>
  );
}

export default ContentSection;
