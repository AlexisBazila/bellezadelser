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

              case "quote":
                return (
                  <blockquote key={index} className="accordion-block-quote">
                    {block.content}
                  </blockquote>
                );

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
