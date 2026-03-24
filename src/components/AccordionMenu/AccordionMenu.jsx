import React from "react";
import "./AccordionMenu.css";

function AccordionMenu({ pregunta, respuesta, isOpen, onClick }) {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onClick}>
        {pregunta}
        <span className={`accordion-icon ${isOpen ? "open" : ""}`}>▶</span>
      </div>

      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <p className="accordion-text">{respuesta}</p>
      </div>
    </div>
  );
}

export default AccordionMenu;
