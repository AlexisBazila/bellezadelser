import React, { useState } from "react";
import "./AccordionMenu.css";

function AccordionMenu({ pregunta, respuesta = [], isOpen, onClick }) {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onClick}>
        {pregunta}

        <span className={`accordion-icon ${isOpen ? "open" : ""}`}>
          <i className="fa-solid fa-chevron-right"></i>
        </span>
      </div>

      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <div className="accordion-text">
          {respuesta.map((block, index) => {
            switch (block.type) {
              case "title":
                return (
                  <h4 key={index} className="accordion-block-title">
                    {block.content}
                  </h4>
                );

              case "paragraph": {
                const lines = Array.isArray(block.content)
                  ? block.content
                  : [block.content];

                return (
                  <div key={index} className="accordion-block-paragraph">
                    {lines.map((line, lineIndex) => {
                      // Compatibilidad con strings viejos
                      if (typeof line === "string") {
                        return <p key={lineIndex}>{line}</p>;
                      }

                      return (
                        <p key={lineIndex}>
                          {line.strong ? (
                            <strong>{line.text}</strong>
                          ) : (
                            line.text
                          )}
                        </p>
                      );
                    })}
                  </div>
                );
              }

              case "list":
                return (
                  <ul key={index} className="accordion-block-list">
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );

              case "quote": {
                const quoteLines = Array.isArray(block.content)
                  ? block.content
                  : [{ text: block.content }];

                return (
                  <blockquote key={index} className="accordion-block-quote">
                    {quoteLines.map((line, i) => {
                      if (typeof line === "string") {
                        return <React.Fragment key={i}>{line}</React.Fragment>;
                      }

                      return line.strong ? (
                        <strong key={i}>{line.text}</strong>
                      ) : (
                        <React.Fragment key={i}>{line.text}</React.Fragment>
                      );
                    })}
                  </blockquote>
                );
              }

              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default AccordionMenu;
