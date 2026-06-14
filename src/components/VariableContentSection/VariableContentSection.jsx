import React from "react";
import "./VariableContentSection.css";

function VariableContentSection({
  children,
  image,
  imageAlt = "",
  imagePosition = "right",
  backgroundImage,
  backgroundPosition = "center",
  backgroundOverlay = "rgba(231,236,217,0.88)",
  quote,
  className = "",
  contentClassName = "",
  imageClassName = "",
}) {
  const sectionStyle = backgroundImage
    ? {
        backgroundImage: `
          linear-gradient(
            ${backgroundOverlay},
            ${backgroundOverlay}
          ),
          url(${backgroundImage})
        `,
        backgroundPosition,
      }
    : {};

  return (
    <section
      className={`VariableContentSection ${className}`}
      style={sectionStyle}
    >
      <div
        className={`VariableContentSectionContent ${
          imagePosition === "left" ? "VariableContentSectionReverse" : ""
        }`}
      >
        <div className={`VariableContentSectionText ${contentClassName}`}>
          {children}

          {/* Quote al final del contenido cuando NO hay imagen */}
          {!image && quote && (
            <blockquote className="VariableContentSectionQuote">
              {quote}
            </blockquote>
          )}
        </div>

        {image && (
          <div className="VariableContentSectionImageContainer">
            <div className="VariableContentSectionImage">
              <img src={image} alt={imageAlt} className={imageClassName} />

              {/* Quote debajo de la imagen */}
              {quote && (
                <blockquote className="VariableContentSectionQuote">
                  {quote}
                </blockquote>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default VariableContentSection;
