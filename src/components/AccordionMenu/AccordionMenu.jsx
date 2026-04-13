import React from "react";
import "./AccordionMenu.css";

function AccordionMenu({ pregunta, respuesta, isOpen, onClick }) {
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
          {respuesta.map((linea, index) => {
            const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;

            if (emailRegex.test(linea)) {
              const email = linea.match(emailRegex)[0];
              const [before, after] = linea.split(email);

              return (
                <p key={index}>
                  {before}
                  <a href={`mailto:${email}`} className="emailLink">
                    {email}
                  </a>
                  {after}
                </p>
              );
            }

            return <p key={index}>{linea}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default AccordionMenu;
