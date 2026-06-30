import React from "react";
import "./ContentSection.css";

function ContentSection({
  title,
  content = [],
  background = "light",
  image,
  imagePosition = "bottom",
}) {
  return (
    <section className={`content-section ${background}`}>
      {/* Imagen arriba */}
      {image && imagePosition === "top" && (
        <div className="content-image">
          <img src={image} alt={title} />
        </div>
      )}

      {/* Contenido */}
      <div className="content-container">
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

            // lista
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
        <div className="content-image">
          <img src={image} alt={title} />
        </div>
      )}
    </section>
  );
}

export default ContentSection;
