import React from "react";
import "./SesionSections.css";

function SesionSections({ title, content, variant = "light" }) {
  const renderList = (items) => {
    return (
      <ul>
        {items.map((item, i) => {
          // Caso simple: string
          if (typeof item === "string") {
            return <li key={i}>{item}</li>;
          }

          // Caso objeto: con posible sublista
          return (
            <li key={i}>
              {item.text}

              {item.children && (
                <ul className="nested-list">
                  {item.children.map((child, j) => (
                    <li key={j}>{child}</li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <section className={`sesion-section ${variant}`}>
      <div className="sesion-container">
        <h2 className="sesion-title">{title}</h2>

        <div className="sesion-content">
          {content.map((block, index) => {
            if (block.type === "paragraph") {
              return <p key={index}>{block.text}</p>;
            }

            if (block.type === "list") {
              return <div key={index}>{renderList(block.items)}</div>;
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
}

export default SesionSections;
