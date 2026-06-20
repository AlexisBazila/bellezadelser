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
  quoteItalic = true,
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

  const parseText = (text) => {
    if (!text) return "";

    return text.replace(/bold\[(.*?)\]/g, "<strong>$1</strong>");
  };

  const parsedQuote = parseText(quote);

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

          {!image && quote && (
            <blockquote
              className={`VariableContentSectionQuote ${
                quoteItalic ? "quoteItalic" : ""
              }`}
              dangerouslySetInnerHTML={{ __html: parsedQuote }}
            />
          )}
        </div>

        {image && (
          <div className="VariableContentSectionImageContainer">
            <div className="VariableContentSectionImage">
              <img src={image} alt={imageAlt} className={imageClassName} />

              {quote && (
                <blockquote
                  className={`VariableContentSectionQuote ${
                    quoteItalic ? "quoteItalic" : ""
                  }`}
                  dangerouslySetInnerHTML={{ __html: parsedQuote }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default VariableContentSection;
