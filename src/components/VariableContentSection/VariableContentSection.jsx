import React from "react";
import "./VariableContentSection.css";

function VariableContentSection({
  children,
  image,
  imageAlt = "",
  imagePosition = "right",
  backgroundImage,
  quote,
  className = "",
  contentClassName = "",
  imageClassName = "",
}) {
  const sectionStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
      }
    : {};

  return (
    <section
      className={`VariableContentSection ${className}`}
      style={sectionStyle}
    >
      <div
        className={`VariableContentSectionContent ${
          imagePosition === "left"
            ? "VariableContentSectionReverse"
            : ""
        }`}
      >
        <div
          className={`VariableContentSectionText ${contentClassName}`}
        >
          {children}
        </div>

        {image && (
          <div className="VariableContentSectionImageContainer">
            <div className="VariableContentSectionImage">
              <img
                src={image}
                alt={imageAlt}
                className={imageClassName}
              />
            </div>

            {quote && (
              <blockquote className="VariableContentSectionQuote">
                {quote}
              </blockquote>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default VariableContentSection;
