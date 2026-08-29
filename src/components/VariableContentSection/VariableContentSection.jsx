import React from "react";
import "./VariableContentSection.css";

// Parsea el mismo formato bold[...] que usa el resto del componente,
// para que una quote manual y una automática se vean/escriban igual.
const parseQuoteText = (text) => {
  if (!text) return "";
  return text.replace(/bold\[(.*?)\]/g, "<strong>$1</strong>");
};

// Quote que podés ubicar vos mismo en cualquier punto de "children"
// (por ejemplo, entre un párrafo y un botón), en vez de depender
// de la que se agrega automáticamente al final del texto o debajo de la imagen.
//
// Uso:
//   <VariableContentSection.Quote>
//     Un método creado para atravesar lo que te desconectó de ti...
//   </VariableContentSection.Quote>
//
// También acepta el formato bold[...] vía la prop "text":
//   <VariableContentSection.Quote text="bold[Importante]: seguí así." />
function VariableContentQuote({
  children,
  text,
  italic = true,
  className = "",
}) {
  const content = text ? parseQuoteText(text) : null;

  return (
    <blockquote
      className={`VariableContentSectionQuote ${
        italic ? "quoteItalic" : ""
      } ${className}`}
      {...(content ? { dangerouslySetInnerHTML: { __html: content } } : {})}
    >
      {!content ? children : null}
    </blockquote>
  );
}

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

VariableContentSection.Quote = VariableContentQuote;

export default VariableContentSection;
